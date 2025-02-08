import React from "react";
// import image from "./image.svg";
import styles from "./EmailBanner.module.css";
import Lottie from "lottie-react";
import animationData from "../assets/newsletterr.json";

const EmailBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <h2 className={styles.title}>Wait a minute...</h2>
        <p className={styles.subtitle}>Subscribe to our newsletter!</p>
        <p className={styles.description}>
          You will never miss important product updates, latest news, and community QA sessions.
          Our newsletter is once a week, every Sunday.
        </p>

        <div className={styles.controls}>
          <input
            type="email"
            placeholder="Your email"
            className={styles.input}
          />
          <button className={styles.control}>Subscribe</button>
        </div>
      </div>
      <Lottie 
      animationData={animationData} 
      loop={true} 
      autoplay={true} 
      style={{ width: 350, height: 350 }}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
      {/* <img src={image} alt="Newsletter" className={styles.image} /> */}
    </div>
  );
};

export default EmailBanner;
