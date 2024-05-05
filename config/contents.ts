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
      subtext: `Requires Windows 10 or later`,
      icon: "windows",
      link: "https://github.com/notespal-ai/website/releases/download/v1.0.0/NotesPal-1.0.0-win.exe",
    },
    {
      text: `MacOS`,
      subtext: `Requires macOS 11 Big Sur or later`,
      icon: "mac",
      link: "https://github.com/notespal-ai/website/releases/download/v1.0.0/NotesPal-1.0.0-mac.dmg",
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
