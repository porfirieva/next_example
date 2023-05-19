"use client";
import React from "react";
import { ClientComponent } from "@/components/ClientComponent";
import { fetchData } from "@/lib/fetchData";

export default function Page({ params }) {
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        fetchData(params?.id).then((res) => setData(res));
    }, [params]);

    return <ClientComponent id={params?.id} title={data.title}></ClientComponent>;
}
