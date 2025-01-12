import {
    fetchAllCertificates,
    fetchCertificateById,
    addCertificate,
    modifyCertificate,
    removeCertificate,
  } from '../services/certificateService.js';
  import { validateCertificate } from '../validations/certificateValidation.js';
  
  export const getAllCertificates = async (req, res) => {
    try {
      const certificates = await fetchAllCertificates();
      res.status(200).json(certificates);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getCertificateById = async (req, res) => {
    try {
      const { certificate_id } = req.params;
      const certificate = await fetchCertificateById(certificate_id);
      res.status(200).json(certificate);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  export const createCertificate = async (req, res) => {
    try {
      validateCertificate(req.body);
      const certificateId = await addCertificate(req.body);
      res.status(201).json({ message: 'Tạo chứng chỉ thành công', certificateId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const updateCertificate = async (req, res) => {
    try {
      validateCertificate(req.body);
      const { certificate_id } = req.params;
      await modifyCertificate(certificate_id, req.body);
      res.status(200).json({ message: 'Cập nhật chứng chỉ thành công' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteCertificate = async (req, res) => {
    try {
      const { certificate_id } = req.params;
      await removeCertificate(certificate_id);
      res.status(200).json({ message: 'Xóa chứng chỉ thành công' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  