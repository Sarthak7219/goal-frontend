import axios from "axios";
import { SERVER_URL } from "../constants/constants";

const BASE_URL = SERVER_URL;
console.log("BASE_URL:", BASE_URL);
export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const get_homepage_data = async () => {
  const response = await api.get("/homepage_data/");
  return response.data;
};

export const get_about_data = async () => {
  const response = await api.get("/about/");
  return response.data;
};

export const get_stories = async () => {
  const response = await api.get("/stories/");
  return response.data;
};

export const get_team_members = async () => {
  const response = await api.get("/team_members/");
  return response.data;
};

export const get_team_member_detail = async (id) => {
  const response = await api.post("/team_member_detail/", { id: id });
  return response.data;
};

export const get_workshops = async () => {
  const response = await api.get("/workshops/");
  return response.data;
};

export const get_workshop_detail = async (id) => {
  const response = await api.post("/workshop_detail/", { id: id });
  return response.data;
};

export const get_case_studies = async () => {
  const response = await api.get("/case_studies/");
  return response.data;
};

export const get_case_study_detail = async (id) => {
  const response = await api.post("/case_study_detail/", { id: id });
  return response.data;
};

export const get_resources = async () => {
  const response = await api.get("/resources/");
  return response.data;
};

export const get_themes = async () => {
  const response = await api.get("/themes/");
  return response.data;
};

export const get_theme_detail = async (id) => {
  const response = await api.post("/theme_detail/", { id: id });
  return response.data;
};

export const get_visit_photos = async (id, pageNum) => {
  const response = await api.post(`/gallery/visit_photos/?page=${pageNum}`, {
    id: id,
  });
  return response.data;
};
export const get_workshop_photos = async (id, pageNum) => {
  const response = await api.post(`/gallery/workshop_photos/?page=${pageNum}`, {
    id: id,
  });
  return response.data;
};

export const search = async (query) => {
  const response = await api.get(`/search/?query=${query}`);
  return response.data;
};
