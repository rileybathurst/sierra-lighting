import * as React from "react"
import { graphql } from "gatsby"
import TeamView from "../../views/team-view"

export const query = graphql`
  query TeamQuery($slug: String!) {
    strapiTeam(slug: { eq: $slug }) {
      id
      name
      slug
    }
  }
`

const TeamPage = ({ data }) => {
  const team = data.strapiTeam;
  return (
    <TeamView
      team={team}
    />
  );
};

export default TeamPage;
