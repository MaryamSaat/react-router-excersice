import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";

const Posts = () => {
  const { posts } = useContext(MyContext);
  return (
    <div className="flex flex-wrap justify-around items-center gap-3 md:gap-5">
      {posts?.map((item) => {
        return (
          <div key={item.id} className="w-[90%] sm:w-[45%] md:w-[40%] bg-[#1C6EA4] text-white p-4 md:p-7 rounded-2xl box-border shadow my-2 md:my-4">
            <h1 className="text-sm md:text-base">Author : {item.name}</h1>
            <h4 className="text-xs md:text-sm">Email : {item.email}</h4>
            <img
              className="rounded-2xl w-[40%] md:w-[50%]"
              src={item.avatar}
              onError={(e) => {
                e.target.src = `https://picsum.photos/200/200?random=${item.id}`;
              }}
              alt={`${item.name} avatar`}
            />
            <p className="text-justify line-clamp-3 !mt-3 md:!mt-5 text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati nisi eligendi incidunt et eos, esse itaque debitis sed dicta perferendis quam similique aut perspiciatis recusandae est delectus! Voluptatibus quaerat magnam dignissimos quod iste, facere temporibus fugit quae
              saepe obcaecati nulla dolores deserunt aut dolorum tempora perferendis? Minima, officiis odit?
            </p>
            <h6 className="!text-amber-700 text-xs md:text-sm">{item.creationAt}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
