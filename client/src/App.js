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
function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Navbar />
					<Container>
						<Route path="/login" component={LoginScreen} />
						<Route
							path="/student-register"
							component={StudentRegisterScreen}
						/>
						<Route
							path="/staff-register"
							component={StaffRegisterScreen}
						/>
						<Route path="/results" component={ResultScreen} />
						<Route path="/" exact component={DashboardScreen} />
					</Container>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
