import { useState } from "react";
import styles from "./NavBar.module.scss";
import headingImg from "src/assets/images/ConnectPatient.svg";
import menuImg from "src/assets/images/Menu.svg";

export function NavBarButton({
	text,
	isActive = false,
	className,
	...props
}: {
	text: string;
	isActive?: boolean;
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	return (
		<button
			className={`btn ${styles.navButton} ${isActive ? styles.active : ""} ${className ?? ""}`}
			{...props}
		>
			{text}
		</button>
	);
}

function NavBar({
	children,
	profile,
}: {
	children: React.ReactNode;
	profile: React.ReactNode;
}) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div
			className={`${styles.navbar} w-100 px-4 d-flex justify-content-between align-items-center`}
		>
			<img
				src={headingImg}
				alt=""
				loading="lazy"
				width={217}
				height={24}
				className={`${styles.headingIMG}`}
			/>
			<div className="d-flex column-gap-2 column-gap-md-5">
				<div
					className={`${styles.navMenu} ${showMenu ? styles.activeMenu : ""} d-md-flex flex-row flex-md-col gap-1 me-md-5`}
				>
					{children}
				</div>
				<button
					className="btn d-flex d-md-none justify-content-center align-items-center"
					style={{ borderColor: "transparent" }}
					onClick={() => {
						setShowMenu(v => !v);
					}}
				>
					<img
						src={menuImg}
						alt=""
						loading="lazy"
						width={24}
						height={24}
					/>
				</button>
				{profile}
			</div>
		</div>
	);
}

export default NavBar;
