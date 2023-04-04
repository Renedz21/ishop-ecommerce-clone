const HeroBanner = () => {
    return (
        <section
            className="relative bg-[url(https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.xlarge.jpg)] bg-contain bg-center bg-no-repeat "
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Descubre el nuevo
                        <strong className="block font-extrabold text-rose-700">
                            iPhone 14 Pro Max
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-semibold">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Conocer más
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:bg-rose-700 hover:text-white focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Comprar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroBanner