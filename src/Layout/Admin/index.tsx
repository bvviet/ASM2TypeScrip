import Header from "../../Layout/Header";
import NavAdmin from "../../components/navAdmin";
import { Outlet } from "react-router-dom";

function Admin() {
    return (
        <div className="">
            <Header />
            <div className="max-w-[1440px] flex ml-auto mr-auto">
                <NavAdmin />
                <div className=" flex-1">
                    {/* <h1 className="text-center text-[40px] text-[#000000] font-semibold mt-5">Thêm mới chuyến xe</h1> */}
                    <div className="flex flex-col items-center">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
