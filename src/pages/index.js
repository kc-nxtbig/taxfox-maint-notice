import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Taxfox undegoiung maintenance" />

    <div className={styles.textCenter}>
      <h1>Welcome to</h1>
      <div id="article">
        <StaticImage
          src="../images/svgviewer-png-output.png"
          loading="eager"
          /* width={64}
          quality={95} */
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <img src="../images/svgviewer-png-output.png" />
        <h1>Our site is getting a little tune up and some love.</h1>
        <div>
          <p>
            We apologize for the inconvenience, but we're performing some
            maintenance. You can still contact us at{" "}
            <a href="mailto:support@taxfox.com">support@taxfox.com</a> or send a
            Whatsapp message on <a href="tel:+918826528880">+91 88265 28880</a>.
          </p>
          <p>
            {" "}
            <strong>We'll be back up soon!</strong>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
