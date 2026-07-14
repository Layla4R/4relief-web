import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Button from "../ui/Button";
import styles from "./footer.module.css";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";

interface FooterProps {
  locale: "en" | "ar";
}

const footerText = {
  en: {
    brand:
      "A transparent humanitarian platform that connects donors and communities with trust.",
    explore: "Quick links",
    policies: "Legal policies",
    contact: "Get in touch",
    about: "About",
    projects: "Projects",
    news: "News",
    volunteer: "Volunteer",
    donate: "Donate",
    contactUs: "Contact us",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    support: "info@forrelief.org",
    whatsapp: "WhatsApp",
    whatsappNumber: "+90 507 774 25 42",
    follow: "Follow us",
    bottom: "All rights reserved.",
  },
  ar: {
    brand: "منصة إنسانية شفافة تربط المتبرعين بالمجتمعات الموثوقة.",
    explore: "روابط سريعة",
    policies: "السياسات القانونية",
    contact: "تواصل معنا",
    about: "من نحن",
    projects: "المشاريع",
    news: "الأخبار",
    volunteer: "التطوع",
    donate: "تبرع الآن",
    contactUs: "تواصل معنا",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    support: "info@forrelief.org",
    whatsapp: "واتساب",
    whatsappNumber: "+90 507 774 25 42",
    follow: "تابعنا",
    bottom: "جميع الحقوق محفوظة.",
  },
};

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const year = new Date().getFullYear();
  const base = `/${locale}`;
  const text = footerText[locale];
  const isRtl = locale === "ar";

  return (
    <footer className={styles.footer} dir={isRtl ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href={base} className={styles.logo}>
            4Relief
          </Link>
          <p className={styles.description}>{text.brand}</p>
          {/* <div className={styles.contactRow}>
            <a href="mailto:info@forrelief.org" className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <span>{text.support}</span>
            </a>
            <a href="https://wa.me/905077742542" className={styles.contactItem}>
              <Phone size={18} className={styles.contactIcon} />
              <span>{text.whatsappNumber}</span>
            </a>
          </div> */}

          <Button
            href={`${base}/donate`}
            variant="primary"
            className={styles.ctaButton}
          >
            {text.donate}
          </Button>
        </div>

        <div className={styles.divider} />

        <div className={styles.sections}>
          <div className={styles.section}>
            <h4>{text.explore}</h4>
            <ul className={styles.list}>
              <li>
                <ArrowRight size={16} className={styles.itemIcon} />
                <Link href={`${base}/about`} className={styles.link}>
                  {text.about}
                </Link>
              </li>
              <li>
                <ArrowRight size={16} className={styles.itemIcon} />
                <Link href={`${base}/projects`} className={styles.link}>
                  {text.projects}
                </Link>
              </li>
              <li>
                <ArrowRight size={16} className={styles.itemIcon} />
                <Link href={`${base}/news`} className={styles.link}>
                  {text.news}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>{text.policies}</h4>
            <ul className={styles.list}>
              <li>
                <ShieldCheck size={16} className={styles.itemIcon} />
                <Link href={`${base}/privacy`} className={styles.link}>
                  {text.privacy}
                </Link>
              </li>
              <li>
                <BookOpen size={16} className={styles.itemIcon} />
                <Link href={`${base}/terms`} className={styles.link}>
                  {text.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>{text.contact}</h4>
            <ul className={styles.contactList}>
              <li>
                <MdEmail  size={16} className={styles.itemIcon} />
                <a href="mailto:info@forrelief.org" className={styles.link}>
                  {text.support}
                </a>
              </li>
              <li>
                <SiWhatsapp  size={16} className={styles.itemIcon} />
                <a
                  href="https://wa.me/905077742542"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{text.whatsappNumber}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {year} 4Relief. {text.bottom}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
