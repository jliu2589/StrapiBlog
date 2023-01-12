import Layout from "../../components/Layout";
import Image from "next/legacy/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Restaurants(props) {
  //const restaurant = data.filter(res => res.slug === slug)

  const { restaurant } = props;

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  const photos = restaurant.attributes.photos.data;

  const image = [];

  photos.map((pic) =>
    image.push(`http://localhost:1337${pic.attributes.formats.medium.url}`)
  );

  console.log(image);

  return (
    <Layout>
      <div className="relative">
        <h1>{restaurant.attributes.Name}</h1>
        <div>
          <img src={image[0]} alt="restaurant pic" />
          <div className="absolute left-0 top-50% transform -translate-y-1/2 rounded-full p-2 bg-gray-500 text-white hover:bg-gray-600">
            <BsChevronCompactLeft size={30} />
          </div>
          <div className="">
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Restaurants;

export async function getStaticPaths() {
  return {
    paths: [{ params: { restaurant: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const restaurantID = params.restaurant; //Restaurant Name;

  const res = await fetch(`${process.env.API_URL}/api/Restaurants?populate=*`);
  const data = await res.json();

  const restaurant = data.data.find(
    (restaurant) =>
      restaurant.attributes.Name.replace(/%20/g, " ") === restaurantID
  );

  return {
    props: { restaurant },
  };
}
