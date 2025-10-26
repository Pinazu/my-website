import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cards = [
  {
    id: "blogs",
    gradient: "linear-gradient(209.358deg, rgba(0, 0, 0, 0) 58.372%, rgba(242, 230, 0, 0.2) 76.523%), linear-gradient(190.599deg, rgba(233, 236, 245, 0.3) 9.8843%, rgba(204, 214, 235, 0.3) 57.218%), linear-gradient(141.089deg, rgba(163, 195, 217, 0.3) 3.6358%, rgba(239, 11, 11, 0.3) 77.695%), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 395 300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><g transform=&quot;matrix(-3.9 6.25 -19.513 -12.176 198 121.5)&quot; opacity=&quot;0.4000000059604645&quot;><rect height=&quot;204.65&quot; width=&quot;345.72&quot; fill=&quot;url(%23grad)&quot; id=&quot;quad&quot; shape-rendering=&quot;crispEdges&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(1 -1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 -1)&quot;/></g><defs><linearGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; x2=&quot;5&quot; y2=&quot;5&quot;><stop stop-color=&quot;rgba(163,195,217,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(178,200,167,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(194,204,116,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(209,209,66,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(217,212,41,1)&quot; offset=&quot;0.875&quot;/><stop stop-color=&quot;rgba(224,214,16,1)&quot; offset=&quot;1&quot;/></linearGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 395 300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><g transform=&quot;matrix(-7.85 3.5 -9.6608 -21.668 94 165.5)&quot; opacity=&quot;1&quot;><rect height=&quot;175.31&quot; width=&quot;417.6&quot; fill=&quot;url(%23grad)&quot; id=&quot;quad&quot; shape-rendering=&quot;crispEdges&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(1 -1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 -1)&quot;/></g><defs><linearGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; x2=&quot;5&quot; y2=&quot;5&quot;><stop stop-color=&quot;rgba(233,236,245,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(225,219,199,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(216,201,152,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(208,184,106,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(199,167,59,1)&quot; offset=&quot;1&quot;/></linearGradient></defs></svg>')",
    title: "Etiam eleifend orci elit, eget iaculis ligula consectetur et.",
    category: "Blogs",
    flipped: true,
  },
  {
    id: "case-studies",
    gradient: "linear-gradient(201.633deg, rgba(190, 110, 70, 0.4) 2.1899%, rgba(114, 134, 160, 0.4) 43.706%, rgba(205, 231, 176, 0.4) 64.144%), linear-gradient(179.215deg, rgba(190, 110, 70, 0.4) 2.9289%, rgba(114, 134, 160, 0.4) 65.62%, rgba(205, 231, 176, 0.4) 98.556%), linear-gradient(rgb(205, 231, 176) 0%, rgb(163, 191, 168) 75.962%, rgb(89, 89, 74) 100%)",
    title: "Aenean porta velit eu enim dapibus, id gravida metus auctor.",
    category: "Case Studies",
    flipped: false,
  },
  {
    id: "research",
    gradient: "url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 395 300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><rect x=&quot;0&quot; y=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; fill=&quot;url(%23grad)&quot; opacity=&quot;0.30000001192092896&quot;/><defs><radialGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; cx=&quot;0&quot; cy=&quot;0&quot; r=&quot;10&quot; gradientTransform=&quot;matrix(1.6 34.95 -46.018 2.1067 197.5 150)&quot;><stop stop-color=&quot;rgba(239,98,108,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(241,135,145,0.75)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(244,173,182,0.5)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(248,247,255,0)&quot; offset=&quot;1&quot;/></radialGradient></defs></svg>'), linear-gradient(180.824deg, rgba(248, 247, 255, 0) 1.6598%, rgba(206, 109, 160, 0.6) 43.585%, rgba(147, 129, 255, 0) 99.12%), linear-gradient(118.252deg, rgba(248, 247, 255, 0.4) 1.4492%, rgba(255, 238, 221, 0.4) 48.423%, rgba(255, 216, 190, 0.4) 91.351%), linear-gradient(160.705deg, rgb(248, 247, 255) 6.3484%, rgb(184, 184, 255) 42.353%, rgb(147, 129, 255) 75.118%)",
    title: "Nulla a ex diam. Donec quis orci sed purus porttitor blandit",
    category: "Research",
    flipped: false,
  },
  {
    id: "tutorials",
    gradient: "linear-gradient(135deg, rgba(255, 107, 0, 0.6) 0%, rgba(255, 159, 64, 0.4) 50%, rgba(255, 205, 86, 0.3) 100%), linear-gradient(45deg, rgba(75, 192, 192, 0.4) 0%, rgba(54, 162, 235, 0.5) 100%)",
    title: "Proin vel turpis at nisi fringilla consectetur vitae et felis.",
    category: "Tutorials",
    flipped: false,
  },
  {
    id: "insights",
    gradient: "linear-gradient(225deg, rgba(106, 17, 203, 0.5) 0%, rgba(37, 117, 252, 0.6) 50%), linear-gradient(315deg, rgba(250, 82, 82, 0.3) 0%, rgba(255, 159, 243, 0.4) 100%)",
    title: "Vestibulum ante ipsum primis in faucibus orci luctus et.",
    category: "Insights",
    flipped: true,
  },
  {
    id: "podcasts",
    gradient: "linear-gradient(170deg, rgba(52, 211, 153, 0.5) 0%, rgba(16, 185, 129, 0.6) 40%, rgba(6, 78, 59, 0.4) 100%), linear-gradient(280deg, rgba(253, 224, 71, 0.3) 0%, rgba(234, 179, 8, 0.4) 100%)",
    title: "Sed euismod nisi porta lorem mollis aliquam ut porttitor leo.",
    category: "Podcasts",
    flipped: false,
  },
  {
    id: "webinars",
    gradient: "url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 395 300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><rect x=&quot;0&quot; y=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; fill=&quot;url(%23grad)&quot; opacity=&quot;0.4&quot;/><defs><radialGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; cx=&quot;0&quot; cy=&quot;0&quot; r=&quot;10&quot; gradientTransform=&quot;matrix(2.5 28 -38 3.2 197.5 150)&quot;><stop stop-color=&quot;rgba(236,72,153,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(251,146,60,0.8)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(252,211,77,0.4)&quot; offset=&quot;1&quot;/></radialGradient></defs></svg>'), linear-gradient(145deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.5) 50%, rgba(251, 146, 60, 0.3) 100%)",
    title: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    category: "Webinars",
    flipped: false,
  },
  {
    id: "resources",
    gradient: "linear-gradient(190deg, rgba(14, 165, 233, 0.5) 0%, rgba(59, 130, 246, 0.6) 40%, rgba(99, 102, 241, 0.4) 100%), linear-gradient(340deg, rgba(139, 92, 246, 0.3) 0%, rgba(217, 70, 239, 0.4) 100%)",
    title: "Cras ultricies ligula sed magna dictum porta pellentesque.",
    category: "Resources",
    flipped: true,
  },
  {
    id: "news",
    gradient: "linear-gradient(155deg, rgba(248, 113, 113, 0.5) 0%, rgba(251, 191, 36, 0.4) 50%, rgba(52, 211, 153, 0.6) 100%), linear-gradient(280deg, rgba(96, 165, 250, 0.3) 0%, rgba(147, 197, 253, 0.4) 100%)",
    title: "Vivamus suscipit tortor eget felis porttitor volutpat nunc.",
    category: "News",
    flipped: false,
  },
];

export const features = [
  {
    title: "Auto-classified. Verified. Filed.",
    description:
      "BeeBlast automatically scans your receipts, invoices, and bank transactions, then prepares compliant tax reports — all within minutes.",
  },
  {
    title: "Built for freelancers and small business",
    description:
      "Tailored workflows keep solopreneurs organized with smart reminders, cash-flow snapshots, and one-click filings when you're ready.",
  },
  {
    title: "Quisque tincidunt elit ultricies quam",
    description:
      "Real-time anomaly detection flags unusual spend patterns instantly so you can correct issues before they snowball.",
  },
  {
    title: "Mauris dolor odio, rutrum",
    description:
      "Collaborate securely with accountants using shared workspaces, granular permissions, and immutable audit trails for every edit.",
  },
];

export const words = [
  "taxes,",
  "belastingen,",
  "bookkeeping,",
  "accountants,",
  "employee,",
  "imposte,",
  "impuestos,"
];
