//import "./Footer.css";
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function Footer() {
  return (
    <MDBFooter color=" grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">© Copyright - Sabios Guías Intérpretes</h5>
            <p>
            Sabios Guías Intérpretes es una iniciativa de la Fundación Canaria Lidia García, que nace en 2007 para promocionar el patrimonio de los pueblos de Canarias poniendo en valor los conocimientos y la experiencia de las personas mayores.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Enlaces</h5>
            <p>
              <li className="list-unstyled">
                <a href="/all-routes">Rutas</a>
              </li>
              <li className="list-unstyled">
                <a href="/contact">Contacto</a>
              </li>
              <li className="list-unstyled">
                <a href="/policy">Política de Privacidad</a>
              </li>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}