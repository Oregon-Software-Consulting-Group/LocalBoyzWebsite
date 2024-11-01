import Image from "next/image";
import HelloPage from "./hello/HelloPage"; // Adjust the path if needed
import NavBar from "./navbar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <HelloPage/>

    </div>
    
  );
}
