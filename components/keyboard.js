import styles from "styles/styles.module.css";

export default function KeyBoard({ octave, onKeyClick, isMiddleC }) {
  function handleClick(e) {
    const value = e.currentTarget.getAttribute("data-value");
    onKeyClick(octave, value);
  }
  return (
    <ul className={styles.set}>
      <li
        onClick={handleClick}
        data-value="C"
        className={[styles.key, styles.white, styles.c].join(" ")}
      >
        {isMiddleC ? <p className={styles.middleCNote}>Dó Central</p> : ""}{" "}
      </li>
      <li
        onClick={handleClick}
        data-value="Cs"
        className={[styles.key, styles.black, styles.cs].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="D"
        className={[styles.key, styles.white, styles.d].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="Ds"
        className={[styles.key, styles.black, styles.ds].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="E"
        className={[styles.key, styles.white, styles.e].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="F"
        className={[styles.key, styles.white, styles.f].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="Fs"
        className={[styles.key, styles.black, styles.fs].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="G"
        className={[styles.key, styles.white, styles.g].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="Gs"
        className={[styles.key, styles.black, styles.gs].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="A"
        className={[styles.key, styles.white, styles.a].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="As"
        className={[styles.key, styles.black, styles.as].join(" ")}
      ></li>
      <li
        onClick={handleClick}
        data-value="B"
        className={[styles.key, styles.white, styles.b].join(" ")}
      ></li>
    </ul>
  );
}
