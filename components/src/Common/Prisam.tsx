import React, { useEffect, useRef } from "react";
import Prism from "prismjs";

const PrismCode = (props:any) => {
    const ref = useRef<any>();

    useEffect(() => {
        highlight();
    }, []);

    const highlight = () => {
        if (ref && ref.current) {
            Prism.highlightElement(ref.current);
        }
    };

    const { code } = props;
    return (
        <React.Fragment>
            <pre className="line-numbers">
                <code ref={ref} className="line-numbers language-markup">
                    {code.trim()}
                </code>
            </pre>
        </React.Fragment>
    );
};

export default PrismCode;