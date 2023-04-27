export const Cards = ({ img, text, title, url, i }) => {
  return (
    <div className="card m-4 col-4 p-0" key={i} style={{ width: "18rem" }}>
      <img src={img} className="card-img-top p-0" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={url} className="btn btn-primary">
          More Info!
        </a>
      </div>
    </div>
  );
};
