type Props = {
  skillType: string;
  skillItems: {
    name: string;
    icon?: React.ReactNode;
  }[];
};

function SkillItem({ skillType, skillItems }: Readonly<Props>) {
  return (
    <dl className="flex flex-col sm:flex-row gap-1 items-start sm:items-center">
      <dt className="min-w-40">
        <span className="block text-sm text-gray-500 dark:text-neutral-400">
          {skillType}:{" "}
        </span>
      </dt>
      <dd>
        <ul className="mr-2 my-1">
          {skillItems.map((skill, index) => (
            <li
              key={skill.name}
              className={`me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 ${
                index === skillItems.length - 1 ? "" : "after:content-[',']"
              }`}
            >
              {skill.icon}
              {skill.name}
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  );
}

export default SkillItem;
