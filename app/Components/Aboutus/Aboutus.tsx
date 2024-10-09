import React from 'react'

import styles from './Aboutus.module.css'
import { AboutBox } from './AboutBox'

import { AboutusData } from '@/Static/Aboutus'

export const Aboutus = () => {
    return (

        <div className={styles.Aboutus}>

            <div className={styles.Content}>
                <div className={styles.AboutContent}>
                    <h6>About us</h6>
                    <h5>Simplifying Business Success with AI-Driven Financial Planning</h5>
                    <p>
                        At Easy Consult AI, we help businesses unlock their potential through AI-powered financial planning. Our mission is to provide smart, data-driven solutions that simplify financial decision-making and drive growth.
                    </p>
                </div>
            </div>

            <div className={styles.Content}>
                <div className={styles.AboutBoxContent}>
                    {
                        AboutusData.map((I) => (
                            <AboutBox
                                Icon={I.logo}
                                key={I.id}
                                h5Text={I.Feature}
                                pText={I.Desc}
                            />
                        ))
                    }
                </div>
            </div>


        </div>

    )
}
