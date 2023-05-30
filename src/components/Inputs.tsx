import React, { useState } from "react";
import "../styles/input.css";
import {
    MdCalendarMonth,
    MdInfo,
    MdLock,
    MdLogout,
    MdPhone,
    MdSearch,
} from "react-icons/md";

interface Props {
    error: boolean;
    helper: boolean;
    disable: boolean;
    fullWidth: boolean;
    icon: string;
    left: boolean;
    right: boolean;
    size: string;
    multiline: boolean;
}

export default function Inputs({
    error,
    helper,
    disable,
    fullWidth,
    icon,
    left,
    right,
    size,
    multiline,
}: Props) {
    const [hover, setHover] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);

    function setIcon() {
        if (icon === "lock") {
            return <MdLock style={styles.icon} />;
        } else if (icon === "search") {
            return <MdSearch style={styles.icon} />;
        } else if (icon === "phone") {
            return <MdPhone style={styles.icon} />;
        } else if (icon === "info") {
            return <MdInfo style={styles.icon} />;
        } else if (icon === "calendar") {
            return <MdCalendarMonth style={styles.icon} />;
        }
    }

    function handleColorBorder() {
        if (error) {
            if (focus) {
                return "#D32F2F";
            } else if (hover) {
                return "#333333";
            } else {
                return "#D32F2F";
            }
        } else {
            if (focus) {
                return "#2962FF";
            } else if (hover) {
                return "#333333";
            } else {
                return "#828282";
            }
        }
    }

    function handleColorLabel() {
        if (error) {
            return "#D32F2F";
        } else if (focus) {
            return "#2962FF";
        } else {
            return "#333333";
        }
    }

    const styles = {
        input: {
            padding: "0 0.5rem",
            background: "transparent",
            border: `1px solid ${handleColorBorder()}`,
            borderRadius: "8px",
        },
        inputDisabled: {
            background: "#f2f2f2",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "0 0.5rem",
            cursor: "not-allowed",
        },
        label: {
            color: handleColorLabel(),
        },
        icon: {
            color: "#828282",
            height: "20px",
            width: "20px",
        },
    };

    return (
        <div id="inputContainer">
            {!multiline ? (
                <div
                    style={fullWidth ? { width: "100%" } : {}}
                    className="inputContainerDiv"
                >
                    <label
                        style={styles.label}
                        className="label"
                        htmlFor="input"
                    >
                        Label
                    </label>
                    <div
                        className="inputArea"
                        style={disable ? styles.inputDisabled : styles.input}
                        onMouseEnter={() =>
                            focus ? setHover(false) : setHover(true)
                        }
                        onMouseLeave={() => setHover(false)}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    >
                        {left === true ? setIcon() : null}
                        <input
                            type="text"
                            name="name"
                            placeholder="Placeholder"
                            className={size}
                            disabled={disable ? true : false}
                        />
                        {right === true ? setIcon() : null}
                    </div>
                    {helper ? (
                        <span
                            style={
                                error
                                    ? { color: "#D32F2F" }
                                    : { color: "#828282" }
                            }
                        >
                            Some interesting helper text
                        </span>
                    ) : null}
                </div>
            ) : (
                <div
                    style={fullWidth ? { width: "100%" } : {}}
                    className="inputContainerDiv"
                >
                    <label
                        style={styles.label}
                        className="label"
                        htmlFor="input"
                    >
                        Label
                    </label>
                    <div
                        className="inputArea"
                        style={disable ? styles.inputDisabled : styles.input}
                        onMouseEnter={() =>
                            focus ? setHover(false) : setHover(true)
                        }
                        onMouseLeave={() => setHover(false)}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    >
                        {left === true ? setIcon() : null}
                        <textarea
                            name="textarea"
                            placeholder="Placeholder"
                            className={size}
                            id="textarea"
                            disabled={disable ? true : false}
                        />
                        {right === true ? setIcon() : null}
                    </div>
                    {helper ? (
                        <span
                            style={
                                error
                                    ? { color: "#D32F2F" }
                                    : { color: "#828282" }
                            }
                        >
                            Some interesting helper text
                        </span>
                    ) : null}
                </div>
            )}
        </div>
    );
}
