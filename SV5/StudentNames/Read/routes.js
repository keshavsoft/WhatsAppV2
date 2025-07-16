import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromRowDataWithPk } from "./2.RowDataWithPk/routes.js";
import { router as routerFromSelColsAsArray } from "./3.SelColsAsArray/routes.js";
import { router as routerFromSelColumns } from "./4.SelColumns/routes.js";
import { router as routerFromSingleColumn } from "./5.SingleColumn/routes.js";

import { router as routerFromGroupSingleColLength } from "../GroupBy/SingleColLength/routes.js";
import { router as routerFromGroupSingleColumn } from "../GroupBy/1.SingleColumn/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/SelColsAsArray", routerFromSelColsAsArray);
router.use("/SelColumns", routerFromSelColumns);
router.use("/SingleColumn", routerFromSingleColumn);

router.use("/GroupSingleColLength", routerFromGroupSingleColLength);
router.use("/GroupSingleColumn", routerFromGroupSingleColumn);

export { router };