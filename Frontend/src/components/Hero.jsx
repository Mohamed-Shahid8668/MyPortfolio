import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="hero">

      <h1>Hi, I'm Mohamed Sahid M</h1>
      <h2>Full Stack Developer & Automation Tester (Selenium + Python)</h2>

      <p>
        I design and build scalable, high-performance web applications using <b>React</b>, <b>Node.js</b>, and <b>MongoDB</b>.
      </p>

      <p>
        I also specialize in automating web testing using <b>Selenium</b> and <b>Python</b>, ensuring robust and reliable applications.
      </p>

      <div className="hero-buttons">
      <a
  href="https://raw.githubusercontent.com/Mohamed-Shahid8668/my-pro/main/Mohamed_Sahid_Resume%20New%20format.pdf"
  target="_blank"
  rel="noopener noreferrer">
  <button className="btn">Download Resume</button>
  </a>

        <a href="#projects">
          <button className="btn-outline">View Projects</button>
        </a>

      </div>

      <div className="social-icons">
        <a href="https://github.com/Mohamed-Shahid8668">
          <FaGithub size={28}/>
        </a>

        <a href="https://www.linkedin.com">
          <FaLinkedin size={28}/>
        </a>

        <a href="https://www.instagram.com/shahidmohamed8668/">
          <FaInstagram size={28} />
        </a>

        <a href="https://wa.me/918903179689">
          <FaWhatsapp size={28} />
        </a>
      </div>

    </section>
  );
}

export default Hero;