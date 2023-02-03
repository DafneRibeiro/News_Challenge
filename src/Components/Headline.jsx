import React from 'react';
import { Link } from 'react-router-dom';

const Headline = ({ image, article }) => {
	
	return (
		<div className="news-card">
			<img className="image" src={image} />
			<Link className='headline-title' to={'/article'}>
				<p className='p-click'>Click to see the news article</p>
			<h1 >{article}</h1>
			</Link>
		</div>
	);
};

export default Headline;
