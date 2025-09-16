import React from "react";

interface MetaDataProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function MetaData({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: MetaDataProps): React.ReactElement {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </>
  );
}
