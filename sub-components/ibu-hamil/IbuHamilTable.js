import React from "react";
import Link from 'next/link';
import { Dropdown, Col, Row, Card, Table, Modal, Button } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import IbuHamilTableData from "data/ibu-hamil/IbuHamilTableData";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}            
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hapus data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Apakah anda yakin ingin menghapus data tersebut?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Yakin</Button>
        </Modal.Footer>
      </Modal>
    );
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    (<Link
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="text-muted text-primary-hover">
        {children}
    </Link>)
));

CustomToggle.displayName = 'CustomToggle';

const ActionMenu = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
                <MoreVertical size="15px" className="text-muted" />
            </Dropdown.Toggle>
            <Dropdown.Menu align={'end'}>
                <Dropdown.Item eventKey="1">
                    <Link href="/pages/ibu-hamil/detail" className="text-inherit">Detail</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                    <Link href="/pages/ibu-hamil/edit" className="text-inherit">Ubah</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                    <Link href="/pages/ibu-hamil/melahirkan" className="text-inherit">Melahirkan</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="4">
                    <Link href="/pages/ibu-hamil/catat-pengukuran" className="text-inherit">Catat Pengukuran</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="5">
                    <Link href="/pages/ibu-hamil/riwayat-pengukuran" className="text-inherit">Riwayat Pengukuran</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="6">
                    <Link href="/pages/ibu-hamil/laporkan-meninggal" className="text-inherit">Laporkan Meninggal</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="7" onClick={() => setModalShow(true)}>
                    <span className="text-inherit">Hapus</span>
                </Dropdown.Item>
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            </Dropdown.Menu>
        </Dropdown>
    );
};

const IbuHamilTable = () => {
    return (
        <Row>
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Tabel Ibu Hamil</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Nama Ibu</th>
                                <th>NIK</th>
                                <th>Hari Pertama Haid Terakhir</th>
                                <th>Taksiran Persalinan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {IbuHamilTableData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div className="lh-1">
                                                    <h5 className=" mb-1">
                                                        <Link href="#" className="text-inherit">{item.namaIbu}</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item.nik}</td>
                                        <td className="align-middle">{item.hariPertamaHaid}</td>
                                        <td className="align-middle">{item.taksiranPersalinan}</td>
                                        <td className="align-middle">
                                            <ActionMenu /> 
                                        </td>
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

export default IbuHamilTable