import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />

      {/* Keep in Touch Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg">
              <span className="text-white">✉️</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Keep in Touch</DialogTitle>
              <DialogDescription>
                Leave your details and we'll get back to you soon!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <DialogClose asChild>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
