import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../features/dataSlice";

const Modal = ({ onClose }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [categoryInd, setCategoryInd] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleAddWidget = () => {
    if (categoryInd && widgetName && widgetText) {
      dispatch(addWidget({ categoryInd, name: widgetName, text: widgetText }));
    }
    setWidgetName("");
    setWidgetText("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Widget</h3>
        <select
          value={categoryInd}
          onChange={(e) => setCategoryInd(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={index}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <div className="button">
          <button onClick={handleAddWidget}>Add Widget</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
