import "./junior.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';

import CardInfoJunior from "../../components/cardInfoJunior/CardInfoJunior";

function Junior() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  return (
    <>
      <main>

      <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Junior</h1>
            </Col>
          </Row>
        </Container>
        <SearchBar onSearch={handleSearch} />
        <CardInfoJunior searchTerm={searchTerm} />




      </main>
    </>
  );
}

export default Junior;