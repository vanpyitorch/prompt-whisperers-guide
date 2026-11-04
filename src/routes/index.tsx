import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Твой мир начинается с блока — фанатский лендинг Minecraft" },
      {
        name: "description",
        content:
          "Неофициальный фанатский лендинг о Minecraft: исследование, строительство, режимы Выживание и Творчество, галерея блочных миров.",
      },
      { property: "og:title", content: "Твой мир начинается с блока" },
      {
        property: "og:description",
        content: "Фанатская страница о свободе исследовать и строить в Minecraft.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
