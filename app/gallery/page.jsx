"use client";
import dynamic from "next/dynamic";
const DomeGallery = dynamic(() => import("@/components/DomeGallery"), {
  ssr: false,
});

const gallery = () => {
  return (
    <div>
        <h1 className="heading py-4">
       My Small Glimpses from{" "}
        <span className="text-purple"> IIIT Bhagalpur</span>
      </h1>
    <div style={{ width: "100vw", height: "100vh" }} classname = "mt-1">
      <DomeGallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale
      />
    </div>
    </div>
    
  );
};

export default gallery;
