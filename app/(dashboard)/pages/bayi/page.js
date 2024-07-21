'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { BayiTable } from 'sub-components'
import Link from 'next/link';

const Bayi = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Data Bayi/Balita" />

      <Link href="bayi/create" className="btn btn-primary mb-4">Tambah Data Bayi</Link>

      <BayiTable />

    </Container>
  )
}

export default Bayi