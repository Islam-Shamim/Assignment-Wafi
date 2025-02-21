import Navber from "@/components/Navber";
import HomePage from "./home/page";
import Menu from "./menu/page";

export default function Home() {
  return (
    <div className="">
      <Navber></Navber>
      <div className="flex">
      <Menu></Menu>
      <HomePage/>
      </div>
    </div>
  );
}
