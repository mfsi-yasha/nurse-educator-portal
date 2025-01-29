import { useMemo } from "react";
import styles from "./NavProfile.module.scss";
import vector from "src/assets/images/Vector.svg";

function NavProfile() {
	const { name } = useMemo(() => {
		return { name: "Martin" };
	}, []);

	return (
		<button
			className={`d-flex justify-content-between align-items-center btn column-gap-2`}
			style={{ borderColor: "transparent" }}
		>
			<div className={`${styles.profileBtn}`}>{name[0] ? name[0] : "NA"}</div>
			<div className={`${styles.profileName} d-none d-md-flex`}>{name}</div>
			<img
				src={vector}
				alt=""
				loading="lazy"
				width={10}
				height={6}
				className="d-none d-md-block"
			/>
		</button>
	);
}

export default NavProfile;
