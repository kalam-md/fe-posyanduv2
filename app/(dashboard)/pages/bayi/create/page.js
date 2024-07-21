'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { BayiFormCreate } from 'sub-components'

const BayiCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Tambah Data Bayi/Balita" />

      <BayiFormCreate />

    </Container>
  )
}

export default BayiCreate