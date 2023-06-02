import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../redux/action/auth";
import { searchMovie } from "../redux/action/post";
import { setPosts } from "../redux/reducers/post";

function NavbarItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile());
    }
  }, [dispatch, isLoggedIn, token]);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      dispatch(setPosts(query.results));
      console.log({ query: query });
    }
  };

  return (
    <div>
      {!!isLoggedIn && (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand
              style={{ color: "red" }}
              onClick={() => navigate("/")}
            >
              Movielist
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <input
                  placeholder="  what do you want to wacth ?"
                  className="movie-search "
                  onChange={({ target }) => search(target.value)}
                />
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/user/dashboard"}>
                  Dashboard ({user?.name})
                </Nav.Link>
                <Button
                  className="ms-4"
                  variant="light"
                  onClick={() => dispatch(logout(navigate))}
                  type="submit"
                >
                  <strong>Logout</strong>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      {!isLoggedIn && (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <strong>Movielist</strong>
            </Navbar.Brand>
            <input
              placeholder="  what do you want to wacth ?"
              className="movie-search me-4"
              onChange={({ target }) => search(target.value)}
            />
            <Nav>
              <Button
                className="me-3"
                variant="outline-danger"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button variant="danger" onClick={() => navigate("/register")}>
                Register
              </Button>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

export default NavbarItem;
