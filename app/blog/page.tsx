import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "PCB Manufacturing Blog | Industry Guides & Technical Articles | PCB Exactly",
  description:
    "Expert articles on PCB manufacturing, sourcing from China, multilayer PCBs, surface finishes, and more. Written by engineers at a PCB source factory.",
  keywords: [
    "pcb manufacturing blog",
    "pcb industry guide",
    "china pcb factory blog",
    "pcb technical articles",
  ],
  openGraph: {
    title: "PCB Manufacturing Blog | PCB Exactly",
    description:
      "Expert articles on PCB manufacturing from a source factory with 15+ years of experience.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Blog & Resources
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              PCB Manufacturing Insights
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Expert guides and technical articles from our engineering team — helping you make
              informed decisions about PCB manufacturing and sourcing.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
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

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-slate-600 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-xs"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
