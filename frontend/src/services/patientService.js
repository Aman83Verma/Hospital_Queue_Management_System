import api from "./api";

export const registerPatient = async (data) => {
  const res = await api.post("/patients/register", data);
  return res.data;
};

export const getQueueStatus = async () => {
  const res = await api.get("/patients/status");
  return res.data;
};

export const serveNextPatient = async () => {
  const res = await api.post("/patients/serve");
  return res.data;
};

export const serveMultiplePatients = async (doctorsAvailable) => {
  const res = await api.post("/patients/serve-multiple", {
    doctorsAvailable,
  });
  return res.data;
};
