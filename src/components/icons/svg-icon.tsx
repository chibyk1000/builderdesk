import React from "react";

export interface SVGIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Base SVG Icon Component
 * Provides consistent sizing and styling for all icons
 */
export const SVGIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  (
    { size = 24, className = "", ariaLabel, viewBox = "0 0 24 24", ...props },
    ref,
  ) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={viewBox}
      className={`inline-block ${className}`}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : "presentation"}
      {...props}
    />
  ),
);

SVGIcon.displayName = "SVGIcon";
