import React from 'react'

import styles from './Custom.module.css'

export const Custom = () => {
    return (
        <div className={styles.Custom}>
            <div className={styles.Row}>
                <div>
                    <h6>Where Virtual Dreams Become Reality</h6>
                    <p>
                        Unleash the power of your imagination and explore limitless virtual worlds. Our cutting-edge VR technology turns your wildest fantasies into fully immersive experiences, blurring the lines between the virtual and real.
                    </p>
                </div>
                <div>
                    <img src="/assets/custom1.jpg" alt="" />
                </div>
            </div>

            <div className={styles.Row}>

                <div>
                    <img src="/assets/custom2.jpg" alt="" />
                </div>

                <div>
                    <h6>Enter the Future, One Experience at a Time</h6>
                    <p>
                        Step into a world of endless possibilities with each new virtual adventure. Our platform offers a seamless, interactive journey through stunning environments, where every moment feels like a leap into the future.
                    </p>
                </div>

            </div>

        </div>
    )
}
