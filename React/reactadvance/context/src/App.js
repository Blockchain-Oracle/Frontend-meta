import "./App.css";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
    const { user } = useUser();
    return (
        <p>
            Hello <span className="Username">{user.name}</span>
        </p>
    );
};

const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    );
};

const Page = () => {
    return (
        <div>
            <h2>What is Lorem Ipsum?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Header />
            <Page />
        </div>
    );
}

function Root() {
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
}

export default Root;
