import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../features/dataSlice";

function Widgetcard({ WidIndex, categoryInd, name, text }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeWidget({ categoryInd, widgetInd: WidIndex }));
  }

  return (
    <div className="widgetcard">
      <div>
        <button className="remove-btn" onClick={() => handleRemove()}>
          &times;
        </button>
      </div>
      <div>
        <h1 className="widget-name">{name}</h1>
        <p className="widget-text">{text}</p>
      </div>
    </div>
  );
}

export default Widgetcard;
