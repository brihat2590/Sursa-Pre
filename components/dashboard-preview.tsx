import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="w-full md:w-[1160px] max-w-full mx-auto mt-6 sm:mt-12 md:mt-10 px-2 sm:px-6 md:px-0">
      <div className="bg-primary-light/50 rounded-2xl p-2 sm:p-3 shadow-2xl sm:mb-15">
        <div className="relative w-full h-auto">
          <Image
            src="https://s3.sursatech.com/api/v1/buckets/sursakit/objects/download?preview=true&prefix=website%2Feditor%201.png"
            alt="Dashboard preview"
            width={1200}
            height={800}
            className="w-full h-auto object-contain sm:object-cover rounded-xl shadow-lg"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 90vw,
                   1160px"
            priority
          />
        </div>
      </div>
    </div>
  )
}
