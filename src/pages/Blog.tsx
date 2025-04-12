
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const allPosts = [
    {
      id: 1,
      title: "Building a Weather Station with Arduino and React",
      excerpt: "Learn how to create a real-time weather monitoring system using Arduino sensors and a React dashboard.",
      date: "April 5, 2023",
      readTime: "10 min read",
      category: "IoT",
      image: "https://via.placeholder.com/800x500",
      slug: "building-weather-station"
    },
    {
      id: 2,
      title: "Modern Frontend Development with React and TypeScript",
      excerpt: "Explore the benefits of using TypeScript with React for building robust web applications.",
      date: "March 15, 2023",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://via.placeholder.com/800x500",
      slug: "react-typescript"
    },
    {
      id: 3,
      title: "Creating Responsive UIs with Tailwind CSS",
      excerpt: "A deep dive into how Tailwind CSS can streamline your workflow and help create beautiful, responsive designs.",
      date: "February 22, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "https://via.placeholder.com/800x500",
      slug: "tailwind-css-responsive"
    },
    {
      id: 4,
      title: "Getting Started with IoT Development",
      excerpt: "An introduction to Internet of Things development for web developers, focusing on accessible platforms and tools.",
      date: "January 18, 2023",
      readTime: "12 min read",
      category: "IoT",
      image: "https://via.placeholder.com/800x500",
      slug: "iot-development-intro"
    },
    {
      id: 5,
      title: "State Management in React: Context API vs. Redux",
      excerpt: "Comparing different state management approaches in React applications and when to use each one.",
      date: "December 10, 2022",
      readTime: "9 min read",
      category: "React",
      image: "https://via.placeholder.com/800x500",
      slug: "react-state-management"
    }
  ];
  
  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const categories = [...new Set(allPosts.map(post => post.category))];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-deep mb-4">Blog</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Thoughts, ideas, and insights on web development, IoT, and technology.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex justify-center mt-6 flex-wrap gap-2">
              <button 
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  searchQuery === "" ? "bg-blue-deep text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSearchQuery("")}
              >
                All
              </button>
              {categories.map(category => (
                <button 
                  key={category}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    searchQuery === category ? "bg-teal-custom text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="space-y-10">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <span className="bg-blue-100 text-blue-deep px-3 py-1 rounded-full mr-3">
                          {post.category}
                        </span>
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-blue-deep mb-3">
                        <Link to={`/blog/${post.slug}`} className="hover:text-teal-custom transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.slug}`} className="text-teal-custom hover:text-teal-600 font-medium flex items-center">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching your search.</p>
                <button 
                  className="mt-4 text-teal-custom hover:text-teal-600 font-medium"
                  onClick={() => setSearchQuery("")}
                >
                  View all articles
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
