import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const LoginTemplate = (props) => {
  const { Component, path } = props;

  const [obWindow, setObwindow] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    window.onresize = () => {
      let newWidth = window.innerWidth;
      let newHeight = window.innerHeight;
      setObwindow({
        innerWidth: newWidth,
        innerHeight: newHeight,
      });
    };
  }, []);

  //   lấy chiều dài và chiều rộng của browser window
  const { innerWidth, innerHeight } = obWindow;

  return (
    <Route
      path={path}
      exact
      render={(propsRoute) => {
        return (
          <>
            <div className="d-flex">
              <div style={{ width: innerWidth / 2, height: innerHeight }}>
                <img
                  src="https://picsum.photos/2000"
                  alt="123"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div style={{ width: innerWidth / 2, height: innerHeight }}>
                <Component {...propsRoute} />
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
