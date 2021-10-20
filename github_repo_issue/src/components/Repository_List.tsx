import { useState } from "react";
import styled from "styled-components";
import Item from "./Form/Item";

const Repository_List = () => {
  const localRepo = localStorage.getItem("data");

  const [repos, setRepos] = useState(
    localRepo !== null ? JSON.parse(localRepo) : []
  );

  const RepoDelete = (e: any) => {
    for (let el = 0; el < repos.length; el++) {
      if (repos[el].name === e.target.value) {
        repos.splice(el, 1);
        setRepos([...repos]);
        localStorage.setItem("data", JSON.stringify(repos));
        break;
      }
    }
  };

  return (
    <Article>
      <h1>목록</h1>
      {repos.length !== 0
        ? repos.map((repo: any) => (
            <Item
              data={repo}
              key={repo.name}
              ButtonClick={RepoDelete}
              ButtonName="삭제"
            />
          ))
        : "목록이 없습니다."}
    </Article>
  );
};
const Article = styled.div`
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  width: 70%;
  float: right;
  padding: 2rem;
`;

export default Repository_List;
