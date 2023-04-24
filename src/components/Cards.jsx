export const Cards = ({ img, text, title, direcction, i }) => {
  return (
    <div className="card m-4" key={i} style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={direcction} className="btn btn-primary">
          More Info!
        </a>
      </div>
    </div>
  );
};
