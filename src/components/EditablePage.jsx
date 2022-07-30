import React, { useRef, useState } from "react";
import contentTypes from "../contentTypes";

const EditablePage = () => {
  const [blocks, setBlocks] = useState([
    {
      index: 0,
      paragraph: {
        text: "First",
      },
      type: 1,
    },
  ]);

  const addNextBlock = (currentIndex, selectedType) => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      {
        index: currentIndex,
        paragraph: {
          text: "",
        },
        type: selectedType,
      },
    ]);
  };

  return (
    <div style={{ maxWidth: "55%", margin: "0px auto" }}>
      {blocks.map((block, index) => {
        let currentElement = contentTypes[block.type];
        return (
          <currentElement.element
            key={block.index}
            text={block.paragraph}
            styles={currentElement.styles}
            currentIndex={block.index}
            addNextBlock={addNextBlock}
          />
        );
      })}
    </div>
  );
};

export default EditablePage;
