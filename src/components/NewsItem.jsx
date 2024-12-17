import news_image from "../assets/news_image.jpg";
function NewsItem({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : news_image}
        style={{ height: "200px", width: "320px" }}
        className="card-img-up"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No data available at the moment"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "No data available at the moment. Please try again later or ensure the connection to the source is active."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
export default NewsItem;
