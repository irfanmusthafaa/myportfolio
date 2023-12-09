import React from 'react';
import Image from 'next/image';

export const ListExperience = ({ data }) => {
  return (
    <>
      <div className="flex w-full  rounded-lg bg-primary-800/10 p-4">
        <div className="flex w-full flex-col justify-between gap-3 px-3 py-5 md:flex-row">
          <div className="w-[20%] items-center justify-center">
            <Image src={data.img} width={150} height={150} alt="logo" />
          </div>

          <div className="flex  w-full flex-col gap-5 ">
            <div className="flex  w-full flex-col  text-left md:flex-row  md:items-center md:justify-between ">
              <div className="flex flex-col">
                <p className="mb-2 text-2xl font-bold  ">{data.company}</p>
                <p className="text-lg tracking-normal text-primary-800 dark:text-primary-400 ">{data.tagline}</p>
                <p className="my-3">{data.year}</p>
              </div>
              <div>
                <button className="rounded-lg bg-primary-800/10 px-5 py-3 text-center text-sm dark:bg-primary-400/10 md:px-7 md:py-4">
                  {data.position}
                </button>
              </div>
            </div>
            <div className="flex w-full  flex-col gap-4 text-left">
              <p className="text-lg">The responsibilities include:</p>
              <ul className=" flex w-full flex-col gap-3 text-sm ">
                {data.tasks.map((task, index) => (
                  <li key={index} className="ml-5 w-full list-disc">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
