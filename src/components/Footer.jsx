const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Terima Kasih Sudah Mengunjungi Enigmanians Resto.
          </p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              <a href="#" className="hover:text-teal-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;  