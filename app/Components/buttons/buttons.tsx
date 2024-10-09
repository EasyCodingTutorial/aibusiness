import React from 'react'

import styles from './buttons.module.css'
import Link from 'next/link'

interface NavLinkbuttonProps {
    LinkTo: string,
    LinkText: string,
}

export const NavLinkbutton = (
    {
        LinkTo,
        LinkText
    }: NavLinkbuttonProps
) => {
    return (
        <Link href={LinkTo} className={styles.NavLinkbutton}>
            {LinkText}
        </Link>
    )
}
