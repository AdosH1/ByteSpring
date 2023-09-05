import Script from 'next/script'
 
export function GoogleAnalytics() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8XL3M6MP3K" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </div>
  )
}
 
