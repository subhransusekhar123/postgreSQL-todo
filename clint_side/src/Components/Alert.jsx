import React from "react";

const Alert = ({ setEditAlert }) => {
  return (
    <>
      <div className="container"  onClick={()=>setEditAlert(false)}>
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
           
          ></button>
        </div>
      </div>
    </>
  );
};

export default Alert;
