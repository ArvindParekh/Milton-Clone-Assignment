
export default function Header() {


    return (
        <>
            <div className="flex justify-center items-center py-5 px-5 space-x-56 md:max-xl:space-x-20">

                {/* Logo */}
                <div className="flex items-center justify-center gap-1 md:max-xl:ml-10 cursor-pointer">
                    <img src="/images/arrow.png" className="w-[20px] h-[20px] rounded-md" />
                    <p className="font-bold text-base">Milton</p>
                </div>

                {/* Menu links */}
                <div className="hidden md:lg:inline-block">
                    <ul className="font-bold text-base text-gray-500 flex gap-10">

                        <a className="hover:underline hover:text-black"><li>Features</li></a>
                        <a className="hover:underline hover:text-black"><li>Testimonial</li></a>
                        <a className="hover:underline hover:text-black"><li>Pricing</li></a>
                        <a className="hover:underline hover:text-black"><li>FAQs</li></a>
                        <a className="hover:underline hover:text-black"><li>Blog</li></a>

                    </ul>
                </div>

                {/* Login Buttons */}
                <div className="hidden md:lg:flex md:lg:gap-2 md:lg:shrink md:max-xl:pr-10">

                    <button className="py-2 px-5 font-semibold bg-slate-100 rounded-xl hover:scale-110 transition duration-300 md:max-xl:px-14 md:max-xl:whitespace-nowrap">Log In</button>
                    <button className="py-2 px-5 font-semibold text-white bg-black rounded-xl hover:scale-110 transition duration-300 md:max-xl:whitespace-nowrap">Get Started</button>

                </div>

                <div className="md:lg:hidden">
                    <img className="w-[20px]" src="/images/hamburger.png" />
                </div>
            </div>
            <hr />

        </>
    )
}