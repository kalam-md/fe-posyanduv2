'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { BayiRiwayatPengukuran } from 'sub-components'

const BayiCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Riwayat Pengukuran Bayi/Balita" />

      <BayiRiwayatPengukuran />

    </Container>
  )
}

export default BayiCreate