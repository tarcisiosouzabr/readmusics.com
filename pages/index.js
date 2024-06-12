import styles from "styles/styles.module.css";
import "styles/styles.module.css";
import React, { useState } from "react";

function KeyBoard({ octave, onKeyClick }) {
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
      ></li>
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

function Home() {
  let noteToCheckIndex = 1;
  const initialNotesMarks = [
    { noteRemark: "&", note: "next", customClass: "" },
    { noteRemark: "r", note: "C1C", customClass: "" },
    { noteRemark: "s", note: "C1D", customClass: "" },
    { noteRemark: "t", note: "C1E", customClass: "" },
    { noteRemark: "u", note: "C1F", customClass: "" },
    { noteRemark: "v", note: "C1G", customClass: "" },
    { noteRemark: "w", note: "C1A", customClass: "" },
    { noteRemark: "x", note: "C1B", customClass: "" },
    { noteRemark: "y", note: "C2C", customClass: "" },
    { noteRemark: "z", note: "C2D", customClass: "" },
    { noteRemark: "{", note: "C2E", customClass: "" },
    { noteRemark: "|", note: "C2F", customClass: "" },
  ];

  const [notesMarks, setMyList] = useState(initialNotesMarks);
  function onKeyClick(octave, keyValue) {
    if (noteToCheckIndex >= notesMarks.length) {
      return;
    }
    let noteFromKeyboard = octave + keyValue;
    if (noteFromKeyboard === notesMarks[noteToCheckIndex].note) {
      const myNextList = [...notesMarks];
      const noteRemark = myNextList.find((a) => a.note === noteFromKeyboard);
      noteRemark.customClass = styles.correctNote;
      setMyList(myNextList);
    } else {
      console.log("Incorrect");
    }
    noteToCheckIndex++;
  }
  const notesElements = notesMarks.map((note) => (
    <Note key={note.note} note={note}></Note>
  ));

  function Note({ note }) {
    return <span className={note.customClass}>={note.noteRemark}</span>;
  }
  return (
    <div>
      <h1 className={styles.fontM}>{notesElements}</h1>
      <div className={styles.keyboardContent}>
        <KeyBoard
          className={styles.keyBoardItem}
          onKeyClick={onKeyClick}
          octave={"C1"}
        ></KeyBoard>
        <KeyBoard
          className={styles.keyBoardItem}
          onKeyClick={onKeyClick}
          octave={"C2"}
        ></KeyBoard>
      </div>
    </div>
  );
}

export default Home;
