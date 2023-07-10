import banner from "../../../assets/mobile-landing.webp";
import "./BannerSection.css"

const BannerSection = () => {
    return (
        <div className="bg-[#1C1C3A]  rounded-lg">
            Hello
            <div className="mx-auto container p-28 flex  justify-between gap-10">
            <div>
                <img className="w- image" src={banner} alt="" />
            </div>
            <div className="flex-shrink-0">
                <div className="lg:flex flex-col items-center ">
                <h1 className="text-6xl text-center leading-tight font-semibold text-white">Gauge Water Purifier <br /> <span className="gold-color">Puts An End </span>To RO Service <br />Pain</h1> 
                <p className="text-center  text-slate-500 text-xl mt-5">Fully automatic water purifier provides the highest water savings while ensuring a <br /> seamless service experience.</p>

                <button className="rounded-full bg-[#3069E5] text-white p-6 font-semibold text-center text-2xl m-10"> Take a Product Tour</button>
                <p  className="text-2xl text-slate-300  font-normal">
                Experience Convenience Like Never Before With Our Smart Water Purifier
                </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BannerSection;