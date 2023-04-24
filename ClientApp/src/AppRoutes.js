import { Home } from "./components/Home";
import { Register } from "./components/Register/Register"

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/signUp',
        element: <Register />
    }
];

export default AppRoutes;
