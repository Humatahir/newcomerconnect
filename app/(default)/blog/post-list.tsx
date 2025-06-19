import PostItem from './post-item'
import ExpressEntryImage from '@/public/website pictures/Emigrate.jpg'
import PnpImage from '@/public/website pictures/Ontario map.jpg'
import FamilySponsorshipImage from '@/public/website pictures/Beautiful White Sakura Blooming Garden , rainy day.jpg'
import Link from 'next/link'
import Image from 'next/image'

const posts = [
    {
        id: 1,
        slug: 'understanding-express-entry-2024',
        title: 'Understanding the Express Entry System in 2024',
        image: ExpressEntryImage,
        excerpt: "A detailed guide to Canada's Express Entry system, including recent changes, eligibility requirements, and how to maximize your CRS score.",
    },
    {
        id: 2,
        slug: 'pnp-key-requirements',
        title: 'Key Requirements for the Provincial Nominee Program (PNP)',
        image: PnpImage,
        excerpt: "An overview of Canada's PNPs, how they work with Express Entry, and the key requirements for applying.",
    },
    {
        id: 3,
        slug: 'navigating-family-sponsorship',
        title: 'Navigating the Family Sponsorship Application Process',
        image: FamilySponsorshipImage,
        excerpt: "A guide to Canada's Family Sponsorship program, covering eligibility for sponsors and sponsored persons, and the application process.",
    }
]

export default function PostList() {
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <div>
            {/* Featured Post */}
            <h2 className="h2 mb-8">Featured Article</h2>
            <article className="mb-12 rounded-lg border border-gray-200 shadow-lg" data-aos="fade-up">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <Image className="w-full h-full object-cover rounded-l-lg" src={featuredPost.image} width={500} height={350} alt={featuredPost.title} />
                        </Link>
                    </div>
                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                        <h3 className="h3 mb-2">
                            <Link href={`/blog/${featuredPost.slug}`} className="hover:text-gray-900 transition duration-150 ease-in-out">{featuredPost.title}</Link>
                        </h3>
                        <p className="text-lg text-gray-600">{featuredPost.excerpt}</p>
                        <div className="mt-6">
                          <Link href={`/blog/${featuredPost.slug}`} className="btn text-white bg-canadian-red hover:bg-red-700 w-full sm:w-auto">Read More</Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* Other Posts */}
            <h2 className="h2 my-8">More Articles</h2>
            <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
                {otherPosts.map(post => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
        </div>
    )
} 