"use client"
import React, { useState, useEffect } from 'react';
import styles from './MainBg.module.css';

export const MainBg = () => {
    const images = [
        "/assets/HomeBg1.jpg",
        "/assets/HomeBg2.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Automatically change the image every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 10000); // 10000ms = 10 seconds

        // Cleanup the interval when the component is unmounted or re-renders
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.MainBg}>
            <div className={styles.ImageContainer}>
                <img src={images[currentImageIndex]} alt="Background" className={styles.BackgroundImage} />
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>EasyConsult AI</h6>
                <h5>Financial Planning for Your Company&apos;s Future.</h5>
            </div>

            {/* Slider Controls */}
            <div className={styles.SliderControls}>
                <button onClick={prevImage} className={styles.PrevButton}>←</button>
                <button onClick={nextImage} className={styles.NextButton}>→</button>
            </div>
        </div>
    );
};
