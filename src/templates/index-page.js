import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  profilePicture,
  box1,
  box2,
  box3,
  box4,
  description,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className=""
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            fontFamily: 'Algerian Mesa W05 Regular',
            fontSize: '6rem',
          }}
        >
          {title}
        </h1>
        <h3
          className="is-size-1-mobile is-size-1-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
            letterSpacing: '.4rem'
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-4">
                    <section className="section">
                      <a href={box1.link}>
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '250px',
                            display: 'inline-block',
                          }}
                        >
                          <PreviewCompatibleImage imageInfo={box1} />
                        </div>
                        <p>{box1.title}</p>
                      </div>
                      </a>
                    </section>
                    <section>
                      <a href={box2.link}>
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '250px',
                            display: 'inline-block',
                          }}
                        >
                          <PreviewCompatibleImage imageInfo={box2} />
                        </div>
                        <p>{box2.title}</p>
                      </div>
                      </a>
                    </section>
                  </div>
                  <div className="column is-4">
                    <section className="section">
                      <a href={box3.link}>
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '250px',
                            display: 'inline-block',
                          }}
                        >
                          <PreviewCompatibleImage imageInfo={box3} />
                        </div>
                        <p>{box3.title}</p>
                      </div>
                      </a>
                    </section>
                    <section>
                      <a href={box4.link}>
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '250px',
                            display: 'inline-block',
                          }}
                        >
                          <PreviewCompatibleImage imageInfo={box4} />
                        </div>
                        <p>{box4.title}</p>
                      </div>
                      </a>
                    </section>
                  </div>
                  <div className="column is-4">
                    <section className="section">
                      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                      <div class="elfsight-app-636a4431-896c-474b-b44b-99415a01f252"></div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  profilePicture: PropTypes.shape({
    alt: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        profilePicture={frontmatter.profilePicture}
        box1={frontmatter.box1}
        box2={frontmatter.box2}
        box3={frontmatter.box3}
        box4={frontmatter.box4}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
        profilePicture {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        box1 {
          title
          alt
          link
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        box2 {
          title
          alt
          link
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        box3 {
          title
          alt
          link
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        box4 {
          title
          alt
          link
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
