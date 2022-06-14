import React from "react";
import * as S from "./styles";

export type TSidebar = {
  profile: any;
};

const Sidebar: React.FC<TSidebar> = ({ profile }) => {
  const user = profile.repositoryOwner;
  return (
    <S.Wrapper>
      <img src={user.avatarUrl} />
      <h2>{user.name}</h2>
      <h3>{user.login}</h3>
      <article>{user.bio}</article>
      <div>{user.status.id}</div>
      {/* {status} {location} {company} {websiteUrl} {twitterUsername} */}
    </S.Wrapper>
  );
};

export default Sidebar;
