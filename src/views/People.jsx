import { Cards } from "../components/Cards";
import { useState, useEffect } from "react";

export const People = () => {
  const [people, setPeople] = useState([]);
  const [url, setUrl] = useState("https://www.swapi.tech/api/people/");

  useEffect(() => {
    try {
      const getInfoSW = async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);
        setPeople(data);
      };
      getInfoSW();
    } catch (error) {
      console.log("error", error);
    }
  }, [url]);

  return (
    <>
      {people.length !== 0 ? (
        people.results.map(({ name, url, uid }) => (
          <Cards
            img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            key={uid}
            title={name}
            url={url}
          />
        ))
      ) : (
        <div></div>
      )}
      <button
        disabled={
          people.next === "https://www.swapi.tech/api/people?page=9&limit=10"
        }
        onClick={() => {
          setUrl(people.next);
        }}
      >
        next
      </button>
      <button
        disabled={people.previous === null}
        onClick={() => {
          setUrl(people.previous);
        }}
      >
        Previous
      </button>
    </>
  );
};
