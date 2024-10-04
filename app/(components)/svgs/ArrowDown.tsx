import * as React from "react"
const ArrowDownSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={12}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                d="M5.53 8.03 5 8.562l-.53-.53-3-3L.938 4.5 2 3.438l.53.53 1.72 1.72V.75h1.5v4.938l1.72-1.72.53-.53L9.062 4.5l-.53.53-3 3H5.53ZM1.25 9.75H9.5v1.5h-9v-1.5h.75Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M.5 0h9v12h-9z" />
            </clipPath>
        </defs>
    </svg>
)
export default ArrowDownSvg