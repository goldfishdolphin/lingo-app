import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Search() {
    return (
        <div >

            <Form >
                <Row className='m-1 mt-4'>
                    <Col></Col>
                    <Col sm={4} className="d-flex">

                        <Form.Control type='email' placeholder='Search the meanings of ...' aria-label="Search" />
                        <Button variant='primary' className="me-3" type='submit'>Search</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Form>
        </div >
    );
}

export default Search;