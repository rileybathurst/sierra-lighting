import React from "react"
import { Link } from "gatsby"

const ContactList = () => (
  <ul className="contactlist">
    <li key="gmail"><a href="mailto:info@sierra.lighting">info@sierra.lighting</a></li>
    <li key="nv number"><a href="tel:+1-775-525-1898">Nevada Number: (775) 525-1898</a></li>
    <li key="ca number"><a href="tel:+1-530-414-9899">California Number: (530) 414-9899</a></li>
  </ul>
)

export default ContactList
