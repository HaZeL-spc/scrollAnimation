import styled, { ThemeProvider } from "styled-components";
import PageComponent from "./PageComponent";

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

// const PageComponent = styled.div`
//   height: 100vh;
//   background-color: ${(props) => props.theme.pageBackground};
// `;

const MainPage = () => {
  return (
    <Main>
      <ThemeProvider>
        <PageComponent />
      </ThemeProvider>
    </Main>
  );
};

export default MainPage;
