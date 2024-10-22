import Content from "./Content";
import Description from "./Description";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex">
        <Content />
        <Description />
      </main>
    </div>
  );
}
