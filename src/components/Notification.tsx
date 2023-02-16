import React, { useEffect, useState } from "react";

interface props {
  show: number;
  setShow: React.Dispatch<React.SetStateAction<number>>;
}

const Notification: React.FC<props> = ({ show, setShow }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (show) {
        setShow(0);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [show]);

  return (
    <div className={`position-absolute bottom-0 start-50 translate-middle-x mb-2 ${show ? "d-block" : "d-none"}`}>
      <p className="bg-primary text-white py-1 px-3 m-0 small rounded shadow">Copied</p>
    </div>
  );
};

export default Notification;
