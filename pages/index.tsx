import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useState } from "react";
import Restaurant_List from "../components/Restaurant_List";

const Home: NextPage = (props) => {
  const [data, setData] = useState(props.data.data);

  return (
    <Layout>
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            Find the best restaurants in
            <span className="underline decoration-blue-700 "> London</span>
          </h1>
          <h2>Sharing with you our guide to London</h2>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://www.shutterstock.com/image-vector/london-clock-tower-logo-big-600w-336201224.jpg"
          alt="London logo"
        />
      </div>
      <div>
        <Restaurant_List props={data} />
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/Restaurants`);
  const data = await res.json();
  return {
    props: { data },
  };
}
