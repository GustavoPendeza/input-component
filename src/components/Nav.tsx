import React from "react";
import styles from "../app/page.module.css";

interface Props {
    error: boolean;
    setError: (value: boolean) => void;
    helper: boolean;
    setHelper: (value: boolean) => void;
    disable: boolean;
    setDisable: (value: boolean) => void;
    setAction: (value: string) => void;
}

export default function Nav({
    error,
    setError,
    helper,
    setHelper,
    disable,
    setDisable,
    setAction,
}: Props) {
    function handleDisable() {
        disable ? setDisable(false) : setDisable(true);
    }

    function handleError() {
        error ? setError(false) : setError(true);
    }

    function handleHelper() {
        helper ? setHelper(false) : setHelper(true);
    }

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <button onClick={handleError}>
                        {error ? "Remove error" : "Error"}
                    </button>
                </li>
                <li>
                    <button onClick={handleDisable}>
                        {disable ? "Enable" : "Disable"}
                    </button>
                </li>
                <li>
                    <button onClick={handleHelper}>
                        {helper ? "Remove helper" : "Helper"}
                    </button>
                </li>
                <li>
                    <button onClick={() => setAction("icon")}>Icon</button>
                </li>
                <li>
                    <button onClick={() => setAction("size")}>Size</button>
                </li>
            </ul>
        </nav>
    );
}
