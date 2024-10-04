import React from 'react'

import styles from './FutureExperience.module.css'

// For Data
import { FutureExpData } from '@/Static/futureExperienceData'


// for Components
import { Content } from '../Content/Content'
import { Box } from '../Box/Box'

export const FutureExperience = () => {
    return (
        <div className={styles.FutureExperience}>
            <Content
                h6Text='Future'
                h5Text='Experience The Future Today!'
            />


            <div className={styles.Row}>
                {
                    FutureExpData.map((I) => (
                        <Box
                            h6Icon={I.Icon}
                            key={I.id}
                            h5Text={I.title}
                            pText={I.Desc}
                        />

                    ))
                }
            </div>


        </div>
    )
}
