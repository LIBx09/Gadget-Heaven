import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>this he no content</h1>
      <button onClick={() => navigate("/")} className="btn btn-warning">
        <h2>Go Back</h2>
      </button>
    </div>
  );
};

export default Error;
