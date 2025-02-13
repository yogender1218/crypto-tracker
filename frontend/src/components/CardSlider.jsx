import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CardSlider.module.css";



const ratingStar=[" ","⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐"];

const data = [
  {
    id: 1,
    name: "Jacob Warnhalter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=1",
    message:
      "I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=2",
    message:
      "Digital Ocean VPS gives more flexibility than Heroku, especially for database hosting.",
  },
  {
    id: 3,
    name: "Liam Johnson",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=3",
    message:
      "I've been using Firebase for small projects, but for scalability, VPS is the way to go.",
  },
  {
    id: 4,
    name: "Jacob Warnhalter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=1",
    message:
      "I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.",
  },
  {
    id: 5,
    name: "Sophia Carter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=2",
    message:
      "Digital Ocean VPS gives more flexibility than Heroku, especially for database hosting.",
  },
  {
    id: 6,
    name: "Liam Johnson",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[3],
    avatar: "https://i.pravatar.cc/100?img=3",
    message:
      "I've been using Firebase for small projects, but for scalability, VPS is the way to go.",
  },
  {
    id: 7,
    name: "Jacob Warnhalter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=1",
    message:
      "I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=2",
    message:
      "Digital Ocean VPS gives more flexibility than Heroku, especially for database hosting.",
  },
  {
    id: 3,
    name: "Liam Johnson",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[3],
    avatar: "https://i.pravatar.cc/100?img=3",
    message:
      "I've been using Firebase for small projects, but for scalability, VPS is the way to go.",
  },
  {
    id: 1,
    name: "Jacob Warnhalter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=1",
    message:
      "I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=2",
    message:
      "Digital Ocean VPS gives more flexibility than Heroku, especially for database hosting.",
  },
  {
    id: 3,
    name: "Liam Johnson",
    gmail:"yyyyyy.123001@gmail.com",
    rating:ratingStar[3],
    avatar: "https://i.pravatar.cc/100?img=3",
    message:
      "I've been using Firebase for small projects, but for scalability, VPS is the way to go.",
  },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={styles.navButton}>◀</button>

      <div className={styles.slider}>
        <motion.div
          className={styles.sliderInner}
          animate={{ x: -currentIndex * 320 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardContent}>
                <img src={item.avatar} alt="avatar" className={styles.avatar} />
                <h3 className={styles.name}>{item.name}</h3>
                <h3 className={styles.rating}>{item.rating}</h3>
                <h5 className={styles.gmail}>{item.gmail}</h5>
                <p className={styles.message}>{item.message}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <button onClick={nextSlide} className={styles.navButton}>▶</button>
    </div>
  );
}
