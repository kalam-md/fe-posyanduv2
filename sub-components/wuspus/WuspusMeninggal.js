// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import Link from 'next/link';

const WuspusMeninggal = () => {
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

                </Form>
                }
              </div>
              </Col>

              <Col xl={6} lg={6} md={6} xs={6}>
              <div>
                {hasMounted && 
                <Form>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="usia">Usia</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="usia" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="tp">Tempat Pelayanan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="tp" />
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

export default WuspusMeninggal