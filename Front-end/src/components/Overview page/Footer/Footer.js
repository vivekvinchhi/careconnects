import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons'
import { Button } from '@material-ui/core'

const Footer = () => {
  return (
    <>
      <div className="contactUs">
        <div>
          <h4>Contact Us</h4>
          <h1>Always contact with us</h1>
          <div className="contactUsDetails">
            <div>
              <input placeholder="Email Address*" type="text" />
              <br />
              <input placeholder="Subject*" type="text" />
              <br />
              <input placeholder="Your Message*" type="text" />
              <br />
              <Button className="submitBtn">Submit</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>
          <div>
            <div>
              <p>Services</p>
            </div>
            <div>
              <small>Book Appointment</small>
              <br />
              <small>Check Up</small>
              <br />
              <small>Treatment of Personal Diseases</small>
              <br />
              <small>Book Appointment Online</small>
              <br />
            </div>
          </div>
          <div>
            <div>
              <p>Oral Health</p>
            </div>
            <div>
              <small>Emergency Dental Care</small>
              <br />
              <small>Check Up</small>
              <br />
              <small>Treatment of Personal Diseases</small>
              <br />
              <small>Tooth Extraction</small>
              <br />
              <small>Check Up</small>
            </div>
          </div>
          <div>
            <div>
              <p>Our Address</p>
            </div>
            <div>
              <small>Gandhinagar, India</small>
              <div className="brandIcon">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faGooglePlusG} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <small>Call Now</small>
              <p className="callNow">+919510667063</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <small>Copyright 2023 All Right Reserved</small>
        </div>
      </div>
    </>
  )
}

export default Footer
