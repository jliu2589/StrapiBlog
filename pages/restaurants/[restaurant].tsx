import Layout from "../../components/Layout";

function Restaurants(props) {
  //const restaurant = data.filter(res => res.slug === slug)

  const { restaurant } = props;

  console.log(restaurant);

  return (
    <Layout>
      <h1>{restaurant.attributes.Name}</h1>
    </Layout>
  );
  4;
}
export default Restaurants;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { restaurant: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const restaurantID = params.restaurant;

  const res = await fetch(`${process.env.API_URL}/api/Restaurants?populate=*`);
  const data = await res.json();

  const restaurant = data.data.find(
    (restaurant) => restaurant.attributes.Name === restaurantID
  );

  console.log(restaurant);

  return {
    props: { restaurant },
  };
}
