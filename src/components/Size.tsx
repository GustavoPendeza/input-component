import React from "react";
import styles from "../app/page.module.css";

interface Props {
    size: string;
    setSize: (value: string) => void;
    fullWidth: boolean;
    setFullWidth: (value: boolean) => void;
    multiline: boolean;
    setMultiline: (value: boolean) => void;
}

export default function Size({
    size,
    setSize,
    fullWidth,
    setFullWidth,
    multiline,
    setMultiline,
}: Props) {
    function handleWidth() {
        fullWidth ? setFullWidth(false) : setFullWidth(true);
    }

    function handleMultiline() {
        multiline ? setMultiline(false) : setMultiline(true);
    }

    return (
        <div className={styles.sizeContainer}>
            <div>
                <ul>
                    <li>
                        <button
                            className={size === "inputSm" ? styles.active : ""}
                            onClick={() => setSize("inputSm")}
                        >
                            Small
                        </button>
                    </li>
                    <li>
                        <button
                            className={size === "inputMd" ? styles.active : ""}
                            onClick={() => setSize("inputMd")}
                        >
                            Medium
                        </button>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <button
                            className={fullWidth ? styles.active : ""}
                            onClick={handleWidth}
                        >
                            Full width
                        </button>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <button
                            className={multiline ? styles.active : ""}
                            onClick={handleMultiline}
                        >
                            Multiline
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
