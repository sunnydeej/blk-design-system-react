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

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
          <div className="row ps-6">
            <div className="col">
              <div className="card" style={{ width: "25rem", height: "25rem" }}>
                <div className="card-img-top">
                  <img
                    img
                    src={require("assets/img/deej1.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </div>
                          </div>

                      </div>
                      <div className="col">
                          <div className="card" style={{ width: "25rem", height: "25rem" }}>
                              <div className="card-img-top">
                                  <img
                                      img
                                      src={require("assets/img/deej1.jpg")}
                                      class="img-fluid"
                                      alt=""
                                  />
                              </div>
                          </div>

                      </div>
          </div>

          <h1 className="h1-seo">BLK• React</h1>
          <h3 className="d-none d-sm-block">
            A beautiful Design System for Bootstrap 4 (reactstrap) and React.
            It's Free and Open Source.
          </h3>
      </Container>
    </div>
  );
}
