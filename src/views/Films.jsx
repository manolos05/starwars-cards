import { Cards } from "../components/Cards";
import { useEffect, useState } from "react";

export const Films = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    try {
      const getInfoFilm = async () => {
        const res = await fetch("https://swapi.tech/api/films");
        const data = await res.json();
        setFilm(data);
      };
      getInfoFilm();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        {film.length !== 0 ? (
          film.result.map(({ properties, uid }) => (
            <Cards
              key={uid}
              img={`https://starwars-visualguide.com/assets/img/films/${uid}.jpg`}
              title={properties.title}
              url={`/Films/${uid}`}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
