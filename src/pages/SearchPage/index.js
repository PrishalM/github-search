import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const [showData, setShowData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function searchApi(searchString) {
      try {
        const result = await axios.get(
          `https://api.github.com/users/${searchString}/repos`
        );
        setShowData(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    searchApi(submitValue);
  }, [submitValue]);

  function renderShows() {
    return showData.map((s, i) => (
      <li
        className="show-repo"
        key={i}
        onClick={() => {
          navigate(`/${s.full_name}`);
        }}
      >
        {s.name}
      </li>
    ));
  }

  function handleInput(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitValue(inputValue);
    setInputValue("");
  }

  return (
    <>
      <h2>Search for a GitHub User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleInput}
          value={inputValue}
        ></input>
        <button type="submit">Search</button>
      </form>
      <ol>{renderShows()}</ol>
    </>
  );
};

export default SearchPage;
