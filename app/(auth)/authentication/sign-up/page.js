'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';

const SignUp = () => {
  const hasMounted = useMounted();
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <h1 className='text-center'>Posyandu Kader Registrasi</h1>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" name="username" placeholder="Masukan nama" required="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="notelp">
                <Form.Label>No Telepon</Form.Label>
                <Form.Control type="number" name="notelp" placeholder="Masukan nomor telepon" required="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="**************" required="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm-password" placeholder="**************" required="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="posyandu">
                <Form.Label>Posyandu</Form.Label>
                <Form.Control type="text" name="posyandu" placeholder="Masukan posyandu" required="" />
              </Form.Group>

              <div>
                <Link href={"/"} className="d-grid">
                  <Button variant="primary" type="submit">Registrasi</Button>
                </Link>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-in" className="fs-5">Sudah punya akun? </Link>
                  </div>
                </div>
              </div>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUp