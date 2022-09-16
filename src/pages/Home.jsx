import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Main />
        <Row  RowID='1'title='Popular' fetchUrl={requests.requestPopularMovies} />
        <Row RowID='2'title='Upcoming' fetchUrl={requests.requestUpcomingMovies} />
        <Row RowID='3'title='Latest' fetchUrl={requests.requestLatestMovies} />
        <Footer/>
    </div>
  )
}

export default Home