import React from "react";

interface buttonProps {
  buttonText: string;
}

function Button({ buttonText }: buttonProps) {
    
  return (
    <div className="bg-primary hover:bg-secondary text-secondary hover:text-primary py-4 px-4 rounded border-[0.5px] flex items-center justify-center font-medium transition-colors duration-300">
      {buttonText}
    </div>
  );
}

export default Button;
