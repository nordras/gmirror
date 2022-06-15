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

import type { AppRepositoryOwnerQuery as AppRepositoryOwnerQueryType } from "./__generated__/AppRepositoryOwnerQuery.graphql";
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

// Load before everything
const preloadedQuery = loadQuery<AppRepositoryOwnerQuery>(
  RelayEnvironment,
  RepositoryOwnerQuery,
  {
    username: "igorimaginationmedia",
  }
);

// type Props = {
//   initialQueryRef: PreloadedQuery<AppQueryType>;
// };

// function App(props: { preloadedQuery: typeof preloadedQuery }) {

const Content = (props: any) => {
  console.log(props, props.queryRef);

  const data = usePreloadedQuery<AppRepositoryOwnerQueryType>(
    RepositoryOwnerQuery,
    props.queryRef
  );

  function searchFunc(value: string) {
    props.refetch(value);
  }
  return (
    <>
      <S.App className="App">
        <Sidebar profile={data} search={{ searchFunc }} />
        {data && <Repolist repositories={data} />}
      </S.App>
    </>
  );
};

function App() {
  const [queryRef, loadQuery] = useQueryLoader<AppRepositoryOwnerQueryType>(
    RepositoryOwnerQuery,
    preloadedQuery
  );

  const refetch = (username: string) => loadQuery({ username });

  return <>{queryRef && <Content queryRef={queryRef} refetch={refetch} />}</>;
}

const AppRoot = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default AppRoot;
