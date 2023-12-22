"use client";
import BlogSection from "@/components/blog/BlogSection";
import {
  Profile,
  Report,
  Friends,
  Projects,
  Services,
  FAQ,
} from "../components";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div className=" dark:bg-gray-900 dark:text-black text-lg">
      <Profile />
      <Projects />
      <Services />
      <BlogSection />
      <Friends />
      <FAQ />
      <Report />
    </div>
  );
}
