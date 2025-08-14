import { Link, useLocation } from "react-router-dom";

const About = () => {
  const loaction = useLocation();
  return (
    <div
      className={`w-[40%] text-white mx-auto my-2 p-7 box-border rounded-2xl ${
        location.pathname === "/about" ? "bg-green-900" : "bg-[#2b2b2b]"
      } `}
    >
      <h1 className="font-bold text-[32px] text-center text-slate-300">
        This Page is About
      </h1>
      <p className="text-justify text-gray-300">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sequi quo
        omnis, laudantium nihil blanditiis dolore quae ratione nesciunt fugiat,
        iusto unde laboriosam, sunt ipsum explicabo tempore! Omnis dignissimos
        commodi ut ducimus, qui incidunt deleniti exercitationem vel ipsa.
        Reiciendis placeat, consequatur nisi laboriosam pariatur assumenda
        incidunt laborum aliquam dolor, magni exercitationem adipisci alias,
        excepturi nesciunt ad aut necessitatibus voluptatum qui blanditiis
        temporibus voluptatem itaque? Excepturi quidem iure velit animi
        perferendis ad ullam ea, error rem a vel dolorem! Tenetur, eaque. Eos,
        accusamus aliquam. Officiis distinctio, saepe, molestias cumque, totam
        consequatur dolore beatae dolores magni nobis odio iure quas. Enim,
        architecto.
      </p>
      <Link
        to="/"
        className="btn btn-warning capitalize btn-md !inline-flex mt-5 !text-slate-800 !font-bold"
      >
        go to home
      </Link>
      <Link
        to="/about/100"
        className="btn btn-info capitalize btn-md !inline-flex mt-5 !text-slate-800 !font-bold mx-2"
      >
        show
      </Link>
    </div>
  );
};

export default About;
