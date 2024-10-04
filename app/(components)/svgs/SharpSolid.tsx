import * as React from "react"
const SharpSolidSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={12}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)" filter="url(#b)">
            <g filter="url(#c)">
                <path
                    fill="currentColor"
                    d="M11.25 10.5H6V5.25h1.5v-1.5h-3V12h8.25V9h-1.5v1.5Zm5.25-2.25V0H8.25v8.25h8.25Z"
                />
            </g>
        </g>
        <defs>
            <filter
                id="b"
                width={20}
                height={20}
                x={0.5}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_110" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_110"
                    result="shape"
                />
            </filter>
            <filter
                id="c"
                width={20}
                height={20}
                x={0.5}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_110" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_110"
                    result="shape"
                />
            </filter>
            <clipPath id="a">
                <path fill="currentColor" d="M4.5 0h12v12h-12z" />
            </clipPath>
        </defs>
    </svg>
)
export default SharpSolidSvg
