import React, { Component } from 'react';
import '@babel/polyfill';
import api from './api';
import ErrorMessage from './components/ErrorMessage';
import Movies from './components/Movies';
import Television from './components/Television';
import People from './components/People';
import Tabs from './components/Tabs';

export default class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      activeTab: 'content-movies',
      movies: [],
      tv: [],
      people: []
    };
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getInitalData();
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getInitalData() {
    api.getPopularMovies()
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            movies: data.results.slice(),
            loading: false,
          });
        }
      })
      .catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });

    api.getPopularTv()
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            tv: data.results.slice(),
            loading: false,
          });
        }
      })
      .catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });

    api.getPopularPeople()
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            people: data.results.slice(),
            loading: false,
          });
        }
      })
      .catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  renderHome() {
    const { movies, tv, people } = this.state;
    return (
      <main className='main' role='main'>
        <header>
          <h1 className='is-size-1'>Welcome to The Top 20's!</h1>
        </header>
        <section className='categories'>
          <h2>Choose one of the following categories:</h2>
          <Tabs>
            <div label='Movies'>
              <Movies data={movies} />
            </div>
            <div label='Tv'>
              <Television data={tv} />
            </div>
            <div label='People'>
              <People data={people} />
            </div>
          </Tabs>
        </section>
      </main>
    )
  };

  render() {
    const { error, loading } = this.state;

    if (error) {
      return  (
        <main className='main' role='main'>
          <header>
            <h1 className='is-size-1'>Welcome to The Top 20's!</h1>
          </header>
        <section className='categories'>
          <ErrorMessage />
        </section>
      </main>
      )
    } else if (loading) {
      return (
        <main className='main loading' role='main'>
          <div className='loading-container'>
            Loading...
            <progress className='progress is-small is-info' max='100' />
          </div>
        </main>
      );
    }

    return this.renderHome();
  }
}