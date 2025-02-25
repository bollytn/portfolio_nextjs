import Social from '@/components/Social';
import { Button } from '@/components/ui/button'
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text*/}

          <div className="text-center xl:text-left">
            <span className='text-xl'>Full-Stack</span>
            <h1 className='h1 mb-6'>
              salut, Je suis <br /> <span className='text-accent capitalize'>mahjoubi bilel</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio, sed ipsa aliquam error beatae earum tempora sequi odit corporis, laboriosam praesentium consequuntur eaque cum esse blanditiis asperiores quis exercitationem?</p>
          </div>
          {/* btn && social*/}
          <div className='flex flex-col xl:flex-row items-center gap 8'>
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2">
              <span>Télecharger CV</span>
              <FiDownload className='text-xl' />
            </Button>
            <div className='mb-8 mt-8 xl:mb-8 ml-4 mr-4'>
              <Social containerStyles='flex gap-6'
                iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
              hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
            </div>
          </div>
          {/* photo*/}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
