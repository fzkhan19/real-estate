// Footer code
import {Facebook, Instagram, Twitter} from "lucide-react";
import Link from "next/link";

import {Label} from "@/components/ui/label";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-8 bg-primary/90 px-4 py-6 text-white">
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-2">
          <Label className="font-medium">Sales & Technical Support</Label>
          <Label className="font-medium">Address</Label>
          <Label className="font-normal text-sm">
            Phone Empire, Kaiserstraße 22, 66849 Landstuhl, Germany
          </Label>
          <Label className="mt-2 font-medium">Contact Information</Label>

          <div className="flex flex-col flex-wrap gap-x-4 gap-y-2 md:flex-row [&>*]:font-normal [&>*]:text-sm">
            <Label>Telephone: +49 176 70440689</Label>
            <Label>E-Mail: phoneempire@gmx.de</Label>
          </div>
        </div>
        <div className="order-2 flex flex-col md:order-1">
          <Label className="self-start font-normal text-sm md:self-end">
            © {new Date().getFullYear()} PHONE EMPIRE
          </Label>
          <Label className="self-start font-normal text-xs md:self-end">
            Made with ☕ by{" "}
            <Link className="font-medium underline" href="https://faiz-khan.in" target="_blank">
              Faiz Khan
            </Link>
          </Label>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
        <div className="order-1 flex flex-col gap-4 text-sm underline underline-offset-4 md:order-2 md:flex-row md:self-end">




          <Link href="#services" className="text-center md:text-left">Our Services</Link>
          <Link href="#prices" className="text-center md:text-left">Price List</Link>
          <Link href="#testimonials" className="text-center md:text-left">Testimonials</Link>
          <Link href="#contact" className="text-center md:text-left">Contact Us</Link>
        </div>


        <div className="order-3 flex items-center justify-center md:justify-start md:self-end">
          <div className="flex items-center">
            <div className="flex space-x-4">

              <Link href="https://instagram.com/company" rel="noopener noreferrer" target="_blank" className="transition-opacity hover:opacity-75">
                <Instagram size={16} />
              </Link>

              <Link href="https://twitter.com/company" rel="noopener noreferrer" target="_blank" className="transition-opacity hover:opacity-75">
                <Twitter size={16} />
              </Link>
              <Link
                href="https://facebook.com/company/company"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-opacity hover:opacity-75"
              >
                <Facebook size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
