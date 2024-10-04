"use client"
import React, { useState } from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'


// for Components
import { NavLinkbutton } from '@/app/Components/buttons/buttons'

// for React Icons
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineCloseFullscreen } from "react-icons/md";


interface NavLinksTypes {
    LinkText: string,
    LinkTo: string,
}

const NavLinks: NavLinksTypes[] = [
    {
        LinkText: "Home",
        LinkTo: "",
    }, {
        LinkText: "About",
        LinkTo: "",
    }, {
        LinkText: "Products",
        LinkTo: "",
    }, {
        LinkText: "Contact",
        LinkTo: "",
    },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleSlider = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={styles.Navbar}>
            <Link href={""}>
                <img src="/assets/logo.png" alt="" />
            </Link>

            <div className={styles.NavLinks}>
                {
                    NavLinks.map((I) => (
                        <div key={I.LinkTo}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>

            <div className={styles.NavLinksLoginButton}>
                <NavLinkbutton
                    LinkText='Login'
                    LinkTo=''
                />
            </div>



            {/*  */}
            <FaBarsStaggered
                className={styles.HamburgerIcon}
                onClick={toggleSlider}
            />

            <div className={`${styles.Slider}  ${isOpen ? styles.Open : ''}`}>
                <div className={styles.SliderContent}>
                    <MdOutlineCloseFullscreen
                        className={styles.CloseIcon}
                        onClick={toggleSlider}
                    />
                    <Link href={""}>
                        <img src="/assets/logo.png" className={styles.Logo} alt="" />
                    </Link>
                    {
                        NavLinks.map((I) => (
                            <div key={I.LinkTo} className={styles.SliderContentA}>
                                <Link href={I.LinkTo}>{I.LinkText}</Link>
                            </div>
                        ))
                    }
                    <NavLinkbutton
                        LinkText='Login'
                        LinkTo=''
                    />
                </div>
            </div>





        </nav>
    )
}
