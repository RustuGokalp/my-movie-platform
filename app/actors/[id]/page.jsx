import ActorDetailContainer from "@/containers/actorDetail/index";
import { getActorDetail } from "@/services/movie";

const ActorDetail = async ({ params }) => {
  const actorDetail = await getActorDetail(params.id);
  return <ActorDetailContainer actorDetail={actorDetail} />;
};

export default ActorDetail;
