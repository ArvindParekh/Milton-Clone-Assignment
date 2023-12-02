
export default function Content() {

    return (
        <>
            <div className="my-20 text-center">
                {/* Upper content */}
                <h3 className="bg-gray-100 rounded-3xl font-bold inline p-2 px-4 text-gray-800 text-sm md:lg:text-base">An other way to manage time</h3>

                <span className="text-[2.5rem] mt-1 block font-extrabold m-auto w-[65%] text-slate-800 leading-[1.2] md:lg:text-[80px]/[1.1em] md:lg:w-[703px]">Your new favorite calendar <span className="md:lg:text-[4rem]">🗓</span> app</span>

                <div className="my-8 w-[67%] mx-auto font-medium text-gray-500 blur-0 md:lg:text-xl/relaxed md:lg:w-[30%]">
                    <p>Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.</p>
                </div>
                {/* Button */}
                <div className="flex flex-col mb-5">

                    <button className="m-auto py-[1rem] px-8 rounded-xl bg-gray-800 text-gray-100 font-semibold text-md mb-2 hover:scale-110 transition duration-300">Get started, it&apos;s free</button>
                    <span className="text-xs text-gray-600 font-medium">Free 14 days trial, no credit card needed</span>

                </div>


                {/* Stars section */}
                <div className="flex justify-center items-center w-[80%] mt-8 m-auto gap-2">

                    {/* Profile Pics */}
                    <div className=" w-1/2 flex items-center justify-end -space-x-[15px]">

                        <div className="w-[42px] overflow-hidden group hover:cursor-pointer">

                            <img className="rounded-full border-[3px] border-white group-hover:hidden" src="/images/1.png" />
                            <img className="hidden group-hover:rounded-full group-hover:inline-block" src="/images/hoverreplace.svg" />
                        </div>

                        <div className="w-[42px] overflow-hidden group hover:cursor-pointer">

                            <img className="rounded-full border-white border-[3px] group-hover:hidden" src="/images/2.png" />
                            <img className="hidden group-hover:rounded-full group-hover:inline-block" src="/images/hoverreplace.svg" />

                        </div>

                        <div className="w-[42px] overflow-hidden group hover:cursor-pointer">

                            <img className="rounded-full border-[3px] border-white group-hover:hidden" src="/images/3.png" />
                            <img className="hidden group-hover:rounded-full group-hover:inline-block" src="/images/hoverreplace.svg" />

                        </div>

                        <div className="w-[42px] overflow-hidden group hover:cursor-pointer">

                            <img className="rounded-full border-4 border-white group-hover:hidden" src="/images/4.png" />
                            <img className="hidden group-hover:rounded-full group-hover:inline-block" src="/images/hoverreplace.svg" />

                        </div>

                        <div className="w-[42px] overflow-hidden group hover:cursor-pointer">

                            <img className="rounded-full border-[3px] border-white group-hover:hidden" src="/images/5.png" />
                            <img className="hidden group-hover:rounded-full group-hover:inline-block" src="/images/hoverreplace.svg" />

                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="flex flex-col justify-center items-start w-1/2">

                        <div className="flex justify-start items-center">
                            <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
                            {/* <div className="w-10 ">
                                <img src="/images/star.svg" />
                                <img src="/images/star.svg" />
                                <img src="/images/star.svg" />
                                <img src="/images/star.svg" />
                                <img src="/images/star.svg" />
                            </div> */}
                            <span className="font-bold text-black ml-3">5.0</span>
                        </div>

                        <div className="text-left font-medium text-sm text-gray-600">
                            From 200+ happy users
                        </div>
                    </div>
                </div>

                {/* Screenshot */}
                <div className="my-20">
                    <img className="rounded-2xl w-[85%] md:lg:max-w-[65%] mx-auto border border-gray-300" src="/images/calendar.webp"></img>
                </div>
            </div>
        </>
    )
}