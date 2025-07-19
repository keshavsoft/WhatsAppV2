import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromValueByKey } from "./2.ValueByKey/routes.js";
import { router as routerFromGroupSingleColLength } from "../GroupBy/SingleColLength/routes.js";
import { router as routerFromGroupSingleColumn } from "../GroupBy/1.SingleColumn/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/ValueByKey", routerFromValueByKey);

router.use("/GroupSingleColLength", routerFromGroupSingleColLength);
router.use("/GroupSingleColumn", routerFromGroupSingleColumn);

export { router };