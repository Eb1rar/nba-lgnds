import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";

import Col from "react-bootstrap/esm/Col";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(data);

  return (
    <>
      <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {data.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
              {/* <PlayerCard player={player}  /> */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
