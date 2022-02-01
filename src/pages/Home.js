import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../componets/Card";

const HomeBox = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://techcrunch.com/wp-json/wp/v2/posts?perpage=100&content=embed")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((data) => setData(data));
  }, []);

  return (
    <HomeBox>
      {data && data((datas) => {
        return(
          <Card title = {datas.title} img = {datas.img} desc = {datas.description}></Card>
        )
      })}
    </HomeBox>
  );
}

export default Home;
