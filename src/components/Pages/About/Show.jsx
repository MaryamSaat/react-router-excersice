import { useLocation, useParams } from "react-router-dom";

const Show = () => {
  let { id } = useParams();
  // id = +id; return in number
  // let query = new URLSearchParams(useLocation().search);
  // let q = query.get("q");
  //for removing dashes
  // let array = q.split("-");
  // let result = array.join(" ");
  return (
    <h1 className="text-center font-bold mx-auto capitalize">
      this page is {id}
    </h1>
  );
};

export default Show;
