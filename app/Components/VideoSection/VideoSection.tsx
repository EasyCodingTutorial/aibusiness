import React from 'react'

import styles from './VideoSection.module.css'


// for Components
import { Content } from '../Content/Content'

export const VideoSection = () => {
    return (
        <div className={styles.VideoSection}>

            <Content
                h6Text='Watch us'
                h5Text='Watch Us Shape the Future!'
            />

            <div className={styles.Row}>
                <iframe
                    src="https://www.youtube.com/embed/agUmDwJ7ENE?si=-oPHKzr0H-rw5XkY&amp;start=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ border: 'none' }}
                />

            </div>


        </div>
    )
}
