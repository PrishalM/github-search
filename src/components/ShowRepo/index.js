import React from "react";

const ShowRepo = ({ name, forkCount, description, repoUrl }) => {
  return (
    <article className="repo-details">
      <h2>Repo name: {name}</h2>
      <h4 class="forks">Forks: {forkCount}</h4>
      <h5 class="repoLink">
        <a href={repoUrl} target="_blank">
          Click here to visit this repo
        </a>
      </h5>

      <p class="description">
        Description:{" "}
        {description !== null
          ? description
          : "No desciption has been set for this repo. Soz "}
      </p>
    </article>
  );
};

export default ShowRepo;
