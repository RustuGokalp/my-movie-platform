import Actors from "@/components/actors/index";

const ActorsContainer = ({ actors = [] }) => {
  return <Actors actors={actors} />;
};

export default ActorsContainer;
