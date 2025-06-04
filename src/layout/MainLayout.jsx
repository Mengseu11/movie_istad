import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";


export default function MainLayout() {
    return (
        <>
            <Home/>
        </>
    )
}