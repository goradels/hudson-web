export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;        // human-readable display date
  isoDate: string;     // ISO 8601 for structured data / <time> tags
  readTime: string;
  body: Section[];
}

export interface Section {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export const posts: Post[] = [
  {
    id: "why-seo-still-matters-2026",
    title: "Why SEO Still Matters More Than Ever in 2026",
    excerpt:
      "With AI-generated search results reshaping how people find information, organic search strategy has changed — but it hasn't died. Here's why a strong SEO foundation remains your most durable digital asset.",
    category: "SEO & Content",
    date: "April 14, 2026",
    isoDate: "2026-04-14",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Every year, someone declares SEO dead. Every year, they're wrong. In 2026, with AI Overviews and generative search features now dominant on Google, the declaration is louder than ever — and still incorrect.",
      },
      {
        type: "paragraph",
        text: "What has changed is what 'good SEO' looks like. The old playbook of keyword stuffing, low-quality link schemes, and thin content isn't just ineffective — it's actively harmful. What works now is harder to fake and harder to replicate: genuine expertise, authoritative content, and a technically sound site.",
      },
      {
        type: "heading",
        text: "The rise of AI Overviews doesn't kill organic traffic",
      },
      {
        type: "paragraph",
        text: "Yes, AI Overviews reduce clicks on informational queries. But transactional queries — the searches that matter most for revenue — still drive significant click-through traffic. Users who want to buy, book, or hire still click. That's your audience.",
      },
      {
        type: "heading",
        text: "What to focus on instead",
      },
      {
        type: "list",
        items: [
          "E-E-A-T signals: Experience, Expertise, Authoritativeness, Trustworthiness",
          "Topical authority — covering a subject deeply, not just broadly",
          "Technical performance: Core Web Vitals, crawlability, structured data",
          "Content that serves a genuine user intent, not just a keyword",
        ],
      },
      {
        type: "paragraph",
        text: "The brands that invested in real SEO over the last decade are reaping compounding returns today. The window to build that foundation is still open — but it won't stay open forever.",
      },
    ],
  },
  {
    id: "how-to-reduce-cpa-google-ads",
    title: "5 Proven Ways to Reduce Your Cost Per Acquisition on Google Ads",
    excerpt:
      "Burning budget without the conversions to show for it? These five optimisation techniques have consistently driven down CPAs for our clients — and they work regardless of your industry.",
    category: "Digital Advertising",
    date: "April 7, 2026",
    isoDate: "2026-04-07",
    readTime: "8 min read",
    body: [
      {
        type: "paragraph",
        text: "Google Ads can be one of the most powerful customer acquisition channels available — or one of the most expensive ways to generate almost nothing. The difference usually comes down to a handful of optimisation decisions.",
      },
      {
        type: "heading",
        text: "1. Tighten your audience targeting",
      },
      {
        type: "paragraph",
        text: "Broad match keywords and wide demographic targeting might increase reach, but they rarely improve efficiency. Narrowing your targeting to in-market segments and custom intent audiences consistently lowers CPAs by removing wasted impressions.",
      },
      {
        type: "heading",
        text: "2. Improve your landing page relevance score",
      },
      {
        type: "paragraph",
        text: "Quality Score is a direct lever on your cost per click. A tightly aligned landing page — where the headline, copy, and offer mirror the ad — raises QS, lowers CPC, and improves conversion rate simultaneously.",
      },
      {
        type: "heading",
        text: "3. Use conversion-based bidding once you have enough data",
      },
      {
        type: "paragraph",
        text: "Smart bidding strategies like Target CPA and Maximise Conversions require sufficient conversion data to work properly. Once you hit 30–50 conversions per month, switching to a conversion-focused bid strategy typically outperforms manual CPC.",
      },
      {
        type: "heading",
        text: "4. Audit your negative keyword list",
      },
      {
        type: "paragraph",
        text: "Most accounts are wasting 15–25% of their budget on irrelevant searches. A thorough search term audit and a robust negative keyword list is often the fastest way to free up budget that can be reinvested into high-intent terms.",
      },
      {
        type: "heading",
        text: "5. Test your ad creative systematically",
      },
      {
        type: "paragraph",
        text: "Responsive Search Ads give Google's algorithm room to test combinations — but you still need to provide strong creative inputs. Run structured A/B tests on headlines and descriptions, and let data determine winners rather than intuition.",
      },
    ],
  },
  {
    id: "email-marketing-automation-flows",
    title: "The 4 Email Automation Flows Every Business Needs",
    excerpt:
      "Most businesses set up a welcome email and call it done. These four automated flows go further — turning your list into a consistent revenue engine that runs without you.",
    category: "Email Marketing",
    date: "March 28, 2026",
    isoDate: "2026-03-28",
    readTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "Email marketing has the highest ROI of any digital channel — consistently around $36 for every $1 spent. But most of that return doesn't come from one-off campaigns. It comes from automated flows that work around the clock.",
      },
      {
        type: "heading",
        text: "1. Welcome Series",
      },
      {
        type: "paragraph",
        text: "A subscriber's engagement is highest in the first 48 hours. A three to five email welcome series — introducing your brand, setting expectations, and delivering early value — sets the tone for everything that follows and dramatically improves long-term open rates.",
      },
      {
        type: "heading",
        text: "2. Abandoned Cart Flow",
      },
      {
        type: "paragraph",
        text: "For e-commerce, this is the single highest-ROI flow you can build. A sequence of two to three emails — sent at 1 hour, 24 hours, and 72 hours after cart abandonment — typically recovers between 5% and 15% of abandoned carts.",
      },
      {
        type: "heading",
        text: "3. Post-Purchase Nurture",
      },
      {
        type: "paragraph",
        text: "Acquiring a customer costs five times more than retaining one. A post-purchase flow that delivers value, encourages a review, and introduces complementary products can significantly increase lifetime value without increasing ad spend.",
      },
      {
        type: "heading",
        text: "4. Re-engagement Flow",
      },
      {
        type: "paragraph",
        text: "Inactive subscribers hurt your deliverability. A re-engagement sequence — offering something compelling and then removing non-openers — keeps your list healthy and your sender reputation strong.",
      },
      {
        type: "paragraph",
        text: "These four flows aren't advanced or complex. They're foundational. If you have a list and you're not running all four, you're leaving significant revenue on the table every single month.",
      },
    ],
  },
  {
    id: "web-design-conversion-rate",
    title: "How Web Design Directly Impacts Your Conversion Rate",
    excerpt:
      "Your website isn't a brochure — it's your best salesperson. These design principles consistently move the needle on conversion rate, whether you're selling a product, a service, or a consultation.",
    category: "Web Design",
    date: "March 19, 2026",
    isoDate: "2026-03-19",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "Visitors decide whether to trust your brand within milliseconds of landing on your site. Before they've read a single word, they've already formed an impression. Design is the first argument you make — and it either helps or hurts everything that follows.",
      },
      {
        type: "heading",
        text: "Clarity beats cleverness every time",
      },
      {
        type: "paragraph",
        text: "The most common mistake on agency and service websites is prioritising aesthetic novelty over immediate clarity. Visitors should know within three seconds: what you do, who it's for, and what they should do next. If they have to work for that information, most won't.",
      },
      {
        type: "heading",
        text: "The hierarchy of attention",
      },
      {
        type: "list",
        items: [
          "Headline: your single most important conversion lever",
          "Subheadline: amplify and clarify the headline",
          "Social proof: reviews, logos, case study metrics",
          "CTA: one clear, compelling next step",
        ],
      },
      {
        type: "heading",
        text: "Speed is a design decision",
      },
      {
        type: "paragraph",
        text: "A 1-second delay in page load time reduces conversions by up to 7%. Performance isn't a developer afterthought — it's a design constraint that should inform every creative decision, from image format choices to animation complexity.",
      },
      {
        type: "paragraph",
        text: "The best-converting websites aren't always the most visually striking. They're the ones that make it effortless for the right visitor to take the right action.",
      },
    ],
  },
  {
    id: "bespoke-software-vs-off-shelf",
    title: "Bespoke Software vs Off-the-Shelf: How to Choose",
    excerpt:
      "The right answer depends on your growth stage, budget, and how differentiated your processes are. Here's a practical framework for making the decision.",
    category: "Bespoke Software",
    date: "March 10, 2026",
    isoDate: "2026-03-10",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Most businesses start with off-the-shelf software. Shopify for e-commerce, HubSpot for CRM, Notion for documentation. This is usually the right call early on — proven tools, fast implementation, predictable costs.",
      },
      {
        type: "paragraph",
        text: "But there comes a point for many businesses where the limitations of generic software start to cost more than they save. The question is recognising when that point has been reached.",
      },
      {
        type: "heading",
        text: "Signs you've outgrown off-the-shelf",
      },
      {
        type: "list",
        items: [
          "You're paying for multiple tools to achieve what one custom system could",
          "Your team spends hours on manual workarounds every week",
          "Your core processes are genuinely differentiated from competitors",
          "Data is siloed across systems and reporting requires manual reconciliation",
        ],
      },
      {
        type: "heading",
        text: "The real cost comparison",
      },
      {
        type: "paragraph",
        text: "Off-the-shelf tools often look cheaper until you add up licences, workaround labour, and the revenue lost to process inefficiency. A bespoke system built to your exact workflow can pay for itself within 12 to 18 months in many cases.",
      },
      {
        type: "heading",
        text: "When to stick with off-the-shelf",
      },
      {
        type: "paragraph",
        text: "If your processes are standard, your team is small, and your requirements are likely to change significantly in the next year — off-the-shelf is almost always the right choice. Build custom when you have stable, differentiated processes that won't change dramatically.",
      },
    ],
  },
  {
    id: "measuring-digital-marketing-roi",
    title: "A Plain-English Guide to Measuring Digital Marketing ROI",
    excerpt:
      "Likes and impressions aren't revenue. This guide cuts through the noise and shows you exactly which metrics matter, how to track them, and what to do with what you find.",
    category: "Strategy",
    date: "March 3, 2026",
    isoDate: "2026-03-03",
    readTime: "9 min read",
    body: [
      {
        type: "paragraph",
        text: "One of the most common frustrations we hear from business owners is that they're spending on digital marketing but have no clear idea whether it's working. That ambiguity is solvable — but only if you're tracking the right things.",
      },
      {
        type: "heading",
        text: "Start with business outcomes, not marketing metrics",
      },
      {
        type: "paragraph",
        text: "Before you look at click-through rates or follower counts, define what success looks like for your business: leads generated, cost per acquisition, revenue attributed to digital channels. Every marketing metric should trace back to one of these.",
      },
      {
        type: "heading",
        text: "The metrics that actually matter",
      },
      {
        type: "list",
        items: [
          "Customer Acquisition Cost (CAC): total marketing spend ÷ new customers acquired",
          "Return on Ad Spend (ROAS): revenue attributed to paid ads ÷ ad spend",
          "Conversion Rate: visitors who take the desired action ÷ total visitors",
          "Customer Lifetime Value (LTV): average revenue per customer over their lifetime",
          "LTV:CAC ratio: the clearest indicator of sustainable growth",
        ],
      },
      {
        type: "heading",
        text: "Attribution is hard — do it anyway",
      },
      {
        type: "paragraph",
        text: "No attribution model is perfect. Multi-touch attribution is more accurate than last-click but also more complex. The goal isn't perfect measurement — it's directionally correct measurement that helps you make better resource allocation decisions.",
      },
      {
        type: "paragraph",
        text: "Start simple. Track where your leads come from, what they cost, and how many convert to customers. That alone puts you ahead of the majority of small and mid-sized businesses.",
      },
    ],
  },
  {
    id: "social-media-strategy-2025",
    title: "Building a Social Media Strategy That Actually Drives Business",
    excerpt:
      "Posting for the sake of posting is a waste of time and resource. Here's how to build a social strategy rooted in business objectives — not vanity metrics.",
    category: "Strategy",
    date: "February 24, 2026",
    isoDate: "2026-02-24",
    readTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "Most businesses approach social media the wrong way. They open accounts on every platform, post inconsistently, and then wonder why it isn't generating leads. The problem isn't social media — it's the absence of a coherent strategy.",
      },
      {
        type: "heading",
        text: "Start with the business goal, not the platform",
      },
      {
        type: "paragraph",
        text: "Before you think about content formats or posting frequency, ask: what do we want social media to do for the business? Drive awareness? Generate leads? Support retention? Your answer determines everything else — which platforms, what content, how you measure success.",
      },
      {
        type: "heading",
        text: "Choose fewer platforms and own them",
      },
      {
        type: "paragraph",
        text: "Being mediocre on five platforms is worse than being excellent on two. Pick the channels where your audience actually spends time and where your content type performs well. For most B2B businesses that's LinkedIn. For most consumer brands it's Instagram or TikTok. Resist the urge to be everywhere.",
      },
      {
        type: "heading",
        text: "The content mix that works",
      },
      {
        type: "list",
        items: [
          "Educational content: builds trust and authority with your audience",
          "Behind-the-scenes: humanises the brand and drives engagement",
          "Social proof: client results, testimonials, case studies",
          "Promotional: offers, services, CTAs — keep this to 20% or less",
        ],
      },
      {
        type: "paragraph",
        text: "Measure what matters: profile visits to website, DM enquiries, and leads generated — not likes. If social media isn't contributing to pipeline, it needs to change.",
      },
    ],
  },
  {
    id: "local-seo-guide",
    title: "The Local SEO Playbook: Get Found by Customers Near You",
    excerpt:
      "If your business serves a local area, local SEO is the highest-ROI organic channel available to you. This practical guide covers everything from Google Business Profile to local link building.",
    category: "SEO & Content",
    date: "February 17, 2026",
    isoDate: "2026-02-17",
    readTime: "8 min read",
    body: [
      {
        type: "paragraph",
        text: "When someone searches 'digital marketing agency near me' or 'plumber in Manchester', they have high intent and they're ready to act. Local SEO is about making sure your business appears — and appears well — when that search happens.",
      },
      {
        type: "heading",
        text: "Google Business Profile: your most important local asset",
      },
      {
        type: "paragraph",
        text: "A fully optimised, actively managed Google Business Profile drives more local visibility than almost any other single action. Complete every field, add photos regularly, respond to every review, and post updates at least once a week.",
      },
      {
        type: "heading",
        text: "The local ranking factors that matter most",
      },
      {
        type: "list",
        items: [
          "Proximity: how close is the business to the searcher",
          "Relevance: how well does your profile match the search query",
          "Prominence: reviews, citations, backlinks, and engagement signals",
          "NAP consistency: name, address, phone number must match everywhere",
        ],
      },
      {
        type: "heading",
        text: "Local link building",
      },
      {
        type: "paragraph",
        text: "Links from locally relevant websites — local press, business directories, chamber of commerce listings, sponsorships — carry significant weight for local rankings. Identify the 10–15 most authoritative local sites in your area and pursue links from each.",
      },
    ],
  },
  {
    id: "conversion-rate-optimisation-basics",
    title: "CRO Fundamentals: Turn More of Your Existing Traffic Into Customers",
    excerpt:
      "Most businesses focus on getting more traffic. The smarter move is converting more of the traffic you already have. A 1% improvement in conversion rate can double your revenue.",
    category: "Web Design",
    date: "February 10, 2026",
    isoDate: "2026-02-10",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Conversion Rate Optimisation is the practice of systematically improving the percentage of website visitors who take a desired action. It's one of the highest-leverage activities in digital marketing because the gains compound — and they don't require more ad spend.",
      },
      {
        type: "heading",
        text: "Where to start: find your biggest leaks",
      },
      {
        type: "paragraph",
        text: "Use analytics to identify where users are dropping off in your funnel. A high-traffic landing page with a 0.5% conversion rate is a bigger opportunity than a low-traffic page converting at 3%. Fix the leaks before you pump in more traffic.",
      },
      {
        type: "heading",
        text: "The highest-impact CRO changes",
      },
      {
        type: "list",
        items: [
          "Headline clarity: does the headline immediately communicate the value?",
          "Social proof placement: reviews and trust signals near the CTA",
          "Form length: remove every field that isn't strictly necessary",
          "Page speed: every second of delay costs you conversions",
          "CTA copy: 'Get My Free Quote' outperforms 'Submit' every time",
        ],
      },
      {
        type: "heading",
        text: "Test one thing at a time",
      },
      {
        type: "paragraph",
        text: "A/B testing is the most reliable way to improve conversion rate. But you must test one variable at a time with sufficient traffic to reach statistical significance. Running five simultaneous tests on a low-traffic page produces noise, not insight.",
      },
    ],
  },
  {
    id: "google-analytics-4-guide",
    title: "Making Sense of Google Analytics 4: A Practical Guide",
    excerpt:
      "GA4 is fundamentally different from Universal Analytics — and most businesses are barely scratching the surface of what it can tell them. Here's how to actually use it.",
    category: "Strategy",
    date: "February 3, 2026",
    isoDate: "2026-02-03",
    readTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "Google Analytics 4 replaced Universal Analytics in July 2023, and many businesses are still struggling with the transition. The interface is different, the data model is different, and the reports you relied on don't exist in the same form. Here's how to get oriented.",
      },
      {
        type: "heading",
        text: "The event-based model",
      },
      {
        type: "paragraph",
        text: "GA4 tracks everything as events — page views, clicks, form submissions, scroll depth, video plays. This is far more flexible than UA's session-based model, but it requires a different mental model when interpreting data.",
      },
      {
        type: "heading",
        text: "Key reports to set up first",
      },
      {
        type: "list",
        items: [
          "Conversion tracking: define your key actions and mark them as conversions",
          "Traffic acquisition: understand which channels are driving quality visitors",
          "Landing page report: identify your highest and lowest-performing entry points",
          "Funnel exploration: visualise where users are dropping out of your key journeys",
        ],
      },
      {
        type: "heading",
        text: "Connect GA4 to Google Search Console",
      },
      {
        type: "paragraph",
        text: "Linking GA4 with Search Console gives you organic keyword data directly within Analytics. This connection is invaluable for understanding which search queries are driving conversions — not just clicks.",
      },
    ],
  },
  {
    id: "meta-ads-retargeting-strategy",
    title: "How to Build a Meta Ads Retargeting Strategy That Converts",
    excerpt:
      "Most businesses run retargeting as an afterthought. Done well, it's one of the most efficient uses of paid media budget — reaching warm audiences who already know who you are.",
    category: "Digital Advertising",
    date: "January 27, 2026",
    isoDate: "2026-01-27",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Retargeting on Meta means showing ads to people who have already interacted with your brand — visited your website, engaged with your content, or watched your videos. These audiences convert at dramatically higher rates than cold audiences because the trust barrier is lower.",
      },
      {
        type: "heading",
        text: "Build segmented audiences, not one big bucket",
      },
      {
        type: "paragraph",
        text: "The biggest retargeting mistake is lumping everyone into a single audience. Someone who visited your homepage three weeks ago should see a different message than someone who added to cart yesterday. Segment by recency, page visited, and actions taken.",
      },
      {
        type: "heading",
        text: "Recommended audience segments",
      },
      {
        type: "list",
        items: [
          "Website visitors in the last 7 days — hottest intent, highest bids",
          "Product/service page visitors (not purchasers) — 30 days",
          "Video viewers (50%+ watched) — warm awareness audience",
          "Email list upload — reach existing contacts on social",
          "Cart abandoners — separate creative, urgency-led messaging",
        ],
      },
      {
        type: "heading",
        text: "Don't neglect creative fatigue",
      },
      {
        type: "paragraph",
        text: "Retargeting audiences are smaller, so your ads reach the same people repeatedly. Refresh creative every 2–3 weeks or when frequency climbs above 3–4. Stale creative actively damages brand perception with your warmest audiences.",
      },
    ],
  },
  {
    id: "brand-positioning-for-agencies",
    title: "Brand Positioning: Why 'Full-Service' Is Killing Your Agency Growth",
    excerpt:
      "Trying to be everything to everyone is the fastest way to stand out to no one. A tightly defined brand position is the foundation of every high-growth agency we've seen.",
    category: "Strategy",
    date: "January 19, 2026",
    isoDate: "2026-01-19",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "The most common positioning mistake we see from growing service businesses is radical generalism. 'We do everything for everyone' feels safe — you're not excluding any potential client. In practice, it means you win fewer pitches, attract lower-budget clients, and struggle to charge premium rates.",
      },
      {
        type: "heading",
        text: "The paradox of specificity",
      },
      {
        type: "paragraph",
        text: "The more specifically you define who you serve and what you do, the more attractive you become to that audience. A business owner who finds an agency that specialises in their exact industry, for businesses their exact size, will choose that agency over a generalist almost every time — and pay more for it.",
      },
      {
        type: "heading",
        text: "Three positioning levers",
      },
      {
        type: "list",
        items: [
          "Vertical specialisation: serve one industry deeply (e.g. legal, healthcare, e-commerce)",
          "Service specialisation: be the best at one thing rather than adequate at many",
          "Audience specialisation: define by company size, geography, or growth stage",
        ],
      },
      {
        type: "heading",
        text: "You don't have to turn away everyone else",
      },
      {
        type: "paragraph",
        text: "Strong positioning doesn't mean you literally refuse all other work. It means your marketing, your case studies, your website, and your sales conversations lead with your defined niche. The right clients self-select in — and they convert faster and pay better.",
      },
    ],
  },
];

export function getPost(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
