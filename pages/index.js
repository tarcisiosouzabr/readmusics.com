import styles from "styles/styles.module.css";

function Home() {
  return (
    <ul className={styles.set}>
      <li className={[styles.key, styles.white, styles.c].join(" ")}></li>
      <li className={[styles.key, styles.black, styles.cs].join(" ")}></li>
      <li className={[styles.key, styles.white, styles.d].join(" ")}></li>
      <li className={[styles.key, styles.black, styles.ds].join(" ")}></li>
      <li className={[styles.key, styles.white, styles.e].join(" ")}></li>
      <li className={[styles.key, styles.white, styles.f].join(" ")}></li>
      <li className={[styles.key, styles.black, styles.fs].join(" ")}></li>
      <li className={[styles.key, styles.white, styles.g].join(" ")}></li>
      <li className={[styles.key, styles.black, styles.gs].join(" ")}></li>
      <li className={[styles.key, styles.white, styles.a].join(" ")}></li>
      <li className={[styles.key, styles.black, styles.as].join(" ")}></li>
      <li className={[styles.key, styles.white, styles.b].join(" ")}></li>
    </ul>
  );
}

export default Home;
