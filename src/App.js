import React, { useState, useEffect } from "react";
import Code from "./code.js";
import "./App.css";
import menubar from "./menubar.png";
import menu from "./menu.png";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [classList, setClassList] = useState([
    "알고리즘",
    "확률통계및프로그래밍",
    "신호및시스템",
    "교양1",
    "교양2",
  ]);

  return (
    <div className="container row">
      <div className="menubar col-2 box">
        <img className="menubar-img" src={menubar} />
      </div>

      <div className="col box">
        <div className="menu">
          <img className="menu-img" src={menu} />
        </div>
        <div className="">
          {classList.map(function (c, i) {
            return (
              <div key={c.id} className="row class-list">
                <Code
                  className="modal"
                  classList={classList}
                  setClassList={setClassList}
                  index={i}
                  setModalShow={setModalShow}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  backdrop={false}
                ></Code>
                <div className="col-1 btn-div">
                  <p onClick={() => setModalShow(true)} className="apply-btn">
                    신청
                  </p>
                </div>
                <div className="col class-name">
                  <p>{c}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
