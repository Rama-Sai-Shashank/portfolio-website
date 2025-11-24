import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFastapi, SiPostgresql } from 'react-icons/si';

export const skills = {
  frontend: [
    { name: 'React', icon: <FaReact size={30} />, level: 90 },
    { name: 'JavaScript', icon: <SiJavascript size={30} />, level: 85 },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs size={30} />, level: 80 },
    { name: 'FastAPI', icon: <SiFastapi size={30} />, level: 75 },
    { name: 'Python', icon: <FaPython size={30} />, level: 90 },
  ],
  database: [
    { name: 'MongoDB', icon: <SiMongodb size={30} />, level: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql size={30} />, level: 70 },
  ],
  tools: [
    { name: 'Docker', icon: <FaDocker size={30} />, level: 65 },
  ],
};