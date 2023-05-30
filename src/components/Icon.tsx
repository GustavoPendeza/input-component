import React from "react";
import styles from "../app/page.module.css";
import {
    MdSearch,
    MdLock,
    MdPhone,
    MdInfo,
    MdCalendarMonth,
} from "react-icons/md";

interface Props {
    icon: string;
    setIcon: (value: string) => void;
    left: boolean;
    setLeft: (value: boolean) => void;
    right: boolean;
    setRight: (value: boolean) => void;
}

export default function Icon({
    icon,
    setIcon,
    left,
    setLeft,
    right,
    setRight,
}: Props) {
    return (
        <div className={styles.iconContainer}>
            <div>
                <ul>
                    <li>
                        <button
                            className={left === true ? styles.active : ""}
                            onClick={() => (setLeft(true), setRight(false))}
                        >
                            Left
                        </button>
                    </li>
                    <li>
                        <button
                            className={
                                left === false && right === false
                                    ? styles.active
                                    : ""
                            }
                            onClick={() => (setLeft(false), setRight(false))}
                        >
                            None
                        </button>
                    </li>
                    <li>
                        <button
                            className={right === true ? styles.active : ""}
                            onClick={() => (setLeft(false), setRight(true))}
                        >
                            Right
                        </button>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <button
                            className={icon === "lock" ? styles.active : ""}
                            onClick={() => setIcon("lock")}
                        >
                            <MdLock className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "search" ? styles.active : ""}
                            onClick={() => setIcon("search")}
                        >
                            <MdSearch className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "phone" ? styles.active : ""}
                            onClick={() => setIcon("phone")}
                        >
                            <MdPhone className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "info" ? styles.active : ""}
                            onClick={() => setIcon("info")}
                        >
                            <MdInfo className={styles.icon} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={icon === "calendar" ? styles.active : ""}
                            onClick={() => setIcon("calendar")}
                        >
                            <MdCalendarMonth className={styles.icon} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
