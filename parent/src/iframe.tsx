import React, { FC, forwardRef } from "react";

export const Iframe = forwardRef<HTMLIFrameElement, { src: null | string }>(
  ({ src }, ref) => {
    const el = src ? (
      <iframe
        style={{
          height: 400,
          width: 1200,
        }}
        ref={ref}
        frameBorder="0"
        src={src}
        id="iframe"
      />
    ) : null;

    return el;
  }
);
