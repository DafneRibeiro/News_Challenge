import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleSummary from './Components/ArticleSummary';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleDetails from './Components/ArticleDetails';
import Header from './Components/HeaderFooter/Header'
import Footer from './Components/HeaderFooter/Footer';
// import Bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'

const App = () => {
	const APP_KEY = '18214e17-c672-44a9-ad8e-a033d60d19b1';

	const [news, setNews] = useState([]);

	useEffect(() => {
		getNews();
	}, []);

	const getNews = async () => {
		const response = await axios.get(
			`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=${APP_KEY}`
		);

		setNews(response.data.response.results);
		console.dir(response.data.response.results);
	};

	return (
		<Router>
			<div>
				<Header />
					<Routes>
					<Route path="/" element={<ArticleSummary news={news} />} />
					<Route path="/articledetails/:id" element={<ArticleDetails />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
