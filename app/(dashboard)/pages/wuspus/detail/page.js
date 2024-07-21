'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { WuspusFormDetail } from 'sub-components'

const WuspusDetail = () => {
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Detail Data Wuspus" />

      <WuspusFormDetail />

    </Container>
  )
}

export default WuspusDetail