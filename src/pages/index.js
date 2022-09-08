import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Taxfox undegoiung maintenance" />

    <div className={styles.textCenter}>
      <div id="article">
        <h1>Welcome !</h1>
        <StaticImage
          src="../images/svgviewer-png-output.png"
          loading="eager"
          /* width={64}
          quality={95} */
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />

        <h2>Our site is getting a little tune up and some love.</h2>

        <p>
          We apologize for the inconvenience, but we're performing a planned
          upgrade to our site to pack more features for you!
        </p>
        <p>
          You can still contact us at{" "}
          <a href="mailto:support@taxfox.com">support@taxfox.com</a> or send a
          Whatsapp message on <a href="tel:+918826528880">+91 88265 28880</a>.
        </p>
        <p>
          {" "}
          <strong>We'll be back up soon!</strong>
        </p>
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
