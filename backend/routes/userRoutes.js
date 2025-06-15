import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddleware.js";
import { deleteUser, getUserById, getUsers } from "../controllers/userController.js";

const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers); // Get all users (Admin only)
router.get("/:id", protect, getUserById); // Get user by ID
router.delete("/:id", protect, adminOnly, deleteUser); // Delete user (Admin only)

export default router;