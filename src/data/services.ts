import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    slug: 'website-designing',
    title: 'Website Designing',
    shortDesc: 'Modern, responsive and attractive website designs.',
    fullDesc: 'Create modern, attractive and responsive website designs that provide excellent user experiences across all devices. We transform brands with intuitive UI/UX, conversion-focused wireframes, and pixel-perfect layouts.',
    iconName: 'Monitor',
    gradient: 'from-blue-600 to-indigo-600',
    bgBadge: 'bg-blue-50 text-blue-600',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Mobile-First Responsive Layouts', description: 'Flawless display across smartphones, tablets, laptops, and ultra-wide 4K monitors.' },
      { title: 'Enhanced User Engagement', description: 'Thoughtfully structured information hierarchy that turns casual visitors into paying customers.' },
      { title: 'High Visual Brand Appeal', description: 'Custom visual identity, modern typography, and aesthetic color palettes tuned to your target demographic.' },
      { title: 'Speed & Accessibility Compliance', description: 'Lightweight assets, optimized SVG graphics, and WCAG accessibility standards.' }
    ],
    features: [
      'Interactive Figma & Adobe XD Prototypes',
      'Custom UI/UX Wireframing & Journey Mapping',
      'Cross-Browser & Multi-Device Compatibility',
      'Conversion-Optimized Landing Page Design',
      'Micro-Animations & Smooth Scroll Interactivity',
      'Design System & Component Library Creation'
    ],
    process: [
      { step: '01', title: 'Discovery & Brief', desc: 'Understanding your business model, customer psychology, and aesthetic vision.' },
      { step: '02', title: 'Wireframes & UX', desc: 'Creating blueprints to map navigation paths and frictionless conversion funnels.' },
      { step: '03', title: 'Visual UI Design', desc: 'Designing high-fidelity screens with modern typography, gradients, and brand assets.' },
      { step: '04', title: 'Client Review & Handoff', desc: 'Refining through feedback cycles before providing production-ready design tokens.' }
    ],
    faqs: [
      { question: 'Do you create custom designs or use standard templates?', answer: 'Every design we craft at BlueMoon is 100% bespoke, tailored specifically to your brand identity, business targets, and target audience.' },
      { question: 'Will my website look good on iPhones and Android phones?', answer: 'Yes! We follow a strict mobile-first design protocol ensuring an app-like smooth experience across all screen sizes.' },
      { question: 'How many revisions do you allow during design phase?', answer: 'We include multiple iterative review stages until you are 100% confident with the look and feel before code development begins.' }
    ],
    technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Tailwind CSS', 'Framer', 'HTML5/CSS3'],
    deliverables: ['Full Desktop & Mobile Figma Files', 'Style Guide & Typography Rules', 'Interactive Prototype', 'Ready-to-code Asset Export'],
    stats: [
      { label: 'Avg. Conversion Lift', value: '+45%' },
      { label: 'Mobile Score', value: '99/100' },
      { label: 'Client Satisfaction', value: '100%' }
    ]
  },
  {
    id: '2',
    slug: 'website-development',
    title: 'Website Development',
    shortDesc: 'Build powerful & scalable websites.',
    fullDesc: 'Develop dynamic, professional and customized business websites, corporate websites, e-commerce platforms and web applications with robust backends and lightning-fast frontend frameworks.',
    iconName: 'Code2',
    gradient: 'from-blue-700 to-purple-600',
    bgBadge: 'bg-indigo-50 text-indigo-600',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Blazing Fast Performance', description: 'Near-instant page loads using modern frameworks like React, Next.js, and Vite.' },
      { title: 'Enterprise Security Standards', description: 'Rigorous data encryption, CSRF protection, sanitized API endpoints, and SSL compliance.' },
      { title: 'Scalable Architecture', description: 'Clean modular codebases designed to handle tens of thousands of concurrent users with zero slowdown.' },
      { title: 'Seamless Third-Party Integrations', description: 'Effortless connection with payment gateways, CRMs, WhatsApp APIs, and analytics.' }
    ],
    features: [
      'Full-Stack Custom Web Application Development',
      'Headless CMS & Dynamic Content Management',
      'E-Commerce Portals with Secure Checkout',
      'REST & GraphQL API Engineering',
      'Database Modeling & Cloud Deployment',
      'Automated CI/CD Deployment Pipelines'
    ],
    process: [
      { step: '01', title: 'Architecture Planning', desc: 'Tech stack selection, database schema design, and server infrastructure planning.' },
      { step: '02', title: 'Agile Frontend & Backend', desc: 'Sprints building responsive views and high-performance server logic.' },
      { step: '03', title: 'QA & Stress Testing', desc: 'Cross-browser testing, security audits, and load verification.' },
      { step: '04', title: 'Live Deployment & Support', desc: 'Zero-downtime DNS routing, SSL activation, and ongoing maintenance.' }
    ],
    faqs: [
      { question: 'What technologies do you use for web development?', answer: 'We specialize in React, Next.js, Node.js, TypeScript, Python, PHP/Laravel, PostgreSQL, MongoDB, and Tailwind CSS.' },
      { question: 'Will I be able to edit content on my website easily?', answer: 'Yes, we implement intuitive Content Management Systems (CMS) or custom administrative dashboards so your team can edit text and images without coding.' },
      { question: 'Do you provide maintenance and updates after launch?', answer: 'Yes! We offer ongoing technical maintenance, security patches, regular backups, and feature upgrades.' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: ['Production-ready Source Code', 'Admin Dashboard Access', 'Technical Documentation', '1 Year Free Maintenance Option'],
    stats: [
      { label: 'Uptime Reliability', value: '99.9%' },
      { label: 'Lighthouse Score', value: '95+' },
      { label: 'Projects Built', value: '180+' }
    ]
  },
  {
    id: '3',
    slug: 'seo-services',
    title: 'SEO Services',
    shortDesc: 'Improve rankings & increase visibility.',
    fullDesc: 'Improve Google visibility and organic search rankings through keyword research, on-page SEO, technical SEO and local SEO. We ensure your business ranks at the top for high-intent client queries.',
    iconName: 'Search',
    gradient: 'from-blue-600 to-cyan-600',
    bgBadge: 'bg-cyan-50 text-cyan-600',
    heroImage: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Top Google SERP Rankings', description: 'Consistent organic presence on page 1 for keywords your customers actively search.' },
      { title: 'High-Intent Organic Traffic', description: 'Attract qualified visitors ready to enquire and purchase rather than random clicks.' },
      { title: 'Sustainable Long-Term Growth', description: 'Unlike paid ads that stop when budget runs out, SEO builds compounding organic momentum.' },
      { title: 'Local Search Dominance', description: 'Capture nearby clients searching for immediate services in your city or region.' }
    ],
    features: [
      'Comprehensive Keyword Research & Competitor Gap Analysis',
      'On-Page Optimization (Titles, Meta, H1-H6, Schema Markup)',
      'Technical SEO (Site Speed, Core Web Vitals, Crawl Errors, XML Sitemap)',
      'High-Authority White-Hat Backlink Acquisition',
      'Local Citation Building & Google Maps Optimization',
      'Monthly Transparent Ranking & Traffic Reports'
    ],
    process: [
      { step: '01', title: 'SEO Audit', desc: 'In-depth health check uncovering technical bugs, backlink profiles, and keyword gaps.' },
      { step: '02', title: 'Strategy & Keywords', desc: 'Mapping high-value search terms to landing pages with commercial search intent.' },
      { step: '03', title: 'On-Page & Technical Fixes', desc: 'Optimizing meta tags, page speed, structured schema, and content depth.' },
      { step: '04', title: 'Authority & Monitoring', desc: 'Building authoritative references and tracking weekly ranking increments.' }
    ],
    faqs: [
      { question: 'How long does it take to see results from SEO?', answer: 'Typical SEO campaigns show measurable keyword improvements in 60-90 days, with significant organic traffic increases compoundingly visible within 4 to 6 months.' },
      { question: 'Do you use safe white-hat SEO techniques?', answer: 'Strictly white-hat! We adhere 100% to Google Webmaster Guidelines so your domain never risks algorithmic penalties.' },
      { question: 'Will I get reports of my ranking progress?', answer: 'Yes! We provide easy-to-read monthly dashboards tracking keyword movements, visitor clicks, conversions, and completed action items.' }
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics 4'],
    deliverables: ['Comprehensive SEO Audit Report', 'Target Keyword Matrix', 'Optimized Meta Tags & Schema', 'Monthly Performance Dashboard'],
    stats: [
      { label: 'Organic Traffic Lift', value: '+240%' },
      { label: 'Keywords in Top 3', value: '85%' },
      { label: 'Client Retention', value: '96%' }
    ]
  },
  {
    id: '4',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc: 'Grow your business with proven strategies.',
    fullDesc: 'Help businesses grow through full-funnel digital campaigns, content marketing, online promotions and lead generation strategies that maximize your return on ad spend (ROAS).',
    iconName: 'Megaphone',
    gradient: 'from-blue-600 to-indigo-700',
    bgBadge: 'bg-blue-50 text-blue-700',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'High-Quality Inbound Leads', description: 'Connect with prospective clients who are actively looking for your exact services.' },
      { title: 'Maximum Marketing ROI', description: 'Data-driven audience segmentation ensuring every rupee spent produces measurable returns.' },
      { title: 'Omnichannel Brand Presence', description: 'Coordinated marketing across Google, Meta, email, and content channels.' },
      { title: 'Predictable Growth Engine', description: 'Turn marketing from guesswork into an automated pipeline of monthly client enquiries.' }
    ],
    features: [
      'Full-Funnel Lead Generation Campaigns',
      'Conversion Rate Optimization (CRO) & A/B Testing',
      'Targeted B2B and B2C Growth Strategies',
      'Email Marketing Automation & Retargeting Drips',
      'Content Marketing & Brand Storytelling',
      'Real-Time Attribution & Analytics Dashboards'
    ],
    process: [
      { step: '01', title: 'Target Market Profiling', desc: 'Defining buyer personas, pain points, and decision triggers.' },
      { step: '02', title: 'Campaign Architecture', desc: 'Crafting persuasive ad angles, creative hooks, and landing page funnels.' },
      { step: '03', title: 'Execution & Multi-Channel Push', desc: 'Launching ads with tight audience exclusions and conversion tracking.' },
      { step: '04', title: 'Scaling & Optimization', desc: 'Doubling down on winning ad sets to lower cost per acquisition (CPA).' }
    ],
    faqs: [
      { question: 'Which channels are best for my industry?', answer: 'Depending on whether you are B2B or B2C, we recommend Google Search Ads for immediate intent, Meta/Instagram for visual discovery, and LinkedIn for high-ticket corporate clients.' },
      { question: 'What is the minimum budget recommended?', answer: 'We customize ad spend according to your local geography and competitive landscape, starting from modest test budgets up to scaled growth campaigns.' },
      { question: 'Can you guarantee leads?', answer: 'We build high-converting landing pages, targeted audiences, and tested ad copy to maximize lead conversion rates.' }
    ],
    technologies: ['Meta Business Suite', 'Google Ads', 'HubSpot', 'Zapier', 'Mailchimp', 'GA4'],
    deliverables: ['Custom Growth Blueprint', 'High-Converting Ad Creatives', 'Targeted Landing Page Funnels', 'Weekly Lead Reports'],
    stats: [
      { label: 'Avg ROAS', value: '4.8x' },
      { label: 'Leads Generated', value: '50,000+' },
      { label: 'CPA Reduction', value: '-35%' }
    ]
  },
  {
    id: '5',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'Engage & grow on social media platforms.',
    fullDesc: 'Manage Facebook, Instagram and other social platforms through creative content, reels, promotional campaigns and Meta Ads that cultivate an engaged community around your brand.',
    iconName: 'Share2',
    gradient: 'from-purple-600 to-pink-600',
    bgBadge: 'bg-purple-50 text-purple-600',
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Viral Brand Awareness', description: 'Reach hundreds of thousands of potential local and global customers through engaging reels and posts.' },
      { title: 'Authentic Community Building', description: 'Foster loyal followers who interact, share, and advocate for your products.' },
      { title: 'Direct Social Commerce', description: 'Generate direct DM enquiries, WhatsApp chats, and instant bookings through social posts.' },
      { title: 'Consistent Brand Image', description: 'Maintain an active, credible, and polished profile that proves your industry leadership.' }
    ],
    features: [
      'Viral Instagram Reels & Short Video Production',
      'High-Impact Carousel & Graphic Post Design',
      'Meta Ad Campaign Setup & Pixel Retargeting',
      'Engaging Caption Writing & Hashtag Strategy',
      'Influencer Collaboration & Brand Partnerships',
      'Community Management & Quick DM/Comment Handling'
    ],
    process: [
      { step: '01', title: 'Content Calendar', desc: 'Planning monthly themes, festivals, educational posts, and promotional offers.' },
      { step: '02', title: 'Graphic & Video Creation', desc: 'Designing brand-aligned creatives and editing high-engagement video reels.' },
      { step: '03', title: 'Publishing & Engagement', desc: 'Posting at peak algorithmic times with targeted hashtags and stories.' },
      { step: '04', title: 'Ad Boost & Retargeting', desc: 'Amplifying top-performing content with micro-targeted paid reach.' }
    ],
    faqs: [
      { question: 'How many posts will be published each week?', answer: 'Our standard packages include 3 to 6 high-quality posts and reels per week, along with daily interactive stories.' },
      { question: 'Do you create the video reels or do we provide footage?', answer: 'We can edit raw videos you shoot, animate custom graphics, or generate high-quality AI video reels tailored to your services.' },
      { question: 'Will you respond to comments and enquiries?', answer: 'Yes, we monitor and manage responses to comments and forward warm leads directly to your sales team via WhatsApp.' }
    ],
    technologies: ['Instagram', 'Facebook', 'LinkedIn', 'Canva Pro', 'CapCut', 'Meta Ads Manager'],
    deliverables: ['Monthly Social Calendar', '15-25 Branded Creatives & Reels', 'Audience Growth Reports', 'Paid Meta Campaign Setup'],
    stats: [
      { label: 'Follower Growth', value: '+300%' },
      { label: 'Monthly Reach', value: '500K+' },
      { label: 'Engagement Rate', value: '6.4%' }
    ]
  },
  {
    id: '6',
    slug: 'ai-ad-creation',
    title: 'AI Ad Creation',
    shortDesc: 'Create engaging AI video ads.',
    fullDesc: 'Create professional AI-powered advertisements, promotional videos, product videos and engaging social media creatives that captivate viewers in the first 3 seconds.',
    iconName: 'PlaySquare',
    gradient: 'from-violet-600 to-purple-700',
    bgBadge: 'bg-violet-50 text-violet-600',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: '10x Faster Production', description: 'Produce studio-grade video commercials in days instead of weeks or months.' },
      { title: 'Fraction of Studio Costs', description: 'Eliminate expensive camera crews, studio rentals, actors, and location overhead.' },
      { title: 'High Click-Through Rates', description: 'Dynamic visuals, hyper-realistic voiceovers, and captivating visual storytelling.' },
      { title: 'Multi-Language Adaptation', description: 'Easily translate and localize your video ads into English, Telugu, Hindi, and 20+ languages.' }
    ],
    features: [
      'Realistic AI Human Presenter & Avatar Videos',
      'Studio Quality Voiceovers with Natural Inflection',
      'AI Scriptwriting & Hook Optimization',
      'Dynamic 3D Product Visualizations',
      'Short-Form Vertical Ads for Reels, TikTok & Shorts',
      'Multilingual Audio Dubbing & Subtitles'
    ],
    process: [
      { step: '01', title: 'Hook & Script Crafting', desc: 'Developing attention-grabbing scripts optimized for short attention spans.' },
      { step: '02', title: 'AI Visual Generation', desc: 'Synthesizing photorealistic scenes, avatars, motion graphics, and effects.' },
      { step: '03', title: 'Audio & Voiceover Fusion', desc: 'Matching crystal clear AI voiceovers, sound design, and background music.' },
      { step: '04', title: 'Multi-Format Render', desc: 'Exporting 9:16 (reels), 1:1 (feed), and 16:9 (YouTube) ready-to-run assets.' }
    ],
    faqs: [
      { question: 'Do AI videos look realistic?', answer: 'Yes! We use cutting-edge generative AI video engines that render natural facial expressions, lighting, and cinematic motion indistinguishable from traditional filming.' },
      { question: 'Can you generate videos in regional languages?', answer: 'Absolutely! We can produce ads with native accents in English, Telugu, Hindi, Tamil, and several international languages.' },
      { question: 'What formats do you supply?', answer: 'We deliver MP4 in 4K/1080p formatted for Instagram Reels, YouTube Ads, Facebook Feed, and website hero banners.' }
    ],
    technologies: ['Midjourney', 'Runway Gen-3', 'ElevenLabs', 'Synthesia', 'After Effects'],
    deliverables: ['Full HD/4K Video Files', 'Multi-Language Voice Track', 'Social-Optimized Variations', 'Custom Thumbnail Sets'],
    stats: [
      { label: 'Production Speed', value: '10x Faster' },
      { label: 'Avg. Hook Retention', value: '72%' },
      { label: 'Ad CTR Increase', value: '+68%' }
    ]
  },
  {
    id: '7',
    slug: 'google-ads-management',
    title: 'Google Ads Management',
    shortDesc: 'Targeted ads for better results.',
    fullDesc: 'Create and optimize Google Search Ads, Display Ads and Call Ads to generate targeted business enquiries with transparent cost-per-click management.',
    iconName: 'BadgePercent',
    gradient: 'from-amber-500 to-red-500',
    bgBadge: 'bg-amber-50 text-amber-600',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Immediate Enquiries & Phone Calls', description: 'Start receiving calls and quote requests within hours of campaign launch.' },
      { title: 'Laser-Focused Intent Targeting', description: 'Show up exclusively when customers type ready-to-buy queries in Google.' },
      { title: 'Negative Keyword Shielding', description: 'Block irrelevant clicks to preserve your ad budget for genuine prospects.' },
      { title: 'Transparent Cost Tracking', description: 'Track exact cost-per-lead and know the exact return from your advertising investment.' }
    ],
    features: [
      'High-Intent Google Search & Call-Only Ads',
      'Google Display Network Visual Remarketing',
      'YouTube Video Advertising Campaigns',
      'Competitor Keyword Hijacking Strategies',
      'Conversion Tracking & Phone Call Attribution',
      'Bid Management & Quality Score Optimization'
    ],
    process: [
      { step: '01', title: 'Intent Keyword Mining', desc: 'Filtering high-converting buying queries from low-intent search noise.' },
      { step: '02', title: 'Ad Copywriting & Extensions', desc: 'Crafting compelling headlines, callout extensions, and click-to-call buttons.' },
      { step: '03', title: 'Tracking Setup', desc: 'Installing Google Tag Manager, form submit tracking, and call recording.' },
      { step: '04', title: 'Daily Bid Optimization', desc: 'Fine-tuning negative keywords and adjusting bids to minimize cost-per-lead.' }
    ],
    faqs: [
      { question: 'How quickly will I start receiving leads from Google Ads?', answer: 'Google Ads go live within 24 to 48 hours of campaign approval, and clients often receive calls on the very first day.' },
      { question: 'What is the difference between SEO and Google Ads?', answer: 'Google Ads provide instant visibility through paid placement at the top of search results, while SEO builds organic rankings over time without paying per click.' },
      { question: 'Will I have access to my Google Ads account?', answer: 'Yes! We believe in 100% transparency. You own your Google Ads account and can view every single click, keyword, and expense in real time.' }
    ],
    technologies: ['Google Ads', 'Google Tag Manager', 'Looker Studio', 'CallRail', 'GA4'],
    deliverables: ['Custom Google Ads Architecture', 'Conversion Tracking Verification', 'Weekly Optimization Logs', 'Monthly ROI Report'],
    stats: [
      { label: 'Avg Quality Score', value: '9/10' },
      { label: 'Lower Cost/Lead', value: '-42%' },
      { label: 'Client Ad Spend Managed', value: '₹2.5Cr+' }
    ]
  },
  {
    id: '8',
    slug: 'graphic-designing',
    title: 'Graphic Designing',
    shortDesc: 'Creative designs for print & digital.',
    fullDesc: 'Create professional banners, brochures, posters, flyers, social media creatives and promotional graphics that communicate your brand values with unforgettable artistic flair.',
    iconName: 'Palette',
    gradient: 'from-pink-500 to-rose-600',
    bgBadge: 'bg-rose-50 text-rose-600',
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Distinctive Visual Identity', description: 'Establish an iconic, instantly recognizable presence in your marketplace.' },
      { title: 'High-Resolution Print Readiness', description: 'Vector graphics and 300 DPI CMYK files ready for billboard or brochure printing.' },
      { title: 'Consistent Brand Guidelines', description: 'Cohesive color codes, typography pairings, and layout rules across all media.' },
      { title: 'Rapid Turnaround Times', description: 'Prompt delivery of promotional graphics for timely festival and sales campaigns.' }
    ],
    features: [
      'Complete Brand Identity Kits & Vector Logo Design',
      'Corporate Brochures, Catalogues & Company Profiles',
      'Outdoor Hoardings, Standees & Flex Banners',
      'Social Media Creative Packs & Story Templates',
      'Product Packaging & Label Design',
      'Business Cards, Letterheads & Corporate Stationery'
    ],
    process: [
      { step: '01', title: 'Creative Ideation', desc: 'Mood boards, color psychology analysis, and brand concept sketches.' },
      { step: '02', title: 'Draft Concepts', desc: 'Presenting distinct design routes for your review and feedback.' },
      { step: '03', title: 'Refinement & Polishing', desc: 'Fine-tuning kerning, alignment, contrast, and visual balance.' },
      { step: '04', title: 'Multi-Format Export', desc: 'Supplying AI, EPS, PDF (print), and Web-optimized PNG/JPEG formats.' }
    ],
    faqs: [
      { question: 'Will you supply editable source files?', answer: 'Yes! You receive full ownership including high-resolution vector source files (AI, EPS, SVG) and PDF/PNG files.' },
      { question: 'Can you design print-ready hoardings and brochures?', answer: 'Yes, our designs are prepared with exact bleed, crop marks, and CMYK color spaces ready for professional print presses.' },
      { question: 'Do you create custom illustrations and iconography?', answer: 'Yes, we create custom vector illustrations, icons, and infographics suited to your corporate branding.' }
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Canva Pro', 'Figma'],
    deliverables: ['Vector Source Files (AI/EPS)', 'Print-Ready PDF Files', 'Social Media Sized Assets', 'Brand Style Guide Sheet'],
    stats: [
      { label: 'Designs Delivered', value: '4,500+' },
      { label: 'Print Accuracy', value: '100%' },
      { label: 'Brand Kits Created', value: '220+' }
    ]
  },
  {
    id: '9',
    slug: 'google-business-profile-management',
    title: 'Google Business Profile Management',
    shortDesc: 'Improve local visibility.',
    fullDesc: 'Improve local visibility through Google Business Profile setup, optimization, listing management and review management to dominate the Google 3-Pack map rankings in your city.',
    iconName: 'MapPin',
    gradient: 'from-blue-600 to-sky-600',
    bgBadge: 'bg-sky-50 text-sky-600',
    heroImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Google 3-Pack Map Dominance', description: 'Be the first business local customers see when searching on Google Maps.' },
      { title: 'Skyrocketing Direct Phone Calls', description: 'Turn "near me" searches directly into incoming customer phone calls.' },
      { title: '5-Star Reputation Management', description: 'Systematically gather positive customer reviews and professionally handle feedback.' },
      { title: 'Spam Protection & Listing Health', description: 'Protect your profile from competitor edits, duplicate listings, or unauthorized changes.' }
    ],
    features: [
      'Complete Google Business Profile Setup & Verification',
      'Local Geo-Tagged Photo Uploads & Virtual Tours',
      'Weekly Promotional Posts & Product Catalog Updates',
      'Automated Review Generation & Response Strategies',
      'Local Citation Consistency (NAP Cleanup)',
      'Map Ranking Heatmap Analytics & Monthly Audits'
    ],
    process: [
      { step: '01', title: 'Profile Audit', desc: 'Checking category accuracy, attributes, business hours, and photo quality.' },
      { step: '02', title: 'Local Geo-Optimization', desc: 'Optimizing description with local keywords and uploading geo-tagged images.' },
      { step: '03', title: 'Review Growth System', desc: 'Deploying QR codes and direct links to encourage happy customers to review.' },
      { step: '04', title: 'Weekly Maintenance', desc: 'Publishing weekly updates, offers, and responding to all questions and reviews.' }
    ],
    faqs: [
      { question: 'Why is Google Business Profile important for my business?', answer: 'Over 80% of local searches lead to a store visit or direct call within 24 hours. A top Google Maps ranking is the #1 driver of walk-ins and phone calls.' },
      { question: 'How do you handle negative reviews?', answer: 'We draft empathetic, professional responses aimed at resolving the issue offline, and report fraudulent or policy-violating reviews to Google for removal.' },
      { question: 'Can you help reinstate a suspended Google profile?', answer: 'Yes! We assist in resolving policy violations, gathering official documentation, and filing reinstatement appeals with Google.' }
    ],
    technologies: ['Google Business Profile Manager', 'BrightLocal', 'GeoImgr', 'Whitespark'],
    deliverables: ['Verified & Fully Optimized Profile', 'Geo-Tagged Photo Assets', 'Custom Review QR Code', 'Local Rank Tracker Access'],
    stats: [
      { label: 'Map Call Increase', value: '+185%' },
      { label: 'Direction Requests', value: '+120%' },
      { label: 'Top 3 Pack Rank', value: '92%' }
    ]
  },
  {
    id: '10',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Powerful Android & iOS Apps.',
    fullDesc: 'Develop customized Android and iOS applications, business apps, e-commerce applications and booking applications with fluid animations and secure cloud synchronization.',
    iconName: 'Smartphone',
    gradient: 'from-blue-600 to-indigo-800',
    bgBadge: 'bg-indigo-50 text-indigo-700',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Cross-Platform Android & iOS', description: 'Single code base reducing development costs while providing native 60fps performance.' },
      { title: 'Push Notification Power', description: 'Engage users directly on their lock screens with discounts, alerts, and personalized reminders.' },
      { title: 'Offline Data Sync', description: 'Ensure users can browse core features even with low or absent network connectivity.' },
      { title: 'App Store & Play Store Approval', description: 'End-to-end guidance ensuring compliance with strict Apple and Google guidelines.' }
    ],
    features: [
      'Custom React Native & Flutter Mobile Development',
      'Real-Time Chat, Push Notifications & Geolocation',
      'In-App Payment Gateway Integration (Razorpay, Stripe, UPI)',
      'Biometric Login (Face ID & Fingerprint Authentication)',
      'Backend Cloud API & Microservices Engineering',
      'Full App Store Optimization (ASO) & Launch Assistance'
    ],
    process: [
      { step: '01', title: 'App Architecture & UI', desc: 'Designing interactive mobile wireframes with human interface guidelines.' },
      { step: '02', title: 'Frontend & API Development', desc: 'Coding responsive views and connecting cloud microservices.' },
      { step: '03', title: 'Device Matrix QA', desc: 'Testing across various screen sizes, Android OS versions, and iOS devices.' },
      { step: '04', title: 'Store Publishing & Launch', desc: 'Submitting to Apple App Store & Google Play Store with full compliance.' }
    ],
    faqs: [
      { question: 'Will the app work on both iPhone and Android?', answer: 'Yes! We specialize in React Native and Flutter, allowing you to launch high-performance native apps on both iOS and Android simultaneously.' },
      { question: 'Do you help publish the app to Google Play Store and Apple App Store?', answer: 'Yes, we take care of app signing, compliance checks, privacy policy verification, and full store publication.' },
      { question: 'Can the app send push notifications to users?', answer: 'Yes! We configure automated and manual push notifications via Firebase Cloud Messaging (FCM).' }
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js'],
    deliverables: ['Signed APK & iOS Build Files', 'Full Clean Source Code', 'Admin API Dashboard', 'App Store Publishing Assistance'],
    stats: [
      { label: 'Store Approval Rate', value: '100%' },
      { label: 'Crash-Free Rate', value: '99.8%' },
      { label: 'Mobile Apps Built', value: '45+' }
    ]
  },
  {
    id: '11',
    slug: 'web-hosting-domain-registration',
    title: 'Web Hosting & Domain Registration',
    shortDesc: 'Reliable hosting solutions.',
    fullDesc: 'Provide domain registration, web hosting, VPS hosting, SSL installation, business email and website migration services with 99.9% guaranteed uptime and dedicated technical support.',
    iconName: 'Server',
    gradient: 'from-blue-700 to-sky-700',
    bgBadge: 'bg-blue-50 text-blue-700',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: '99.9% Uptime Guarantee', description: 'High-availability cloud infrastructure ensuring your website is always reachable.' },
      { title: 'Free SSL Encryption & Firewall', description: 'Enterprise DDoS protection and automatic SSL certificates for complete data safety.' },
      { title: 'Professional Business Emails', description: 'Custom corporate email addresses (e.g., yourname@yourdomain.com) that instill client trust.' },
      { title: 'Seamless Zero-Downtime Migration', description: 'We transfer your existing website and database to high-speed servers without losing a single visit.' }
    ],
    features: [
      'High-Speed NVMe SSD Cloud Hosting & VPS Servers',
      'Domain Name Search, Registration & DNS Configuration',
      'Automated Daily Cloud Backups & Instant Restore',
      'Google Workspace & Microsoft 365 Email Setup',
      'Free Let’s Encrypt SSL Installation & Wildcard Certificates',
      '24/7 Server Monitoring & Malware Scanning'
    ],
    process: [
      { step: '01', title: 'Domain Selection & DNS', desc: 'Securing memorable brand domain names and configuring DNS records.' },
      { step: '02', title: 'Server Provisioning', desc: 'Allocating optimized cloud resources, caching engines, and databases.' },
      { step: '03', title: 'Security & SSL Setup', desc: 'Enabling SSL encryption, HTTP/3, firewall rules, and automated backups.' },
      { step: '04', title: 'Business Email Config', desc: 'Creating professional corporate email inboxes with spam filters.' }
    ],
    faqs: [
      { question: 'Will my website go down during migration?', answer: 'Not at all! We use staged zero-downtime migration methods to verify the site before switching DNS pointers.' },
      { question: 'Can I get professional email accounts for my team?', answer: 'Yes, we provide and configure business emails using your custom domain, accessible on Outlook, Gmail, or webmail.' },
      { question: 'Are automatic backups included?', answer: 'Yes! Automated daily backups are stored securely offsite, allowing one-click rollback at any time.' }
    ],
    technologies: ['AWS', 'DigitalOcean', 'Cloudflare', 'cPanel', 'Nginx', 'Let’s Encrypt'],
    deliverables: ['Domain Ownership Credentials', 'Cloud Server Control Access', 'Configured Business Inboxes', 'Automated Backup System'],
    stats: [
      { label: 'Server Uptime', value: '99.98%' },
      { label: 'DNS Propagation', value: '< 15 Mins' },
      { label: 'Domains Managed', value: '500+' }
    ]
  },
  {
    id: '12',
    slug: 'training-internship',
    title: 'Training & Internship',
    shortDesc: 'Learn with hands-on experience.',
    fullDesc: 'Provide practical training and internship programs in website designing, development, SEO, digital marketing and graphic designing with real-world client projects and recognized certifications.',
    iconName: 'GraduationCap',
    gradient: 'from-blue-600 to-indigo-600',
    bgBadge: 'bg-indigo-50 text-indigo-700',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      { title: 'Live Client Project Exposure', description: 'Work on actual commercial websites and campaigns, not just textbook theory.' },
      { title: 'Industry-Recognized Certification', description: 'Earn credentials that validate your practical skills to leading tech employers.' },
      { title: 'Mentorship by Senior Engineers', description: 'Direct 1-on-1 feedback and code reviews from developers with 10+ years experience.' },
      { title: '100% Placement & Resume Support', description: 'Mock technical interviews, portfolio building, and referrals to hiring companies.' }
    ],
    features: [
      'Full-Stack Web Development Track (React, Node, MongoDB)',
      'Digital Marketing & Meta/Google Ads Masterclass',
      'Advanced SEO & Analytics Hands-On Workshops',
      'UI/UX Design with Figma & Design Systems',
      'Graphic Design Suite (Photoshop & Illustrator)',
      'Capstone Projects & Verified Experience Letters'
    ],
    process: [
      { step: '01', title: 'Core Foundations', desc: 'Mastering modern syntax, industry tools, and production-grade workflows.' },
      { step: '02', title: 'Hands-On Labs', desc: 'Building daily exercises, responsive pages, and functional modules.' },
      { step: '03', title: 'Live Team Projects', desc: 'Collaborating in agile sprints on actual client deliverables under mentorship.' },
      { step: '04', title: 'Portfolio & Interview Prep', desc: 'Finalizing your GitHub portfolio, polishing resume, and attending interviews.' }
    ],
    faqs: [
      { question: 'Who is eligible to join the training program?', answer: 'College students, recent graduates, aspiring freelancers, and working professionals looking to transition into tech are welcome.' },
      { question: 'Will I receive an internship certificate?', answer: 'Yes! Upon successful completion of project milestones, you will receive an official Internship Experience Certificate from BlueMoon Software Solutions.' },
      { question: 'Are classes available offline and online?', answer: 'Yes, we offer both in-person sessions at our Visakhapatnam center and flexible live online batches.' }
    ],
    technologies: ['React', 'JavaScript', 'Python', 'Figma', 'Google Ads', 'Git & GitHub'],
    deliverables: ['Verified Internship Certificate', 'GitHub Project Portfolio', 'Interview Prep Kit', 'Letter of Recommendation'],
    stats: [
      { label: 'Students Trained', value: '1,200+' },
      { label: 'Placement Rate', value: '94%' },
      { label: 'Hands-On Labs', value: '100%' }
    ]
  }
];

