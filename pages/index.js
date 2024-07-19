import styles from "styles/styles.module.css";
import "styles/styles.module.css";
import React, { useState } from "react";
import Modal from "components/modal";
import KeyBoard from "components/keyboard";

const successAudio = require("../sounds/success.mp3");
const failAudio = require("../sounds/fail.mp3");

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
