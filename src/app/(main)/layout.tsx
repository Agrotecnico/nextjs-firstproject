
import Head from "next/head";
/* import './globals.css' */
import Navigation from '../../modules/home/navigation'


export default function PageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
      <>
      
        {/* <Head>
            <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
        </Head> */}
        <Navigation />
        <div className="container">
        {children}
        {/* <Footer /> */}
        </div>
      </>
    )
  }