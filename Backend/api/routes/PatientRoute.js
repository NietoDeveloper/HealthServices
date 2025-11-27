import express from 'express';
import { registerPatient, loginPatient, getAllPatients, deletePatient } from '../controllers/PatientController.js';

const router = express.Router();

router.post('/register', registerPatient);

router.post('/login', loginPatient);

router.get("/get-patients", getAllPatients);

router.post("/delete-patient", deletePatient);

export default router;
