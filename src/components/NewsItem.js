import React from "react";

const NewsItem = (props) => {
    let { title, descreption, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://s.yimg.com/ny/api/res/1.2/29IdrNUektSMQltLtAebUQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-11/de4ff3e0-aeda-11ef-bd7c-7b2e7964ba1a"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {descreption ? descreption : "Read more about news here...."}
            </p>
            <p className="card-text">
               
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              style={{ backgroundColor: "rgb(110, 44, 242)", color: "#ffffff" }}
              className="btn btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
