const repositoryOwnerQuery = `query {
  repositoryOwner (login: "facebook") {
    repositories {
      totalCount
    }
    repository(name: "react") {
      description
      forks {
        totalCount
      }
      issues {
        totalCount
      }
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      pullRequests {
        totalCount
      }
      labels(first:10) {
        edges {
          node {
            name
          }
        }
      }
      milestones(first:10) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
}`;

export default repositoryOwnerQuery;
