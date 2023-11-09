import Link from "next/link";
import { client } from "../libs/client";
import { Blog } from "../types/blog";
import dayjs from "dayjs";

export default function Home({ blog }: { blog: Blog[] }) {

  return (
    <div>
      <ul>
        {blog.map((blog) => {
          const publishedAt = dayjs(blog.publishedAt).format("YYYY/MM/DD");
          return (

            <li key={blog.id} className="py-4 px-2 rounded hover:bg-slate-100 hover:transition-all hover:duration-300">
              <Link href={`/blog/${blog.id}`} className="text-lg text-slate-800 flex flex-wrap">
                <p className="underline mr-5">{publishedAt}</p>
                <p>{blog.title}</p>
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
