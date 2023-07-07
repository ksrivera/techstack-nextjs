import Image from "next/image";

const Page = () => {
  return (
    <div className='max-w-screen-xl h-screen mx-auto items-center justify-center'>
        <Image
          src="/assets/images/loading.svg"
          height={100}
          width={100}
          alt="loading icon"
        />
    </div>
  )
}

export default Page;