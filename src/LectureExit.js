import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const LectureDetailPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-top: 150px;
`;
const LectureBox1 = styled.div``;
const LectureBox2 = styled.div``;
const LectureImg = styled.div`
  width: 890px;
  height: 540px;
  background-color: #d9d9d9;
`;
const LectureGrade = styled.div`
  width: 70px;
  height: 25px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 25px;
`;

const LectureText1 = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;
const LectureText2 = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
const LectureText3 = styled.div`
  font-size: 15px;
  margin-top: 30px;
  width: 250px;
  height: 132px;
`;
const LecturePrice = styled.div`
  width: 250px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
  margin-top: 90px;
`;

const LectureCart = styled.div`
  width: 250px;
  height: 45px;
  border: 1px solid black;
  font-size: 17px;
  text-align: center;
  line-height: 45px;
  border-radius: 25px;
  margin-top: 20px;
`;

const LecturePurchase = styled.div`
  width: 250px;
  height: 45px;
  border: 1px solid black;

  font-size: 17px;
  text-align: center;
  line-height: 45px;
  border-radius: 25px;
  margin-top: 15px;
`;

export function LectureExit() {
  return (
    <>
      <>
        <Container>
          <LectureDetailPage>
            <LectureBox1>
              <LectureImg></LectureImg>
            </LectureBox1>
            <LectureBox2>
              <LectureGrade>초급반</LectureGrade>
              <LectureText1>강의 제목</LectureText1>
              <LectureText2>선생님 성함</LectureText2>
              <LectureText3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                tincidunt eget nullam non. Quis hendrerit dolor magna eget est
                lorem ipsum dolor sit.
              </LectureText3>
              <LecturePrice>103,000 원</LecturePrice>
              <LectureCart>장바구니 담기</LectureCart>
              <LecturePurchase>바로 구매</LecturePurchase>
            </LectureBox2>
          </LectureDetailPage>
        </Container>
      </>
    </>
  );
}
