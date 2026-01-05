import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Adventure Holidays | Travel Agency in Vadodara, Gujarat",
    description: "Discover unforgettable adventures with Gujarat's premier travel agency. Book adventure tours, cultural trips, family packages, and more. Located in Vadodara.",
    keywords: "travel agency, Vadodara, Gujarat, adventure tours, holiday packages, tourism",
    openGraph: {
        title: "Adventure Holidays | Travel Agency in Vadodara, Gujarat",
        description: "Discover unforgettable adventures with Gujarat's premier travel agency.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
