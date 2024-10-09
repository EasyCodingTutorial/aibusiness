import React from 'react'

import styles from './WhoWeAre.module.css'



import { Content } from '../Content/Content'
import { Box } from '../Box/Box'
import { WhoWeAreData } from '@/Static/whoWeAre'

export const WhoWeAre = () => {
    return (
        <div className={styles.WhoWeAre}>
            <Content
                h6Text='Who We Are'
                h5Text='Take a Close Look To Us'
            />

            <div className={styles.Row}>
                {
                    WhoWeAreData.map((I) => (
                        <Box
                            ImgUrl={I.imgUrl}
                            key={I.id}
                            h5Text={I.Feature}
                            pText={I.Desc}
                        />

                    ))
                }
            </div>


        </div>
    )
}
