import React from "react";
const NewsItem = ({
  url,
  imageLink,
  author,
  title,
  description,
  date,
  source,
}) => {
  return (
    <>
      <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span className=" absolute top-0 right-0 bg-red-600 text-white italic font-semibold rounded-se-lg rounded-es-lg">
          {source}
        </span>
        <img
          className="rounded-t-lg w-full"
          src={
            imageLink ||
            "https://cdn.dribbble.com/users/937082/screenshots/5516643/blob_4x"
          }
          alt="..."
        />
        <div className="p-2">
          <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">
            {title}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
            {description}
          </p>
          <div className="flex place-content-between text-xs w-full">
            <p className="text-gray-700">{new Date(date).toLocaleString()}</p>
            <p className="italic text-gray-700">- {author}</p>
          </div>
          <a
            href={url}
            target="blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
export default NewsItem;
