import apiConfig from "@/config/apiConfig";
import axios from "axios";
import { ServicesResponse } from "@/types";

export const getAllServices = async (): Promise<ServicesResponse> => {
  try {
    const response = await axios.get(`${apiConfig.baseURL}content/software-development/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

