import { useState } from "react";
import Link from "./Link";
import { MdMenu } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";

const NavBar = () => {
    const [open, setOpen] =useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "Profile" }
    ];




    return (
        <div>

            <div className="text-2xl md:hidden px-6 " onClick={()=> setOpen(!open)}>
                {
                    open === true ? <RiCloseLargeFill />: <MdMenu className=" " />
                }
                
            </div>

            <ul className={`md:flex gap duration-1000 absolute md:static
                ${open ? 'top-8':'-top-36'
                }
                bg-sky-950 mx-8`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </div>
    );
};

export default NavBar;