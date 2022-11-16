import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";


function Search(setSearchTerm) {

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(search);
        setSearch('');
    };


    return (
        <div >
            <Form onSubmit={handleSubmit} >
                <Row className='m-1 mt-4'>
                    <Col></Col>
                    <Col sm={4} className="d-flex">

                        <Form.Control
                            type='text' placeholder='Search the meanings of ...'
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                        <Button variant='primary' className="me-3" type='submit' >Search</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Form>
        </div >
    );
}

export default Search;  