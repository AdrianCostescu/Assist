import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../componets/Card";

const HomeBox = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://techcrunch.com/wp-json/wp/v2/posts?perpage=100&content=embed")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(console.log(data));
  }, []);

  return (
    <HomeBox>
      {data &&
        data.map((datas) => {
          return (
            <Card key = {datas.id} title = {datas.title.rendered} img = {datas.jetpack_featured_media_url}  desc = {datas.excerpt.rendered}></Card>
          );
        })}
    </HomeBox>
  );
}

export default Home;
