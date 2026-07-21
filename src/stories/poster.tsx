import { faker } from "@faker-js/faker";

export const Poster = () => {
  return (
    <a href={faker.location.city()} className="poster">
      <img
        src={faker.image.urlPicsumPhotos({ width: 1920, height: 1080 })}
        alt={faker.location.city()}
        className="gatsby-image-wrapper"
      />
      {faker.datatype.boolean() && <p>{faker.location.city()}</p>}
    </a>
  );
};
