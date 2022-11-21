import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import AdminRoute from './AdminRoute'
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <DisplayError />,
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/appointment',
                element: <Appointment />
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <DisplayError />,
        element: <PrivateRouter><DashboardLayout /></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`http://localhost:5001/bookings/${params.id}`),
                element: <AdminRoute><Payment /></AdminRoute>
            },
        ]
    }
])