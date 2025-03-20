import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  handleClicked: () => void;
}

const ButtonBack = ({ handleClicked, children }: Props) => {
  return (
    <button
      type="button"
      onClick={handleClicked}
      className={`cursor-pointer mb-5 hover:opacity-80 hover:-translate-x-4 transition-all text-xl font-light flex gap-2 items-center text-black`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      {children}
    </button>
  );
};

export default ButtonBack;
