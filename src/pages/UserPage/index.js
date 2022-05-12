import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Repo } from "../../components";

const UserPage = () => {
  const { git_name, repo_name } = useParams();
  const [repoData, setRepoData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function searchApi(searchString) {
      try {
        const result = await axios.get(
          `https://api.github.com/users/${searchString}/repos`
        );
        setrepoData(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    searchApi(submitValue);
  }, [submitValue]);

  useEffect(() => {
    async function getRepoData(git_name, repo_name) {
      try {
        const result = await axios.get(
          `https://api.github.com/repos/${git_name}/${repo_name}`
        );
        setRepoData(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    getRepoData(git_name, repo_name);
    repoData.map((s, i) => (
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
  }, []);

  useEffect(() => {}, []);

  function renderRepos() {
    return repoData.map((s, i) => (
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
      <ol>{renderRepos()}</ol>
      <Repo
        name={repo_name}
        forkCount={repoData.forks_count}
        description={repoData.description}
        repoUrl={repoData.html_url}
      />
    </>
  );
};

export default UserPage;
