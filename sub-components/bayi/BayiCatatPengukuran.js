// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import Link from 'next/link';

const BayiCatatPengukuran = () => {
  const hasMounted = useMounted();

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
                    <Form.Label className="col-sm-4" htmlFor="ttl">Tanggal</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="ttl" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Cara Pengukuran</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Check type="checkbox" label="Terlentang" />
                      <Form.Check type="checkbox" label="Berdiri" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Imunisasi</Form.Label>
                    <Col md={8} xs={12} className='grid'>
                      <Row>
                        <Col>
                          <Form.Check type="checkbox" label="HBO" />
                          <Form.Check type="checkbox" label="DPT-HB 1" />
                          <Form.Check type="checkbox" label="DPT-HB 2" />
                          <Form.Check type="checkbox" label="DPT-HB 3" />
                          <Form.Check type="checkbox" label="CAMPAK" />
                          <Form.Check type="checkbox" label="BCG" />
                          <Form.Check type="checkbox" label="POLIO 1" />
                        </Col>
                        <Col>
                          <Form.Check type="checkbox" label="POLIO 2" />
                          <Form.Check type="checkbox" label="POLIO 3" />
                          <Form.Check type="checkbox" label="POLIO 4" />
                          <Form.Check type="checkbox" label="IPV" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Pelayanan</Form.Label>
                    <Col md={8} xs={12} className='grid'>
                      <Row>
                        <Col>
                          <Form.Check type="checkbox" label="IMD" />
                          <Form.Check type="checkbox" label="ASI EKSLUSIF" />
                          <Form.Check type="checkbox" label="VIT A BULAN FEBRUARI" />
                          <Form.Check type="checkbox" label="VIT A BULAN AGUSTUS" />
                        </Col>
                        <Col>
                          <Form.Check type="checkbox" label="DICATAT BUKU KIA" />
                          <Form.Check type="checkbox" label="PMT" />
                          <Form.Check type="checkbox" label="DIARE" />
                        </Col>
                      </Row>
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
                    <Form.Label className="col-sm-4" htmlFor="tinggi">Tinggi (CM)</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="tinggi" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="bb">Berat (KG)</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="bb" />
                    </Col>
                  </Row>
                  
                </Form>
                }
              </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} className="mt-4">
                <Link href="/pages/bayi">
                  <Button variant="primary" type="submit">
                    Simpan
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

export default BayiCatatPengukuran