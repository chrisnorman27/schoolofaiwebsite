import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import TopImage from '../components/index/TopImage';
import AboutUs from '../components/index/AboutUs';
import FindYourLocal from '../components/index/FindYourLocal';
import Courses from '../components/index/Courses';
import Instructors from '../components/index/Instructors';
import NavBar from '../components/common/NavBar';

import GetNewsletter from '../components/index/GetNewsletter';
import Footer from '../components/common/Footer';

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        );

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
    }
`;
