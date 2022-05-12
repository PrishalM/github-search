import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowRepo } from "../../components";

const RepoPage = () => {
  const { full_name, repo_name } = useParams();
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    async function getShowData(full_name, repo_name) {
      try {
        const result = await axios.get(
          `https://api.github.com/repos/${full_name}/${repo_name}`
        );
        setShowData(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    getShowData(full_name, repo_name);
  }, []);

  return (
    <ShowRepo
      name={repo_name}
      forkCount={showData.forks_count}
      description={showData.description}
      repoUrl={showData.html_url}
    />
  );
};

export default RepoPage;
