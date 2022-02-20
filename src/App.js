import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PageComponent from "./Components/PageComponent";
import "./App.css";

const firstTheme = {
  pageBackground: "#12802e",
  fontColor: "white",
  fontSize: "60px",
  cursor: "auto",
};

const firstThemeInactive = {
  pageBackground: "#66806c",
  fontColor: "white",
  fontSize: "50px",
  cursor: "pointer",
};

const secondTheme = {
  pageBackground: "#152bab",
  fontColor: "white",
  fontSize: "60px",
  cursor: "auto",
};

const secondThemeInactive = {
  pageBackground: "#7b82a8",
  fontColor: "#b0a8ed",
  fontSize: "50px",
  cursor: "pointer",
};

const thirdTheme = {
  pageBackground: "#9c178b",
  fontColor: "white",
  fontSize: "60px",
  cursor: "auto",
};

const thirdThemeInactive = {
  pageBackground: "#966b91",
  fontColor: "#ebd1e7",
  fontSize: "50px",
  cursor: "pointer",
};

const pageFirst = {
  active: firstTheme,
  inactive: firstThemeInactive,
};

const pageSecond = {
  active: secondTheme,
  inactive: secondThemeInactive,
};

const pageThird = {
  active: thirdTheme,
  inactive: thirdThemeInactive,
};

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const [first, setFirst] = useState("active");
  const [second, setSecond] = useState("inactive");
  const [third, setThird] = useState("inactive");

  return (
    <Main>
      <ThemeProvider theme={pageFirst[first]}>
        <PageComponent
          which="first"
          setFirst={setFirst}
          setSecond={setSecond}
          setThird={setThird}
        />
      </ThemeProvider>
      <ThemeProvider theme={pageSecond[second]}>
        <PageComponent
          which="second"
          setFirst={setFirst}
          setSecond={setSecond}
          setThird={setThird}
        />
      </ThemeProvider>
      <ThemeProvider theme={pageThird[third]}>
        <PageComponent
          which="third"
          setFirst={setFirst}
          setSecond={setSecond}
          setThird={setThird}
        />
      </ThemeProvider>
    </Main>
  );
}

export default App;
