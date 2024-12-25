import { Card } from "./components/card";
import Header from "./components/header";
import Poster from "./components/poster";

export default async function Home() {
  return (
    <div>
      <Header />
      <Poster />
      <Card type="upcoming" page="1" />
      <p>Top Rated</p>
      <Card type="popular" page="1" />
      <p>Popular</p>
      <Card type="top_rated" page="1" />

      <div className="w-[200px] h-[400px]"></div>
    </div>
  );
}
