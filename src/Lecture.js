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

export function Lecture() {
  return (
    <>
      <Container>
        <LectureDetailPage>
          <LectureBox1></LectureBox1>
          <LectureBox2></LectureBox2>
        </LectureDetailPage>
      </Container>
    </>
  );
}
