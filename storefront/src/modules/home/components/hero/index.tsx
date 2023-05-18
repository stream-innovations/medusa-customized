import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
        A Headless e-Commerce Platform Powered by MedusaJS
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
        StreamCOMMERCE is an e-commerce platform that embraces the concept of headless architecture, separating the front-end presentation layer from the back-end business logic&apos;It leverages MedusaJS, an open-source JavaScript framework specifically designed for building scalable and customizable e-commerce applications.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @streamprotocol"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
