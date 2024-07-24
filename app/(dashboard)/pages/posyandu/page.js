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
      <Link href="https://docs.google.com/spreadsheets/d/17pVZt_gAQduf-Yrw8RfQH7Mrie_r-5fZ/edit?usp=sharing&ouid=101531279147380432130&rtpof=true&sd=true" className="btn btn-success mb-4 ms-3" target="_blank">Download Laporan</Link>

      <PosyanduTable />

    </Container>
  )
}

export default Posyandu