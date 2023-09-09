import { allPosts, Post } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  var sortedPosts = allPosts.sort(function(a: Post,b: Post){
    var aa = new Date(a.date)
    var bb = new Date(b.date)
    return bb.getHours() - aa.getHours();
  }).reverse();
  
  return (
    <div className="prose dark:prose-invert">
      {
      sortedPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
