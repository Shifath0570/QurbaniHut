"use client"
import Image from "next/image";
import NavImage from "../../../public/asset/QurbaniHatt.png"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user;
    const handleSignOut = async () => {
        await authClient.signOut()
    }
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/all-animals">All Animals</Link></li>
                        </ul>
                    </div>
                    <Image src={NavImage} alt="nav_Icon" height={40} width={50}></Image>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/all-animals">All Animals</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user &&
                        <div className="space-x-2">
                            <Link href='/signup'>
                                <button className="btn">SignUp</button>
                            </Link>
                            <Link href='/signin'>
                                <button className="btn">SignIn</button>
                            </Link>
                        </div>
                    }
                    {
                        user && <div className="flex gap-3">
                            <Link href="/profile">
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user?.name[0].charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </Link>
                            <Button onClick={handleSignOut} variant="danger">SignOut</Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;