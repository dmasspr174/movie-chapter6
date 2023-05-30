import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostDetails } from "../redux/action/post";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Container className="p-4">
        <Row>
          <Col>
            <Button as={Link} variant="primary" to={"/popular"}>
              Back
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="text-center">{postDetails?.title}</h1>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "50%" }}
                src={`${process.env.REACT_APP_BASEIMGURL}/${postDetails?.backdrop_path}`}
                class="img-fluid"
                alt="imgPatch"
              ></img>
            </div>
            <p
              style={{
                textAlign: "justify",
                marginTop: "2rem",
                fontWeight: "600",
              }}
            >
              {postDetails?.overview}
            </p>
            <p
              style={{
                fontWeight: "700",
                color: "red",
                textDecoration: "underline",
              }}
            >
              {postDetails?.vote_average} / 10
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detail;
