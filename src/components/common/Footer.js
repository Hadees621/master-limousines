
export default function Footer() {
  return (
    <footer className="bg-[#16181A] pt-6">
      <div className="sm:align-items-center pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3 lg:gap-x 1024:grid-cols-5 2xl:grid-cols-5 gap-y-10">
            {/* about us */}
            <div className="flex flex-col text-center justify-center h-full px-[25px] lg:px-[2opx] gap-y-10">

              <p className="text-[#FFFFFF] text-[20px] font-Montserrat font-[700] uppercase tracking-[3.6px] text-center lg:text-center">About us</p>
              <div className="px-">
                <p className="text-[rgba(255,255,255,0.75)] text-opacity-75 font-[400] text-center lg:text-center lg: font-Librebaskerville italic text-[13px]">
                  High-end luxury Limousine services at affordable prices
                  <br />
                  <br />
                  We have been providing exceptional high-end transportation throughout San Diego county for over 22 years.
                </p>
              </div>
              <p className="mb-2 mt-auto text-[rgba(255,255,255,0.75)] text-center font-Archivo text-[14px] font-[700]">License: TCP15412-A</p>
            </div>

            {/* Services */}
            <div className="flex flex-col text-center justify-center">
              <p className="text-[#FFFFFF] text-[19px] font-Montserrat font-[700] uppercase tracking-[3.6px]">Services</p>
              <div className='flex justify-center'>
                <ul className="flex flex-col text-left mt-5 space-y-1 list-inside list-disc whitespace-nowrap 1024:whitespace-normal 1440:whitespace-nowrap">
                  <li className="font-Archivo text-[15px] md:text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Gold Key Concierge
                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Airport Transfers
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Executive Ground Transportation
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Tijuana/CBX Airport Services
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Temecula Wine Tours
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Wedding Limousine Transportation
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    San Diego Brewery Tours
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Concert Limo Services
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Bachelor & Bachelorette Parties
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    SoCal Casino Limo Services
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Del Mar Races Limousine Service
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Graduation Limo Services
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Sporting Event Transportation
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Prom Night Limousine Services
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Quinceañera Limousine Service
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Nightclub Limo Service
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Nightclub Limo Service
                  </li>
                  <li className="font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    School Event Limo Services
                  </li>
                </ul>
              </div>
            </div>

            {/* THE FLEET */}
            <div className="flex flex-col text-center justify-center md:justify-start lg:ml-10">
              <p className="text-[#FFFFFF] text-[19px] font-Montserrat font-[700] uppercase tracking-[3.6px]">THE FLEET</p>
              <div className='flex justify-center lg:justify-'>
                <ul className="flex flex-col text-left mt-5 space-y-1 list-disc list-inside whitespace-nowrap">
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Mercedes Sprinter Limousine
                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Mercedes Sprinter Executive

                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Executive Sedan

                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Luxury Stretch Limousine

                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Hummer Stretch Limousine

                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Executive SUV

                  </li>
                </ul>
              </div>
            </div>

            {/* NAVIGATE */}
            <div className="text-center 1440:text-center px-10">
              <p className="text-[#FFFFFF] text-[19px] font-Montserrat font-[700] uppercase tracking-[3.6px]">NAVIGATE</p>
              <div className='flex justify-center  1440:justify-center'>
                <ul className="flex flex-col text-left mt-5 space-y-1 list-disc list-inside">
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Home
                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    About us

                  </li>
                  <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Specials

                  </li>
                  <li className=" font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Fleet

                  </li>
                  <li className=" font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Services
                  </li>
                  <li className=" font-Archivo  text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)]">
                    Services
                  </li>
                </ul>
              </div>
            </div>

            {/* contact */}
            <div className="flex flex-col text-center lg:text-start 2xl:text-center">
              <p className="text-[#FFFFFF] text-[19px] font-Montserrat font-[700] uppercase tracking-[3.6px] text-center lg:text-center">CONTACT</p>
              <p className="font-Archivo text-[14px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)] pt-5 justify-center lg:justify-end">
                Address: 1426 Morena Blvd, San Diego, CA 92110
              </p>
              <div className="flex items-center justify-center lg:justify-start 2xl:justify-center pt-4">
                <img
                  src="/footer/phone.png"
                  alt="Image 2"
                  className="w-[24px] h-[24px]"
                />
                <p className="font-Archivo text-[15px] font-[300] leading-[32.8px] text-[rgba(255,255,255,0.75)] pl-4">
                  (858) 483-5466
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start 2xl:justify-center">
                <img
                  src="/footer/mail.png"
                  alt="Image 3"
                  className="w-[24px] h-[24px]"
                />
                <p className="font-Archivo text-[15px] font-[300] leading-[32.8px] text-[rgba(255,255,255,0.75)] pl-4">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 h-full bg-black items-center justify-center gap-y-20 py-4">
        <div className="flex justify-center md:justify-start">
          <p class="text-[#FFF] font-Montserrat text-[8px] lg:text-[11px] font-semibold uppercase tracking-[1.5px] pl-4">
            © 2001 - 2023 Masterpiece Limousine
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/footer/112.png" alt="Logo" class="h-[45px] lg:h-[65px] w-auto"></img>
        </div>
        <div className="flex justify-center md:justify-end md:pr-4">
          <ul class="flex items-end gap-3 lg:gap-4">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class="text-[rgba(255,255,255,0.75)] transition hover:opacity-75"
              >
                <span class="sr-only">Facebook</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class="text-[rgba(255,255,255,0.75)] transition hover:opacity-75"
              >
                <span class="sr-only">Twitter</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-[rgba(255,255,255,0.75)] transition hover:opacity-75"
              >
                <span className="sr-only">Pinterest</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  aria-hidden="true"
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609825 4 46 13.390175 46 25 C 46 36.609825 36.609825 46 25 46 C 22.876355 46 20.82771 45.682142 18.896484 45.097656 C 19.75673 43.659418 20.867347 41.60359 21.308594 39.90625 C 21.570728 38.899887 22.648438 34.794922 22.648438 34.794922 C 23.348841 36.132057 25.395277 37.263672 27.574219 37.263672 C 34.058123 37.263672 38.732422 31.300682 38.732422 23.890625 C 38.732422 16.78653 32.935409 11.472656 25.476562 11.472656 C 16.196831 11.472656 11.271484 17.700825 11.271484 24.482422 C 11.271484 27.636307 12.94892 31.562193 15.634766 32.8125 C 16.041611 33.001865 16.260073 32.919834 16.353516 32.525391 C 16.425459 32.226044 16.788267 30.766792 16.951172 30.087891 C 17.003269 29.871239 16.978043 29.68405 16.802734 29.470703 C 15.913793 28.392399 15.201172 26.4118 15.201172 24.564453 C 15.201172 19.822048 18.791452 15.232422 24.908203 15.232422 C 30.18976 15.232422 33.888672 18.832872 33.888672 23.980469 C 33.888672 29.796219 30.95207 33.826172 27.130859 33.826172 C 25.020554 33.826172 23.440361 32.080359 23.947266 29.939453 C 24.555054 27.38426 25.728516 24.626944 25.728516 22.78125 C 25.728516 21.130713 24.842754 19.753906 23.007812 19.753906 C 20.850369 19.753906 19.117188 21.984457 19.117188 24.974609 C 19.117187 26.877359 19.761719 28.166016 19.761719 28.166016 C 19.761719 28.166016 17.630543 37.176514 17.240234 38.853516 C 16.849091 40.52931 16.953851 42.786365 17.115234 44.466797 C 9.421139 41.352465 4 33.819328 4 25 C 4 13.390175 13.390175 4 25 4 z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class="text-[rgba(255,255,255,0.75)] transition hover:opacity-75"
              >
                <span class="sr-only">Instagram</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </footer >
  )
}

