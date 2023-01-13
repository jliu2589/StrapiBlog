import Card from "./Card.js";
import Link from "next/link.js";

function Restaurant_List({ props }) {
  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {props.map((res) => (
        <Card key={res.attributes.id}>
          <Link href={`/restaurants/${res.attributes.Name}`}>
            <h3 className="text-xl font-bold hover:cursor-pointer">
              {res.attributes.Name}
            </h3>
          </Link>
          <p>{res.attributes.address}</p>
          <p>{res.attributes.rating}</p>
        </Card>
      ))}
    </div>
  );
}
export default Restaurant_List;
