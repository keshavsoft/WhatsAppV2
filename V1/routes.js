import express from 'express';

const router = express.Router();

import { router as routerFrommobiles } from "./mobiles/routes.js";

router.use("/mobiles", routerFrommobiles);

export { router };