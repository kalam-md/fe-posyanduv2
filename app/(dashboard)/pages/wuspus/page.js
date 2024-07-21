'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { WuspusTable } from 'sub-components'
import Link from 'next/link';

const Wuspus = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Data Wus Pus" />

      <Link href="wuspus/create" className="btn btn-primary mb-4">Tambah Data WusPus</Link>

      <WuspusTable />

    </Container>
  )
}

export default Wuspus