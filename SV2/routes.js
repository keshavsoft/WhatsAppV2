import express from 'express';

const router = express.Router();

import { router as routerFromStudentNames } from "./StudentNames/routes.js";

router.use("/StudentNames", routerFromStudentNames);

export { router };