"use client";

import { useState } from "react";
import Image from "next/image";

export default function OptimizedImage({
  src,
  alt = "",
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  blurDataURL,
  className = "",
  style = {},
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // If using fill layout, wrapper must have styling.
  const wrapperStyle = fill
    ? { position: "relative", width: "100%", height: "100%", overflow: "hidden", ...style }
    : { position: "relative", overflow: "hidden", ...style };

  return (
    <div style={wrapperStyle}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoaded(true)}
        className={className}
        style={{
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? "none" : "blur(10px)",
        }}
        {...rest}
      />
    </div>
  );
}
