import React from "react";

const Button = ({ onclick, children, disabled }) => {
  return (
    <button disabled={disabled} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
