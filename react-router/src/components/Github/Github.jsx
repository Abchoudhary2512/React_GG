import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Abchoudhary2512")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      Github following: {data.following}
      <img src={data.avatar_url} alt="Git pic" />
    </div>
  );
};

export default Github;
