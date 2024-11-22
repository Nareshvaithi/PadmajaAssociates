import { partnerslist } from "../../store/store";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Logo from "../../assets/logo/CompanyLogo.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-litegold">
        <h1 className="font-headfont text-xl md:text-3xl font-bold text-center">Our Partners</h1>
          <div className="relative overflow-hidden w-full py-2">
            <div className="flex animate-scroll space-x-4">
              {/* Original list */}
              {partnerslist.map(({ id, img }) => (
                <div key={`original-${id}`} className="flex-shrink-0">
                  <img className="w-20 md:w-auto h-auto object-contain" src={img} alt={`Partner ${id}`} />
                </div>
              ))}
                {/* Duplicate list for seamless scrolling */}
                {partnerslist.map(({ id, img }) => (
                  <div key={`duplicate-${id}`} className="flex-shrink-0">
                    <img className="w-20 md:w-auto h-auto object-contain" src={img} alt={`Partner Duplicate ${id}`} />
                  </div>
              ))}
            </div>
          </div>
      </div>
      <div className="py-5">
        <div className="container">
              <div className="text-center text-4xl md:text-9xl font-headfont font-bold tracking-widest">
                <h1 className="text-gold flex items-center justify-center">LET'S <BsArrowUpRightCircleFill className="animate-beat mx-2"/>TALK</h1>
              </div>
              <div>
                <div>
                  <div className="w-32 border border-gold p-4 rounded-full">
                    <img src={Logo} alt="Company Logo" />
                  </div>
                  <p>Optimizing, Securing, and Supporting Your Future</p>
                  <p>Providing comprehensive insurance and IT support services to help you live and work with peace of mind.</p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
