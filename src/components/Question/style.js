import styled, { keyframes } from "styled-components";

export const QuestionListContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e4e6e8;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const QuestionTitle = styled.h3`
  color: #0077cc;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const QuestionStats = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #6a737c;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Stat = styled.span`
  &.score {
    color: ${(props) => (props.value < 0 ? "#d1383d" : "#3c4146")};
  }
  &.answers {
    color: ${(props) => (props.value > 1 ? "#5eba7d" : "#3c4146")};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 96px;

  span {
    text-align: center;
    width: 100%;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const UserAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
