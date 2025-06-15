import PostList from './post-list'

export const metadata = {
  title: 'Blog - Newcomer Connect',
  description: 'Stay up-to-date with the latest news and insights on Canadian immigration.',
}

// export const revalidate = 86400

export default function Blog() {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1" data-aos="fade-up">Our Blog</h1>
              <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">Insights and updates on Canadian immigration.</p>
            </div>

            {/* Main content */}
            <div className="md:flex md:justify-between">

              {/* Articles container */}
              <div className="md:grow">
                <PostList />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
} 