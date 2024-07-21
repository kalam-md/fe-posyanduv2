import React from "react";
import Link from 'next/link';
import { Dropdown, Col, Row, Card, Table, Image, ListGroup, Modal, Button } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import PosyanduTableData from "data/posyandu/PosyanduTableData";

const PosyanduTable = () => {
    return (
        <Row>
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Tabel Kegiatan Posyandu</h4>
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
    )
}

export default PosyanduTable