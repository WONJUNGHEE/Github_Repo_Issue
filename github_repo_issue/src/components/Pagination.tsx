import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate, curpage }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Article>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi
              key={number}
              className="page-item"
              onClick={() => paginate(number)}
              style={number === curpage ? { color: "red" } : { color: "blue" }}
            >
              <PageSpan className="page-link">{number}</PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </Article>
  );
};

const Article = styled.div`
  float: right;
  padding: 1rem;
`;
const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  border-radius: 4px;
  color: white;
  padding: 2px;
  background-color: gainsboro;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
export default Pagination;
