// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import Link from 'next/link';

const IbuHamilCatatPengukuran = () => {
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
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nama">Nama Ibu</Form.Label>
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

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="ttl">LILA (Cm)</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="ttl" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="ttl">HB (mg/dL)</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="ttl" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Imunisasi</Form.Label>
                    <Col md={8} xs={12} className='grid'>
                      <Row>
                        <Col>
                          <Form.Check type="checkbox" label="TT1" />
                          <Form.Check type="checkbox" label="TT2" />
                          <Form.Check type="checkbox" label="TT3" />
                          <Form.Check type="checkbox" label="TT4" />
                          <Form.Check type="checkbox" label="TT5" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Pelayanan</Form.Label>
                    <Col md={8} xs={12} className='grid'>
                      <Row>
                        <Col>
                          <Form.Check type="checkbox" label="DICATAT BUKU KIA" />
                          <Form.Check type="checkbox" label="PMT" />
                          <Form.Check type="checkbox" label="TTD" />
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

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="bb">GPA</Form.Label>
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
                <Link href="/pages/ibu-hamil">
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

export default IbuHamilCatatPengukuran