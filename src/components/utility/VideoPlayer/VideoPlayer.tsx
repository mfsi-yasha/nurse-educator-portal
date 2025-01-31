import { useState } from "react";
import styles from "./VideoPlayer.module.scss";
import play from "src/assets/images/Play.svg";

function VideoPlayer({
	thumbnilURL,
	videoURL,
}: {
	thumbnilURL: string;
	videoURL: string;
}) {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className={`${styles.player}`}>
			{!showVideo && (
				<img
					src={thumbnilURL}
					alt="thumbnil"
					width={581}
					height={306}
					loading="lazy"
				/>
			)}
			{showVideo && (
				<video
					data-testid="video-player-element"
					src={videoURL}
					width={581}
					height={306}
					controls={true}
					autoPlay={true}
				/>
			)}
			{!showVideo && (
				<img
					className={`${styles.playPauseIcon}`}
					src={play}
					alt="play"
					width={63}
					height={63}
					loading="lazy"
					onClick={() => {
						setShowVideo(true);
					}}
				/>
			)}
		</div>
	);
}

export default VideoPlayer;
