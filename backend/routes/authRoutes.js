import express from 'express'
import { getUserProfile, loginUser, registerUser, updateUserProfile } from '../controllers/authController.js';

import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

import dotenv from 'dotenv'
dotenv.config();

const SERVER_BASE_URL = process.env.BASE_URL;

const router = express.Router();

// Auth Routes
router.post('/register', registerUser);  // Register User
router.post('/login', loginUser);  // Login User
router.get('/profile', protect, getUserProfile);  // Get User Profile
router.put('/profile', protect, updateUserProfile);  // Update User Profile

router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `${SERVER_BASE_URL}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
});

export default router;