import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Free AI writer powered by the language models running on your own desktop.`,
  subheader: ` The ultimate AI writing & notes taking app. Full control, full privacy.`,
  image: `/demo.gif`,
}

export const download: ContentSection = {
  header: `Download NotesPal`,
  subheader: ``,
  content: [
    {
      text: `Windows`,
      subtext: `Beautifully designed components`,
      icon: "linux",
    },
    {
      text: `Mac`,
      subtext: `Develop. Preview. Ship.`,
      icon: "mac",
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      icon: "fileSearch",
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      icon: "barChart",
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      icon: "settings",
    },
  ],
}
