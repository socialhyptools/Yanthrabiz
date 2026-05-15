import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * 4-color Google Play store icon (no text — the parent button supplies the label).
 */
export function GooglePlayIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186a1.992 1.992 0 0 1-.61-1.405V3.219c0-.541.225-1.027.609-1.405z"
        fill="#00C3FF"
      />
      <path
        d="m16.27 14.479 2.91-1.605c1.063-.587 1.063-2.16 0-2.748l-2.911-1.604L13.792 12l2.478 2.479z"
        fill="#FFC107"
      />
      <path
        d="m13.792 12-9.78 9.78a1.99 1.99 0 0 0 2.345.288l11.913-6.589L13.792 12z"
        fill="#FF3D44"
      />
      <path
        d="m18.27 8.522-11.914-6.59A1.99 1.99 0 0 0 4.012 2.22L13.792 12l4.478-3.478z"
        fill="#00E676"
      />
    </svg>
  );
}

/**
 * Apple App Store icon (Apple logo). Inherits color from the parent via `fill="currentColor"`.
 */
export function AppleIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 384 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M318.7 268.7c-.2-37.7 16.4-66.1 50-87-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 138.9 4 184.6 4 277.4c0 27.2 5 55.3 14.9 84.3 13.4 38 61.5 130.3 111.7 128.8 26.2-.6 44.7-18.6 78.8-18.6 33.1 0 50.2 18.6 79.4 18.6 50.6-.7 94.1-84.6 106.9-122.7-68.5-32.4-67-94.6-67-99.1zM248.8 95.4c33.7-40 30.6-76.4 29.6-89.4-29.7 1.7-64.1 20.2-83.7 43-21.6 24.5-34.3 54.8-31.6 86.7 32.1 2.5 61.4-14 85.7-40.3z" />
    </svg>
  );
}
