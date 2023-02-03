import React from 'react';
import Headline from './Headline';
import App from '../App';
import { Link } from 'react-router-dom';

const ArticleSummary = ({ news }) => {
	return (
		<>
			<div >
			{news.map(article => (
				<Headline 
					key={article.id}
					image={article.fields.thumbnail}
					article={<Link className='headline-title' to={`/articledetails/${article.id.replace(/\//g, "%2F")}`}>
                  {article.fields.headline}
            </Link>
          }>
					
			</Headline>
				
			))}
				</div>
		</>
	);
};

export default ArticleSummary;


