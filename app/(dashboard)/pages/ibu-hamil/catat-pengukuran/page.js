'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { IbuHamilCatatPengukuran } from 'sub-components'

const BayiCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Catat Pengukuran Ibu Hamil" />

      <IbuHamilCatatPengukuran />

    </Container>
  )
}

export default BayiCreate