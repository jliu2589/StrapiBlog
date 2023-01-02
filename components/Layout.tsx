import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Link from "next/link";

type Props = {
  title: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
};

function Layout({ title, keywords, description, children }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Best London Restaurants",
  keywords: "Michelin Star, Best Steak, Somebody Feed Phil",
  description: "Our guide to London Culinary Scene!",
};
export default Layout;
