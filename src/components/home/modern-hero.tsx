"use client";

import { AudienceMarquee } from "./audience";
import { Button } from "../ui/button";

export function ModernHero() {
  return (
    <div className="relative flex flex-col items-center min-h-screen justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-slate-950 text-white">
      <svg
        className="absolute inset-0 z-10 size-full blur-[300px] opacity-20"
        width={1440}
        height={900}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        10{" "}
        <g filter="url(#a)">
          11{" "}
          <path
            d="M1279.12 651.482c-22 6.106-44 12.212-135.83 19.142-91.82 6.929-252.813 14.497-345.534 14.119s-112.296-8.932-132.029-20.074c-40.902-23.095-67.695-48.431-92.222-82.426-43.46-60.236-63.449-115.445-66.098-143.181-2.37-24.804 6.608-45.711 18.307-63.328 12.043-18.137 33.695-29.82 71.913-43.681 73.132-26.523 132.819-39.093 158.087-37.728 35.983 1.944 85.151 19.972 133.921 42.519 54.55 25.219 85.81 54.21 147.755 103.202 40.89 42.153 74.78 87.455 96.15 121.421 9.68 13.541 17 19.579 26.15 28.613"
            stroke="#8C00FF"
            strokeWidth={130}
            strokeLinecap="round"
          />
          12{" "}
        </g>
        13{" "}
        <g filter="url(#b)">
          14{" "}
          <path
            d="M984.952 466.869c-15.802 15.902-31.604 31.803-106.587 82.344-74.982 50.541-208.666 135.24-287.962 179.98-79.297 44.74-100.155 46.955-122.408 47.039-46.123.173-81.297-8.423-118.747-25.508-66.356-30.274-110.243-67.666-125.983-90.043-14.077-20.012-16.578-42.214-15.158-62.931 1.461-21.329 14.257-41.82 40.13-72.221 49.508-58.173 94.326-97.906 116.549-109.022 31.647-15.829 82.36-24.343 134.93-28.808 58.801-4.994 99.563 4.55 176.224 16.248 55.375 16.094 106.309 38.276 141.054 56.869 14.842 6.848 24.021 8.443 36.22 11.703"
            stroke="#3E0090"
            strokeWidth={130}
            strokeLinecap="round"
          />
          15{" "}
        </g>
        16{" "}
      </svg>

      <div className="absolute top-28 -z-1 left-1/4 size-72 bg-primary blur-[300px]"></div>
      <div className="flex items-center">
        <div className="flex -space-x-2 pr-3">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            alt="image"
            className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            alt="image"
            className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[2]"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
            alt="image"
            className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
          />
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="image"
            className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
          />
        </div>
        <div>
          <svg
            width="79"
            height="16"
            viewBox="0 0 79 16"
            className="fill-primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.06923 1.47645C7.21819 1.0143 7.87205 1.0143 8.02101 1.47645L9.12739 4.90897C9.19397 5.11555 9.38623 5.25558 9.60328 5.25558H13.1921C13.6755 5.25558 13.8775 5.87334 13.4875 6.15896L10.5772 8.29045C10.4034 8.41777 10.3307 8.64213 10.3968 8.84722L11.5068 12.291C11.6555 12.7523 11.1265 13.1342 10.7354 12.8477L7.84056 10.7275C7.66466 10.5987 7.42558 10.5987 7.24968 10.7275L4.3548 12.8477C3.96374 13.1342 3.43477 12.7523 3.58348 12.291L4.69347 8.84722C4.75958 8.64213 4.68686 8.41777 4.51302 8.29045L1.60274 6.15896C1.21276 5.87334 1.41479 5.25558 1.89818 5.25558H5.48696C5.70401 5.25558 5.89627 5.11555 5.96285 4.90897L7.06923 1.47645Z"
              fill="inherit"
            />
            <path
              d="M23.0536 1.47645C23.2026 1.0143 23.8564 1.0143 24.0054 1.47645L25.1118 4.90897C25.1783 5.11555 25.3706 5.25558 25.5877 5.25558H29.1764C29.6598 5.25558 29.8619 5.87334 29.4719 6.15896L26.5616 8.29045C26.3878 8.41777 26.315 8.64213 26.3811 8.84722L27.4911 12.291C27.6398 12.7523 27.1109 13.1342 26.7198 12.8477L23.8249 10.7275C23.649 10.5987 23.41 10.5987 23.2341 10.7275L20.3392 12.8477C19.9481 13.1342 19.4191 12.7523 19.5679 12.291L20.6778 8.84722C20.744 8.64213 20.6712 8.41777 20.4974 8.29045L17.5871 6.15896C17.1971 5.87334 17.3992 5.25558 17.8826 5.25558H21.4713C21.6884 5.25558 21.8806 5.11555 21.9472 4.90897L23.0536 1.47645Z"
              fill="inherit"
            />
            <path
              d="M39.0224 1.47645C39.1713 1.0143 39.8252 1.0143 39.9741 1.47645L41.0805 4.90897C41.1471 5.11555 41.3394 5.25558 41.5564 5.25558H45.1452C45.6286 5.25558 45.8306 5.87334 45.4406 6.15896L42.5303 8.29045C42.3565 8.41777 42.2838 8.64213 42.3499 8.84722L43.4599 12.291C43.6086 12.7523 43.0796 13.1342 42.6886 12.8477L39.7937 10.7275C39.6178 10.5987 39.3787 10.5987 39.2028 10.7275L36.3079 12.8477C35.9169 13.1342 35.3879 12.7523 35.5366 12.291L36.6466 8.84722C36.7127 8.64213 36.64 8.41777 36.4661 8.29045L33.5559 6.15896C33.1659 5.87334 33.3679 5.25558 33.8513 5.25558H37.4401C37.6571 5.25558 37.8494 5.11555 37.916 4.90897L39.0224 1.47645Z"
              fill="inherit"
            />
            <path
              d="M55.0067 1.47645C55.1557 1.0143 55.8096 1.0143 55.9585 1.47645L57.0649 4.90897C57.1315 5.11555 57.3237 5.25558 57.5408 5.25558H61.1296C61.613 5.25558 61.815 5.87334 61.425 6.15896L58.5147 8.29045C58.3409 8.41777 58.2682 8.64213 58.3343 8.84722L59.4443 12.291C59.593 12.7523 59.064 13.1342 58.6729 12.8477L55.7781 10.7275C55.6022 10.5987 55.3631 10.5987 55.1872 10.7275L52.2923 12.8477C51.9012 13.1342 51.3723 12.7523 51.521 12.291L52.631 8.84722C52.6971 8.64213 52.6244 8.41777 52.4505 8.29045L49.5402 6.15896C49.1503 5.87334 49.3523 5.25558 49.8357 5.25558H53.4245C53.6415 5.25558 53.8338 5.11555 53.9004 4.90897L55.0067 1.47645Z"
              fill="inherit"
            />
            <path
              d="M70.9794 1.47645C71.1283 1.0143 71.7822 1.0143 71.9312 1.47645L73.0375 4.90897C73.1041 5.11555 73.2964 5.25558 73.5134 5.25558H77.1022C77.5856 5.25558 77.7876 5.87334 77.3977 6.15896L74.4874 8.29045C74.3135 8.41777 74.2408 8.64213 74.3069 8.84722L75.4169 12.291C75.5656 12.7523 75.0367 13.1342 74.6456 12.8477L71.7507 10.7275C71.5748 10.5987 71.3357 10.5987 71.1598 10.7275L68.265 12.8477C67.8739 13.1342 67.3449 12.7523 67.4936 12.291L68.6036 8.84722C68.6697 8.64213 68.597 8.41777 68.4232 8.29045L65.5129 6.15896C65.1229 5.87334 65.3249 5.25558 65.8083 5.25558H69.3971C69.6142 5.25558 69.8064 5.11555 69.873 4.90897L70.9794 1.47645Z"
              fill="inherit"
            />
          </svg>
          <p className="text-sm text-gray-300">
            Used by <span className="font-medium text-white">100,000+</span>{" "}
            users
          </p>
        </div>
      </div>
      <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-4xl text-center">
        Meet Your Personal Virtual Assistant
      </h1>
      <p className="text-base text-center text-slate-200 max-w-2xl my-6">
        From scheduling and reminders to research and writing—your assistant is
        here to save time, reduce stress, and help you focus on what matters.
        Available anytime, anywhere.
      </p>
      <div className="flex items-center gap-4 mt-8">
        <Button className=" text-white rounded-f px-7 h-11">Get started</Button>
        <Button
          className="flex items-center gap-2 border  transition bg-transparent px-6 h-11"
          variant={"outline"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-video-icon lucide-video"
          >
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
          </svg>
          <span>Watch demo</span>
        </Button>
      </div>
      <div className="max-w-3xl">
        <AudienceMarquee />
      </div>
    </div>
  );
}
