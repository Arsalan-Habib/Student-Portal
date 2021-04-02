import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
    return (
        <Router>
            <Navbar />
            <Container>
                <Route path='/login' component={LoginScreen} />
                <Route path='/register' component={RegisterScreen} />
            </Container>
        </Router>
    );
}

export default App;
