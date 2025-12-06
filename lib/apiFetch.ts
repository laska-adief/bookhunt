import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";

export async function apiFetch<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axiosInstance.request({
      url,
      ...options,
    });
    return response.data as T;
  } catch (error) {
    throw error;
  }
}
