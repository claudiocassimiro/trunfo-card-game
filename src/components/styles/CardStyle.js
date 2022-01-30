import styled from 'styled-components';

const Main = styled.main`
  margin-top: 70px;
  display: flex;  
  width: 50%;
  height: 80%;
  @media (max-width: 500px) {
    height: 100%;
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  width: 30%;
  @media (max-width: 1440px) {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 70%;
    height: 100%;
  }
  @media (max-width: 500px) {
    width: 70%;
    height: 60%;
  }
`;

export const Article = styled.article`
  border: 1px solid #ccc;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  height: 85%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 90%;
  height: 60%;
  @media (max-width: 1440px) {
    width: 80%;
    height: 55%;
  }
  @media (max-width: 500px) {
    width: 70%;
    height: 50%;
  }
`;

export const TargetTrunfo = styled.img`
  position: absolute;
  top: 75%;
  left: 73%;
  width: 60px;
  height: 60px;
  @media (max-width: 1440px) {
    left: 72%;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 500px) {
    left: 65%;
    top: 70%;
    width: 40px;
    height: 40px;
  }
`;

export const P = styled.p`
  text-align: center;
  font-size: 1.2rem;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const ContainerAtribute = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export default Main;
