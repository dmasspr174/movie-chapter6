import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { searchMovie } from "../redux/action/post";

function Pencarian() {
  const navigate = useNavigate();
  const [popularMovie, setPopularMovie] = useState([]);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
    }
  };

  const PopularMovieList = () => {
    return popularMovie.map((movie, i) => {
      return (
        <div className="movie-wrapper " key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-image"
            alt={movie.pacth}
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="movie-rate">{movie.vote_average}</div>
          <Button variant="primary" as={Link} to={`/pencarian/${movie.id}`}>
            Details
          </Button>
        </div>
      );
    });
  };
  return (
    <div>
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand onClick={() => navigate("/")}>
              <strong>Movielist</strong>
            </Navbar.Brand>
            <input
              placeholder="  what do you want to wacth ?"
              className="movie-search"
              onChange={({ target }) => search(target.value)}
            />
            <Navbar.Brand>search the movie</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div className="Popular mt-4 ms-2">
        <div className="popular-top">
          <h2>Movie</h2>
        </div>
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </div>
    </div>
  );
}

export default Pencarian;
