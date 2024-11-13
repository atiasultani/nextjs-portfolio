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
    <div className="maindiv">
      <div className="header flex items-center justify-between px-4 py-6 bg-gray-800">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="img"
            width="58"
            height="48"
            className="styleimage"
          />
          <h1 className="text-white text-3xl ml-2">A<span className="text-yellow-400">tia</span> S<span className="text-yellow-400">ultani</span></h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link className="bton text-white" href="#home">Home</Link>
          <Link className="bton text-white" href="#about">About</Link>
          <Link className="bton text-white" href="#services">Services</Link>
          <Link className="bton text-white" href="#contact">Contact</Link>
        </div>
      </div>

      <div className="intro flex flex-col md:flex-row items-center px-4 py-16 bg-gray-900">
        <div className="log mb-8 md:mb-0">
          <Image src={logo} alt="img" width="250" height="230" className="logo rounded-full" />
        </div>
        <div className="info text-center md:text-left text-white">
          <h3 className="text-xl font-semibold">I am</h3>
          <p className="text-2xl font-bold">A<span className="text-yellow-400">tia</span> S<span className="text-yellow-400">ultani</span></p>
          <h1 className="text-4xl font-extrabold">Front End Developer</h1>
          <p className="italic text-lg mt-4">"Your Code Is The Foundation Of Someone’s Next Wow Moment"</p>
        </div>
      </div>

      <section id="about" className="px-4 py-16 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold text-center">Hello !</h1>
        <h3 className="text-xl text-center mt-4">Here You Read My Introduction</h3>
        <p className="mt-4 text-center text-lg">
          Recently, I continued my Web Development course at GIAIC (Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse). I have worked with HTML, CSS, JavaScript, TypeScript, and Next.js.
        </p>
        <div className="text-center mt-6">
          <p className="text-lg">You May Further Visit My Profile on LinkedIn. Click on it.</p>
          <Link href="https://www.linkedin.com/in/atia-sultani-a9520113b" target="_blank">
            <Image
              src={linkedin}
              alt="linkedin"
              width={70}
              height={70}
              className="inline-block my-4"
            />
          </Link>
          <p className="text-lg mt-4">At GitHub, you can see my work & projects. Click on it.</p>
          <Link href="https://github.com/atiasultani" target="_blank">
            <Image
              src={github}
              alt="github"
              width={70}
              height={70}
              className="inline-block my-4"
            />
          </Link>
        </div>
      </section>

      <section id="services" className="bg-gray-900 px-4 py-16 text-white">
        <h1 className="text-3xl font-bold text-center">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="ser text-center">
            <h1 className="text-xl font-semibold">Web Development</h1>
            <Link href="https://firstweb-rosy.vercel.app/" target="_blank">
              <Image src={webimg} alt="web designs" width={150} height={150} className="rounded-full mt-4" />
            </Link>
          </div>

          <div className="ser text-center">
            <h1 className="text-xl font-semibold">Typescript Project</h1>
            <Link href="https://github.com/atiasultani/as4-ATM-Transaction" target="_blank">
              <Image src={atmpro} alt="atm project" width={150} height={150} className="rounded-full mt-4" />
            </Link>
          </div>

          <div className="ser text-center">
            <h1 className="text-xl font-semibold">Logo Design</h1>
            <Image src={logodes} alt="logo designs" width={150} height={150} className="rounded-full mt-4" />
          </div>

          <div className="ser text-center">
            <h1 className="text-xl font-semibold">Creative Art</h1>
            <Image src={cart} alt="creative art" width={150} height={150} className="rounded-full mt-4" />
          </div>

          <div className="ser text-center">
            <h1 className="text-xl font-semibold">Content Writer</h1>
            <Image src={cwrite} alt="creative art" width={150} height={150} className="rounded-full mt-4" />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-800 px-4 py-16 text-white">
        <address className="text-center">
          <p className="text-lg">
            <b>Mail To:</b> Atia.Sultani@outlook.com
          </p>
          <p className="text-lg mt-4">Visit Our Social Media Platform</p>
          <div className="social flex justify-center mt-4">
            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
              <Image className="pic mx-4" src="/facebook.jpg" alt="Facebook" title="Facebook" width={70} height={70} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Image className="pic mx-4" src="/instagram.jpg" alt="Instagram" title="Instagram" width={70} height={70} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <Image className="pic mx-4" src="/youtube.jpg" alt="Youtube" title="Youtube" width={70} height={70} />
            </a>
          </div>
          <p className="mt-4">
            <b>WhatsApp:</b> 0321-123456789
          </p>
          <p className="mt-2">
            <b>Address:</b> Office 000 block 0 street 0, Pakistan
          </p>
          <Image src={map} alt="map" className="map mt-8 mx-auto" />
        </address>
      </section>
    </div>
  );
};

export default page;
