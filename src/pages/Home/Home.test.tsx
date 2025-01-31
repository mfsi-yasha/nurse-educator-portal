import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Layout", () => {
	it("Should render Hi in the element `div > div`", () => {
		render(
			<QueryClientProvider client={new QueryClient()}>
				<Home />
			</QueryClientProvider>,
		);

		const a = screen.getByTestId("dashboard-element");
		expect(a).toBeInTheDocument();

		const b = screen.getByTestId("gettingStarted");
		fireEvent.click(b);

		const c = screen.getByTestId("getting-started-element");
		expect(c).toBeInTheDocument();
	});
});
