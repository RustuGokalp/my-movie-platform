import React from "react";

const ActorDetail = ({ actorDetail }) => {
  const {
    adult,
    also_known_as,
    biography,
    birthday,
    deathday,
    gender,
    homepage,
    id,
    imdb_id,
    known_for_department,
    name,
    place_of_birth,
    popularity,
    profile_path,
  } = actorDetail;
  return <div>{biography}</div>;
};

export default ActorDetail;
