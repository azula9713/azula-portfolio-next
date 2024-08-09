type Props = {
  icon?: React.ReactNode;
  startYear: string;
  endYear: string;
  designation: string;
  summary: string;
  tasks: string[];
  extra?: React.ReactNode;
};

function TimelineItem({
  icon,
  startYear,
  endYear,
  designation,
  summary,
  tasks,
  extra,
}: Readonly<Props>) {
  return (
    <div className="group relative flex gap-x-5">
      {/* Icon */}
      <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div className="relative z-10 size-6 flex justify-center items-center">
          {icon}
        </div>
      </div>
      {/* End Icon */}
      {/* Right Content */}
      <div className="grow pb-8 group-last:pb-0">
        <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
          {startYear} - {endYear}
        </h3>
        <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
          {designation}
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
          {summary}
        </p>
        <ul className="list-disc ms-6 mt-3 space-y-1.5">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
            >
              {task}
            </li>
          ))}
        </ul>
        {extra}
      </div>
      {/* End Right Content */}
    </div>
  );
}

export default TimelineItem;
