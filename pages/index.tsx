import type { NextPage } from "next";
import { ManInPhone, WomenClock, HappyMusic, AirSupport } from "../component/index";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>SVG Animation using CSS</h1>

      <div className={styles.flexContainer}>
        <div className={styles.svgContent}>
          <ManInPhone />
        </div>

        <div className={styles.svgContent}>
          <WomenClock />
        </div>

        <div className={styles.svgContent}>
          <HappyMusic />
        </div>

        <div className={styles.svgContent}>
          <AirSupport />
        </div>
      </div>
    </div>
  );
};

export default Home;
