import ActorDetailContainer from "@/containers/actorDetail/index";
import { getActors, getActorDetail } from "@/services/movie";

const ActorDetail = async ({ params }) => {
  const actorDetail = await getActorDetail(params.id);
  const { results } = await getActors();
  const findActor = results.find((actor) => actor?.id == params?.id);
  return (
    <ActorDetailContainer
      actorDetail={actorDetail}
      actorOriginalNameAndJobs={findActor}
    />
  );
};

export default ActorDetail;
