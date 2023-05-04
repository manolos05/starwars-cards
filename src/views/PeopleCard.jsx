import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const PeopleCard = () => {
  const [people, setPeople] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getPeopleInfo = async () => {
        const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
        const data = await res.json();
        setPeople(data.result);
      };
      getPeopleInfo();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const { properties, uid, description } = people;

  return (
    <>
      {people.length !== 0 ? (
        <div className="card  as p-0  mt-4" style={{ width: "50%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{properties.name}</h5>
                <ul className="card-text" key={uid}>
                  <li>Birth Year: {properties.birth_year}</li>
                  <li>heigth: {properties.heigth}</li>
                  <li>Eye Color: {properties.eye_color}</li>
                  <li>Mass: {properties.mass}</li>
                  <li>Gender: {properties.gender}</li>
                  <li>Hair: {properties.hair_color}</li>
                  <li>Skin: {properties.skin_color}</li>
                </ul>
                <p className="card-text">
                  <small className="text-body-secondary">{description}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
