import NavBar, { NavBarButton } from "src/components/layout/NavBar/NavBar";
import CoBG from "src/components/layout/CoBG/CoBG";
import NavProfile from "src/components/layout/NavProfile/NavProfile";
import useProfile from "./hooks/user/useProfile";

function Layout({ children }: { children: React.ReactNode }) {
	const { profileData, profileFetchStatus } = useProfile();

	const profile = (
		<NavProfile
			name={profileData?.name ?? ""}
			profileImgURL={profileData?.profileImgURL}
			isLoading={profileFetchStatus === "pending"}
		/>
	);

	return (
		<div>
			<NavBar profile={profile}>
				<NavBarButton
					text={"Home"}
					isActive={true}
				/>
				<NavBarButton text={"FAQ"} />
				<NavBarButton text={"Help"} />
			</NavBar>
			<CoBG />

			{/* Main Content */}
			<div className="container-global container-fluid">{children}</div>
		</div>
	);
}

export default Layout;
