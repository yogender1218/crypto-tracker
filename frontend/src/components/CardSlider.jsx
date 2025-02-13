import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CardSlider.module.css";



const ratingStar=[" ","⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐"];

const data = [
  {
    id: 1,
    name: "Aarav Verma",
    gmail: "aarav.verma@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=10",
    message:
      "Using cryptolovee has transformed my crypto journey – real-time updates and AI insights blend like a perfect symphony, capturing both tradition and futuristic flair.",
  },
  {
    id: 2,
    name: "Riya Singh",
    gmail: "riya.singh@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=20",
    message:
      "The platform’s seamless interface and advanced functionalities make every market pulse feel like a timeless dance between history and innovation.",
  },
  {
    id: 3,
    name: "Kabir Kapoor",
    gmail: "kabir.kapoor@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=30",
    message:
      "From interactive charts to AR/VR visualizations, this platform paints the crypto market as a canvas of endless possibilities.",
  },
  {
    id: 4,
    name: "Anaya Sharma",
    gmail: "anaya.sharma@example.com",
    rating: ratingStar[3],
    avatar: "https://i.pravatar.cc/100?img=40",
    message:
      "Navigating crypto trends has never been more poetic – every feature sings the ballad of innovation and legacy.",
  },
  {
    id: 5,
    name: "Vihaan Reddy",
    gmail: "vihaan.reddy@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=50",
    message:
      "cryptolovee is a fusion of old-world wisdom and cutting-edge technology – truly a digital masterpiece.",
  },
  {
    id: 6,
    name: "Meera Nair",
    gmail: "meera.nair@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=60",
    message:
      "The intuitive design and robust features elevate every trading moment into an art form.",
  },
  {
    id: 7,
    name: "Aarohi Patel",
    gmail: "aarohi.patel@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=14",
    message:
      "My crypto aspirations find a home on this platform – a perfect blend of tradition with tomorrow.",
  },
  {
    id: 8,
    name: "Rohan Gupta",
    gmail: "rohan.gupta@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=23",
    message:
      "With features like real-time alerts and automated trading, this site stands as a beacon of innovation in a rapidly evolving market.",
  },
  {
    id: 9,
    name: "Priya Desai",
    gmail: "priya.desai@example.com",
    rating: ratingStar[3],
    avatar: "https://i.pravatar.cc/100?img=20",
    message:
      "Every visit is a journey through a modern crypto saga, where every detail reflects precision and passion.",
  },
  {
    id: 10,
    name: "Siddharth Rao",
    gmail: "siddharth.rao@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=11",
    message:
      "The dynamic interface and comprehensive tools make this platform a powerhouse – a true revolution in the crypto space. cryptolovee is simply inspiring.",
  },
  {
    id: 11,
    name: "Kavya Iyer",
    gmail: "kavya.iyer@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=12",
    message:
      "A blend of historical insights and futuristic predictions redefines the crypto market experience.",
  },
  {
    id: 12,
    name: "Devansh Mehta",
    gmail: "devansh.mehta@example.com",
    rating: ratingStar[6],
    avatar: "https://i.pravatar.cc/100?img=13",
    message:
      "Every feature—from NFT integration to advanced notifications—testifies to a visionary approach, ushering in a digital renaissance.",
  },
  {
    id: 13,
    name: "Nisha Kumar",
    gmail: "nisha.kumar@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=14",
    message:
      "It feels like unlocking a treasure trove of market insights, where every update is a verse in a grand crypto epic.",
  },
  {
    id: 14,
    name: "Rajesh Verma",
    gmail: "rajesh.verma@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=15",
    message:
      "The fusion of multi-currency support and AI-driven sentiment analysis offers a holistic view that is both profound and pragmatic.",
  },
  {
    id: 15,
    name: "Simran Kaur",
    gmail: "simran.kaur@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=16",
    message:
      "Every update on the platform is a poetic progression—merging the wisdom of the past with the promise of tomorrow.",
  },
  {
    id: 11,
    name: "Kavya Iyer",
    gmail: "kavya.iyer@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=12",
    message:
      "A blend of historical insights and futuristic predictions redefines the crypto market experience.",
  },
  {
    id: 12,
    name: "Devansh Mehta",
    gmail: "devansh.mehta@example.com",
    rating: ratingStar[6],
    avatar: "https://i.pravatar.cc/100?img=13",
    message:
      "Every feature—from NFT integration to advanced notifications—testifies to a visionary approach, ushering in a digital renaissance.",
  },
  {
    id: 13,
    name: "Nisha Kumar",
    gmail: "nisha.kumar@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=14",
    message:
      "It feels like unlocking a treasure trove of market insights, where every update is a verse in a grand crypto epic.",
  },
  {
    id: 14,
    name: "Rajesh Verma",
    gmail: "rajesh.verma@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=15",
    message:
      "The fusion of multi-currency support and AI-driven sentiment analysis offers a holistic view that is both profound and pragmatic.",
  },
  {
    id: 15,
    name: "Simran Kaur",
    gmail: "simran.kaur@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=16",
    message:
      "Every update on the platform is a poetic progression—merging the wisdom of the past with the promise of tomorrow.",
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
          animate={{ x: -currentIndex * 300 }}
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
