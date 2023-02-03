import React from "react";
import DisplayArticle from "./DisplayArticle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetails = () => {
  
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, [])
  
  const APP_KEY = '18214e17-c672-44a9-ad8e-a033d60d19b1';
  const [item, setItem] = useState([])
  
  const fetchItem = async () => {
		const response = await axios.get(
			`https://content.guardianapis.com/search?ids=${id}&show-fields=bodyText%2Cheadline%2Cthumbnail&api-key=${APP_KEY}`);
    setItem(response.data.response.results)
    console.log(item)
  }
  
    //Used Hugo's help to sort ID and display the article correct 

    return (
      <div >
        {item.map(article => (
      <DisplayArticle
      key={article.id}
			image={article.fields.thumbnail}
      article={article.fields.headline}
      bodyText={article.fields.bodyText}>
        </DisplayArticle>
     ))}
      </div>
    )

  }


export default ArticleDetails;