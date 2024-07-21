// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import Link from 'next/link';

const IbuHamilFormEdit = () => {
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
                    <Form.Label className="col-sm-4" htmlFor="nik">NIK</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="nik" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="daftar">Tanggal Daftar</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="daftar" />
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
                    <Form.Label className="col-sm-4" htmlFor="pendidikan">Pendidikan Terakhir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="pendidikan" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="pekerjaan">Pekerjaan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="pekerjaan" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="haid">Hari Pertama Haid Terakhir</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="haid" />
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
                    <Form.Label className="col-sm-4" htmlFor="goldar">Taksiran Persalinan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="date" id="goldar" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="alamat">Alamat</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="alamat" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="goldar">Golongan Darah</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="goldar" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="pembiayaan">Pembiayaan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="text" id="pembiayaan" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="telp">Nomor Telepon</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="telp" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="jkn">No JKN</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="jkn" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="fas1">Faskes Tingkat 1</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="fas1" />
                    </Col>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-center align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="ruj1">Faskes Rujukan</Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control type="number" id="ruj1" />
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
                    Ubah
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

export default IbuHamilFormEdit