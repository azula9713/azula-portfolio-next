import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  value: string;
  isLink?: boolean;
};

function ModalInfoItem({
  title,
  icon,
  value,
  isLink = false,
}: Readonly<Props>) {
  return (
    <div>
      <div className="w-full flex items-center justify-start space-x-1">
        {icon}
        <h4 className="text-base font-semibold text-gray-800 dark:text-neutral-200">
          {title}
        </h4>
      </div>
      {isLink ? (
        <a
          href={value}
          target="_blank"
          className="text-sm text-blue-500 dark:text-blue-400"
        >
          {value}
        </a>
      ) : (
        <p className=" text-sm text-gray-600 dark:text-neutral-400">{value}</p>
      )}
    </div>
  );
}

export default ModalInfoItem;
