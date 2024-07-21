'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { WuspusCatatPengukuran } from 'sub-components'

const WuspusCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Catat Pengukuran Wus Pus" />

      <WuspusCatatPengukuran />

    </Container>
  )
}

export default WuspusCreate