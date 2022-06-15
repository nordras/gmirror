import React, { FormEvent, useState } from "react";
import * as S from "./styles";

export type TSidebar = {
  profile: any;
  search: {
    searchFunc: (value: string) => void;
    loading?: boolean;
  };
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

const Sidebar: React.FC<TSidebar> = ({ profile, search }) => {
  const user = profile.repositoryOwner;

  const [username, setUsername] = useState("");

  function submitFunc(event: FormEvent) {
    event.preventDefault();
    search.searchFunc(username);
  }

  return (
    <S.Wrapper>
      <S.Search onSubmit={submitFunc}>
        <input
          type={"text"}
          placeholder={"Github Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <button className={search.loading ? "sending" : ""}>Search</button>
      </S.Search>
      {user ? (
        <>
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
          <br />
          <div>
            <span>
              <Emoji label="Followers" symbol="💓" /> Followers{" "}
              {user.followers?.totalCount}
            </span>{" "}
            <span>
              <Emoji label="Following" symbol="👥" /> Following{" "}
              {user.following?.totalCount}
            </span>
          </div>
          <h5>{user.company}</h5>
          <div>{user.websiteUrl}</div>
          <div>{user.twitterUsername}</div>
          <div>{user.location}</div>
        </>
      ) : (
        <section>No users have been found</section>
      )}
    </S.Wrapper>
  );
};

export default Sidebar;
