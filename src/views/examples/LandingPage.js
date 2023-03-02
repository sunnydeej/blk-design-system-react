/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
    
      <ExamplesNavbar />
      <div className="wrapper">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


       <Container>
        <Row>
          <Col md="6">
          <Card >
            <CardTitle>
            <h1>About Me</h1>

            </CardTitle>
        <CardBody>
        <p>para
ndfzxfdsgfngfcrcddchgvgjhvjvjh       hjhjhjhjj  
  </p>
        </CardBody>
      </Card>
          <Button classname="btn-round" color="warning"> </Button>
          

          </Col>
        </Row>
       </Container>
      </div>
    </>
  );
}
