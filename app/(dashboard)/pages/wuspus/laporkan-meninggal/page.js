'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { WuspusMeninggal } from 'sub-components'

const WuspusCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Laporkan Meninggal Wus Pus" />

      <WuspusMeninggal />

    </Container>
  )
}

export default WuspusCreate