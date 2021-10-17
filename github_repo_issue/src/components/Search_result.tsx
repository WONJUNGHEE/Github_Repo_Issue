import styled from "styled-components";
import Item from "./Form/Item";

const Search_result = (Search_data: any) => {
  const data = Search_data.location.state[0];
  const localRepo = localStorage.getItem("data");
  const repos = localRepo !== null ? JSON.parse(localRepo) : [];

  const subscribe = () => {
    if (repos.data === undefined) {
      if (repos.length > 4) {
        alert("더 이상 등록할 수 없습니다.");
      } else {
        let flag = true;
        for (const el of repos) {
          if (el.name === data.name) {
            alert("이미 등록된 레포지토리입니다.");
            flag = false;
            break;
          }
        }
        if (flag === true) {
          repos.push(data);
          localStorage.setItem("data", JSON.stringify(repos));
        }
      }
    } else {
      localStorage.setItem("data", JSON.stringify([data]));
    }
  };

  return (
    <Article>
      <h1>검색결과</h1>
      <Item data={data} ButtonClick={subscribe} ButtonName="등록" />
    </Article>
  );
};
const Article = styled.div`
  width: 70%;
  float: right;
  padding: 2rem;
`;

export default Search_result;
