/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ALZBeiigr9E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="w-full bg-primary py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Discover the Latest Insights
            </h1>
            <p className="mt-4 text-lg text-primary-foreground md:text-xl">
              Explore our collection of thought-provoking articles and stay ahead of the curve.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-card-foreground group-hover:underline">
                      The Future of Web Development
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      Explore the latest trends and technologies shaping the future of web development. Learn how to
                      stay ahead of the curve and build cutting-edge applications.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </article>
              <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-card-foreground group-hover:underline">
                      Mastering React Hooks
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      Dive deep into the power of React Hooks and learn how to build more efficient and maintainable
                      components. Unlock the full potential of React's functional components.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </article>
              <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-card-foreground group-hover:underline">
                      Optimizing Web Performance
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      Learn proven techniques to optimize the performance of your web applications. Improve load times,
                      reduce bandwidth usage, and deliver a lightning-fast user experience.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </article>
              <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-card-foreground group-hover:underline">
                      Serverless Architecture Explained
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      Discover the benefits of serverless architecture and how it can simplify your application
                      development. Learn how to leverage cloud functions and event-driven infrastructure.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </article>
              <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-card-foreground group-hover:underline">
                      Building Accessible Web Applications
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      Explore best practices and techniques for building accessible web applications. Ensure your
                      products are inclusive and provide a great user experience for everyone.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </article>
              <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-card-foreground group-hover:underline">
                      Scaling Your React Application
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      Learn proven strategies and techniques for scaling your React applications. Optimize performance,
                      manage state, and implement best practices to handle growing user demands.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <aside className="bg-muted py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_300px]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Recent Posts</h2>
              <div className="mt-6 grid gap-6">
                <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                  <Link href="#" prefetch={false}>
                    <div className="flex gap-4">
                      <img
                        src="/placeholder.svg"
                        alt="Blog Post Image"
                        width={100}
                        height={100}
                        className="aspect-square w-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:underline">
                          The Future of Web Development
                        </h3>
                        <p className="mt-2 text-muted-foreground line-clamp-2">
                          Explore the latest trends and technologies shaping the future of web development.
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
                <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                  <Link href="#" prefetch={false}>
                    <div className="flex gap-4">
                      <img
                        src="/placeholder.svg"
                        alt="Blog Post Image"
                        width={100}
                        height={100}
                        className="aspect-square w-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:underline">
                          Mastering React Hooks
                        </h3>
                        <p className="mt-2 text-muted-foreground line-clamp-2">
                          Dive deep into the power of React Hooks and learn how to build more efficient and maintainable
                          components.
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
                <article className="group rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                  <Link href="#" prefetch={false}>
                    <div className="flex gap-4">
                      <img
                        src="/placeholder.svg"
                        alt="Blog Post Image"
                        width={100}
                        height={100}
                        className="aspect-square w-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:underline">
                          Optimizing Web Performance
                        </h3>
                        <p className="mt-2 text-muted-foreground line-clamp-2">
                          Learn proven techniques to optimize the performance of your web applications.
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Search</h2>
                <div className="mt-4">
                  <Input
                    type="search"
                    placeholder="Search blog posts..."
                    className="w-full rounded-md bg-background px-4 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Categories</h2>
                <div className="mt-4 space-y-2">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-card px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-card/80"
                    prefetch={false}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-card px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-card/80"
                    prefetch={false}
                  >
                    React
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-card px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-card/80"
                    prefetch={false}
                  >
                    Performance
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-card px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-card/80"
                    prefetch={false}
                  >
                    Accessibility
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-card px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-card/80"
                    prefetch={false}
                  >
                    Serverless
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}