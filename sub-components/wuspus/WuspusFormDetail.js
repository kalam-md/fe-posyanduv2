// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import Link from 'next/link';

const WuspusFormDetail = () => {
  const hasMounted = useMounted();
  const statusOptions = [
    { value: 'Lajang', label: 'Lajang' },
    { value: 'Menikah', label: 'Menikah' },
    { value: 'Cerai', label: 'Cerai' },
  ];

  return (
    <Row className="mb-8">
      <Col xl={12} lg={12} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            <Row>
              <Col xl={6} lg={6} md={6} xs={6}>
              <div>
                {hasMounted && 
                <Form>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nama">Nama</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="nama" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="nik">NIK</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="nik" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Tempat Lahir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="ttl" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="tl">Tanggal Lahir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="tl" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="jk">Jenis Kelamin</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="jk" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="stts">Status Pernikahan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control as={FormSelect} id="stts" options={statusOptions} />
                    </Col>
                  </Row>

                </Form>
                }
              </div>
              </Col>

              <Col xl={6} lg={6} md={6} xs={6}>
              <div>
                {hasMounted && 
                <Form>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="goldar">Golongan Darah</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="goldar" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="ibu">Nama Ibu</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="ibu" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="ayah">Nama Ayah</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="ayah" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="alamat">Alamat</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="alamat" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="telp">Nomor Telepon</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="telp" />
                    </Col>
                  </Row>
                  
                </Form>
                }
              </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} className="mt-4">
                <Link href="/pages/wuspus">
                  <Button variant="primary" type="submit">
                    Kembali
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default WuspusFormDetail