import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-between gap-4 p-12">
      <div className="flex-1 flex flex-col gap-8 lg:gap-4 justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">-- Orderbook --</h1>
          {/*
          <p>
            This is a sample orderbook application implemented with{" "}
            <br className="hidden lg:block" />
            NextJS, TailwindCSS, Redux and Redux-Saga 🚀
          </p>
          */}
        </div>

        <div className="lg:hidden">
          <Link href="/responsive">
            <a className="btn btn--purple px-6 py-2">Open the orderbook</a>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-2">
          <Link href="/responsive">
            <a className="btn btn--purple px-6 py-2">Open responsive layout</a>
          </Link>
          <p>
            Or the{" "}
            <Link href="/dashboard">
              <a className="text-purple-300">dashboard layout</a>
            </Link>
          </p>
        </div>

        <a
          href="/coverage/lcov-report/index.html"
          className="hidden lg:block text-center text-gray-400 text-sm"
          target="_blank"
        >
          Don&apos;t miss the test coverage page by clicking here.
        </a>
      </div>
      <p>
        ❤️{"  "}Made by nuklabs{"  "}❤️
      </p>
    </div>
  );
}
