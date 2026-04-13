import Script from "next/script";
import { GA_MEASUREMENT_ID, trackEventScript } from "@/lib/analytics";

export function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {trackEventScript()}
      </Script>
    </>
  );
}
