import Button from "./Button";
import styled from "styled-components";

const Item = ({ data, ButtonClick, ButtonName }: any) => {
  return (
    <Wrapper>
      <Detail>
        <RepoName>{data.name}</RepoName>
        <RepoDes>
          {/* 레포지토리 요약 :&nbsp; */}
          {data.description !== null ? data.description : "요약이 없습니다."}
        </RepoDes>
        <RepoLink href={data.url} target={"_blank"} rel="noopener noreferrer">
          클릭 하시면 레포지토리로 이동합니다.
        </RepoLink>
        <Button
          onClick={ButtonClick}
          value={data.name}
          style={{
            float: "right",
            fontSize: "1rem",
            margin: "10px 0",
            padding: "0.5rem 1rem  0.5rem 1rem  ",
          }}
        >
          {ButtonName}
        </Button>
      </Detail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;
const RepoName = styled.div`
  font-size: 2rem;
`;
const RepoDes = styled.div`
  padding-top: 10px;
  font-size: 1.25rem;
  color: gray;
`;
const RepoLink = styled.a`
  padding-top: 10px;
  color: green;
`;

export default Item;
