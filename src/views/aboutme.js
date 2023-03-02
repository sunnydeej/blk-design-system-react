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
import {
  Button,
  
} from "reactstrap";



export default function LandingPage() {
    React.useEffect(() => {
      document.body.classList.toggle("landing-page");
      // Specify how to clean up after this effect:
      return function cleanup() {
        document.body.classList.toggle("landing-page");
      };
    }, []);
    return (
    <div className="section section-javascript" id="javascriptComponents">
      <Button className="btn-round" color="primary" type="button">
              <i className="tim-icons icon-heart-2" />
              With Icon
            </Button>
    </div>
  );
}
