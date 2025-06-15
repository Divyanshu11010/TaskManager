import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddleware.js";
import { exportTasksReport, exportUsersReport } from "../controllers/reportController.js";

const router = express.Router();

router.get("/export/tasks", protect, adminOnly, exportTasksReport); // Exports tasks as excel/pdf
router.get("/export/users", protect, adminOnly, exportUsersReport); // Exports user-task report

export default router;