
'use client';

import { useAppDispatch, useAppSelector } from "../lib/hooks"
import Link from "next/link";

export const Navbar = () => {
    

    return (
        
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-xl">
                    daisyUI
                </Link>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal lg:menu-lg md:menu-md rounded-box hidden lg:flex">
                    <li className="mx-5">
                        <Link href="/">
                            Blog
                        </Link>
                    </li>
                    <li className="mx-5">
                        <Link href="/takehome">
                            Takehomes
                        </Link>
                    </li>
                    <li className="mx-5">
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
            <details className="dropdown dropdown-end">
                <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </summary>
                <ul
                    tabIndex={0}
                    className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <Link href="/">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/takehome">
                            Takehomes
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                </ul>
                </details>
            </div>
        </div>
        
    )
}