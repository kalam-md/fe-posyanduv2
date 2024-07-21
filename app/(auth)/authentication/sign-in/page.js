'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';

const SignIn = () => {
  const hasMounted = useMounted();
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <h1 className='text-center'>Posyandu Kader Login</h1>
            </div>
            {/* Form */}
            {hasMounted &&
              <Form>
                {/* Username */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>No Telepon</Form.Label>
                  <Form.Control type="email" name="username" placeholder="Masukan nomor telepon" required="" />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" required="" />
                </Form.Group>

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </div>
                <div>
                  {/* Button */}
                  <Link href={"/"} className="d-grid">
                    <Button variant="primary" type="submit">Masuk</Button>
                  </Link>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link href="/authentication/sign-up" className="fs-5">Registrasi Akun </Link>
                    </div>
                  </div>
                </div>
              </Form>}


          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn