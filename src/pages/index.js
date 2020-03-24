import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Navigation from "../components/Navigation"
import Heading from "../components/Heading"
import Footer from "../components/Footer"
import LeadCard from "../components/LeadCard"
import Author from "../components/Author"
import Subscribe from "../components/Subscribe"
import Post from "../components/Post"

const IndexPage = () => (
  <div className="bg-gray-200 font-sans leading-normal tracking-normal">
    {/* <Layout> */}
    {/* <SEO title="Home" />
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
<Image />
</div>
<Link to="/page-2/">Go to page 2</Link>
<div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
<div className="flex-shrink-0">
<Image className="h-12 w-12"  alt="ChitChat Logo"/>
</div>
<div className="ml-6 pt-1">
<h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
<p className="text-base text-gray-600 leading-normal">
You have a new message!
</p>
</div>
</div> */}

    <Heading />

    <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div className="mx-0 sm:mx-6">
        {/* <Navigation /> */}

        {/* <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t"> */}
          <LeadCard />

          {/* <div className="flex flex-wrap justify-between pt-12 -mx-6">
            <Post wClass="md:w-1/3" />
            <Post wClass="md:w-1/3" />
            <Post wClass="md:w-1/3" />
            <Post wClass="md:w-1/2" />
            <Post wClass="md:w-1/2" />
            <Post wClass="md:w-2/3" />
            <Post wClass="md:w-1/3" />
          </div> */}
        {/* </div> */}

        {/* <Subscribe />
        <Author /> */}
      </div>
    </div>

    {/* <Footer /> */}
    {/* </Layout> */}
  </div>
)

export default IndexPage
