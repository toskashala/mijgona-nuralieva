export const heroQuery = `*[_type == "hero"][0] {
  firstName,
  lastName,
  headline,
  tagline,
  ctaButton {
    text,
    url
  }
}`;

export const aboutQuery = `*[_type == "about"][0] {
  title,
  subtitle,
  description1,
  description2,
  description3,
  "profileImage": profileImage.asset->url,
  skills
}`;

export const experiencesQuery = `*[_type == "experience"] | order(order asc) {
  title,
  company,
  period,
  description,
  skills
}`;

export const quoteBannerQuery = `*[_type == "quoteBanner" && isActive == true][0] {
  quote,
  author
}`;
