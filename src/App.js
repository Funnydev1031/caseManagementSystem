import { ConfigProvider } from "antd";
import AppLayout from "./modules/layout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Cases = lazy(() =>
	import("./modules/cases/index.js").then(({ Cases }) => ({
		default: Cases,
	})),
);

function App() {
	return (
		<ConfigProvider theme={{ token: { colorPrimary: "#2264E5" } }}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/:status?"
						element={
							<AppLayout>
								<Suspense fallback={<div>Loading ...</div>}>
									<Cases />
								</Suspense>
							</AppLayout>
						}
					/>
				</Routes>{" "}
			</BrowserRouter>
		</ConfigProvider>
	);
}

export default App;
