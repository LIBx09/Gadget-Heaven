import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center mt-[15%]">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-4xl font-bold">There is No Content</p>
      <button onClick={() => navigate("/")} className="btn btn-warning">
        <h2>Go Back</h2>
      </button>
    </div>
  );
};

export default Error;
