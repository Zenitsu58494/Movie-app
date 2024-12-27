import { Card } from "./components/card";
import Header from "./components/header";
import Poster from "./components/poster";
import Section from "./components/section";

export default async function Home() {
  return (
    <div>
      <Header />
      <Poster />
      <Section type="upcoming" />
      <Section type="popular" />
      <Section type="top_rated" />
    </div>
  );
}
