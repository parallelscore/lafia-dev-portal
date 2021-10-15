import React, { MouseEventHandler } from 'react';
import './reusableButton.scss';

interface IButton {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  inverted?: string;
  end?: string;
}

const ReusableButton = ({ text, onClick, inverted, end }: IButton) => {
  return (
    <button
      style={{
        padding: '0.85vw 2.88vw',
        borderRadius: '8px',
      }}
      onClick={onClick}
      className={inverted ? 'myInverted' : 'reusableButton'}
    >
      {text}
    </button>
  );
};

export default ReusableButton;
