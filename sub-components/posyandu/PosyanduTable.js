import React, { useState } from "react";
import Link from 'next/link';
import { Dropdown, Col, Row, Card, Table, Image, ListGroup, Modal, Button } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import PosyanduTableData from "data/posyandu/PosyanduTableData";
import Calendar from 'react-calendar';

const PosyanduTable = () => {
    // const [value, onChange] = useState(new Date());
    return (
        <>
        {/* <Row>
            <Col>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </Col>
        </Row> */}
        <Row>
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Tabel Kegiatan Posyandus</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Nama Kegiatan</th>
                                <th>Tanggal Kegiatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PosyanduTableData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div className="lh-1">
                                                    <h5 className=" mb-1">
                                                        <Link href="#" className="text-inherit">{item.namaKegiatan}</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item.tanggalKegiatan}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default PosyanduTable