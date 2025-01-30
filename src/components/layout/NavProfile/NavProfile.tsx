import { Spinner } from "react-bootstrap";
import styles from "./NavProfile.module.scss";
import vector from "src/assets/images/Vector.svg";

function NavProfile({
	name,
	profileImgURL,
	isLoading,
}: {
	name: string;
	profileImgURL?: string;
	isLoading: boolean;
}) {
	const fullName = name.trim();

	return (
		<button
			className={`d-flex justify-content-between align-items-center btn column-gap-2`}
			style={{ borderColor: "transparent" }}
		>
			{isLoading ? (
				<Spinner style={{ width: 40, height: 40 }} />
			) : profileImgURL?.trim() ? (
				<img
					src={profileImgURL}
					alt=""
					loading="lazy"
					width={40}
					height={40}
				/>
			) : (
				<div className={`${styles.profileBtn}`}>
					{fullName[0] ? fullName[0] : "NA"}
				</div>
			)}
			<div
				className={`${styles.profileName} text-truncate d-none d-md-block`}
				title={fullName}
			>
				{fullName}
			</div>
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
