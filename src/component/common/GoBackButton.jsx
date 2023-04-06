import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}

export default GoBackButton;
