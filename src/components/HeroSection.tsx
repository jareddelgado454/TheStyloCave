import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="">
      <div
        data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-120 md:h-[calc(100vh-106px)]  bg-gray-100 dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div className="h-120 md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/images/heroImage.jpeg')] bg-cover bg-center bg-no-repeat">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white text-2xl font-montserrat font-extrabold">Barber Shop.</span>
                  <span className="block text-white text-xl md:text-7xl font-new-rocker font-extrabold">
                    The Stylo Cave 
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-3 px-7 inline-flex items-center font-montserrat gap-x-2 text-xl font-medium rounded-3xl border-red-500 border-[5px] text-black"
                      href="#"
                    >
                      Averigua tu Estilo
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
