"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <Select value={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[140px] bg-transparent border-none shadow-none focus:ring-0 text-gray-900 font-medium">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <span className="flex items-center gap-2">
             English
          </span>
        </SelectItem>
        <SelectItem value="es">
          <span className="flex items-center gap-2">
             Español
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
