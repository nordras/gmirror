import React from "react";
import * as S from "./styles";

export type TSidebar = {
  profile: any;
};

const Emoji = (props: { label: string; symbol: string }) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

const Sidebar: React.FC<TSidebar> = ({ profile }) => {
  const user = profile.repositoryOwner;
  return (
    <S.Wrapper>
      <img src={user.avatarUrl} alt={"Avatar"} />
      <h2>
        {user.name} - {user.login}
      </h2>
      {user.email && (
        <h3>
          <Emoji label="email" symbol="✉" /> {user.email}
        </h3>
      )}
      <article>{user.bio}</article>
      <div>
        <span>
          <Emoji label="email" symbol="💓" /> Followers{" "}
          {user.followers.totalCount}
        </span>{" "}
        <span>
          <Emoji label="email" symbol="👥" /> Following Following{" "}
          {user.following.totalCount}
        </span>
      </div>
      <h5>{user.company}</h5>
      <div>{user.websiteUrl}</div>
      <div>{user.twitterUsername}</div>
      <div>{user.location}</div>
    </S.Wrapper>
  );
};

export default Sidebar;
