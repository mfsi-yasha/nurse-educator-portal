import { axiosJSON, SuccessResponse } from "src/globals/axiosInstances";

export interface DashboardService {
	id: string;
	serviceType: "requestConsultation" | "setupReminder";
	title: string;
	description: string;
}

export interface ChatWithUsI {
	operatingHoursStart: string;
	operatingHoursEnd: string;
	timezone: string;
}

export interface DashboardContent {
	description: string;
	services: Array<DashboardService>;
	chatWithUs: ChatWithUsI;
}

export default async function () {
	const { data: res } = await axiosJSON.get<SuccessResponse<DashboardContent>>(
		"/home/dashboard.json",
	);
	if (res.err) {
		throw new Error(res.message ?? "Something went wrong!");
	} else {
		return res.data;
	}
}
