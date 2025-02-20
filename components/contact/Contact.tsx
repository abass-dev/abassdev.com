"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { useTranslations } from "next-intl"; // Import useTranslations
import Form from "./Form";
import { Responsive } from "@/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Report from "../Report";

// Contact information type
interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: User,
    label: "Role",
    value: "Web and mobile app developer at self-employed"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Niamey, Niger"
  },
  {
    icon: Mail,
    label: "Email",
    value: "abass@abassdev.com",
    href: "mailto:abass@abassdev.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 59 820 8469",
    href: "tel:+233598208469"
  }
];

const ContactInfoItem: React.FC<ContactInfo> = ({ icon: Icon, label, value, href }) => {
  const content = (
    <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
      <Icon className="h-5 w-5" />
      <div>
        <dt className="sr-only">{label}</dt>
        <dd className="text-base">{value}</dd>
      </div>
    </div>
  );

  return (
    <div className="py-2">
      {href ? (
        <Link href={href} className="hover:underline">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

const Contact = () => {
  const t = useTranslations("contactPage"); // Access translations

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className={`font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}>
            {t("contactMe")} {/* Using translation */}
          </h1>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Abass Dev</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={index} {...info} />
                ))}
              </dl>

              {/* Additional Information */}
              <div className="mt-8 space-y-4">
                <p className="text-muted-foreground">
                  {t("collaborations")} {/* Using translation */}
                </p>
                <div className="flex gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    {t("availableForProjects")} {/* Using translation */}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card>
            <CardContent className="pt-6">
              <Form />
            </CardContent>
          </Card>
        </div>

        {/* Utilities */}
        <div className="mt-12">
          <Responsive />
        </div>
      </div>
      <Report report="contact/page" />
    </main>
  );
};

export default Contact;
