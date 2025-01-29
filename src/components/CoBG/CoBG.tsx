import styles from "./CoBG.module.scss";
import bgco from "src/assets/images/BGCo.svg";

function CoBG() {
	return (
		<div className={`${styles.cobg} d-flex justify-content-center`}>
			<img
				src={bgco}
				alt=""
				loading="lazy"
				width={630.61}
				height={416.69}
			/>
		</div>
	);
}

export default CoBG;
