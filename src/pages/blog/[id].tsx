import { client } from "../../libs/client";
import { Blog } from "../../types/blog";
import dayjs from "dayjs";
import { load } from "cheerio"; // cheerioの直接参照は非推奨だったため、loadをimport
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { HeadMeta } from "@/components/headMeta";

export default function BlogId({ blog }: { blog: Blog }) {
  const publishedAt = dayjs(blog.publishedAt).locale("ja").format("YYYY_MM_DD");
  const updatedAt = dayjs(blog.updatedAt).locale("ja").format("YYYY_MM_DD");
  return (
    <>
      <HeadMeta
        type="article"
        title={blog.title}
        description={blog.description ?? ""}
        url={`${process.env.NEXT_PUBLIC_URL}/blog/${blog.id}`}
        imageUrl={""}
      />
      <main className="flex flex-col gap-4">
        <article>
          <header>
            <h1>{blog.title}</h1>
            <div className="flex items-center justify-between my-3">
              <p className="text-gray-600 text-sm">
                published:{publishedAt} / updated:{updatedAt}
              </p>
              <p className="px-3 rounded-sm text-sm bg-slate-500 text-white inline-block">
                {blog.category.name}
              </p>
            </div>
          </header>
          <section className="py-10">
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
              }}
            />
          </section>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  const $ = load(data.content); // data.contentはmicroCMSから返されるリッチエディタ部
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  data.content = $.html();

  return {
    props: {
      blog: data,
    },
  };
};
