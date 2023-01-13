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
      <div className="">
        <div className="max-w-7xl mx-auto">
          <img
            src={image[0]}
            alt="restaurant pic"
            className="h-25 w-25 flex mx-auto object-cover"
          />
        </div>
        <h1 className="text-6xl p-3 m-3">{restaurant.attributes.Name}</h1>
        <div className="flex justify-around my-4">
          <span>By Jason Liu</span>
          <span>{restaurant.attributes.createdAt}</span>
        </div>

        <p className="my-3 px-3">{restaurant.attributes.review}</p>
        <p className="text-xl text-center">{restaurant.attributes.rating}/10</p>
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
