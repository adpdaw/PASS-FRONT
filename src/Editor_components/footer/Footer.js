import React, { useState, useEffect } from "react";
import "./footer.css";

function Footer() {
  const valorInicial = 0;
  const [year, setYear] = useState(valorInicial);

  const toggleFooter = () => {
    const footer = document.querySelector('.page-editor');
    Footer.style.display === 'none' ? footer.style.display = 'block' : footer.style.display = 'none';
  }

  const currentYear = () => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  };

  //Se carga el año al inicio.
  useEffect(() => {
    currentYear();
  }, []);

  return (
    <React.Fragment>
      <footer className="page-footer">
        <p className="footerText">
          &copy; <span id="date">{year}</span>
          <span className="footer-logo">PassCode made by  </span>
          <a href="/">
            MDcreations
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
