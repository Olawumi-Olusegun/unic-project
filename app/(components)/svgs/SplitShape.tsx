import * as React from "react"
const SplitShapeSvg = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={12}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#E4E4E4"
                d="M10.25.75 12.5 3l-2.25 2.25H9.5v-1.5H8.312L6.062 6l2.25 2.25H9.5v-1.5h.75L12.5 9l-2.25 2.25H9.5v-1.5H7.688l-.22-.22-2.78-2.78H.5v-1.5H4.688L7.47 2.47l.22-.22H9.5V.75h.75Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.5 0h12v12H.5z" />
            </clipPath>
        </defs>
    </svg>
)
export default SplitShapeSvg
