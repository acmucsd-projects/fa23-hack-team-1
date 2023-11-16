import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../assets/favicon.ico';
import Calendar from '../components/calendarcomp/Calendar';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.welcome}>
        <h2>Take a look at your calendar</h2>
        <Calendar/>
      </div>
    </div>
  );
}
