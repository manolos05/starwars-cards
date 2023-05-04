import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const PlanetCards = () => {
  const [planet, setPlanet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getInfoPlanet = async () => {
        const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        const data = await res.json();
        setPlanet(data.result);
      };
      getInfoPlanet();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const { properties, uid } = planet;

  return (
    <>
      <div className="justify-content-center">
        {planet.length !== 0 ? (
          <div className="card mb-3 mt-4 as" style={{ width: "50%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Planet: {properties.name}</h5>
                  <ul key={uid}>
                    <li>Diameter: {properties.diameter}</li>
                    <li>Population: {properties.population}</li>
                    <li>Climate: {properties.climate}</li>
                    <li>Gravity: {properties.gravity}</li>
                    <li>Terrain: {properties.terrain}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
