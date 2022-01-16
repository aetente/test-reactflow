import React from "react";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "textChange")}
        draggable
      >
        Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "textChange")}
        draggable
      >
        Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "textChange")}
        draggable
      >
        Node
      </div>
    </aside>
  );
};
