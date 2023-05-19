"use client";
import styles from "./ClientComponent.module.scss";
import { Context } from "./ClientContext";
import React from "react";
import { Spinner } from "./Spinner";

export const ClientComponent = function ({
    id,
    children,
    title,
}: {
    id: string;
    children: React.ReactNode;
    title: string;
}) {
    const context = React.useContext(Context);

    React.useEffect(() => {
        context?.setId(id);
    }, [context, id]);

    console.log(title);
    return (
        <div className={styles.content}>
            <div>ID: {id}</div>
            <div>{title}</div>
            {context?.isPending ? <Spinner /> : <div>{children}</div>}
        </div>
    );
};
