'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { WuspusFormEdit } from 'sub-components'

const WuspusEdit = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Ubah Data Wuspus" />

      <WuspusFormEdit />

    </Container>
  )
}

export default WuspusEdit