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
					alt=""
					width={581}
					height={306}
					loading="lazy"
				/>
			)}
			{showVideo && (
				<video
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
					alt=""
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
