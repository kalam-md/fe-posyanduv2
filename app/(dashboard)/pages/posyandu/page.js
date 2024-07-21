'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { PosyanduTable } from 'sub-components'
import Link from 'next/link';

const Posyandu = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Data Kegiatan Posyandu" />

      <Link href="posyandu/create" className="btn btn-primary mb-4">Tambah Data Kegiatan Posyandu</Link>

      <PosyanduTable />

    </Container>
  )
}

export default Posyandu