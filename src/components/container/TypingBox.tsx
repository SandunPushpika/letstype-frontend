import React, { useEffect, useRef, useState } from "react";

interface props{
    text: string
}

const TypingBox: React.FC<props> = ({text}) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [textLines, setTextLines] = useState<string[]>([]);

    const splitText = () => {
        
        const containerWidth = containerRef.current?.clientWidth || 0;
        const words: string[] = text.split(" ");
        let currentLine = "";
        const tempLines: string[] = [];
        
        const tempElement = document.createElement("span");
        tempElement.style.visibility = "hidden";
        tempElement.style.whiteSpace = "nowrap";
        containerRef.current?.appendChild(tempElement);
        
        words.forEach((word) => {
            const line = currentLine ? `${currentLine} ${word}` : word;
            tempElement.innerText = line;
            if (tempElement.offsetWidth > containerWidth) {
              tempLines.push(currentLine);
              currentLine = word;
            } else {
              currentLine = line;
            }
        });

        containerRef.current?.removeChild(tempElement);
        setTextLines(tempLines);
    }

    useEffect(() => {
        splitText();
    }, [text])

    return(
        <div ref={containerRef} className="font-roboto-mono text-white h-52 overflow-auto">
            {textLines.map(((value, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <label className="text-3xl" key={index}>{value}</label>
                    <input key={index} type="text" className="border border-gray-100 border-0 border-b-4 bg-black text-3xl"/>
                </div>
            )))}
        </div>
    );
}

export default TypingBox;