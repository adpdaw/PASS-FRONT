import React, { useState, useEffect } from "react";
import "./footer.css";

function Footer() {
  const valorInicial = 0;
  const [year, setYear] = useState(valorInicial);

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
        <p>
          &copy; <span id="date">{year}</span>
          <span className="footer-logo">PassCode made by</span>
          <a href="https://guileless-scone-3def61.netlify.app" target="_blank">
            MDcreations
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
