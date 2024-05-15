import styles from "styles/styles.module.css";

function KeyBoard() {
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

function Home() {
  return (
    <div>
      <div className={styles.sheetContent}>
        <div className={styles.noteContent}>
          <div className={[styles.note, styles.noteA].join(" ")}>O</div>
          <div className={styles.note}>O</div>
          <div className={styles.note}>O</div>
        </div>
        <div className={styles.sheetLine}></div>
        <div className={styles.sheetLine}></div>
        <div className={styles.sheetLine}></div>
        <div className={styles.sheetLine}></div>
        <div className={styles.sheetLine}></div>
      </div>
      <KeyBoard></KeyBoard>
    </div>
  );
}

export default Home;
