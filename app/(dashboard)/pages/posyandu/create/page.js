'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { PosyanduFormCreate } from 'sub-components'

const PosyanduCreate = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Tambah Data Kegiatan Posyandu" />

      <PosyanduFormCreate />

    </Container>
  )
}

export default PosyanduCreate