import Image from "next/image";
import Navbar from "@/components/navbar"
import Main from "@/components/main"
import Ozellik from "@/components/featcure/index"

export default function Home() {
  return (
    <div className="bg-black">
      <Main />
      <Ozellik />
    </div>

  );
}
