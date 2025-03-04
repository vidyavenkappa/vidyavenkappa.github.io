import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Blog content data - In a real app, you would fetch this from a backend API
  const blogPosts = {
    "security-incidents": {
      title: "Predicting Security Incidents in Microsoft Systems: A Machine Learning Approach",
      date: "October 2024",
      author: "Vidya Venkappa",
      category: "security",
      image: "/assets/microsoft_incident_detection.png",
      tags: ["Machine Learning", "Security", "Microsoft"],
      content: `
        <p>In today's cybersecurity landscape, the ability to predict and prevent security incidents before they occur is invaluable. I'm excited to share my recent project focused on developing a machine learning model to predict security incidents in Microsoft systems using the Guide dataset.</p>
        
        <h2>Project Overview</h2>
        <p>The goal of this project was to build a classification model capable of analyzing patterns in Microsoft's GUIDE dataset to predict potential security incidents. This extensive dataset contains 13 million data points across 33 entity types, covering 1.6 million alerts and 1 million annotated incidents from over 6,100 organizations. By leveraging CatBoost (a gradient boosting implementation) and detailed feature engineering, I was able to create a model with significant predictive power, achieving 80% accuracy.</p>
        
        <p>You can find the complete code and documentation on <a href="https://github.com/vidyavenkappa/Microsoft-Security-Incident-Detection" target="_blank">GitHub</a>.</p>
        
        <h2>The Technical Approach</h2>
        <h3>Data Analysis and Preparation</h3>
        <p>The project began with a thorough analysis of the GUIDE dataset, which revealed several important insights:</p>
        
        <ul>
          <li>Only 35% of detected incidents are classified as True Positives, requiring immediate attention</li>
          <li>Initial Access attacks represent 70% of all security incidents, with Suspicious Activity (10.8%) and Impact (7.2%) being the next most common categories</li>
          <li>Windows systems account for 90.88% of affected systems, followed by Linux (7.55%) and macOS (1.51%)</li>
          <li>Security incidents peak at 5:00 PM and are generally more frequent during nighttime hours</li>
        </ul>
        
        <p>Key steps in the data preparation phase included:</p>
        
        <ul>
          <li>Converting categorical values into meaningful numeric representations</li>
          <li>Web scraping with Beautiful Soup to decode certain numeric values</li>
          <li>Cleaning and imputing missing data</li>
          <li>Creating temporal features to capture attack time patterns</li>
        </ul>
        
        <h3>Feature Engineering and Selection</h3>
        <p>Feature engineering proved to be crucial for improving model performance. Through correlation analysis of the dataset's features, I identified the most predictive variables for incident classification:</p>
        
        <ul>
          <li>OS Family identification (Windows, Linux, macOS, etc.)</li>
          <li>MITRE ATT&CK technique categorization (TA0001 - Initial Access being predominant)</li>
          <li>Temporal patterns of attack occurrences</li>
          <li>Host and network-based indicators</li>
        </ul>
        
        <p>I used correlation matrices to select features with strong relationships to incident grades and developed a systematic approach to feature selection:</p>
        
        <ol>
          <li>Understanding feature characteristics and relationships</li>
          <li>Cleaning and imputing missing data</li>
          <li>Selecting columns with strong correlation to incident classification</li>
        </ol>
        
        <h3>Model Development</h3>
        <p>After experimenting with several classification algorithms, CatBoost (an implementation of gradient boosting) emerged as the most effective approach for this problem. The model architecture followed a three-stage process:</p>
        
        <ol>
          <li><strong>Feature Understanding & Selection</strong>: Analyzing feature relationships and identifying the most predictive variables</li>
          <li><strong>Model Training & Fine Tuning</strong>: Optimizing the CatBoost algorithm with customized hyperparameters</li>
          <li><strong>Evaluation</strong>: Rigorous testing to ensure model reliability and performance</li>
        </ol>
        
        <p>The CatBoost model proved particularly effective for this dataset because:</p>
        
        <ul>
          <li>It handles categorical variables natively without extensive preprocessing</li>
          <li>It's robust to outliers and missing data</li>
          <li>It provides excellent performance for imbalanced classification problems like security incident detection</li>
        </ul>
        
        <h2>Results and MITRE ATT&CK Analysis</h2>
        <p>The final CatBoost model achieved an accuracy of 80%, demonstrating its ability to correctly identify potential security incidents while minimizing false positives.</p>
        
        <p>The analysis of the GUIDE dataset revealed the most common MITRE ATT&CK techniques used in security incidents:</p>
        
        <ol>
          <li><strong>T1078 - Valid Accounts</strong>: By far the most prevalent attack vector</li>
          <li><strong>T1566 - Phishing</strong>: The second most common initial access technique</li>
          <li><strong>T1110 - Brute Force</strong>: Still a significant threat despite security advancements</li>
          <li><strong>T1133 - External Remote Services</strong>: Exploiting vulnerabilities in remote access</li>
          <li><strong>T1087 - Account Discovery</strong>: Attackers mapping internal network accounts</li>
        </ol>
        
        <p>This analysis provided valuable intelligence for developing targeted mitigation strategies based on the most common attack vectors.</p>
      `
    },
    "digital-defense": {
      title: "Microsoft Digital Defense Report Analysis: Uncovering Cyber Threats with RAG and Phi-3.5",
      date: "December 2024",
      author: "Vidya Venkappa",
      category: "security",
      image: "/assets/microsoft_digital_defence.png",
      tags: ["RAG", "LLM", "Security", "Microsoft"],
      content: `
        <h2>Introduction</h2>
        <p>In today's rapidly evolving cybersecurity landscape, staying ahead of emerging threats requires not just access to good intelligence, but the ability to extract actionable insights from vast amounts of data. Microsoft's Digital Defense Reports offer a treasure trove of information on the current state of cybersecurity, but at 80-120 pages each, manually extracting and analyzing the most relevant information is time-consuming and prone to oversight.</p>
        
        <p>In my recent project completed in December 2024, I developed a Retrieval-Augmented Generation (RAG) pipeline to analyze Microsoft Digital Defense Reports from 2020-2024, providing security professionals with quick access to critical threat intelligence and mitigation strategies.</p>
        
        <h2>The Challenge of Security Intelligence Analysis</h2>
        <p>Microsoft Digital Defense Reports are comprehensive resources that offer invaluable insights into the global threat landscape. However, they present several challenges:</p>
        
        <ul>
          <li><strong>Volume</strong>: Each report spans 80-120 pages of dense information</li>
          <li><strong>Complex Structure</strong>: Multi-column layouts, tables, and graphics make automated extraction difficult</li>
          <li><strong>Temporal Changes</strong>: Tracking threat evolution across multiple yearly reports requires significant effort</li>
          <li><strong>Contextual Understanding</strong>: Relating specific threats to broader security trends demands expertise</li>
        </ul>
        
        <p>To address these challenges, I created a specialized RAG pipeline that not only extracts information from these reports but contextualizes it to provide meaningful answers to specific security queries.</p>
        
        <h2>Technical Approach: Building the RAG Pipeline</h2>
        <p>My solution leverages several cutting-edge technologies to create a powerful retrieval and generation system:</p>
        
        <h3>1. Data Ingestion and Processing</h3>
        <p>First, I needed to transform the PDF reports into usable text data:</p>
        
        <ul>
          <li>Used the <strong>unstructured</strong> Python library to extract text from PDFs, preserving the semantic structure of the content</li>
          <li>Processed approximately 3000 tokens per page across multiple reports spanning five years</li>
          <li>Maintained connections between related content despite the complex document structure</li>
        </ul>
        
        <h3>2. Creating a Searchable Knowledge Base</h3>
        <p>To make the information queryable:</p>
        
        <ul>
          <li>Segmented the text into manageable chunks using LangChain's text splitters</li>
          <li>Generated embeddings for each chunk to capture semantic meaning</li>
          <li>Stored these embeddings in <strong>ChromaDB</strong>, a high-performance vector database optimized for similarity search</li>
          <li>Created a retrieval system that combines semantic similarity with keyword matching for improved accuracy</li>
        </ul>
        
        <h3>3. Intelligent Answer Generation</h3>
        <p>The heart of the system leverages Microsoft's latest AI capabilities:</p>
        
        <ul>
          <li>Implemented <strong>Microsoft's Phi-3.5 model</strong> to generate responses based on retrieved context</li>
          <li>Engineered prompts that guide the model to identify significant threats and mitigation strategies</li>
          <li>Developed an evaluation framework to measure the accuracy and relevance of generated answers against human-reviewed baselines</li>
        </ul>
        
        <h2>Key Findings: Threat Evolution 2020-2024</h2>
        <p>The RAG pipeline revealed fascinating patterns in how cyber threats have evolved over the past five years.</p>
      `
    },
    "balancing-act": {
      title: "Balancing Act: Navigating Education & Career",
      date: "February 2025",
      author: "Vidya Venkappa",
      category: "career",
      image: "/assets/work_life.png",
      tags: ["Career", "Education", "Personal Growth"],
      content: `
        <p>Balancing advanced education at prestigious institutions while maintaining a full-time professional career is a challenge many aspire to but few successfully navigate. In this personal reflection, I share my journey through two top-tier master's programs while continuing to grow in my role as a software engineer.</p>
        
        <h2>Educational Journey Across Continents</h2>
        
        <h3>Master's at Indian Institute of Science (IISc)</h3>
        <p>My first master's program at the Indian Institute of Science (IISc), India's #1 university, was a transformative experience in Data Science and Business Analytics. While working full-time as a Software Engineer at Cisco, I managed to maintain a 3.87/4.0 GPA in this rigorous program.</p>
        
        <h3>Master's at University of Washington's Foster School of Business</h3>
        <p>Currently, I'm pursuing a Master of Science in Information Systems at the University of Washington's Foster School of Business, another top-tier institution that offers a perfect blend of technical expertise and business acumen.</p>
      `
    }
  };

  useEffect(() => {
    // Scroll to top when navigating to blog post
    window.scrollTo(0, 0);
    
    // Simulating a fetch request with a timeout
    setLoading(true);
    
    setTimeout(() => {
      if (blogPosts[id]) {
        setBlog(blogPosts[id]);
        setLoading(false);
      } else {
        setError("Blog post not found");
        setLoading(false);
      }
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="blog-post-error">
        <i className="fas fa-exclamation-circle fa-3x"></i>
        <h2>Oops! {error || "Something went wrong"}</h2>
        <p>We couldn't find the blog post you're looking for.</p>
        <Link to="/blog" className="btn">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <section className="blog-post-section">
      <div className="blog-post-header" style={{ backgroundImage: `url(${blog.image})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="blog-post-meta">
            <span className="blog-post-category">{blog.category}</span>
            <span className="blog-post-date">{blog.date}</span>
          </div>
          <h1 className="blog-post-title">{blog.title}</h1>
          <div className="blog-post-author">
            <span className="author-name">By {blog.author}</span>
          </div>
        </div>
      </div>
      
      <div className="blog-post-content-wrapper">
        <div className="container">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          
          <div className="blog-post-tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="blog-tag">{tag}</span>
            ))}
          </div>
          
          <div className="blog-post-navigation">
            <Link to="/blog" className="back-to-blog">
              <i className="fas fa-arrow-left"></i> Back to All Posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;