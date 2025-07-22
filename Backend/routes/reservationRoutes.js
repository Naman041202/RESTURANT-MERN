import express from "express";
import {
  getAllReservation,
  createReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const reservationRouter = express.Router();

reservationRouter.post("/create", createReservation);
reservationRouter.get("/get", getAllReservation);
reservationRouter.delete("/delete/:id", deleteReservation);

export default reservationRouter;
