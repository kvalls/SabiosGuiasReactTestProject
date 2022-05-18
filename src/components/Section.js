import "./Section.css";
import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

export default function Section() {
  return (
    <MDBContainer>
        <section className="my-5">
        <img src={require("../assets/about1.png")} className="Logo" alt="logo"/>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Es un programa intergeneracional de promoción del patrimonio y la cultura a través de la sabiduría de las personas mayores.

          Guiar y saber interpretar el paisaje y su historia acercándolo de forma peculiar a todos los públicos, es una labor que los Sabios Guías Intérpretes desarrollan con gran orgullo y capacidad.
          </p>
          <MDBRow>
            <MDBCol md="4" className="md-0 mb-5">
              <MDBRow>
                <MDBCol lg="2" md="3" size="2"></MDBCol>
                <MDBCol lg="10" md="9" size="10">
                  <img src={require("../assets/educacion.png")} className="Logo2" alt="logo"/>
                  <p className="grey-text">
                  El proyecto Sabios Guías Intérpretes pretende acercarse aun más a la población juvenil 
                  a través del Programa enSeñas con el objetivo de incorporar de manera integral nuestros 
                  valores históricos, culturales y patrimoniales a la práctica educativa, entendida en su 
                  generalidad: formal, no formal e informal.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="4" className="md-0 mb-5">
              <MDBRow>
                <MDBCol lg="2" md="3" size="2">
                </MDBCol>
                <MDBCol lg="10" md="9" size="10">
                <img src={require("../assets/guias.png")} className="Logo2" alt="logo"/>
                  <p className="grey-text">
                  Te proponemos una nueva forma de recorrer nuestros pueblos y municipios. 
                  De la mano de nuestros mayores podrás vivir de primera mano los usos originales 
                  de los lugares de interés y sus vivencias de antaño. Disfruta de la Naturaleza
                   y también de la Historia.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="4" className="md-0 mb-5">
              <MDBRow>
                <MDBCol lg="2" md="3" size="2">                </MDBCol>
                <MDBCol lg="10" md="9" size="10">
                <img src={require("../assets/vidassabias.png")} className="Logo2" alt="logo"/>
                  <p className="grey-text">
                  Vidas Sabias nace con el objetivo de fomentar la recopilación audiovisual del 
                  patrimonio cultural inmaterial que las personas de Canarias nos aportan. 
                  Un reconocimiento al valor del saber popular y que no está escrito. 
                  Necesario para conocer y entender la riqueza cultural que nos rodea.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
  );
}