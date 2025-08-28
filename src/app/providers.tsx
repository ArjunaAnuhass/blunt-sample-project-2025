import Next13ProgressBar from "next13-progressbar";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <>
      {children}
      <Next13ProgressBar
        height="5px"
        color="#49479f"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Providers;
