"use client";
import ActorDetailContainer from "@/src/containers/actorDetail/index";
import { getActors, getActorDetail } from "@/services/movie";
import usePaginationStore from "@/store/pagination";

const ActorDetail = async ({ params }) => {
  const { page } = usePaginationStore();
  const actorDetail = await getActorDetail(params?.id);
  const { results } = await getActors(page);
  const findActor = results.find((actor) => actor?.id == params?.id);
  // findActor yerine /person/{person_id}/movie_credits &&
  // /person/{person_id}/tv_credits endpointleri kullanarak actor'un oynadığı dizi ve filmleri alıcam

  return (
    <ActorDetailContainer
      actorDetail={actorDetail}
      actorOriginalNameAndJobs={findActor}
    />
  );
};

export default ActorDetail;
