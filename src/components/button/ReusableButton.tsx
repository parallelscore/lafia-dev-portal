import React, { MouseEventHandler } from 'react';
import './reusableButton.scss';

interface IButton {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ReusableButton = ({ text, onClick }: IButton) => {
  return (
    <button onClick={onClick} className="reusableButton">
      {text}
    </button>
  );
};

export default ReusableButton;
