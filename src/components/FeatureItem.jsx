import React from "react";

const FeatureItem = ({ id, title, desc }) => {
    return (
        <>
        <div className="bg-white rounded-xl shadow-lg flex flex-col col-lg-6 mb-4 items-center justify-center h-[3px] w-[450px] px-14 py-30">
                    <p className="text-[18px] mb-[16px] font-semibold capitalize">{title}</p>
                    <p className="">{desc}</p>
                </div>
        </>
    )
}

export default FeatureItem;