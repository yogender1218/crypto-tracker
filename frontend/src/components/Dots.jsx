export function Dots({ size = 185, radius = 2.5, ...others }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="var(--htext-color)"
      viewBox="0 0 185 185"
      width={size}
      height={size}
      {...others}
    >
      {[...Array(10)].map((_, row) =>
        [...Array(10)].map((_, col) => (
          <rect
            key={`${row}-${col}`}
            width="5"
            height="5"
            x={col * 20}
            y={row * 20}
            rx={radius}
          />
        ))
      )}
    </svg>
  );
}
