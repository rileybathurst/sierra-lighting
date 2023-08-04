import * as React from "react"
import { graphql } from "gatsby"
import TeamView from "../../views/team-view"

export const query = graphql`
  query TeamQuery($slug: String!) {
    strapiTeam(slug: { eq: $slug }) {
      id
      name
      slug
      excerpt
      bio { data { bio } }

      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData (
              layout: CONSTRAINED
              breakpoints: [222, 444, 880]
              width: 444
              quality: 80
            )
          }
          childrenImageSharp {
            original {
              height
              width
            }
          }
          url
        }
      }

      projects {
        ...projectCard
      }
    }
  }
`

const TeamPage = ({ data }) => {
  return (
    <TeamView
      team={data.strapiTeam}
    />
  );
};

export default TeamPage;
