import React from "react";
import * as S from "./styles";

export type TRepolist = {
  repositories: any;
};

const Repolist: React.FC<TRepolist> = ({ repositories }) => {
  const repos = repositories.repositoryOwner.repositories.nodes;
  return (
    <S.Wrapper>
      <h5>Repositories</h5>
      <br />
      <S.RepoGrid>
        {repos.map((repo: any) => (
          <S.Repo key={repo.id}>
            <div>{repo.name}</div>
            <div>{repo.description}</div>
            <div>
              Language:{" "}
              {repo.primaryLanguage
                ? repo.primaryLanguage?.name
                : "Not Available"}
            </div>
            <div>Stars: {repo.stargazerCount}</div>
            <div>Forks: {repo.forkCount}</div>
          </S.Repo>
        ))}
      </S.RepoGrid>
    </S.Wrapper>
  );
};

export default Repolist;
