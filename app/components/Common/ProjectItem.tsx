import Image from "next/image";

type Props = {
  image: string;
  title: string;
  onClick?: () => void;
};

function ProjectItem({ image, title, onClick: onCLick }: Readonly<Props>) {
  return (
    <button
      className="group block relative overflow-hidden rounded-lg"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="hs-basic-modal"
      data-hs-overlay="#hs-basic-modal"
      onClick={onCLick}
    >
      <Image
        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
        src={image}
        alt={title}
        height={320}
        width={320}
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          <svg
            className="shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-xs">{title}</span>
        </div>
      </div>
    </button>
  );
}

export default ProjectItem;
