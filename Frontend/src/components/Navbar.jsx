function Navbar(){

  const scrollToSection = (id)=>{
    document.getElementById(id).scrollIntoView({
      behavior:"smooth"
    });
  }

  return(
    <nav className="nav">

      <a href="#hero">
        <img src="/Profile.jpeg" className="profile-img" alt="profile" />
      </a>

      <ul>
        <li onClick={()=>scrollToSection("hero")}>Home</li>
        <li onClick={()=>scrollToSection("about")}>About</li>
        <li onClick={()=>scrollToSection("skills")}>Skills</li>
        <li onClick={()=>scrollToSection("projects")}>Projects</li>
        <li onClick={()=>scrollToSection("contact")}>Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar