import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
	it("Should render text in the h1 tag", () => {
		render(<App />);
		const a = screen.getByText("Nurse Educator Portal");
		expect(a).toBeInTheDocument();
	});
});
