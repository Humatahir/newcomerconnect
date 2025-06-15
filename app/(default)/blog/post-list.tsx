import PostItem from './post-item'

const posts = [
    {
        id: 1,
        slug: 'understanding-express-entry-2024',
        title: 'Understanding the Express Entry System in 2024',
        image: '/images/your-images/blog-01.jpg',
        date: '2024-07-25',
        excerpt: 'A deep dive into the Comprehensive Ranking System (CRS), recent category-based selection draws, and tips for optimizing your profile.',
        author: 'Jane Doe',
        authorImg: '/images/your-images/avatar-01.jpg',
    },
    {
        id: 2,
        slug: 'pnp-key-requirements',
        title: 'Key Requirements for the Provincial Nominee Program (PNP)',
        image: '/images/your-images/blog-02.jpg',
        date: '2024-07-24',
        excerpt: 'An overview of how PNPs work, the general eligibility criteria, and a look at popular streams in Ontario, British Columbia, and Alberta.',
        author: 'John Smith',
        authorImg: '/images/your-images/avatar-02.jpg',
    },
    {
        id: 3,
        slug: 'navigating-family-sponsorship',
        title: 'Navigating the Family Sponsorship Application Process',
        image: '/images/your-images/blog-03.jpg',
        date: '2024-07-23',
        excerpt: 'A step-by-step guide to sponsoring a spouse, partner, or child, including financial requirements and processing times.',
        author: 'Jane Doe',
        authorImg: '/images/your-images/avatar-01.jpg',
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