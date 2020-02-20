import React, { useState, useEffect, createContext } from 'react'
import './../sass/base/_base.scss'
import { Router } from '@reach/router'
import { getAll } from './../services/api/fetchAll'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Login from './user/Login'
import Register from './user/Register'
import Reviews from './Reviews/Reviews'
import Trending from './Reviews/Trending/Trending'
import Restaurants from './Reviews/Restaurants/Restaurants'
import Hotels from './Reviews/Hotels/Hotels'
import Search from './Reviews/Search/Search'
import Product from './Product/Product'
import SearchResults from './Reviews/SearchResults/SearchResults'

export const ReviewsNetworkContext = createContext()

const App = () => {
	const [data, setData] = useState({})
	
	useEffect(() => {
			getAll()
			.then(response => setData({ trending: response[0].data, restaurants: response[1].data, hotels: response[2].data }))
			.catch(err => console.error(err))
	}, [])
	
	return (
		<ReviewsNetworkContext.Provider value={[data, setData]}>
			<Header />
			<Footer />
			<Router>
				<Home path='/' />
				<Login path='/login' />
				<Register path='/register' />
				<Reviews path='/reviews'>
					<Trending path='trending' />
					<Restaurants path='restaurants' />
					<Hotels path='hotels' />
					<Search path=':type/search'/>
					<SearchResults path=':type/search-results/:term' />
				</Reviews>
				<Product path='/product/:type/:name'/>
			</Router>
		</ReviewsNetworkContext.Provider>
	)
}

export default App