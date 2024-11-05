// import { useLocation } from "react-router-dom";
import Heading from "../../components/Heading";

const Statistics = () => {
  // const location = useLocation();
  // const isLocation = location.pathname === "statistics";
  return (
    <div>
      <Heading
        title={"Statistics"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
    </div>
  );
};

export default Statistics;
