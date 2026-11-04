<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- GitHub Pages uses a separate static build (vite.pages.config.ts + pages.html, output dist-pages, base /prompt-whisperers-guide/); the landing lives in src/components/Landing.tsx so both builds share it without server/router code.
