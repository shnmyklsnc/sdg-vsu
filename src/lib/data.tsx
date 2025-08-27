import { Globe, Home, Newspaper, PenTool, Stamp } from "lucide-react";
import { Article, Document, NavItem, SDG, SDGTimeline } from "./types";

export const sdgs: SDG[] = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    image: "/sdgs/1.png",
    color: "rgba(229, 35, 51, 0.78)",
    targets: [
      {
        name: "1.1",
        description:
          "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day",
      },
      {
        name: "1.2",
        description:
          "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions",
      },
      {
        name: "1.3",
        description:
          "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable",
      },
      {
        name: "1.4",
        description:
          "By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance",
      },
      {
        name: "1.5",
        description:
          "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      },
      {
        name: "1.a",
        description:
          "Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions",
      },
      {
        name: "1.b",
        description:
          "Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions",
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
    targets: [
      {
        name: "2.1",
        description:
          "By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round",
      },
      {
        name: "2.2",
        description:
          "By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons",
      },
      {
        name: "2.3",
        description:
          "By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment",
      },
      {
        name: "2.4",
        description:
          "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality",
      },
      {
        name: "2.5",
        description:
          "By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed",
      },
      {
        name: "2.a",
        description:
          "Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries",
      },
      {
        name: "2.b",
        description:
          "Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round",
      },
      {
        name: "2.c",
        description:
          "Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility",
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
    targets: [
      {
        name: "3.1",
        description:
          "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births",
      },
      {
        name: "3.2",
        description:
          "By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births",
      },
      {
        name: "3.3",
        description:
          "By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases",
      },
      {
        name: "3.4",
        description:
          "By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being",
      },
      {
        name: "3.5",
        description:
          "Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol",
      },
      {
        name: "3.6",
        description:
          "By 2020, halve the number of global deaths and injuries from road traffic accidents",
      },
      {
        name: "3.7",
        description:
          "By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes",
      },
      {
        name: "3.8",
        description:
          "Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all",
      },
      {
        name: "3.9",
        description:
          "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      },
      {
        name: "3.a",
        description:
          "Strengthen the implementation of the World Health Organization Framework Convention on Tobacco Control in all countries, as appropriate",
      },
      {
        name: "3.b",
        description:
          "Support the research and development of vaccines and medicines for the communicable and non-communicable diseases that primarily affect developing countries, provide access to affordable essential medicines and vaccines, in accordance with the Doha Declaration on the TRIPS Agreement and Public Health, which affirms the right of developing countries to use to the full the provisions in the Agreement on Trade-Related Aspects of Intellectual Property Rights regarding flexibilities to protect public health, and, in particular, provide access to medicines for all",
      },
      {
        name: "3.c",
        description:
          "Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries, especially in least developed countries and small island developing States",
      },
      {
        name: "3.d",
        description:
          "Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks",
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
    targets: [
      {
        name: "4.1",
        description:
          "By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes",
      },
      {
        name: "4.2",
        description:
          "By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education",
      },
      {
        name: "4.3",
        description:
          "By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university",
      },
      {
        name: "4.4",
        description:
          "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship",
      },
      {
        name: "4.5",
        description:
          "By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations",
      },
      {
        name: "4.6",
        description:
          "By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy",
      },
      {
        name: "4.7",
        description:
          "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture's contribution to sustainable development",
      },
      {
        name: "4.a",
        description:
          "Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all",
      },
      {
        name: "4.b",
        description:
          "By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries",
      },
      {
        name: "4.c",
        description:
          "By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing States",
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
    targets: [
      {
        name: "5.1",
        description:
          "End all forms of discrimination against all women and girls everywhere",
      },
      {
        name: "5.2",
        description:
          "Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation",
      },
      {
        name: "5.3",
        description:
          "Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation",
      },
      {
        name: "5.4",
        description:
          "Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate",
      },
      {
        name: "5.5",
        description:
          "Ensure women's full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life",
      },
      {
        name: "5.6",
        description:
          "Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences",
      },
      {
        name: "5.a",
        description:
          "Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and other forms of property, financial services, inheritance and natural resources, in accordance with national laws",
      },
      {
        name: "5.b",
        description:
          "Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women",
      },
      {
        name: "5.c",
        description:
          "Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels",
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
    targets: [
      {
        name: "6.1",
        description:
          "By 2030, achieve universal and equitable access to safe and affordable drinking water for all",
      },
      {
        name: "6.2",
        description:
          "By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations",
      },
      {
        name: "6.3",
        description:
          "By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally",
      },
      {
        name: "6.4",
        description:
          "By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity",
      },
      {
        name: "6.5",
        description:
          "By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate",
      },
      {
        name: "6.6",
        description:
          "By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes",
      },
      {
        name: "6.a",
        description:
          "By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies",
      },
      {
        name: "6.b",
        description:
          "Support and strengthen the participation of local communities in improving water and sanitation management",
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
    targets: [
      {
        name: "7.1",
        description:
          "By 2030, ensure universal access to affordable, reliable and modern energy services",
      },
      {
        name: "7.2",
        description:
          "By 2030, increase substantially the share of renewable energy in the global energy mix",
      },
      {
        name: "7.3",
        description:
          "By 2030, double the global rate of improvement in energy efficiency",
      },
      {
        name: "7.a",
        description:
          "By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology",
      },
      {
        name: "7.b",
        description:
          "By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States, and land-locked developing countries, in accordance with their respective programmes of support",
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
    targets: [
      {
        name: "8.1",
        description:
          "Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries",
      },
      {
        name: "8.2",
        description:
          "Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors",
      },
      {
        name: "8.3",
        description:
          "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services",
      },
      {
        name: "8.4",
        description:
          "Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-Year Framework of Programmes on Sustainable Consumption and Production, with developed countries taking the lead",
      },
      {
        name: "8.5",
        description:
          "By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value",
      },
      {
        name: "8.6",
        description:
          "By 2020, substantially reduce the proportion of youth not in employment, education or training",
      },
      {
        name: "8.7",
        description:
          "Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms",
      },
      {
        name: "8.8",
        description:
          "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment",
      },
      {
        name: "8.9",
        description:
          "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      },
      {
        name: "8.10",
        description:
          "Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all",
      },
      {
        name: "8.a",
        description:
          "Increase Aid for Trade support for developing countries, in particular least developed countries, including through the Enhanced Integrated Framework for Trade-Related Technical Assistance to Least Developed Countries",
      },
      {
        name: "8.b",
        description:
          "By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization",
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
    targets: [
      {
        name: "9.1",
        description:
          "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      },
      {
        name: "9.2",
        description:
          "Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry's share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries",
      },
      {
        name: "9.3",
        description:
          "Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets",
      },
      {
        name: "9.4",
        description:
          "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
      },
      {
        name: "9.5",
        description:
          "Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending",
      },
      {
        name: "9.a",
        description:
          "Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, landlocked developing countries and small island developing States",
      },
      {
        name: "9.b",
        description:
          "Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities",
      },
      {
        name: "9.c",
        description:
          "Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020",
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
    targets: [
      {
        name: "10.1",
        description:
          "By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average",
      },
      {
        name: "10.2",
        description:
          "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status",
      },
      {
        name: "10.3",
        description:
          "Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard",
      },
      {
        name: "10.4",
        description:
          "Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality",
      },
      {
        name: "10.5",
        description:
          "Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations",
      },
      {
        name: "10.6",
        description:
          "Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions",
      },
      {
        name: "10.7",
        description:
          "Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies",
      },
      {
        name: "10.a",
        description:
          "Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements",
      },
      {
        name: "10.b",
        description:
          "Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes",
      },
      {
        name: "10.c",
        description:
          "By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent",
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
    targets: [
      {
        name: "11.1",
        description:
          "By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums",
      },
      {
        name: "11.2",
        description:
          "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
      },
      {
        name: "11.3",
        description:
          "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      },
      {
        name: "11.4",
        description:
          "Strengthen efforts to protect and safeguard the world's cultural and natural heritage",
      },
      {
        name: "11.5",
        description:
          "By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations",
      },
      {
        name: "11.6",
        description:
          "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
      },
      {
        name: "11.7",
        description:
          "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      },
      {
        name: "11.a",
        description:
          "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning",
      },
      {
        name: "11.b",
        description:
          "By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015-2030, holistic disaster risk management at all levels",
      },
      {
        name: "11.c",
        description:
          "Support least developed countries, including through financial and technical assistance, in building sustainable and resilient buildings utilizing local materials",
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
    targets: [
      {
        name: "12.1",
        description:
          "Implement the 10-Year Framework of Programmes on Sustainable Consumption and Production Patterns, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries",
      },
      {
        name: "12.2",
        description:
          "By 2030, achieve the sustainable management and efficient use of natural resources",
      },
      {
        name: "12.3",
        description:
          "By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses",
      },
      {
        name: "12.4",
        description:
          "By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment",
      },
      {
        name: "12.5",
        description:
          "By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse",
      },
      {
        name: "12.6",
        description:
          "Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle",
      },
      {
        name: "12.7",
        description:
          "Promote public procurement practices that are sustainable, in accordance with national policies and priorities",
      },
      {
        name: "12.8",
        description:
          "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      },
      {
        name: "12.a",
        description:
          "Support developing countries to strengthen their scientific and technological capacity to move towards more sustainable patterns of consumption and production",
      },
      {
        name: "12.b",
        description:
          "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
      },
      {
        name: "12.c",
        description:
          "Rationalize inefficient fossil-fuel subsidies that encourage wasteful consumption by removing market distortions, in accordance with national circumstances, including by restructuring taxation and phasing out those harmful subsidies, where they exist, to reflect their environmental impacts, taking fully into account the specific needs and conditions of developing countries and minimizing the possible adverse impacts on their development in a manner that protects the poor and the affected communities",
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
    targets: [
      {
        name: "13.1",
        description:
          "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      },
      {
        name: "13.2",
        description:
          "Integrate climate change measures into national policies, strategies and planning",
      },
      {
        name: "13.3",
        description:
          "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      },
      {
        name: "13.a",
        description:
          "Implement the commitment undertaken by developed-country parties to the United Nations Framework Convention on Climate Change to a goal of mobilizing jointly $100 billion annually by 2020 from all sources to address the needs of developing countries in the context of meaningful mitigation actions and transparency on implementation and fully operationalize the Green Climate Fund through its capitalization as soon as possible",
      },
      {
        name: "13.b",
        description:
          "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities",
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
    targets: [
      {
        name: "14.1",
        description:
          "By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution",
      },
      {
        name: "14.2",
        description:
          "By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans",
      },
      {
        name: "14.3",
        description:
          "Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels",
      },
      {
        name: "14.4",
        description:
          "By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics",
      },
      {
        name: "14.5",
        description:
          "By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information",
      },
      {
        name: "14.6",
        description:
          "By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation",
      },
      {
        name: "14.7",
        description:
          "By 2030, increase the economic benefits to Small Island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism",
      },
      {
        name: "14.a",
        description:
          "Increase scientific knowledge, develop research capacity and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission Criteria and Guidelines on the Transfer of Marine Technology, in order to improve ocean health and to enhance the contribution of marine biodiversity to the development of developing countries, in particular small island developing States and least developed countries",
      },
      {
        name: "14.b",
        description:
          "Provide access for small-scale artisanal fishers to marine resources and markets",
      },
      {
        name: "14.c",
        description:
          'Enhance the conservation and sustainable use of oceans and their resources by implementing international law as reflected in United Nations Convention on the Law of the Sea, which provides the legal framework for the conservation and sustainable use of oceans and their resources, as recalled in paragraph 158 of "The future we want"',
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
    targets: [
      {
        name: "15.1",
        description:
          "By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements",
      },
      {
        name: "15.2",
        description:
          "By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally",
      },
      {
        name: "15.3",
        description:
          "By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world",
      },
      {
        name: "15.4",
        description:
          "By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development",
      },
      {
        name: "15.5",
        description:
          "Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species",
      },
      {
        name: "15.6",
        description:
          "Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed",
      },
      {
        name: "15.7",
        description:
          "Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products",
      },
      {
        name: "15.8",
        description:
          "By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species",
      },
      {
        name: "15.9",
        description:
          "By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts",
      },
      {
        name: "15.a",
        description:
          "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems",
      },
      {
        name: "15.b",
        description:
          "Mobilize significant resources from all sources and at all levels to finance sustainable forest management and provide adequate incentives to developing countries to advance such management, including for conservation and reforestation",
      },
      {
        name: "15.c",
        description:
          "Enhance global support for efforts to combat poaching and trafficking of protected species, including by increasing the capacity of local communities to pursue sustainable livelihood opportunities",
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
    targets: [
      {
        name: "16.1",
        description:
          "Significantly reduce all forms of violence and related death rates everywhere",
      },
      {
        name: "16.2",
        description:
          "End abuse, exploitation, trafficking and all forms of violence against and torture of children",
      },
      {
        name: "16.3",
        description:
          "Promote the rule of law at the national and international levels and ensure equal access to justice for all",
      },
      {
        name: "16.4",
        description:
          "By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime",
      },
      {
        name: "16.5",
        description:
          "Substantially reduce corruption and bribery in all their forms",
      },
      {
        name: "16.6",
        description:
          "Develop effective, accountable and transparent institutions at all levels",
      },
      {
        name: "16.7",
        description:
          "Ensure responsive, inclusive, participatory and representative decision-making at all levels",
      },
      {
        name: "16.8",
        description:
          "Broaden and strengthen the participation of developing countries in the institutions of global governance",
      },
      {
        name: "16.9",
        description:
          "By 2030, provide legal identity for all, including birth registration",
      },
      {
        name: "16.10",
        description:
          "Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements",
      },
      {
        name: "16.a",
        description:
          "Strengthen relevant national institutions, including through international cooperation, for building capacity at all levels, in particular in developing countries, to prevent violence and combat terrorism and crime",
      },
      {
        name: "16.b",
        description:
          "Promote and enforce non-discriminatory laws and policies for sustainable development",
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
    targets: [
      {
        name: "17.1",
        description:
          "Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection",
      },
      {
        name: "17.2",
        description:
          "Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of ODA/GNI to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a target to provide at least 0.20 per cent of ODA/GNI to least developed countries",
      },
      {
        name: "17.3",
        description:
          "Mobilize additional financial resources for developing countries from multiple sources",
      },
      {
        name: "17.4",
        description:
          "Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress",
      },
      {
        name: "17.5",
        description:
          "Adopt and implement investment promotion regimes for least developed countries",
      },
      {
        name: "17.6",
        description:
          "Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism",
      },
      {
        name: "17.7",
        description:
          "Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed",
      },
      {
        name: "17.8",
        description:
          "Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology",
      },
      {
        name: "17.9",
        description:
          "Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the Sustainable Development Goals, including through North-South, South-South and triangular cooperation",
      },
      {
        name: "17.10",
        description:
          "Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda",
      },
      {
        name: "17.11",
        description:
          "Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries' share of global exports by 2020",
      },
      {
        name: "17.12",
        description:
          "Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access",
      },
      {
        name: "17.13",
        description:
          "Enhance global macroeconomic stability, including through policy coordination and policy coherence",
      },
      {
        name: "17.14",
        description: "Enhance policy coherence for sustainable development",
      },
      {
        name: "17.15",
        description:
          "Respect each country's policy space and leadership to establish and implement policies for poverty eradication and sustainable development",
      },
      {
        name: "17.16",
        description:
          "Enhance the Global Partnership for Sustainable Development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the Sustainable Development Goals in all countries, in particular developing countries",
      },
      {
        name: "17.17",
        description:
          "Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships",
      },
      {
        name: "17.18",
        description:
          "By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts",
      },
      {
        name: "17.19",
        description:
          "By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries",
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
];

export const documentsData: Document[] = [
  {
    id: 1,
    name: "Proportion of Students Receiving Financial Assistance",
    relatedSdgs: [1],
    target: "1.2",
    date: new Date(2023, 10, 12),
  },
  {
    id: 2,
    name: "BOR Resolution 2019 VSU-Funded Scholarship",
    relatedSdgs: [1],
    target: "1.2",
    indicator: "1.2.1-1",
    date: new Date(2019, 7, 1),
  },
  {
    id: 3,
    name: "BOR Resolution Stipend Increase for VSU-Funded Scholarship",
    relatedSdgs: [1],
    target: "1.2",
    indicator: "1.2.1-1",
    date: new Date(2019, 7, 1),
  },
  {
    id: 4,
    name: "BOR Resolution Stipend Increase for VSU-Funded Scholarship",
    relatedSdgs: [1],
    target: "1.2",
    indicator: "1.2.1-1",
    date: new Date(2019, 7, 1),
  },
  {
    id: 5,
    name: "Bottom Financial Quantile Admission",
    relatedSdgs: [1],
    target: "1.3",
    indicator: "1.3.1",
    date: new Date(2023, 4, 9),
  },
  {
    id: 6,
    name: "Low-Income Student Support",
    relatedSdgs: [1],
    target: "1.3",
    indicator: "1.3.3",
    date: new Date(2020, 4, 4),
  },
  {
    id: 7,
    name: "Affirmative Admission Policy for Children of Underpriviledged Families",
    relatedSdgs: [1],
    target: "1.3",
    indicator: "1.3.4",
    date: new Date(2019, 2, 18),
  },
  {
    id: 8,
    name: "Local Start-up Assistance",
    relatedSdgs: [1],
    target: "1.4",
    indicator: "1.4.1",
    date: new Date(2022, 9, 14),
  },
  {
    id: 9,
    name: "Programmes for Services Access",
    relatedSdgs: [1],
    target: "1.4",
    indicator: "1.4.2-a-1",
    date: new Date(2023, 10, 10),
  },
  {
    id: 10,
    name: "BOSH Training for MSEs in Isabel Leyte",
    relatedSdgs: [1],
    target: "1.4",
    indicator: "1.4.2-a-1",
    date: new Date(2021, 10, 29),
  },
  {
    id: 11,
    name: "Community for Resilience Training of Trainers on Climate Change Adaptation, Mitigation and DRR - GAA Climate Change Expenditure Fund",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2020, 5, 8),
  },
  {
    id: 12,
    name: "DSS Soil Health Services Program (DSoHESeP)",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-a-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2021, 10, 29),
  },
  {
    id: 13,
    name: "Green-the-Home Project",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2021, 10, 29),
  },
  {
    id: 14,
    name: "Horticulture for Environment and Livelihood Promotion",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-a-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2020, 5, 8),
  },
  {
    id: 15,
    name: "Integrated Abaca Extension Program",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-a-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2023, 7, 7),
  },
  {
    id: 16,
    name: "Participatory Eco-Farming Program for the Visayas",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2021, 10, 29),
  },
  {
    id: 17,
    name: "Pest Clinic",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2021, 10, 29),
  },
  {
    id: 18,
    name: "Strengthening Rural-Based Organizations: Focus on Baybay Dairy Cooperative (BDC)",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2021, 10, 29),
  },
  {
    id: 19,
    name: "Tilapia Production and Utilization in Selected Municipalities of Leyte",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2021, 8, 30),
  },
  {
    id: 20,
    name: "Enhancing Capacity in Socio-Economic Research through the Visayas Socio-Economic Research and Data Analytics Center (ViSERDAC)",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2021, 10, 29),
  },
  {
    id: 21,
    name: "(WEaLTH) Wellness Enterprise and Lifestyle Taming Hype",
    relatedSdgs: [1],
    indicator: "1.4.2-a-1",
    target: "1.4",
    date: new Date(2021, 10, 29),
  },
  {
    id: 22,
    name: "MOA - Action for Economic Reforms (AER)",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-b-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2021, 9, 29),
  },
  {
    id: 23,
    name: "MOA - Brgy. Bunga",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-b-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2021, 5, 28),
  },
  {
    id: 24,
    name: "MOA - Brgy. Guadalupe",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-b-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2021, 5, 28),
  },
  {
    id: 25,
    name: "MOA - Brgy. Marcos",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-b-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2021, 5, 28),
  },
  {
    id: 26,
    name: "MOA - Brgy. Pangasugan",
    relatedSdgs: [1, 2],
    indicator: ["1.4.2-b-1", "2.5.1-1"],
    target: ["1.4", "2.5"],
    date: new Date(2021, 5, 28),
  },
  {
    id: 27,
    name: "MOA - Brgy. Patag",
    relatedSdgs: [1],
    indicator: "1.4.2-b-1",
    target: "1.4",
    date: new Date(2021, 5, 28),
  },
  {
    id: 28,
    name: "MOA - Department of Agriculture Regional Field Unit 8 x Organic Agriculture Demo and Training Farm",
    relatedSdgs: [1],
    indicator: "1.4.2-b-1",
    target: "1.4",
    date: new Date(2013, 8, 3),
  },
  {
    id: 29,
    name: "MOA - Institute for Climate and Sustainable Cities (ICSC)",
    relatedSdgs: [1],
    indicator: "1.4.2-b-1",
    target: "1.4",
    date: new Date(2017, 2, 3),
  },
  {
    id: 30,
    name: "MOA - Kennemer Food International",
    relatedSdgs: [1],
    indicator: "1.4.2-b-1",
    target: "1.4",
    date: new Date(2021, 6, 16),
  },
  {
    id: 31,
    name: "MOA - Rootcrops Tech Asst. x LGU Baybay",
    relatedSdgs: [1],
    indicator: "1.4.2-b-1",
    target: "1.4",
    date: new Date(2020, 11, 8),
  },
  {
    id: 32,
    name: "MOA - Baybay Food Processor Association",
    relatedSdgs: [1],
    indicator: "1.4.2-b-1",
    target: "1.4",
    date: new Date(2023, 1, 14),
  },
  {
    id: 33,
    name: "MOA - LGU Ormoc Scholarship",
    relatedSdgs: [1],
    indicator: "1.4.2-b-1",
    target: "1.4",
    date: new Date(2022, 2, 30),
  },
  {
    id: 34,
    name: "Globally Competitive S&T",
    relatedSdgs: [1],
    indicator: "1.4.3-1",
    target: "1.4",
    date: new Date(2022, 2, 30),
  },
  {
    id: 35,
    name: "Empowered Communities",
    relatedSdgs: [1],
    indicator: "1.4.3-1",
    target: "1.4",
    date: new Date(2022, 2, 30),
  },
  {
    id: 36,
    name: "List of Projects 2022-2023",
    relatedSdgs: [2],
    target: "2.1",
    date: new Date(2023, 10, 10),
  },
  {
    id: 37,
    name: "Research on Hunger",
    relatedSdgs: [2],
    indicator: "2.1.3",
    target: "2.1",
    date: new Date(2023, 10, 10),
  },
  {
    id: 38,
    name: "Development of a Water Kefir Beverage Made From Jackfruit Processing By-product and Its Potential Probiotic Property",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 9, 1),
  },
  {
    id: 39,
    name: "Social Impacts of a Coconet Enterprise on Smallholder Coconut Farming Families: The Case of Panaon Island Farmers Federation Inc in the Philippines",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 5, 22),
  },
  {
    id: 40,
    name: "Profitability Assessment on the Adoption of Good Agricultural Practices (Gap) among Cabbage Farmers in Dalaguete, Cebu",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 11, 30),
  },
  {
    id: 41,
    name: "Soil Greenhouse Gas Fluxes from Tropical Vegetable Farms, using Forest as a Reference",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 6, 29),
  },
  {
    id: 42,
    name: "Growth, Yield and Microbial Contamination of Lettuce (Lactuca Sativa L.) Grown Under Two Types of Cultivation System as Influenced by Different Organic Fertilizers",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 5, 22),
  },
  {
    id: 43,
    name: "Growth and Yield Response of Lowland Rice (Oryza Sativa L.) to Planting Density and Nutrient Management",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 5, 22),
  },
  {
    id: 44,
    name: "Enhanced Profitability of Selected Vegetable and Fruit Value Chains in the Southern Philippines and Australia",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 0, 1),
  },
  {
    id: 45,
    name: "Field Performance and Profitability of Bingawan Black Rice (Oryza Sativa L.) Grown Under Various Production Systems",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2019, 3, 12),
  },
  {
    id: 46,
    name: "The Effects of Different Tillage Practices on Soil Properties, Yield and Pest Incidence of Various Sweet Corn (Zea Mays L. Var Saccharata) Varities",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2021, 8, 3),
  },
  {
    id: 47,
    name: "Toxicity of Biorational Insectoacaricides to Cassava Red Spider Mite Tetranychus kanzawai Kishida (Acari: Tetranychidae) and its Phytoseiid Predator Amblyseius Longispinosus Evans (Acari: Phytoseiidae)",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2023, 0, 1),
  },
  {
    id: 48,
    name: "Morphophysical and Nutrient Characteristics of Degraded Soils in Sta. Rita, Samar, Philippines",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2021, 10, 27),
  },
  {
    id: 49,
    name: "Assessment of Pests, Natural Enemies and Soil Microorganisms in Lowland Rice Field Under Organic and Inorganic Production Systems",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 5, 1),
  },
  {
    id: 50,
    name: "Assessing the Rice Production and its Determinants: Empirical Evidence from Albuera, Leyte, Philippines",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2023, 4, 5),
  },
  {
    id: 51,
    name: "Vegetative Phase Extension for Steviol Glycoside Accumulation in Stevia: Photoperiod, In Vitro and Ex Vitro Cultures Manipulation",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 8, 9),
  },
  {
    id: 52,
    name: "Impact of the COVID-19 Pandemic on Abaca Farm Households: A Cross-Sectional Survey",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: "No Date",
  },
  {
    id: 53,
    name: "Service Quality and Farmer-Beneficiaries' Satisfaction on the Plant-Now-Pay-Later Program of Baybay City Agriculture Office",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 3, 20),
  },
  {
    id: 54,
    name: "Effects of Plant Extracts on the Growth and Yield of Ratoon Lowland Rice (Oryza Sativa L.) When Exposed to High Temperatures",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 11, 29),
  },
  {
    id: 55,
    name: "Econometric Analysis on Rice Farmers' Income as Influenced by Extension Agent's Role",
    relatedSdgs: [2],
    indicator: "2.1.3-1",
    target: "2.1",
    date: new Date(2022, 11, 25),
  },
  {
    id: 56,
    name: "Waste Management Profile",
    relatedSdgs: [2],
    target: "2.2",
    date: new Date(2021, 8, 8),
  },
  {
    id: 57,
    name: "Interventions",
    relatedSdgs: [2],
    target: "2.3",
    indicator: "2.3.2",
    date: "No Date",
  },
  {
    id: 58,
    name: "Sustainable Food Choices on Campus",
    relatedSdgs: [2],
    target: "2.3",
    indicator: "2.3.3",
    date: new Date(2023, 4, 9),
  },
  {
    id: 59,
    name: "Healthy and Affordable Food Choices",
    relatedSdgs: [2],
    target: "2.3",
    indicator: "2.3.4",
    date: new Date(2023, 4, 9),
  },
  {
    id: 60,
    name: "Graduates in Agriculture",
    relatedSdgs: [2],
    target: "2.4",
    date: new Date(2023, 10, 9),
  },
  {
    id: 61,
    name: "National Hunger List",
    relatedSdgs: [2],
    target: "2.5",
    date: new Date(2023, 10, 10),
  },
  {
    id: 62,
    name: "Biodiversity Enhancement and Maintenance of Rainforestation Techno-Demo and Learning Site",
    relatedSdgs: [2],
    target: "2.5",
    indicator: "2.5.1-1",
    date: new Date(2023, 10, 10),
  },
  {
    id: 63,
    name: "Integrated Coastal Resource Management in Southeastern Camotes Sea and Selected Municipalities in Leyte",
    relatedSdgs: [2],
    target: "2.5",
    indicator: "2.5.1-1",
    date: "No Date",
  },
  {
    id: 64,
    name: "Medicinal and Pesticidal Garden",
    relatedSdgs: [2],
    target: "2.5",
    indicator: "2.5.1-1",
    date: new Date(2021, 10, 29),
  },
  {
    id: 65,
    name: "MOA - Fatima MPC",
    relatedSdgs: [2],
    target: "2.5",
    indicator: "2.5.1-1",
    date: "No Date",
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
          {
            icon: <Stamp width={20} height={20} />,
            content: "Approval of affirmative admission policy",
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
