import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResultScreen from "./screens/ResultScreen";
function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Navbar />
                    <Container>
                        <Route path='/login' component={LoginScreen} />
                        <Route path='/register' component={RegisterScreen} />
                        <Route path='/results' component={ResultScreen} />
                    </Container>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
