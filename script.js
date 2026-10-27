const TICKET_URL="https://discord.com/channels/1329650065458855956/1562515581574455347/1564694753855934577";
const products=[
{name:"Discord IDs",emoji:"🪪",category:"discord",tag:"Discord",description:"পছন্দের ID ও বর্তমান অপশন সম্পর্কে জিজ্ঞেস করুন।"},
{name:"Discord Nitro",emoji:"💎",category:"discord",tag:"Discord",description:"Nitro-এর বর্তমান অপশন জানতে স্টাফকে বলুন।"},
{name:"Server Boosts",emoji:"🚀",category:"discord",tag:"Discord",description:"আপনার সার্ভারের জন্য বুস্ট অপশন সম্পর্কে জানুন।"},
{name:"Discord Bots",emoji:"🤖",category:"discord",tag:"Discord",description:"বট সার্ভিস ও কাস্টম বটের জন্য যোগাযোগ করুন।"},
{name:"Netflix Premium",emoji:"🎬",category:"subscriptions",tag:"Streaming",description:"সাবস্ক্রিপশন ও বর্তমান প্রাপ্যতা জানতে টিকিট খুলুন।"},
{name:"Spotify Premium",emoji:"🎵",category:"subscriptions",tag:"Music",description:"প্ল্যান ও যোগ্যতা সম্পর্কে স্টাফের সঙ্গে কথা বলুন।"},
{name:"Canva Premium",emoji:"🎨",category:"subscriptions",tag:"Creative",description:"ক্রিয়েটিভ টুলস ও সাবস্ক্রিপশন বিষয়ে জিজ্ঞেস করুন।"},
{name:"AI Subscriptions",emoji:"✨",category:"subscriptions",tag:"AI Tools",description:"AI টুলস ও প্ল্যানের প্রাপ্যতা জানতে টিকিট খুলুন।"},
{name:"Software Premium",emoji:"💻",category:"subscriptions",tag:"Software",description:"বৈধ সফটওয়্যার প্ল্যান ও লাইসেন্স সম্পর্কে জানুন।"},
{name:"VPN Premium",emoji:"🌐",category:"subscriptions",tag:"Privacy",description:"VPN প্ল্যান ও সমর্থিত অপশন সম্পর্কে জিজ্ঞেস করুন।"},
{name:"Streaming Services",emoji:"📺",category:"subscriptions",tag:"Streaming",description:"স্ট্রিমিং সার্ভিসের বর্তমান অপশন দেখুন।"},
{name:"Gaming Accounts",emoji:"🎮",category:"gaming",tag:"Gaming",description:"অ্যাকাউন্টের শর্ত ও স্টক নিশ্চিত করে নিন।"},
{name:"Game Currency",emoji:"🪙",category:"gaming",tag:"In-game",description:"গেম কারেন্সির বর্তমান স্টক জানতে টিকিট খুলুন।"},
{name:"Game Items",emoji:"🕹️",category:"gaming",tag:"In-game",description:"সমর্থিত গেম আইটেম সম্পর্কে স্টাফকে জিজ্ঞেস করুন।"},
{name:"Gift Cards",emoji:"🎁",category:"gaming",tag:"Gift Cards",description:"অর্ডারের আগে অঞ্চল, মূল্য ও স্টক নিশ্চিত করুন।"},
{name:"Digital Keys",emoji:"🔑",category:"gaming",tag:"Digital",description:"রিজিয়ন ও লাইসেন্সের বিস্তারিত জেনে নিন।"},
{name:"Social Media",emoji:"📱",category:"services",tag:"Services",description:"সোশ্যাল মিডিয়া সার্ভিস সম্পর্কে জানতে টিকিট খুলুন।"},
{name:"Membership",emoji:"🎫",category:"services",tag:"Membership",description:"মেম্বারশিপ ও অ্যাক্সেসের বিষয়ে যোগাযোগ করুন।"},
{name:"Custom Orders",emoji:"🛍️",category:"services",tag:"Custom",description:"বিশেষ কিছু প্রয়োজন? আমাদের টিমকে জানান।"},
{name:"Special Offers",emoji:"🔥",category:"services",tag:"Offers",description:"চলতি ডিল ও অফার সম্পর্কে স্টাফকে জিজ্ঞেস করুন।"},
{name:"Other Products",emoji:"📦",category:"services",tag:"More",description:"লিস্টে নেই? টিকিট খুলে আপনার প্রয়োজন জানান।"}
];
const grid=document.getElementById("grid"),search=document.getElementById("search"),empty=document.getElementById("empty");let activeFilter="all";
function safe(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){const q=search.value.trim().toLowerCase();const list=products.filter(p=>(activeFilter==="all"||p.category===activeFilter)&&[p.name,p.description,p.tag].some(v=>v.toLowerCase().includes(q)));grid.innerHTML=list.map(p=>`<article class="product"><div class="product-top"><span class="emoji">${p.emoji}</span><span class="tag">${safe(p.tag)}</span></div><h3>${safe(p.name)}</h3><p>${safe(p.description)}</p><div class="product-bottom"><span class="price">PRICE: OPEN TICKET</span><a class="ask" href="${TICKET_URL}" target="_blank" rel="noopener">ASK ↗</a></div></article>`).join("");empty.hidden=list.length>0;}
search.addEventListener("input",render);document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeFilter=b.dataset.filter;render();}));
const menu=document.getElementById("menu"),nav=document.getElementById("nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));document.getElementById("year").textContent=new Date().getFullYear();
if("IntersectionObserver"in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));}else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));render();
