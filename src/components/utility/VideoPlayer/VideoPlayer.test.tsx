import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import VideoPlayer from "./VideoPlayer";
import { describe, it, expect } from "vitest";

// Test video player behavior
describe("VideoPlayer", () => {
	const mockThumbnailURL = "https://example.com/thumbnail.jpg";
	const mockVideoURL = "https://example.com/video.mp4";

	it("renders the thumbnail and play button initially, and then displays the video after clicking play", () => {
		render(
			<VideoPlayer
				thumbnilURL={mockThumbnailURL}
				videoURL={mockVideoURL}
			/>,
		);

		// Check if the thumbnail image is in the document
		const thumbnail = screen.getByAltText("thumbnil");
		expect(thumbnail).toBeInTheDocument();

		// Check if the play button is in the document
		const playButton = screen.getByAltText("play");
		expect(playButton).toBeInTheDocument();
		// Simulate clicking the play button
		fireEvent.click(playButton);

		// Check if the correct video URL is being used in the video element
		const video = screen.getByTestId("video-player-element");
		expect(video).toHaveAttribute("src", mockVideoURL);

		// Check that thumbnail and play button are no longer in the document
		const thumbnail2 = screen.queryByAltText("thumbnil");
		const playIcon = screen.queryByAltText("play");

		expect(thumbnail2).not.toBeInTheDocument();
		expect(playIcon).not.toBeInTheDocument();
	});
});
