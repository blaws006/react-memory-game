import React from "react";

function Image(props) {
  return (
    <div key={props.name} className="col s3 m3 l3 center">
      <img
        src={props.url}
        alt={props.name}
        title={props.name}
        className="responsive-img"
        onClick={props.gameController}
      />
    </div>
  )
}

export default Image;