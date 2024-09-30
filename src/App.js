import React from "react";
import { Provider } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import store from "./store";
import TrendingTags from "./components/Trending/TrendingTags";
import QuestionList from "./components/Question/QuestionList";
import SearchBar from "./components/Search/SearchBar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.header`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  color: #0077cc;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>StackOverflow Clone</Title>
          <SearchBar />
        </Header>
        <main>
          <TrendingTags />
          <QuestionList />
        </main>
      </AppContainer>
    </Provider>
  );
}

export default App;
