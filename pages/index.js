import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={"CenAccess | Centralized Access"} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => {
            const postSlug = post.filePath.replace(/\.mdx?$/, '');

            return (
              <li
                key={post.filePath}
                className="group relative md:first:rounded-t-lg md:last:rounded-b-lg bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 text-gray-700 my-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-md flex flex-col" // Updated container to flex column
              >
                <div className="post-content-wrapper flex-1 p-6 rounded-lg transition duration-300 ease-in-out hover:bg-opacity-90 cursor-pointer"> {/* New div for post content */}
                  {/* Post content */}
                  <Link href={`/posts/${postSlug}`}>
                    <div>
                    <p className="uppercase mb-3 font-semibold opacity-90" style={{ color: '#34C759'}}>{post.data.date}</p>
                      <h2 className="text-2xl md:text-3xl font-semibold">{post.data.title}</h2>
                      <p className="mt-3 mb-3">{post.data.description}</p>
                    </div>
                  </Link>
                </div>

                {/* Buttons container */}
                <div className="flex justify-end space-x-4 pb-6 pr-6"> {/* Updated positioning for buttons */}
                  {/* Documentation button */}
                  <Link href={`/posts/${postSlug}`}>
                    <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out cursor-pointer" style={{ opacity: '0.9' }}>
                      How to use
                    </div>
                  </Link>

                  {/* 'Access App' button */}
                  <a
                    href={post.data.appLink || "#"} // Use appLink from post data or fallback to "#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out cursor-pointer" style={{ opacity: '0.9', backdropFilter: 'blur(10px)' }}
                  >
                    Access App
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
