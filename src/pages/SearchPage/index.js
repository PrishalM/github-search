import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const navigate = useNavigate();

  function handleInput(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitValue(inputValue);
    navigate(`/${inputValue}`);
  }

  return (
    <>
      <h2>Search for a Github User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleInput}
          value={inputValue}
        ></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchPage;
