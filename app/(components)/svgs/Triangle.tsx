import * as React from "react"
const TriangleSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} {...props}>
        <path fill="currentColor" d="M0 0h13v12H0V0Z" />
        <path fill="currentColor" d="M4 0h9v8H5L4 0Z" />
        <path fill="currentColor" d="m1 7 1 3 7-1v3H1V7Z" />
    </svg>
)
export default TriangleSvg
