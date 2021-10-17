import styled from "styled-components";

const InputWithLabel = ({ name, label, ...rest }: any) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <Input name={name} {...rest} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 10px 0;
  position: relative;

  font-size: 14px;

  text-align: center;
`;

const Label = styled.label`
  pointer-events: none;
  left: 10px;
  padding-bottom: 15px;
  line-height: 6px;

  font-size: 20px;

  padding: 6px;
`;

const Input = styled.input`
  padding: 9px 0px 7px 9px;
  font-size: 15px;
  width: 20rem;
  height: 1.2rem;
  outline: none;
  background: #fafafa;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
`;

export default InputWithLabel;
