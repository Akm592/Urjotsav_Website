import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact.svg";

export const ContactUs = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Register Here");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: "Redirecting to Google Form..." });
    setTimeout(() => {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSe1uP4TN8Ehapy0N_3orvbUb16PqEt9egLiNknsro7nkYwTkg/viewform";
    }, 2000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div id="map" style={{ marginTop: "7rem" }}>
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.878828614332!2d81.50676417501263!3d26.2655957770388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba1580bf13c33%3A0x32df0c8e914ab52e!2sRajiv%20Gandhi%20Institute%20of%20Petroleum%20Technology!5e0!3m2!1sen!2sin!4v1695985606588!5m2!1sen!2sin"
                    width="100%"
                    height="350px"
                    style={{ border: 0, borderRadius: "30px" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Campus Ambassador Program</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      
                      <Col size={12} className="px-1">
                        <button type="Register Here">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
