"use client";

import Nav from "@/components/Nav";
import styles from "./page.module.css";
import { useState } from "react";
import Inputs from "@/components/Inputs";
import Size from "@/components/Size";
import Icon from "@/components/Icon";

export default function Home() {
    const [action, setAction] = useState<string>("size");
    const [disable, setDisable] = useState<boolean>(false);
    const [icon, setIcon] = useState<string>("lock");
    const [left, setLeft] = useState<boolean>(false);
    const [right, setRight] = useState<boolean>(false);
    const [size, setSize] = useState<string>("inputMd");
    const [fullWidth, setFullWidth] = useState<boolean>(false);
    const [helper, setHelper] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [multiline, setMultiline] = useState<boolean>(false);

    return (
        <>
            <header className={styles.header}>
                <h3 id={styles.title}>
                    <span id={styles.titleButton}>Input</span>{" "}
                    <span id={styles.titleComponent}>Component</span>
                </h3>

                <Nav
                    error={error}
                    setError={setError}
                    helper={helper}
                    setHelper={setHelper}
                    disable={disable}
                    setDisable={setDisable}
                    setAction={setAction}
                />
            </header>

            <main className={styles.main}>
                <Inputs
                    error={error}
                    helper={helper}
                    disable={disable}
                    fullWidth={fullWidth}
                    icon={icon}
                    left={left}
                    right={right}
                    size={size}
                    multiline={multiline}
                />

                <section className={styles.actionSection}>
                    <h2>{action}</h2>

                    {action === "size" ? (
                        <Size
                            size={size}
                            setSize={setSize}
                            fullWidth={fullWidth}
                            setFullWidth={setFullWidth}
                            multiline={multiline}
                            setMultiline={setMultiline}
                        />
                    ) : null}

                    {action === "icon" ? (
                        <Icon
                            icon={icon}
                            setIcon={setIcon}
                            left={left}
                            setLeft={setLeft}
                            right={right}
                            setRight={setRight}
                        />
                    ) : null}
                </section>
            </main>
        </>
    );
}
