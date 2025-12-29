import React, { useState } from "react";
import "./BlogPage.css";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "Automate CRM Tasks in Bitrix24: Recurring Invoices & AI Chat Summaries",
      excerpt:
        "Cut manual admin work in Bitrix24 CRM. Learn how to automate retainer billing and use CoPilot AI to summarize conversations and populate deal cards from chat data.",
        navigateTo:"https://www.bitrix24.in/about/blogs/automate-crm-tasks-in-bitrix24-recurring-invoices-ai-chat-summaries.php",
      image: "https://picsum.photos/seed/crm/600/400",
      date: "Dec 10, 2025",
      category: "CRM",
    },
    {
      id: 2,
      title: "Automate Data Consent in Bitrix24 Open Channels",
      excerpt:
        "Improve your customer's first interaction. Bitrix24 Open Channels offer a simple way to get consent without adding friction to the chat.",
        navigateTo:"https://www.bitrix24.in/about/blogs/automate-data-consent-in-bitrix24-open-channels.php",
      image: "https://picsum.photos/seed/team/600/400",
      date: "Dec 08, 2025",
      category: "Productivity",
    },
    {
      id: 3,
      title: "Collaboration Just Got A Makeover - Meet Bitrix24 Boards",
      excerpt:
        "Say goodbye to scattered communication and hello to a unified workspace with Bitrix24 Boards. It’s where creativity meets clarity, and teamwork moves faster than ever.",
        navigateTo:"https://www.bitrix24.in/about/blogs/collaboration-just-got-a-makeover-meet-bitrix24-boards.php",
      image: "https://picsum.photos/seed/digital/600/400",
      date: "Dec 05, 2025",
      category: "Technology",
    },
    {
      id: 4,
      title: "How Sales Pipelines Can Help Your Business Emerge Victorious",
      excerpt:
        "Digital transformation has heightened market competition, compelling businesses to cut through the clutter with distinct, appealing value propositions and tailored experiences to emerge victorious.",
        navigateTo:"https://www.bitrix24.in/about/blogs/how-sales-pipelines-can-help-your-business-emerge-victorious.php?sphrase_id=35353991",
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
              <a href={blog.navigateTo} target="_blank" className="read-more">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );

}


