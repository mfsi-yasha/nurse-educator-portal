import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";
import { describe, it, expect } from "vitest";
import { useState } from "react";
import styles from "./Tabs.module.scss";

// Wrapper component to manage activeTab state in the test
function TabsWrapper({ tabs }: { tabs: Array<{ text: string; key: string }> }) {
	const [activeTab, setActiveTab] = useState("tab1");

	return (
		<Tabs
			tabs={tabs}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
		/>
	);
}

describe("Tabs", () => {
	const mockTabs = [
		{ text: "Tab 1", key: "tab1" },
		{ text: "Tab 2", key: "tab2" },
	];

	it("renders the tabs correctly and changes active tab on click", () => {
		render(<TabsWrapper tabs={mockTabs} />);

		const tab1 = screen.getByTestId("tab1");
		const tab2 = screen.getByTestId("tab2");

		// Check if tabs are rendered
		expect(tab1).toBeInTheDocument();
		expect(tab2).toBeInTheDocument();

		// Check that Tab 1 is initially active
		expect(tab1).toHaveClass(styles.active);
		expect(tab2).not.toHaveClass(styles.active);

		// Simulate clicking Tab 2
		fireEvent.click(tab2);

		// Check that Tab 2 is now active
		expect(tab2).toHaveClass(styles.active);

		// Tab 1 should not be active anymore
		expect(tab1).not.toHaveClass(styles.active);
	});
});
