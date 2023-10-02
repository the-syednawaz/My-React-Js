import React,{useState} from 'react'
import { Navbar, Nav, Container, NavDropdown, Card, Button, Row, Col, Spinner , Offcanvas,Image ,Collapse, Carousel} from "react-bootstrap"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import "./style.css";
function Student() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [open, setOpen] = useState(false);
  
    return (
        <>

<Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

        <h2>Student Component</h2>
        <h2>Raect bootstrap</h2>


            <Navbar expand="lg" className="bg-info">
                <Container>
                    <Navbar.Brand href="#home">SYED NAWAZ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Carousel>
      <Carousel.Item interval={1000}>
        <img src="image/pic22.jpg"  height="500px"  width="100%" alt='...' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src="image/pic19.jpg" height="500px"  width="100%" alt='...' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src="image/pic17.jpg" height="500px" width="100%" alt='...' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src="image/pic18.jpg" height="500px" width="100%" alt='...' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src="image/pic27.jpg" height="500px" width="100%" alt='...' />
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
                    <Col className='div1'>
                        DUCAT is a Registered IT Training Institute . We train students from both local and PAN India in a variety of nationally recognised professional IT courses.
                        With our streamlined and adaptable course delivery model, we ensure that you thoroughly grasp the information and develop useful skills in your selected course.
                        When you enrol with us, you'll be joining hundreds of other job searchers and IT professionals who got employment or promotion after completion of training from us.
                        We offer a customised approach in training to elevate and build your IT skills which makes you stand out from the crowd.
                        Our Trainers and Quality

                        We have highly qualified trainers and educators specialising in the IT industry. Top IT professionals will educate you with deep knowledge of the course and as per current IT industry needs.
                        Our education strategy is primarily based on Industry requirements. To make sure you're educated on the most recent industry standards, we are very responsive to the variable needs of the IT Industry.</Col>
                    <Col className='div2' xs={6}>ll of our students are entitled to a perk: affiliate consulting, professional services, and placement services.
                        The follow-up meetings with each student individually, free of charge, are conducted by our trainers, who are also skilled IT consultants and professionals. These meeting sessions are nothing but our learning and training strategies to secure a candidate placement.
                        These meetings include career counselling, resume preparation, and mock job interviews with feedback and analysis reports which are provided on a regular basis during training. Your attention will be drawn to class topics that are frequently covered in technical interviews by our trainers.
                        We have developed strong relationships with several IT firms and are interacting with more new and renowned ones that are creating sizable ERP, E-Commerce, and QA programmes, and we are on their preferred vendor list. Our corporate partners are aggressively recruiting our students.
                        We also support our studentsOur Mission

                        Back in 2000, keeping in mind to train and educate youngsters, we started our journey. When we started DUCAT IT Institute, our passion was and is to train youngsters in job-oriented subdomains in the IT industry to secure a career by offering you the best IT Training. We are here to guide you to reach the pinnacle of your career. We are aware of the fact that getting a job is the prime motive of students after course completion, here at DUCAT we provide 100% Job assistance.

                        Our IT Institute has 6 branches at Delhi NCR, with more than 180 courses and skill sets. Our Institute is helping youngsters to be trained in job-oriented courses and improve their career.
                    </Col>
                    <Col className='div3'>Your career Matters to us

                        All of our students are entitled to a perk: affiliate consulting, professional services, and placement services.
                        The follow-up meetings with each student individually, free of charge, are conducted by our trainers, who are also skilled IT consultants and professionals. These meeting sessions are nothing but our learning and training strategies to secure a candidate placement.
                        These meetings include career counselling, resume preparation, and mock job interviews with feedback and analysis reports which are provided on a regular basis during training. Your attention will be drawn to class topics that are frequently covered in technical interviews by our trainers.
                        We have developed strong relationships with several IT firms and are interacting with more new and renowned ones that are creating sizable ERP, E-Commerce, and QA programmes, and we are on their preferred vendor list. Our corporate partners are aggressively recruiting our students.
                        We also support our students in advancing in their professional careers, settling into new work environments after being employed, and maintaining their employability and competitiveness by picking up cutting-edge new skills.</Col>
                </Row>
            </Container>

            
            <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="image/5.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="image/2.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="image/7.jpg" thumbnail />
        </Col>
      </Row>
    </Container>

    
    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="image/2.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

    <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>

       
                <span className='fa fa-user data'></span>
                <i className='fa fa-lock data'></i>
                <i className='fa fa-unlock data'></i>
                <i className='fa fa-delete data'></i>
                    <AiFillDelete className='data' />
                    <FaUserAlt className='data' />
                    <AiFillEdit className='data' />
                
        
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    </>
    )
}

export default Student