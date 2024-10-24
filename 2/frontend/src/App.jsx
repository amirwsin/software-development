import {createBrowserRouter} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";

const App = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/login",
                    element: <Login/>,
                },
            ],
            errorElement: <Error/>
        },
    ]
);


export default App