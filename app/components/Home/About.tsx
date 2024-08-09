import { SiLinkedin, SiMailgun, SiX } from "react-icons/si";

import ContactItem from "../Common/ContactItem";

function About() {
  const contactItems = [
    {
      id: "email",
      text: "nilesh@yaepublishinghouse.online",
      icon: <SiMailgun className="shrink-0 size-3.5" />,
      url: "mailto:nilesh@yaepublishinghouse.online",
    },
    {
      id: "x",
      text: "@azula9713",
      icon: <SiX className="shrink-0 size-3.5" />,
      url: "https://x.com/azula9713",
    },
    {
      id: "linkedin",
      text: "Nilesh Viduranga",
      icon: <SiLinkedin className="shrink-0 size-3.5" />,
      url: "https://www.linkedin.com/in/nilesh-viduranga",
    },
  ];

  return (
    <div className="mt-8">
      <p className="text-sm text-gray-600 dark:text-neutral-300">
        I am a Full Stack Software Developer with 5 years of experience
        specializing in MERN stack development. My expertise lies in building
        robust and scalable applications, and I take great pleasure in tackling
        complex projects with innovative solutions. I am committed to continuous
        learning, staying updated with the latest industry trends and
        technologies, and I thrive on new challenges that enhance my skills.
        Collaboration and teamwork are integral to my approach, and I enjoy
        working with diverse teams to achieve common goals.
      </p>
      <p className="mt-3 text-sm text-gray-600 dark:text-neutral-300">
        Outside of my professional life, I am an enthusiast of anime, Genshin
        Impact, and Dota, with a particular fascination for Japanese culture and
        gaming. These interests help me maintain a healthy work-life balance and
        keep me motivated. I believe that having hobbies and interests outside
        of work is crucial for personal well-being and professional growth.
      </p>
      <ul className="mt-5 flex flex-col gap-y-3">
        {contactItems.map((item) => (
          <ContactItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default About;
