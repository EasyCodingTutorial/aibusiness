import React from 'react'

import styles from './Box.module.css'

interface BoxProps {
    ImgUrl: string,
    h5Text: string,
    pText: string,
}

export const Box = (
    {
        ImgUrl,
        h5Text,
        pText,
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <img src={ImgUrl} alt="" />
            <div className={styles.Boxcontent}>
                <h5>{h5Text}</h5>
                <p>
                    {pText}
                </p>

            </div>
        </div>
    )
}
