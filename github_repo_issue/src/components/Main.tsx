import styled from "styled-components";

const Main = () => {
  return (
    <Article>
      <h1>원정희가 만든 Repository 이슈 모음소 입니다.</h1>
      <div>⭐️최대 4개까지만 등록이 가능합니다.</div>
      <div>⭐️하나의 Repository에서 최신 30개 까지만 가져옵니다. </div>
      <div>⭐️모든 Repository에서 최신순으로 나오게 됩니다. </div>
      <div>
        <ul>
          <li>검색창에 Username/Repository를 정확하게 입력해주세요.</li>
          <li>
            Repository를 등록하고 이슈 모음을 누르면 이슈를 볼 수 있습니다.
          </li>
          <li>목록에서 Repository를 관리할수 있습니다.</li>
          <li>제목을 누르면 Main 창으로 이동합니다.</li>
        </ul>
      </div>
    </Article>
  );
};
const Article = styled.div`
  width: 70%;
  float: right;
  padding: 2rem;
`;

export default Main;
