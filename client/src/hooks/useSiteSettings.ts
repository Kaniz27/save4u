import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { SiteSettings } from "@/types";

const DEFAULT_SETTINGS: SiteSettings = {
  contactEmail: "support@save4u.co.uk",
  contactPhone: "+44 7350 320196",
  address: "Metloc Business Centre, Unit 15 & 16, 37 Victoria Road, Romford, London, RM1 2LH",
  socialLinks: { facebook: "#", linkedin: "#", instagram: "#", twitter: "#" },
};

export function useSiteSettings(): SiteSettings {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    api
      .get<SiteSettings>("/settings")
      .then((data) => setSettings(data && data.contactPhone ? data : DEFAULT_SETTINGS))
      .catch(() => setSettings(DEFAULT_SETTINGS));
  }, []);

  return settings;
}
