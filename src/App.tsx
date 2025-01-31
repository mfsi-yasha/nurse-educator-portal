import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "src/globals/queryClient";
import Layout from "src/Layout";
import Home from "./pages/Home/Home";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Home />
			</Layout>
		</QueryClientProvider>
	);
}

export default App;
