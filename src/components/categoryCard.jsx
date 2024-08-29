import React, { useState } from "react";
import Widgetcard from "./widgetCard";
import Modal from "./modal";

function Categorycard({ catIndex, name, widgets }) {
  const [modal, setModal] = useState(false);

  function handleAddwidget() {
    setModal(false);
  }

  return (
    <>
      <div className="categorycard">
        <h1>{name}</h1>
        <div className="widget-container">
          {widgets.map((widget, index) => {
            return (
              <Widgetcard
                key={index}
                WidIndex={index}
                categoryInd={catIndex}
                name={widget.name}
                text={widget.text}
              />
            );
          })}
          <div className="widgetcard">
            <button className="add-btn" onClick={() => setModal(true)}>
              add widget +
            </button>
          </div>
        </div>
      </div>
      {modal && <Modal onClose={handleAddwidget} />}
    </>
  );
}

export default Categorycard;
