import React from "react";
import "./ConsentForm.scss";
import SafhirLogo from "../../images/new-safhir-logo.svg";
import RightLogo from "../../images/image.png";
import SVGComponent from "../../components/SvgComponent";
import ReusableButton from "../../components/button/ReusableButton";

const ConsentForm = () => {
  return (
    <div className="consent_container">
      <div className="header">
        <h1>Continue browsing </h1>
        <h2>Safhir</h2>
      </div>
      <hr />
      <div className="consent_body">
        <div className="safhir_logo">
          {/* <img src={SafhirLogo} alt="safhir logo" /> */}
          <SVGComponent />
        </div>
        <p className="authorization">Authorization Required</p>
        <p className="access_to">Safhir wants access to:</p>
        <div className="access_options">
          <p className="profile_access">profile:read</p>
          <p className="email_access">email:read</p>
        </div>
        <button className="proceed_to_lafia">Proceed to Lafia.io</button>
        {/* <ReusableButton text="Proceed to Lafia.io" inverted="inverted" /> */}
        <p className="cancel">Cancel</p>

        <div className="token_information_container">
          <p className="token_information">
            A token would be administered to you automatically if already
            registered to Lafia, if not registered, you would be required to do
            so in order to procced with request.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ConsentForm;
