"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { projects } from "@/data";
import { gameProjects } from "@/data";
import RecentProjects from "../../components//RecentProjects.tsx"
import { PinContainer } from "../../components/ui/Pin.tsx";

const Projects = () => {
  const router = useRouter();
  return (
  <div>
      <RecentProjects title="MERN Projects" data = {projects}/>
      <RecentProjects title="Game Projects" data = {gameProjects}/>
  </div>

  )
};

export default Projects;
