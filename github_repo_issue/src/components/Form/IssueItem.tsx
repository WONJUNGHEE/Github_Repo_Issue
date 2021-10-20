import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const IssueItem = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const bodyOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Wrapper>
      <Detail>
        <RepoName>{data.repository_url.slice(29)} </RepoName>
        <IssueTitle>{data.title}</IssueTitle>
        <RepoDes>
          <BodyButton onClick={bodyOpen}>이슈 내용 보기</BodyButton>
          {open ? (
            data.body !== null ? (
              <ReactMarkdown>{data.body}</ReactMarkdown>
            ) : (
              "요약이 없습니다."
            )
          ) : null}
        </RepoDes>
        <RepoLink
          href={data.html_url}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          클릭 하시면 이슈로 이동합니다.
        </RepoLink>
        <RepoDate>{data.updated_at.slice(0, 10)}</RepoDate>
      </Detail>
    </Wrapper>
  );
};
const IssueTitle = styled.div`
  font-size: 1.5rem;
  padding-top: 5px;
  color: #7777ce;
`;
const Wrapper = styled.div`
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
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
const RepoDate = styled.div`
  padding-top: 5px;
`;

const BodyButton = styled.button`
  background: #2b779b;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;

  border: none;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    background: olive;
    color: black;
  }

  &:active {
    background: red;
  }
`;
export default IssueItem;
