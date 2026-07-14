"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import styles from "./heroSlider.module.css";

interface HeroSliderProps {
  title: string;
  lead: string;
  primaryLabel: string;
  secondaryLabel: string;
  locale: "en" | "ar";
}

const slides = [
  {
    image: "/images/hero/hero-1.jpg",
    tag: "Trusted relief",
  },
  {
    image: "/images/hero/hero-2.png",
    tag: "Connect with donors",
  },
];

const HeroSlider: React.FC<HeroSliderProps> = ({ title, lead, primaryLabel, secondaryLabel, locale }) => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.heroSlider}>
      <div className={styles.media}>
        <img
          src={slides[active].image}
          alt="Hero background"
          className={styles.heroImage}
          loading="eager"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.tag}>{slides[active].tag}</div>
          <div className={styles.localeLabel}>{locale === "ar" ? "العربية" : "English"}</div>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>

          <div className={styles.actions}>
            <Button href="/donate" variant="primary" className={styles.heroButton}>{primaryLabel}</Button>
            <Button href="/volunteer" variant="outline" className={styles.heroButton}>{secondaryLabel}</Button>
          </div>
        </div>

        <div className={styles.sliderControls}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              className={`${styles.dot} ${active === index ? styles.activeDot : ""}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
