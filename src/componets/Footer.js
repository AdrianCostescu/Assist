import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  height: 40px;
  width: 100%;
  background-color: #ededed;
  color: #515356;
  display: flex;
  justify-content: space-between;
`;

const Create = styled.p`
  color: #515356;
  margin-left: 20px;
`;

const Assist = styled.p`
  color: #515356;
  margin-right: 20px;
`;

function Footer() {
  return (
    <FooterBox>
      <Create>Created by Adrian Costescu</Create>
      <Assist>ASSIST Software 2022</Assist>
    </FooterBox>
  );
}

export default Footer;
