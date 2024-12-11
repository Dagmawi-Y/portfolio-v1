<script lang="ts">
  import BaseData from '$lib/data/base';

  export let title = 'Dagmawi Yohannes';
  export let description = 'Software Engineer based in Ethiopia, specializing in full-stack development, cloud computing, and AI/ML';
  export let keywords = 'Dagmawi Yohannes, Software Engineer, Ethiopia, Full Stack Developer, Cloud Computing, AI/ML, React, Node.js, Python, TypeScript, SvelteKit';
  export let image = '/images/me@360.jpg';
  export let url = 'https://dagmawi.me';
  export let type = 'website';
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <title>{title} | {BaseData.firstName} {BaseData.lastName}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content="Dagmawi Yohannes" />

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content={`${title} | ${BaseData.firstName} ${BaseData.lastName}`} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={type} />
  <meta property="og:site_name" content="Dagmawi Yohannes - Software Engineer" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@daggyohannes" />
  <meta name="twitter:creator" content="@daggyohannes" />
  <meta name="twitter:title" content={`${title} | ${BaseData.firstName} ${BaseData.lastName}`} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <!-- Additional SEO Meta Tags -->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <link rel="canonical" href={url} />

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dagmawi Yohannes",
      "jobTitle": "Software Engineer",
      "url": "https://dagmawi.me",
      "sameAs": [
        "https://github.com/Dagmawi-Y",
        "https://linkedin.com/in/dagmawi-y-hailu",
        "https://x.com/daggyohannes",
        "https://t.me/dag_mawi"
      ],
      "image": "/images/me@360.jpg",
      "description": "Software Engineer based in Ethiopia, specializing in full-stack development, cloud computing, and AI/ML",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Addis Ababa",
        "addressCountry": "Ethiopia"
      }
    })}
  </script>
</svelte:head> 