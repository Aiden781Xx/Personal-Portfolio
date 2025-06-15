import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Shivam Kumar Sharma - Full Stack Developer',
  description = 'Passionate Full Stack Developer specializing in MERN stack, backend development, and scalable web applications. Currently pursuing B.Tech in Computer Science with hands-on industry experience.',
  keywords = 'Full Stack Developer, MERN Stack, React.js, Node.js, JavaScript, Backend Developer, Web Development, API Development, MongoDB, Express.js',
  image = '/og-image.jpg',
  url = 'https://shivamsharma.dev',
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shivam Kumar Sharma" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Shivam Kumar Sharma Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shivam Kumar Sharma",
          "jobTitle": "Full Stack Developer",
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/shivam-sharma",
            "https://linkedin.com/in/shivam-sharma"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "StartUpWorld"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "G.L. Bajaj Institute of Technology and Management"
          }
        })}
      </script>
    </Helmet>
  );
};