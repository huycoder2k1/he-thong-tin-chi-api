import express from 'express';
import {
  getAllCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} from '../controllers/certificateController.js';

const router = express.Router();

router.get('/certificates', getAllCertificates);

router.get('/certificates/:certificate_id', getCertificateById);

router.post('/certificates', createCertificate);

router.put('/certificates/:certificate_id', updateCertificate);

router.delete('/certificates/:certificate_id', deleteCertificate);

export default router;
