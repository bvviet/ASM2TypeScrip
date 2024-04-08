import Button from "../../components/butoon";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="bg-[#2474E5] w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[4.5rem] flex items-center justify-between">
                <div className="logo">
                    <a href="/">
                        <img
                            className="h-8"
                            src="https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg"
                            alt=""
                        />
                    </a>
                </div>
                <Navbar />
                <div className="hidden sm:flex gap-6">
                    <Link to="register">
                        <Button title="Đăng kí" />
                    </Link>
                    <Link to="login">
                        <Button title="Đăng nhập" />
                    </Link>
                </div>
                {/* Responsive Navbar */}
                <div className="sm:hidden">
                    <button className="text-white p-2 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
