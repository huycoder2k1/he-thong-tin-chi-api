import {
    getAllCertificates,
    getCertificateById,
    createCertificate,
    updateCertificate,
    deleteCertificate,
  } from '../models/certificateModel.js';
  
  export const fetchAllCertificates = async () => {
    return await getAllCertificates();
  };
  
  export const fetchCertificateById = async (certificate_id) => {
    const certificate = await getCertificateById(certificate_id);
    if (!certificate) {
      throw new Error('Chứng chỉ không tồn tại');
    }
    return certificate;
  };
  
  export const addCertificate = async (certificateData) => {
    return await createCertificate(certificateData);
  };
  
  export const modifyCertificate = async (certificate_id, certificateData) => {
    const updatedRows = await updateCertificate(certificate_id, certificateData);
    if (updatedRows === 0) {
      throw new Error('Chứng chỉ không tồn tại');
    }
    return updatedRows;
  };
  
  export const removeCertificate = async (certificate_id) => {
    const deletedRows = await deleteCertificate(certificate_id);
    if (deletedRows === 0) {
      throw new Error('Chứng chỉ không tồn tại');
    }
    return deletedRows;
  };
  