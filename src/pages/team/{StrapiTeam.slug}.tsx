import * as React from "react"
import { graphql, Script } from "gatsby"
import TeamView from "../../views/team-view"
import SEO from "../../components/seo"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

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


export const Head = ({ data }) => {
  return (
    <>
      <SEO
        title={`${data.strapiTeam.name} | ${useSiteMetadata().title}`}
        // TODO image
        description={data.strapiTeam?.excerpt}
        image={data.strapiTeam?.avatar?.localFile?.url}
        url={`/team/${data.strapiTeam.slug}`}
      />
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "${data.strapiTeam.name}",
            "url": "${useSiteMetadata().siteUrl}/team/${data.strapiTeam.slug}",
            "image": "${data.strapiTeam.avatar?.localFile?.url}",
            "description": "${data.strapiTeam?.excerpt}",
            "jobTitle": "Team Member",
            "worksFor": {
              "@type": "Organization",
              "name": "${useSiteMetadata().title}"
            }
          }
        `}
      </Script>
    </>
  )
}
