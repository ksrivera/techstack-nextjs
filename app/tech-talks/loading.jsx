import Image from "next/image"

const TechTalksLoading = () => {
  return (
    <div className='w-full h-screen grid content-center justify-center'>
        <Image
          src="/assets/images/loading.svg"
          height={100}
          width={100}
          alt="loading icon"
        />
    </div>
  )
}

export default TechTalksLoading