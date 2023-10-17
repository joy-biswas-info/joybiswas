import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

const GuestNavigation = () => {
    return (
        <nav className="flex items-center justify-between mt-6">
            <div className="logo">
                <Link>
                    <ApplicationLogo className=''></ApplicationLogo>
                </Link>
            </div>
            <div className="navigation">
                <ul className="text-lg font-bold ">
                    <li className="inline-block mx-2">
                        <NavLink active='/' href='/'> Home</NavLink>
                    </li>
                    <li className="inline-block mx-2"><NavLink href="#" className="menu-item">About</NavLink> </li>
                    <li className="inline-block mx-2"><NavLink href="#" className="menu-item">Portfolio</NavLink> </li>
                    <li className="inline-block mx-2"><NavLink href="#" className="menu-item">Service</NavLink> </li>
                    <li className="inline-block mx-2"><NavLink href="#" className="menu-item">Contact</NavLink></li>
                    <li className="inline-block mx-2"><NavLink href="#" className="menu-item">Blog</NavLink></li>
                    <li className="inline-block mx-2">
                        <button className="btn bg-orange-600 text-white px-6 py-2 rounded-full">Download Resume</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default GuestNavigation;