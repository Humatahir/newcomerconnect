import PostItem from './post-item'
import ExpressEntryImage from '@/public/website pictures/Emigrate.jpg'
import PnpImage from '@/public/website pictures/Ontario map.jpg'
import FamilySponsorshipImage from '@/public/website pictures/Beautiful White Sakura Blooming Garden , rainy day.jpg'

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
  return (
    <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
        {posts.map(post => (
            <PostItem key={post.id} {...post} />
        ))}
    </div>
  )
} 