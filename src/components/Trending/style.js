import styled from "styled-components";

export const TagsContainer = styled.div`
  margin-bottom: 20px;
`;

export const TagsTitle = styled.h2`
  color: #3c4146;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const TagButton = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => (props.selected ? "#0077cc" : "#e1ecf4")};
  color: ${(props) => (props.selected ? "#ffffff" : "#39739d")};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.selected ? "#0077cc" : "#d0e3f1")};
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
