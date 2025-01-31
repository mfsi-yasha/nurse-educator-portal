import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Layout", () => {
	it("Should render Hi in the element `div > div`", () => {
		render(
			<QueryClientProvider client={new QueryClient()}>
				<Layout>Hi</Layout>
			</QueryClientProvider>,
		);
		const a = screen.getByTestId("container-element");
		expect(a.textContent).toBe("Hi");
	});
});
