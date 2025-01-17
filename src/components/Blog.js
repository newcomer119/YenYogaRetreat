import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../lib/sanity'; // Make sure you have this configured

const Blog = () => {
  const { language } = useLanguage();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPosts, setExpandedPosts] = useState({});

  // Convert 'vn' to 'vi' to match Sanity schema
  const langKey = language === 'vn' ? 'vi' : language;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          *[_type == "blogPost"] | order(date desc) {
            title,
            date,
            excerpt,
            fullContent,
            "imageUrl": mainImage.asset->url,
            readingTime
          }
        `;
        const posts = await client.fetch(query);
        setBlogPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const togglePost = (index) => {
    setExpandedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const texts = {
    en: {
      title: "Yoga & Wellness Blog",
      description: "Explore our collection of articles about yoga, meditation, and wellness",
      readMore: "Read More",
      readLess: "Read Less",
    },
    vi: {
      title: "Blog Yoga & Sức Khỏe",
      description: "Khám phá bộ sưu tập bài viết về yoga, thiền và sức khỏe",
      readMore: "Đọc Thêm",
      readLess: "Thu Gọn",
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 mt-20">{texts[langKey].title}</h1>
        <p className="text-xl text-gray-600">{texts[langKey].description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl max-w-md mx-auto">
            {post.imageUrl && (
              <img 
                src={post.imageUrl} 
                alt={post.title[langKey]} 
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString(langKey === 'en' ? 'en-US' : 'vi-VN')}
                </span>
                <span className="text-gray-500 text-sm">{post.readingTime[langKey]}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title[langKey]}</h2>
              <div className="text-gray-600 text-sm">
                {expandedPosts[index] ? (
                  <p className="whitespace-pre-line">{post.fullContent[langKey]}</p>
                ) : (
                  <p>{post.excerpt[langKey]}</p>
                )}
              </div>
              <button 
                onClick={() => togglePost(index)}
                className="mt-3 bg-blue-600 text-black px-3 py-1.5 rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
              >
                {expandedPosts[index] ? texts[langKey].readLess : texts[langKey].readMore}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;