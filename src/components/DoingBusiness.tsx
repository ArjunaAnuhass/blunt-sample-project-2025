import Image from "next/image";
import React from "react";

function DoingBusiness() {
  return (
    <div className="bg-[#f5f5f5] z-20">
      <div className="grid grid-cols-2 pt-[93px] pl-[50px]">
        {/* <div> */}
          <div>
            <h2 className="mb-[50px] max-w-[553px] text-[95px] leading-[.99em] font-bold">
              We are B Corp Certified
            </h2>
            <p className=" m-0 max-w-[400px] text-lg leading-[24px]">
              B Corp certification solidifies our dedication to fostering
              positive change and doing business for good. BLUNT now joins a
              community of over 8,500 B Corps worldwide leading the charge
              towards a more sustainable future across more than 160 industries
              and 98 countries.
            </p>
          </div>
          <div className="pl-[93px]">
            <div className="border-r-[8px] overflow-hidden">
                <Image src="/images/Untitled_design_14.webp" alt="B Corp Certified" width={1000} height={1000} className="block max-w-[100%]" />
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default DoingBusiness;
