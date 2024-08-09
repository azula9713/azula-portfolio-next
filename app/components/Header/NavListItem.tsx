type Props = {
  itemName: string;
  id: string;
  isCurrent: boolean;
  onNavClick: (itemName: string) => void;
};

function NavListItem({ itemName, isCurrent, onNavClick, id }: Readonly<Props>) {
  return (
    <button
      className={`
            py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 font-medium focus:outline-none dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200 dark:focus:text-neutral-200 dark:active:text-neutral-200 dark:visited:text-neutral-200 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200 dark:group-active
        ${
          isCurrent
            ? "border-gray-800 text-gray-800 md:border-b-2"
            : "border-transparent text-gray-500 hover:text-gray-800"
        }
              `}
      onClick={() => onNavClick(id)}
      aria-current="page"
    >
      {itemName}
    </button>
  );
}

export default NavListItem;
