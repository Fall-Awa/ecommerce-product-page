import Content from "./Content";
import Description from "./Description";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex lg:flex-row flex-col sm:p-5 sm:gap-6  ">
        <Content />
        <Description />
      </main>
    </div>
  );
}
