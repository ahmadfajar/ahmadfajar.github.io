import{_ as e,k as t,Q as l,ad as i,c as a,K as p,J as o}from"./chunks/framework.DM5a4IX_.js";const b=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),h={name:"markdown-examples.md"},d={class:"important custom-block github-alert"},r={class:"custom-block-title"};function c(k,s,g,E,u,m){const n=o("BsIcon");return t(),l("div",null,[s[2]||(s[2]=i(`<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`js{4}</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is an info box, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a details block, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box, and <code>code text</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip, and <code>code text</code>.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning, and <code>code text</code>.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning, and <code>code text</code>.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block, and <code>code text</code>.</p></details>`,17)),a("div",d,[a("p",r,[p(n,{icon:"info_outlined"}),s[0]||(s[0]=a("span",{class:"ms-2 h6 mb-0"},"IMPORTANT",-1))]),s[1]||(s[1]=i(`<p>Starting from <strong>version 2.1.0</strong>, <strong>Vue MDBootstrap</strong> only provides minimal color variants in its main bundle (<code>dist/bundle.css</code>, <code>dist/bundle.min.css</code>) to reduce the file size. Other color variants are distributed in <code>dist/bundle-color.css</code> or <code>dist/bundle-color.min.css</code>.</p><p>Color variants that includes in the main bundle are: <em><code>default</code></em>, <em><code>primary</code></em>, <em><code>secondary</code></em>, <em><code>info</code></em>, <em><code>success</code></em>, <em><code>warning</code></em>, <em><code>danger</code></em>, <em><code>grey</code></em>, <em><code>light-grey</code></em>, <em><code>light</code></em>, <em><code>dark</code></em>, <em><code>black</code></em>, and <em><code>white</code></em>.</p><p>You can get the distribution with the following code:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file: main.ts or main.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Import components css stylesheet with minimum color variants</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue-mdbootstrap/styles&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Optional, import other color variants</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue-mdbootstrap/color-styles&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,4))]),s[3]||(s[3]=i(`<h3 class="mb-4" id="github-flavored-alerts" tabindex="-1">GitHub-flavored Alerts <a class="header-anchor" href="#github-flavored-alerts" aria-label="Permalink to &quot;GitHub-flavored Alerts {class=&quot;mb-4&quot;}&quot;">​</a></h3><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">!NOTE</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; Highlights information that users should take into account, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">!TIP</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; Optional information to help a user be more successful, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">!IMPORTANT</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; Crucial information necessary for users to succeed, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">!WARNING</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; Critical content demanding immediate user attention due to potential risks, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">!CAUTION</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; Negative potential consequences of an action, and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code text\`</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">.</span></span></code></pre></div><p><strong>Output</strong></p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>Highlights information that users should take into account, and <code>code text</code>.</p></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>Optional information to help a user be more successful, and <code>code text</code>.</p></div><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>Crucial information necessary for users to succeed, and <code>code text</code>.</p></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Critical content demanding immediate user attention due to potential risks, and <code>code text</code>.</p></div><div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p>Negative potential consequences of an action, and <code>code text</code>.</p></div><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,11))])}const x=e(h,[["render",c]]);export{b as __pageData,x as default};
