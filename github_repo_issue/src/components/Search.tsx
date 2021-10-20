import { useState } from "react";
import styled from "styled-components";
import Button from "./Form/Button";
import InputWithLabel from "./Form/InputWithLabel";
import axios from "axios";
import { useHistory } from "react-router";

const Search = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState<string>("");
  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const Search_button = async () => {
    await axios
      .get(`https://api.github.com/repos/${searchInput}`)
      .then((data: any) => {
        if (data.data.visibility === "public") {
          history.push("/Search_result", [
            {
              name: data.data.full_name,
              description: data.data.description,
              url: data.data.html_url,
            },
          ]);
        } else {
          alert("private 레포지토리입니다.");
        }
      })
      .catch((e) => {
        if (e.response.status === 404) {
          alert("검색 결과가 없습니다.");
        }
      });
  };
  const handleKeyPress = (e: any): void => {
    if (e.key === "Enter") {
      Search_button();
    }
  };
  return (
    <Wrapper>
      <InputWithLabel
        name="search"
        placeholder="Username/Repository 형식으로 입력해주세요."
        label="🔍"
        onChange={handleInputSearch}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={Search_button}>검색</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-top: 3rem;
`;
export default Search;
