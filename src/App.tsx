import { Container } from "react-bootstrap";
import NavBar from "src/layout/NavBar/NavBar";
import CoBG from "./components/CoBG/CoBG";

function App() {
	return (
		<div>
			{/* Navbar */}
			<NavBar />
			<CoBG />

			{/* Main Content */}
			<Container
				fluid
				className="container-global"
				style={{ height: "200vh" }}
			></Container>
		</div>
	);
}

export default App;
