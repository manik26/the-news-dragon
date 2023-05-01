import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="">
      <div>
        <h4 className="bg-secondary text-light px-4 py-3">National News</h4>
        {catagories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              class="text-decoration-none px-4"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
