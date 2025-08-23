import { File, Home, Info, Newspaper } from "lucide-react";
import { Article, Document, NavItem, SDG } from "./types";

export const sdgs: SDG[] = [
  {
    id: 1,
    title: "SDG 1 - No Poverty",
    description: "",
    image: "/sdgs/1.png",
  },
  {
    id: 2,
    title: "SDG 2 - Zero Hunger",
    description: "",
    image: "/sdgs/2.png",
  },
  {
    id: 3,
    title: "SDG 3 - Good Health and Well-Being",
    description: "",
    image: "/sdgs/3.png",
  },
  {
    id: 4,
    title: "SDG 4 - Quality Education",
    description: "",
    image: "/sdgs/4.png",
  },
  {
    id: 5,
    title: "SDG 5 - Gender Equality",
    description: "",
    image: "/sdgs/5.png",
  },
  {
    id: 6,
    title: "SDG 6 - Clean Water and Sanitation",
    description: "",
    image: "/sdgs/6.png",
  },
  {
    id: 7,
    title: "SDG 7 - Affordable and Clean Energy",
    description: "",
    image: "/sdgs/7.png",
  },
  {
    id: 8,
    title: "SDG 8 - Decent Work and Economic Growth",
    description: "",
    image: "/sdgs/8.png",
  },
  {
    id: 9,
    title: "SDG 9 - Industry, Innovation, and Infrastructure",
    description: "",
    image: "/sdgs/9.png",
  },
  {
    id: 10,
    title: "SDG 10 - Reduced Inequalities",
    description: "",
    image: "/sdgs/10.png",
  },
  {
    id: 11,
    title: "SDG 11 - Sustainable Cities and Communities",
    description: "",
    image: "/sdgs/11.png",
  },
  {
    id: 12,
    title: "SDG 12 - Responsible Consumption and Production",
    description: "",
    image: "/sdgs/12.png",
  },
  {
    id: 13,
    title: "SDG 13 - Climate Action",
    description: "",
    image: "/sdgs/13.png",
  },
  {
    id: 14,
    title: "SDG 14 - Life Below Water",
    description: "",
    image: "/sdgs/14.png",
  },
  {
    id: 15,
    title: "SDG 15 - Life On Land",
    description: "",
    image: "/sdgs/15.png",
  },
  {
    id: 16,
    title: "SDG 16 - Peace, Justice, and Strong Institutions",
    description: "",
    image: "/sdgs/16.png",
  },
  {
    id: 17,
    title: "SDG 17 - Partnerships for the Goals",
    description: "",
    image: "/sdgs/17.png",
  },
];

export const articlesData: Article[] = [];

export const documentsData: Document[] = [];

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Articles",
    href: "/articles",
    icon: Newspaper,
  },
  {
    label: "Documents",
    href: "/sdgs",
    icon: File,
  },
  {
    label: "About",
    href: "/about-vsu",
    icon: Info,
  },
];
