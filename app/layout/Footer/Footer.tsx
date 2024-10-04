import React from 'react'

import styles from './Footer.module.css'

import Link from 'next/link'
const GetHelp = [
    {
        LinkText: "Contact Us",
        LinkTo: "/", // Update as per your website structure
    },
    {
        LinkText: "Support",
        LinkTo: "/",
    },
    {
        LinkText: "FAQs",
        LinkTo: "/",
    },
    {
        LinkText: "VR Setup Guide",
        LinkTo: "/",
    },
];

const Info = [
    {
        LinkText: "About Us",
        LinkTo: "/",
    },
    {
        LinkText: "Technology",
        LinkTo: "/",
    },
    {
        LinkText: "Careers",
        LinkTo: "/",
    },
    {
        LinkText: "Partnerships",
        LinkTo: "/",
    },
];

const CustomerServices = [
    {
        LinkText: "My Account",
        LinkTo: "/",
    },
    {
        LinkText: "VR Experiences",
        LinkTo: "/",
    },
    {
        LinkText: "Custom VR Solutions",
        LinkTo: "/",
    },
    {
        LinkText: "Subscription Plans",
        LinkTo: "/",
    },
];

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterRow}>
                <div>
                    <img src="/assets/logo.png" alt="" />
                </div>


                <div>
                    <h6>Get Help</h6>
                    {
                        GetHelp.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Information</h6>
                    {
                        Info.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Customer Services</h6>
                    {
                        CustomerServices.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>

            </div>


            <div className={styles.FooterRow1}>
                <p>Copyright © 2024. All Rights Reserved</p>
            </div>


        </footer>
    )
}
