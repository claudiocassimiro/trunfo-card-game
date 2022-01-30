import styled from 'styled-components';

const Main = styled.main`
  width: 50%;
  height: 100vh;
`;

export const FormStyle = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  margin: 0 auto;
  width: 500px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #333;
  font-size: 1.2em;
  outline: none;
  padding: 0 10px;
  @media (max-width: 1024px) {
    width: 300px;
    font-size: 0.9em;
  }
  @media (max-width: 786px) {
    width: 200px;
  }
  @media (max-width: 320px) {
    width: 150px;
  }
`;

export const LabelCheck = styled.label`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2em;
  justify-content: center;
  width: 100%;
`;

export const TextArea = styled.textarea`
  margin: 0 auto;
  width: 500px;
  border-radius: 5px;
  border: 1px solid #333;
  font-size: 1.2em;
  outline: none;
  padding: 10px;
  @media (max-width: 1024px) {
    width: 300px;
    font-size: 0.9em;
  }
  @media (max-width: 786px) {
    width: 200px;
  }
  @media (max-width: 320px) {
    width: 150px;
  }
`;

export const CheckBoxInput = styled.input`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: 1px solid #333;
  outline: none;
  padding: 0 10px;
`;


export default Main;
