import express from "express";
import {    getProjects,
            newProyect,
            getProject,
            editProject,
            deleteProject,
            searchCollaborator,
            addCollaborators,
            deleteCollaborators,
        } from "../controller/projectController.js";

import checkAuth from "../middleware/checkAuth.js";

getProject
const router = express.Router();

router
  .route("/")
  .get(checkAuth, getProjects)
  .post(checkAuth, newProyect);

router
  .route("/:id")
  .get(checkAuth, getProject)
  .put(checkAuth, editProject)
  .delete(checkAuth, deleteProject);

router.post("/Collaborators", checkAuth, searchCollaborator);
router.post("/Collaborators/:id", checkAuth, addCollaborators);
router.post("/delete-Collaborator/:id", checkAuth, deleteCollaborators);

export default router;