import { DiJavascript } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiPostgresql } from "react-icons/si";
import { AiOutlineGoogle } from "react-icons/ai";

export const Skills = [
  {
    slug: "golang",
    Component: AiOutlineGoogle,
    title: "Golang",
    Description: () => <>I work on several web apps in golang, used it in my backend side projects.</>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for some backend development.</>,
  },
  {
    slug: "javascript",
    Component: DiJavascript,
    title: "Javascript",
    Description: () => <>I have written frontend with JS mainly reactJS.</>,
  },
  {
    slug: "postgresql",
    Component: SiPostgresql,
    title: "Postgresql",
    Description: () => <>Although I used mySQL and mariaDB in my previous work, I mainly uses Postgresql .</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
