
import React from "react";
 
const DisplayArticle = ({ image, article, bodyText }) => {

  return (
   <div className="display-article">
			<img className="image-display" src={image} />
      <h1 className="headline-title" >{article}</h1>
      <p className="body-text">{bodyText}</p>
			</div>
 )
}

export default DisplayArticle;