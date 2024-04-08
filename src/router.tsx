import DetailPage from "./pages/Detail";
import Home from "./pages/Home";
import Admin from "./Layout/Admin";
import { createBrowserRouter } from "react-router-dom";
import ListTrip from "./pages/Admin/trips";
import BusHouse from "./pages/Admin/BusHouse/index";
import FormAdmin from "./pages/Admin/trips/add";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddBusHouse from "./pages/Admin/BusHouse/addBusHouse";
import UpdateTrips from "./pages/Admin/trips/update";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "detail",
        element: <DetailPage />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "admin",
        element: <Admin />,
        children: [
            {
                path: "",
                element: <h1>Trang chủ</h1>,
            },
            {
                path: "trips",
                element: <ListTrip />,
            },
            {
                path: "busHouse",
                element: <BusHouse />,
            },
            {
                path: "addBusHouse",
                element: <AddBusHouse />,
            },
            {
                path: "add",
                element: <FormAdmin />,
            },
            {
                path: "update/:id",
                loader: async ({ params }) => {
                    try {
                        const response = await fetch(`http://localhost:3000/trips/${params.id}`);
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        const data = await response.json();
                        return data.data;
                    } catch (error) {
                        console.log(error);
                    }
                },
                element: <UpdateTrips />,
            },
        ],
    },
]);

export default routes;
