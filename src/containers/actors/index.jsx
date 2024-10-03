import Actors from "@/src/components/actors/index";
import Pagination from "@/src/components/pagination";

const ActorsContainer = ({ actors = [] }) => {
  return (
    <div>
      <Actors actors={actors} />
      <Pagination />
    </div>
  );
};

export default ActorsContainer;
