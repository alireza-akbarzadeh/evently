import React, { PropsWithChildren } from "react";

const AuthLayout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center min-h-dvh w-full bg-primary-50 bg-dotted-pattern  bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default AuthLayout;
