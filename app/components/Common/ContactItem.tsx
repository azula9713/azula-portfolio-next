import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  text: string;
  url: string;
};

function ContactItem({ icon, text, url }: Readonly<Props>) {
  return (
    <li className="flex items-center gap-x-2.5">
      {icon}
      <Link
        className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-400 dark:hover:text-neutral-400"
        href={url}
        target="_blank"
      >
        {text}
      </Link>
    </li>
  );
}

export default ContactItem;
