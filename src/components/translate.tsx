"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function TranslationComponent() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-right">
          <Link
            href={`/${locale === "en" ? "km" : "en"}`}
            className="text-blue-500 hover:text-blue-700"
          >
            {t("common.selectLanguage")}
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">
          {t("home.title")}
        </h1>
      </div>
    </div>
  );
}
