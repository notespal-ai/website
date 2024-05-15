import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://notespal.ai"

export const siteConfig: SiteConfig = {
  name: "NotesPal",
  author: "Alex Ou",
  description:
    "AI writer and notes application powered by state-of-the-art language models",
  keywords: [
    "Notes",
    "AI Writing",
    "AI Assistant",
    "Radix UI",
    "shadcn/ui",
    "LLM",
    "Chatbot",
    "GPT",
  ],
  url: {
    base: baseUrl,
    author: "https://notespal.ai",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "notespal.ai@gmail.com",
}
