import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [url, setUrl] = useState("https://www.swapi.tech/api/planets/");

  useEffect(() => {
    try {
      const getInfoPlanets = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPlanets(data);
      };
      getInfoPlanets();
    } catch (error) {
      console.log("error", error);
    }
  }, [url]);

  return (
    <>
      <div className="row justify-content-center">
        {planets.length !== 0 ? (
          planets.results.map(({ name, url, uid }) => (
            <Cards
              img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
              url={`/Planets/${uid}`}
              title={name}
              key={uid}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
      <button
        disabled={
          planets.next === "https://www.swapi.tech/api/planets?page=6&limit=10"
        }
        onClick={() => {
          setUrl(planets.next);
        }}
      >
        next
      </button>
      <button
        disabled={planets.previous === null}
        onClick={() => {
          setUrl(planets.previous);
        }}
      >
        Previous
      </button>
    </>
  );
};

export default Planets;
