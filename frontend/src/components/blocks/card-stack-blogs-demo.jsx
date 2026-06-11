import { useState } from 'react';
import { CardStack } from "@/components/ui/card-stack";
import { BlogDetailModal } from "@/components/ui/blog-detail-modal";

const blogItems = [
  {
    id: 1,
    title: "Nepal's Energy Transition: Hydropower's Role in 2024",
    description: "Exploring how Sky Touch is powering Nepal's renewable energy future through strategic investments in hydroelectric projects.",
    imageSrc: "https://imperialholdings.com.np/wp-content/uploads/2026/01/landscape-view-of-hydroelectric-power-plant-free-photo.jpg",
    tag: "Energy",
    date: "January 15, 2026",
    readingTime: "8 min",
    href: "#",
    content: [
      {
        heading: "Nepal's Energy Crisis and Opportunity",
        body: "Nepal faces a critical energy deficit, with peak-hour electricity shortages affecting both industry and households. Despite abundant hydroelectric potential, the country generates less than 50% of its total electricity needs domestically. This gap presents an enormous investment opportunity for forward-thinking capital partners committed to Nepal's energy security and carbon reduction goals."
      },
      {
        heading: "Hydropower Development",
        body: "With over 83,000 MW of theoretical hydroelectric potential, Nepal has only developed about 6,000 MW to date. Sky Touch Investment has identified and invested in high-potential hydropower projects across the country, ranging from large-scale run-of-river plants to smaller community-based installations. Our portfolio focuses on projects with strong technical fundamentals, experienced management teams, and clear pathways to profitability.",
        points: [
          "Run-of-river plants with minimal environmental impact",
          "Community-based micro-hydro projects generating local employment",
          "Grid-scale installations supporting industrial and commercial loads",
          "Power purchase agreements with Nepal Electricity Authority"
        ]
      },
      {
        heading: "Renewable Energy Expansion",
        body: "Beyond hydropower, solar and wind energy are gaining traction as complementary sources. Nepal receives average annual solar radiation of 4.5 kWh/m²/day, making solar particularly attractive in the Terai and mid-hill regions. Sky Touch is actively evaluating large-scale solar installations and working with communities on distributed solar solutions.",
        points: [
          "Solar farms in high-insolation zones",
          "Rooftop solar programs for commercial buildings",
          "Wind potential assessment in mountain corridors",
          "Biogas projects from agricultural waste"
        ]
      },
      {
        heading: "Financial Returns and Impact",
        body: "Energy investments offer compelling returns through power purchase agreements, government incentives for renewable energy, and growing demand from industrial users. Investors receive predictable cash flows while contributing to Nepal's path toward energy independence and climate commitments. Our investments have consistently delivered 12-16% IRR with 7-10 year payback periods."
      }
    ]
  },
  {
    id: 2,
    title: "Real Estate Boom in Kathmandu Valley",
    description: "Market analysis of commercial and residential property investments driving Nepal's urban development in 2024.",
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tag: "Real Estate",
    date: "January 10, 2026",
    readingTime: "6 min",
    href: "#",
    content: [
      {
        heading: "Kathmandu Valley: Nepal's Growth Engine",
        body: "The Kathmandu Valley metropolitan area houses over 3 million people and serves as Nepal's economic, political, and cultural center. Rapid urbanization, migration from rural areas, and rising incomes are driving unprecedented demand for quality residential, commercial, and mixed-use properties. Sky Touch has positioned itself strategically across Kathmandu, Lalitpur, and Bhaktapur to capture this growth."
      },
      {
        heading: "Residential Market Dynamics",
        body: "The residential segment is experiencing strong growth as Nepal's middle class expands and urban professionals seek quality housing. Demand remains highest in proximity to Kathmandu's business hubs, entertainment districts, and schools. Modern apartment complexes with amenities like gyms, community spaces, and parking are commanding premium prices.",
        points: [
          "Average apartment prices: NPR 8-15 million in prime areas",
          "Rental yields: 4-6% annually in well-maintained buildings",
          "Strong occupancy rates above 95% in quality projects",
          "Increasing foreign investor interest from diaspora and expats"
        ]
      },
      {
        heading: "Commercial Real Estate Expansion",
        body: "Office space, retail centers, and hospitality properties are experiencing robust demand. The growth of IT companies, financial services, and international NGOs has created strong commercial tenant bases with long-term lease commitments. Kathmandu's prime business districts command premium rental rates."
      },
      {
        heading: "Investment Opportunities",
        body: "Sky Touch identifies projects in high-growth corridors like Thamel, Baneshwor, and emerging zones like Madhyapur Thimi. We focus on developments with strong fundamentals: quality construction, professional management, transparent ownership, and clear exit strategies. Typical residential projects deliver 15-20% annualized returns over 5-7 year hold periods."
      }
    ]
  },
  {
    id: 3,
    title: "Digital Innovation: Nepal's Tech Sector Growth",
    description: "How technology startups and digital platforms are reshaping Nepal's economy and creating investment opportunities.",
    imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    tag: "Technology",
    date: "December 28, 2025",
    readingTime: "7 min",
    href: "#",
    content: [
      {
        heading: "Tech Sector Emergence",
        body: "Nepal's technology sector is experiencing explosive growth, with startups and established IT companies driving digital transformation across finance, e-commerce, education, and healthcare. The sector employs over 50,000 professionals and generates annual exports exceeding NPR 67,500,000,000. Sky Touch recognizes technology as a critical driver of Nepal's economic evolution and has built a dedicated tech investment portfolio."
      },
      {
        heading: "Key Sub-Sectors",
        body: "Technology investments span multiple high-growth areas:",
        points: [
          "FinTech: Digital payments, lending platforms, insurance tech",
          "E-commerce: Online retail, B2B marketplaces, logistics tech",
          "EdTech: Online learning platforms, skill development apps",
          "HealthTech: Telemedicine, diagnostic platforms, health records",
          "AgriTech: Supply chain optimization, precision agriculture, farm management"
        ]
      },
      {
        heading: "Skilled Talent Pool",
        body: "Nepal has developed a strong software engineering talent pool, with universities producing thousands of graduates annually and experienced professionals returning from abroad. This talent attracts regional and global technology companies to establish development centers in Kathmandu. Competitive labor costs combined with quality talent create a compelling value proposition for high-growth tech investments."
      },
      {
        heading: "Investment Returns and Exit Opportunities",
        body: "Early-stage tech investments have delivered exceptional returns, with several successful exits to regional buyers. Sky Touch targets high-growth companies with proven business models, experienced management, and clear paths to profitability or acquisition. Typical tech investments span 3-7 years with target returns of 25-35% IRR."
      }
    ]
  },
  {
    id: 4,
    title: "Tourism Infrastructure: Building for the Future",
    description: "Strategic investments in hotels, resorts, and tourism infrastructure across Nepal's most visited destinations.",
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    tag: "Tourism",
    date: "December 20, 2025",
    readingTime: "6 min",
    href: "#",
    content: [
      {
        heading: "Nepal's Tourism Potential",
        body: "Nepal attracts over 1 million international tourists annually, drawn by Mount Everest, ancient temples, adventure trekking, and unique culture. The government aims to reach 5 million visitors by 2030, representing a 5-fold increase from pre-pandemic levels. This ambitious target creates substantial opportunities for hospitality and tourism infrastructure investment."
      },
      {
        heading: "Hotel and Resort Development",
        body: "Demand for quality accommodation ranges from budget hotels to luxury resorts. Kathmandu, Pokhara, and Chitwan are primary tourism hubs, while emerging destinations like Ilam and Janakpur offer high-growth potential. Sky Touch partners with experienced hospitality operators to develop and upgrade properties meeting international standards.",
        points: [
          "Luxury resorts in scenic locations commanding premium nightly rates",
          "Mid-range hotels in major cities targeting business and leisure travelers",
          "Adventure lodges along popular trekking routes",
          "Wellness resorts capitalizing on spiritual tourism"
        ]
      },
      {
        heading: "Adventure and Experience Infrastructure",
        body: "Beyond traditional hotels, investments in cable cars, hiking trails, adventure sports facilities, and cultural experiences are high-margin opportunities. Paragliding, white-water rafting, and cultural tours have proven highly profitable for well-managed operators."
      },
      {
        heading: "Financial Performance",
        body: "Tourism investments typically deliver 12-18% annualized returns through room revenues, food and beverage operations, and ancillary services. Many properties generate strong cash flows within 3-4 years, with payback periods of 6-8 years. Government incentives for tourism development include tax holidays and duty-free import of equipment."
      }
    ]
  },
  {
    id: 5,
    title: "Healthcare Investment: Meeting Critical Demand",
    description: "The growing demand for quality medical facilities and diagnostic centers creating lucrative investment opportunities.",
    imageSrc: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    tag: "Healthcare",
    date: "December 15, 2025",
    readingTime: "7 min",
    href: "#",
    content: [
      {
        heading: "Healthcare Sector Growth Drivers",
        body: "Nepal's healthcare sector faces critical capacity gaps while experiencing strong growth tailwinds. Rising incomes, increasing health awareness, aging population, and government emphasis on universal health coverage are driving unprecedented demand for quality medical services. Sky Touch has identified healthcare as a priority investment sector with strong long-term growth prospects."
      },
      {
        heading: "Hospital and Clinic Development",
        body: "Quality hospitals and diagnostic centers remain undersupplied relative to demand, particularly in secondary cities and rural areas. Many existing facilities lack modern equipment and trained staff. Sky Touch partners with experienced healthcare operators and international hospital chains to develop facilities meeting global standards.",
        points: [
          "Multi-specialty hospitals with 100-300 bed capacity",
          "Specialized centers (cardiac, oncology, orthopedics)",
          "Diagnostic centers with advanced imaging and laboratory capabilities",
          "Primary health clinics in underserved communities"
        ]
      },
      {
        heading: "Healthcare Services and Technology",
        body: "Beyond infrastructure, investments in healthcare technology, telemedicine platforms, medical device distribution, and specialized services offer high-margin opportunities. Digital health platforms connecting rural patients with urban specialists are gaining traction and scaling rapidly across Nepal."
      },
      {
        heading: "Financial Performance",
        body: "Quality healthcare providers generate strong, stable cash flows with gross margins typically exceeding 35%. Hospital occupancy rates of 70-85% are achievable in well-located facilities with quality services. Many healthcare investments achieve operational breakeven within 3-4 years of opening."
      }
    ]
  },
  {
    id: 6,
    title: "Agricultural Transformation Through Innovation",
    description: "Agro-processing and sustainable farming initiatives transforming Nepal's agricultural sector and rural economy.",
    imageSrc: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    tag: "Agriculture",
    date: "December 10, 2025",
    readingTime: "6 min",
    href: "#",
    content: [
      {
        heading: "Agriculture's Economic Significance",
        body: "Agriculture employs over 25% of Nepal's workforce and contributes 25-30% to GDP, though productivity lags peers significantly. Traditional farming methods, limited access to modern inputs, and poor market connectivity constrain farmer incomes. Strategic investments in agricultural modernization and agro-processing offer compelling opportunities to improve productivity while delivering strong returns."
      },
      {
        heading: "Modern Farming Practices",
        body: "Sky Touch supports adoption of improved farming techniques including high-yield varieties, precision fertilization, organic certification, and value-added processing. Successful interventions have increased yields by 40-60% while reducing input costs.",
        points: [
          "Vegetable production with greenhouse technology",
          "Organic farming for premium market access",
          "Spice cultivation and value addition",
          "Dairy operations with improved genetics and nutrition",
          "Fruits including citrus, pomegranate, and berries"
        ]
      },
      {
        heading: "Agro-Processing and Value Addition",
        body: "Processing agricultural products domestically rather than exporting raw commodities significantly increases value capture. Investments in food processing, cold storage, drying facilities, and packaging create employment while improving farmer incomes. Organic spice processing, tea packaging, and vegetable canning offer high-margin opportunities."
      },
      {
        heading: "Financial Returns and Impact",
        body: "Agricultural investments typically deliver 15-22% returns while transforming rural livelihoods. Government support includes subsidized credit, input subsidies, and buyer commitments for improved varieties. Investments in agricultural modernization create rural employment, reduce urban migration pressures, and enhance food security."
      }
    ]
  },
];

export function CardStackBlogsDemo() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCardClick = (index, item, isActive) => {
    if (isActive) {
      // Double click on active card = open modal
      setClickCount(prev => {
        const newCount = prev + 1;
        if (newCount === 2) {
          handlePostClick(item);
          return 0;
        }
        return newCount;
      });
      // Reset double-click counter after 300ms
      setTimeout(() => setClickCount(0), 300);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mx-auto w-full max-w-5xl px-6">
          <CardStack
            items={blogItems}
            initialIndex={0}
            autoAdvance={false}
            pauseOnHover={true}
            showDots={true}
            cardWidth={450}
            cardHeight={300}
            onChangeIndex={(idx) => setActiveIndex(idx)}
            renderCard={(item, { active }) => (
              <div 
                className="relative h-full w-full cursor-pointer"
                onClick={() => handleCardClick(blogItems.indexOf(item), item, active)}
                onDoubleClick={() => active && handlePostClick(item)}
              >
                <div className="absolute inset-0">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <div className="mb-3 inline-block w-fit rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-white">
                    {item.tag}
                  </div>
                  <div className="truncate text-xl font-bold text-white mb-2">
                    {item.title}
                  </div>
                  <div className="line-clamp-2 text-sm text-white/80 mb-4">
                    {item.description}
                  </div>
                  <div className="text-xs text-white/60">
                    {active ? "Double-click to read full article →" : "Click to scroll"}
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <BlogDetailModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default CardStackBlogsDemo;
