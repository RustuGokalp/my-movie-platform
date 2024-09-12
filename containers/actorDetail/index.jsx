import ActorDetail from "@/components/actor-detail/index";
const ActorDetailContainer = ({ actorDetail, actorOriginalNameAndJobs }) => {
  return (
    <ActorDetail
      actorDetail={actorDetail}
      actorOriginalNameAndJobs={actorOriginalNameAndJobs}
    />
  );
};

export default ActorDetailContainer;
