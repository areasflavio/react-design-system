import { SVGAttributes } from 'react';

interface LogoProps extends SVGAttributes<SVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={136}
      height={120}
      viewBox="0 0 136 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2_91)">
        <path
          d="M67.566 72.021c6.652 0 12.044-5.382 12.044-12.021 0-6.64-5.392-12.021-12.044-12.021S55.522 53.36 55.522 60c0 6.64 5.392 12.021 12.044 12.021z"
          fill="#81D8F7"
        />
        <path
          d="M67.566 84.63c35.693 0 64.628-11.028 64.628-24.63 0-13.602-28.935-24.63-64.628-24.63S2.938 46.399 2.938 60c0 13.602 28.935 24.63 64.628 24.63z"
          stroke="#81D8F7"
          strokeWidth={4}
        />
        <path
          d="M46.196 72.315c17.846 30.852 41.882 50.349 53.684 43.548 11.803-6.801 6.903-37.325-10.944-68.178C71.09 16.833 47.054-2.665 35.252 4.137c-11.803 6.801-6.903 37.325 10.944 68.178z"
          stroke="#81D8F7"
          strokeWidth={4}
        />
        <path
          d="M46.196 47.685c-17.847 30.853-22.747 61.377-10.944 68.178 11.802 6.801 35.838-12.696 53.684-43.548 17.847-30.853 22.747-61.377 10.944-68.178-11.802-6.801-35.838 12.696-53.684 43.548z"
          stroke="#81D8F7"
          strokeWidth={4}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_91">
          <path fill="#fff" d="M0 0H135.132V120H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
