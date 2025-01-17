import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import treeData from "../data/treeData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(treeData);
});

router.get("/:treeCode", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../../client/tree.html"));
});

export default router;
