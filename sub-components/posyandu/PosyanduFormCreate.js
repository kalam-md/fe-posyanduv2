// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import Link from 'next/link';

const PosyanduFormCreate = () => {
  const hasMounted = useMounted();
  const kiaOptions = [
    { value: 'Iya', label: 'Iya' },
    { value: 'Tidak', label: 'Tidak' },
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
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nama">Nama Kegiatan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="nama" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="tl">Tanggal Kegiatan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="tl" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="kader_laki">Jumlah Kader Laki-Laki yang Hadir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="kader_laki" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="kader_perempuan">Jumlah Kader Perempuan yang Hadir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="kader_perempuan" />
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
                    <Form.Label className="col-sm-4" htmlFor="kader_laki">Jumlah PLKB Laki-Laki yang Hadir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="plkb_laki" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="plkb_perempuan">Jumlah PLKB Perempuan yang Hadir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="plkb_perempuan" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="kader_laki">Jumlah Tenaga Medis Laki-Laki yang Hadir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="nakes_laki" />
                    </Col>
                  </Row>
                  
                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="nakes_perempuan">Jumlah Tenaga Medis Perempuan yang Hadir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="nakes_perempuan" />
                    </Col>
                  </Row>

                </Form>
                }
              </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12} className="mt-4">
                <Link href="/pages/posyandu">
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

export default PosyanduFormCreate