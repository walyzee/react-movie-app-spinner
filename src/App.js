import React from 'react';
import './App.css';
import NameSearch from './components/Search/NameSearch';
import RatingSearch from './components/Search/RatingSearch';
import MovieList from './components/MovieList/MovieList';
import WithLoading from './HOC/WithLoading';

const MoviesWithLoading = WithLoading(MovieList);

const moviesItems = [
	{id: 'armagedon',
	title: 'Armagedon',
	rating: 3,
	image: 'https://p8.storage.canalblog.com/80/71/1349409/120027564_o.jpg',
	year: 1998}, 
	{id: 'interstellar',
	title: 'Interstellar',
	year: 2014,
	rating: 5,
	image : 'https://fr.web.img6.acsta.net/pictures/14/09/22/10/40/162066.jpg'}
]

class App extends React.Component {
  	constructor(props) {
		super(props)
		this.state = {
			minRating: 1,
			movies: moviesItems, 
			loading : true,
			titleSearch: ''}
	}	

	componentDidMount() {
		this.LoadingTimer = setInterval(() => this.setState({loading : false}),3000);
	}
	
	componentDidUnMount() {
		clearInterval(this.LoadingTimer)
	}

  	addNewMovie(newMovie) {
    this.setState({
      	movies: [...this.state.movies,newMovie]
	})}
  	searchMovies() {
		return this.state.movies.filter(
		el =>
			el.rating >= this.state.minRating &&
			el.title.toLowerCase().includes(
			this.state.titleSearch.toLowerCase().trim()
		))
  	}	
	render() {
		return (
			<div className="App">
				<header className="header-container">
				<NameSearch
					value={this.state.titleSearch}
					onChange={(newTitleSearch) => {
					this.setState({
						titleSearch: newTitleSearch
					})
					}} />
				<RatingSearch
					count={this.state.minRating}
					onChange={(newRating) => {
					this.setState({
						minRating: newRating
					})
					}} />
				</header>
				<main className="main-container">
					<MoviesWithLoading 
						isLoading={this.state.loading} 
						movies={this.searchMovies()}
						onAddMovie={(newMovie) => this.addNewMovie(newMovie)} 
					/>
				</main>
			</div>
		)
	}
}

export default App;