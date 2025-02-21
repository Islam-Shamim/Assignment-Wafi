

import Navber from "@/components/Navber";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navber></Navber>
      Hello I am Shamim.
      <HomePage/>
    </div>
  );
}
