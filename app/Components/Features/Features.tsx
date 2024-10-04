import React from 'react'

import styles from './Features.module.css'

// for Data
import { featureData } from '@/Static/featureData'


// for Components
import { Content } from '../Content/Content'
import { Box } from '../Box/Box'


export const Features = () => {
    return (
        <div className={styles.FutureExperience}>
            <Content
                h6Text='Features'
                h5Text='Get Whats You Want!'
            />


            <div className={styles.Row}>
                {
                    featureData.map((I) => (
                        <Box
                            h6Icon={I.Icon}
                            key={I.id}
                            h5Text={I.Feature}
                            pText={I.FeatureDesc}
                        />

                    ))
                }
            </div>


        </div>
    )
}
