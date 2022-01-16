import React, { useState, memo } from "react";

import { Handle } from "react-flow-renderer";
import "./styles.css";

export default ({ data, isConnectable }) => {
  const [chageText, setChangeText] = useState(data.changeText);
  const [text, setText] = useState("...");
  const [number, setNumber] = useState(0);

  return (
    <div className="hold-node">
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      {chageText && (
        <div className="hold-input">
          <form
            autoFocus
            onSubmit={() => {
              setChangeText(false);
            }}
          >
            <input
              className="nodrag"
              type="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              defaultValue={text}
            />
            <input
              className="nodrag"
              type="number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              defaultValue={number}
            />
            <input type="submit" value="enter" />
          </form>
        </div>
      )}
      <div
        className="hold-text"
        onClick={() => {
          setChangeText(true);
        }}
      >
        TEXT: {text}
      </div>
      <div
        className="hold-text"
        onClick={() => {
          setChangeText(true);
        }}
      >
        NUMBER: {number}
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
    </div>
  );
};
