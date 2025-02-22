import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f8f0f9;
  font-family: 'Arial', sans-serif;
  color: #5a5a5a;
  font-weight: bold;

  h1 {
    font-size: 56px;
    color: #ff69b4;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  svg {
    width: 20px;
    margin: 5px;
  }
  
  @media (max-width: 768px) {
    padding: 10px;

    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }

    svg {
    width: 16px;
    margin: 3px;
  }
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 12px;
  margin: 5px 0;
  border: 2px solid #ff69b4;
  border-radius: 40px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #ff1493;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 20%;
  max-width: 100px;
  padding: 10px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff1493;
  }

  @media (max-width: 768px) {
    width: 25%;
  }
`;

export const LoaderCircle = styled.div`
  svg {
    animation: spin 1s linear infinite;
    width: 30px;
    height: 30px;
    color: #ff69b4;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const WeatherDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  svg {
    width: 24px;
    margin: 5px;
  }


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
  }
`;

export const Description = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
  }
`;

export const Desc = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border: #ff69b4 2px solid;
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  gap: 10px;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 4px 14px;
  }
  
`;

export const WeatherResult = styled.div`
display: flex;
`;
export const WeatherResult_2 = styled.div``;
export const WeatherRes = styled.div``;
export const Temp = styled.h1``;
export const WeatherName = styled.h2``;
export const Content = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
`;