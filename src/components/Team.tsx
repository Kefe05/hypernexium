import Image from "next/image";
import { Card } from "./ui/card";

export default function Team() {
  return (
    <section className="py-20 px-6 ">
      <div>
        <h3 className="text-4xl">The Team</h3>
        <div className="flex">
          <Card>
           <Image src={"/two.jpg"} alt="two" width={400} height={300}  />
          </Card>
          <Card>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quae cupiditate, odio sint sed dolores iure? Id et tempora, ex officia, quod at, numquam nihil tenetur dignissimos reiciendis consectetur animi iusto non iste nam odit dolore sed. Numquam pariatur aliquid odit nulla eligendi amet dolore hic modi nisi esse debitis repudiandae dolorem possimus, earum minima totam ullam officia deserunt quas.
          </Card>
        </div>

      </div>
    </section>
  );
}
