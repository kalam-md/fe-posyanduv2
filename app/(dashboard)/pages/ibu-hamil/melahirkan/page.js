'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { IbuHamilMelahirkan } from 'sub-components'

const MelahirkanIbuHamil = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Ibu Hamil Melahirkan" />
      
      <IbuHamilMelahirkan />

    </Container>
  )
}

export default MelahirkanIbuHamil