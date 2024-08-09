import {
  SiAdobephotoshop,
  SiConfluence,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiJira,
  SiMongodb,
  SiNodedotjs,
  SiNotion,
  SiObsidian,
  SiReact,
  SiRecoil,
  SiRedux,
  SiSourcetree,
  SiStyledcomponents,
  SiSvelte,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

import SkillItem from "../Common/SkillItem";
import Title from "../Common/Title";

function Skills() {
  return (
    <div className="my-10 sm:my-14">
      <Title titleText="Skills" />
      {/* List */}
      <div className="flex flex-col items-start justify-center space-y-4">
        <SkillItem
          skillType="Dev Tools"
          skillItems={[
            {
              name: "Figma",
              icon: <SiFigma className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Photoshop",
              icon: <SiAdobephotoshop className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Visual Studio Code",
              icon: <SiVisualstudiocode className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Notion",
              icon: <SiNotion className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Obsidian",
              icon: <SiObsidian className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Git",
              icon: <SiGit className="shrink-0 size-5 me-1" />,
            },
            {
              name: "SourceTree",
              icon: <SiSourcetree className="shrink-0 size-5 me-1" />,
            },
          ]}
        />
        <SkillItem
          skillType="Development"
          skillItems={[
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss className="shrink-0 size-5 me-1" />,
            },
            {
              name: "React",
              icon: <SiReact className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Svelte",
              icon: <SiSvelte className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Redux",
              icon: <SiRedux className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Recoil",
              icon: <SiRecoil className="shrink-0 size-5 me-1" />,
            },
            {
              name: "MongoDB",
              icon: <SiMongodb className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Node.js",
              icon: <SiNodedotjs className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Express",
              icon: <SiExpress className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Styled Components",
              icon: <SiStyledcomponents className="shrink-0 size-5 me-1" />,
            },
          ]}
        />
        <SkillItem
          skillType="CI/CD"
          skillItems={[
            {
              name: "GitHub Actions",
              icon: <SiGithubactions className="shrink-0 size-5 me-1" />,
            },
            {
              name: "Vercel",
              icon: <SiVercel className="shrink-0 size-5 me-1" />,
            },
          ]}
        />
        <SkillItem
          skillType="Project Management"
          skillItems={[
            { name: "Jira", icon: <SiJira className="shrink-0 size-5 me-1" /> },
            {
              name: "Confluence",
              icon: <SiConfluence className="shrink-0 size-5 me-1" />,
            },
          ]}
        />
        <SkillItem
          skillType="Soft Skills"
          skillItems={[
            { name: "Strong communication" },
            { name: "Problem-solving" },
            { name: "Attention to detail" },
            { name: "Time management" },
            { name: "Teamwork" },
            { name: "Adaptability" },
          ]}
        />
      </div>
    </div>
  );
}

export default Skills;
