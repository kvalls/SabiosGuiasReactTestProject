import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function Footer() {
  return (
    <div>
       <div className="logos">
        <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
        <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
        <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        <img src="/img/FundaciónLidiaGarcía.jpg" alt="Sabios Guías Intérpretes" />
      </div>
    <MDBFooter color="lime darken-1" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
          <h5 className="title">© Copyright - Sabios Guías Intérpretes</h5>
            <p>
              Sabios Guías Intérpretes es una iniciativa de la Fundación Canaria Lidia García, que nace en 2007 para promocionar el patrimonio de los pueblos de Canarias poniendo en valor los conocimientos y la experiencia de las personas mayores.
            </p>
            
          </MDBCol>

          <MDBCol md="6">
            <h5 className="title">Navegación</h5>
            <p>
              <li className="list-unstyled">
                <a href="/home">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/all-routes">Rutas</a>
              </li>
              <li className="list-unstyled">
                <a href="/contact">Contacto</a>
              </li>
              <a href="/RSS/sabiosguiasinterpretes_rutas.xml" target="_blank">
                <img src="/RSS/pic_rss.gif" />
              </a>
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
    </div>
  );
}