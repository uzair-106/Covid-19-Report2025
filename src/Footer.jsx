function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4"><a href="/About" className="hover:underline">About</a></li>
                <li className="mb-4"><a href="/Home" className="hover:underline">Cases</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">COVID‑19 </a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help Center</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4"><a href="#" className="hover:underline">Discord Server</a></li>
                <li className="mb-4"><a href="/Twitter" className="hover:underline">Twitter</a></li>
                <li className="mb-4"><a href="/facebook.com" className="hover:underline">Facebook</a></li>
                <li className="mb-4"><a href="/Contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4"><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Licensing</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4"><a href="#" className="hover:underline">iOS</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Android</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Windows</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">MacOS</a></li>
              </ul>
            </div>
          </div>
          <div >
          <div className="px-14 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/" className="hover:underline">Covid @ 19</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
            </div>
          </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  