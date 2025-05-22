import ActorDetailContainer from "@/src/containers/actorDetail/index";
import {
  getActorDetail,
  getActorTvCredits,
  getActorMovieCredits,
} from "@/services/movie";

const ActorDetail = async ({ params }) => {
  const actorDetail = await getActorDetail(params?.id);

  const rawActorTVCredit = await getActorTvCredits(params?.id);
  const rawActorMovieCredit = await getActorMovieCredits(params?.id);

  const actorTVCredit = rawActorTVCredit?.cast || [];
  const actorMovieCredit = rawActorMovieCredit?.cast || [];

  const allActorCredits = [...actorMovieCredit, ...actorTVCredit];

  const sortedActorCredits = allActorCredits.sort((a, b) => {
    const popularityA =
      a.vote_count === undefined || a.vote_count === null ? 0 : a.vote_count;
    const popularityB =
      b.vote_count === undefined || b.vote_count === null ? 0 : b.vote_count;
    return popularityB - popularityA;
  });

  return (
    <ActorDetailContainer
      actorDetail={actorDetail}
      actorCredits={sortedActorCredits}
    />
  );
};

export default ActorDetail;
