import { useEffect, useState } from "react";

const AutoNumber = ({ maxNumber, title }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < maxNumber) {
        setNumber((oldNumber) => oldNumber + 1);
      }
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <span className="num" data-val="50">
        {number}
      </span>
      <span className="text"> {title}</span>
    </div>
  );
};

export default AutoNumber;

