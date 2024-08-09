import Image from "next/image";

function Logo() {
  return (
    <div>
      <a
        className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
        href="/"
        aria-label="Nilesh Viduranga"
      >
        <Image
          src="/logo.png"
          alt="Nilesh Viduranga"
          width={80}
          height={32}
          style={{ transform: "scaleX(-1)" }}
        />
      </a>
    </div>
  );
}

export default Logo;
