import React from 'react';
const jdenticon = require("jdenticon");

export default function JDenticon({value, size, className}) {
    const svgIcon = jdenticon.toSvg(value, size);
    return (
        <div className={className} dangerouslySetInnerHTML={{__html: svgIcon}} />
    )
}