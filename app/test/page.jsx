import Image from 'next/image'

const Page = () => {
    return (
        <div className="container mx-auto flex flex-wrap xpt">
        <div className="w-full md:w-1/2 p-4 bg-red-800 rounded-md shadow-md">
          <Image width={100}  height={100} src="/assets/images/profile-picture.png" alt="Image 1"/>
          <h3 className="text-lg font-bold">Title 1</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="w-full md:w-1/2 p-4 bg-red-800 rounded-md shadow-md">
          <Image src="/assets/images/profile-picture.png" alt="Image 2" width={100} height={100}/>
          <h3 className="text-lg font-bold">Title 2</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet...</p>
        </div>
      </div>

    )
}

export default Page