
import Project from "../models/Projects.js";
import Users from "../models/Users.js";


const getProjects = async (req, res) => {
  const project = await Project.find({
    $or: [
      { collaborators: { $in: req.user } },
      { creator: { $in: req.user } },
    ],
  }).select("-tags");
  res.json(project);
};

const newProyect = async (req, res) => {
  const project = new Project(req.body);
  project.creator = req.user._id;

  try {
    const storedProject = await project.save();
    res.json(storedProject);
  } catch (error) {
    console.log(error);
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id)
    .populate({
      path: "task",
      populate: { path: "complet", select: "name" },
    })
    .populate("collaborators", "name email");

  if (!project) {
    const error = new Error("No Found");
    return res.status(404).json({ msg: error.message });
  }

  if (
    project.creator.toString() !== req.user._id.toString() &&
    !project.collaborators.some(
      (collaborators) => collaborators._id.toString() === req.user._id.toString()
    )
  ) {
    const error = new Error("Invalid Action");
    return res.status(401).json({ msg: error.message });
  }

  res.json(project);
};

const editProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("No Found");
    return res.status(404).json({ msg: error.message });
  }

  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid Action");
    return res.status(401).json({ msg: error.message });
  }

  project.name = req.body.name || project.name;
  project.description = req.body.description || project.description;
  project.deadline = req.body.deadline || project.deadline;
  project.customer = req.body.customer || project.customer;

  try {
    const storedProject = await project.save();
    res.json(storedProject);
  } catch (error) {
    console.log(error);
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    const error = new Error("No Found");
    return res.status(404).json({ msg: error.message });
  }

  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid Action");
    return res.status(401).json({ msg: error.message });
  }

  try {
    await project.deleteOne();
    res.json({ msg: "Deleted Project" });
  } catch (error) {
    console.log(error);
  }
};

const searchCollaborator = async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ email }).select(
    "-confirmed -createdAt -password -token -updatedAt -__v "
  );

  if (!user) {
    const error = new Error("User no Found");
    return res.status(404).json({ msg: error.message });
  }

  res.json(user);
};

const addCollaborators = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    const error = new Error("Project no found");
    return res.status(404).json({ msg: error.message });
  }

  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid Action");
    return res.status(404).json({ msg: error.message });
  }

  const { email } = req.body;
  const user = await Users.findOne({ email }).select(
    "-confirmed -createdAt -password -token -updatedAt -__v "
  );

  if (!user) {
    const error = new Error("User no Found");
    return res.status(404).json({ msg: error.message });
  }

  // El colaborador no es el admin del proyecto
  if (project.creator.toString() === user._id.toString()) {
    const error = new Error("The Project creator cannot be a collaborator");
    return res.status(404).json({ msg: error.message });
  }

  // Revisar que no este ya agregado al proyecto
  if (project.collaborators.includes(user._id)) {
    const error = new Error("Collaborator added to Project");
    return res.status(404).json({ msg: error.message });
  }

  // Esta bien, se puede agregar
  project.collaborators.push(user._id);
  await project.save();
  res.json({ msg: "Collaborator added Successfully" });
};

const deleteCollaborators = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    const error = new Error("Project no Found");
    return res.status(404).json({ msg: error.message });
  }

  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid Action");
    return res.status(404).json({ msg: error.message });
  }

  // Esta bien, se puede eliminar
  project.collaborators.pull(req.body.id);
  await project.save();
  res.json({ msg: "Collaborator deleted Successfully" });
};

export {
  getProjects,
  newProyect,
  getProject,
  editProject,
  deleteProject,
  searchCollaborator,
  addCollaborators,
  deleteCollaborators,
};