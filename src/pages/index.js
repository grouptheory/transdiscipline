import React, { useState } from 'react';
import { graphql } from 'gatsby'
import { Container, Header, Menu, Segment} from 'semantic-ui-react'
import About_cmp from '../components/about/about';

import Background_cmp from '../components/background'
import Publication_cmp from '../components/publication/publication';
import ResearchOverview_cmp from '../components/researchoverview/reseachoverview';
import Impact_cmp from '../components/impact/impact';
import Impact_cmp_new from '../components/impact/impact_new';
import Funding_cmp from '../components/funding/funding';
import MatrixViz from '../components/matrixViz/matrixViz';

const pageStyles = {
  
}
const style = {
  h1: {
    marginTop: '1rem',
  }
}


const IndexPage = ({data}) => {

  const [activeItem, setActiveItem] = useState('About');

  const handleMenuClick = (e,{name}) => {
    setActiveItem(name)
  }

  data.allPdFgraphCsv.nodes.forEach(d => {
    d.cosine = parseFloat(d.cosine)
  })

  const Active_content = () => {
    switch(activeItem) {
      case 'About':
        return <About_cmp></About_cmp>
      case 'Publications':
        return <Publication_cmp data={data.allPublicationCsv.nodes}></Publication_cmp>
      case 'Research Explorer':
        return <ResearchOverview_cmp data={data.allPublicationCsv.nodes}></ResearchOverview_cmp>
      case 'Impact':
          return <Impact_cmp data={data.allPublicationCsv.nodes}></Impact_cmp>
      case 'Impact_new':
          return <Impact_cmp_new data={data.allPublicationCsv.nodes}></Impact_cmp_new>
      case 'Funding':
          return <Funding_cmp data={data.allGrantsCsv.nodes}></Funding_cmp>
      case 'MatrixViz':
          return <MatrixViz data={data.allPdFgraphCsv.nodes} nodeclusters={data.allDocClustersCsv.nodes}></MatrixViz>
      default:
        return <Segment>Under constructions</Segment>
    }
  }
    

  return (
    <>
    <Header as='h1' content='Bilal Khan' style={style.h1} textAlign='center'/>
      <Container style={{ padding: '0em 0em 10px' }} >
        <Menu pointing>
            <Menu.Item
              name='About'
              active={activeItem === 'About'}
              onClick={handleMenuClick}
            />
            <Menu.Item
              name='Publications'
              active={activeItem === 'Publication'}
              onClick={handleMenuClick}
            />
            <Menu.Item
              name='Research Explorer'
              active={activeItem === 'Research Explorer'}
              onClick={handleMenuClick}
            />
            <Menu.Item
              name='Impact'
              active={activeItem === 'Impact'}
              onClick={handleMenuClick}
            />
            <Menu.Item
              name='Impact_new'
              active={activeItem === 'Impact_new'}
              onClick={handleMenuClick}
            />
            <Menu.Item
              name='Funding'
              active={activeItem === 'Funding'}
              onClick={handleMenuClick}
            />
            <Menu.Item
              name='Mentorship'
              active={activeItem === 'Mentorship'}
              onClick={handleMenuClick}
            />
           <Menu.Item
              name='Profile'
              active={activeItem === 'Profile'}
              onClick={handleMenuClick}
            />
            <Menu.Item
              name='MatrixViz'
              active={activeItem === 'MatrixViz'}
              onClick={handleMenuClick}
            />
          </Menu>
          
      </Container>
      <Background_cmp></Background_cmp>
      <Container>
        <Active_content></Active_content>
      </Container>
      
     

      {/* <Container style={{ padding: '0em 10em' }}>
        <Segment>Content1</Segment>
      </Container> */}
      
     
      
    </>
  )
}

export const query = graphql`
  query query_publication {
    allPublicationCsv {
      nodes {
        Address
        Authors
        Category
        Citation
        Dates
        Editor
        File
        GoogleScholarURL
        ID
        Pages
        Publication
        Publisher
        ReferredByURL
        Subject
        Title
        Volume
        Year
        id
      }
    },
    allGrantsCsv {
      nodes {
        Amount
        Category
        Funder
        Job
        ID
        PIs
        Status
        Title
        YearEnd
        YearStart
        funder_shortname
      }
    },
    allPdFgraphCsv {
      nodes {
        doc1
        doc2
        cosine
      }
    },
    allDocClustersCsv {
      nodes {
        clusters10
        clusters11
        clusters12
        clusters13
        clusters14
        clusters15
        clusters16
        clusters17
        clusters18
        clusters19
        clusters2
        clusters20
        clusters3
        clusters4
        clusters5
        clusters6
        clusters7
        clusters8
        clusters9
        doc
      }
    }
  }
  `

export default IndexPage
