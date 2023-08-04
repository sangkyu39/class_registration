import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "./code.css";
const Code = (props) => {
  let [answer, setAnswer] = useState(getRandomNumber());
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  function getRandomNumber() {
    let result = "";
    const candidates = "0123456789";

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * candidates.length);
      result += candidates[randomIndex];
    }

    return result;
  }


  function checkAnswer() {
    if (answer === guess) {
      let newList = [...props.classList];
      newList.splice(props.index, 1);
      props.setClassList(newList);
      console.log("일치");
      props.setModalShow(false);
      if (window.confirm("재조회하시겠습니까?")) {
        console.log("수강신청 실패.");
      } else {
      }
    } else {
      console.log("불일치");
    }
    setGuess("");
    setAnswer(getRandomNumber());
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="submit-title"
        >
          매크로방지 코드입력
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <p className="text">생성된 코드</p>
            <p className="code col">{answer}</p>
          </div>
          <div className="col">
            <p className="text">생성된 코드 입력</p>
            <input
              className="num-input col"
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-div">
          <button className="submit" onClick={checkAnswer}>
            코드 입력
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Code;
