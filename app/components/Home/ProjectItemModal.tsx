import Image from "next/image";
import { BiChat, BiGitBranch, BiGlobe, BiX } from "react-icons/bi";
import ModalInfoItem from "../Common/ModalInfoItem";
import ProjectItemSub from "../Common/ProjectItemSub";

type Props = {
  project: {
    title: string;
    image: string;
    domain: string;
    source: string;
    description: string;
    itemsSub: {
      icon: React.ReactNode;
      title: string;
      value: string;
    }[];
  };
  onClose: () => void;
};

function ProjectItemModal({ project, onClose }: Readonly<Props>) {
  return (
    <div
      id="hs-basic-modal"
      className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-basic-modal-label"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-4xl sm:w-full m-3 h-[calc(100%-3.5rem)] sm:mx-auto">
        <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-neutral-700/70">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-800">
            <h3
              id="hs-basic-modal-label"
              className="font-bold text-gray-800 dark:text-neutral-200"
            >
              {project.title}
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              onClick={onClose}
              data-hs-overlay="#hs-basic-modal"
            >
              <span className="sr-only">Close</span>
              <BiX className="size-6" />
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <div className="sm:divide-y divide-gray-200 dark:divide-neutral-700">
              <div className="py-3 sm:py-6">
                <div className="flex flex-col sm:flex-row w-full items-stretch justify-center sm:justify-start sm:space-x-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={320}
                    width={320}
                    className="rounded-lg"
                  />
                  <div className="w-full flex flex-col items-start justify-evenly">
                    <ModalInfoItem
                      title="Domain"
                      icon={
                        <BiGlobe className="size-4 inline-block text-blue-600 dark:text-blue-500" />
                      }
                      isLink
                      value={project.domain}
                    />
                    <ModalInfoItem
                      title="Source"
                      icon={
                        <BiGitBranch className="size-4 inline-block text-blue-600 dark:text-blue-500" />
                      }
                      isLink
                      value={project.source}
                    />
                    <ModalInfoItem
                      title="Description"
                      icon={
                        <BiChat className="size-4 inline-block text-blue-600 dark:text-blue-500" />
                      }
                      value={project.description || "No description available"}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="py-3 sm:py-6">
                <h4 className="mb-2 text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                  Base
                </h4>

                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  <a
                    className="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="../docs/frameworks-vuejs.html"
                  >
                    <div className="flex gap-x-6">
                      <div className="mt-1.5 flex justify-center shrink-0 rounded-s-xl">
                        <svg
                          className="size-5 text-gray-800 dark:text-neutral-200"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
                        </svg>
                      </div>
                      <div className="grow">
                        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                          Accordion
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                          A framework for building web user interfaces.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="../docs/frameworks-vuejs.html"
                  >
                    <div className="flex gap-x-6">
                      <div className="mt-1.5 flex justify-center shrink-0 rounded-s-xl">
                        <svg
                          className="size-5 text-gray-800 dark:text-neutral-200"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.4077 1H12.9077C14.0123 1 14.9077 1.89543 14.9077 3V13C14.9077 14.1046 14.0123 15 12.9077 15H2.90771C1.80315 15 0.907715 14.1046 0.907715 13V3C0.907715 1.89543 1.80314 1 2.90771 1H5.10034C5.83943 1 6.43858 1.59915 6.43858 2.33824C6.43858 3.07732 7.03773 3.67647 7.77681 3.67647H14.4077M8.5 1H8.90771C10.0123 1 10.9077 1.89543 10.9077 3V3.5M3.90771 8H9.90771M3.90771 11.5H11.9077"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="grow">
                        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                          Tabs
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                          A framework for building web user interfaces.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="../docs/frameworks-vuejs.html"
                  >
                    <div className="flex gap-x-6">
                      <div className="mt-1.5 flex justify-center shrink-0 rounded-s-xl">
                        <svg
                          className="size-5 text-gray-800 dark:text-neutral-200"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </div>
                      <div className="grow">
                        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                          Scrollspy
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                          A framework for building web user interfaces.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="../docs/frameworks-vuejs.html"
                  >
                    <div className="flex gap-x-6">
                      <div className="mt-1.5 flex justify-center shrink-0 rounded-s-xl">
                        <svg
                          className="size-5 text-gray-800 dark:text-neutral-200"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8 6.00002V13M3 8.00002H6M10 8.00002H13M3 11H6M10 11H13M1 5.50002V13.5C1 14.6046 1.89543 15.5 3 15.5H13C14.1046 15.5 15 14.6046 15 13.5V5.50002C15 4.39545 14.1046 3.50002 13 3.50002H11.2024C10.6481 3.50002 10.1186 3.26992 9.74033 2.86465L8.73105 1.78329C8.33572 1.35971 7.66428 1.35971 7.26894 1.78329L6.25967 2.86465C5.88142 3.26992 5.35193 3.50002 4.79756 3.50002H3C1.89543 3.50002 1 4.39545 1 5.50002Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="grow">
                        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                          Mega Menu{" "}
                          <span className="ms-1 inline bg-blue-50 border border-blue-300 text-blue-600 text-[.6125rem] leading-4 uppercase rounded-full py-0.5 px-2 dark:bg-blue-900/70 dark:border-blue-700 dark:text-blue-500">
                            Hot
                          </span>
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                          A framework for building web user interfaces.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="../docs/frameworks-vuejs.html"
                  >
                    <div className="flex gap-x-6">
                      <div className="mt-1.5 flex justify-center shrink-0 rounded-s-xl">
                        <svg
                          className="size-5 text-gray-800 dark:text-neutral-200"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
                          <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </div>
                      <div className="grow">
                        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                          Dropdown
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                          A framework for building web user interfaces.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}
              <div className="py-3 sm:py-6">
                <h4 className="mb-2 text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">
                  Tools & Components
                </h4>

                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {project.itemsSub.map((projectItemSub, index) => (
                    <ProjectItemSub
                      key={index}
                      icon={projectItemSub.icon}
                      title={projectItemSub.title}
                      value={projectItemSub.value}
                    />
                  ))}
                </div>

                {/* <p className="mt-4 text-xs text-gray-500 dark:text-neutral-500">
                  Completely unstyled, fully accessible UI{" "}
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    href="../plugins.html"
                  >
                    plugins
                  </a>{" "}
                  for popular features that for one reason or another don&apos;t
                  belong in core.
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-800"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItemModal;
