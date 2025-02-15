"use client";

import { useUrNM } from "@/context/hooks/useUrNM";
import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
    const { mainRef } = useUrNM();
    return <main ref={mainRef}>{children}</main>;
}