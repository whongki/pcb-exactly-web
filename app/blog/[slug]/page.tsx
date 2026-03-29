import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, Factory } from "lucide-react";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | PCB Exactly`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let tableRows: string[][] = [];
  let inTable = false;

  function flushTable() {
    if (tableRows.length === 0) return;
    const headers = tableRows[0];
    const body = tableRows.slice(1);
    elements.push(
      <div key={`table-${elements.length}`} className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              {headers.map((h, j) => (
                <th
                  key={j}
                  className="px-4 py-3 text-left font-semibold text-slate-700 border-b border-slate-200"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className="border-b border-slate-100 hover:bg-slate-50">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-2.5 text-slate-600">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        i++;
        inTable = true;
        continue;
      }
      if (!inTable && tableRows.length === 0) {
        inTable = true;
      }
      tableRows.push(cells);
      i++;
      continue;
    }

    if (inTable) flushTable();

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={i} className="text-lg font-semibold text-slate-800 mt-6 mb-2">
          {line.slice(5)}
        </h4>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={i} className="ml-4 mb-2 text-slate-600 leading-relaxed list-disc">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .slice(2)
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
                ),
            }}
          />
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 mb-2 text-slate-600 leading-relaxed list-disc">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .slice(2)
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
                ),
            }}
          />
        </li>
      );
    } else if (line.match(/^\d+\.\s/)) {
      elements.push(
        <li
          key={i}
          className="ml-4 mb-2 text-slate-600 leading-relaxed list-decimal"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .replace(/^\d+\.\s/, "")
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
                ),
            }}
          />
        </li>
      );
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed mb-4">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
                ),
            }}
          />
        </p>
      );
    }
    i++;
  }

  if (inTable) flushTable();

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((_, i) => i !== currentIndex).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "PCB Exactly",
      url: "https://pcbexactly.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PCB Exactly (Anhui Zhenghao Electronics Co., Ltd)",
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs">
              <Clock className="h-3 w-3" />
              {post.readTime} read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-slate-200">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-xs"
              >
                {kw}
              </span>
            ))}
          </div>

          <div className="prose-custom">{renderMarkdown(post.content)}</div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Get a Free Quote from Our Factory
                </h3>
                <p className="mt-1 text-slate-600 text-sm">
                  PCB Exactly is a source factory — no middleman, factory-direct pricing. Send us
                  your Gerber files and get a competitive quote within 24 hours.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6"
                >
                  <span className="text-xs text-blue-600 font-medium">{rp.category}</span>
                  <h3 className="mt-2 font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {rp.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{rp.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
