import styled from "styled-components";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Repository_List from "./components/Repository_List";
import Search_result from "./components/Search_result";
import Main from "./components/Main";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Issue_List from "./components/Issue_List";
const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Header>GitHub Repo 모음집</Header>
        </Link>
        <Search />
        <Section>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Search_result" component={Search_result} />
            <Route path="/Repository_List" component={Repository_List} />
            <Route path="/Issue_List" component={Issue_List} />
          </Switch>
        </Section>
      </Wrapper>
    </BrowserRouter>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  font-size: 30px;
  display: flex;
  justify-content: center;
  height: 55px;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
  background-color: black;
  color: white;
`;
const Section = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Wrapper = styled.div``;
export default App;
