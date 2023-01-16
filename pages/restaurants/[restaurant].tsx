import Layout from "../../components/Layout";
import Image from "next/legacy/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Restaurants(props) {
  const { restaurant } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  const photos = restaurant.attributes.photos.data;

  const images = [];

  photos.map((pic) =>
    images.push(`http://localhost:1337${pic.attributes.formats.medium.url}`)
  );

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  console.log(currentIndex);

  return (
    <Layout>
      <div className="">
        <div className="max-w-7xl h-25 mx-auto relative">
          <img
            src={images[currentIndex]}
            alt="restaurant pic"
            className="h-full w-full flex mx-auto object-cover bg-slate-400 object-cover"
          />
          <button
            className="absolute top-[50%] translate-y-[-50%] left-2"
            onClick={handlePreviousClick}>
            <BsChevronCompactLeft color="white" />
          </button>
          <button
            className="absolute top-[50%] translate-y-[-50%] right-2 "
            onClick={handleNextClick}>
            <BsChevronCompactRight color="white" />
          </button>
        </div>
        <div className="clear-both">
          <h1 className="text-6xl p-3 m-3">{restaurant.attributes.Name}</h1>
          <div className="flex justify-around my-4">
            <span>By Jason Liu</span>
            <span>{restaurant.attributes.createdAt}</span>
          </div>

          <p className="my-3 px-3">{restaurant.attributes.review}</p>
          <p className="text-xl text-center">
            {restaurant.attributes.rating}/10
          </p>
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
