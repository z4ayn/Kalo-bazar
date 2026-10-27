# কালো বাজার — GitHub Pages website

এই ওয়েবসাইটটি ফ্রি GitHub Pages-এ চালানো যায়। কোনো Node.js বা build command লাগবে না।

## Android ফোন থেকে একদম ধাপে ধাপে

1. ZIP ফাইলটি ডাউনলোড করে ফোনের Files / My Files অ্যাপে Extract করুন।
2. https://github.com/new খুলে GitHub-এ নতুন **Public** repository বানান। নাম দিতে পারেন `kalo-bazar`।
3. repository-তে **Add file → Upload files** চাপুন।
4. Extract করা ফোল্ডারের ভেতরের ফাইলগুলো upload করুন। `index.html`, `style.css`, `script.js`, `robots.txt`, `sitemap.xml`, `assets` ফোল্ডার—সব root-এ থাকবে। ZIP ফাইল নিজে upload করলেই ওয়েবসাইট চালু হবে না; ZIP extract করে ভেতরের ফাইল upload করতে হবে।
5. নিচে গিয়ে **Commit changes** চাপুন।
6. repository-তে **Settings → Pages** খুলুন।
7. Build and deployment-এ **Deploy from a branch** নির্বাচন করুন। Branch `main`, folder `/(root)` দিয়ে **Save** করুন।
8. ১–৫ মিনিট অপেক্ষা করুন। Pages-এ দেখানো link খুলুন, সাধারণত `https://YOUR-USERNAME.github.io/kalo-bazar/` এর মতো হবে।

## প্রথমবারের জরুরি কাজ

Live link পাওয়ার পর `index.html`-এর canonical URL এবং `robots.txt` / `sitemap.xml`-এর `YOUR-USERNAME` ও `YOUR-REPOSITORY` নিজের আসল GitHub username/repository দিয়ে বদলান। তারপর Google Search Console-এ site verify করে sitemap submit করুন. Google-এ index হতে সময় লাগে; প্রথম স্থানে দেখানোর নিশ্চয়তা কেউ দিতে পারে না।

## কীভাবে edit করবেন

- নাম, লেখা, FAQ: `index.html`
- product নাম/emoji/description/category: `script.js`-এর `products` list
- colour/design/animation: `style.css`
- logo: `assets/logo.png` (আপনার দেওয়া লোগো রাখা আছে)
- Discord invite/ticket: `index.html` ও `script.js`-এ link বদলান

সব পণ্যের দাম ইচ্ছা করে **OPEN TICKET** রাখা হয়েছে। কোনো পণ্য বিক্রির অধিকার ও প্ল্যাটফর্মের নিয়ম মেনে তালিকাভুক্ত করুন; গ্রাহকের পাসওয়ার্ড, Discord token বা session cookie কখনো চাইবেন না।
