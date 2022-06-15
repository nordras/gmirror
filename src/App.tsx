import React, { useCallback, useEffect, useState } from "react";
import "./AppStyle.ts";

import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay/hooks";
import RelayEnvironment from "./services/RelayEnvironment";
import { graphql } from "babel-plugin-relay/macro";

import { AppRepositoryOwnerQuery } from "./__generated__/AppRepositoryOwnerQuery.graphql";

// Components
import Sidebar from "../src/components/sidebar";
import Repolist from "../src/components/repolist";

// Style
import * as S from "./AppStyle";

const { Suspense } = React;

const RepositoryOwnerQuery = graphql`
  query AppRepositoryOwnerQuery($username: String!) {
    repositoryOwner(login: $username) {
      ... on User {
        avatarUrl
        name
        login
        email
        status {
          id
        }
        bio
        location
        company
        websiteUrl
        twitterUsername
        followers {
          totalCount
        }
        following {
          totalCount
        }
      }
      repositories(last: 8) {
        nodes {
          id
          name
          description
          primaryLanguage {
            id
            name
          }
          stargazerCount
          forkCount
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery<AppRepositoryOwnerQuery>(
  RelayEnvironment,
  RepositoryOwnerQuery,
  {
    username: "nordras",
  }
);

function App(props: { preloadedQuery: typeof preloadedQuery }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("nordras");

  const data = usePreloadedQuery<AppRepositoryOwnerQuery>(
    RepositoryOwnerQuery,
    props.preloadedQuery
  );

  const [queryRef, loadQuery] = useQueryLoader<AppRepositoryOwnerQuery>(
    RepositoryOwnerQuery,
    props.preloadedQuery /* initial query ref */
  );

  // const refetch = useCallback(() => {
  //   loadQuery({ username });
  // }, [loadQuery, username]);

  // useEffect(() => console.log("queryRef", queryRef), [queryRef]);

  function searchFunc(value: string) {
    console.log("searchFunc", value);
    setUsername(value);
  }

  return (
    <S.App className="App">
      <Sidebar profile={data} search={{ searchFunc, loading }} />
      <Repolist repositories={data} />
    </S.App>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
const AppRoot = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={"Loading..."}>
      <App preloadedQuery={preloadedQuery} />
    </Suspense>
  </RelayEnvironmentProvider>
);

export default AppRoot;
