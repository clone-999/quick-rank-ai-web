import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Upload Your Video",
        description: "Choose any captivating video from platforms like YouTube or Vimeo and upload it to our app.",
        icon: FolderOpenIcon,
    },
    {
        title: "Convert to Blog Post",
        description: "Let our AI transform the video into a fully optimized, SEO-rich blog post tailored for top rankings.",
        icon: WandSparklesIcon,
    },
    {
        title: "Publish and Share",
        description: "Easily publish your blog post on your favorite platforms and watch your content drive traffic and generate revenue!",
        icon: BarChart3Icon,
    },
] as const;

export const FEATURES = [
    {
        title: "Link shortening",
        description: "Create short links that are easy to remember and share.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Sarah Thompson",
        username: "@SarahWrites",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        review: "QuickRankAI changed my content game! I can turn any video into a blog post in minutes. Love it!"
    },
    {
        name: "Michael Johnson",
        username: "@MikeTheMarketer",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        review: "This app is a lifesaver! My blog traffic has skyrocketed since using QuickRankAI. Highly recommend it!"
    },
    {
        name: "Emma Carter",
        username: "@EmmaCreates",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        review: "So easy to use! I upload a video, and the AI does the rest. Perfect for busy bloggers like me!"
    },
    {
        name: "David Lee",
        username: "@DavidInDemand",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        review: "I love how it optimizes my posts for SEO. My revenue has increased since I started using QuickRankAI!"
    },
    {
        name: "Jessica Brown",
        username: "@JessieWrites",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        review: "The ability to use any video is fantastic! I've transformed my content strategy and see results every day."
    },
    {
        name: "Liam Smith",
        username: "@LiamTheContentKing",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        review: "QuickRankAI is a game-changer! I can publish quality content quickly and start earning without any hassle."
    },
    {
        name: "Olivia Wilson",
        username: "@OliviaOnTheGo",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        review: "I can’t believe how fast I can create blog posts now! It’s perfect for my growing business!"
    },
    {
        name: "James Taylor",
        username: "@JTGuru",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4,
        review: "Super user-friendly! The AI does an amazing job of creating engaging content. My audience loves it!"
    },
    {
        name: "Mia Robinson",
        username: "@MiaWritesWell",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        review: "I started making money from my blog after using QuickRankAI! It's the best investment I’ve made!"
    },
] as const;
