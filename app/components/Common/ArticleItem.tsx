import Image from "next/image";

type Props = {
  title: string | null;
  link: string | null;
  description: string | null;
  date: string | null;
  cover: string | null;
};

function ArticleItem({
  title,
  link,
  description,
  date,
  cover,
}: Readonly<Props>) {
  return (
    <div>
      <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
        {new Date(date as string).toDateString()}
      </p>
      <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
        {title}
      </h5>
      <div className="flex w-full items-start justify-between space-x-4">
        <Image
          className="object-cover w-1/3 mt-2 rounded-lg"
          src={cover as string}
          alt={title as string}
          width={300}
          height={30}
        />
        <div className="w-full flex flex-col items-end justify-between h-32">
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500 ">
            {description}
          </p>
          <p className="mt-1">
            <a
              className="text-sm text-purple-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2  dark:hover:text-neutral-400"
              href={link ?? "#"}
            >
              Continue reading
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
