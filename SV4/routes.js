import express from 'express';

const router = express.Router();

import { router as routerFrommobiles } from "./mobiles/routes.js";
import { router as routerFromStudentNames } from "./StudentNames/routes.js";

router.use("/mobiles", routerFrommobiles);
router.use("/StudentNames", routerFromStudentNames);

export { router };