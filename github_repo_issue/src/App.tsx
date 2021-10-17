import styled from "styled-components";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Repository_List from "./components/Repository_List";
import Search_result from "./components/Search_result";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header>GitHub Repo 모음집</Header>
        <Search />
        <Section>
          <Sidebar />
          <Switch>
            <Route path="/Search_result" component={Search_result} />
            <Route path="/Repository_List" component={Repository_List} />
            <Route path="/Search_result" component={Search_result} />
          </Switch>
        </Section>
      </Wrapper>
    </BrowserRouter>
  );
};

const Header = styled.header`
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

  justify-content: center;
`;
const Wrapper = styled.div``;
export default App;
