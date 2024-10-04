import React from 'react'

import styles from './Box.module.css'

interface BoxProps {
    h6Icon: string,
    h5Text: string,
    pText: string,
}

export const Box = (
    {
        h6Icon,
        h5Text,
        pText,
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <h6>{h6Icon}</h6>
            <div className={styles.Boxcontent}>
                <h5>{h5Text}</h5>
                <p>
                    {pText}
                </p>

            </div>
        </div>
    )
}
