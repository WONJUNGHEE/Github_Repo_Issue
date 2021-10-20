import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Aside>
      <div>
        <Link to={"/Repository_List"}>레포지토리 목록</Link>
      </div>
      <div>
        <Link to={"/Issue_List"}>이슈 모음</Link>
      </div>
    </Aside>
  );
};

const Aside = styled.aside`
  @media screen and (max-width: 700px) {
    display: none;
  }
  height: 100px;
  margin-left: 5%;
  float: left;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;
  & > div {
    margin: 1rem;
  }

  & > div > a {
    text-decoration: none;

    color: gray;
  }
`;

export default Sidebar;
