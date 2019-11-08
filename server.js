const express = require("express");
const helmet = require("helmet");

const ProjectRoute = require("./project/project-route.js");
const ResourceRoute = require("./resource/resource-route.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/project", ProjectRoute);
server.use("/api/resource", ResourceRoute);

module.exports = server;