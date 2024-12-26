"use client";

import { Card } from "../components/card";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  return (
    <>
      <div>
        <Header />

        <Card type={params.dynamicPage} params={params} page={1} />
        <div className="w-full h-[140px]"></div>
      </div>
    </>
  );
}
