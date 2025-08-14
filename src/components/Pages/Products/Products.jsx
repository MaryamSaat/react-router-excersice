import { useContext } from "react";
import { MyContext } from "../../App/App";

const Products = () => {
  const { products } = useContext(MyContext);
  return products?.map((item) => {
    return (
      <div
        className="w-[30%] bg-[#2b2b2b] mx-auto shadow p-5 box-border my-5 rounded-2xl"
        key={item.id}
      >
        <h1 className="font bold text-center my-1.5 !text-green-700 !text-[30px] line-clamp-1">
          {item.title}
        </h1>
        <img
          className="w-[50%] block mx-auto rounded-2xl"
          alt={item.slug}
          src={item.category.image}
        />
        <h4 className="!text-amber-500">{item.price}$</h4>
        <p className="text-justify line-clamp-3">{item.description}</p>
      </div>
    );
  });
};

export default Products;
