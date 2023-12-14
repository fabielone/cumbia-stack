import React from 'react';

interface BlogPost  {
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage: string;
  readMoreLink: string;
  category: string;
  categoryIcon: React.ReactNode; // SVG or any React component
};

const BlogArticle: React.FC<BlogPost> = ({
  title,
  description,
  date,
  author,
  authorImage,
  readMoreLink,
  category,
  categoryIcon,
}) => {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          {categoryIcon}
          {category}
        </span>
        <span className="text-sm">{date}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="/">{title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img className="w-7 h-7 rounded-full" src={authorImage} alt={`${author} avatar`} />
          <span className="font-medium dark:text-white">
            {author}
          </span>
        </div>
        <a href={readMoreLink} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Read more
          {/* SVG Icon for the arrow */}
        </a>
      </div>
    </article>
  );
};

const BlogSection: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div> 
        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((post, index) => (
            <BlogArticle key={index} {...post} />
          ))}
        </div>  
      </div>
    </section>
  );
};

export default BlogSection;

// sample usage
// import React from 'react';
// import BlogSection from './BlogSection';
// import { ReactComponent as TutorialIcon } from './icons/tutorial.svg'; // Example icon import

// const MyBlogPage = () => {
//   const blogPosts = [
//     {
//       title: "How to quickly deploy a static website",
//       description: "Static websites are now used to bootstrap lots of websites...",
//       date: "14 days ago",
//       author: "Jese Leos",
//       authorImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
//       readMoreLink: "#",
//       category: "Tutorial",
//       categoryIcon: <TutorialIcon />,
//     },
//     // ... other posts
//   ];

//   return <BlogSection posts={blogPosts} />;
// };

// export default MyBlogPage;



