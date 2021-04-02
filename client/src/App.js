import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/Container";
import LoginScreen from "./screens/LoginScreen";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container>
                <LoginScreen />
            </Container>
        </BrowserRouter>
    );
}

export default App;
