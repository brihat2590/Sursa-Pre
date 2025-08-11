import Image from "next/image" // Import the Image component

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px] mt-10">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl sm:mb-15 ">
        <img
          src="https://s3.sursatech.com/api/v1/buckets/sursakit/objects/download?preview=true&prefix=website%2F476345147-3448b77b-8c4f-48c9-90e5-2dd0e2477f5d.png"
          alt="Dashboard preview"
          width={1200}
          height={800}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
