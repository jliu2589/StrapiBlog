import Card from "./Card.js";

function Restaurant_List({ props }) {
  return (
    <div className="">
      {props.map((res) => (
        <Card key={res.attributes.id}>
          <h3>{res.attributes.Name}</h3>
          <p>{res.attributes.address}</p>
          <p>{res.attributes.rating}</p>
        </Card>
      ))}
    </div>
  );
}
export default Restaurant_List;
