import express from 'express';

const router = express.Router();

import { router as routerFromSingleColLength } from "./SingleColLength/routes.js";
import { router as routerFromSingleColumn } from "./1.SingleColumn/routes.js";

router.use("/SingleColLength", routerFromSingleColLength);
router.use("/SingleColumn", routerFromSingleColumn);

export { router };