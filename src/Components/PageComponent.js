import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { useEffect, useState } from "react";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: 0.5s ease 0.5s;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: ${(props) => props.theme.cursor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.fontSize};
  transition-delay: 1s;
  transition: 0.5s ease 0.5s;
`;

const ChangePageButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.fontColor};
  &:focus {
    outline: none;
  }
  transition: 0.5s ease 0.5s;
`;

const TransparentButton = styled.div`
  height: 40px;
  width: 40px;
  margin: 30px;
`;

const PageComponent = (props) => {
  const pages = ["first", "second", "third"];
  const [pageUp, setPageUp] = useState("");
  const [pageDown, setPageDown] = useState("");

  useEffect(() => {
    const index = pages.indexOf(props.which);
    if (index < pages.length - 1) {
      setPageDown(pages[index + 1]);
    }
    if (index > 0) {
      setPageUp(pages[index - 1]);
    }
  }, []);

  const changeUp = () => {
    if (props.which === "second") {
      props.setFirst("active");
      props.setSecond("inactive");
      props.setThird("inactive");
    } else {
      props.setFirst("inactive");
      props.setSecond("active");
      props.setThird("inactive");
    }
  };

  const changeDown = () => {
    if (props.which === "first") {
      props.setFirst("inactive");
      props.setSecond("active");
      props.setThird("inactive");
    } else {
      props.setFirst("inactive");
      props.setSecond("inactive");
      props.setThird("active");
    }
  };

  return (
    <Page>
      <Container id={props.which}>
        {props.which !== "first" ? (
          <ChangePageButton as="a" href={`#${pageUp}`} onClick={changeUp}>
            <FiArrowUp size={40} />
          </ChangePageButton>
        ) : (
          <TransparentButton />
        )}
        <Title>{props.which} page</Title>
        {props.which !== "third" ? (
          <ChangePageButton as="a" href={`#${pageDown}`} onClick={changeDown}>
            <FiArrowDown size={40} />
          </ChangePageButton>
        ) : (
          <TransparentButton />
        )}
      </Container>
    </Page>
  );
};

export default PageComponent;
