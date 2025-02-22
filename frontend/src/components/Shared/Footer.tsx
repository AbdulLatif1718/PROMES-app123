
const Footer = () => {
  return (
    <div className="relative">
      <footer className="bg-purple-900 text-white py-12 px-8">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Emergency Contacts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li>Police191</li>
              <li>Fire Service192</li>
              <li>Ambulance193</li>
              <li>NADMO0299350030</li>
            </ul>
          </div>

          {/* External Link */}
          <div>
            <h3 className="text-xl font-semibold mb-4">External Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">GoG E-Payslip Portal</a></li>
              <li><a href="#" className="hover:underline">Tarkwa Nsuaem Municipal Assembly</a></li>
              <li><a href="#" className="hover:underline">Local Government Service</a></li>
              <li><a href="#" className="hover:underline">Government of Ghana</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <p>Contact</p>
              <p>P.O.Box AD</p>
              <p>Phone: +233 302 944 943</p>
              <p>Email: info@tnma.gov.gh</p>
              <p>Ghana Post Code:WR-101-4048</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-purple-800 pt-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Explore</a>
            <a href="#" className="hover:underline">Make a complain</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 items-center">
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="mb-4 md:mb-0">&copy; 2025 Promes. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* White Space with Logo */}
      <div className="bg-white py-16 relative">
        <div className="max-w-7xl mx-auto flex justify-center">
          {/* Logo positioned as a bridge between purple and white sections */}
          <div className="absolute -top-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-900 rounded-full"></div>
                <span className="text-purple-900 font-semibold text-xl">PROMES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;