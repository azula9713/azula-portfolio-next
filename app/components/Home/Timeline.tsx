import Image from "next/image";

import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div>
      <TimelineItem
        designation="Senior Software Engineer at Intervest Software Technologies"
        endYear="Present"
        startYear="November 2023"
        tasks={[
          "Working on the development of the company's flagship product.",
          "Leading a team of 4 developers.",
          "Implementing new features and fixing bugs.",
          "Reviewing code and mentoring junior developers.",
          "Responsible for the performance and scalability of the product.",
        ]}
        summary="The company has high expectations and using OKRs there is a mutual understanding of expectations and performance."
        icon={
          <Image src="/intervest.png" alt="Intervest" height={60} width={60} />
        }
      />

      <TimelineItem
        designation="Senior Software Engineer at Swivel Tech"
        endYear="October 2023"
        startYear="April 2022"
        tasks={[
          "Mentored and developed junior developers and engineers to increase productivity.",
          "Coordinated with project managers to meet development timelines and plan testing.",
          "Performed estimates of work hours and tracked progress using Agile and Scrum methodology.",
          "Performed root cause analysis of problems, documented faults in the tracking system and generated daily reports.",
          "Developed a Fin Tech product and technology roadmap and strategy from concept to launch.",
        ]}
        summary="One of the best companies I have worked for. The company has a great culture and the team is very supportive.Managers are still adapting to the growth I think, but everyone has to. Great place to work."
        icon={
          <Image src="/swivel.png" alt="Intervest" height={60} width={60} />
        }
        extra={
          <div className="mt-3">
            <article className="rounded-xl bg-white dark:bg-black p-4 ring ring-indigo-50 dark:ring-indigo-900">
              <div className="flex flex-col sm:gap-4 sm:flex-row items-start space-y-2 sm:items-center">
                <Image
                  src="/hackathonswivel.jpeg"
                  alt="Intervest"
                  height={80}
                  width={200}
                />

                <div className="flex flex-col items-start">
                  <a
                    className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                    href="https://www.linkedin.com/posts/nilesh-viduranga_swivelhack23-activity-7110216645121363969-WM3j"
                    target="_blank"
                  >
                    Swivel Hack 2023
                  </a>

                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                    Swivel Tech&apos;s inaugural hackathon, #SwivelHack23,
                    highlighted the continuous learning journey in tech. Forming
                    the &quot;Thunder Buddies&quot; with four new teammates was
                    a rewarding challenge, leading to invaluable experiences and
                    bonds despite not winning.
                  </p>
                </div>
              </div>
            </article>
          </div>
        }
      />
      <TimelineItem
        designation="Software Engineer at Aiken Labs"
        startYear="March 2021"
        endYear="March 2022"
        icon={<Image src="/aiken.png" alt="Aiken" height={60} width={60} />}
        tasks={[
          "Analyzed solutions and coding fixes for software problems.",
          "Worked on multiple projects using React and Next JS.",
          "Met with stakeholders, product teams, and customers throughout the system development life cycle.",
        ]}
        summary="Although it was a startup, the company was very well organized and had a great culture. The team was very supportive and the managers were very understanding."
      />
      <TimelineItem
        designation="Software Engineer at Eutech Cybernetics"
        startYear="March 2021"
        endYear="March 2022"
        icon={
          <Image
            src="/eutech.png"
            alt="Aiken"
            height={60}
            width={60}
            className="dark:invert-[1] dark:brightness-0"
          />
        }
        tasks={[
          "Maintained software products, including programs, web pages, and databases.",
          "'Analyzed solutions and coding fixes for software problems.",
          "Redesigned the web portal to create a more visually appealing, user-friendly experience.",
        ]}
        summary="The place I learned the most about time management and how to work under pressure. Working in multiple teams depending on the project was a great experience and certainly helped me grow as a developer."
      />
      <TimelineItem
        designation="Associate Software Engineer at Eutech Cybernetics"
        startYear="March 2021"
        endYear="March 2022"
        icon={
          <Image
            src="/eutech.png"
            alt="Aiken"
            height={60}
            width={60}
            className="dark:invert-[1] dark:brightness-0"
          />
        }
        tasks={[
          "Worked closely with development team members to identify and remove software bugs.",
          "Implemented and updated application modules under the direction of Senior Software Developers.",
          "Utilized crucial design software skills to assist with projects.",
        ]}
        summary="I am forever grateful for the opportunity Eutech gave me. It was my first job and I learned a lot about the industry and how to work in a professional environment."
      />
      <TimelineItem
        designation="Software Engineer Intern at Ceylon Electricity Board"
        endYear="April 2019"
        startYear="October 2019"
        icon={<Image src="/ceb.png" alt="CEB" height={60} width={60} />}
        tasks={[
          "Worked closely with development team members to identify and remove software bugs.",
          "Implemented and updated application modules under the direction of Senior Software Developers.",
          "Utilized crucial design software skills to assist with projects.",
        ]}
        summary="Enjoyed my time as an intern. It was a great learning experience and I got to work on some really cool projects."
      />
    </div>
  );
}

export default Timeline;
