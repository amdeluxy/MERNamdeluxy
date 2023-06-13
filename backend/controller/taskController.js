import Project from "../models/Projects.js";
import Task from "../models/Task.js";

const addTask = async (req, res) => {
  const { project } = req.body;

  const existsProject = await Project.findById(project);

  if (!existsProject) {
    const error = new Error("The Project no Found");
    return res.status(404).json({ msg: error.message });
  }

  if (existsProject.creator.toString() !== req.user._id.toString()) {
    const error = new Error("You do not have the permissions to add tasks.");
    return res.status(403).json({ msg: error.message });
  }

  try {
    const storedTask = await Task.create(req.body);
    // Almacenar el ID en el proyecto
    existsProject.task.push(storedTask._id);
    await existsProject.save();
    res.json(storedTask);
  } catch (error) {
    console.log(error);
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task no Found");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid Action");
    return res.status(403).json({ msg: error.message });
  }

  res.json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task no Found");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Invalid Action");
    return res.status(403).json({ msg: error.message });
  }

  task.name = req.body.name || task.name;
  task.description = req.body.description || task.description;
  task.priority = req.body.priority || task.priority;
  task.deadline = req.body.deadline || task.deadline;

  try {
    const storedTask = await task.save();
    res.json(storedTask);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task no Found");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(403).json({ msg: error.message });
  }

  try {
    const project = await Project.findById(task.project);
    project.tareas.pull(task._id);
    await Promise.allSettled([await project.save(), await task.deleteOne()]);
    res.json({ msg: "The Task is deleted" });
  } catch (error) {
    console.log(error);
  }
};

const changeStatus = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task no Found");
    return res.status(404).json({ msg: error.message });
  }

  if (
    task.project.creator.toString() !== req.user._id.toString() &&
    !task.project.collaborators.some(
      (collaborators) => collaborators._id.toString() === req.user._id.toString()
    )
  ) {
    const error = new Error("Invalid Action");
    return res.status(403).json({ msg: error.message });
  }

  task.status = !task.status;
  task.complete = req.user._id;
  await task.save();

  const storedTask = await Tarea.findById(id)
    .populate("project")
    .populate("complete");

  res.json(storedTask);
};

export {
  addTask,
  getTask,
  updateTask,
  deleteTask,
  changeStatus,
};
