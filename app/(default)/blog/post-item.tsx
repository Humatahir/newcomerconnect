import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface PostItemProps {
    slug: string
    title: string
    image: StaticImageData
    excerpt: string
}

export default function PostItem({ slug, title, image, excerpt }: PostItemProps) {
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
            <footer className="mt-4">
                <Link href={postLink} className="btn-sm text-white bg-canadian-red hover:bg-red-700">
                    Read More
                </Link>
            </footer>
        </article>
    )
} 