import React from "react";
import styled from "styled-components";
import { Button } from "../pages/Contact";

const CardBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ededed;
`;

const Title = styled.h1``;

const Image = styled.img``;

const Desc = styled.p``;

const ButtonPosition = styled.div`
  display: flex;
`;

function Card({title, img, desc}) {
  return (
    <CardBox>
      <Title>{title}</Title>
      <Image src={img} alt="img"></Image>
      <Desc>{desc}</Desc>
      <ButtonPosition>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonPosition>
    </CardBox>
  );
}

export default Card;
