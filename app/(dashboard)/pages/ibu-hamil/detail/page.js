'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { IbuHamilFormDetail } from 'sub-components'

const BayiDetail = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Detail Data Ibu Hamil" />

      <IbuHamilFormDetail />

    </Container>
  )
}

export default BayiDetail