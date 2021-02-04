import React from "react";

export default function FunctionImage({ image, title, alt, isShowed }) {
  return (
    <>
      {isShowed && (
        <>
          <img src={image} alt={alt} />
          <h2>{title}</h2>
        </>
      )}
    </>
  );
}
