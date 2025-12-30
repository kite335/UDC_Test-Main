import React, { useState } from "react";
import "./BlogPage.css";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "How CRM Automation Improves Business Productivity",
      excerpt:
        "Discover how CRM automation helps businesses streamline operations, improve communication, and increase sales efficiency.",
      image: "https://picsum.photos/seed/crm/600/400",
      date: "Dec 10, 2025",
      category: "CRM",
    },
    {
      id: 2,
      title: "Top Collaboration Tools for Remote Teams",
      excerpt:
        "Remote work is here to stay. Learn about the best collaboration tools that keep your team connected and productive.",
      image: "https://picsum.photos/seed/team/600/400",
      date: "Dec 08, 2025",
      category: "Productivity",
    },
    {
      id: 3,
      title: "Why Digital Transformation Is No Longer Optional",
      excerpt:
        "Digital transformation helps organizations stay competitive, agile, and customer-focused in a fast-changing world.",
      image: "https://picsum.photos/seed/digital/600/400",
      date: "Dec 05, 2025",
      category: "Technology",
    },
    {
      id: 4,
      title: "Sales Pipeline Management: Best Practices",
      excerpt:
        "An optimized sales pipeline ensures consistent growth and better forecasting. Learn proven best practices.",
      image: "https://picsum.photos/seed/sales/600/400",
      date: "Dec 01, 2025",
      category: "CRM",
    },
  ];

  const categories = ["All", "CRM", "Productivity", "Technology"];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Insights & Resources</h1>
        <p>
          Expert articles, product updates, and business tips by
          <strong> Unique Design Consultant</strong>
        </p>
      </section>

      {/* Category Filter */}
      <div className="blog-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <section className="blog-grid">
        {filteredBlogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <a href="#" className="read-more">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );

}


