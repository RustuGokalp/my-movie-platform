import ActorsContainer from "@/src/containers/actors";
import { getActors } from "@/services/movie";

const Actors = async () => {
  const { results } = await getActors();
  return <ActorsContainer actors={results} />;
};

export default Actors;
