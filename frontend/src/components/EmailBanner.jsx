import { useState } from 'react';
// import image from './image.svg';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  const [email, setEmail] = useState('');

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <h1 className={classes.title}>Wait a minute...</h1>
        <p className={classes.text} style={{ fontWeight: 500, fontSize: '18px', marginBottom: '5px' }}>
          Subscribe to our newsletter!
        </p>
        <p className={classes.text} style={{ fontSize: '14px', color: 'gray' }}>
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </p>

        <div className={classes.controls}>
          <input
            type="email"
            placeholder="Your email"
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={classes.control}>Subscribe</button>
        </div>
      </div>
      <img src={image.src} alt="Newsletter" className={classes.image} />
    </div>
  );
}
