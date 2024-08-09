type Props = {
  titleText: string;
};

function Title({ titleText }: Readonly<Props>) {
  return (
    <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
      {titleText}
    </h2>
  );
}

export default Title;
