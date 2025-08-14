import { useContext } from "react";
import { MyContext } from "../../App/App";

const Posts = () => {
  const { posts } = useContext(MyContext);
  return (
    <div className="flex flex-wrap justify-around items-center gap-5">
      {posts?.map((item) => {
        return (
          <div className="w-[40%] bg-[#2b2b2b] text-white p-7 rounded-2xl box-border shadow my-4">
            <h1>Author : {item.name}</h1>
            <h4>Email : {item.email}</h4>
            <img className="rounded-2xl w-[50%]" src={item.avatar} />
            <p className="text-justify line-clamp-3 !mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              obcaecati nisi eligendi incidunt et eos, esse itaque debitis sed
              dicta perferendis quam similique aut perspiciatis recusandae est
              delectus! Voluptatibus quaerat magnam dignissimos quod iste,
              facere temporibus fugit quae saepe obcaecati nulla dolores
              deserunt aut dolorum tempora perferendis? Minima, officiis odit?
            </p>
            <h6 className="!text-amber-700">{item.creationAt}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
