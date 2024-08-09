import Image from "next/image";
import Title from "../Common/Title";

function Education() {
  return (
    <div className="mt-10 sm:mt-14">
      <Title titleText="Education" />
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 flex flex-col items-start justify-between">
          <Image
            src="/plymouth.png"
            alt="Plymouth"
            width={300}
            height={147}
            className="invert-[1] mb-2"
          />
          <div>
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2016 - 2019
            </h3>
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              BSc (Hons) Software Engineering
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              The University of Plymouth
            </p>
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 flex flex-col items-start justify-between">
          <Image
            src="/dssc.png"
            alt="dssc"
            width={100}
            height={147}
            className="mb-2"
          />
          <div>
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2008-2016
            </h3>
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              G.C.E. Advanced Level
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              D.S. Senanayake College, Colombo 07
            </p>
          </div>
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
}

export default Education;
