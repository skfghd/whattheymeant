import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";

export function Footer() {
  const footerLinks = [
    { name: "사이트 소개", url: "/about" },
    { name: "면책조항", url: "/disclaimer" },
    { name: "개인정보처리방침", url: "/privacy-policy" },
    { name: "이용약관", url: "/terms-of-service" },
    { name: "문의하기", url: "/contact" }
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Separator className="mb-6" />
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {footerLinks.map((link, index) => (
            <span key={link.name} className="flex items-center">
              <Link
                href={link.url}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="ml-6 text-muted-foreground/50">•</span>
              )}
            </span>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 KindTool.ai - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}