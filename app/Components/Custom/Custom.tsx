import React from 'react'

import styles from './Custom.module.css'

export const Custom = () => {
    return (
        <div className={styles.Custom}>

            <div className={styles.Content}>
                <img src="/assets/work1.jpg" alt="" />
                <img src="/assets/work2.jpg" alt="" />
            </div>

            <div className={styles.Content}>
                <div>
                    <h6>Our mission is to simplify your daily routine.</h6>
                    <p>
                        We are committed to providing solutions that save you time, reduce stress, and help you focus on what matters most. By leveraging innovative approaches and offering top-notch services, we aim to transform your everyday challenges into effortless tasks.
                    </p>

                    <li>
                        Time-saving Solutions
                    </li>
                    <li>
                        Stress-free Experience
                    </li>
                    <li>
                        Seamless Integration
                    </li>

                </div>
            </div>

        </div>
    )
}
