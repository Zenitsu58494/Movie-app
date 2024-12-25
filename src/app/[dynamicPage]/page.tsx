import { Card } from "../components/card";
import { useState } from "react";

export default function Page({ params }: any) {
  console.log(params.dynamicPage);

  return (
    <>
      <Card type={params.dynamicPage} params={params} page={1} />
    </>
  );
}
