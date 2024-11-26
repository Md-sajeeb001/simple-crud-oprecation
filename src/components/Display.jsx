import { useLoaderData } from "react-router-dom";
import DisplayCard from "./DisplayCard";
import { useState } from "react";

const Display = () => {
  const Loderdata = useLoaderData();

  const [coffees, setCoffees] = useState(Loderdata);

  return (
    <div className="max-w-5xl mx-auto my-12">
      <h2>Coffee Info. {coffees.length}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <DisplayCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></DisplayCard>
        ))}
      </div>
    </div>
  );
};

export default Display;
