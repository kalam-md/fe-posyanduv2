'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { WuspusRiwayatPengukuran } from 'sub-components'

const WuspusCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Riwayat Pengukuran Wuspus" />

      <WuspusRiwayatPengukuran />

    </Container>
  )
}

export default WuspusCreate