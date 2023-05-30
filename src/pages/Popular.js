import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/action/post";
import NavbarItem from "../components/NavbarItem";

function Posts() {
  // dispatch -> to change the global state in redux
  const dispatch = useDispatch();

  // useSelector -> to access the global state (redux)
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <NavbarItem />
      <Container className="p-4">
        <Row>
          {posts?.length > 0 &&
            posts.map((post) => (
              <Col key={post?.id} className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title
                      style={{ height: "2rem" }}
                      className="text-center mb-3"
                    >
                      {post?.title}
                    </Card.Title>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{
                          width: "80%",
                          height: "50%",
                        }}
                        className="align-item-center mt-2 mb-2"
                        alt={post?.pacth}
                        src={`${process.env.REACT_APP_BASEIMGURL}/${post?.poster_path}`}
                      />
                    </div>

                    <Card.Text
                      className="text-center"
                      style={{
                        fontWeight: "700",
                        color: "red",
                        textDecoration: "underline",
                      }}
                    >
                      {post?.vote_average}
                    </Card.Text>
                    <div class="d-grid gap-2">
                      <Button
                        variant="danger"
                        as={Link}
                        to={`/popular/${post?.id}`}
                      >
                        Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Posts;
