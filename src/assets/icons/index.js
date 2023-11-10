export const RightArrow = ({ width = 39, height = 39 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 39 39"
      fill="none"
    >
      <line
        x1="18.3847"
        y1="37.4767"
        x2="37.4766"
        y2="18.3848"
        stroke="white"
        stroke-width="2"
      />
      <line
        x1="37.4765"
        y1="19.7991"
        x2="18.3847"
        y2="0.707265"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  );
};

export const Quotes = ({ width = 30, height = 30 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <path
        fill="white"
        d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"
      />
    </svg>
  );
};

export const SearchIcon = ({ width = 30, height = 30 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
