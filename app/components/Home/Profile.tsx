import Image from "next/image";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="flex items-center gap-x-3">
      <div className="shrink-0">
        <Image
          src="/profile.png"
          alt="Avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className="grow">
        <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
          Nilesh Vidurnaga
        </h1>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          Developer/Gamer/Weeb
        </p>
      </div>
    </div>
  );
}

export default Profile;
