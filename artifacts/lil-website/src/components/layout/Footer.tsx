import logoPath from "@assets/WhatsApp_Image_2026-06-12_at_22.58.15_(1)_1781323608682.jpeg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white/10 p-2 rounded-lg inline-block">
               <img src={logoPath} alt="Leaders in Lipstick Logo" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-muted-foreground max-w-sm text-center md:text-left">
              Women-centric in identity. Inclusive in impact.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Leaders in Lipstick®. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
