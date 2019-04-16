import Link from "next/link";
import Head from "next/head";
import "../styles.scss";

export default () => (
  <>
    <Head>
      <title>Labour Hopscotch</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="main-body">
      <div className="example">Hello World!</div>
      <div className="hopscotch-title">Labour Hopscotch</div>
      <div className="hopscotch-logo">
        <img
          className="hopscotch-logo-image"
          src="https://res.cloudinary.com/bshano/image/upload/f_auto/v1555445564/Labour%20Hopscotch/tumblr_inline_ots3nqPcJR1uq425a_400.jpg"
        />
      </div>
      <div className="body-text">
        The Irish National Maternity hospital is making strides towards evidence
        based care with it’s award winning innovative ‘Labour Hopscotch’ created
        by a forward thinking Midwife Sinead Thompson. Mobility in labour has
        been shown in study after study to shorten labour, reduce fetal distress
        and reduce the need for medication as well as improving mum’s feelings
        of control and satisfaction.
      </div>
      <div>
        <Link href="/about">
          <a>Page1</a>
        </Link>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Coming+Soon|Roboto");
        .main-body,
        body {
          background-color: #597d89;
          font-family: "Roboto", sans-serif;
          color: #fff;
          text-align: justify;
        }
        .hopscotch-title {
          color: #fff;
          text-align: center;
          padding: 1rem;
          font-size: 1.6rem;
          font-family: "Coming Soon", cursive;
          font-weight: bold;
        }
        .body-text {
          padding: 2rem;
        }
        .hopscotch-logo {
          margin: 0 auto;
          text-align: center;
        }
        .hopscotch-logo-image {
          border: 2px solid #444;
        }
      `}</style>
    </div>
  </>
);
