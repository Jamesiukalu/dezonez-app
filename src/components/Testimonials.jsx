import logo from "../assets/images/LOGO2.png";

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-8 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img alt="Company Logo" src={logo} className="mx-auto h-36" />
        <figure className="mt-4">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              At Dezonez, our leaders are shaping a world where innovation meets
              impact, transforming home solutions into a modern
              masterpiece. Uniting families, cultures,
              and ideas across the state and our attention to detail and professionalism is
              unmatched.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="Customer"
              src="https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE="
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Uma Ndukwe</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
