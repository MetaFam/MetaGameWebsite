/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


const Background = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const imageData = data.icon && data.icon.childImageSharp && data.icon.childImageSharp.fluid;
  
  return(
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      sx={{
        backgroundPosition: 'center 35%',
        backgroundSize: 350,
        backgroundBlendMode: 'screen',
        height: '100vh'
      }}
    >
      {children}
    </BackgroundImage>
  );
};

export default Background
