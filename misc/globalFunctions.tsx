import React from "react";


interface languageArray {
    id: string[],
    lightMcolor: string,
    darkMcolor: string
}

const vbaLang: languageArray[] = [
    { id: ['dim', 'string'], lightMcolor: '#5f8fa5ff', darkMcolor: '#5f8fa5ff' }
]

interface blockProps {
    text: string,
    langChoice: string
}


export default function CodeBlock(props: blockProps) {
    const parts = props.text.split(/(\s+)/)
    const lang: languageArray[] = vbaLang

    return (
        <p>
            {parts.map((part, index) => (

                lang.filter(x => x.id.includes(part)) ? (
                    <span key={index} style={{ color: lang.filter(x => x.id.includes(part))[0].lightMcolor }}>
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )
            )}
        </p>
    )
}