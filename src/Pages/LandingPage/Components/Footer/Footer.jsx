import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-Div">
        <section className="Services">
          <h3>Our Services</h3>
          <ul>
            <li>Project Management</li>
            <li>Document Live Editing</li>
            <li>Real Time Chat</li>
          </ul>
        </section>
        <section className="Support">
          <h3>Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Support Center</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section className="Available">
          <h3>Available On</h3>
          <ul>
            <li>Web app</li>
            <li>Google Play</li>
          </ul>
        </section>
      </div>
      <p className="Rights">
        &copy; 2024 <span>MMH OMZ</span>. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
