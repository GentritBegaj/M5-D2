import express from "express";
import listEndpoints from "express-list-endpoints";
import studentsRoutes from "./students/index.js";
import cors from "cors";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json()); // we need to specify this line of code otherwise all the req bodies will be undefined. This line MUST come BEFORE the routes
server.use("/students", studentsRoutes);

console.log(listEndpoints(server));
server.listen(port, () => {
  console.log("Server is running on port ", port);
});
