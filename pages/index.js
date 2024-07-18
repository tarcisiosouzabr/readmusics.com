import styles from "styles/styles.module.css";
import "styles/styles.module.css";
import React, { useState } from "react";
import Modal from "components/modal";

const successAudio = require("../sounds/success.mp3");
const failAudio = require("../sounds/fail.mp3");

function KeyBoard({ octave, onKeyClick, isMiddleC }) {
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

function Home() {
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
  const [noteToCheckIndex, setNoteIndex] = useState(1);
  const [correctAmount, setCorrectAmount] = useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [modalBodyText, setModalBodyText] = React.useState("");

  function onKeyClick(octave, keyValue) {
    if (noteToCheckIndex >= notesMarks.length) {
      return;
    }
    let noteFromKeyboard = octave + keyValue;
    let classToApplie = "";
    let nextCorrectAmount = correctAmount;
    if (noteFromKeyboard === notesMarks[noteToCheckIndex].note) {
      classToApplie = styles.correctNote;
      playSuccess();
      nextCorrectAmount = correctAmount + 1;
      setCorrectAmount(nextCorrectAmount);
    } else {
      classToApplie = styles.wrongNote;
      playFail();
    }
    updateNoteMarksList(notesMarks[noteToCheckIndex].note, classToApplie);
    const nextIndex = noteToCheckIndex + 1;
    setNoteIndex(nextIndex);
    checkIfGameFinished(nextIndex, nextCorrectAmount);
  }

  function checkIfGameFinished(nextIndex, correctAmount) {
    if (nextIndex == notesMarks.length) {
      debugger;
      let correctTotal = (100 * correctAmount) / (notesMarks.length - 1);
      setModalBodyText(`Você acertou ${correctTotal.toFixed(0)}%`);
      setShowModal(true);
    }
  }

  function updateNoteMarksList(noteFromKeyboard, classToApplie) {
    const myNextList = [...notesMarks];
    const noteRemark = myNextList.find((a) => a.note === noteFromKeyboard);
    noteRemark.customClass = classToApplie;
    setMyList(myNextList);
  }

  function playSuccess() {
    document.getElementById("successAudioTag").cloneNode(true).play();
  }

  function playFail() {
    document.getElementById("failAudioTag").cloneNode(true).play();
  }

  const notesElements = notesMarks.map((note) => (
    <span key={note.note}>
      =<Note note={note}></Note>
    </span>
  ));

  function Note({ note }) {
    return <span className={note.customClass}>{note.noteRemark}</span>;
  }

  function tryAgain() {
    setShowModal(false);
    setMyList(initialNotesMarks);
    setNoteIndex(1);
    setCorrectAmount(0);
  }

  return (
    <div>
      <Modal
        showModal={showModal}
        bodyText={modalBodyText}
        onClose={() => setShowModal(false)}
        onNext={tryAgain}
      ></Modal>
      <h1 className={styles.fontM + " flex items-center justify-center"}>
        {notesElements}
      </h1>
      <audio src={successAudio} id="successAudioTag" />
      <audio src={failAudio} id="failAudioTag" />
      <div className={styles.keyboardContent}>
        <KeyBoard
          className={styles.keyBoardItem}
          onKeyClick={onKeyClick}
          octave={"C1"}
          isMiddleC={true}
        ></KeyBoard>
        <KeyBoard
          className={styles.keyBoardItem}
          onKeyClick={onKeyClick}
          octave={"C2"}
          isMiddleC={false}
        ></KeyBoard>
      </div>
    </div>
  );
}

export default Home;
