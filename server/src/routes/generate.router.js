import express from "express";
import {generate, createSession, getSessions, getSessionHistory } from "../controllers/generate.controller.js";
import protect from "../middlewares/auth.middlewares.js";
const generate_router = express.Router();

generate_router.route('/generate').post(protect, generate);
generate_router.route('/session/').post(protect, createSession); // TODO: Get session details
generate_router.route('/sessions/').get(protect, getSessions); // TODO: Get all sessions for user
generate_router.route('/session/:id').get(protect, getSessionHistory); // TODO: Get session history

export default generate_router;