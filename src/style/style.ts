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

  @media (max-width: 768px) {
    padding: 10px;
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
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff1493;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 25%;
    font-size: 14px;
    margin-bottom: 20px;
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
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  color: #5a5a5a;
  font-weight: bold;

  p {
    gap: 8px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
