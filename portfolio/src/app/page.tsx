import React from "react";
import Image from "next/image";
import linkedin from "../../public/Image/linkedin.png";
import github from "../../public/Image/github.jpg";
import map from "../../public/Image/map.jpg";
import logo from "../../public/Image/logo.jpg";
import Link from "next/link";
import logodes from "../../public/Image/logo-des.jpg";
import webimg from "../../public/Image/webimg.jpg";
import atmpro from "../../public/Image/atm.jpg";
import cart from "../../public/Image/c-art.jpg";
import cwrite from "../../public/Image/con-write.jpg";



const page = () => {
  return (
    <div className="maindiv w-screen grid">
      <div className="header w-screen grid">
        <Image
          src={logo}
          alt="img"
          width="58"
          height="48"
          className="styleimage"
        />
        <h1 className="h1 grid">A<span>tia</span> S<span>ultani</span></h1>
        <Link className="bton grid-cols-1" href="#home">
          Home
        </Link>
        <Link className="bton grid-cols-2" href="#about">
          About
        </Link>
        <Link className="bton grid-cols-3" href="#services">
          Services
        </Link>
        <Link className="bton grid-cols-4" href="#contact">
          Contact
        </Link>
      </div>

      <div className="intro w-screen">
        <div className="log">
          <Image
            src={logo}
            alt="img"
            width="250"
            height="230"
            className="logo"
          />
        </div>
        <div className="info w-screen">
          <h3>
            I am
            <p>
              A<span>tia</span> S<span>ultani</span>
            </p>
          </h3>
          <h1> Front End Developer </h1>
          <p>
            <q> Your Code Is The Foundation Of Someone`s Next Wow  Moment </q>
          </p>
        </div>


      </div>

      <section id="about" className='grid'>
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl">Hello ! </h1>
        <h3> Here You Read My Introducation  </h3>
        <p className="text">
          Recently I Continued My Web Developement Course in GIAIC<br />
          (Governor Sindh Initiative for
          Artificial Intelligence, Web 3.0 & Metaverse).
          <br />
          I done HTML , CSS , JAVASCRIPT , TYPESCRIPT , NEXT JS
        </p>
        <p>You May Further Vist My Profile on Linkin.Click on it</p>
        <Link href="https://www.linkedin.com/in/atia-sultani-a9520113b" target="_blank">

          <Image
            src={linkedin}
            alt="linkedin"
            width={70}
            height={70}
            className="linkedin"
          />
        </Link><br />
        <p className="text">At Github You Can see My Work & projects.Click on it</p>
        <Link href="https://github.com/atiasultani" target="_blank">
          <Image
            src={github}
            alt="github"
            width={70}
            height={70}
            className="github"
          />
        </Link>

      </section>

      <section id="services" className="grid">
        <div className="serv-main grid">

          <div className="ser">

            <h1>Web Developement</h1>
            <Link href="https://firstweb-rosy.vercel.app/" target="_blank">

              <Image
                src={webimg}
                alt="web designs"
                width={150}
                height={150}
                className="s-div"
              />
            </Link><br />
          </div>

          <div className="ser">
            <h1> Typescript Project</h1>
            <Link href="https://github.com/atiasultani/as4-ATM-Transaction" target="_blank">

              <Image
                src={atmpro}
                alt="atm project"
                width={150}
                height={150}
                className="s-div"
              />
            </Link><br />

          </div>

          <div className="ser">
            <h1>Logo Design</h1>

            <Image
              src={logodes}
              alt="logo designs"
              width={150}
              height={150}
              className="s-div"
            />

          </div>

          <div className="ser">

            <h1>Creative Art</h1>
            <Image
              src={cart}
              alt="creative art "
              width={150}
              height={150}
              className="s-div"
            />

          </div>

          <div className="ser">

            <h1>Contant Writer</h1>
            <Image
              src={cwrite}
              alt="creative art "
              width={150}
              height={150}
              className="s-div"
            />

          </div>


        </div>
      </section>


      <section id="contact" className="grid">
        <address>
          <p>
            <b> Mail To : </b> Atia.Sultani@outlook.com
          </p>
          <p>Visit Our Social Media Plateform</p>
          <p>Click on it</p>
          <div className="social">

            <a className="a" href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
              <Image className="pic" src="/facebook.jpg" alt="Facebook" title="Facebook" width={70} height={70} />
            </a>

            <a className="a" href="https://www.instagram.com/" target="_blank">
              <Image className="pic" src="/instagram.jpg" alt="Instagram" title="Instagram" width={70} height={70} />
            </a>

            <a className="a" href="https://www.youtube.com/" target="_blank">
              <Image className="pic" src="/youtube.jpg" alt="Youtube" title="Youtube" width={70} height={70} />
            </a>

          </div>

          <p>
            <b> Whats App : </b> 0321-123456789
          </p>
          <p>
            <b> Address:</b> office 000 block 0 street 0 , Pakistan
          </p>
          <Image src={map} alt="map" className="map" />
        </address>
      </section>
    </div>
  );
};

export default page;
