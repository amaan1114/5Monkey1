import Image from "next/image";
export default function Hero(){
    return(
    <>
    <div className="flex flex-col w-screen justify-between items-center content-center"
    style={{
        backgroundImage: "url('/svg/homebg.svg')",
        backgroundSize: '[100%] [100%]',
        backgroundPosition: 'contain',
        backgroundRepeat: 'no-repeat',
    }}>
        <div className="flex flex-col w-full items-center content-center mt-30 lg:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:w-[40%] md:w-[60%] w-[90%] text-center fontchange leading-tight md:leading-normal lg:leading-relaxed">Serving Classy Cuisine In <span className="text-[#7E4300]">Sonipat, Haryana</span></h1>
            <p className="mt-3 text-sm md:text-md lg:text-lg text-center px-4">Where Italian Flavors meet European elegance</p>
        </div>

        <div className="flex flex-row mt-6 gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button className="bg-[#7E4300] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-4xl cursor-pointer text-sm sm:text-base w-[50%] sm:w-auto" onClick={()=>{window.location.href='/contact'}}>Book A Table</button>
             <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-4xl cursor-pointer text-sm sm:text-base w-[50%] sm:w-auto" onClick={()=>{window.location.href='/menu'}}>View Menu</button>
        </div>

        <Image 
        src="/svg/HomeH.svg"
        alt="Hero Image"
        width={600}
        height={400}
        className="xl:mt-15 w-80 md:w-96  lg:w-[600px] h-auto rounded-4xl object-cover"
        />

    </div>
    </>
    )
}