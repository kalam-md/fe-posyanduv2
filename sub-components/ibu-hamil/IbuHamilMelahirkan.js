// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import Link from 'next/link';

const IbuHamilMelahirkan = () => {
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
                    <Form.Label className="col-sm-4" htmlFor="ttl">Tanggal Persalinan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="ttl" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="usia">Usia Kehamilan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="usia" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Keadaan Ibu</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Check type="checkbox" label="Sehat" />
                      <Form.Check type="checkbox" label="Sakit" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Status Ibu</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Check type="checkbox" label="Hidup" />
                      <Form.Check type="checkbox" label="Meninggal" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Keadaan Bayi</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Check type="checkbox" label="Sehat" />
                      <Form.Check type="checkbox" label="Sakit" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="ttl">Status Bayi</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Check type="checkbox" label="Hidup" />
                      <Form.Check type="checkbox" label="Meninggal" />
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
                        <Form.Label className="col-sm-4" htmlFor="penolong">Penolong Persalinan</Form.Label>
                        <Col md={8} xs={12}>
                        <Form.Control type="text" id="penolong" />
                        </Col>
                    </Row>
                  
                    <Row className="mb-3 d-flex justify-content-center align-items-center">
                        <Form.Label className="col-sm-4" htmlFor="tempat">Tempat Persalinan</Form.Label>
                        <Col md={8} xs={12}>
                        <Form.Control type="text" id="tempat" />
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

export default IbuHamilMelahirkan