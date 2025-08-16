import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";

const Products = () => {
  const { products } = useContext(MyContext);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
      {products?.map((item) => {
        return (
          <div className="bg-[#1C6EA4] shadow p-3 box-border rounded-xl" key={item.id}>
            <h1 className="font-bold text-center my-1 !text-[#FFF9AF] !text-lg md:text-xl lg:text-2xl line-clamp-1">{item.title}</h1>
            <img
              className="w-[60%] block mx-auto rounded-lg"
              alt={item.slug}
              src={item.category.image}
              onError={(e) => {
                e.target.src = `https://picsum.photos/300/200?random=${item.id}`;
              }}
            />
            <h4 className="!text-amber-500 text-sm md:text-base">{item.price}$</h4>
            <p className="text-justify line-clamp-2 text-xs md:text-sm">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
