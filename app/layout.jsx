import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BudgetBuddy - Finance Platform",
  description: "Your Personal Finance Companion for Budgeting and Expense Tracking",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className} antialiased`}>
          <Header />
          
          {/* Layout for unauthenticated users */}
          <SignedOut>
            <main className="min-h-screen">
              {children}
            </main>
          </SignedOut>
          
          {/* Layout for authenticated users */}
          <SignedIn>
            <main className="min-h-screen pt-16 bg-muted/30">
              <div className="container mx-auto p-6">
                {children}
              </div>
            </main>
          </SignedIn>
          
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}