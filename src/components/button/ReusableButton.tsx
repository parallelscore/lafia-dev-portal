import React from 'react';
import './reusableButton.scss';

interface IButton {
  text: string;
}

const ReusableButton = ({ text }: IButton) => {
  return <button className="reusableButton">{text}</button>;
};

export default ReusableButton;
