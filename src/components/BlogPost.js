import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/sanity";
import { useLanguage } from "../context/LanguageContext"; // Import useLanguage to get the current language
import { Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post slug from the URL
  const { language } = useLanguage(); // Get the current language from context
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "blogPost" && slug.current == $slug] {
          title,
          fullContent,
          "imageUrl": mainImage.asset->url,
          readingTime,
          date
        }`;
        const params = { slug: id };
        const [fetchedPost] = await client.fetch(query, params);
        setPost(fetchedPost);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  const sharePost = () => {
    // Implement sharing functionality (e.g., using the Web Share API)
    if (navigator.share) {
      navigator.share({
        title: language === "en" ? post.title.en : post.title.vi, // Use the correct title based on language
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <div className="container mx-auto mt-24 px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">
        {language === "en" ? post.title.en : post.title.vi}{" "}
        {/* Render title based on language */}
      </h1>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={language === "en" ? post.title.en : post.title.vi} // Use the correct alt text based on language
          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        />
      )}
      <div className="text-gray-600 text-sm mb-4">
        {new Date(post.date).toLocaleDateString()} -{" "}
        {language === "en" ? post.readingTime.en : post.readingTime.vi}{" "}
        {/* Render reading time based on language */}
      </div>
      <div className="text-gray-600 whitespace-pre-line">
        {language === "en" ? post.fullContent.en : post.fullContent.vi}{" "}
        {/* Render full content based on language */}
      </div>
      <div className="bottom-4 left-10">
        <div className="flex justify-end">
          <button
            onClick={sharePost}
            className="inline-flex items-center gap-1 bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow"
            aria-label="Share post"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
