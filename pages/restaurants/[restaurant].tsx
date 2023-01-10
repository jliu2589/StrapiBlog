import Layout from "../../components/Layout";
import Image from "next/image";

function Restaurants(props) {
  //const restaurant = data.filter(res => res.slug === slug)

  const { restaurant } = props;

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  const photos = restaurant.attributes.photos.data;

  const slideshow = photos.map((pic) => {
    return (
      <img
        src={`http://localhost:1337${pic.attributes.formats.medium.url}`}
        alt={pic.attributes.formats.medium.name}
        key={pic.attributes.formats.hash}
      />
    );
  });

  return (
    <Layout>
      <h1>{restaurant.attributes.Name}</h1>
      <div>{slideshow}</div>
    </Layout>
  );
  4;
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
