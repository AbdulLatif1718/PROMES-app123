import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Emergency Contacts Section */}
          <div>
            <h2 className="font-bold mb-4">Emergency Contacts</h2>
            <ul>
              <li>
                Police
                <a className="underline" href="tel:191">
                  191
                </a>
              </li>
              <li>
                Fire Service
                <a className="underline" href="tel:192">
                  192
                </a>
              </li>
              <li>
                Ambulance
                <a className="underline" href="tel:193">
                  193
                </a>
              </li>
              <li>
                NADMO
                <a className="underline" href="tel:0299350030">
                  0299350030
                </a>
              </li>
            </ul>
          </div>

          {/* External Links Section */}
          <div>
            <h2 className="font-bold mb-4">External Link</h2>
            <ul>
              <li>
                <a className="underline" href="#">
                  GoG E-Payslip Portal
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Tarkwa Nsuaem Municipal Assembly
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Local Government Service
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Government of Ghana
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="font-bold mb-4">Company</h2>
            <ul>
              <li>Contact</li>
              <li>P.O.Box AD</li>
              <li>
                Phone:
                <a className="underline" href="tel:+233302944943">
                  +233 302 944 943
                </a>
              </li>
              <li>
                Email:
                <a className="underline" href="mailto:info@tnma.gov.gh">
                  info@tnma.gov.gh
                </a>
              </li>
              <li>Ghana Post Code: WR-101-4048</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          {/* Footer Links */}
          <div className="flex justify-center space-x-8 mb-4">
            <a className="underline" href="#">
              About us
            </a>
            <a className="underline" href="#">
              Explore
            </a>
            <a className="underline" href="#">
              Make a complain
            </a>
          </div>

          {/* Logo and Name */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <img
              alt="Promes logo"
              className="w-12 h-12"
              height="50"
              src="/img/image.png"
              width="50"
            />
            <span className="font-bold">PROMES</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            <a className="text-white" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Copyright & Footer Links */}
          <div className="text-sm">
            <p>© 2025 Promes. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a className="underline" href="#">
                Terms of Service
              </a>
              <a className="underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
