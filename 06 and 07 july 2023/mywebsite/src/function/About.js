import React from 'react'
import Slider from './Slider'
import{Container,Row,Col} from 'react-bootstrap'
function About() {
  return (
    <>
    <Slider/>
    
    <Container fluid>
        <Row>
          <Col>
            <h2 className='mtitle'>About Us</h2>
            <p className='para'>We have a large number of team of Digital Marketing, Search Engine Optimization ( SEO ) , Social Media Optimization ( SMO) , Pay per click (PPC), Web design and development, Mobile app development services. By working on the core, our globally integrated digital marketing agency helps you increase your sales, create brand awareness and get visibility online. Our marketing professionals work with you to identify and fulfill your marketing goals with cutting-edge approaches across varied channels. We uncover a digital strategy with four central elements: the right information, to the right people, on the right channels and at the right time.
</p>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default About