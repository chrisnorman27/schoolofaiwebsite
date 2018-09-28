import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import TopImage from '../components/index/TopImage';
import AboutUs from '../components/index/AboutUs';
import FindYourLocal from '../components/index/FindYourLocal';
import Courses from '../components/index/Courses';
import Instructors from '../components/index/Instructors';
import NavBar from '../components/index/NavBar';

import Layout from '../components/layout';
import { rhythm } from '../utils/typography';
import GetNewsletter from '../components/index/GetNewsLetter';
import Footer from '../components/index/Footer';

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        );
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <div style={{ overflowX: 'hidden' }}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={siteTitle}
                />
                <NavBar />
                <TopImage />
                <AboutUs />
                <FindYourLocal />
                <Courses />
                <Instructors />
                <GetNewsletter />
                <Footer />
            </div>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
