import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0077cc;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;
