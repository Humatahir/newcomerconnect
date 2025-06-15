import Image from 'next/image'
import TeamImg01 from '@/public/images/your-images/avatar-01.jpg'
import TeamImg02 from '@/public/images/your-images/avatar-02.jpg'

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Meet Our Dedicated Team</h2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:grid sm:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-12">

            {/* 1st member */}
            <div className="flex flex-col items-center text-center">
              <Image className="rounded-full mb-4" src={TeamImg01} width={120} height={120} alt="Team member 01" />
              <h4 className="h4 mb-2">Jane Doe</h4>
              <p className="text-lg text-gray-600">Founder & Lead Consultant</p>
              <p className="text-md text-gray-500 mt-2">A first-generation Canadian herself, Jane founded Newcomer Connect to provide the kind of support she wishes she had. She loves hiking in the Rockies and is a passionate advocate for community building.</p>
            </div>

            {/* 2nd member */}
            <div className="flex flex-col items-center text-center mt-8 sm:mt-0">
              <Image className="rounded-full mb-4" src={TeamImg02} width={120} height={120} alt="Team member 02" />
              <h4 className="h4 mb-2">John Smith</h4>
              <p className="text-lg text-gray-600">Settlement Specialist</p>
              <p className="text-md text-gray-500 mt-2">John is an expert at navigating the practicalities of a new life in Canada. He's a master of checklists and is happiest when he's helping a family find their perfect first home. He's also a huge Blue Jays fan.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}