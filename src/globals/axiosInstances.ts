import axios from "axios";

export interface SuccessResponse<T> {
	err: boolean;
	message: string;
	data: T;
}

export const axiosJSON = axios.create({
	baseURL: "/api",
	headers: { "Content-Type": "application/json" },
});
