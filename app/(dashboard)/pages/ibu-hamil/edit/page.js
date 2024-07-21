'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { IbuHamilFormEdit } from 'sub-components'

const BayiEdit = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Ubah Data Ibu Hamil" />

      <IbuHamilFormEdit />

    </Container>
  )
}

export default BayiEdit