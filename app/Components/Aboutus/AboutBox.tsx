import React from 'react'

import styles from './Aboutus.module.css'

interface AboutBoxProps {
    Icon: string,
    h5Text: string,
    pText: string,
}

export const AboutBox = (
    {
        Icon,
        h5Text,
        pText
    }: AboutBoxProps
) => {
    return (
        <div className={styles.AboutBox}>
            <h6>{Icon}</h6>
            <h5>{h5Text}</h5>
            <p>
                {pText}
            </p>
        </div>
    )
}
