type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function ProjectItemSub({ icon, title, value }: Readonly<Props>) {
  return (
    <div className="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
      <div className="flex gap-x-3 items-start">
        <div className="flex justify-center shrink-0 rounded-s-xl pt-[0.2rem]">
          {icon}
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-500">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-neutral-400">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItemSub;
