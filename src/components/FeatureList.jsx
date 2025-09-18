import React from "react";
import FeatureItem from "./FeatureItem";

const FeatureList = ({ feature }) => {
    return (
        <>
            <div>
                {feature.map((item) => (
                    <FeatureItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </>
    )
}

export default FeatureList;