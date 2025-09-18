import React from "react";
import suzuki from "/src/assets/suzuki.png"
import daihatsu from "/src/assets/daihatsu.png"
import ford from "/src/assets/ford.png"
import honda from "/src/assets/honda.png"
import hyundai from "/src/assets/hyundai.png"
import isuzu from "/src/assets/isuzu.png"
import kia from "/src/assets/kia.png"
import mazda from "/src/assets/mazda.png"
import mitsubishi from "/src/assets/mitsubishi.png"
import nissan from "/src/assets/nissan.png"
import timor from "/src/assets/timor.png"
import toyota from "/src/assets/toyota.png"
import wuling from "/src/assets/wuling.png"
import ignition_coil from "/src/assets/ignition_coil.png"
import sakamitsu_fuel_pump from "/src/assets/sakamitsu_fuel_pump.png"

const AllBrandLogo = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center mt-10 mb-7 gap-6">
                <img src={ignition_coil} alt="wuling" className="lg:w-78 lg:h-105 w-24 h-13" />
                <img src={sakamitsu_fuel_pump} alt="wuling" className="lg:w-78 lg:h-105 w-24 h-13" />
            </div>
        </>
    )
}

export default AllBrandLogo;