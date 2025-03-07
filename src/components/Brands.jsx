export default function Brands() {
  return (
    <div className="bg-white py-8 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the Best Brands in the Industry
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Dangote Cement"
            src="https://images.africanfinancials.com/ng-dangce-logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Saclux Paints"
            src="https://sacluxpaints.com/assets/images/saclux-logo1111.jpg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Delux Paints"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RDvBUBi3gFsSjwBLQewVnSNCiieBf6_gjw&s"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="BUA Cement"
            src="data:image/png;base64,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"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}