import API from "../api/http";

export const retrive = () => API.get("/list");
export const retriveById = (id: string) => API.get(`/detail/${id}`);
