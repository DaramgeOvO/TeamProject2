import styled from "styled-components";
import { Link } from "react-router-dom";
import 등록문의전화 from "./assets/img/등록문의전화.png";

const Header = styled.div``;

const Img = styled.div`
  height: 600px;
  background-color: gray;
`;

const MenuBar = styled.div`
  background-color: darkgray;
  height: 90px;

  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1fr 1.7fr;
`;

const MenuTitle = styled(Link)`
  margin: 25px;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const Line = styled.div`
  height: 5px;
  background-color: black;
  width: 150px;
`;

const AddressTitle = styled.div`
  display: flex;
  margin: 150px 0 35px 0;
  align-items: center;
`;

const AddressTitleText = styled.div`
  margin-left: 15px;
  font-size: 38px;
`;

export function Address() {
  return (
    <>
      <Header>
        <Img></Img>
        <MenuBar>
          <div></div>
          <MenuTitle to="/intro/about">About Us</MenuTitle>
          <MenuTitle to="/intro/curriculum">커리큘럼</MenuTitle>
          <TitleWrapper>
            <MenuTitle to="/intro/address">오시는 길</MenuTitle>
            <Line></Line>
          </TitleWrapper>
          <div></div>
        </MenuBar>
      </Header>
      <Container>
        <AddressTitle>
          <img src={등록문의전화} width={40} height={40}></img>
          <AddressTitleText>등록문의</AddressTitleText>
        </AddressTitle>
        <AddressText1>• </AddressText1>
      </Container>
    </>
  );
}
