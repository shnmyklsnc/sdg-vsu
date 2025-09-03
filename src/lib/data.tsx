import { Globe, Home, Newspaper, PenTool, Stamp } from "lucide-react";
import {
  Article,
  Document,
  ImpactRankingsYear,
  NavItem,
  SDG,
  SDGTimeline,
} from "./types";

export const impactRankingsYearData: ImpactRankingsYear[] = [
  {
    id: 1,
    year: new Date(2024, 0, 1).getFullYear(),
  },
  {
    id: 2,
    year: new Date(2025, 0, 1).getFullYear(),
  },
];

export const sdgs: SDG[] = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    image: "/sdgs/1.png",
    color: "rgba(229, 35, 51, 0.78)",
    metrics: [
      {
        id: "1.1",
        name: "Research on poverty",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "1.1.1",
            name: "Papers co-authored with low or lower-middle income countries",
            dataSource: "bibliometric",
          },
          {
            id: "1.1.2",
            name: "No poverty FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "1.1.3",
            name: "No poverty publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "1.1",
        name: "Research on poverty",
        impactRankingsYear: 2,
        indicators: [
          {
            id: "1.1.1",
            name: "Papers co-authored with low or lower-middle income countries",
            dataSource: "bibliometric",
          },
          {
            id: "1.1.2",
            name: "No poverty FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "1.1.3",
            name: "No poverty publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "1.2",
        name: "Proportion of low income students receiving financial aid to attend university because of poverty",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "1.2.1",
            name: "Low-income students receiving financial aid",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "1.3",
        name: "University anti-poverty programmes",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "1.3.1",
            name: "Bottom financial quintile admission target",
            dataSource: "evidence",
          },
          {
            id: "1.3.2",
            name: "Bottom financial quintile student success",
            dataSource: "evidence",
          },
          {
            id: "1.3.3",
            name: "Low-income student support",
            dataSource: "evidence",
          },
          {
            id: "1.3.4",
            name: "Bottom financial quintile student support",
            dataSource: "evidence",
          },
          {
            id: "1.3.5",
            name: "Low or lower-middle income countries student support",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "1.4",
        name: "Community anti-poverty programmes",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "1.4.1",
            name: "Local start-up assistance",
            dataSource: "evidence",
          },
          {
            id: "1.4.2",
            name: "Local start-up financial assistance",
            dataSource: "evidence",
          },
          {
            id: "1.4.3",
            name: "Programmes for services access",
            dataSource: "evidence",
          },
          {
            id: "1.4.4",
            name: "Policy-making addressing poverty",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU's flagship Barangay Integrated Development Approach for Nutrition Improvement (BIDANI) program has operated for over 37 years, partnering with multiple local governments to implement data-driven poverty targeting. The program received recognition awards in 2023 at the BIDANI National Convention for its measurable poverty reduction outcomes in communities like Baybay City and Ormoc City.",
  },
  {
    id: 2,
    title: "Zero Hunger",
    description:
      "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
    image: "/sdgs/2.png",
    color: "rgba(221, 167, 58, 0.78)",
    metrics: [
      {
        id: "2.1",
        name: "Research on hunger",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "2.1.1",
            name: "Zero hunger CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "2.1.2",
            name: "Zero hunger FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "2.1.3",
            name: "Zero hunger publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "2.2",
        name: "Campus food waste",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "2.2.1",
            name: "Campus food waste tracking",
            dataSource: "evidence",
          },
          {
            id: "2.2.2",
            name: "Campus food waste",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "2.3",
        name: "Student hunger",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "2.3.1",
            name: "Student food insecurity and hunger",
            dataSource: "evidence",
          },
          {
            id: "2.3.2",
            name: "Students hunger interventions",
            dataSource: "evidence",
          },
          {
            id: "2.3.3",
            name: "Sustainable food choices on campus",
            dataSource: "evidence",
          },
          {
            id: "2.3.4",
            name: "Healthy and affordable food choices",
            dataSource: "evidence",
          },
          {
            id: "2.3.5",
            name: "Staff hunger interventions",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "2.4",
        name: "Proportion of graduates in agriculture and aquaculture including sustainability aspects",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "2.4.1",
            name: "Proportion of graduates in agriculture and aquaculture",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "2.5",
        name: "National hunger",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "2.5.1",
            name: "Access to food security knowledge",
            dataSource: "evidence",
          },
          {
            id: "2.5.2",
            name: "Events for local farmers and food producers",
            dataSource: "evidence",
          },
          {
            id: "2.5.3",
            name: "University access to local farmers and food producers",
            dataSource: "evidence",
          },
          {
            id: "2.5.4",
            name: "Sustainable food purchases",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "The Philippine Root Crops Research and Training Center (PhilRootcrops) at VSU develops high-yielding, climate-tolerant root crop varieties and commercializable by-products for food security. VSU established the first Sweet Potato Processing Center in the Visayas, pioneering zero-waste processing technology for multiple food products including Pinoy Fries, ice cream, and chips.",
  },
  {
    id: 3,
    title: "Good Health and Well-Being",
    description:
      "Ensure healthy lives and promote well-being for all at all ages",
    image: "/sdgs/3.png",
    color: "rgba(76, 161, 70, 0.78)",
    metrics: [
      {
        id: "3.1",
        name: "Research on health and well-being",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "3.1.1",
            name: "Good health and well-being paper views",
            dataSource: "bibliometric",
          },
          {
            id: "3.1.2",
            name: "Clinical citations",
            dataSource: "bibliometric",
          },
          {
            id: "3.1.3",
            name: "Good health and well-being publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "3.2",
        name: "Number of students graduating in health professions",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "3.2.1",
            name: "Proportion of graduates in health professions",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "3.3",
        name: "Collaborations and health services",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "3.3.1",
            name: "Current collaborations with health institutions",
            dataSource: "evidence",
          },
          {
            id: "3.3.2",
            name: "Health outreach programmes",
            dataSource: "evidence",
          },
          {
            id: "3.3.3",
            name: "Shared sports facilities",
            dataSource: "evidence",
          },
          {
            id: "3.3.4",
            name: "Free sexual health care for students",
            dataSource: "evidence",
          },
          {
            id: "3.3.5",
            name: "Mental health support for students",
            dataSource: "evidence",
          },
          {
            id: "3.3.6",
            name: "Smoke-free policy",
            dataSource: "evidence",
          },
          {
            id: "3.3.7",
            name: "Mental health support for staff",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU's College of Nursing maintains over 80% licensure exam passing rates while focusing on health promotion and disease prevention in rural and urban settings. The university implements health initiatives including BIDANI's nutrition programs and a campus-wide wellness week addressing physical and emotional well-being of students and faculty.",
  },
  {
    id: 4,
    title: "Quality Education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    image: "/sdgs/4.png",
    color: "rgba(197, 25, 45, 0.78)",
    metrics: [
      {
        id: "4.1",
        name: "Research on early years and lifelong learning education",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "4.1.1",
            name: "Quality eduation paper views",
            dataSource: "bibliometric",
          },
          {
            id: "4.1.2",
            name: "Quality education CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "4.1.3",
            name: "Quality education publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "4.2",
        name: "Proportion of graduates with teaching qualification",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "4.2.1",
            name: "Proportion of graduates with relevant qualification for teaching",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "4.3",
        name: "Lifelong learning measures",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "4.3.1",
            name: "Public resources (lifelong learning)",
            dataSource: "evidence",
          },
          {
            id: "4.3.2",
            name: "Public events (lifelong learning)",
            dataSource: "evidence",
          },
          {
            id: "4.3.3",
            name: "Vocational training events (lifelong learning)",
            dataSource: "evidence",
          },
          {
            id: "4.3.4",
            name: "Education outreach activities beyond campus",
            dataSource: "evidence",
          },
          {
            id: "4.3.5",
            name: "Lifelong learning access policy",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "4.4",
        name: "Proportion of first-generation students",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "4.4.1",
            name: "Proportion of first generation students",
            dataSource: "portal",
          },
        ],
      },
    ],
    overview:
      "VSU ranked 2nd among all Philippine higher education institutions in SDG 4 according to the Times Higher Education Impact Rankings 2022. The university operates as a comprehensive five-campus system serving over 7,600 students with 589 faculty members, designated by CHED as a Center of Excellence in Agriculture and Agricultural Engineering.",
  },
  {
    id: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    image: "/sdgs/5.png",
    color: "rgba(239, 64, 44, 0.78)",
    metrics: [
      {
        id: "5.1",
        name: "Research on gender equality",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "5.1.1",
            name: "Proportion of research with female authors",
            dataSource: "bibliometric",
          },
          {
            id: "5.1.2",
            name: "Gender equality CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "5.1.3",
            name: "Gender equality publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "5.2",
        name: "Proportion of first-generation female students",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "5.2.1",
            name: "Proportion of women first generation",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "5.3",
        name: "Student access measures",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "5.3.1",
            name: "Tracking access measures",
            dataSource: "evidence",
          },
          {
            id: "5.3.2",
            name: "Policy for women applications and entry",
            dataSource: "evidence",
          },
          {
            id: "5.3.3",
            name: "Women's access schemes",
            dataSource: "evidence",
          },
          {
            id: "5.3.4",
            name: "Women'sapplication in underrepresented subjects",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "5.4",
        name: "Proportion of senior female academics",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "5.4.1",
            name: "Proportion of senior female academics",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "5.5",
        name: "Proportion of women receiving degrees",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "5.5.1",
            name: "Proportion of female degrees awarded",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "5.6",
        name: "Women's progress measures",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "5.6.1",
            name: "Policy of non-discrimination against women",
            dataSource: "evidence",
          },
          {
            id: "5.6.2",
            name: "Non-discrimination policies for transgender",
            dataSource: "evidence",
          },
          {
            id: "5.6.3",
            name: "Maternity policy",
            dataSource: "evidence",
          },
          {
            id: "5.6.4",
            name: "Childcare facilities for students",
            dataSource: "evidence",
          },
          {
            id: "5.6.5",
            name: "Childcare facilities for staff and faculty",
            dataSource: "evidence",
          },
          {
            id: "5.6.6",
            name: "Women's monitoring schemes",
            dataSource: "evidence",
          },
          {
            id: "5.6.7",
            name: "Track women's graduation rate",
            dataSource: "evidence",
          },
          {
            id: "5.6.8",
            name: "Policies protecting those reporting discrimination",
            dataSource: "evidence",
          },
          {
            id: "5.6.9",
            name: "Paternity policy",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU remains the only higher education institution in Eastern Visayas consistently endorsed by the Philippine Commission on Women for its Gender and Development Plan and Budget. The university implements initiatives including support systems for female students, gender-inclusive curricula, and programs addressing sexual harassment, reproductive health, and gender-based violence.",
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all",
    image: "/sdgs/6.png",
    color: "rgba(39, 191, 230, 0.78)",
    metrics: [
      {
        id: "6.1",
        name: "Research on water",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "6.1.1",
            name: "Clean water and sanitation CiteSource",
            dataSource: "bibliometric",
          },
          {
            id: "6.1.2",
            name: "Clean water and sanitation FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "6.1.3",
            name: "Clean water and sanitation publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "6.2",
        name: "Water consumption per person",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "6.2.2",
            name: "Water consumption per person",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "6.3",
        name: "Water usage and care",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "6.3.1",
            name: "Waste water treatment",
            dataSource: "evidence",
          },
          {
            id: "6.3.2",
            name: "Preventing water system pollution",
            dataSource: "evidence",
          },
          {
            id: "6.3.3",
            name: "Free drinking water provided",
            dataSource: "evidence",
          },
          {
            id: "6.3.4",
            name: "Water-conscious building standards",
            dataSource: "evidence",
          },
          {
            id: "6.3.5",
            name: "Water-conscious planting",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "6.4",
        name: "Water reuse",
        impactRankingsYear: 1,
        indicators: [
          { id: "6.4.1", name: "Water reuse policy", dataSource: "evidence" },
          {
            id: "6.4.2",
            name: "Water reuse measurement",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "6.5",
        name: "Water in the community",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "6.5.1",
            name: "Water management educational opportunities",
            dataSource: "evidence",
          },
          {
            id: "6.5.3",
            name: "Off-campus water conservation support",
            dataSource: "evidence",
          },
          {
            id: "6.5.4",
            name: "Sustainable water extraction on campus",
            dataSource: "evidence",
          },
          {
            id: "6.5.5",
            name: "Cooperation on water security",
            dataSource: "evidence",
          },
          {
            id: "6.5.6",
            name: "Promoting conscious water usage on campus",
            dataSource: "evidence",
          },
          {
            id: "6.5.1",
            name: "Promoting conscious water usage in the community",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU hosted WHO-funded water quality testing training for 29 regional laboratory personnel as part of post-Typhoon Yolanda recovery efforts. The university's infrastructure projects incorporate rain-harvesting facilities, contributing to its global ranking in the 301-400 bracket for SDG 6 in the Times Higher Education Impact Rankings.",
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    description:
      "Ensure access to affordable, reliable, sustainable and modern energy for all",
    image: "/sdgs/7.png",
    color: "rgba(251, 196, 18, 0.78)",
    metrics: [
      {
        id: "7.1",
        name: "Research on clean energy",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "7.1.1",
            name: "Affordable and clean energy CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "7.1.2",
            name: "Affordable and clean energy FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "7.1.3",
            name: "Clean water and sanitation publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "7.2",
        name: "University measures towards affordable and clean energy",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "7.2.1",
            name: "Energy-efficient renovation and building",
            dataSource: "evidence",
          },
          {
            id: "7.2.2",
            name: "Upgrade buildings to higher energy efficiency",
            dataSource: "evidence",
          },
          {
            id: "7.2.3",
            name: "Carbon reduction and emission reduction process",
            dataSource: "evidence",
          },
          {
            id: "7.2.4",
            name: "Plan to reduce energy consumption",
            dataSource: "evidence",
          },
          {
            id: "7.2.5",
            name: "Energy waste identification",
            dataSource: "evidence",
          },
          {
            id: "7.2.6",
            name: "Divestment policy",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "7.3",
        name: "Energy use density",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "7.3.1",
            name: "Energy usage per square meter",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "7.4",
        name: "Energy and the community",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "7.4.1",
            name: "Local community outreach for energy efficiency",
            dataSource: "evidence",
          },
          {
            id: "7.4.2",
            name: "100% renewable energy pledge",
            dataSource: "evidence",
          },
          {
            id: "7.4.3",
            name: "Energy efficiency services for industry",
            dataSource: "evidence",
          },
          {
            id: "7.4.4",
            name: "Policy development for clean energy technology",
            dataSource: "evidence",
          },
          {
            id: "7.4.5",
            name: "Assistance to low-carbon innovation",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "7.5",
        name: "Low carbon energy use",
        impactRankingsYear: 1,
        indicators: [
          { id: "7.5.1", name: "Low-carbon energy use", dataSource: "portal" },
        ],
      },
    ],
    overview:
      "VSU's College of Engineering and Technology is establishing an Energy Park showcasing renewable technology applications across campus. The university integrates solar panels in new infrastructure projects while its Agricultural and Biosystems Engineering program researches renewable energy applications for sustainable agricultural systems.",
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    description:
      "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
    image: "/sdgs/8.png",
    color: "rgba(163, 28, 68, 0.78)",
    metrics: [
      {
        id: "8.1",
        name: "Research on economic growth and employment",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "8.1.1",
            name: "Decent work and economic growth: CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "8.1.2",
            name: "Decent work and economic growth publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "8.2",
        name: "Employment practice",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "8.2.1",
            name: "Employment practice living wage",
            dataSource: "evidence",
          },
          {
            id: "8.2.2",
            name: "Employment practice unions",
            dataSource: "evidence",
          },
          {
            id: "8.2.3",
            name: "Employment policy on discrimination",
            dataSource: "evidence",
          },
          {
            id: "8.2.4",
            name: "Employment policy modern slavery",
            dataSource: "evidence",
          },
          {
            id: "8.2.5",
            name: "Employment practice equivalent rights outsourcing",
            dataSource: "evidence",
          },
          {
            id: "8.2.6",
            name: "Employment policy pay scale equity",
            dataSource: "evidence",
          },
          {
            id: "8.2.7",
            name: "Tracking pay scale for gender equity",
            dataSource: "evidence",
          },
          {
            id: "8.2.8",
            name: "Employment practice appeal process",
            dataSource: "evidence",
          },
          {
            id: "8.2.9",
            name: "Employment practice labour right",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "8.3",
        name: "Expenditure per employee",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "8.3.1",
            name: "Expenditure per employee",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "8.4",
        name: "Proportion of students taking work placements",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "8.4.1",
            name: "Proportion of students with work placements",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "8.5",
        name: "Proportion of employees on secure contracts",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "8.5.1",
            name: "Proportion of employees on secure contracts",
            dataSource: "portal",
          },
        ],
      },
    ],
    overview:
      "VSU partners with the Department of Social Welfare and Development to implement the Sustainable Livelihood Program for skills development and income generation in regional communities. The university convenes tripartite partnerships between local government units, industries, and academia to drive strategic planning and local industrial development.",
  },
  {
    id: 9,
    title: "Industry, Innovation, and Infrastructure",
    description:
      "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    image: "/sdgs/9.png",
    color: "rgba(242, 106, 45, 0.78)",
    metrics: [
      {
        id: "9.1",
        name: "Research on industry, innovation and infrastructure",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "9.1.1",
            name: "Industry innovation and infrastructure publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "9.2",
        name: "Patents citing university research",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "9.2.1",
            name: "Number of patents citing research",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "9.3",
        name: "University spin offs",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "9.3.1",
            name: "Number of university spin offs",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "9.4",
        name: "Research income from industry",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "9.4.1",
            name: "Research income per academic staff",
            dataSource: "portal",
          },
        ],
      },
    ],
    overview:
      "VSU operates advanced research facilities including the Innovation Center and the Advanced Research and Innovation Center housing sophisticated laboratory equipment for biotechnology and data analytics research. The university's Technology Business Incubator has successfully launched 13 agricultural startups with ₱13.5 million in funding, providing facilities for business acceleration and market linkages.",
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    image: "/sdgs/10.png",
    color: "rgba(224, 20, 131, 0.78)",
    metrics: [
      {
        id: "10.1",
        name: "Research on reduced inequalities",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "10.1.1",
            name: "Reduced inequalities CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "10.1.2",
            name: "Reduced inequalities FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "10.1.3",
            name: "Reduced inequalities publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "10.2",
        name: "First-generation students",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "10.2.1",
            name: "Proportion of first-generation students",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "10.3",
        name: "Students from developing countries",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "10.3.1",
            name: "Proportion of international students from developing countries",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "10.4",
        name: "Proportion of students with disabilities",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "10.4.1",
            name: "Proportion of students with disabilities",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "10.5",
        name: "Proportion of employees with disabilities",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "10.5.1",
            name: "Proportion of employees with disabilities",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "10.6",
        name: "Measures against discrimination",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "10.6.1",
            name: "Non-discriminatory admissions policy",
            dataSource: "evidence",
          },
          {
            id: "10.6.2",
            name: "Access to university track underrepresented groups applications",
            dataSource: "evidence",
          },
          {
            id: "10.6.3",
            name: "Access to university underrepresented groups recruit",
            dataSource: "evidence",
          },
          {
            id: "10.6.4",
            name: "Anti-discrimination policies",
            dataSource: "evidence",
          },
          {
            id: "10.6.5",
            name: "University diversity officer",
            dataSource: "evidence",
          },
          {
            id: "10.6.6",
            name: "Support for underrepresented groups",
            dataSource: "evidence",
          },
          {
            id: "10.6.7",
            name: "Accessible facilities",
            dataSource: "evidence",
          },
          {
            id: "10.6.8",
            name: "Disability support services",
            dataSource: "evidence",
          },
          {
            id: "10.6.9",
            name: "Disability access scheme",
            dataSource: "evidence",
          },
          {
            id: "10.6.10",
            name: "Disability accomodation policy",
            dataSource: "evidence",
          },
          {
            id: "10.6.11",
            name: "Anti-harassment policies",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU's BIDANI program has reduced malnutrition prevalence by 82% in covered villages through integrated community development strategies. The Institute of Strategic Research and Development Studies leads initiatives for rural poverty alleviation, local governance improvement, and human capital development targeting marginalized communities.",
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    description:
      "Make cities and human settlements inclusive, safe, resilient and sustainable",
    image: "/sdgs/11.png",
    color: "rgba(248, 157, 42, 0.78)",
    metrics: [
      {
        id: "11.1",
        name: "Research on sustainable cities and communities",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "11.1.1",
            name: "Sustainable cities and communities CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "11.1.2",
            name: "Sustainable cities and communities FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "11.1.3",
            name: "Sustainable cities and communities publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "11.2",
        name: "Support of arts and heritage",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "11.2.1",
            name: "Public access to buildings",
            dataSource: "evidence",
          },
          {
            id: "11.2.2",
            name: "Public acccess to libraries",
            dataSource: "evidence",
          },
          {
            id: "11.2.3",
            name: "Public acccess to museums",
            dataSource: "evidence",
          },
          {
            id: "11.2.4",
            name: "Public access to green spaces",
            dataSource: "evidence",
          },
          {
            id: "11.2.5",
            name: "Arts and heritage contribution",
            dataSource: "evidence",
          },
          {
            id: "11.2.6",
            name: "Record and preserve cultural heritage",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "11.3",
        name: "Expenditure on arts and heritage",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "11.3.1",
            name: "Arts and heritage expenditure",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "11.4",
        name: "Sustainable practices",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "11.4.1",
            name: "Sustainable practices targets",
            dataSource: "evidence",
          },
          {
            id: "11.4.2",
            name: "Promote sustainable commuting",
            dataSource: "evidence",
          },
          {
            id: "11.4.3",
            name: "Allow remote working",
            dataSource: "evidence",
          },
          {
            id: "11.4.4",
            name: "Affordable housing for employees",
            dataSource: "evidence",
          },
          {
            id: "11.4.5",
            name: "Affordable housing for students",
            dataSource: "evidence",
          },
          {
            id: "11.4.6",
            name: "Pedestrian priority on campus",
            dataSource: "evidence",
          },
          {
            id: "11.4.7",
            name: "Local authority collaboration regarding planning and development",
            dataSource: "evidence",
          },
          {
            id: "11.4.8",
            name: "Planning development - new build standards",
            dataSource: "evidence",
          },
          {
            id: "11.4.9",
            name: "Building on brownfield sites",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU implements major infrastructure developments under its 10-year Land Use Development and Infrastructure Plan, including the ₱40 million Digital Learning Spaces Center. The university's BIDANI program partners with local governments to provide technical assistance for barangay development planning and disaster risk reduction management, particularly supporting post-Typhoon Yolanda rehabilitation efforts.",
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns",
    image: "/sdgs/12.png",
    color: "rgba(191, 141, 44, 0.78)",
    metrics: [
      {
        id: "12.1",
        name: "Research on responsible consumption and production",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "12.1.1",
            name: "Responsible consumption and production CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "12.1.2",
            name: "Responsible consumption and production FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "12.1.3",
            name: "Responsible consumption and production publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "12.2",
        name: "Operational measures",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "12.2.1",
            name: "Ethical sourcing policy",
            dataSource: "evidence",
          },
          {
            id: "12.2.3",
            name: "Policy waste disposal - hazardous materials",
            dataSource: "evidence",
          },
          {
            id: "12.2.4",
            name: "Policy waste disposal - landfill policy",
            dataSource: "evidence",
          },
          {
            id: "12.2.5",
            name: "Policy for minimisation of plastic use",
            dataSource: "evidence",
          },
          {
            id: "12.2.6",
            name: "Policy for minimisation of disposable items",
            dataSource: "evidence",
          },
          {
            id: "12.2.7",
            name: "Disposable policy: extensions to services",
            dataSource: "evidence",
          },
          {
            id: "12.2.8",
            name: "Minimisation policies extended to suppliers",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "12.3",
        name: "Proportion of recycled waste",
        impactRankingsYear: 1,
        indicators: [
          { id: "12.3.1", name: "Waste tracking", dataSource: "evidence" },
          {
            id: "12.3.2",
            name: "Proportion of waste recycled",
            dataSource: "portal",
          },
        ],
      },
      {
        id: "12.4",
        name: "Publication of sustainability report",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "12.4.1",
            name: "Publication of sustainability report",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "PhilRootcrops develops climate-tolerant crop varieties and sustainable agricultural technologies ready for commercialization under the One Town, One Product program. VSU has established comprehensive waste management policies implementing segregation at source and composting while operating the Sweet Potato Processing Center that promotes zero-waste technologies for rural farmers.",
  },
  {
    id: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts",
    image: "/sdgs/13.png",
    color: "rgba(64, 127, 70, 0.78)",
    metrics: [
      {
        id: "13.1",
        name: "Research on climate action",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "13.1.1",
            name: "Climate action CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "13.1.2",
            name: "Climate action FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "13.1.3",
            name: "Climate action publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "13.2",
        name: "Low carbon energy use",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "13.2.1",
            name: "Low-carbon energy tracking",
            dataSource: "evidence",
          },
          { id: "13.2.2", name: "Low-carbon energy use", dataSource: "portal" },
        ],
      },
      {
        id: "13.3",
        name: "Environmental education measures",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "13.3.1",
            name: "Local education programmes on climate",
            dataSource: "evidence",
          },
          {
            id: "13.3.2",
            name: "Climate action plan shared",
            dataSource: "evidence",
          },
          {
            id: "13.3.3",
            name: "Cooperative planning for climate change disasters",
            dataSource: "evidence",
          },
          {
            id: "13.3.4",
            name: "Inform and support government",
            dataSource: "evidence",
          },
          {
            id: "13.3.5",
            name: "Environmental education collaborate with NGOs",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "13.4",
        name: "Commitment to carbon neutral university",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "13.4.1",
            name: "Commitment to carbon-neutral university",
            dataSource: "evidence",
          },
          {
            id: "13.4.2",
            name: "Cabon neutrality: achieve by date",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU pioneered rainforestation technology using native species to rehabilitate degraded watersheds, now adopted nationally by the Department of Environment and Natural Resources. University faculty actively research climate resilient agriculture, presenting studies on farming adaptations and ecosystem services in typhoon-prone communities.",
  },
  {
    id: 14,
    title: "Life Below Water",
    description:
      "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
    image: "/sdgs/14.png",
    color: "rgba(31, 151, 212, 0.78)",
    metrics: [
      {
        id: "14.1",
        name: "Research on life below water",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "14.1.1",
            name: "Life below water CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "14.1.2",
            name: "Life below water FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "14.1.3",
            name: "Life below water publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "14.2",
        name: "Supporting aquatic ecosystems through education",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "14.2.1",
            name: "Fresh-water ecosystems (community outreach)",
            dataSource: "evidence",
          },
          {
            id: "14.2.2",
            name: "Sustainable fisheries (community outreach)",
            dataSource: "evidence",
          },
          {
            id: "14.2.3",
            name: "Overfishing (community outreach)",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "14.3",
        name: "Supporting aquatic ecosystems through action",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "14.3.1",
            name: "Conservation and sustainable utilisation of the oceans (events)",
            dataSource: "evidence",
          },
          {
            id: "14.3.2",
            name: "Food from aquatic ecosystems (policies)",
            dataSource: "evidence",
          },
          {
            id: "14.3.3",
            name: "Maintain ecosystems and their biodiversity (direct work)",
            dataSource: "evidence",
          },
          {
            id: "14.3.4",
            name: "Technologies towards aquatic ecosystems damage prevention (direct work)",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "14.4",
        name: "Water sensitive waste disposal",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "14.4.1",
            name: "Water discharge guidelines and standards",
            dataSource: "evidence",
          },
          {
            id: "14.4.2",
            name: "Action plan to reducing plastic waste",
            dataSource: "evidence",
          },
          {
            id: "14.4.3",
            name: "Reducing marine pollution (policy)",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "14.5",
        name: "Maintaining a local ecosystem",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "14.5.1",
            name: "Minimizing alteration of aquatic ecosystems (plan)",
            dataSource: "evidence",
          },
          {
            id: "14.5.2",
            name: "Monitoring the health of aquatic ecosystems",
            dataSource: "evidence",
          },
          {
            id: "14.5.3",
            name: "Programs towards good aquatic stewardship practices",
            dataSource: "evidence",
          },
          {
            id: "14.5.4",
            name: "Collaboration for shared aquatic ecosystems",
            dataSource: "evidence",
          },
          {
            id: "14.5.5",
            name: "Watershed management strategy",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU's Department of Biological Sciences developed the first ecosystem health scorecard in the Visayas for the Pagbanganan River in collaboration with national and international partners. The university conducts extensive coral reef research, with faculty receiving awards for studies in Cuatro Islas and students documenting reef fish diversity with significant resource management implications.",
  },
  {
    id: 15,
    title: "Life On Land",
    description:
      "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
    image: "/sdgs/15.png",
    color: "rgba(89, 186, 72, 0.78)",
    metrics: [
      {
        id: "15.1",
        name: "Research on land ecosystems",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "15.1.1",
            name: "Life on land CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "15.1.2",
            name: "Life on land FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "15.1.3",
            name: "Life on land publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "15.2",
        name: "Supporting land ecosystems through education",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "15.2.1",
            name: "Events about sustainable use of land",
            dataSource: "evidence",
          },
          {
            id: "15.2.2",
            name: "Sustainably farmed food on campus",
            dataSource: "evidence",
          },
          {
            id: "15.2.3",
            name: "Maintain and extend current ecosystems' biodiversity",
            dataSource: "evidence",
          },
          {
            id: "15.2.4",
            name: "Educational programmes on ecosystems",
            dataSource: "evidence",
          },
          {
            id: "15.2.5",
            name: "Sustainable management of land for agriculture (educational outreach)",
            dataSource: "evidence",
          },
          {
            id: "15.2.6",
            name: "Sustainable management of land for tourism (educational outreach)",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "15.3",
        name: "Supporting land ecosystems through action",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "15.3.1",
            name: "Sustainable use, conservation and restoration of land (policy)",
            dataSource: "evidence",
          },
          {
            id: "15.3.2",
            name: "Monitoring IUCN and other conservation species (policies)",
            dataSource: "evidence",
          },
          {
            id: "15.3.3",
            name: "Local biodiversity included in planning and development",
            dataSource: "evidence",
          },
          {
            id: "15.3.4",
            name: "Alien species impact reduction (policies)",
            dataSource: "evidence",
          },
          {
            id: "15.3.5",
            name: "Collaboration for shared land ecosystems",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "15.4",
        name: "Land sensitive waste disposal",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "15.4.1",
            name: "Water discharge guidelines and standards",
            dataSource: "evidence",
          },
          {
            id: "15.4.2",
            name: "Policy on plastic waste reduction",
            dataSource: "evidence",
          },
          {
            id: "15.4.3",
            name: "Policy on hazardous waste disposal",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU's campus houses the Natural History Museum with 43,000 arthropod specimens documenting numerous IUCN Red List threatened and endemic species. University researchers have discovered new species named after former leadership while successfully releasing 13 endangered Pinsker's hawk-eagles back to the wild through conservation programs.",
  },
  {
    id: 16,
    title: "Peace, Justice, and Strong Institutions",
    description:
      "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
    image: "/sdgs/16.png",
    color: "rgba(18, 106, 159, 0.78)",
    metrics: [
      {
        id: "16.1",
        name: "Research on peace and justice",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "16.1.1",
            name: "Peace, justice, and strong institutions CiteScore",
            dataSource: "bibliometric",
          },
          {
            id: "16.1.2",
            name: "Peace, justice, and strong institutions FWCI",
            dataSource: "bibliometric",
          },
          {
            id: "16.1.3",
            name: "Peace, justice, and strong institutions FWCI",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "16.2",
        name: "University governance measures",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "16.2.1",
            name: "Elected representation",
            dataSource: "evidence",
          },
          {
            id: "16.2.2",
            name: "Students' union",
            dataSource: "evidence",
          },
          {
            id: "16.2.3",
            name: "Identify and engage with local stakeholders",
            dataSource: "evidence",
          },
          {
            id: "16.2.4",
            name: "Participatory bodies for stakeholder engagement",
            dataSource: "evidence",
          },
          {
            id: "16.2.5",
            name: "University principles on corruption and bribery",
            dataSource: "evidence",
          },
          {
            id: "16.2.6",
            name: "Academic freedom policy",
            dataSource: "evidence",
          },
          {
            id: "16.2.7",
            name: "Publish financial data",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "16.3",
        name: "Working with government",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "16.3.1",
            name: "Provide expert advice to government",
            dataSource: "evidence",
          },
          {
            id: "16.3.2",
            name: "Policy-makers and lawmakers outreach and education",
            dataSource: "evidence",
          },
          {
            id: "16.3.3",
            name: "Participation in government research",
            dataSource: "evidence",
          },
          {
            id: "16.3.4",
            name: "Neutral platform to discuss issues",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "16.4",
        name: "Proportion of graduates in law and civil enforcement",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "16.4.1",
            name: "Proportion of graduates in law",
            dataSource: "portal",
          },
        ],
      },
    ],
    overview:
      "VSU's Institute for Strategic Research and Development Studies participates in international transparency initiatives and governance workshops, with leadership representing Asia-Pacific in global ethics forums. The university maintains robust public disclosure policies through its 'Transparency Seal' providing access to financial reports and organizational information in compliance with national accountability standards.",
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    description:
      "Strengthen the means of implementation and revitalize the global partnership for sustainable development",
    image: "/sdgs/17.png",
    color: "rgba(19, 73, 107, 0.78)",
    metrics: [
      {
        id: "17.1",
        name: "Research into partnership for the goals",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "17.1.1",
            name: "Proportion of output co-authored with low-income countries",
            dataSource: "bibliometric",
          },
          {
            id: "17.1.2",
            name: "Partnership for the goals publications",
            dataSource: "bibliometric",
          },
        ],
      },
      {
        id: "17.2",
        name: "Relationships to support the goals",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "17.2.1",
            name: "Relationships with NGOs and government for SDG policy",
            dataSource: "evidence",
          },
          {
            id: "17.2.2",
            name: "Cross-sectoral dialogue about SDGs",
            dataSource: "evidence",
          },
          {
            id: "17.2.3",
            name: "International collaboration data gathering for SDG",
            dataSource: "evidence",
          },
          {
            id: "17.2.4",
            name: "Collaboration for SDG best practice",
            dataSource: "evidence",
          },
          {
            id: "17.2.5",
            name: "Collaboration with NGOs for SDGs",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "17.3",
        name: "Publication of SDG reports",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "17.3.1",
            name: "Publication of SDG report: SDG1",
            dataSource: "evidence",
          },
          {
            id: "17.3.2",
            name: "Publication of SDG report: SDG2",
            dataSource: "evidence",
          },
          {
            id: "17.3.3",
            name: "Publication of SDG report: SDG3",
            dataSource: "evidence",
          },
          {
            id: "17.3.4",
            name: "Publication of SDG report: SDG4",
            dataSource: "evidence",
          },
          {
            id: "17.3.5",
            name: "Publication of SDG report: SDG5",
            dataSource: "evidence",
          },
          {
            id: "17.3.6",
            name: "Publication of SDG report: SDG6",
            dataSource: "evidence",
          },
          {
            id: "17.3.7",
            name: "Publication of SDG report: SDG7",
            dataSource: "evidence",
          },
          {
            id: "17.3.8",
            name: "Publication of SDG report: SDG8",
            dataSource: "evidence",
          },
          {
            id: "17.3.9",
            name: "Publication of SDG report: SDG9",
            dataSource: "evidence",
          },
          {
            id: "17.3.10",
            name: "Publication of SDG report: SDG10",
            dataSource: "evidence",
          },
          {
            id: "17.3.11",
            name: "Publication of SDG report: SDG11",
            dataSource: "evidence",
          },
          {
            id: "17.3.12",
            name: "Publication of SDG report: SDG12",
            dataSource: "evidence",
          },
          {
            id: "17.3.13",
            name: "Publication of SDG report: SDG13",
            dataSource: "evidence",
          },
          {
            id: "17.3.14",
            name: "Publication of SDG report: SDG14",
            dataSource: "evidence",
          },
          {
            id: "17.3.15",
            name: "Publication of SDG report: SDG15",
            dataSource: "evidence",
          },
          {
            id: "17.3.16",
            name: "Publication of SDG report: SDG16",
            dataSource: "evidence",
          },
          {
            id: "17.3.17",
            name: "Publication of SDG report: SDG17",
            dataSource: "evidence",
          },
        ],
      },
      {
        id: "17.4",
        name: "Education for the SDGs",
        impactRankingsYear: 1,
        indicators: [
          {
            id: "17.4.1",
            name: "Education for SDGs: commitment to meaningful education",
            dataSource: "evidence",
          },
          {
            id: "17.4.2",
            name: "Education for SDGs: specific courses on sustainability",
            dataSource: "evidence",
          },
          {
            id: "17.4.3",
            name: "Education for SDGs in the wider community",
            dataSource: "evidence",
          },
          {
            id: "17.4.4",
            name: "Sustainability literacy",
            dataSource: "evidence",
          },
        ],
      },
    ],
    overview:
      "VSU coordinates the Visayas Consortium for Agriculture, Aquatic and Resources Program, a 24-member regional research network established in 1978. As a SEARCA University Consortium affiliate, VSU maintains 323 partnerships with international, national, and regional organizations while leading national policy development for Philippine agricultural education.",
  },
];

export const articlesData: Article[] = [
  {
    href: "https://www.vsu.edu.ph/articles/news/2745-vsu-rolls-out-free-meals-for-evacuated-dorm-students-amid-heavy-rains",
    title:
      "VSU rolls out free meals for evacuated dorm students amid heavy rains",
    description:
      "Evacuated students at Visayas State University (VSU) received free meals as heavy rains continue to affect parts of Baybay City.",
    author: "Mike Laurence V. Lumen",
    datePublished: new Date(2025, 6, 17),
    relatedSdgs: [11, 2],
    thumbnail:
      "/articles/2745-vsu-rolls-out-free-meals-for-evacuated-dorm-students-amid-heavy-rains/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2378-vsu-s-extension-project-bidani-is-awarded-for-its-more-than-3-decades-of-service",
    title:
      "VSU's extension project BIDANI is awarded for its 3 decades of service",
    description:
      "The Barangay Integrated Development Approach for Nutrition Improvement (BIDANI) program at VSU received recognition for its 37 years of service in addressing malnutrition and poverty in Eastern Visayas.",
    author: "Marianne C. Bayron",
    datePublished: new Date(2023, 6, 20),
    relatedSdgs: [1, 2, 3, 10],
    thumbnail:
      "/articles/2378-vsu-s-extension-project-bidani-is-awarded-for-its-more-than-3-decades-of-service/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/1938-philrootcrops-44-years-of-life-changing-research-for-the-filipino-root-crops-farmers",
    title:
      "PhilRootcrops: 44 years of life-changing research for Filipino root crop farmers",
    description:
      "The Philippine Root Crops Research and Training Center celebrates over four decades of developing climate-tolerant crop varieties and sustainable agricultural technologies.",
    author: "Ulderico B. Alviola and Aura Shaznay Tumulak",
    datePublished: new Date(2021, 2, 15),
    relatedSdgs: [2, 12, 13],
    thumbnail:
      "/articles/1938-philrootcrops-44-years-of-life-changing-research-for-the-filipino-root-crops-farmers/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2355-vsu-makes-it-to-the-times-higher-education-impact-rankings-2023",
    title: "VSU makes it to the Times Higher Education Impact Rankings 2023",
    description:
      "Visayas State University ranked 2nd among Philippine institutions in SDG 4 (Quality Education) and placed in the global 301-400 bracket for SDG 6 (Clean Water and Sanitation).",
    author: "Ulderico B. Alviola",
    datePublished: new Date(2023, 5, 5),
    relatedSdgs: [4, 6, 17],
    thumbnail:
      "/articles/2355-vsu-makes-it-to-the-times-higher-education-impact-rankings-2023/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2690-vsu-secures-pcw-endorsement-for-2025-gender-and-development-plan-and-budget",
    title:
      "VSU secures PCW Endorsement for 2025 Gender and Development Plan and Budget",
    description:
      "VSU remains the only higher education institution in Eastern Visayas to receive consistent endorsement from the Philippine Commission on Women for its gender equality initiatives.",
    author: "Elmera Y. Bañoc",
    datePublished: new Date(2025, 2, 14),
    relatedSdgs: [5, 10],
    thumbnail:
      "/articles/2690-vsu-secures-pcw-endorsement-for-2025-gender-and-development-plan-and-budget/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2668-vsu-launches-major-infrastructure-projects-for-academic-research-student-mobility-initiatives",
    title:
      "VSU launches major infrastructure projects for academic, research, student mobility initiatives",
    description:
      "The university inaugurates green building projects including the Digital Learning Spaces Center with rain-harvesting facilities and integrated solar panels for sustainability.",
    author: "Elmera Y. Bañoc",
    datePublished: new Date(2025, 0, 22),
    relatedSdgs: [7, 9, 11],
    thumbnail:
      "/articles/2668-vsu-launches-major-infrastructure-projects-for-academic-research-student-mobility-initiatives/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/academe/main-campus/agriculture/11-articles/news-obelisk/2602-vsu-partners-with-dswd-for-sustainable-livelihood-program-implementation",
    title:
      "VSU partners with DSWD for sustainable livelihood program implementation",
    description:
      "The partnership provides technical assistance in agriculture, research, innovation, entrepreneurship, and tourism for skills development and income generation in regional communities.",
    author: "Visayas State University",
    datePublished: new Date(2024, 8, 12),
    relatedSdgs: [1, 2, 8, 11, 17],
    thumbnail:
      "/articles/2602-vsu-partners-with-dswd-for-sustainable-livelihood-program-implementation/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/1894-more-local-agri-startups-for-incubation-as-atbi-program-enters-phase-2",
    title:
      "More local agri startups ready for incubation, as VSU ATBI program enters phase 2",
    description:
      "VSU's Technology Business Incubator has successfully launched 13 agricultural startups with ₱13.5 million in funding, providing facilities for business acceleration and market linkages.",
    author: "Allen Glen Gil ",
    datePublished: new Date(2021, 1, 1),
    relatedSdgs: [8, 9, 12],
    thumbnail:
      "/articles/1894-more-local-agri-startups-for-incubation-as-atbi-program-enters-phase-2/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/about/environment",
    title: "We take environmental conservation seriously",
    description:
      "VSU started as a small agricultural school before taking off to be an internationally renowned university for agriculture and allied fields. We understand deeply the need to care for the environment because of our thrusts in sustainable agriculture.",
    author: "Visayas State University",
    datePublished: new Date(2022, 2, 5),
    relatedSdgs: [13, 15],
    thumbnail: "/articles/environment/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/bulletin/1085-fimfs-award",
    title: "VSU marine ecologist lauded for reef ecosystem study",
    description:
      "VSU faculty receives the Dr. Angel Alcala Award for groundbreaking reef fish studies in Cuatro Islas, Leyte, documenting species with important implications for marine resource management.",
    author: "Visayas State University",
    datePublished: "No Date",
    relatedSdgs: [14],
    thumbnail: "/articles/1085-fimfs-award/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2439-proudviscans-share-research-on-climate-resilient-agriculture-in-thailand",
    title:
      "ProudViscans share research on climate resilient agriculture in Thailand",
    description:
      "VSU faculty present studies on small-scale farming adaptations and ecosystem services in typhoon-prone communities at an international conference on climate resilience.",
    author: "Marianne C. Bayron ",
    datePublished: new Date(2023, 10, 22),
    relatedSdgs: [2, 13],
    thumbnail:
      "/articles/2439-proudviscans-share-research-on-climate-resilient-agriculture-in-thailand/thumbnail.jpeg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2713-goingglobal-vsu-partners-with-nanyang-technological-university-for-coral-reef-conservation",
    title:
      "#GoingGlobal: VSU partners with Nanyang Technological University for coral reef conservation",
    description:
      "VSU has officially inked a partnership with Nanyang Technological University (NTU) of Singapore to promote coastal resilience and marine biodiversity by conducting groundbreaking research on conserving coral reefs.",
    author: "Victor Neri",
    datePublished: new Date(2025, 4, 6),
    relatedSdgs: [17, 14],
    thumbnail:
      "/articles/2713-goingglobal-vsu-partners-with-nanyang-technological-university-for-coral-reef-conservation/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/about/linkages",
    title: "VSU maintains 323 partnerships with organizations worldwide",
    description:
      "As coordinator of the Visayas Consortium for Agriculture and a SEARCA University Consortium affiliate, VSU strengthens international cooperation for sustainable development implementation.",
    author: "Visayas State University",
    datePublished: "No Date",
    relatedSdgs: [17],
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/582-isrds-director-attends-2-workshops-and-eiti-cso-retreat-in-washington-dc",
    title:
      "ISRDS director attends workshops and EITI CSO retreat in Washington DC",
    description:
      "VSU's Institute for Strategic Research and Development Studies participates in international transparency initiatives and governance workshops, representing Asia-Pacific in global ethics forums.",
    author: "Jesus Freddy M. Baldos ",
    datePublished: new Date(2015, 2, 5),
    relatedSdgs: [16, 17],
    thumbnail:
      "/articles/582-isrds-director-attends-2-workshops-and-eiti-cso-retreat-in-washington-dc/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/rde-media/rde-news/1853-vsu-intensifies-food-security-efforts-root-crop-production-amidst-covid19",
    title:
      "VSU intensifies food security efforts through root crop production amidst COVID-19",
    description:
      "During the pandemic, VSU ramped up production of climate-resistant and nutritious root crops to address food security challenges in surrounding communities.",
    author: "RDE News",
    datePublished: new Date(2020, 5),
    relatedSdgs: [2, 3, 11],
    thumbnail:
      "/articles/1853-vsu-intensifies-food-security-efforts-root-crop-production-amidst-covid19/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2785-proudviscans-computer-science-students-bags-2nd-place-in-visayas-hackathon-advances-to-nat-l-championship",
    title:
      "#ProudViscans Computer Science students bag 2nd place in Visayas Hackathon, advance to nat'l championship",
    description:
      "Team CS Code from the Department of Computer Science and Technology (DCST) of Visayas State University-Main Campus earned second place at the Byte Forward Hackathon-Visayas Leg, a regional tech competition that brought together the brightest student coders across the islands.",
    author: "Riza Mae Maningo",
    datePublished: new Date(2025, 8, 1),
    relatedSdgs: [],
    thumbnail:
      "/articles/2785-proudviscans-computer-science-students-bags-2nd-place-in-visayas-hackathon-advances-to-nat-l-championship/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2784-proudviscan-alumnus-tops-national-coconut-r-d-congress-with-pest-control-research",
    title:
      "#ProudViscan alumnus tops National Coconut R&D Congress with pest control research",
    description:
      "Cañas' winning entry, “Characterization and Prevalence of Oryctes Nudivirus (ORNV) Infections among Coconut Rhinoceros Beetles (Orocytes rhinoceros) in the Philippines”, is based on his thesis work in VSU Department of Pest Management (VSU-DPM.)",
    author: "Riza Mae Maningo",
    datePublished: new Date(2025, 7, 29),
    relatedSdgs: [],
    thumbnail:
      "/articles/2784-proudviscan-alumnus-tops-national-coconut-r-d-congress-with-pest-control-research/thumbnail.png",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2783-vsu-president-yepes-elected-as-new-suc-acap-president",
    title: "VSU President Yepes elected as new SUC-ACAP President",
    description:
      "Visayas State University (VSU) President Prose Ivy G. Yepes has been elected as the new President of the State Universities and Colleges-Association of Colleges of Agriculture in the Philippines (SUC-ACAP), a national network of public higher education institutions with strong academic and research programs in agriculture and allied sciences.",
    author: "Mike Laurence V. Lumen",
    datePublished: new Date(2025, 7, 28),
    relatedSdgs: [],
    thumbnail:
      "/articles/2783-vsu-president-yepes-elected-as-new-suc-acap-president/thumbnail.jpg",
  },
  {
    href: "https://www.vsu.edu.ph/articles/news/2779-vsu-suspends-classes-evacuates-500-students-due-to-flooding",
    title: "VSU suspends classes, evacuates 500 students due to flooding",
    description:
      "Visayas State University (VSU) suspended work and classes on Wednesday, August 27, 2025, after heavy rains triggered flooding in parts of the main campus and nearby barangays, forcing the evacuation of around 500 students.",
    author: "Mike Laurence V. Lumen",
    datePublished: new Date(2025, 7, 27),
    relatedSdgs: [13],
    thumbnail:
      "/articles/2779-vsu-suspends-classes-evacuates-500-students-due-to-flooding/thumbnail.jpg",
  },
];

export const documentsData: Document[] = [
  {
    id: 1,
    name: "Proportion of Students Receiving Financial Assistance",
    relatedSdgs: [1],
    metric: "1.2",
    date: new Date(2023, 10, 12),
    impactRankingsYear: 1,
  },
  {
    id: 2,
    name: "BOR Resolution 2019 VSU-Funded Scholarship",
    relatedSdgs: [1],
    metric: "1.2",
    indicator: "1.2.1",
    date: new Date(2019, 7, 1),
    impactRankingsYear: 1,
  },
  {
    id: 3,
    name: "BOR Resolution Stipend Increase for VSU-Funded Scholarship",
    relatedSdgs: [1],
    metric: "1.2",
    indicator: "1.2.1",
    date: new Date(2019, 7, 1),
    impactRankingsYear: 1,
  },
  {
    id: 4,
    name: "BOR Resolution Stipend Increase for VSU-Funded Scholarship",
    relatedSdgs: [1],
    metric: "1.2",
    indicator: "1.2.1",
    date: new Date(2019, 7, 1),
    impactRankingsYear: 1,
  },
  {
    id: 5,
    name: "Bottom Financial Quantile Admission",
    relatedSdgs: [1],
    metric: "1.3",
    indicator: "1.3.1",
    date: new Date(2023, 4, 9),
    impactRankingsYear: 1,
  },
  {
    id: 6,
    name: "Low-Income Student Support",
    relatedSdgs: [1],
    metric: "1.3",
    indicator: "1.3.3",
    date: new Date(2020, 4, 4),
    impactRankingsYear: 1,
  },
  {
    id: 7,
    name: "Affirmative Admission Policy for Children of Underpriviledged Families",
    relatedSdgs: [1],
    metric: "1.3",
    indicator: "1.3.4",
    date: new Date(2019, 2, 18),
    impactRankingsYear: 1,
  },
  {
    id: 8,
    name: "Local Start-up Assistance",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.1",
    date: new Date(2022, 9, 14),
    impactRankingsYear: 1,
  },
  {
    id: 9,
    name: "Programmes for Services Access",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.3",
    date: new Date(2023, 10, 10),
    impactRankingsYear: 1,
  },
  {
    id: 10,
    name: "BOSH Training for MSEs in Isabel Leyte",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 11,
    name: "Community for Resilience Training of Trainers on Climate Change Adaptation, Mitigation and DRR - GAA Climate Change Expenditure Fund",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2020, 5, 8),
    impactRankingsYear: 1,
  },
  {
    id: 12,
    name: "DSS Soil Health Services Program (DSoHESeP)",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 13,
    name: "Green-the-Home Project",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 14,
    name: "Horticulture for Environment and Livelihood Promotion",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2020, 5, 8),
    impactRankingsYear: 1,
  },
  {
    id: 15,
    name: "Integrated Abaca Extension Program",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2023, 7, 7),
    impactRankingsYear: 1,
  },
  {
    id: 16,
    name: "Participatory Eco-Farming Program for the Visayas",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 17,
    name: "Pest Clinic",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 18,
    name: "Strengthening Rural-Based Organizations: Focus on Baybay Dairy Cooperative (BDC)",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 19,
    name: "Tilapia Production and Utilization in Selected Municipalities of Leyte",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 8, 30),
    impactRankingsYear: 1,
  },
  {
    id: 20,
    name: "Enhancing Capacity in Socio-Economic Research through the Visayas Socio-Economic Research and Data Analytics Center (ViSERDAC)",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 21,
    name: "(WEaLTH) Wellness Enterprise and Lifestyle Taming Hype",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 22,
    name: "MOA - Action for Economic Reforms (AER)",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2021, 9, 29),
    impactRankingsYear: 1,
  },
  {
    id: 23,
    name: "MOA - Brgy. Bunga",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2021, 5, 28),
    impactRankingsYear: 1,
  },
  {
    id: 24,
    name: "MOA - Brgy. Guadalupe",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2021, 5, 28),
    impactRankingsYear: 1,
  },
  {
    id: 25,
    name: "MOA - Brgy. Marcos",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2021, 5, 28),
    impactRankingsYear: 1,
  },
  {
    id: 26,
    name: "MOA - Brgy. Pangasugan",
    relatedSdgs: [1, 2],
    metric: ["1.4", "2.5"],
    indicator: ["1.4.2", "2.5.1"],
    date: new Date(2021, 5, 28),
    impactRankingsYear: 1,
  },
  {
    id: 27,
    name: "MOA - Brgy. Patag",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 5, 28),
    impactRankingsYear: 1,
  },
  {
    id: 28,
    name: "MOA - Department of Agriculture Regional Field Unit 8 x Organic Agriculture Demo and Training Farm",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2013, 8, 3),
    impactRankingsYear: 1,
  },
  {
    id: 29,
    name: "MOA - Institute for Climate and Sustainable Cities (ICSC)",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2017, 2, 3),
    impactRankingsYear: 1,
  },
  {
    id: 30,
    name: "MOA - Kennemer Food International",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2021, 6, 16),
    impactRankingsYear: 1,
  },
  {
    id: 31,
    name: "MOA - Rootcrops Tech Asst. x LGU Baybay",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2020, 11, 8),
    impactRankingsYear: 1,
  },
  {
    id: 32,
    name: "MOA - Baybay Food Processor Association",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2023, 1, 14),
    impactRankingsYear: 1,
  },
  {
    id: 33,
    name: "MOA - LGU Ormoc Scholarship",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.2",
    date: new Date(2022, 2, 30),
    impactRankingsYear: 1,
  },
  {
    id: 34,
    name: "Globally Competitive S&T",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.3",
    date: new Date(2022, 2, 30),
    impactRankingsYear: 1,
  },
  {
    id: 35,
    name: "Empowered Communities",
    relatedSdgs: [1],
    metric: "1.4",
    indicator: "1.4.3",
    date: new Date(2022, 2, 30),
    impactRankingsYear: 1,
  },
  {
    id: 36,
    name: "List of Projects 2022-2023",
    relatedSdgs: [2],
    metric: "2.1",
    date: new Date(2023, 10, 10),
    impactRankingsYear: 1,
  },
  {
    id: 37,
    name: "Research on Hunger",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2023, 10, 10),
    impactRankingsYear: 1,
  },
  {
    id: 38,
    name: "Development of a Water Kefir Beverage Made From Jackfruit Processing By-product and Its Potential Probiotic Property",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 9, 1),
    impactRankingsYear: 1,
  },
  {
    id: 39,
    name: "Social Impacts of a Coconet Enterprise on Smallholder Coconut Farming Families: The Case of Panaon Island Farmers Federation Inc in the Philippines",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 5, 22),
    impactRankingsYear: 1,
  },
  {
    id: 40,
    name: "Profitability Assessment on the Adoption of Good Agricultural Practices (Gap) among Cabbage Farmers in Dalaguete, Cebu",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 11, 30),
    impactRankingsYear: 1,
  },
  {
    id: 41,
    name: "Soil Greenhouse Gas Fluxes from Tropical Vegetable Farms, using Forest as a Reference",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 6, 29),
    impactRankingsYear: 1,
  },
  {
    id: 42,
    name: "Growth, Yield and Microbial Contamination of Lettuce (Lactuca Sativa L.) Grown Under Two Types of Cultivation System as Influenced by Different Organic Fertilizers",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 5, 22),
    impactRankingsYear: 1,
  },
  {
    id: 43,
    name: "Growth and Yield Response of Lowland Rice (Oryza Sativa L.) to Planting Density and Nutrient Management",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 5, 22),
    impactRankingsYear: 1,
  },
  {
    id: 44,
    name: "Enhanced Profitability of Selected Vegetable and Fruit Value Chains in the Southern Philippines and Australia",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 0, 1),
    impactRankingsYear: 1,
  },
  {
    id: 45,
    name: "Field Performance and Profitability of Bingawan Black Rice (Oryza Sativa L.) Grown Under Various Production Systems",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2019, 3, 12),
    impactRankingsYear: 1,
  },
  {
    id: 46,
    name: "The Effects of Different Tillage Practices on Soil Properties, Yield and Pest Incidence of Various Sweet Corn (Zea Mays L. Var Saccharata) Varities",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2021, 8, 3),
    impactRankingsYear: 1,
  },
  {
    id: 47,
    name: "Toxicity of Biorational Insectoacaricides to Cassava Red Spider Mite Tetranychus kanzawai Kishida (Acari: Tetranychidae) and its Phytoseiid Predator Amblyseius Longispinosus Evans (Acari: Phytoseiidae)",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2023, 0, 1),
    impactRankingsYear: 1,
  },
  {
    id: 48,
    name: "Morphophysical and Nutrient Characteristics of Degraded Soils in Sta. Rita, Samar, Philippines",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2021, 10, 27),
    impactRankingsYear: 1,
  },
  {
    id: 49,
    name: "Assessment of Pests, Natural Enemies and Soil Microorganisms in Lowland Rice Field Under Organic and Inorganic Production Systems",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 5, 1),
    impactRankingsYear: 1,
  },
  {
    id: 50,
    name: "Assessing the Rice Production and its Determinants: Empirical Evidence from Albuera, Leyte, Philippines",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2023, 4, 5),
    impactRankingsYear: 1,
  },
  {
    id: 51,
    name: "Vegetative Phase Extension for Steviol Glycoside Accumulation in Stevia: Photoperiod, In Vitro and Ex Vitro Cultures Manipulation",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 8, 9),
    impactRankingsYear: 1,
  },
  {
    id: 52,
    name: "Impact of the COVID-19 Pandemic on Abaca Farm Households: A Cross-Sectional Survey",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: "No Date",
    impactRankingsYear: 1,
  },
  {
    id: 53,
    name: "Service Quality and Farmer-Beneficiaries' Satisfaction on the Plant-Now-Pay-Later Program of Baybay City Agriculture Office",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 3, 20),
    impactRankingsYear: 1,
  },
  {
    id: 54,
    name: "Effects of Plant Extracts on the Growth and Yield of Ratoon Lowland Rice (Oryza Sativa L.) When Exposed to High Temperatures",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 11, 29),
    impactRankingsYear: 1,
  },
  {
    id: 55,
    name: "Econometric Analysis on Rice Farmers' Income as Influenced by Extension Agent's Role",
    relatedSdgs: [2],
    metric: "2.1",
    indicator: "2.1.3",
    date: new Date(2022, 11, 25),
    impactRankingsYear: 1,
  },
  {
    id: 56,
    name: "Waste Management Profile",
    relatedSdgs: [2],
    metric: "2.2",
    date: new Date(2021, 8, 8),
    impactRankingsYear: 1,
  },
  {
    id: 57,
    name: "Interventions",
    relatedSdgs: [2],
    metric: "2.3",
    indicator: "2.3.2",
    date: "No Date",
    impactRankingsYear: 1,
  },
  {
    id: 58,
    name: "Sustainable Food Choices on Campus",
    relatedSdgs: [2],
    metric: "2.3",
    indicator: "2.3.3",
    date: new Date(2023, 4, 9),
    impactRankingsYear: 1,
  },
  {
    id: 59,
    name: "Healthy and Affordable Food Choices",
    relatedSdgs: [2],
    metric: "2.3",
    indicator: "2.3.4",
    date: new Date(2023, 4, 9),
    impactRankingsYear: 1,
  },
  {
    id: 60,
    name: "Graduates in Agriculture",
    relatedSdgs: [2],
    metric: "2.4",
    date: new Date(2023, 10, 9),
    impactRankingsYear: 1,
  },
  {
    id: 61,
    name: "National Hunger List",
    relatedSdgs: [2],
    metric: "2.5",
    date: new Date(2023, 10, 10),
    impactRankingsYear: 1,
  },
  {
    id: 62,
    name: "Biodiversity Enhancement and Maintenance of Rainforestation Techno-Demo and Learning Site",
    relatedSdgs: [2],
    metric: "2.5",
    indicator: "2.5.1",
    date: new Date(2023, 10, 10),
    impactRankingsYear: 1,
  },
  {
    id: 63,
    name: "Integrated Coastal Resource Management in Southeastern Camotes Sea and Selected Municipalities in Leyte",
    relatedSdgs: [2],
    metric: "2.5",
    indicator: "2.5.1",
    date: "No Date",
    impactRankingsYear: 1,
  },
  {
    id: 64,
    name: "Medicinal and Pesticidal Garden",
    relatedSdgs: [2],
    metric: "2.5",
    indicator: "2.5.1",
    date: new Date(2021, 10, 29),
    impactRankingsYear: 1,
  },
  {
    id: 65,
    name: "MOA - Fatima MPC",
    relatedSdgs: [2],
    metric: "2.5",
    indicator: "2.5.1",
    date: "No Date",
    impactRankingsYear: 1,
  },
];

export const progressAndInfo: SDGTimeline[] = [
  {
    relatedSdg: 1,
    timeline: [
      {
        time: "2019",
        steps: [
          {
            icon: <PenTool width={20} height={20} />,
            content: "BOR Resolution for stipends and scholarships",
          },
        ],
        fullContent:
          "The Visayas State University is a lorem ipsum dolor sit amet. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        time: "2020",
        steps: [
          {
            icon: <PenTool width={20} height={20} />,
            content: "BOR Resolution for stipends and scholarships",
          },
          {
            icon: <Stamp width={20} height={20} />,
            content: "Approval of affirmative admission policy",
          },
        ],
        fullContent:
          "The Visayas State University is also a blah blah blah. It is a lorem ipsum and it is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        time: "2021",
        steps: [
          {
            icon: <PenTool width={20} height={20} />,
            content: "BOR Resolution for stipends and scholarships",
          },
          {
            icon: <Stamp width={20} height={20} />,
            content: "Approval of affirmative admission policy",
          },
        ],
        fullContent:
          "The Visayas State University is also a blah blah blah. It is a lorem ipsum and it is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
];

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "SDGs",
    href: "/sdgs",
    icon: Globe,
  },
  {
    label: "Articles",
    href: "/articles",
    icon: Newspaper,
  },
];
