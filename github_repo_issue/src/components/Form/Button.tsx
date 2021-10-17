import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  background: gray;
  color: whitesmoke;
  border-radius: 5px;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
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

const Button = ({ children, onClick, ...rest }: any) => (
  <Wrapper onClick={onClick} {...rest}>
    {children}
  </Wrapper>
);

export default Button;
