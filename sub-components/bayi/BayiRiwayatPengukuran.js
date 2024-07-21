// import node module libraries
import React, { Fragment, useState } from 'react'
import Link from 'next/link';
import { Row, Col, Card, Modal, Button, Form, ListGroup, Badge } from 'react-bootstrap';
import { Check, ShoppingBag } from 'react-feather';

const BayiRiwayatPengukuran = () => {
  return (
    <Col xs={6} className="mb-6">
      <Card>
          <Card.Header className="p-4 bg-white">
              <h4 className="mb-0">23 Jan 2021</h4>
          </Card.Header>
          <Card.Body>
            <Row className="row">
                <Col>
                    <div className="mb-2">
                        <h3 className="mt-2 mb-3 fw-bold">Taufik Mulyadi</h3>
                        <div className="">
                          <p>Pengukuran</p>
                          <ListGroup>
                              <ListGroup.Item className="d-flex justify-content-between" >Berat Badan <span>3 Kg</span> </ListGroup.Item>
                              <ListGroup.Item className="d-flex justify-content-between" >Tinggi Badan <span>62 Cm</span></ListGroup.Item>
                              <ListGroup.Item className="d-flex justify-content-between" >Cara Pengukuran <span>Terlentang</span></ListGroup.Item>                                
                          </ListGroup>
                          <p className='mt-3'>Imunisasi</p>
                          <ListGroup>
                              <ListGroup.Item className="d-flex justify-content-between" >Polio 1</ListGroup.Item>
                              <ListGroup.Item className="d-flex justify-content-between" >HB0</ListGroup.Item>
                              <ListGroup.Item className="d-flex justify-content-between" >Cara Pengukuran</ListGroup.Item>                                
                          </ListGroup>
                          <p className='mt-3'>Pelayanan</p>
                          <ListGroup>
                              <ListGroup.Item className="d-flex justify-content-between" >IMD <span><Check size="18px" /></span> </ListGroup.Item>
                              <ListGroup.Item className="d-flex justify-content-between" >Asi Ekslusif <span><Check size="18px" /></span></ListGroup.Item>
                              <ListGroup.Item className="d-flex justify-content-between" >PMT <span><Check size="18px" /></span></ListGroup.Item>                                
                          </ListGroup>
                        </div>
                    </div>
                </Col>
            </Row>
          </Card.Body>
      </Card>
    </Col>
  )
}

export default BayiRiwayatPengukuran