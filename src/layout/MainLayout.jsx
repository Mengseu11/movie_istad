import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import CardRightSide from "../components/CardRightSide";

export default function MainLayout() {
    return (
        <>
            <AppNavbar/>
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <Outlet/>
                </div>
                <div className="col-span-4">
                    <CardRightSide/>
                </div>
            </div>
            <Footer/>
        </>
    )
}