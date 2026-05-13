import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto max-w-screen-xl px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Copyright */}
        <div className="text-center md:text-left">
          <p>© {currentYear} Abdulrahman Medhat</p>
          <p>
            Made with <span title="Love">❤️</span> and{" "}
            <span title="Tea">🍵</span>
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-semibold mb-2">Navigation</h3>
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Column 3: Social / CV */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://github.com/abdulrahman-medhat"
              target="_blank"
              className="hover:text-gray-400"
            >
              {/* GitHub Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013-.405c1.02.005 2.046.137 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.813 1.096.813 2.21 0 1.595-.015 2.882-.015 3.274 0 .322.216.698.825.58C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aabdulrahman-medhat-06b1ba364/"
              target="_blank"
              className="hover:text-blue-500"
            >
              {/* LinkedIn Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.381-.028-3.156-1.922-3.156-1.922 0-2.217 1.5-2.217 3.053v5.603h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.034 0 3.595 1.997 3.595 4.592v5.603z" />
              </svg>
            </a>
            <a
              href="/Abdulrahman_Frontend_Developer.pdf"
              download
              className="hover:text-red-500 font-semibold"
            >
              CV
            </a>
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-semibold mb-2">Contact</h3>
          <a
            href="mailto:abdulrahman.medhat.mohamed@gmail.com"
            className="flex items-center justify-center text-sm md:justify-start gap-2 hover:text-gray-400"
          >
            <span>📧</span>
            abdulrahman.medhat.mohamed@gmail.com
          </a>
          <a
            href="tel:+201206564993"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-400"
          >
            📞 +20 120 656 4993
          </a>
          <p className="flex items-center justify-center md:justify-start gap-2">
            📍 Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
