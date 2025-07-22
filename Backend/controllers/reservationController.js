import reservationModel from "../models/reservationModel.js";

const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, guest } = req.body;

    if (!name || !email || !phone || !date || !time || !guest) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newReservation = new reservationModel({
      name,
      email,
      phone,
      date,
      time,
      guest,
    });
    await newReservation.save();

    res.json({ success: true, message: "Reservation created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getAllReservation = async (req, res) => {
  try {
    const reservations = await reservationModel.find();
    res.json(reservations);
  } catch (error) {
    res.json({ message: "error fetching reservations " });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await reservationModel.findByIdAndDelete(id);
    res.json({ message: "Reservation Removed" });
  } catch (error) {
    res.json({ error: "Error deleting" });
  }
};

export { createReservation, deleteReservation, getAllReservation };
