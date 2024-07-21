'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { IbuHamilMeninggal } from 'sub-components'

const BayiCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Laporkan Meninggal Ibu Hamil" />

      <IbuHamilMeninggal />

    </Container>
  )
}

export default BayiCreate