import { Link } from "react-router-dom";
function NavAdmin() {
    return (
        <nav className="w-[373px] h-auto border border-[#000] bg-[#F2F2F2]">
            <ul className="flex flex-col items-center">
                <li className="w-[352px] h-[65px] mt-3 bg-[#DADADA] rounded-[10px] flex items-center justify-center">
                    <a href="/admin" className="text-[23.2px] font-semibold">
                        Dashboard
                    </a>
                </li>
                <li className="w-[352px] h-[65px] mt-3 bg-[#DADADA] rounded-[10px] flex items-center justify-center">
                    <a href="#" className="text-[23.2px] font-semibold">
                        Lịch sử chuyến
                    </a>
                </li>
                <li className="w-[352px] h-[65px] mt-3 bg-[#DADADA] rounded-[10px] flex items-center justify-center">
                    <Link to="/admin/trips" className="text-[23.2px] font-semibold">
                        Chuyến xe
                    </Link>
                </li>
                <li className="w-[352px] h-[65px] mt-3 bg-[#DADADA] rounded-[10px] flex items-center justify-center">
                    <Link to="/admin/busHouse" className="text-[23.2px] font-semibold">
                        Nhà xe
                    </Link>
                </li>
                <li className="w-[352px] h-[65px] mt-3 bg-[#DADADA] rounded-[10px] flex items-center justify-center">
                    <Link to="/admin/addBusHouse" className="text-[23.2px] font-semibold">
                        Thêm nhà xe
                    </Link>
                </li>
                <li className="w-[352px] h-[65px] mt-3 bg-[#DADADA] rounded-[10px] flex items-center justify-center">
                    <Link to="/admin/add" className="text-[23.2px] font-semibold">
                        Thêm chuyến xe
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavAdmin;
