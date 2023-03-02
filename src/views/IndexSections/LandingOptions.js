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
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export default function Basics() {
  const [inputFocus, setInputFocus] = React.useState(false);
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);
  
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <h2 className="title">Basic Elements</h2>
        <h3>Buttons</h3>
        <p className="category">Pick your style</p>
        <Row>
          <Col md="10">
            <Button color="primary" type="button">
              Default
            </Button>
            <Button className="btn-round" color="primary" type="button">
              Round
            </Button>
            <Button className="btn-round" color="primary" type="button">
              <i className="tim-icons icon-heart-2" />
              With Icon
            </Button>
            <Button
              className="btn-icon btn-round"
              color="primary"
              type="button"
            >
              <i className="tim-icons icon-heart-2" />
            </Button>
            <Button
              className="btn-simple btn-round"
              color="primary"
              type="button"
            >
              Simple
            </Button>
          </Col>
        </Row>
        <p className="category">Pick your size</p>
        <Row>
          <Col md="10">
            <Button color="primary" size="sm">
              Small
            </Button>
            <Button color="primary">Regular</Button>
            <Button color="primary" size="lg">
              Large
            </Button>
          </Col>
        </Row>
        <p className="category">Pick your color</p>
        <Row>
          <Col md="12">
            <Button color="default">Default</Button>

          </Col>
        </Row>
        <br />
        <h3>Links</h3>
        <Row>
          <Col md="8">
           
          </Col>
        </Row>
        <div className="space-70" />
        
        <div className="space-70" />
        <Row id="checkRadios">
         
         
         
         
        </Row>
      </Container>
    </div>
  );
}
