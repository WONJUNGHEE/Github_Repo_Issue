import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import IssueItem from "./Form/IssueItem";
import Pagination from "./Pagination";

const Issue_List = () => {
  const localRepo = localStorage.getItem("data");
  const [issue, setIssue] = useState<any[]>([]);
  const repos = localRepo !== null ? JSON.parse(localRepo) : [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let ArrIssue: any = [];
  repos.forEach((el: any) => {
    ArrIssue.push(axios.get(`https://api.github.com/repos/${el.name}/issues`));
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 4;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (tmp: any[]) => {
    let currentPost = tmp.slice(indexOfFirst, indexOfLast);
    return currentPost;
  };
  function a(a: any, b: any) {
    if (a.updated_at.slice(0, 10) < b.updated_at.slice(0, 10)) {
      return 1;
    } else {
      return -1;
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      await axios.all(ArrIssue).then(
        axios.spread((res1: any, res2: any, res3: any, res4: any) => {
          let iss = [];
          if (res1 !== undefined) {
            iss.push(...res1.data);
          }
          if (res2 !== undefined) {
            iss.push(...res2.data);
          }
          if (res3 !== undefined) {
            iss.push(...res3.data);
          }
          if (res4 !== undefined) {
            iss.push(...res4.data);
          }

          iss.sort(a);
          setIssue(iss);
        })
      );
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let cnt = 0;
  return (
    <Article>
      <h1>이슈 목록</h1>
      {issue.length !== 0
        ? currentPosts(issue).map((is: any) => (
            <IssueItem data={is} key={cnt++} />
          ))
        : "이슈가 없습니다."}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={issue.length}
        paginate={setCurrentPage}
        curpage={currentPage}
      ></Pagination>
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

export default Issue_List;
