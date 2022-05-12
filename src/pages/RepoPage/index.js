import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Repo } from "../../components";

const RepoPage = () => {
  const { git_name, repo_name } = useParams();
  const [repoData, setRepoData] = useState([]);

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
  }, []);

  return (
    <Repo
      name={repo_name}
      forkCount={repoData.forks_count}
      description={repoData.description}
      repoUrl={repoData.html_url}
    />
  );
};

export default RepoPage;
