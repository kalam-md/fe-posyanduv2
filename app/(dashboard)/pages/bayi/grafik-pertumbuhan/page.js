'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { BayiGrafikPetumbuhan, TasksPerformance } from 'sub-components'

const GrafikPertumbuhanBayi = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Grafik Pertumbuhan Bayi/Balita" />
      
      <BayiGrafikPetumbuhan />

    </Container>
  )
}

export default GrafikPertumbuhanBayi