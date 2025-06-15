import Link from 'next/link'
import Image from 'next/image'

interface PostItemProps {
    id: number
    slug: string
    title: string
    image: string
    date: string
    excerpt: string
    author: string
    authorImg: string
}

export default function PostItem({ slug, title, image, date, excerpt, author, authorImg }: PostItemProps) {
    const postLink = `/blog/${slug}`

    return (
        <article className="flex flex-col h-full" data-aos="fade-up">
            <header>
                <Link href={postLink} className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                        <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={image} width={352} height={198} alt={title} />
                    </figure>
                </Link>
                <h3 className="h4 mb-2">
                    <Link href={postLink} className="hover:text-gray-900 transition duration-150 ease-in-out">{title}</Link>
                </h3>
            </header>
            <p className="text-lg text-gray-600 grow">{excerpt}</p>
            <footer className="flex items-center mt-4">
                <Link href="#">
                    <Image className="rounded-full shrink-0 mr-4" src={authorImg} width={40} height={40} alt={author} />
                </Link>
                <div>
                    <Link href="#" className="font-medium text-gray-900 hover:text-blue-600 transition duration-150 ease-in-out">{author}</Link>
                    <span className="text-gray-500"> - </span>
                    <span className="text-gray-500">{date}</span>
                </div>
            </footer>
        </article>
    )
} 