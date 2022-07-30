import React from "react";

const Text = (props) => {
  const { styles, addNextBlock, currentIndex } = props;

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      addNextBlock(currentIndex, 1);
    }
  };

  return (
    <p contentEditable={true} className={`${Object.values(styles)}`} onKeyDown={handleKeyPress}>
      Text
    </p>
  );
};

export default Text;
