import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import LoginScreen from "./screens/LoginScreen";
import StudentRegisterScreen from "./screens/StudentRegisterScreen";
import ResultScreen from "./screens/ResultScreen";
import DashboardScreen from "./screens/DashboardScreen";
import StaffRegisterScreen from "./screens/StaffRegisterScreen";
import StaffDashboardScreen from "./screens/StaffDashboardScreen";
function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Navbar />
					<Container>
						<Route path="/login" exact component={LoginScreen} />

						{/* Student Routes */}
						<Route path="/" exact component={DashboardScreen} />
						<Route
							path="/student-register"
							exact
							component={StudentRegisterScreen}
						/>
						<Route path="/results" exact component={ResultScreen} />

						{/* Staff Routes */}
						<Route
							path="/dashboard"
							exact
							component={StaffDashboardScreen}
						/>
						<Route
							path="/staff-register"
							exact
							component={StaffRegisterScreen}
						/>
					</Container>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
