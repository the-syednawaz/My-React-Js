
import React, { useState } from 'react'
import { Carousel, Row, Col, Container, Accordion } from "react-bootstrap"
import './Style.css';
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <>

      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img src='image/1.jpg' alt="img" width="100%"  height="500px"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='image/2.jpg' alt="img" width="100%"  height="500px"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='image/3.jpg' alt="img" width="100%" height="500px" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='image/4.jpg' alt="img" width="100%" height="500px" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='image/5.jpg' alt="img" width="100%" height="500px" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='image/6.jpg' alt="img" width="100%"  height="500px"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='image/7.jpg' alt="img" width="100%" height="500px" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='image/8.jpg' alt="img" width="100%" height="500px" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 

      
    <Container fluid>
      <Row>
        <Col className='div1'>About Us:

Welcome to [Your Web Development Company/Your Name]!

At [Your Web Development Company/Your Name], we are passionate about crafting extraordinary digital experiences that leave a lasting impact. As a leading web development company, we take pride in our commitment to innovation, creativity, and client satisfaction.

Who We Are:

We are a team of skilled and dedicated web developers, designers, and digital strategists. Our diverse expertise allows us to tackle a wide range of projects, from building sleek and responsive websites to developing complex web applications that streamline business operations.

Our Vision:

Our vision is to be a driving force in the web development industry, setting new standards for excellence and pushing the boundaries of what's possible. We strive to empower businesses and individuals with the tools they need to succeed in the digital age.

Our Mission:

Our mission is to create exceptional digital experiences that inspire, engage, and drive results. We approach every project with enthusiasm and a client-centric focus, understanding that your success is our success.

Why Choose Us:

    Expertise and Experience: Our team brings a wealth of experience and knowledge to the table. With a proven track record of successful projects, we have honed our skills to deliver top-notch results.

    Innovative Solutions: We stay ahead of the curve by embracing the latest technologies and trends. Our innovative solutions ensure that your website or application stands out from the crowd.

    Collaborative Approach: We believe in the power of collaboration. By working closely with our clients, we gain valuable insights that help us tailor our solutions to meet your specific needs.

    User-Centric Design: User experience is at the heart of everything we do. Our talented designers create intuitive and visually appealing interfaces that resonate with your target audience.

    Customization: We understand that every project is unique. Our custom solutions are designed to address your specific challenges and objectives effectively.

    Reliable Support: Our relationship doesn't end with the project's completion. We offer ongoing support and maintenance to ensure your digital assets remain secure and up-to-date.

Our Services:

    Web Design & Development
    E-commerce Solutions
    Web Applications
    Mobile-Responsive Design
    Content Management Systems (CMS)
    UI/UX Design</Col>
        <Col className='div2'>More than just web developers, we are digital architects, shaping the online landscape for businesses and individuals alike. Our mission is to be the catalyst for growth and success in the digital realm.

With a relentless pursuit of perfection, we craft websites and web applications that captivate, convert, and leave a lasting impression. By combining our technical expertise with a deep understanding of our clients' unique needs, we ensure each project is a reflection of their brand identity and vision.

At the core of our mission lies a dedication to user-centric design. We believe that every digital interaction should be intuitive, engaging, and delightful. Through thoughtful UI/UX design, we make technology accessible and enjoyable for all.

In a fast-paced and ever-changing digital landscape, we stay ahead of the curve. Constantly exploring new technologies and embracing innovation, we are not just keeping up with the trends; we are defining them.

Transparency, integrity, and open communication are the pillars of our client relationships. We work hand-in-hand with our clients, involving them in every step of the development process. Their success is our success.

Beyond mere technical prowess, we are problem solvers. Our team thrives on challenges and relishes the opportunity to create bespoke solutions for unique business requirements.

As we continue to push the boundaries of web development, we also invest in our team's growth and well-being. We foster a culture of learning, collaboration, and creativity, allowing each member to unleash their full potential.

Our mission is not just to build websites; it's to shape the future of digital experiences. We invite you to join us on this exhilarating journey as we transform ideas into reality and leave an indelible mark on the digital world.
Join Us on this Journey:

At [Your Web Development Company/Your Name], we believe that the digital world is full of opportunities waiting to be explored. Let's embark on this exciting journey together, creating impactful digital experiences that make a difference. Contact us today to discuss your next project!</Col>
      </Row>
    </Container>

      <Container fluid>
        <Row>
          <Col>
            <h2 className='mtitle'>Our Services</h2> </Col>
        </Row>
      </Container>

      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Web designing</Accordion.Header>
          <Accordion.Body>

            <h4>Take your users on a journey by giving them the best experience on your website.</h4>
            Captivate users with awesome visuals and keep them immersed in your site by making it easy for them to find exactly what they want. The look and feel of a website will inspire, but user-friendliness is essential to achieving success. As a UK based Web Design Agency, we firmly believe that balancing these two aspects of design will result in the greatest user experience. Whether you want it to convert leads, make sales or drive traffic, your website will be designed by our expert web designers to achieve your goals.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Search Engine Optimisation</Accordion.Header>

          <Accordion.Body>
            <h4>Maximise your site’s organic search potential with a data-driven SEO strategy that will deliver a return on investment.</h4>
            We’ll help you improve your site’s organic traffic and conversions with an ongoing SEO strategy.
            The top-ranking search results should be the most relevant websites for a user’s search query. Your strategy should focus on attracting users who will engage and convert. Not only should you target the right phrases, your landing pages need to be tailored to the user to provide the greatest user experience.
            We research and analyse your website, your target audience and the competition to inform our search engine optimisation campaign. We’ll then formulate a plan to adjust content, enhance design and improve site health, while carefully promoting your website online.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default Home