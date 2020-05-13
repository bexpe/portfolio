import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import AboutMe from "../components/about-me"
import Quote from "../components/quote"
import Experience from "../components/experience"
import Gallery from "../components/gallery/gallery"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <AboutMe />
    <Quote />
    <Projects />
    <Skills />
    <Gallery />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage