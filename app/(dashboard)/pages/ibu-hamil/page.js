'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { IbuHamilTable } from 'sub-components'
import Link from 'next/link';

const Bayi = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Data Ibu Hamil" />

      <Link href="ibu-hamil/create" className="btn btn-primary mb-4">Tambah Data Ibu Hamil</Link>

      <IbuHamilTable />

    </Container>
  )
}

export default Bayi