import React from "react";

const Container = ({
  children,
  props,
  className,
}: {
  children: React.ReactNode;
  props?: any;
  className?: string;
}) => {
  return (
    <section
      className={`xl:max-w-[1200px] max-w-[90%] mx-auto ${className} `}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;
