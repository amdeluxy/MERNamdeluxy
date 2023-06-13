import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectDb from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"



const app = express();
app.use(express.json());

dotenv.config();

conectDb();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

//Routing 
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/task', taskRoutes);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`Server stared on Port ${PORT}`);
});

// Socket.io
import { Server } from "socket.io";

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on("connection", (socket) => {
    // console.log("Conectado a socket.io");
  
    // Definir los eventos de socket io
    socket.on("open project", (project) => {
      socket.join(project);
    });
  
    socket.on("new task", (task) => {
      const project = task.project;
      socket.to(project).emit("task add", task);
    });
  
    socket.on("Delete Task", (task) => {
      const project = task.project;
      socket.to(project).emit("Task Deleted", task);
    });
  
    socket.on("update task", (task) => {
      const project = task.proyecto._id;
      socket.to(project).emit("task updated", task);
    });
  
    socket.on("change status", (task) => {
      const project = task.project._id;
      socket.to(project).emit("status changed", task);
    });
  });
