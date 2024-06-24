import * as React from "react"
import { graphql, Script } from "gatsby"
import TeamView from "../../views/team-view"
import SEO from "../../components/seo"


export const query = graphql`
  query TeamQuery($slug: String!) {
    strapiTeam(slug: { eq: $slug }) {
      ...teamFragment

      projects {
        ...projectCard
      }
    }

    strapiAbout {
      businessName
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
        title={`${data.strapiTeam.name}`}
        // TODO image
        description={data.strapiTeam?.excerpt}
        image={data.strapiTeam?.avatar?.localFile?.url}
        url={`/team/${data.strapiTeam.slug}`}
      />

      {/* // TODO: jobTitle */}
      {/* TODO: move the organization to seo file */}
      {/* works for has to be an org but that needs an address so normally use local bus */}
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "${data.strapiTeam.name}",
            "url": "/team/${data.strapiTeam.slug}",
            "image": "${data.strapiTeam.avatar?.localFile?.url}",
            "description": "${data.strapiTeam?.excerpt}",
            "jobTitle": "Team Member",
            "worksFor": {
              "@type": "Organization",
              "name": "${data.strapiAbout.businessName}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12831 Dulzura Street"
                "addressLocality": "Truckee",
                "addressRegion": "CA",
                "postalCode": "96161",
                "addressCountry": "US"
              }
            }
          }
        `}
      </Script>
    </>
  )
}
