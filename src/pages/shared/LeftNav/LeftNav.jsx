import React, { useEffect, useState } from "react";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>leftNav</h1>
    </div>
  );
};

export default LeftNav;
