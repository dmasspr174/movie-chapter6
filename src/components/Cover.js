import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cover() {
  const navigate = useNavigate();
  return (
    <div className="Cover">
      <Container fluid className="text-white d-flex justify-content-start ">
        <Row>
          <Col className="col-8 mt-5 ms-5 pt-5" id="isiContent">
            <div>
              <h1 className="mt-5">
                Doctor Strange In The Multiverse Of Madness
              </h1>
            </div>
            <div>
              <p className=" mt-2">
                lorem ipsum dolot sit amet, consectur adipiscing eli, sed do
                eiusmood tempar incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <Button variant="danger" onClick={() => navigate("/Popular")}>
              <strong>WACTH TRAILER</strong>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cover;
