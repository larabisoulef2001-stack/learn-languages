var LANG=(function(){try{return localStorage.getItem("lang")||"en"}catch(e){return"en"}})(),LC={de:"de-DE",fr:"fr-FR",tr:"tr-TR"}[LANG]||"en-US",LN={de:"Deutsch",fr:"Français",tr:"Türkçe"}[LANG]||"English",SFX=LANG=="en"?"":"-"+LANG;
var N=["ay","bee","see","dee","ee","eff","gee","aitch","eye","jay","kay","el","em","en","oh","pee","queue","ar","ess","tee","you","vee","double you","ex","why","zee"];
var L=[["A","æ","apple","🍎","أَ"],["B","b","ball","⚽","بْ"],["C","k","cat","🐱","كْ"],["D","d","dog","🐶","دْ"],["E","e","egg","🥚","إِ"],["F","f","fish","🐟","فْ"],["G","g","goat","🐐","ڨْ"],["H","h","hat","🎩","هْ"],["I","ɪ","iguana","🦎","إِ قصيرة"],["J","dʒ","juice","🧃","جْ"],["K","k","key","🔑","كْ"],["L","l","lion","🦁","لْ"],["M","m","moon","🌙","مْ"],["N","n","nose","👃","نْ"],["O","ɒ","orange","🍊","أُ مفتوحة"],["P","p","pizza","🍕","پْ"],["Q","kw","queen","👑","كْوْ"],["R","r","rabbit","🐰","رْ"],["S","s","sun","☀️","سْ"],["T","t","tree","🌳","تْ"],["U","ʌ","umbrella","☂️","أَ"],["V","v","van","🚐","ڤْ"],["W","w","water","💧","وْ"],["X","ks","x-ray","🩻","كْسْ"],["Y","j","yellow","💛","يْ"],["Z","z","zebra","🦓","زْ"]];
var VW=[["cat","🐱","a"],["hat","🎩","a"],["bed","🛏️","e"],["pen","🖊️","e"],["pig","🐷","i"],["fish","🐟","i"],["dog","🐶","o"],["box","📦","o"],["sun","☀️","u"],["bus","🚌","u"]];
var DW=[["ship","🚢","sh"],["shop","🛍️","sh"],["chair","🪑","ch"],["cheese","🧀","ch"],["three","3️⃣","th"],["thumb","👍","th"],["phone","📱","ph"],["ring","💍","ng"]];
var DA={sh:"ش",ch:"تش",th:"ث (طرف اللسان بين الأسنان)",ph:"ف",ng:"نغ خفيفة"};
function pick(a,n){return a.slice().sort(function(){return Math.random()-.5}).slice(0,n)}
function opts(c,all){return pick([c].concat(pick(all.filter(function(x){return x!=c}),3)),4)}
function fbq(fb){return function(){return pick(fb,8).map(function(x){var o=x[2].split("|");return{q:x[0],a:x[1],o:pick(o,o.length),s:x[0].replace("___",x[1])}})}}
function cd(a){return a.map(function(x){return[x[0],x[1],x[2],x[0]]})}
var CUR=[
{id:"0",n:"المستوى 0 — الصوتيات والحروف",u:[
{id:"0a",t:"1. الحروف A–Z",cards:L.map(function(x,i){return[x[0]+" "+x[0].toLowerCase()+" — "+x[2],"/"+x[1]+"/ ≈ "+x[4],x[3],N[i]+", "+x[2]]}),w:L.map(function(x){return[x[3],x[2]]}),sp:L.map(function(x){return x[2]}),qs:function(){return pick(L,8).map(function(x){return{q:'<span class="e">'+x[3]+'</span>بأي حرف تبدأ "'+x[2]+'"؟',a:x[0],o:opts(x[0],L.map(function(y){return y[0]})),s:x[2]}})}},
{id:"0b",t:"2. الحروف المتحركة a e i o u",cards:[["a e i o u","5 حروف متحركة، كل واحد عندو صوت قصير","🔤","a, e, i, o, u"]].concat(VW.map(function(x){return[x[0]+"  →  "+x[2],"الحرف المتحرك: "+x[2],x[1],x[0]]})),w:VW.map(function(x){return[x[1],x[0]]}),sp:VW.map(function(x){return x[0]}),qs:function(){return pick(VW,8).map(function(x){return{q:'<span class="e">'+x[1]+'</span>أي حرف متحرك في "'+x[0]+'"؟',a:x[2],o:opts(x[2],["a","e","i","o","u"]),s:x[0]}})}},
{id:"0c",t:"3. الأصوات المركبة sh ch th ph ng",cards:DW.map(function(x){return[x[0]+"  →  "+x[2],"الصوت "+x[2]+" ≈ "+DA[x[2]],x[1],x[0]]}),w:DW.map(function(x){return[x[1],x[0]]}),sp:DW.map(function(x){return x[0]}),qs:function(){return pick(DW,8).map(function(x){return{q:'<span class="e">'+x[1]+'</span>أي صوت مركب في "'+x[0]+'"؟',a:x[2],o:opts(x[2],["sh","ch","th","ph","ng"]),s:x[0]}})}}
]},
{id:"A1",n:"المستوى A1 — المبتدئ",u:[
{id:"A1a",t:"1. الفعل to be (am / is / are)",v:{b:"to be — يكون",r:[["I","am"],["you","are"],["he / she / it","is"],["we","are"],["they","are"]],n:"النفي: I am not · he is not · they are not. السؤال: Are you a student?"},cards:cd([["I am a student.","أنا طالبة","🎓"],["She is happy.","هي سعيدة","😊"],["We are friends.","نحن أصدقاء","🤝"],["They are at home.","هم في البيت","🏠"],["It is a cat.","هذه قطة","🐱"]]),w:[["أنا سعيدة","I am happy."],["هي طالبة","She is a student."],["نحن أصدقاء","We are friends."],["هم في البيت","They are at home."]],sp:["I am a student.","She is happy.","We are friends.","They are at home."],qs:fbq([["I ___ a student.","am","am|is|are"],["She ___ happy.","is","am|is|are"],["We ___ friends.","are","am|is|are"],["They ___ at home.","are","am|is|are"],["It ___ a cat.","is","am|is|are"],["You ___ my friend.","are","am|is|are"],["He ___ a doctor.","is","am|is|are"],["I ___ tired.","am","am|is|are"]])},
{id:"A1b",t:"2. الفعل to have (have / has)",v:{b:"to have — يملك / عندو",r:[["I","have"],["you","have"],["he / she / it","has"],["we","have"],["they","have"]],n:"مع he / she / it نستعمل has."},cards:cd([["I have a book.","عندي كتاب","📘"],["She has a cat.","عندها قطة","🐱"],["We have a car.","عندنا سيارة","🚗"],["He has a phone.","عندو هاتف","📱"],["They have a house.","عندهم دار","🏡"]]),w:[["عندي كتاب","I have a book."],["عندها قطة","She has a cat."],["عندنا سيارة","We have a car."],["عندو هاتف","He has a phone."]],sp:["I have a book.","She has a cat.","We have a car.","He has a phone."],qs:fbq([["I ___ a book.","have","have|has"],["He ___ a car.","has","have|has"],["She ___ a cat.","has","have|has"],["We ___ a house.","have","have|has"],["They ___ a dog.","have","have|has"],["It ___ a tail.","has","have|has"],["You ___ a phone.","have","have|has"],["My brother ___ a bike.","has","have|has"]])},
{id:"A1c",t:"3. المضارع البسيط (+s مع he/she/it)",v:{b:"to play — يلعب",r:[["I","play"],["you","play"],["he / she / it","plays"],["we","play"],["they","play"]],n:"مع he / she / it نزيدو s على الفعل."},cards:cd([["I eat bread.","ناكل الخبز","🍞"],["He drinks water.","يشرب الماء","💧"],["She plays football.","تلعب كرة القدم","⚽"],["We go to school.","نروحو للمدرسة","🏫"],["They work every day.","يخدمو كل يوم","💼"]]),w:[["أنا آكل الخبز","I eat bread."],["هو يشرب الماء","He drinks water."],["هي تلعب كرة القدم","She plays football."],["نحن نذهب للمدرسة","We go to school."]],sp:["I eat bread.","He drinks water.","She plays football.","We go to school."],qs:fbq([["He ___ water.","drinks","drink|drinks"],["I ___ bread.","eat","eat|eats"],["She ___ football.","plays","play|plays"],["We ___ to school.","go","go|goes"],["They ___ every day.","work","work|works"],["My mother ___ tea.","drinks","drink|drinks"],["You ___ English.","study","study|studies"],["He ___ to school.","goes","go|goes"]])}
]},
{id:"A2",n:"المستوى A2",u:[]},{id:"B1",n:"المستوى B1",u:[]},{id:"B2",n:"المستوى B2",u:[]},{id:"C1",n:"المستوى C1",u:[]},{id:"C2",n:"المستوى C2",u:[]}
];

function U(id,t,it){return{id:id,t:t,cards:it.map(function(x){return[x[0],x[1],x[2],x[0]]}),w:it.map(function(x){return[x[1]+" "+x[2],x[0]]}),sp:it.map(function(x){return x[0]}),qs:function(){return pick(it,Math.min(8,it.length)).map(function(x){return{q:'<span class="e">'+x[2]+'</span>'+x[1],a:x[0],o:opts(x[0],it.map(function(y){return y[0]})),s:x[0]}})}}}
function P(id,t,r){return{id:id,t:t,cards:r.map(function(x){return[x[0]+"  →  "+x[1],x[3],x[2],x[1]]}),w:r.map(function(x){return[x[2],x[1]]}),sp:r.map(function(x){return x[1]}),qs:function(){return pick(r,Math.min(8,r.length)).map(function(x){return{q:'<span class="e">'+x[2]+'</span>أي تركيب في "'+x[1]+'"؟',a:x[0],o:opts(x[0],r.map(function(y){return y[0]})),s:x[1]}})}}}
function T(id,t,b,r,n,sn,fb){return{id:id,t:t,v:{b:b,r:r,n:n},cards:cd(sn),w:sn.map(function(x){return[x[1],x[0]]}),sp:sn.map(function(x){return x[0]}),qs:fbq(fb)}}
var PH0=CUR[0].u.splice(1,2);CUR[0].n="المرحلة 1 — الحروف";
var A1L=CUR[1],YN="1️⃣|2️⃣|3️⃣".length;
CUR.splice(1,0,
{id:"B",n:"المرحلة 2 — الأرقام، الألوان، الساعة، العائلة",u:[
U("n1","1. الأرقام 1–10",[["one","1","1️⃣"],["two","2","2️⃣"],["three","3","3️⃣"],["four","4","4️⃣"],["five","5","5️⃣"],["six","6","6️⃣"],["seven","7","7️⃣"],["eight","8","8️⃣"],["nine","9","9️⃣"],["ten","10","🔟"]]),
U("n2","2. الأرقام 11–20",[["eleven","11","🔢"],["twelve","12","🔢"],["thirteen","13","🔢"],["fourteen","14","🔢"],["fifteen","15","🔢"],["sixteen","16","🔢"],["seventeen","17","🔢"],["eighteen","18","🔢"],["nineteen","19","🔢"],["twenty","20","🔢"]]),
U("n3","3. العشرات والمئات",[["thirty","30","🔢"],["forty","40","🔢"],["fifty","50","🔢"],["sixty","60","🔢"],["seventy","70","🔢"],["eighty","80","🔢"],["ninety","90","🔢"],["one hundred","100","💯"],["one thousand","1000","🔢"]]),
U("col","4. الألوان",[["red","أحمر","🔴"],["blue","أزرق","🔵"],["green","أخضر","🟢"],["yellow","أصفر","🟡"],["orange","برتقالي","🟠"],["purple","بنفسجي","🟣"],["black","أسود","⚫"],["white","أبيض","⚪"],["brown","بني","🟤"],["pink","وردي","🌸"]]),
U("day","5. أيام الأسبوع",[["Monday","الاثنين","📅"],["Tuesday","الثلاثاء","📅"],["Wednesday","الأربعاء","📅"],["Thursday","الخميس","📅"],["Friday","الجمعة","📅"],["Saturday","السبت","📅"],["Sunday","الأحد","📅"]]),
U("sea","6. الفصول والطقس",[["spring","الربيع","🌸"],["summer","الصيف","☀️"],["autumn","الخريف","🍂"],["winter","الشتاء","❄️"],["hot","حار","🥵"],["cold","بارد","🥶"],["rainy","ممطر","🌧️"],["windy","عاصف","💨"]]),
U("clk","7. الساعة",[["It is one o'clock.","الساعة الواحدة","🕐"],["It is three o'clock.","الساعة الثالثة","🕒"],["It is half past six.","السادسة والنصف","🕡"],["It is quarter past two.","الثانية والربع","🕑"],["It is quarter to five.","الخامسة إلا ربع","🕔"],["It is noon.","الظهر","🌞"],["It is midnight.","منتصف الليل","🌙"],["What time is it?","شحال الساعة؟","⏰"]]),
U("fam","8. أفراد العائلة",[["mother","أم","👩"],["father","أب","👨"],["brother","أخ","👦"],["sister","أخت","👧"],["grandmother","جدة","👵"],["grandfather","جد","👴"],["uncle","عم أو خال","🧔"],["aunt","عمة أو خالة","👩‍🦰"],["son","ابن","👶"],["husband","زوج","🤵"],["wife","زوجة","👰"],["cousin","ابن العم","🧑"]])]},
{id:"C",n:"المرحلة 3 — الحياة اليومية",u:[
U("kit","1. المطبخ",[["fridge","ثلاجة","🧊"],["oven","فرن","♨️"],["knife","سكين","🔪"],["spoon","ملعقة","🥄"],["fork","شوكة","🍴"],["plate","صحن","🍽️"],["cup","كوب","☕"],["pan","مقلاة","🍳"],["pot","قدر","🍲"],["sink","مغسلة","🚰"]]),
U("hom","2. المنزل",[["door","باب","🚪"],["window","نافذة","🪟"],["bed","سرير","🛏️"],["sofa","أريكة","🛋️"],["bathroom","حمام","🛁"],["bedroom","غرفة النوم","🛌"],["garden","حديقة","🌷"],["stairs","سلالم","🪜"],["key","مفتاح","🔑"],["lamp","مصباح","💡"]]),
U("wrk","3. العمل",[["office","مكتب","🏢"],["boss","مدير","👔"],["meeting","اجتماع","🗣️"],["computer","حاسوب","💻"],["desk","طاولة المكتب","🖥️"],["salary","راتب","💰"],["job","وظيفة","💼"],["email","بريد إلكتروني","📧"],["phone","هاتف","📱"],["team","فريق","🤝"]]),
U("mkt","4. السوق",[["price","ثمن","🏷️"],["cheap","رخيص","🪙"],["expensive","غالي","💎"],["buy","يشتري","🛒"],["sell","يبيع","🏪"],["bread","خبز","🍞"],["vegetables","خضار","🥕"],["fruit","فواكه","🍎"],["bag","كيس","👜"],["money","مال","💵"],["How much is this?","بشحال هذا؟","❓"]]),
U("hot","5. الفندق",[["hotel","فندق","🏨"],["reservation","حجز","📝"],["reception","استقبال","🛎️"],["breakfast","فطور","🥐"],["passport","جواز سفر","🛂"],["luggage","أمتعة","🧳"],["elevator","مصعد","🛗"],["check in","تسجيل الدخول","✅"],["check out","تسجيل الخروج","👋"],["I have a reservation.","عندي حجز","📝"]]),
U("stu","6. الدراسة",[["teacher","معلم","👩‍🏫"],["student","طالب","🎓"],["book","كتاب","📘"],["notebook","كراس","📓"],["pen","قلم","🖊️"],["exam","امتحان","📝"],["lesson","درس","📖"],["homework","واجب","📚"],["school","مدرسة","🏫"],["university","جامعة","🏛️"]])]},
{id:"D",n:"المرحلة 4 — الصوتيات وتركيب الحروف",u:PH0.concat([
P("bl","3. تركيب الحروف حرف مع حرف",[["m + a + n","man","👨"],["c + u + p","cup","☕"],["r + e + d","red","🔴"],["b + a + g","bag","👜"],["l + e + g","leg","🦵"],["f + o + x","fox","🦊"],["b + i + g","big","🐘"],["t + o + p","top","🔝"]].map(function(r){return r.concat(["نطقي كل حرف وحدو ثم اجمعيهم بسرعة: "+r[1]])})),
P("ph1","4. حروف مجتمعة: ee ea oo ou ow ai ay oa igh",[["ee","see","👀","ee = إي طويلة /iː/"],["ea","tea","🍵","ea غالبا إي طويلة"],["oo","moon","🌙","oo = أو طويلة /uː/"],["ou","house","🏠","ou = آو /aʊ/"],["ow","cow","🐄","ow = آو /aʊ/"],["ai","rain","🌧️","ai = إي /eɪ/"],["ay","day","📅","ay = إي في آخر الكلمة"],["oa","boat","⛵","oa = أُو /oʊ/"],["igh","light","💡","igh = آي، و gh ما تتنطقش"]]),
P("ph2","5. ar or ir ur، e الصامتة، حروف ما تتنطقش",[["ar","car","🚗","ar = آر"],["or","fork","🍴","or = أُور"],["ir","bird","🐦","ir = إِر"],["ur","nurse","👩‍⚕️","ur = إِر"],["a_e","cake","🍰","e في الآخر ما تتنطقش وتخلي a تتنطق إي"],["i_e","bike","🚲","e الصامتة تخلي i تتنطق آي"],["o_e","nose","👃","e الصامتة تخلي o تتنطق أُو"],["kn","knife","🔪","k صامتة، تتنطق n"],["wr","write","✍️","w صامتة"],["ck","clock","🕐","ck = ك"]])])}
);
A1L.u.push(
T("A1d","4. الماضي من to be (was / were)","to be (past) — كان",[["I","was"],["you","were"],["he / she / it","was"],["we","were"],["they","were"]],"was مع I/he/she/it، were مع you/we/they.",[["I was tired.","كنت تعبانة","😴"],["She was at home.","كانت في الدار","🏠"],["We were happy.","كنا سعداء","😊"],["They were late.","كانو متأخرين","⏰"],["You were right.","كنتي على حق","✔️"]],[["I ___ tired.","was","was|were"],["She ___ at home.","was","was|were"],["We ___ happy.","were","was|were"],["They ___ late.","were","was|were"],["You ___ right.","were","was|were"],["He ___ a student.","was","was|were"],["It ___ cold.","was","was|were"],["The kids ___ in the garden.","were","was|were"]]),
T("A1e","5. الماضي البسيط (ed)","play — played",[["I","played"],["you","played"],["he / she / it","played"],["we","played"],["they","played"]],"الماضي المنتظم: نزيدو ed، ونفس الشكل مع كل الضمائر. study تولي studied.",[["I played football.","لعبت كرة القدم","⚽"],["She watched TV.","شافت التلفزة","📺"],["We cooked dinner.","طيبنا العشاء","🍲"],["They visited me.","زاروني","👥"],["He studied English.","قرا إنجليزي","📚"]],[["Yesterday I ___ football.","played","play|played|plays"],["She ___ TV last night.","watched","watch|watched|watches"],["We ___ dinner.","cooked","cook|cooked|cooks"],["He ___ English.","studied","study|studied|studyed"],["They ___ to me.","talked","talk|talked|talks"],["I ___ the door.","opened","open|opened|opens"],["She ___ the dishes.","washed","wash|washed|washes"],["We ___ a movie.","watched","watch|watched|watches"]]),
T("A1f","6. الماضي الشاذ","أفعال شاذة (حاضر ← ماضي)",[["go","went"],["eat","ate"],["see","saw"],["have","had"],["make","made"],["come","came"],["take","took"],["write","wrote"]],"هذي الأفعال ما تاخذش ed، لازم نحفظوها.",[["I went to school.","رحت للمدرسة","🏫"],["She ate bread.","كلات الخبز","🍞"],["We saw a movie.","شفنا فيلم","🎬"],["He made tea.","دار الأتاي","🍵"],["They came late.","جاو متأخرين","⏰"]],[["Yesterday I ___ to school.","went","go|went|goed"],["She ___ bread.","ate","eat|ate|eated"],["We ___ a movie.","saw","see|saw|seed"],["He ___ tea.","made","make|made|maked"],["They ___ late.","came","come|came|comed"],["I ___ a book.","took","take|took|taked"],["She ___ a letter.","wrote","write|wrote|writed"],["We ___ a car.","had","have|had|haved"]]),
T("A1h","7. المضارع المستمر (ing)","to eat — يأكل الآن",[["I","am eating"],["you","are eating"],["he / she / it","is eating"],["we","are eating"],["they","are eating"]],"am/is/are + الفعل+ing للشي لي يصرا دوك.",[["I am eating.","راني ناكل","🍽️"],["She is reading.","راهي تقرا","📖"],["We are walking.","رانا نمشيو","🚶"],["They are playing.","راهم يلعبو","⚽"],["He is sleeping.","راه راقد","😴"]],[["I ___ eating now.","am","am|is|are"],["She ___ reading.","is","am|is|are"],["We ___ walking.","are","am|is|are"],["They are ___.","playing","play|playing|plays"],["He is ___.","sleeping","sleep|sleeping|slept"],["It is ___.","raining","rain|raining|rained"],["You ___ studying.","are","am|is|are"],["I am ___ tea.","drinking","drink|drinking|drank"]]),
T("A1g","8. المستقبل (will)","will + الفعل — المستقبل",[["I","will play"],["you","will play"],["he / she / it","will play"],["we","will play"],["they","will play"]],"will + الفعل بلا تغيير مع كل الضمائر. النفي: will not (won't).",[["I will call you.","نتصل بيك","📞"],["She will travel tomorrow.","تسافر غدوة","✈️"],["We will study tonight.","نقراو الليلة","📖"],["They will come soon.","يجو قريب","🔜"],["It will rain.","تمطر","🌧️"]],[["Tomorrow I ___ call you.","will","will|did|am"],["She ___ travel tomorrow.","will","will|was|has"],["We will ___ tonight.","study","study|studied|studies"],["They will ___ soon.","come","come|came|comes"],["It ___ rain.","will","will|was|did"],["I will ___ you.","help","help|helped|helps"],["He ___ visit us.","will","will|did|is"],["We will ___ English.","learn","learn|learned|learns"]])
);
function SU(id,t,emo,n,r){return{id:id,t:t,v:{b:t,r:[],n:n},cards:r.map(function(x){return[x[0],x[1],emo,x[0]]}),w:r.map(function(x){return[x[1],x[0]]}),sp:r.map(function(x){return x[0]}),qs:function(){return pick(r,Math.min(6,r.length)).map(function(x){return{q:'<span class="e">'+emo+'</span>'+x[0].replace(x[2],"___")+'<br><small>'+x[1]+'</small>',a:x[2],o:pick(x[3].split("|"),3),s:x[0]}})}}}
var HL={A2:[SU("A2a","1. can / must / should","💪","can = القدرة، must = واجب، should = نصيحة. بعدهم الفعل بلا to.",[["I can swim.","نعرف نعوم","can","can|must|should"],["You must wear a seatbelt.","لازم تلبس حزام الأمان","must","can|must|should"],["You should drink water.","ننصحك تشرب الماء","should","can|must|should"],["He can't drive.","ما يعرفش يسوق","can't","can|can't|must"],["Can I come in?","نقدر ندخل؟","Can","Can|Must|Should"]]),SU("A2b","2. المقارنة","⚖️","الكلمة القصيرة: er / est. الطويلة: more / most. الشاذة: good, better, best.",[["She is taller than me.","هي أطول مني","taller","tall|taller|tallest"],["This is the biggest house.","هذي أكبر دار","biggest","big|bigger|biggest"],["English is more interesting than math.","الإنجليزية أمتع من الرياضيات","more","more|most|much"],["He is the most famous player.","هو أشهر لاعب","most","more|most|much"],["My phone is better than yours.","هاتفي أحسن من هاتفك","better","good|better|best"],["It is the worst day.","هذا أسوأ نهار","worst","bad|worse|worst"]]),SU("A2c","3. الماضي التام (have + III)","✔️","have/has + التصريف الثالث (go ← gone، eat ← eaten، see ← seen). نستعملوه لحاجة صرات وتأثيرها باقي.",[["I have finished my work.","كملت خدمتي","have","have|has|had"],["She has visited Paris.","زارت باريس","has","have|has|had"],["We have never seen snow.","عمرنا ما شفنا الثلج","seen","saw|seen|see"],["He has eaten already.","هو كلا من قبل","eaten","ate|eaten|eat"],["Have you ever been to Spain?","واش مرة رحتي لإسبانيا؟","been","be|been|was"],["They have lived here since 2010.","يسكنو هنا من 2010","lived","live|lived|living"]])],
B1:[SU("B1a","1. الماضي المستمر","⏳","was/were + ing: حاجة كانت تصرا في وقت معين في الماضي.",[["I was sleeping at ten.","كنت راقدة على العاشرة","sleeping","sleep|sleeping|slept"],["They were playing outside.","كانو يلعبو برا","were","was|were|are"],["She was cooking when I arrived.","كانت تطيب كي وصلت","cooking","cook|cooking|cooked"],["It was raining all day.","كانت تمطر كامل النهار","was","was|were|is"],["We were studying when the power went out.","كنا نقراو كي راح الضوء","studying","study|studying|studied"]]),SU("B1b","2. الشرط الأول (if)","🔀","if + مضارع، will + الفعل: شرط ممكن في المستقبل.",[["If it rains, we will stay home.","إذا مطرت نبقاو في الدار","will","will|would|are"],["If you study, you will pass.","إذا قريتي تنجحي","study","study|studied|will study"],["She will be late if she misses the bus.","تتأخر إذا فاتها الباص","misses","misses|missed|will miss"],["If I see him, I will tell him.","إذا شفتو نقولو","see","see|saw|will see"],["We will go out if the weather is nice.","نخرجو إذا كان الجو زوين","is","is|was|will be"]]),SU("B1c","3. المبني للمجهول","📩","be + التصريف الثالث: لما الفاعل مش مهم أو مجهول.",[["English is spoken here.","الإنجليزية تتهدر هنا","spoken","speak|spoken|spoke"],["The cake was made by my mother.","الكيك دارتو ماما","made","make|made|making"],["The window was broken yesterday.","الشباك تكسر البارح","broken","break|broken|broke"],["Cars are made in factories.","السيارات تتصنع في المصانع","are","is|are|were"],["The letter has been sent.","الرسالة تبعثت","been","be|been|was"]]),SU("B1d","4. who / which / where / whose","🔗","who للأشخاص، which للأشياء، where للمكان، whose للملكية.",[["The man who lives next door is kind.","الراجل لي يسكن حدانا طيب","who","who|which|where"],["The book which I read was great.","الكتاب لي قريتو كان رائع","which","who|which|where"],["This is the school where I studied.","هذي المدرسة لي قريت فيها","where","who|which|where"],["I know a girl whose father is a doctor.","نعرف بنت باباها طبيب","whose","who|whose|which"],["The woman who called you is my aunt.","المرا لي اتصلت بيك هي عمتي","who","who|which|where"]])],
B2:[SU("B2a","1. الشرط الثاني","💭","if + ماضي، would + الفعل: شرط خيالي أو غير واقعي.",[["If I had money, I would buy a house.","لو عندي المال نشري دار","had","have|had|would have"],["If she knew, she would help.","لو تعرف تعاون","would","will|would|did"],["I would travel if I were rich.","نسافر لو كنت غني","were","am|was|were"],["If we lived near, we would visit more.","لو نسكنو قريب نزورو أكثر","lived","live|lived|would live"],["What would you do if you won?","واش تدير لو ربحتي؟","would","will|would|did"]]),SU("B2b","2. الماضي الأبعد (had + III)","⏪","had + التصريف الثالث: حاجة صرات قبل حاجة أخرى في الماضي.",[["When I arrived, the film had started.","كي وصلت الفيلم كان بدا","had","has|had|have"],["She had already left.","كانت راحت من قبل","left","leave|left|leaving"],["We had finished before noon.","كملنا قبل الظهر","finished","finish|finished|finishing"],["He said he had seen it.","قال أنه شافو","seen","saw|seen|see"],["They hadn't eaten, so they were hungry.","ما كانوش كلاو، وعلى هذا جاعو","hadn't","hadn't|haven't|didn't"]]),SU("B2c","3. الكلام المنقول","🗣️","نرجعو خطوة للماضي: will ← would، can ← could، am ← was.",[["She said she was tired.","قالت أنها تعبانة","was","is|was|were"],["He told me he would come.","قالي أنه يجي","would","will|would|did"],["They said they could help.","قالو أنهم يقدرو يعاونو","could","can|could|may"],["I asked her where she lived.","سقسيتها وين تسكن","lived","lives|lived|live"],["He said that he had finished.","قال أنه كمل","had","has|had|have"]]),SU("B2d","4. ربط الجمل","🧩","although و despite = رغم. however = ومع ذلك. because = لأن. so = ولهذا.",[["Although it was cold, we went out.","رغم أن الجو بارد خرجنا","Although","Although|Because|So"],["She was tired; however, she kept working.","كانت تعبانة، ومع ذلك كملت","however","however|because|so"],["Despite the rain, we played.","رغم المطر لعبنا","Despite","Despite|Because|Although"],["I stayed home because I was sick.","بقيت في الدار لأني مريض","because","because|although|however"],["He studied hard, so he passed.","اجتهد، ولهذا نجح","so","so|but|although"]])],
C1:[SU("C1a","1. الشرط الثالث","😔","if + had + III، would have + III: ندم على شيء فات.",[["If I had known, I would have helped.","لو عرفت كنت عاونت","had","have|had|would"],["She would have won if she had practiced.","كانت تربح لو تدربت","practiced","practice|practiced|would practice"],["If we had left earlier, we wouldn't have missed it.","لو خرجنا بكري ما فاتناش","had","have|had|would"],["If he had studied, he would have passed.","لو قرا كان نجح","would","will|would|had"],["I would have called if I had had time.","كنت نتصل لو كان عندي الوقت","called","call|called|calling"]]),SU("C1b","2. wish و should have","🌠","I wish + ماضي = تمني في الحاضر. I wish + had + III = ندم على الماضي.",[["I wish I had more time.","نتمنى لو عندي وقت أكثر","had","have|had|would have"],["I wish I had studied harder.","نتمنى لو اجتهدت أكثر","studied","study|studied|studying"],["You should have called me.","كان لازم تتصل بيا","called","call|called|calling"],["She wishes she were taller.","تتمنى لو كانت أطول","were","is|was|were"],["He could have helped us.","كان يقدر يعاونا","helped","help|helped|helping"]]),SU("C1c","3. الجمل المقلوبة للتأكيد","🎯","بعد Never وRarely وNot only نقلبو الترتيب: فعل مساعد ثم الفاعل.",[["Never have I seen such a view.","عمري ما شفت منظر كيما هذا","have","have|do|am"],["Not only did she win, but she also broke the record.","ما ربحتش فقط، كسرت حتى الرقم القياسي","did","did|does|has"],["Rarely do we eat out.","نادرا ما ناكلو برا","do","do|are|have"],["Had I known, I would have come.","لو عرفت كنت جيت","Had","Had|Have|Did"],["Only then did I understand.","حينها فقط فهمت","did","did|do|had"]])],
C2:[SU("C2a","1. التعابير الاصطلاحية","🎭","التعابير ما تتفهمش بالحرف، لازم نحفظوها كاملة.",[["Break a leg!","بالتوفيق!","leg","leg|arm|hand"],["It's raining cats and dogs.","تمطر بقوة","cats","cats|birds|fish"],["Let's call it a day.","نوقفو لهنا اليوم","day","day|night|week"],["He spilled the beans.","فضح السر","beans","beans|rice|tea"],["Once in a blue moon.","نادرا جدا","moon","moon|sun|star"],["It's a piece of cake.","هذا سهل برشا","cake","cake|bread|pie"]]),SU("C2b","2. would rather / had better / used to","🧭","would rather = نفضل. had better = الأحسن. used to = كان من عادتي. be used to = متعود على.",[["I would rather stay home.","نفضل نبقى في الدار","rather","rather|better|more"],["You had better hurry.","الأحسن تسرع","better","better|rather|best"],["He used to smoke.","كان يدخن","used","used|use|using"],["The meeting is supposed to start at nine.","المفروض الاجتماع يبدا على التاسعة","supposed","supposed|suppose|supposing"],["I am used to waking up early.","تعودت نفيق بكري","used","used|use|using"]]),SU("C2c","3. الأسلوب الرسمي","🎩","في الكتابة الرسمية نستعملو أشكال خاصة: suggest that he be، essential that she arrive، Were it not for.",[["I suggest that he be present.","نقترح يكون حاضر","be","be|is|was"],["It is essential that she arrive on time.","من الضروري توصل في الوقت","arrive","arrive|arrives|arrived"],["Were it not for you, I would have failed.","لولاك كنت فشلت","Were","Were|Was|If"],["The proposal was met with considerable resistance.","الاقتراح قوبل بمعارضة كبيرة","resistance","resistance|resist|resistant"],["She is, by all accounts, extremely talented.","هي بحسب الجميع موهوبة جدا","accounts","accounts|counts|reports"]])]};

HL.A2.push(SU("A2d","4. going to (المستقبل القريب)","🔮","am/is/are + going to + الفعل: خطة أو نية.",[["I am going to study tonight.","ناوية نقرا الليلة","going","going|will|went"],["She is going to travel next week.","ناوية تسافر الأسبوع الجاي","is","am|is|are"],["We are going to buy a car.","ناويين نشريو سيارة","are","am|is|are"],["Look at the clouds! It is going to rain.","شوفي السحاب! باش تمطر","going","going|will|went"]]),SU("A2e","5. much / many / some / any","🧺","many مع المعدود، much مع غير المعدود. some في الإثبات، any في النفي والسؤال.",[["How many books do you have?","قداش من كتاب عندك؟","many","many|much|some"],["How much water do you drink?","قداش من ماء تشرب؟","much","many|much|any"],["I don't have any money.","ما عنديش مال","any","some|any|many"],["There is some milk in the fridge.","فيه شوية حليب في الثلاجة","some","some|any|many"]]));
HL.B1.push(SU("B1e","5. الماضي التام أو البسيط","🕰️","have + III لما الوقت غير محدد. الماضي البسيط لما الوقت محدد (yesterday, in 2019).",[["I saw him yesterday.","شفتو البارح","saw","saw|have seen|seen"],["She has lived here for five years.","تسكن هنا من خمس سنين","has","has|have|did"],["They moved to Oran in 2019.","انتقلو لوهران في 2019","moved","moved|have moved|move"],["Have you finished yet?","كملتي؟","Have","Have|Did|Are"]]),SU("B1f","6. gerund و infinitive","🔁","enjoy / avoid / finish + ing. want / decide / hope + to + الفعل.",[["I enjoy reading.","نحب القراءة","reading","reading|to read|read"],["She wants to learn English.","تحب تتعلم إنجليزي","to","to|for|at"],["He avoided talking to her.","تجنب يهدر معاها","talking","talking|to talk|talk"],["We decided to leave.","قررنا نخرجو","to","to|for|at"]]));
HL.B2.push(SU("B2e","5. التخمين (must / might / can't)","🔍","must = متأكد، might = ممكن، can't = مستحيل.",[["He must be tired. He worked all day.","أكيد تعبان","must","must|might|can't"],["She might be at home.","ممكن تكون في الدار","might","must|might|can't"],["That can't be true!","مستحيل يكون صحيح","can't","must|might|can't"],["They must have left already.","أكيد راحو من قبل","must","must|might|can't"]]),SU("B2f","6. have something done","💇","have + مفعول + III: نخلي غيرنا يدير الشيء.",[["I had my car repaired.","صلحت سيارتي عند الميكانيكي","repaired","repair|repaired|repairing"],["She is having her hair cut.","تقص شعرها عند الحلاق","cut","cut|cutting|cuts"],["We got the house painted.","خلينا الدار تتصبغ","painted","paint|painted|painting"],["He has his shirts ironed.","يكويو قمصانو","ironed","iron|ironed|ironing"]]));
HL.C1.push(SU("C1d","4. الشرط المختلط","🔀","if + had + III، would + الفعل: سبب في الماضي ونتيجة في الحاضر.",[["If I had studied medicine, I would be a doctor now.","لو قريت الطب نكون طبيبة دوك","would","would|will|had"],["If she had left earlier, she would be here now.","لو خرجت بكري تكون هنا دوك","would","would|will|has"],["If we had saved money, we would have a house now.","لو وفرنا نكون عندنا دار","had","had|have|has"],["I wouldn't be tired if I had slept well.","ما نكونش تعبانة لو نعست مليح","slept","sleep|slept|sleeping"]]),SU("C1e","5. جمل المشاركة","✂️","نختصرو جملتين في وحدة: Having finished, I left. Walking home, I met him.",[["Having finished work, she went home.","بعد ما كملت الخدمة راحت للدار","finished","finish|finished|finishing"],["Walking down the street, I saw an old friend.","وأنا نمشي في الشارع شفت صاحب قديم","Walking","Walking|Walked|Walk"],["Not knowing the answer, he stayed silent.","وهو ما يعرفش الجواب سكت","Not","Not|No|Never"],["The book written by him is famous.","الكتاب لي كتبو مشهور","written","write|wrote|written"]]));
HL.C2.push(SU("C2d","4. أفعال مركبة (phrasal verbs)","🧩","فعل + حرف يعطي معنى جديد: give up = يستسلم، look after = يعتني، put off = يؤجل.",[["Don't give up on your dreams.","ما تستسلميش لأحلامك","up","up|on|off"],["She looks after her grandmother.","تعتني بجدتها","after","after|for|at"],["We had to put off the meeting.","اضطرينا نأجلو الاجتماع","off","off|out|in"],["He came up with a great idea.","جاب فكرة رائعة","up","up|out|over"]]),SU("C2e","5. تلازم الكلمات (collocations)","📚","كلمات تمشي مع بعضها: make a decision، do homework، take a risk، pay attention.",[["We need to make a decision.","لازم ناخذو قرار","make","make|do|take"],["Please pay attention to the teacher.","ركزي مع المعلم","pay","pay|do|take"],["He took a big risk.","غامر مغامرة كبيرة","risk","risk|danger|fear"],["She did her homework.","درت الواجب","did","did|made|took"]]));
CUR.forEach(function(l){if(HL[l.id])l.u=HL[l.id]});

CUR.splice(4,0,{id:"E",n:"المرحلة 5 — المحادثات والتعريف بالنفس",u:[
U("e1","1. التعريف بالنفس",[["Hello! My name is Sara.","السلام! اسمي سارة","👋"],["Nice to meet you.","تشرفنا","🤝"],["I am from Algeria.","أنا من الجزائر","🇩🇿"],["I am twenty-five years old.","عمري خمسة وعشرين سنة","🎂"],["I live in Algiers.","نسكن في العاصمة","🏙️"],["I am a teacher.","أنا معلمة","👩‍🏫"],["I speak Arabic and French.","نهدر العربية والفرنسية","🗣️"],["I am learning English.","نتعلم الإنجليزية","📚"],["I like reading and cooking.","نحب القراءة والطبخ","📖"]]),
U("e2","2. التحية والوداع",[["Good morning!","صباح الخير","🌅"],["Good evening!","مساء الخير","🌆"],["How are you?","كيف حالك؟","🙂"],["I am fine, thank you. And you?","بخير، شكرا. وأنت؟","👍"],["See you tomorrow.","نشوفك غدوة","👋"],["Take care!","دير بالك","💛"],["Thank you very much.","شكرا برشا","🙏"],["You are welcome.","عفوا","😊"],["Sorry, I am late.","سامحني، تأخرت","⏰"]]),
U("e3","3. أسئلة وتفاهم",[["What is your name?","واش اسمك؟","❓"],["Where are you from?","من وين أنت؟","🌍"],["How old are you?","قداش عمرك؟","🎂"],["What do you do?","واش تخدم؟","💼"],["Do you speak English?","تهدر إنجليزي؟","🗣️"],["Can you repeat, please?","تعاود من فضلك؟","🔁"],["I don't understand.","ما فهمتش","🤔"],["Can you speak slowly?","تهدر بالشوية؟","🐢"],["What does this mean?","واش معناها؟","💡"]]),
U("e4","4. المطعم والسوق",[["I would like a coffee, please.","نحب قهوة من فضلك","☕"],["Can I see the menu?","نقدر نشوف القائمة؟","📋"],["The bill, please.","الحساب من فضلك","🧾"],["Do you have a smaller size?","عندك مقاس أصغر؟","👕"],["It is too expensive.","غالي برشا","💎"],["I will take it.","نشريه","🛍️"],["Where is the bathroom?","وين الحمام؟","🚻"],["Is there a pharmacy near here?","فيه صيدلية قريبة؟","💊"]]),
U("e5","5. محادثة هاتفية",[["Hello, who is speaking?","ألو، من معي؟","📞"],["Can I speak to Mr. Ali?","نقدر نهدر مع السيد علي؟","☎️"],["Please hold on.","استنى من فضلك","⏳"],["I will call you back.","نعاود نتصل بيك","🔁"],["Can I leave a message?","نقدر نخلي رسالة؟","💬"],["The line is bad.","الخط ضعيف","📶"]]),
U("e6","6. حوار كامل",[["Hi! What is your name?","سلام! واش اسمك؟","🙋"],["My name is Sara. And you?","اسمي سارة. وأنت؟","👩"],["I am Ali. Nice to meet you.","أنا علي. تشرفنا","🧑"],["Nice to meet you too. Where are you from?","تشرفنا. من وين أنت؟","🌍"],["I am from Oran. And you?","أنا من وهران. وأنت؟","🏙️"],["I am from Algiers. Do you speak English?","أنا من العاصمة. تهدر إنجليزي؟","🗣️"],["Yes, a little. I am learning.","إيه، شوية. راني نتعلم","📚"]])
]});
function buildFR(){
function u(id,t,e,s){return U(id,t,s.trim().split("\n").map(function(l){var a=l.split("=");return[a[0],a[1],a[2]||e]}))}
function g(id,t,e,n,s){return SU(id,t,e,n,s.trim().split("\n").map(function(l){return l.split("=")}))}
function p(id,t,s){return P(id,t,s.trim().split("\n").map(function(l){return l.split("=")}))}
return[
{id:"0",n:"المرحلة 1 — الحروف والنطق",u:[
p("f0a","1. الحروف A–Z",`A=avion=✈️=آ
B=ballon=🎈=بي
C=chat=🐱=سي (ش/ك حسب الكلمة)
D=dent=🦷=دي
E=école=🏫=أُو (e خفيفة)
F=fleur=🌸=إف
G=gâteau=🍰=جي
H=hôtel=🏨=آش (ما تنطقش)
I=île=🏝️=إي
J=jardin=🌳=جي (ج خفيفة)
K=kilo=⚖️=كا
L=lune=🌙=إل
M=maison=🏠=إم
N=nuit=🌃=إن
O=orange=🍊=أو
P=pain=🍞=بي
Q=quatre=4️⃣=كو
R=rose=🌹=إر (رْ من الحلق)
S=soleil=☀️=إس
T=table=🍽️=تي
U=usine=🏭=يو (ي بشفتين مدورتين)
V=vélo=🚲=ڤي
W=wagon=🚃=دوبل ڤي
X=xylophone=🎹=إكس
Y=yaourt=🥛=إغرك
Z=zèbre=🦓=زاد`),
p("f0b","2. الحروف بعلامات",`é=été=☀️=إي مغلقة
è=mère=👩=إي مفتوحة
ê=fête=🎉=إي مفتوحة
à=voilà=👉=أ
ç=garçon=👦=س
ù=où=❓=أو`),
p("f0c","3. أصوات مركبة",`ou=roue=🎡=أو
on=bon=👍=أُن (أنفية)
an=enfant=🧒=آن (أنفية)
in=pain=🍞=إن (أنفية)
oi=moi=🙋=وا
u=tu=👉=ي بشفتين مدورتين
ch=chat=🐱=ش
gn=montagne=⛰️=نْيـ
eau=eau=💧=أو
r=rouge=🔴=رْ من الحلق`),
u("f0d","4. الربط وحروف ما تتنطقش","🔗",`Les amis=الأصدقاء (s تتنطق z)
Un enfant=طفل (n تتربط)
Vous avez=عندكم (s تتنطق z)
Petit à petit=شوية بشوية
Un petit chat=قطوس صغير (t ما تتنطقش)`)]},
{id:"A1",n:"المستوى A1 — المبتدئ",u:[
u("f1","1. الأرقام 1–20","🔢",`un=1
deux=2
trois=3
quatre=4
cinq=5
six=6
sept=7
huit=8
neuf=9
dix=10
onze=11
douze=12
quinze=15
vingt=20`),
u("f2","2. العشرات والمئات","💯",`trente=30
quarante=40
cinquante=50
soixante=60
soixante-dix=70 (60+10)
quatre-vingts=80 (4×20)
quatre-vingt-dix=90
cent=100
mille=1000`),
u("f3","3. الألوان","🎨",`rouge=أحمر=🔴
bleu=أزرق=🔵
vert=أخضر=🟢
jaune=أصفر=🟡
noir=أسود=⚫
blanc=أبيض=⚪
gris=رمادي=🩶
marron=بني=🟤`),
u("f4","4. الأيام والشهور","📅",`lundi=الاثنين
mardi=الثلاثاء
mercredi=الأربعاء
jeudi=الخميس
vendredi=الجمعة
samedi=السبت
dimanche=الأحد
janvier=جانفي
février=فيفري
juillet=جويلية
décembre=ديسمبر`),
u("f5","5. التحيات والمجاملات","👋",`Bonjour !=صباح الخير / نهارك سعيد
Bonsoir !=مساء الخير
Salut !=سلام (بين الأصحاب)
Au revoir !=بصحة
Merci beaucoup.=شكرا بزاف
S'il vous plaît.=من فضلك
De rien.=عفوا
Excusez-moi.=سمحلي
Comment allez-vous ?=كيف حالك؟
Ça va bien, merci.=لاباس، شكرا`),
u("f6","6. التعريف بالنفس","🙋",`Je m'appelle Sara.=اسمي سارة=👋
Enchantée.=تشرفنا=🤝
Je suis algérienne.=أنا جزائرية=🇩🇿
J'ai vingt-cinq ans.=عمري خمسة وعشرين سنة=🎂
J'habite à Oran.=نسكن في وهران=🏙️
Je suis professeure.=أنا معلمة=👩‍🏫
Je parle arabe et français.=نهدر عربي وفرنسي=🗣️
J'apprends le français.=نتعلم الفرنسية=📚`),
u("f7","7. العائلة","👨‍👩‍👧",`la mère=الأم
le père=الأب
le frère=الأخ
la sœur=الأخت
le grand-père=الجد
la grand-mère=الجدة
l'oncle=العم/الخال
la tante=العمة/الخالة
le fils=الابن
la fille=البنت`),
g("f8","8. être — يكون","🧩","je suis · tu es · il/elle est · nous sommes · vous êtes · ils sont",`Je suis étudiante.=أنا طالبة=suis=suis|es|est
Tu es mon ami.=أنت صديقي=es=es|est|suis
Elle est contente.=هي فرحانة=est=est|es|sont
Nous sommes à la maison.=نحن في الدار=sommes=sommes|êtes|sont
Vous êtes prêts.=أنتم مستعدين=êtes=êtes|sommes|sont
Ils sont en retard.=هم متأخرين=sont=sont|suis|es`),
g("f9","9. avoir — يملك","🧩","j'ai · tu as · il a · nous avons · vous avez · ils ont",`J'ai un livre.=عندي كتاب=ai=ai|as|a
Tu as faim.=جيعان=as=as|ai|a
Il a une voiture.=عندو طونوبيل=a=a|as|ont
Nous avons un chat.=عندنا قطوس=avons=avons|avez|ont
Vous avez le temps.=عندكم الوقت=avez=avez|avons|ont
Elles ont raison.=معاهم الحق=ont=ont|a|avons`),
g("f10","10. le / la / les · un / une / des","📘","مذكر: le/un · مؤنث: la/une · جمع: les/des",`Le garçon est grand.=الولد طويل=Le=Le|La|Les
La fille est petite.=البنت صغيرة=La=La|Le|Les
Les enfants jouent.=الأولاد يلعبو=Les=Les|Le|La
J'ai un frère.=عندي خو=un=un|une|des
Elle a une sœur.=عندها أخت=une=une|un|des
Ce sont des amis.=هم أصدقاء=des=des|un|une`),
g("f11","11. النفي ne … pas","🚫","ne + الفعل + pas · ne…jamais · ne…plus · ne…rien",`Je ne parle pas anglais.=ما نهدرش إنجليزي=pas=pas|plus|jamais
Il ne mange jamais de viande.=ما ياكلش اللحم أبدا=jamais=jamais|pas|plus
Elle n'a plus d'argent.=ما بقاتلهاش دراهم=plus=plus|pas|rien
Nous ne sommes pas prêts.=ما نحناش مستعدين=pas=pas|jamais|rien
Je n'ai rien dit.=ما قلت والو=rien=rien|pas|plus`),
g("f12","12. كلمات الاستفهام","❓","comment · où · quel · pourquoi · qui · combien",`Comment tu t'appelles ?=كيفاش اسمك؟=Comment=Comment|Où|Pourquoi
Où habites-tu ?=وين تسكن؟=Où=Où|Qui|Quel
Quel âge as-tu ?=قداش عمرك؟=Quel=Quel|Qui|Où
Pourquoi tu pleures ?=علاش تبكي؟=Pourquoi=Pourquoi|Comment|Combien
Combien ça coûte ?=بقداش؟=Combien=Combien|Comment|Quel`),
g("f13","13. أفعال -er في المضارع","⚙️","parler: je parle · tu parles · il parle · nous parlons · vous parlez · ils parlent",`Je parle arabe.=نهدر عربي=parle=parle|parles|parlons
Tu manges du pain.=تاكل الخبز=manges=manges|mange|mangez
Il aime le café.=يحب القهوة=aime=aime|aimes|aimons
Nous habitons à Oran.=نسكنو في وهران=habitons=habitons|habite|habitent
Vous travaillez ici.=تخدمو هنا=travaillez=travaillez|travaille|travaillent
Elles chantent bien.=يغنيو مليح=chantent=chantent|chante|chantons`),
u("f14","14. حوار كامل","💬",`Bonjour ! Comment tu t'appelles ?=سلام! واش اسمك؟=🙋
Je m'appelle Sara. Et toi ?=اسمي سارة. وأنت؟=👩
Moi, c'est Ali. Enchanté !=أنا علي. تشرفنا=🧑
Tu viens d'où ?=من وين أنت؟=🌍
Je viens d'Oran. Et toi ?=من وهران. وأنت؟=🏙️
Moi, je suis d'Alger. Tu parles français ?=أنا من العاصمة. تهدر فرنسي؟=🗣️
Oui, un peu. J'apprends.=إيه شوية. راني نتعلم=📚`),
u("f15","15. في المقهى والمطعم","☕",`Un café, s'il vous plaît.=قهوة من فضلك
Je voudrais de l'eau.=نحب ماء
Qu'est-ce que vous avez ?=واش عندكم؟
Je prends le menu du jour.=ناخذ طبق اليوم
C'est délicieux !=بنين بزاف
L'addition, s'il vous plaît.=الحساب من فضلك`),
u("f16","16. الاتجاهات والمدينة","🧭",`Où est la gare ?=وين المحطة؟
tout droit=على طول
à gauche=على اليسار
à droite=على اليمين
C'est près d'ici.=قريب من هنا
C'est loin.=بعيد
Je suis perdu.=ضعت`)]},
{id:"A2",n:"المستوى A2",u:[
g("f17","1. الماضي المركب passé composé","⏪","avoir/être + اسم المفعول: j'ai mangé · je suis allé",`J'ai mangé une pizza.=كليت بيتزا=mangé=mangé|manger|mange
Elle a fini son travail.=كملت خدمتها=fini=fini|finir|finit
Nous sommes allés au marché.=رحنا للسوق=allés=allés|allé|aller
Il est parti hier.=راح البارح=parti=parti|partir|part
Tu as vu ce film ?=شفت هاد الفيلم؟=vu=vu|voir|voit
Ils ont pris le bus.=خذاو الباص=pris=pris|prendre|prend`),
g("f18","2. المستقبل القريب","⏩","aller + مصدر: je vais partir",`Je vais voyager demain.=نسافر غدوة=vais=vais|vas|va
Tu vas manger ?=راك تاكل؟=vas=vas|vais|va
Il va pleuvoir.=باش تمطر=va=va|vas|vont
Nous allons partir.=باش نروحو=allons=allons|allez|vont
Elles vont arriver.=باش يوصلو=vont=vont|va|allons`),
g("f19","3. الأفعال الانعكاسية","🔁","je me lève · tu te laves · il se coiffe · nous nous habillons",`Je me lève à sept heures.=نوض على السابعة=me=me|te|se
Tu te laves les mains.=تغسل يديك=te=te|me|se
Elle se coiffe.=تسرح شعرها=se=se|me|te
Nous nous habillons.=نلبسو=nous=nous|vous|se
Ils se reposent.=يرتاحو=se=se|nous|te`),
g("f20","4. أدوات الملكية","🔑","mon/ma/mes · ton/ta/tes · son/sa/ses · notre · votre · leur",`C'est mon livre.=هذا كتابي=mon=mon|ma|mes
Ma sœur est grande.=أختي كبيرة=Ma=Ma|Mon|Mes
Ce sont tes clés.=هذي مفاتيحك=tes=tes|ta|ton
Notre maison est belle.=دارنا زوينة=Notre=Notre|Nos|Votre
Voici leurs enfants.=هذو أولادهم=leurs=leurs|leur|nos`),
g("f21","5. المقارنة","⚖️","plus … que · moins … que · aussi … que · meilleur / mieux",`Il est plus grand que moi.=هو أطول مني=plus=plus|moins|aussi
Elle est aussi gentille que toi.=طيبة بحالك=aussi=aussi|plus|moins
Ce film est moins bon.=هاد الفيلم أقل جودة=moins=moins|plus|aussi
C'est le meilleur gâteau.=أحسن كيك=meilleur=meilleur|mieux|bon
Il court mieux que moi.=يجري أحسن مني=mieux=mieux|meilleur|bien`),
u("f22","6. التسوق","🛍️",`Combien ça coûte ?=بقداش؟
C'est trop cher.=غالي بزاف
Je cherche une robe.=نقلب على روب
Avez-vous une taille plus grande ?=عندكم مقاس أكبر؟
Je peux payer par carte ?=نقدر ندفع بالبطاقة؟
Je regarde seulement.=غير نشوف`),
u("f23","7. السفر","✈️",`Un billet pour Alger, s'il vous plaît.=تذكرة للعاصمة
À quelle heure part le train ?=وقتاش يمشي التران؟
J'ai réservé une chambre.=حجزت بيت
Où est l'arrêt de bus ?=وين محطة الباص؟
Voici mon passeport.=هذا جواز سفري
Mon vol est retardé.=رحلتي متأخرة`),
u("f24","8. المكالمة الهاتفية","📞",`Allô, qui est à l'appareil ?=ألو من معي؟
Je voudrais parler à Monsieur Ali.=نحب نهدر مع السيد علي
Ne quittez pas.=استنى من فضلك
Je vous rappelle plus tard.=نعاود نتصل بيك
Je peux laisser un message ?=نقدر نخلي رسالة؟
La ligne est mauvaise.=الخط ضعيف`),
u("f25","9. حوار في المطعم","🍽️",`Bonsoir, une table pour deux ?=مساء الخير طاولة لشخصين؟=🙋
Oui, près de la fenêtre, s'il vous plaît.=إيه حذا الشباك=🪟
Voici la carte. Vous avez choisi ?=هذي القائمة. اخترتو؟=📋
Je prends le poulet avec du riz.=ناخذ الدجاج بالروز=🍗
Et comme boisson ?=والمشروب؟=🥤
De l'eau, s'il vous plaît.=ماء من فضلك=💧
L'addition, s'il vous plaît.=الحساب من فضلك=🧾`)]},
{id:"B1",n:"المستوى B1",u:[
g("f26","1. الماضي المستمر imparfait","🕰️","عادة أو حالة في الماضي: je jouais · il pleuvait · nous habitions",`Quand j'étais petit, je jouais dehors.=كي كنت صغير كنت نلعب برا=jouais=jouais|jouait|joue
Il pleuvait toute la journée.=كانت تمطر النهار كامل=pleuvait=pleuvait|pleut|pleuvra
Nous habitions à Alger.=كنا نسكنو في العاصمة=habitions=habitions|habitons|habitaient
Elle lisait quand je suis arrivé.=كانت تقرا كي وصلت=lisait=lisait|lit|lisent
Vous étiez fatigués.=كنتو تعبانين=étiez=étiez|êtes|était`),
g("f27","2. المستقبل البسيط","🔮","الفعل + ai, as, a, ons, ez, ont",`Demain, je partirai tôt.=غدوة نروح بكري=partirai=partirai|partirais|partais
Tu seras content.=تكون فرحان=seras=seras|es|serais
Il fera beau.=يكون الجو زوين=fera=fera|fait|ferait
Nous irons à la mer.=نروحو للبحر=irons=irons|allons|iront
Elles viendront.=يجيو=viendront=viendront|viennent|viendraient`),
g("f28","3. الشرط conditionnel","🔀","si + imparfait → conditionnel: si j'avais…, j'achèterais…",`Je voudrais un café.=نحب قهوة=voudrais=voudrais|voudrai|voulais
Si j'avais de l'argent, j'achèterais une maison.=لو عندي دراهم نشري دار=achèterais=achèterais|achèterai|achetais
Pourriez-vous m'aider ?=تقدر تعاونّي؟=Pourriez=Pourriez|Pouvez|Pourrez
À ta place, je partirais.=لو كنت مكانك نمشي=partirais=partirais|partirai|partais`),
g("f29","4. الضمائر le / la / y / en","🎯","y = هناك · en = منه · le/la/les · lui/leur",`Tu vas à Oran ? Oui, j'y vais.=تروح لوهران؟ إيه نروح=y=y|en|le
Tu veux du pain ? Oui, j'en veux.=تحب خبز؟ إيه نحب=en=en|y|le
Je le connais bien.=نعرفو مليح=le=le|la|lui
Elle la voit tous les jours.=تشوفها كل يوم=la=la|le|lui
Je lui parle souvent.=نهدر معاه برشا=lui=lui|leur|le`),
g("f30","5. الضمائر الموصولة","🔗","qui = فاعل · que = مفعول · où = مكان/زمان · dont = de",`L'homme qui parle est mon oncle.=الراجل لي يهدر عمي=qui=qui|que|où
Le livre que je lis est bon.=الكتاب لي نقراه مليح=que=que|qui|où
La ville où j'habite est belle.=المدينة لي نسكن فيها زوينة=où=où|que|qui
C'est ce dont j'ai besoin.=هذا لي نحتاجو=dont=dont|que|qui`),
u("f31","6. إبداء الرأي","💭",`À mon avis, c'est une bonne idée.=في رأيي فكرة مليحة
Je pense que tu as raison.=نظن معاك الحق
Je ne suis pas d'accord.=ما نتفقش
Ça dépend.=يعتمد
En fait, je préfère rester.=في الحقيقة نفضل نبقى
Qu'est-ce que tu ferais à ma place ?=واش دير مكاني؟`),
u("f32","7. حوار: طلب نصيحة","💬",`Je ne sais pas quoi faire.=ما نعرفش واش ندير=😟
Qu'est-ce qui se passe ?=واش صرا؟=🤔
J'ai trouvé un travail dans une autre ville.=لقيت خدمة في مدينة أخرى=💼
C'est une belle opportunité !=فرصة زوينة=🌟
Oui, mais ma famille sera loin.=إيه بصح عايلتي تكون بعيدة=👨‍👩‍👧
À ta place, j'accepterais.=مكانك نقبل=✅`)]},
{id:"B2",n:"المستوى B2",u:[
g("f33","1. المضارع الشرطي subjonctif","🧠","après il faut que · vouloir que · bien que · pour que",`Il faut que je parte.=لازم نمشي=parte=parte|pars|partirai
Je veux que tu viennes.=نحب تجي=viennes=viennes|viens|viendras
Bien qu'il pleuve, nous sortons.=رغم المطر نخرجو=pleuve=pleuve|pleut|pleuvra
Il est possible qu'elle soit là.=ممكن تكون هنا=soit=soit|est|sera
Pour que vous compreniez.=باش تفهمو=compreniez=compreniez|comprenez|comprendrez
Je doute qu'il ait raison.=نشك أن معاه الحق=ait=ait|a|aura`),
g("f34","2. plus-que-parfait","⏮️","avais/étais + اسم المفعول: ماضي قبل ماضي",`J'avais déjà mangé.=كنت كليت من قبل=avais=avais|ai|aurais
Elle était partie.=كانت راحت=était=était|est|sera
Nous avions fini.=كنا كملنا=avions=avions|avons|aurions
Ils s'étaient perdus.=كانو ضاعو=étaient=étaient|sont|seraient`),
g("f35","3. المبني للمجهول","📩","être + اسم المفعول: la porte est fermée",`La porte est fermée par le gardien.=الباب يتسد من الحارس=fermée=fermée|fermer|ferme
Le livre a été écrit par Camus.=الكتاب كتبو كامو=été=été|être|était
Les voleurs ont été arrêtés.=اللصوص تقبضو=arrêtés=arrêtés|arrêté|arrêter
Cette maison sera vendue.=هاد الدار تتباع=vendue=vendue|vendu|vendre`),
g("f36","4. الكلام المنقول","🗣️","concordance des temps: dit que + présent · a dit que + imparfait/conditionnel",`Elle a dit qu'elle viendrait.=قالت أنها تجي=viendrait=viendrait|viendra|vient
Il m'a demandé si j'étais prêt.=سقساني واش أنا مستعد=si=si|que|qui
Il a répondu qu'il avait compris.=جاوب أنه فهم=avait=avait|a|aura
Je lui ai dit de partir.=قلتلو يمشي=de=de|que|à`),
u("f37","5. أدوات الربط","🧱",`cependant=مع ذلك
en revanche=بالمقابل
par conséquent=نتيجة لذلك
d'ailleurs=بالمناسبة
malgré=رغم
afin de=من أجل
puisque=بما أن
néanmoins=ومع ذلك`),
u("f38","6. النقاش","🎙️",`Je suis tout à fait d'accord.=متفق تماما
Permettez-moi de vous contredire.=اسمحلي نخالفك
Il convient de souligner que…=يجب التأكيد أن
Cela dit, …=مع ذلك
Pour résumer, …=باختصار
Je tiens à préciser que…=حابّ نوضح أن`)]},
{id:"C1",n:"المستوى C1",u:[
u("f39","1. الرسمي وغير الرسمي","🎩",`Salut ! Ça va ?=(غير رسمي) سلام لاباس؟
Madame, Monsieur,=(رسمي) السيدة/السيد
Je me permets de vous contacter au sujet de…=أتواصل معكم بخصوص
Veuillez trouver ci-joint mon CV.=مرفق سيرتي الذاتية
Dans l'attente de votre réponse,=في انتظار ردكم
Cordialement,=مع التحية`),
u("f40","2. تعابير اصطلاحية","🎭",`Avoir le cafard=يحس بالحزن
Coûter les yeux de la tête=غالي بزاف
Poser un lapin=يخلف الموعد
Tomber dans les pommes=يغمى عليه
Casser les pieds=يزعج
Être dans la lune=شارد الذهن
Prendre ses jambes à son cou=يهرب`),
g("f41","3. دقائق المضارع الشرطي","🧠","quoi que · pourvu que · à moins que + subjonctif",`Quoi qu'il arrive, je reste.=مهما صرا نبقى=arrive=arrive|arrivera|arrivait
Pourvu qu'il fasse beau !=يا ريت يكون الجو زوين=fasse=fasse|fait|fera
À moins que tu ne veuilles.=إلا إذا حبيت=veuilles=veuilles|veux|voudras
Si j'avais su, je serais venu.=لو علمت لجيت=serais=serais|serai|aurais`)]},
{id:"C2",n:"المستوى C2",u:[
u("f42","1. أمثال فرنسية","📜",`Petit à petit, l'oiseau fait son nid.=القطرة قطرة يتملا الوادي
Qui vivra verra.=اللي عاش شاف
L'habit ne fait pas le moine.=المظهر ما يدلش على الجوهر
Mieux vaut tard que jamais.=أن تأتي متأخرا خير من ألا تأتي
Pas de nouvelles, bonnes nouvelles.=غياب الأخبار خير
Tout vient à point à qui sait attendre.=من صبر ظفر`),
u("f43","2. لغة أكاديمية","🎓",`En outre, …=علاوة على ذلك
Force est de constater que…=لا بد من الاعتراف أن
Il va sans dire que…=غني عن القول أن
De surcroît, …=فضلا عن ذلك
Sous réserve de…=مع التحفظ على
Il s'avère que…=يتبين أن`)]}
]}

function buildDE(){
var LD=[["A","ah","Apfel","🍎","أَ"],["B","beh","Ball","⚽","بْ"],["C","tseh","Computer","💻","كْ (كلمات أجنبية)"],["D","deh","Dach","🏠","دْ"],["E","eh","Elefant","🐘","إِ"],["F","eff","Fisch","🐟","فْ"],["G","geh","Gabel","🍴","ڨْ"],["H","hah","Hund","🐶","هْ"],["I","ih","Igel","🦔","إِي"],["J","yot","Junge","👦","يْ"],["K","kah","Katze","🐱","كْ"],["L","ell","Löwe","🦁","لْ"],["M","emm","Mond","🌙","مْ"],["N","enn","Nase","👃","نْ"],["O","oh","Orange","🍊","أُ"],["P","peh","Pizza","🍕","پْ"],["Q","kuh","Quadrat","🔲","كْڤ (qu)"],["R","err","Rose","🌹","رْ من الحلق"],["S","ess","Sonne","☀️","زْ قبل حرف متحرك"],["T","teh","Tasche","👜","تْ"],["U","uh","Uhr","🕐","أُو"],["V","fau","Vogel","🐦","فْ"],["W","weh","Wasser","💧","ڤْ"],["X","iks","Xylofon","🎹","كْسْ"],["Y","üpsilon","Yoga","🧘","يْ"],["Z","tsett","Zebra","🦓","تْسْ"]];
function LU(id,t){return{id:id,t:t,cards:LD.map(function(x){return[x[0]+" "+x[0].toLowerCase()+" — "+x[2],"اسم الحرف: "+x[1]+" · الصوت ≈ "+x[4],x[3],x[2]]}),w:LD.map(function(x){return[x[3],x[2]]}),sp:LD.map(function(x){return x[2]}),qs:function(){return pick(LD,8).map(function(x){return{q:'<span class="e">'+x[3]+'</span>بأي حرف تبدأ "'+x[2]+'"؟',a:x[0],o:opts(x[0],LD.map(function(y){return y[0]})),s:x[2]}})}}}
var ab="Der|Die|Das",ab2="der|die|das";
return[
{id:"0",n:"المرحلة 1 — الحروف والنطق",u:[LU("g0a","1. الحروف A–Z"),
P("g0b","2. حروف خاصة ä ö ü ß",[["ä","Bär","🐻","ä ≈ إي مفتوحة (بين a و e)"],["ö","Löwe","🦁","ö = e مع تدوير الشفتين"],["ü","Tür","🚪","ü = i مع تدوير الشفتين كأنك تقولي u"],["ß","Straße","🛣️","ß = ss (سين مشددة)"],["ä","Käse","🧀","ä في Käse = إي"]]),
P("g0c","3. حروف مركبة: ei ie eu äu au",[["ei","Eis","🍦","ei = آي"],["ie","Brief","✉️","ie = إي طويلة"],["eu","Euro","💶","eu = أوي"],["äu","Häuser","🏠","äu = أوي (جمع Haus)"],["au","Auto","🚗","au = آو"]]),
P("g0d","4. ch sch sp st pf z v w s",[["ch","Buch","📖","ch بعد a o u = خ من الحلق"],["ch","Milch","🥛","ch بعد i e = ش خفيفة"],["sch","Schule","🏫","sch = ش"],["sp","Sport","🏃","sp أول الكلمة = شب"],["st","Stuhl","🪑","st أول الكلمة = شت"],["pf","Pferd","🐴","pf = ب+ف معا"],["z","Zahn","🦷","z = تس"],["v","Vogel","🐦","v = ف"],["w","Wasser","💧","w = ڤ"],["s","Sonne","☀️","s قبل حرف متحرك = ز"]])]},
{id:"B",n:"المرحلة 2 — الأرقام، الألوان، الساعة، العائلة",u:[
U("g1","1. الأرقام 1–10",[["eins","1","1️⃣"],["zwei","2","2️⃣"],["drei","3","3️⃣"],["vier","4","4️⃣"],["fünf","5","5️⃣"],["sechs","6","6️⃣"],["sieben","7","7️⃣"],["acht","8","8️⃣"],["neun","9","9️⃣"],["zehn","10","🔟"]]),
U("g2","2. الأرقام 11–20",[["elf","11","🔢"],["zwölf","12","🔢"],["dreizehn","13","🔢"],["vierzehn","14","🔢"],["fünfzehn","15","🔢"],["sechzehn","16","🔢"],["siebzehn","17","🔢"],["achtzehn","18","🔢"],["neunzehn","19","🔢"],["zwanzig","20","🔢"]]),
U("g3","3. العشرات والمئات",[["dreißig","30","🔢"],["vierzig","40","🔢"],["fünfzig","50","🔢"],["sechzig","60","🔢"],["siebzig","70","🔢"],["achtzig","80","🔢"],["neunzig","90","🔢"],["hundert","100","💯"],["tausend","1000","🔢"],["einundzwanzig","21 (الواحد أولا)","🔢"]]),
U("g4","4. الألوان",[["rot","أحمر","🔴"],["blau","أزرق","🔵"],["grün","أخضر","🟢"],["gelb","أصفر","🟡"],["orange","برتقالي","🟠"],["lila","بنفسجي","🟣"],["schwarz","أسود","⚫"],["weiß","أبيض","⚪"],["braun","بني","🟤"],["rosa","وردي","🌸"],["grau","رمادي","🩶"]]),
U("g5","5. أيام الأسبوع",[["Montag","الاثنين","📅"],["Dienstag","الثلاثاء","📅"],["Mittwoch","الأربعاء","📅"],["Donnerstag","الخميس","📅"],["Freitag","الجمعة","📅"],["Samstag","السبت","📅"],["Sonntag","الأحد","📅"]]),
U("g6","6. الشهور",[["Januar","يناير","📆"],["Februar","فبراير","📆"],["März","مارس","📆"],["April","أبريل","📆"],["Mai","ماي","📆"],["Juni","يونيو","📆"],["Juli","يوليو","📆"],["August","أغسطس","📆"],["September","سبتمبر","📆"],["Oktober","أكتوبر","📆"],["November","نوفمبر","📆"],["Dezember","ديسمبر","📆"]]),
U("g7","7. الفصول والطقس",[["der Frühling","الربيع","🌸"],["der Sommer","الصيف","☀️"],["der Herbst","الخريف","🍂"],["der Winter","الشتاء","❄️"],["heiß","حار","🥵"],["kalt","بارد","🥶"],["Es regnet.","تمطر","🌧️"],["Es schneit.","تثلج","🌨️"],["windig","عاصف","💨"]]),
U("g8","8. الساعة",[["Es ist ein Uhr.","الساعة الواحدة","🕐"],["Es ist drei Uhr.","الساعة الثالثة","🕒"],["Es ist halb sieben.","السادسة والنصف","🕡"],["Es ist Viertel nach zwei.","الثانية والربع","🕑"],["Es ist Viertel vor fünf.","الخامسة إلا ربع","🕔"],["Es ist Mittag.","الظهر","🌞"],["Es ist Mitternacht.","منتصف الليل","🌙"],["Wie spät ist es?","شحال الساعة؟","⏰"]]),
U("g9","9. أفراد العائلة",[["die Mutter","أم","👩"],["der Vater","أب","👨"],["der Bruder","أخ","👦"],["die Schwester","أخت","👧"],["die Großmutter","جدة","👵"],["der Großvater","جد","👴"],["der Onkel","عم أو خال","🧔"],["die Tante","عمة أو خالة","👩‍🦰"],["der Sohn","ابن","👶"],["die Tochter","بنت","👧"],["der Mann","زوج / رجل","🤵"],["die Frau","زوجة / امرأة","👰"]]),
U("g10","10. التحيات والمجاملات",[["Hallo!","سلام","👋"],["Guten Morgen!","صباح الخير","🌅"],["Guten Tag!","نهارك سعيد","☀️"],["Guten Abend!","مساء الخير","🌆"],["Gute Nacht!","تصبح على خير","🌙"],["Tschüss!","بسلامة","👋"],["Auf Wiedersehen!","إلى اللقاء (رسمي)","🤝"],["Bitte.","من فضلك / عفوا","🙏"],["Danke!","شكرا","💐"],["Entschuldigung!","المعذرة","🙇"],["Ja / Nein","نعم / لا","✅"]])]},
{id:"C",n:"المرحلة 3 — الحياة اليومية",u:[
U("g11","1. المطبخ",[["der Kühlschrank","ثلاجة","🧊"],["der Herd","موقد","♨️"],["das Messer","سكين","🔪"],["der Löffel","ملعقة","🥄"],["die Gabel","شوكة","🍴"],["der Teller","صحن","🍽️"],["die Tasse","كوب","☕"],["die Pfanne","مقلاة","🍳"],["der Topf","قدر","🍲"],["das Waschbecken","مغسلة","🚰"]]),
U("g12","2. المنزل",[["die Tür","باب","🚪"],["das Fenster","نافذة","🪟"],["das Bett","سرير","🛏️"],["das Sofa","أريكة","🛋️"],["das Badezimmer","حمام","🛁"],["das Schlafzimmer","غرفة النوم","🛌"],["der Garten","حديقة","🌷"],["die Treppe","سلالم","🪜"],["der Schlüssel","مفتاح","🔑"],["die Lampe","مصباح","💡"]]),
U("g13","3. العمل",[["das Büro","مكتب","🏢"],["der Chef","مدير","👔"],["die Besprechung","اجتماع","🗣️"],["der Computer","حاسوب","💻"],["der Schreibtisch","طاولة المكتب","🖥️"],["das Gehalt","راتب","💰"],["die Arbeit","عمل / خدمة","💼"],["die E-Mail","بريد إلكتروني","📧"],["das Telefon","هاتف","📱"],["das Team","فريق","🤝"]]),
U("g14","4. التسوق",[["der Preis","ثمن","🏷️"],["billig","رخيص","🪙"],["teuer","غالي","💎"],["kaufen","يشتري","🛒"],["verkaufen","يبيع","🏪"],["das Brot","خبز","🍞"],["das Gemüse","خضار","🥕"],["das Obst","فواكه","🍎"],["die Tasche","كيس / شنطة","👜"],["das Geld","مال","💵"],["Was kostet das?","بشحال هذا؟","❓"]]),
U("g15","5. الأكل والشرب",[["das Wasser","ماء","💧"],["der Kaffee","قهوة","☕"],["der Tee","أتاي","🍵"],["die Milch","حليب","🥛"],["das Fleisch","لحم","🥩"],["der Fisch","سمك","🐟"],["der Reis","رز","🍚"],["die Suppe","شوربة","🍲"],["der Käse","جبن","🧀"],["das Ei","بيضة","🥚"],["Ich habe Hunger.","أنا جائع","😋"],["Ich habe Durst.","أنا عطشان","🥤"]]),
U("g16","6. السفر والفندق",[["das Hotel","فندق","🏨"],["die Reservierung","حجز","📝"],["die Rezeption","استقبال","🛎️"],["das Frühstück","فطور","🥐"],["der Reisepass","جواز سفر","🛂"],["das Gepäck","أمتعة","🧳"],["der Aufzug","مصعد","🛗"],["einchecken","تسجيل الدخول","✅"],["auschecken","تسجيل الخروج","👋"],["Ich habe eine Reservierung.","عندي حجز","📝"]]),
U("g17","7. الدراسة",[["der Lehrer","معلم","👨‍🏫"],["der Student","طالب جامعي","🎓"],["das Buch","كتاب","📘"],["das Heft","كراس","📓"],["der Stift","قلم","🖊️"],["die Prüfung","امتحان","📝"],["die Lektion","درس","📖"],["die Hausaufgabe","واجب","📚"],["die Schule","مدرسة","🏫"],["die Universität","جامعة","🏛️"]]),
U("g18","8. جسم الإنسان",[["der Kopf","رأس","🗣️"],["das Auge","عين","👁️"],["das Ohr","أذن","👂"],["die Nase","أنف","👃"],["der Mund","فم","👄"],["die Zähne","أسنان","🦷"],["die Hand","يد","✋"],["der Arm","ذراع","💪"],["das Bein","رجل","🦵"],["der Fuß","قدم","🦶"],["das Herz","قلب","❤️"]]),
U("g19","9. المدينة والاتجاهات",[["die Stadt","مدينة","🏙️"],["die Straße","شارع","🛣️"],["der Bahnhof","محطة القطار","🚉"],["der Bus","حافلة","🚌"],["die Apotheke","صيدلية","💊"],["das Krankenhaus","مستشفى","🏥"],["die Bank","بنك","🏦"],["der Supermarkt","سوبرماركت","🛒"],["links","يسار","⬅️"],["rechts","يمين","➡️"],["geradeaus","مباشرة","⬆️"],["Wo ist der Bahnhof?","وين محطة القطار؟","🚉"]]),
U("g20","10. الملابس",[["das Hemd","قميص","👔"],["die Hose","سروال","👖"],["das Kleid","فستان","👗"],["der Schuh","حذاء","👟"],["die Jacke","جاكيت","🧥"],["der Mantel","معطف","🧥"],["die Mütze","قبعة","🧢"],["die Socke","شوسيت","🧦"],["der Schal","وشاح","🧣"],["die Brille","نظارات","👓"]])]},
{id:"A1",n:"المستوى A1 — المبتدئ",u:[
T("a1a","1. الفعل sein (يكون)","sein — يكون",[["ich","bin"],["du","bist"],["er / sie / es","ist"],["wir","sind"],["ihr","seid"],["sie / Sie","sind"]],"Sie بحرف كبير = حضرتك (احترام) وتأخذ sind.",[["Ich bin Studentin.","أنا طالبة","🎓"],["Du bist mein Freund.","أنت صديقي","🤝"],["Sie ist glücklich.","هي سعيدة","😊"],["Wir sind zu Hause.","نحن في البيت","🏠"],["Ihr seid spät.","أنتم متأخرون","⏰"]],[["Ich ___ müde.","bin","bin|bist|ist"],["Du ___ nett.","bist","bin|bist|ist"],["Er ___ Arzt.","ist","bin|ist|sind"],["Wir ___ Freunde.","sind","sind|seid|ist"],["Ihr ___ hier.","seid","sind|seid|bist"],["Das ___ ein Buch.","ist","bin|ist|sind"],["Ich ___ aus Algerien.","bin","bin|bist|ist"],["Die Kinder ___ im Garten.","sind","ist|sind|seid"]]),
T("a1b","2. الفعل haben (يملك)","haben — يملك / عندو",[["ich","habe"],["du","hast"],["er / sie / es","hat"],["wir","haben"],["ihr","habt"],["sie / Sie","haben"]],"er / sie / es تأخذ hat.",[["Ich habe ein Buch.","عندي كتاب","📘"],["Sie hat eine Katze.","عندها قطة","🐱"],["Wir haben ein Auto.","عندنا سيارة","🚗"],["Er hat ein Handy.","عنده هاتف","📱"],["Sie haben ein Haus.","عندهم بيت","🏡"]],[["Ich ___ ein Buch.","habe","habe|hast|hat"],["Du ___ Hunger.","hast","habe|hast|hat"],["Sie ___ eine Katze.","hat","habe|hat|haben"],["Wir ___ ein Auto.","haben","haben|habt|hat"],["Ihr ___ Zeit.","habt","habt|haben|hat"],["Er ___ ein Handy.","hat","hat|hast|haben"],["Ich ___ Durst.","habe","habe|hat|haben"],["Die Kinder ___ Hunger.","haben","haben|hat|habt"]]),
T("a1c","3. الأفعال المنتظمة في المضارع","lernen — يتعلم",[["ich","lerne"],["du","lernst"],["er / sie / es","lernt"],["wir","lernen"],["ihr","lernt"],["sie / Sie","lernen"]],"النهايات: -e · -st · -t · -en · -t · -en",[["Ich lerne Deutsch.","أتعلم الألمانية","📚"],["Er trinkt Wasser.","يشرب الماء","💧"],["Sie spielt Fußball.","تلعب كرة القدم","⚽"],["Wir wohnen in Oran.","نسكن في وهران","🏙️"],["Sie arbeiten jeden Tag.","يخدمو كل يوم","💼"]],[["Ich ___ Deutsch.","lerne","lerne|lernst|lernt"],["Du ___ Wasser.","trinkst","trinke|trinkst|trinkt"],["Er ___ Fußball.","spielt","spiele|spielst|spielt"],["Wir ___ in Algier.","wohnen","wohne|wohnt|wohnen"],["Ihr ___ Tee.","trinkt","trinkt|trinken|trinkst"],["Die Kinder ___ im Garten.","spielen","spielt|spielen|spiele"],["Meine Mutter ___ Kaffee.","trinkt","trinke|trinkt|trinken"],["Ich ___ ein Buch.","lese","lese|liest|lesen"]]),
SU("a1d","4. der / die / das","📘","مذكر der · مؤنث die · محايد das · الجمع دائما die. احفظي الاسم مع أداته دائما.",[["Der Mann ist groß.","الرجل طويل","Der",ab],["Die Frau ist nett.","المرأة لطيفة","Die",ab],["Das Kind spielt.","الطفل يلعب","Das",ab],["Der Tisch ist neu.","الطاولة جديدة","Der",ab],["Die Sonne scheint.","الشمس تشرق","Die",ab],["Das Buch ist gut.","الكتاب جيد","Das",ab]]),
SU("a1e","5. ein / eine","🔤","ein للمذكر والمحايد · eine للمؤنث (نكرة).",[["Das ist ein Tisch.","هذه طاولة","ein","ein|eine|einen"],["Das ist eine Lampe.","هذه لمبة","eine","ein|eine|einen"],["Das ist ein Haus.","هذا بيت","ein","ein|eine|einen"],["Ich habe eine Schwester.","عندي أخت","eine","ein|eine|einen"],["Er hat ein Auto.","عنده سيارة","ein","ein|eine|einen"]]),
SU("a1f","6. النفي: nicht / kein","🚫","kein ينفي الاسم · nicht ينفي الفعل أو الصفة.",[["Ich habe kein Auto.","ما عندي سيارة","kein","kein|keine|nicht"],["Ich bin nicht müde.","لست متعبا","nicht","kein|nicht|keine"],["Sie hat keine Zeit.","ما عندها وقت","keine","kein|keine|nicht"],["Das ist nicht gut.","هذا ليس جيدا","nicht","kein|nicht|keine"],["Das ist kein Problem.","هذه ليست مشكلة","kein","kein|keine|nicht"]]),
U("a1g","7. كلمات الاستفهام",[["Wer?","من؟","🙋"],["Was?","ماذا؟","❓"],["Wo?","أين؟","📍"],["Wohin?","إلى أين؟","➡️"],["Woher?","من أين؟","🌍"],["Wann?","متى؟","⏰"],["Warum?","لماذا؟","🤔"],["Wie?","كيف؟","🙂"],["Wie viel?","كم؟","🔢"],["Welcher?","أي؟","👉"]]),
SU("a1h","8. ترتيب الجملة: الفعل في المكان الثاني","🧩","في الجملة الخبرية الفعل دائما في المكان الثاني، حتى إذا بدأت بالزمان أو المكان.",[["Heute gehe ich ins Kino.","اليوم أذهب للسينما","gehe","gehe|ich|ins"],["Morgen lerne ich Deutsch.","غدا أتعلم الألمانية","lerne","lerne|ich|morgen"],["Jetzt trinkt er Tee.","الآن يشرب شاي","trinkt","trinkt|er|jetzt"],["In Algier wohnt meine Tante.","في العاصمة تسكن عمتي","wohnt","wohnt|meine|Algier"],["Am Montag arbeiten wir.","يوم الاثنين نخدمو","arbeiten","arbeiten|wir|Montag"]]),
T("a1i","9. möchten (يرغب في)","möchten — يرغب",[["ich","möchte"],["du","möchtest"],["er / sie / es","möchte"],["wir","möchten"],["ihr","möchtet"],["sie / Sie","möchten"]],"الفعل الثاني يجي مصدر في آخر الجملة: Ich möchte Tee trinken.",[["Ich möchte einen Kaffee.","نحب قهوة","☕"],["Sie möchte nach Berlin fahren.","تحب تسافر لبرلين","✈️"],["Wir möchten essen.","نحبو ناكلو","🍽️"],["Möchtest du Tee?","تحب أتاي؟","🍵"],["Sie möchten bezahlen.","يحبو يخلصو","💳"]],[["Ich ___ einen Kaffee.","möchte","möchte|möchtest|möchten"],["Du ___ Tee.","möchtest","möchte|möchtest|möchtet"],["Sie ___ nach Berlin.","möchte","möchte|möchten|möchtet"],["Wir ___ essen.","möchten","möchte|möchten|möchtet"],["Ihr ___ gehen.","möchtet","möchtet|möchten|möchtest"],["Er ___ schlafen.","möchte","möchte|möchten|möchtest"],["Die Kinder ___ spielen.","möchten","möchte|möchten|möchtet"],["___ du Wasser?","Möchtest","Möchtest|Möchte|Möchten"]]),
SU("a1j","10. الحالة المفعولية Akkusativ","🎯","المفعول به: der ← den · ein ← einen للمذكر فقط. die/das/eine لا تتغير.",[["Ich sehe den Mann.","أرى الرجل","den","der|den|dem"],["Ich habe einen Bruder.","عندي أخ","einen","ein|einen|eine"],["Er kauft das Buch.","يشتري الكتاب","das","das|dem|den"],["Wir besuchen die Oma.","نزور الجدة","die","die|der|den"],["Ich kenne keinen Arzt.","ما نعرف طبيب","keinen","kein|keinen|keine"]]),
U("a1k","11. حوار كامل",[["Hallo! Wie heißt du?","سلام! واش اسمك؟","🙋"],["Ich heiße Sara. Und du?","اسمي سارة. وأنت؟","👩"],["Ich bin Ali. Freut mich.","أنا علي. تشرفنا","🧑"],["Freut mich auch. Woher kommst du?","تشرفنا. من وين أنت؟","🌍"],["Ich komme aus Oran. Und du?","أنا من وهران. وأنت؟","🏙️"],["Ich komme aus Algier. Sprichst du Deutsch?","أنا من العاصمة. تهدر ألماني؟","🗣️"],["Ja, ein bisschen. Ich lerne noch.","إيه، شوية. مازلت نتعلم","📚"]])]},
{id:"A2",n:"المستوى A2",u:[
SU("a2a","1. الأفعال المساعدة","💪","können قدرة · müssen واجب · wollen رغبة · dürfen إذن · sollen نصيحة. الفعل الثاني مصدر في النهاية.",[["Ich kann schwimmen.","نعرف نعوم","kann","kann|muss|will"],["Du musst heute arbeiten.","لازم تخدم اليوم","musst","kannst|musst|willst"],["Wir wollen ins Kino gehen.","نحبو نروحو للسينما","wollen","können|müssen|wollen"],["Hier darf man nicht rauchen.","ممنوع التدخين هنا","darf","darf|soll|will"],["Du sollst mehr schlafen.","لازم تنعس أكثر","sollst","sollst|kannst|willst"],["Kannst du mir helfen?","تقدر تعاونني؟","Kannst","Kannst|Musst|Willst"]]),
SU("a2b","2. الماضي التام Perfekt","⏮️","haben أو sein + التصريف الثالث. sein مع أفعال الحركة وتغيير الحالة.",[["Ich habe Deutsch gelernt.","تعلمت الألمانية","gelernt","gelernt|lerne|lernte"],["Sie hat Pizza gegessen.","أكلت بيتزا","gegessen","gegessen|gegessed|isst"],["Wir sind nach Oran gefahren.","سافرنا لوهران","gefahren","gefahren|fahren|fuhr"],["Er ist früh aufgestanden.","قام بكري","ist","ist|hat|wird"],["Ich habe das Buch gelesen.","قريت الكتاب","gelesen","gelesen|gelest|lese"],["Sie sind gestern gekommen.","جاو البارح","gekommen","gekommen|kommen|kam"]]),
SU("a2c","3. الحالة Dativ","🎁","dem (م/محايد) · der (مؤنث) · den + n (جمع). بعد mit, bei, von, zu, aus, nach.",[["Ich helfe dem Mann.","أعاون الرجل","dem","den|dem|der"],["Er gibt der Frau ein Buch.","يعطي المرأة كتابا","der","die|der|dem"],["Ich wohne bei meinen Eltern.","أسكن عند والدي","meinen","meine|meinen|meinem"],["Wir fahren mit dem Bus.","نمشيو بالباص","dem","den|dem|das"],["Sie kommt aus der Schweiz.","هي من سويسرا","der","die|der|dem"],["Das Buch gehört dem Kind.","الكتاب للطفل","dem","das|dem|den"]]),
SU("a2d","4. in / an / auf: أين؟ وإلى أين؟","📍","إلى أين؟ ← Akkusativ · أين؟ ← Dativ.",[["Ich gehe in die Schule.","أذهب للمدرسة","die","die|der|dem"],["Ich bin in der Schule.","أنا في المدرسة","der","die|der|den"],["Das Buch liegt auf dem Tisch.","الكتاب فوق الطاولة","dem","dem|den|der"],["Er legt das Buch auf den Tisch.","يضع الكتاب على الطاولة","den","dem|den|der"],["Wir fahren in die Stadt.","نمشيو للمدينة","die","die|der|dem"],["Sie wohnen in der Stadt.","يسكنو في المدينة","der","die|der|dem"]]),
SU("a2e","5. أدوات الملكية","👪","mein · dein · sein · ihr · unser · euer · ihr. تأخذ نهايات مثل ein / eine.",[["Das ist mein Bruder.","هذا أخي","mein","mein|meine|meinen"],["Das ist meine Schwester.","هذه أختي","meine","mein|meine|meinen"],["Wo ist dein Handy?","وين هاتفك؟","dein","dein|deine|deinen"],["Sie liebt ihren Mann.","تحب زوجها","ihren","ihr|ihren|ihre"],["Unser Haus ist groß.","بيتنا كبير","Unser","Unser|Unsere|Unseren"]]),
SU("a2f","6. الأفعال المنفصلة","🔧","البادئة تروح لآخر الجملة: aufstehen ← Ich stehe auf.",[["Ich stehe um sieben auf.","نقوم على السابعة","auf","auf|an|ab"],["Er ruft mich an.","يتصل بيا","an","auf|an|ein"],["Wir kaufen heute ein.","نتسوقو اليوم","ein","aus|ein|zu"],["Der Zug fährt um acht ab.","القطار يتحرك على الثامنة","ab","ab|auf|an"],["Sie macht das Fenster zu.","تسكر النافذة","zu","zu|auf|ein"]]),
SU("a2g","7. المقارنة","⚖️","er للمقارنة (größer als) · am ...sten للتفضيل. شاذ: gut ← besser ← am besten.",[["Er ist größer als ich.","هو أكبر مني","größer","groß|größer|am größten"],["Das ist das beste Buch.","هذا أفضل كتاب","beste","gut|besser|beste"],["Mein Haus ist kleiner als dein Haus.","بيتي أصغر من بيتك","kleiner","klein|kleiner|am kleinsten"],["Sie läuft am schnellsten.","هي تجري الأسرع","schnellsten","schnell|schneller|schnellsten"],["Heute ist es wärmer als gestern.","اليوم أدفأ من البارح","wärmer","warm|wärmer|am wärmsten"]]),
SU("a2h","8. weil / dass / wenn","🔗","بعد weil · dass · wenn · damit الفعل المصرف يروح للآخر.",[["Ich bleibe zu Hause, weil ich krank bin.","نبقى في الدار لأني مريض","weil","weil|denn|dass"],["Ich weiß, dass du müde bist.","نعرف أنك تعبان","dass","weil|dass|wenn"],["Wenn es regnet, bleibe ich zu Hause.","إذا مطرت نبقى","Wenn","Wenn|Weil|Dass"],["Er lernt viel, damit er die Prüfung besteht.","يقرا بزاف باش ينجح","damit","damit|weil|dass"],["Ich lerne Deutsch, weil ich dort arbeiten will.","نتعلم الألمانية لأني نحب نخدم هناك","weil","weil|denn|dass"]]),
SU("a2i","9. الأمر Imperativ","📢","du ← الجذر (Komm!) · ihr ← Kommt! · Sie ← Kommen Sie!",[["Komm bitte her!","جي هنا لو سمحت","Komm","Komm|Kommst|Kommen"],["Lernt jeden Tag!","(أنتم) تعلموا كل يوم","Lernt","Lernt|Lernen|Lerne"],["Öffnen Sie das Fenster!","افتحوا النافذة (احترام)","Öffnen","Öffnen|Öffnet|Öffne"],["Sei nicht traurig!","لا تحزن","Sei","Sei|Bist|Ist"],["Mach die Tür zu!","سكر الباب","Mach","Mach|Machst|Macht"]]),
SU("a2j","10. الأفعال الانعكاسية","🪞","mich · dich · sich · uns · euch · sich",[["Ich wasche mich.","نغسل نفسي","mich","mich|dich|sich"],["Du freust dich.","أنت فرحان","dich","mich|dich|sich"],["Er interessiert sich für Musik.","يهتم بالموسيقى","sich","mich|dich|sich"],["Wir treffen uns morgen.","نتلاقاو غدوة","uns","uns|euch|sich"],["Setzt euch bitte!","اجلسوا لو سمحتم","euch","uns|euch|sich"]]),
SU("a2k","11. الماضي البسيط: war / hatte","📜","sein: war · warst · war · waren · wart · waren. haben: hatte · hattest · hatte · hatten · hattet · hatten.",[["Gestern war ich müde.","البارح كنت تعبان","war","war|waren|wart"],["Wir waren im Urlaub.","كنا في عطلة","waren","war|waren|wart"],["Sie hatte keine Zeit.","ما كانش عندها وقت","hatte","hatte|hatten|hat"],["Ich hatte Hunger.","كنت جائع","hatte","hatte|hatten|hat"],["Ihr wart zu spät.","كنتم متأخرين","wart","war|waren|wart"]])]},
{id:"B1",n:"المستوى B1",u:[
SU("b1a","1. المبني للمجهول Passiv","📩","werden + التصريف الثالث. الفاعل الأصلي يجي مع von + Dativ.",[["Hier wird Deutsch gesprochen.","هنا تتهدر الألمانية","wird","wird|werden|wurde"],["Das Auto wird repariert.","السيارة تتصلح","wird","wird|ist|hat"],["Die Briefe werden geschrieben.","الرسائل تتكتب","werden","wird|werden|wurden"],["Das Fenster wurde gestern geöffnet.","النافذة تفتحت البارح","wurde","wird|wurde|wurden"],["Die Tür wurde von ihm geschlossen.","الباب تسكر من طرفه","wurde","wird|wurde|werden"]]),
SU("b1b","2. جمل الوصل Relativsätze","🔗","الضمير الموصول يتبع جنس الاسم (der · die · das) وحالته في الجملة الفرعية.",[["Der Mann, der nebenan wohnt, ist nett.","الراجل لي يسكن حدانا لطيف","der","der|die|das"],["Die Frau, die ich kenne, ist Ärztin.","المرأة لي نعرفها طبيبة","die","der|die|das"],["Das Buch, das ich lese, ist spannend.","الكتاب لي نقراه مشوق","das","der|die|das"],["Das ist der Mann, dem ich geholfen habe.","هذا الراجل لي عاونتو","dem","den|dem|der"],["Die Kinder, mit denen ich spiele, sind nett.","الأطفال لي نلعب معاهم لطاف","denen","die|denen|der"]]),
SU("b1c","3. الشرط والتمني Konjunktiv II","💭","würde + مصدر · hätte · wäre · könnte. للتمني، الأدب، الشرط غير الواقعي.",[["Ich würde gern reisen.","نحب نسافر","würde","würde|werde|wurde"],["Wenn ich Zeit hätte, würde ich dich besuchen.","لو كان عندي وقت نزورك","hätte","hatte|hätte|habe"],["Wenn ich reich wäre, würde ich ein Haus kaufen.","لو كنت غني نشري دار","wäre","war|wäre|bin"],["Könnten Sie mir helfen?","ممكن تعاونوني؟","Könnten","Könnten|Konnten|Können"],["Ich hätte gern einen Kaffee.","نحب قهوة","hätte","hatte|hätte|habe"]]),
SU("b1d","4. obwohl / während / bevor / nachdem","⏳","كلها جمل فرعية: الفعل المصرف في الآخر.",[["Obwohl es regnet, gehen wir spazieren.","رغم المطر نتمشاو","Obwohl","Obwohl|Weil|Damit"],["Ich lese, während ich warte.","نقرا وأنا نستنى","während","während|bevor|obwohl"],["Bevor ich schlafe, putze ich die Zähne.","قبل ما ننعس نغسل أسناني","Bevor","Bevor|Nachdem|Weil"],["Nachdem ich gegessen habe, trinke ich Tee.","بعد ما ناكل نشرب أتاي","Nachdem","Nachdem|Bevor|Obwohl"],["Ich bleibe, bis du kommst.","نبقى حتى تجي","bis","bis|seit|ob"]]),
SU("b1e","5. نهايات الصفات","🎨","ein großer Tisch · eine neue Tasche · ein schönes Haus. بعد der/die/das: -e أو -en.",[["Das ist ein großer Tisch.","هذه طاولة كبيرة","großer","großer|große|großes"],["Ich habe eine neue Tasche.","عندي شنطة جديدة","neue","neue|neuer|neues"],["Er kauft ein schönes Haus.","يشتري بيت جميل","schönes","schöner|schöne|schönes"],["Die kleinen Kinder spielen.","الأطفال الصغار يلعبو","kleinen","kleine|kleinen|kleiner"],["Wir trinken kalten Tee.","نشربو أتاي بارد","kalten","kalter|kalten|kaltes"]]),
SU("b1f","6. المصدر مع zu","➡️","zu + مصدر · um ... zu (لأجل) · بدون zu مع الأفعال المساعدة.",[["Ich habe Lust, ins Kino zu gehen.","عندي رغبة نروح للسينما","zu","zu|um|dass"],["Es ist wichtig, Deutsch zu lernen.","مهم نتعلمو الألمانية","zu","zu|um|dass"],["Ich lerne Deutsch, um in Deutschland zu arbeiten.","نتعلم الألمانية باش نخدم بألمانيا","um","um|damit|weil"],["Er fängt an, zu kochen.","بدا يطيب","zu","zu|um|dass"]]),
SU("b1g","7. المستقبل والماضي الأبعد","🕰️","werden + مصدر = المستقبل · hatte + التصريف الثالث = ماضي أبعد.",[["Ich werde morgen anrufen.","نتصل غدوة","werde","werde|wurde|würde"],["Sie wird bald kommen.","تجي قريب","wird","wird|wurde|werden"],["Nachdem er gegessen hatte, ging er schlafen.","بعد ما كل راح ينعس","hatte","hatte|hat|hätte"],["Wir werden Deutsch sprechen.","نهدرو ألماني","werden","werden|wurden|wird"],["Ich hatte schon gegessen.","كنت أكلت من قبل","hatte","hatte|habe|hätte"]])]},
{id:"B2",n:"المستوى B2",u:[
SU("b2a","1. Konjunktiv II في الماضي","⏪","hätte / wäre + التصريف الثالث: لشيء ما صراش.",[["Wenn ich Zeit gehabt hätte, wäre ich gekommen.","لو كان عندي وقت كنت جيت","hätte","hätte|hatte|habe"],["Ich hätte das nicht sagen sollen.","ما كانش لازم نقولها","hätte","hätte|hatte|habe"],["Wenn er gelernt hätte, hätte er bestanden.","لو قرا كان نجح","bestanden","bestanden|besteht|bestand"],["Sie wäre gern geblieben.","كانت حابة تبقى","wäre","wäre|war|hätte"],["An deiner Stelle wäre ich gegangen.","في مكانك كنت رحت","wäre","wäre|war|hätte"]]),
SU("b2b","2. Passiv مع الأفعال المساعدة","🛠️","modal + التصريف الثالث + werden.",[["Das Problem muss gelöst werden.","المشكل لازم يتحل","werden","werden|wird|worden"],["Die Tür kann geöffnet werden.","الباب يمكن يتفتح","werden","werden|wird|worden"],["Das Fenster ist geschlossen.","النافذة مسكرة","ist","ist|wird|wurde"],["Das Haus wurde 1990 gebaut.","البيت تبنى في 1990","wurde","wurde|wird|ist"],["Die Rechnung muss bezahlt werden.","الفاتورة لازم تتخلص","bezahlt","bezahlt|bezahlen|bezahlte"]]),
SU("b2c","3. أدوات الربط","🧩","trotzdem (ومع ذلك) · deshalb (لهذا) · außerdem (بالإضافة) · entweder...oder · nicht nur...sondern auch · je...desto.",[["Er war krank; trotzdem kam er zur Arbeit.","كان مريض، ومع ذلك جا للخدمة","trotzdem","trotzdem|deshalb|außerdem"],["Es regnete, deshalb blieben wir zu Hause.","كانت تمطر، لهذا بقينا","deshalb","trotzdem|deshalb|obwohl"],["Er ist klug, außerdem ist er fleißig.","هو ذكي، وبالإضافة مجتهد","außerdem","außerdem|trotzdem|sonst"],["Entweder lernst du, oder du fällst durch.","يا تقرا يا تفشل","oder","oder|und|aber"],["Nicht nur er, sondern auch sie kommt.","ماشي هو فقط بل هي زادا","sondern","sondern|aber|oder"],["Je mehr ich lerne, desto besser verstehe ich.","كلما قريت أكثر فهمت أحسن","desto","desto|als|denn"]]),
SU("b2d","4. الحالة Genitiv","👑","des / der + ‑(e)s للمذكر · wegen · trotz · während + Genitiv.",[["Das ist das Auto meines Vaters.","هذه سيارة أبي","meines","meines|meinem|meiner"],["Wegen des Regens bleiben wir hier.","بسبب المطر نبقى","des","des|dem|der"],["Trotz des Wetters gehen wir raus.","رغم الطقس نخرجو","des","des|dem|den"],["Die Hauptstadt des Landes ist groß.","عاصمة البلاد كبيرة","des","des|dem|der"],["Während der Ferien reisen wir.","خلال العطلة نسافرو","der","der|des|dem"]]),
SU("b2e","5. الكلام المنقول Konjunktiv I","🗣️","نستعمله في الأخبار والتقارير: er sei · sie habe · es gebe.",[["Er sagt, er sei krank.","يقول أنه مريض","sei","sei|ist|wäre"],["Sie meint, sie habe keine Zeit.","تقول ما عندها وقت","habe","habe|hat|hätte"],["Der Minister sagte, es gebe keine Lösung.","الوزير قال ما كاين حل","gebe","gebe|gibt|gab"],["Er behauptet, er kenne den Mann nicht.","يدعي أنه ما يعرفش الراجل","kenne","kenne|kennt|kannte"],["Sie sagte, sie komme morgen.","قالت أنها تجي غدوة","komme","komme|kommt|käme"]]),
SU("b2f","6. أفعال مع حروف جر ثابتة","📌","warten auf · sich interessieren für · denken an · sprechen über · sich freuen auf. احفظي الفعل مع حرف الجر.",[["Ich warte auf den Bus.","نستنى الباص","auf","auf|für|an"],["Er interessiert sich für Politik.","يهتم بالسياسة","für","für|auf|an"],["Sie denkt an ihre Familie.","تفكر في عائلتها","an","an|auf|von"],["Wir sprechen über das Problem.","نتكلمو على المشكل","über","über|von|mit"],["Ich freue mich auf den Urlaub.","متحمسة للعطلة الجاية","auf","auf|über|für"]])]},
{id:"C1",n:"المستوى C1",u:[
SU("c1a","1. الأسلوب الاسمي","🏛️","في الكتابة الرسمية نحوّل الجملة الفرعية لاسم: wegen · trotz · aufgrund · bei · zur.",[["Wegen der Verspätung des Zuges kamen wir zu spät.","بسبب تأخر القطار وصلنا متأخرين","Verspätung","Verspätung|Verspäten|verspätet"],["Bei Regen fällt das Fest aus.","في حالة المطر تلغى الحفلة","Bei","Bei|Mit|Für"],["Trotz seiner Krankheit arbeitete er weiter.","رغم مرضه واصل الخدمة","Trotz","Trotz|Wegen|Durch"],["Zur Lösung des Problems brauchen wir Zeit.","لحل المشكل نحتاج وقت","Lösung","Lösung|Lösen|Gelöst"],["Aufgrund der hohen Kosten wurde das Projekt abgesagt.","بسبب التكاليف العالية ألغي المشروع","Aufgrund","Aufgrund|Obwohl|Damit"]]),
SU("c1b","2. تعابير فعل + اسم","🧱","ثابتة: eine Entscheidung treffen · eine Frage stellen · in Betracht ziehen · Rücksicht nehmen.",[["Wir ziehen diesen Vorschlag in Betracht.","نأخذ هذا الاقتراح بعين الاعتبار","Betracht","Betracht|Frage|Zweifel"],["Er stellt eine Frage.","يطرح سؤالا","stellt","stellt|macht|gibt"],["Sie trifft eine Entscheidung.","تتخذ قرارا","trifft","trifft|macht|nimmt"],["Wir nehmen Rücksicht auf die Nachbarn.","نراعي الجيران","Rücksicht","Rücksicht|Platz|Acht"],["Das kommt nicht in Frage.","هذا مرفوض","Frage","Frage|Betracht|Zweifel"]]),
SU("c1c","3. أدوات التلطيف Modalpartikeln","🎭","doch · ja · eben · mal · denn: تغير النبرة ولا تترجم حرفيا.",[["Komm doch mal vorbei!","مرّ علينا مرة!","doch","doch|ja|eben"],["Das ist ja interessant!","هذا مثير للاهتمام فعلا!","ja","ja|doch|eben"],["Das ist eben so.","هكذا هي الأمور","eben","eben|ja|mal"],["Kannst du mir mal helfen?","تقدر تعاونني شوية؟","mal","mal|ja|doch"],["Wie spät ist es denn?","شحال الساعة بربي؟","denn","denn|ja|eben"]]),
SU("c1d","4. الصفات من الأفعال","🧬","Partizip I (schlafend) = يفعل · Partizip II (geliebt) = مفعول به.",[["Der von allen geliebte Lehrer geht in Rente.","المعلم المحبوب من الجميع يتقاعد","geliebte","geliebte|liebende|liebte"],["Die schlafenden Kinder sind ruhig.","الأطفال النايمين هادئين","schlafenden","schlafenden|geschlafenen|schlief"],["Das gestern gelieferte Paket ist da.","الطرد لي وصل البارح وصل","gelieferte","gelieferte|liefernde|lieferte"],["Die zu lösende Aufgabe ist schwer.","المهمة لي لازم تتحل صعبة","lösende","lösende|gelöste|löste"]]),
SU("c1e","5. تعابير مجازية","🎈","لا تُترجم حرفيا.",[["Das ist mir Wurst.","ما يهمنيش","Wurst","Wurst|Käse|Brot"],["Ich verstehe nur Bahnhof.","ما فهمت والو","Bahnhof","Bahnhof|Haus|Auto"],["Er hat Schwein gehabt.","كان محظوظ","Schwein","Schwein|Kuh|Hund"],["Das ist ein Katzensprung.","مسافة قريبة بزاف","Katzensprung","Katzensprung|Hundesprung|Vogelflug"],["Ich drücke dir die Daumen.","نتمنى لك التوفيق","Daumen","Daumen|Finger|Hand"]]),
SU("c1f","6. الرسمي وغير الرسمي","✉️","Sie + Konjunktiv II للأدب · du للأصدقاء.",[["Könnten Sie mir bitte helfen?","(رسمي) ممكن تعاونوني؟","Könnten","Könnten|Kannst|Willst"],["Kannst du mir mal helfen?","(غير رسمي) تقدر تعاونني؟","Kannst","Kannst|Könnten|Würden"],["Sehr geehrte Frau Schmidt,","(رسالة رسمية) سيدتي الكريمة","geehrte","geehrte|liebe|große"],["Liebe Grüße, Sara","(غير رسمي) تحياتي","Liebe","Liebe|Sehr|Mit"],["Mit freundlichen Grüßen","(رسمي) مع خالص التحية","freundlichen","freundlichen|lieben|netten"]])]},
{id:"C2",n:"المستوى C2",u:[
SU("c2a","1. دقائق Konjunktiv","🧠","als ob + Konjunktiv · hätte/wäre في بداية الجملة بدل wenn.",[["Als ob er alles wüsste!","كأنه يعرف كل شيء","wüsste","wüsste|weiß|wusste"],["Hätte ich das gewusst, wäre ich geblieben.","لو علمت لبقيت","Hätte","Hätte|Hatte|Habe"],["Er tut, als wäre nichts passiert.","يتصرف كأن ما حصل شيء","wäre","wäre|war|ist"],["Wäre er pünktlich gewesen, hätten wir den Zug erreicht.","لو كان في الوقت لحقنا القطار","Wäre","Wäre|War|Ist"],["Man hätte es wissen können.","كان ممكن نعرفوها","hätte","hätte|hatte|habe"]]),
U("c2b","2. الكلمات المركبة",[["die Handschuhe","قفازات (Hand+Schuhe)","🧤"],["der Kühlschrank","ثلاجة (kühl+Schrank)","🧊"],["das Krankenhaus","مستشفى (krank+Haus)","🏥"],["die Waschmaschine","غسالة","🧺"],["der Regenschirm","مظلة (Regen+Schirm)","☂️"],["die Zahnbürste","فرشاة أسنان","🪥"],["das Wörterbuch","قاموس","📖"],["der Flughafen","مطار (Flug+Hafen)","✈️"],["der Geburtstagskuchen","كعكة عيد الميلاد","🎂"],["die Fußballmannschaft","فريق كرة القدم","⚽"]]),
SU("c2c","3. لغة أكاديمية","🎓","عبارات للكتابة والعروض.",[["Meines Erachtens ist das falsch.","في رأيي هذا خطأ","Erachtens","Erachtens|Meinung|Sicht"],["Zusammenfassend lässt sich sagen, dass es funktioniert.","خلاصة القول أنه يعمل","Zusammenfassend","Zusammenfassend|Zuerst|Trotzdem"],["Dies ist auf mehrere Faktoren zurückzuführen.","يعود هذا إلى عدة عوامل","zurückzuführen","zurückzuführen|zurückzukommen|zurückgeführt"],["Es bleibt abzuwarten, ob sich die Lage verbessert.","يبقى الانتظار هل ستتحسن الحال","abzuwarten","abzuwarten|abwarten|abgewartet"],["Im Vergleich dazu ist die Zahl gestiegen.","بالمقارنة ارتفع العدد","Vergleich","Vergleich|Gegensatz|Bezug"]]),
SU("c2d","4. أمثال ألمانية","🏺","حكم تستعمل في الكلام اليومي.",[["Aller Anfang ist schwer.","كل بداية صعبة","Anfang","Anfang|Ende|Fang"],["Übung macht den Meister.","التمرين يصنع الاحتراف","Meister","Meister|Lehrer|Arzt"],["Morgenstund hat Gold im Mund.","من جد وجد (الصباح ذهب)","Gold","Gold|Brot|Geld"],["Ohne Fleiß kein Preis.","بلا مجهود لا جائزة","Fleiß","Fleiß|Geld|Mut"],["Wer rastet, der rostet.","من يتوقف يصدأ","rostet","rostet|rennt|ruht"]])]}
]}

function buildTR(){
var alphabet=[["A","a","araba","🚗"],["B","be","balık","🐟"],["C","ce","cam","🪟"],["Ç","çe","çay","🍵"],["D","de","deniz","🌊"],["E","e","ev","🏠"],["F","fe","fil","🐘"],["G","ge","gül","🌹"],["Ğ","yumuşak ge","dağ","⛰️"],["H","he","hava","🌤️"],["I","ı","ışık","💡"],["İ","i","inek","🐄"],["J","je","jilet","🪒"],["K","ke","kitap","📘"],["L","le","limon","🍋"],["M","me","masa","🪑"],["N","ne","nar","🍎"],["O","o","okul","🏫"],["Ö","ö","ördek","🦆"],["P","pe","para","💰"],["R","re","renk","🎨"],["S","se","su","💧"],["Ş","şe","şeker","🍬"],["T","te","telefon","📱"],["U","u","uçak","✈️"],["Ü","ü","üzüm","🍇"],["V","ve","vazo","🏺"],["Y","ye","yol","🛣️"],["Z","ze","zeytin","🫒"]];
var alphabetUnit={id:"tr0a",t:"1. الأبجدية التركية 29 حرفاً",cards:alphabet.map(function(x){return[x[0]+" "+x[1]+" — "+x[2],"اسم الحرف: "+x[1]+" · مثال: "+x[2],x[3],x[2]]}),w:alphabet.map(function(x){return[x[3],x[2]]}),sp:alphabet.map(function(x){return x[2]}),qs:function(){return pick(alphabet,8).map(function(x){return{q:'<span class="e">'+x[3]+'</span>بأي حرف تبدأ كلمة "'+x[2]+'"؟',a:x[0],o:opts(x[0],alphabet.map(function(y){return y[0]})),s:x[2]}})}};
return[
{id:"A1",n:"A1 — المبتدئ: الأساسيات",u:[alphabetUnit,
U("tr0b","2. التحيات والتعارف",[["Merhaba","مرحباً","👋"],["Günaydın","صباح الخير","🌅"],["İyi akşamlar","مساء الخير","🌆"],["İyi geceler","تصبح على خير","🌙"],["Nasılsın?","كيف حالك؟","🙂"],["İyiyim, teşekkür ederim.","أنا بخير، شكراً","😊"],["Benim adım ...","اسمي ...","🙋"],["Memnun oldum.","تشرفت بمعرفتك","🤝"],["Lütfen","من فضلك","🙏"],["Teşekkür ederim","شكراً لك","💐"],["Evet / Hayır","نعم / لا","✅"]]),
U("tr0c","3. الضمائر والجمل الأولى",[["Ben","أنا","🙋"],["Sen","أنت","👉"],["O","هو / هي","🧍"],["Biz","نحن","👥"],["Siz","أنتم / حضرتك","👥"],["Onlar","هم","👨‍👩‍👧"],["Ben öğrenciyim.","أنا طالبة","🎓"],["Sen yorgunsun.","أنت متعب","😴"],["O mutlu.","هو / هي سعيد(ة)","😊"],["Biz hazırız.","نحن مستعدون","💪"]]),
U("tr0d","4. الأرقام 1–20",[["bir","1","1️⃣"],["iki","2","2️⃣"],["üç","3","3️⃣"],["dört","4","4️⃣"],["beş","5","5️⃣"],["altı","6","6️⃣"],["yedi","7","7️⃣"],["sekiz","8","8️⃣"],["dokuz","9","9️⃣"],["on","10","🔟"],["on bir","11","🔢"],["on iki","12","🔢"],["on üç","13","🔢"],["on dört","14","🔢"],["on beş","15","🔢"],["on altı","16","🔢"],["on yedi","17","🔢"],["on sekiz","18","🔢"],["on dokuz","19","🔢"],["yirmi","20","🔢"]]),
U("tr0e","5. العائلة والأشخاص",[["anne","أم","👩"],["baba","أب","👨"],["kardeş","أخ أو أخت","🧑"],["abla","أخت كبرى","👩"],["abi","أخ أكبر","👨"],["çocuk","طفل","🧒"],["arkadaş","صديق","🤝"],["aile","عائلة","👨‍👩‍👧"],["eş","زوج / زوجة","💍"],["öğretmen","أستاذ","👩‍🏫"]]),
U("tr0f","6. الطعام والشراب",[["su","ماء","💧"],["ekmek","خبز","🍞"],["çay","شاي","🍵"],["kahve","قهوة","☕"],["süt","حليب","🥛"],["peynir","جبن","🧀"],["elma","تفاحة","🍎"],["yemek","طعام","🍽️"],["tavuk","دجاج","🍗"]]),
T("tr1a","7. الجمل الاسمية ولواحق الشخص","olmak — يكون",[],"في التركية تلتحق لاحقة الشخص بالاسم أو الصفة: öğrenciyim = أنا طالب/ة.",[["Ben öğrenciyim.","أنا طالب/ة","🎓"],["Sen çok iyisin.","أنت بخير جداً","😊"],["O doktor.","هو/هي طبيب","🩺"],["Biz mutluyuz.","نحن سعداء","😄"],["Siz hazır mısınız?","هل أنتم مستعدون؟","❓"]],[["Ben ___ öğrenciyim.","öğrenciyim","öğrenciyim|öğrencisin|öğrenciyiz"],["Biz ___.","mutluyuz","mutluyum|mutlusun|mutluyuz"]]),
U("tr1b","8. أيام الأسبوع والوقت",[["Pazartesi","الاثنين","📅"],["Salı","الثلاثاء","📅"],["Çarşamba","الأربعاء","📅"],["Perşembe","الخميس","📅"],["Cuma","الجمعة","📅"],["Cumartesi","السبت","📅"],["Pazar","الأحد","📅"],["Bugün","اليوم","☀️"],["Yarın","غداً","➡️"],["Saat kaç?","كم الساعة؟","⏰"]])]},
{id:"A2",n:"A2 — بناء الجمل والتواصل",u:[
U("tr2a","1. أفعال يومية",[["gitmek","يذهب","🚶"],["gelmek","يأتي","🚶"],["yemek","يأكل","🍽️"],["içmek","يشرب","🥤"],["çalışmak","يعمل","💼"],["öğrenmek","يتعلم","📚"],["konuşmak","يتكلم","🗣️"],["istemek","يريد","✨"],["sevmek","يحب","❤️"],["anlamak","يفهم","💡"]]),
T("tr2b","2. المضارع المستمر -yor","الفعل + yor + لاحقة الشخص",[],"لاحقة -yor تعبّر عن فعل يحدث الآن: geliyorum = أنا قادم/ة.",[["Türkçe öğreniyorum.","أتعلم التركية","📚"],["Şimdi yemek yapıyorum.","أحضر الطعام الآن","🍲"],["Ne yapıyorsun?","ماذا تفعل؟","❓"],["Annem çalışıyor.","أمي تعمل","💼"],["Biz Türkçe konuşuyoruz.","نتكلم التركية","🗣️"]],[["Ben Türkçe ___.","öğreniyorum","öğreniyorum|öğreniyorsun|öğreniyor"],["Sen ne ___?","yapıyorsun","yapıyorum|yapıyorsun|yapıyor"]]),
T("tr2c","3. النفي والسؤال","değil / -ma -me / mı mi mu mü",[],"değil تنفي الاسم والصفة؛ الأفعال تستعمل -ma/-me. أداة السؤال منفصلة.",[["Ben hasta değilim.","لست مريضاً/ة","🤒"],["Kahve içmiyorum.","لا أشرب القهوة","☕"],["Türkçe biliyor musun?","هل تعرف التركية؟","🗣️"],["Bu senin kitabın mı?","هل هذا كتابك؟","📘"],["Anlamadım.","لم أفهم","❓"]],[["Ben yorgun ___.","değilim","değilim|değilsin|değil"],["Su ___.","içmiyorum","içiyorum|içmiyorsun|içmiyorum"]]),
U("tr2d","4. الأماكن والاتجاهات",[["ev","بيت","🏠"],["okul","مدرسة","🏫"],["iş","عمل","💼"],["hastane","مستشفى","🏥"],["nerede?","أين؟","📍"],["burada","هنا","👇"],["orada","هناك","👉"],["sağ","يمين","➡️"],["sol","يسار","⬅️"],["düz","مستقيم","⬆️"],["yakın","قريب","📍"],["uzak","بعيد","🗺️"]]),
U("tr2e","5. التسوق والمطعم",[["Bu ne kadar?","بكم هذا؟","💰"],["Çok pahalı.","غالي جداً","💸"],["Daha ucuz var mı?","هل يوجد أرخص؟","🛍️"],["Hesap lütfen.","الحساب من فضلك","🧾"],["Bir çay istiyorum.","أريد شاي","🍵"],["Afiyet olsun!","شهية طيبة","🍽️"]])]},
{id:"B1",n:"B1 — الاستقلال في الكلام",u:[
T("tr3a","1. الماضي -di","جذر الفعل + di/dı/du/dü أو ti/tı/tu/tü",[],"لاحقة الماضي تتغير حسب الانسجام الصوتي.",[["Dün sinemaya gittim.","ذهبت إلى السينما أمس","🎬"],["Sabah erken uyandım.","استيقظت باكراً","🌅"],["Dün seni aradım.","اتصلت بك أمس","📞"],["Yemek yedik.","أكلنا الطعام","🍽️"]],[["Dün okula ___.","gittim","gittim|gidiyorum|gideceğim"],["Sabah erken ___.","uyandım","uyandım|uyanıyorum|uyanacağım"]]),
T("tr3b","2. المستقبل -ecek / -acak","الفعل + ecek/acak + لاحقة الشخص",[],"المستقبل يتبع الانسجام الصوتي: geleceğim = سأأتي.",[["Yarın çalışacağım.","سأعمل غداً","📅"],["Hafta sonu dinleneceğiz.","سنرتاح نهاية الأسبوع","🌿"],["Seni arayacağım.","سأتصل بك","📞"]],[["Yarın seni ___.","arayacağım","arayacağım|aradım|arıyorum"]]),
U("tr3c","3. ربط الأفكار والرأي",[["çünkü","لأن","🔗"],["ama","لكن","↔️"],["bu yüzden","لهذا السبب","➡️"],["bence","في رأيي","💭"],["bana göre","حسب رأيي","🗣️"],["örneğin","مثلاً","📝"],["öncelikle","أولاً","1️⃣"],["sonuç olarak","نتيجة لذلك","🏁"],["katılıyorum","أتفق","✅"],["katılmıyorum","لا أتفق","❌"]]),
U("tr3d","4. الصحة والمشاعر",[["başım ağrıyor","رأسي يؤلمني","🤕"],["kendimi iyi hissetmiyorum","لا أشعر أنني بخير","😔"],["eczane","صيدلية","💊"],["randevu","موعد","📅"],["dinlenmeliyim","يجب أن أرتاح","🛌"],["mutluyum","أنا سعيدة","😊"],["endişeliyim","أنا قلقة","😟"]])]},
{id:"B2",n:"B2 — الطلاقة والتعبير المتقدم",u:[
T("tr4a","1. الشرط -se / -sa","إذا / لو",[],"لاحقة -se/-sa تعبّر عن الشرط.",[["Vaktim olursa seni ararım.","إذا كان عندي وقت سأتصل بك","📞"],["Daha çok çalışırsan başarırsın.","إذا عملت أكثر ستنجح","🏆"],["Yağmur yağarsa evde kalacağız.","إذا أمطرت سنبقى في البيت","🌧️"]],[["Vaktim ol___ seni ararım.","ursa","ursa|du|acak"]]),
T("tr4b","2. الضرورة -malı / -meli","يجب أن",[],"لاحقة -malı/-meli تعبّر عن الضرورة أو النصيحة.",[["Daha fazla pratik yapmalıyım.","يجب أن أتدرب أكثر","📚"],["Erken yatmalısın.","يجب أن تنام مبكراً","🌙"],["Doktora gitmeliyiz.","يجب أن نذهب للطبيب","🩺"]],[["Daha çok çalış___.","malıyım","malıyım|ıyorum|dım"]]),
U("tr4c","3. عبارات طبيعية في المحادثة",[["Aslında","في الحقيقة","💬"],["Tabii ki","طبعاً","👍"],["Bence de","أنا أيضاً أرى ذلك","🤝"],["Hiç fark etmez.","لا فرق أبداً","👌"],["Bir dakika, lütfen.","لحظة من فضلك","⏳"],["Ne demek istiyorsun?","ماذا تقصد؟","❓"],["Haklısın.","أنت محق","✅"],["Emin değilim.","لست متأكداً","🤔"],["Sorun değil.","لا مشكلة","😊"]]),
U("tr4d","4. حوار عملي كامل",[["Merhaba, size nasıl yardımcı olabilirim?","مرحباً، كيف أستطيع مساعدتك؟","👋"],["Bir konuda bilgi almak istiyorum.","أريد الاستفسار عن أمر","ℹ️"],["Bunu biraz daha açıklar mısınız?","هل تشرح ذلك أكثر؟","🗣️"],["Anladım, çok teşekkür ederim.","فهمت، شكراً جزيلاً","🙏"],["Rica ederim. İyi günler!","العفو، نهارك سعيد","☀️"]])]},
{id:"C1",n:"C1 — الإتقان المتقدم",u:[
U("tr5a","1. مفردات أكاديمية ومهنية",[["araştırma","بحث","🔬"],["gelişim","تطور","📈"],["başvuru","طلب / ترشح","📄"],["deneyim","خبرة","💼"],["sorumluluk","مسؤولية","⚖️"],["başarı","نجاح","🏆"],["çözüm","حل","💡"],["kanıt","دليل","🔎"],["özellikle","خصوصاً","🎯"],["değerlendirmek","يقيّم","📝"]]),
U("tr5b","2. روابط متقدمة",[["buna rağmen","رغم ذلك","↔️"],["üstelik","وفوق ذلك","➕"],["dolayısıyla","وبالتالي","➡️"],["oysa","في حين أن","⚖️"],["nitekim","كما أن / بالفعل","📌"],["bunun yanı sıra","إضافة إلى ذلك","➕"]]),
T("tr5c","3. المبني للمجهول", "صيغة المبني للمجهول",[],"تتغير بنية الفعل لإبراز الحدث بدل الفاعل: Kitap yazıldı = كُتب الكتاب.",[["Bu kitap 2020'de yazıldı.","كُتب هذا الكتاب سنة 2020","📘"],["Sorun kısa sürede çözüldü.","حُلّت المشكلة بسرعة","💡"],["Toplantı iptal edildi.","أُلغِي الاجتماع","📅"]],[["Kitap dün ___.","yazıldı","yazıldı|yazdı|yazıyor"]]) ]}
];
}

function meGen(){meSave();var m=S.me,s;if(LANG=="fr"){s="Bonjour ! Je m'appelle "+(m.n||"...")+". ";if(m.a)s+="J'ai "+m.a+" ans. ";if(m.c)s+="Je viens de "+m.c+". ";if(m.j)s+="Je suis "+m.j+". ";s+="J'apprends le français. Enchanté !"}else if(LANG=="de"){s="Hallo! Ich heiße "+(m.n||"...")+". ";if(m.a)s+="Ich bin "+m.a+" Jahre alt. ";if(m.c)s+="Ich komme aus "+m.c+". ";if(m.j)s+="Ich arbeite als "+m.j+". ";s+="Ich lerne Deutsch. Freut mich!"}else if(LANG=="tr"){s="Merhaba! Benim adım "+(m.n||"...")+". ";if(m.c)s+=m.c+"'dan geliyorum. ";if(m.j)s+="Ben "+m.j+". ";s+="Türkçe öğreniyorum. Tanıştığıma memnun oldum!"}else{s="Hello! My name is "+(m.n||"...")+". ";if(m.a)s+="I am "+m.a+" years old. ";if(m.c)s+="I am from "+m.c+". ";if(m.j)s+="I work as "+m.j+". ";s+="I am learning English. Nice to meet you!"}document.getElementById("mtx").value=s;meSave()}
function chooseLang(){tab="lock";document.getElementById("nav").style.display="none";$('<div class="card" style="text-align:center;margin-top:50px"><h1>🌍</h1><p><b>شنو اللغة لي حابة تتعلميها؟</b></p><div class="row"><button class="btn" style="font-size:20px" onclick="setL(\'en\')">🇬🇧 الإنجليزية</button><button class="btn" style="font-size:20px" onclick="setL(\'de\')">🇩🇪 الألمانية</button><button class="btn" style="font-size:20px" onclick="setL(\'fr\')">🇫🇷 الفرنسية</button><button class="btn" style="font-size:20px" onclick="setL(\'tr\')">🇹🇷 التركية</button></div><p class="small">تقدري تبدلي اللغة في أي وقت، وكل لغة عندها تقدمها الخاص.</p></div>')}
function setL(l){try{localStorage.setItem("lang",l)}catch(e){}location.reload()}
function chLang(){try{localStorage.removeItem("lang")}catch(e){}location.reload()}
function LGET(){try{return localStorage.getItem("lang")}catch(e){return"en"}}

if(LANG=="de")CUR=buildDE();if(LANG=="fr")CUR=buildFR();if(LANG=="tr")CUR=buildTR();
var SEQ=[];CUR.forEach(function(l){l.u.forEach(function(u){SEQ.push({k:"u",id:u.id,u:u,l:l,t:u.t})});if(l.u.length)SEQ.push({k:"t",id:"T"+l.id,l:l,t:"🏁 اختبار المستوى"})});
var S={d:{},best:{},days:{},wrong:{},rep:[],t:0},cloud=false,ref=null,tm=null,rs=false;
try{var _r=JSON.parse(localStorage.getItem("le2"+SFX)||"null");if(_r)S=Object.assign(S,_r)}catch(e){}
var fbUser=null,fbDocKey="",fbUnsub=null,fbBusy=false,fbLoading=false,fbReady=false,fbMessage="";
function fbPayload(){var x=JSON.parse(JSON.stringify(S));delete x.pin;return x}
function save(){S.t=Date.now();try{localStorage.setItem("le2"+SFX,JSON.stringify(S))}catch(e){}if(ref&&fbUser&&!fbBusy&&!fbLoading){clearTimeout(tm);tm=setTimeout(function(){var payload=fbPayload();ref.set({state:payload,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true}).then(function(){cloud=true;fbMessage="✅ تم حفظ التغييرات ومزامنتها"}).catch(function(e){cloud=false;fbMessage="❌ تعذرت المزامنة: "+(e.message||e);if(tab=="sets")sets()})},700)}}
async function sync(){try{if(!fbUser||!window.firebase||!firebase.firestore)return;var key=fbUser.uid+"/progress"+SFX;if(fbLoading)return;if(ref&&fbDocKey==key){save();return}fbLoading=true;if(fbUnsub){fbUnsub();fbUnsub=null}fbDocKey=key;ref=firebase.firestore().collection("users").doc(fbUser.uid).collection("appData").doc("progress"+SFX);var localPin=S.pin,sn=await ref.get();if(sn.exists&&sn.data().state){fbBusy=true;try{mg(sn.data().state);if(localPin!==undefined)S.pin=localPin}catch(e){}fbBusy=false}try{localStorage.setItem("le2"+SFX,JSON.stringify(S))}catch(e){}await ref.set({state:fbPayload(),updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});cloud=true;fbReady=true;fbLoading=false;fbMessage="☁️ حسابك متصل، والمزامنة مفعّلة";fbUnsub=ref.onSnapshot(function(snap){if(!snap.exists||!snap.data().state||fbBusy)return;var incoming=snap.data().state;if(JSON.stringify(incoming)==JSON.stringify(fbPayload()))return;var pin=S.pin;fbBusy=true;try{mg(incoming);if(pin!==undefined)S.pin=pin;S.t=Math.max(S.t||0,Date.now());localStorage.setItem("le2"+SFX,JSON.stringify(S));applyCfg();fbMessage="☁️ وصل تحديث من جهاز آخر"}catch(e){}fbBusy=false;if(tab=="home")home();else if(tab=="prog")prog();else if(tab=="sets")sets()},function(e){cloud=false;fbMessage="❌ انقطع الاتصال بالمزامنة: "+(e.message||e);if(tab=="sets")sets()});applyCfg();if(tab=="home")home();else if(tab=="prog")prog();else if(tab=="sets")sets()}catch(e){fbBusy=false;fbLoading=false;cloud=false;fbMessage="❌ فشلت المزامنة: "+(e.message||e);if(tab=="sets")sets()}}
function today(){return new Date().toISOString().slice(0,10)}
function DV(){var u=navigator.userAgent;return /iPad|Tablet/i.test(u)?"📲":/Mobi|Android|iPhone/i.test(u)?"📱":"💻"}
var DVN={"📱":"الهاتف","📲":"اللوح","💻":"الحاسوب"};
function act(){S.days[today()]=1;S.dev=S.dev||{};S.dev[DV()]=Date.now();S.last={t:Date.now(),d:DV(),u:(V&&V.u&&V.u.t)||""};save()}
function streak(){var n=0,d=new Date();while(S.days[d.toISOString().slice(0,10)]){n++;d.setDate(d.getDate()-1)}return n}
var VO=[];function lv(){try{VO=speechSynthesis.getVoices().filter(function(v){return new RegExp("^"+LANG,"i").test(v.lang)})}catch(e){}}
lv();try{speechSynthesis.onvoiceschanged=lv}catch(e){}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
function nz(s){return String(s).toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’‘]/g,"'").replace(/[.!?,;:]/g,"").replace(/\s+/g," ").trim()}
function dif(a,b){a=a.toLowerCase();var h="";for(var i=0;i<b.length;i++){var k=a[i]==b[i].toLowerCase();h+='<span class="ch '+(k?"ok":"no")+'">'+esc(b[i]==" "?"·":b[i])+'</span>'}return h}
var tab="home",V=null,Q=null,app=document.getElementById("app");
function $(h){app.innerHTML=h}
function nav(){document.getElementById("nav").style.display="flex";document.getElementById("nav").innerHTML=[["home","🏠","الرئيسية"],["prog","📈","تقدمي"],["words","📚","كلماتي"],["me","🙋","أنا"],["sets","⚙️","الإعدادات"]].map(function(t){return'<button class="'+(tab==t[0]?"on":"")+'" onclick="'+t[0]+'()"><span>'+t[1]+'</span>'+t[2]+'</button>'}).join("")}
function nextI(){for(var i=0;i<SEQ.length;i++)if(isOpen(i)&&!S.d[SEQ[i].id])return i;return null}
function isOpen(i){return i==0||!!(S.cfg&&S.cfg.open)||!!S.d[SEQ[i-1].id]}
function home(){tab="home";nav();var h='<h1>نتعلم '+(LANG=="de"?"الألمانية":LANG=="fr"?"الفرنسية":LANG=="tr"?"التركية":"الإنجليزية")+'</h1><p class="sub">🔥 '+streak()+' أيام متتالية · '+(cloud?"☁️ مزامنة مفعلة":"💾 محفوظ في هذا الجهاز فقط")+'</p>'+lastLine()+'<div class="row"><button class="btn l" onclick="chLang()">🌍 تغيير اللغة (إنجليزية / ألمانية / فرنسية / تركية)</button></div><div class="card"><b>🔊 اختبار الصوت</b><p class="small" id="vt">دوسي على الزر باش نختبرو الصوت باللغة المختارة.</p><button class="btn" onclick="vtest()">اختبار</button></div>';
if(LANG=="de")h+=germanAlphabet();var ni=nextI();if(ni!=null)h+='<button class="btn" style="width:100%;margin:8px 0" onclick="openI('+ni+')">▶️ كملي من حيث وقفتي: '+SEQ[ni].t+'</button>';CUR.forEach(function(l){h+='<h2>'+l.n+'</h2>'+(l.u.length?'<button class="btn l" style="margin-bottom:6px" onclick="ptest(\''+l.id+'\')">🎯 كنعرف هذا المستوى: اختبار للقفز</button>':'');if(!l.u.length){h+='<div class="card small">🛠️ المحتوى قريبا. نبنيوه في المرحلة الجاية.</div>';return}
SEQ.forEach(function(s,i){if(s.l!==l)return;var op=isOpen(i);h+='<button class="it'+(op?"":" lk")+'" '+(op?'onclick="openI('+i+')"':"")+'><span>'+(S.d[s.id]?"✅":op?"▶️":"🔒")+'</span><b>'+s.t+'</b><small>'+((S.rd&&S.rd[s.id]?S.rd[s.id].d+" ":"")+(S.best[s.id]!=null?S.best[s.id]+"%":""))+'</small></button>'})});$(h)}
function germanAlphabet(){
var a=[
["A","aː","Ah wie Apfel","Apfel"],["B","beː","Beh wie Ball","Ball"],["C","tseː","Tseh wie Computer","Computer"],["D","deː","Deh wie Dose","Dose"],["E","eː","Eh wie Ente","Ente"],["F","ɛf","Eff wie Fisch","Fisch"],["G","ɡeː","Geh wie Garten","Garten"],["H","haː","Hah wie Haus","Haus"],["I","iː","Ih wie Igel","Igel"],["J","jɔt","Yot wie Jacke","Jacke"],["K","kaː","Kah wie Katze","Katze"],["L","ɛl","Ell wie Lampe","Lampe"],["M","ɛm","Emm wie Mama","Mama"],["N","ɛn","Enn wie Nase","Nase"],["O","oː","Oh wie Oma","Oma"],["P","peː","Peh wie Papa","Papa"],["Q","kuː","Kuh wie Quelle","Quelle"],["R","ɛʁ","Err wie Rose","Rose"],["S","ɛs","Ess wie Sonne","Sonne"],["T","teː","Teh wie Tiger","Tiger"],["U","uː","Uh wie Uhr","Uhr"],["V","faʊ","Fau wie Vogel","Vogel"],["W","veː","Weh wie Wasser","Wasser"],["X","ɪks","Iks wie Taxi","Taxi"],["Y","ˈʏpsilɔn","Ypsilon wie Yoga","Yoga"],["Z","tsɛt","Tsett wie Zeit","Zeit"],["Ä","ɛː","Äh wie Äpfel","Äpfel"],["Ö","øː","Öh wie Öl","Öl"],["Ü","yː","Üh wie Übung","Übung"],["ß","ɛsˈtsɛt","Eszett wie Straße","Straße"]
];
return '<div class="card"><h2 style="margin-top:0">🔤 الحروف الألمانية مع الصوت</h2><p class="small">اضغطي على 🔊 باش تسمعي اسم الحرف بالألمانية مع مثال عليه. مثال: A wie Apfel.</p><div class="alphabet">'+a.map(function(x){return '<button onclick="say('+JSON.stringify(x[2])+')"><b>'+x[0]+'</b><small>'+x[1]+'</small><small>'+x[3]+'</small><small>🔊 اسمعي</small></button>'}).join('')+'</div></div>'
}
function vtest(){lv();var e=document.getElementById("vt");say(LANG=="de"?"Hallo, ich bin bereit.":LANG=="fr"?"Bonjour, je suis prête.":LANG=="tr"?"Merhaba, hazırım.":"Hello, I am ready.");e.textContent=VO.length?"✅ لقيت "+VO.length+" صوت. لازم تسمعي: Hello, I am ready.":"🔊 جربت النطق. إذا ما سمعتيش: في الأندرويد الإعدادات ← تحويل النص إلى كلام ← Google ← ⚙️ ← Install voice data ← English (US)، وعاودي الاختبار."}
function openI(i){var s=SEQ[i];if(s.k=="u"){V={u:s.u,s:s,t:"l",wi:0,spi:0,res:null};unit()}else startQuiz(s)}
function unit(){tab="unit";var u=V.u;if(V.t=="q"){startQuiz(V.s);return}
var tb=[["l","📖 درس"],["h","🎧 استماع"],["o","🧩 رتبي"],["w","✍️ كتابة"],["s","🎤 نطق"],["q","✅ اختبار"]].map(function(x){return'<button class="'+(V.t==x[0]?"on":"")+'" onclick="V.t=\''+x[0]+'\';V.res=null;unit()">'+x[1]+'</button>'}).join("");
if(V.t=="l"&&!V.mk){V.mk=1;S.rd=S.rd||{};S.rd[u.id]={t:Date.now(),d:DV()};act()}var b=V.t=="l"?lesson():V.t=="w"?writeV():V.t=="o"?orderV():V.t=="h"?hearV():speakV();
$('<button class="back" onclick="home()">← رجوع</button><h1>'+u.t+'</h1><div class="tabs">'+tb+'</div>'+b);var e=document.getElementById("wi");if(e){e.focus();e.onkeydown=function(ev){if(ev.key=="Enter")chkW()}}}
function lesson(){var u=V.u,h="";if(u.v){h+='<div class="card"><b dir="ltr">'+u.v.b+'</b><table dir="ltr">'+u.v.r.map(function(r,i){return'<tr><td>'+r[0]+'</td><td><b>'+r[1]+'</b></td><td><button class="mini" onclick="sayV('+i+')">🔊</button></td></tr>'}).join("")+'</table><p class="small">'+u.v.n+'</p></div>'}
return h+u.cards.map(function(c,i){return'<div class="card cr"><div class="emo2">'+c[2]+'</div><div style="flex:1"><div class="en2">'+esc(c[0])+'</div><div class="small">'+esc(c[1])+'</div></div><button class="mini" onclick="sayC('+i+',.8)">🔊</button><button class="mini" onclick="sayC('+i+',.4)">🐢</button></div>'}).join("")}
function sayC(i,r){say(V.u.cards[i][3],r);act()}
function sayV(i){var r=V.u.v.r[i];say(r[0].split(" ")[0]+" "+r[1]);act()}
function writeV(){var u=V.u;if(!V.wl)V.wl=pick(u.w,Math.min(5,u.w.length));var w=V.wl[V.wi];
if(!w)return'<div class="card" style="text-align:center"><h2>خلصتي الكتابة 🎉</h2><button class="btn" onclick="V.wl=null;V.wi=0;unit()">من جديد</button></div>';
var f="";if(V.res!=null){var ok=nz(V.res)==nz(w[1]);f='<div class="msg '+(ok?"ok":"no")+'">'+(ok?"✅ صحيح!":"❌ قريبة. الصحيح: <b dir='ltr'>"+esc(w[1])+"</b>")+'</div>'+(ok?"":'<div class="dif" dir="ltr">'+dif(V.res,w[1])+'</div>')+'<div class="row"><button class="btn" onclick="V.wi++;V.res=null;unit()">التالي</button></div>'}
return'<div class="card"><div class="emo2c" style="font-size:'+(w[0].length>3?"22":"54")+'px">'+w[0]+'</div><div class="row"><button class="btn l" onclick="say(V.wl[V.wi][1])">🔊 اسمعي</button></div>'+(V.res==null?'<input class="w" id="wi" autocomplete="off" autocapitalize="none" spellcheck="false"><div class="row"><button class="btn" onclick="chkW()">تحقق</button></div>':"")+f+'</div>'}
function chkW(){var e=document.getElementById("wi");if(!e||!e.value.trim())return;V.res=e.value.trim();act();unit()}
function speakV(){var u=V.u;if(!V.spl)V.spl=pick(u.sp,Math.min(5,u.sp.length));var p=V.spl[V.spi];
if(p==null)return'<div class="card" style="text-align:center"><h2>خلصتي النطق 🎉</h2><button class="btn" onclick="V.spl=null;V.spi=0;unit()">من جديد</button></div>';
var f="",r=V.res;if(r){f=r.self?'<div class="msg '+(r.ok?"ok":"no")+'">'+(r.ok?"✓ برافو! كملي":"🔁 اسمعي الكلمة وعاودي")+'</div>':r.err?'<div class="msg no">'+r.err+'</div>':'<div class="msg '+(r.ok?"ok":"no")+'">'+(r.ok?"✓ ممتاز! نطقك صحيح":"✗ عاودي: الكلمة الحمراء ما تسمعتش مليح")+'</div><p class="small">سمعتك تقولي: <b dir="ltr">'+esc(r.h)+'</b></p><div class="dif" dir="ltr">'+r.m+'</div>'}
return'<div class="card"><div class="q">'+esc(p)+'</div><div class="row"><button class="btn l" onclick="say(V.spl[V.spi])">🔊 اسمعي</button><button class="btn l" onclick="say(V.spl[V.spi],.4)">🐢</button><button class="btn" onclick="rec()">🎤 هضري</button></div><p class="small" style="text-align:center">دوسي 🎤 وقولي الكلمة بصوت واضح.</p>'+f+(V.self?'<div class="card"><p class="small">الوضع اليدوي: هضري بصوت عالي، وقيمي روحك.</p><div class="row"><button class="btn l" onclick="selfRate(true)">✓ نطقتها مليح</button><button class="btn l" onclick="selfRate(false)">✗ نعاود</button><button class="btn l" onclick="window.open(location.href,\'_blank\')">🔗 افتح في نافذة جديدة</button></div></div>':"")+'<div class="row"><button class="btn l" onclick="V.spi++;V.res=null;unit()">التالي</button></div></div>'}
function recFin(h,err){if(!V||V.t!="s")return;var p=V.spl[V.spi];if(err){V.res={err:err=="no-speech"?"ما سمعتش شيء، عاودي وهضري بصوت أعلى.":"ما خدمش ("+err+"). عاودي."}}else{var T=nz(p).split(" "),H=nz(h).split(" "),m="",c=0;T.forEach(function(w){var k=H.indexOf(w)>=0;if(k)c++;m+='<span class="ch '+(k?"ok":"no")+'">'+(k?'✓ ':'✗ ')+esc(w)+'</span>'});V.res={h:h,m:m,ok:c==T.length}}act();unit()}
function micHelp(why){if(!V||V.t!="s")return;V.self=1;V.res={err:why||"🎤 المتصفح ما سمحش بالميكروفون في هذه النافذة. الحل: دوسي «افتح في نافذة جديدة» وسمحي للميكروفون لما يسقسيك. وإذا ما نجحش، استعملي الوضع اليدوي لي تحت."};unit()}
function askMic(cb){try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){cb(true);return}navigator.mediaDevices.getUserMedia({audio:true}).then(function(st){st.getTracks().forEach(function(t){t.stop()});setTimeout(function(){cb(true)},350)}).catch(function(){cb(false)})}catch(e){cb(false)}}
function selfRate(ok){V.res={self:1,ok:ok};act();unit()}
function rec(){var R=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!R){recFallback();return}
V.res={err:"🎤 كنطلب إذن الميكروفون..."};unit();
askMic(function(ok){if(!ok){micHelp();return}
try{var r=new R();r.lang="en-US";r.onresult=function(e){recFin(e.results[0][0].transcript)};r.onerror=function(e){if(e.error=="not-allowed"||e.error=="service-not-allowed")recFallback();else if(e.error=="network"||e.error=="audio-capture"||e.error=="language-not-supported")recFallback();else recFin(null,e.error)};r.start();V.res={err:"🎤 كنسمعك... هضري دوك"};unit()}catch(x){recFin(null,"error")}})}
function startQuiz(s){var qs;if(s.k=="t"){qs=pick(s.l.u.reduce(function(a,u){return a.concat(pick(u.qs(),4))},[]),10)}else qs=s.u.qs();Q={s:s,q:qs,i:0,sc:0,a:null,done:false,rp:false};qz()}
function qz(){tab="quiz";var s=Q.s;
if(Q.done){var p=Math.round(Q.sc/Q.q.length*100),ok=p>=80;S.best[s.id]=Math.max(S.best[s.id]||0,p);if(ok){S.d[s.id]=1;if(s.pt){s.l.u.forEach(function(u){S.d[u.id]=1});S.d["T"+s.l.id]=1}}act();
$('<div class="card" style="text-align:center"><h1>'+p+'%</h1><p>'+(ok?(s.k=="t"?"🎉 خلصتي المستوى! المستوى الجاي يتفتح.":"✅ نجحتي! الوحدة الجاية تفتحت."):"ما تحوسيش 🌱 تحتاجي 80%. راجعي الدرس وعاودي.")+'</p><div class="row">'+(ok&&(s.k=="t")?'<button class="btn" onclick="reflect(\''+s.l.id+'\')">🗣️ هدري على هذا المستوى</button>':"")+'<button class="btn" onclick="home()">الرئيسية</button><button class="btn l" onclick="startQuiz(Q.s)">عاودي</button></div></div>');return}
var q=Q.q[Q.i],a=Q.a,fb="";
var b=q.o.map(function(o,i){var c="";if(a!==null){if(o==q.a)c="ok";else if(i==a)c="no"}return'<button class="'+c+'" '+(a!==null?"disabled":"")+' onclick="ans('+i+')">'+esc(o)+'</button>'}).join("");
if(a!==null){fb=(q.o[a]==q.a?'<div class="msg ok">✅ صحيح!</div>':'<div class="msg no">❌ الجواب الصحيح: <b dir="ltr">'+esc(q.a)+'</b></div>')+'<div class="row"><button class="btn" onclick="nxt()">'+(Q.i==Q.q.length-1?"النتيجة":"التالي")+'</button><button class="btn l" onclick="rep()">'+(Q.rp?"🚩 تسجل":"🚩 بلغ عن خطأ")+'</button></div>'}
$('<button class="back" onclick="home()">← رجوع</button><p class="sub">سؤال '+(Q.i+1)+' من '+Q.q.length+'</p><div class="card"><div class="q">'+q.q+'</div><div class="row"><button class="btn l" onclick="say(Q.q[Q.i].s||Q.q[Q.i].a)">🔊</button></div><div class="opts">'+b+'</div>'+fb+'</div>')}
function ans(i){if(Q.a!==null)return;Q.a=i;var q=Q.q[Q.i];if(q.o[i]==q.a)Q.sc++;else{S.wrong[Q.s.id]=(S.wrong[Q.s.id]||0)+1;say(q.s||q.a)}act();qz()}
function nxt(){if(Q.i==Q.q.length-1)Q.done=true;else{Q.i++;Q.a=null;Q.rp=false}qz()}
function rep(){if(Q.rp)return;Q.rp=true;S.rep.push(Q.s.id+": "+Q.q[Q.i].q.replace(/<[^>]*>/g," ").trim());save();qz()}
function prog(){tab="prog";nav();var dn=Object.keys(S.d).filter(function(k){return k!="mywords"&&k.indexOf("PT")!=0}).length,tot=SEQ.length,wk=Object.keys(S.wrong).filter(function(k){return S.wrong[k]>0});
$('<h1>تقدمي 📈</h1><div class="card"><div class="st"><div><b>'+streak()+'</b>أيام متتالية 🔥</div><div><b>'+dn+'/'+tot+'</b>وحدات واختبارات منجزة</div></div><p>'+(S.days[today()]?"✅ درتي تمرين اليوم!":"🎯 هدف اليوم: وحدة وحدة، حتى 5 دقائق.")+'</p><p class="small">'+(cloud?"☁️ تقدمك محفوظ في حسابك ويظهر في الهاتف والحاسوب.":"💾 المزامنة غير مفعلة الآن: تقدمك في هذا الجهاز فقط.")+'</p>'+(S.rep.length?'<p><b>🚩 أخطاء بلغتي عليها ('+S.rep.length+'):</b></p><div class="small" dir="ltr">'+S.rep.map(esc).join("<br>")+'</div><p class="small">انسخيها وابعثيها لي في المحادثة باش نصلحوها.</p>':"")+'<div class="row"><button class="btn l" onclick="rst()">'+(rs?"تأكيد المسح؟ دوسي مرة ثانية":"مسح التقدم")+'</button></div></div>')}
function rst(){if(!rs){rs=true;prog();return}S={d:{},best:{},days:{},wrong:{},rep:[],t:0,rd:{},dev:S.dev,cfg:S.cfg,pin:S.pin,words:S.words,media:S.media,refl:S.refl,me:S.me,bg:S.bg,rv:Date.now()};rs=false;save();prog()}
function lock(){tab="lock";document.getElementById("nav").style.display="none";$('<div class="card" style="text-align:center;margin-top:60px"><h1>🔒</h1><p>اكتبي الرقم السري</p><input class="w" id="pin" type="password" inputmode="numeric" maxlength="8"><div class="row"><button class="btn" onclick="chkP()">فتح</button></div><p class="small" id="pm"></p></div>');var e=document.getElementById("pin");e.onkeydown=function(ev){if(ev.key=="Enter")chkP()}}
async function chkP(){var v=document.getElementById("pin").value,m=document.getElementById("pm");m.textContent="⏳";await sync();if(v==(S.pin||"2025")){try{sessionStorage.setItem("ok","1")}catch(e){}start()}else m.textContent="رقم غير صحيح"}
function start(){if(!LGET()){chooseLang();return}home();sync();setInterval(function(){if(!document.hidden&&tab!="lock"){S.dev=S.dev||{};S.dev[DV()]=Date.now();sync()}},20000)}

function CF(){S.cfg=S.cfg||{};return S.cfg}
var AC=[["#6c5ce7","بنفسجي"],["#2f7de1","أزرق"],["#0e9aa7","تركواز"],["#2b9348","أخضر"],["#d6336c","وردي"],["#e8590c","برتقالي"]],MD=[["auto","تلقائي"],["light","فاتح"],["dark","داكن"]];
function applyCfg(){var c=CF(),r=document.documentElement;if(c.ac){r.style.setProperty("--ac",c.ac);r.style.setProperty("--acb","color-mix(in srgb,"+c.ac+" 16%,transparent)")}else{r.style.removeProperty("--ac");r.style.removeProperty("--acb")}if(c.th&&c.th!="auto")r.setAttribute("data-theme",c.th);else r.removeAttribute("data-theme");if(c.bg)r.style.setProperty("--bg",c.bg);else r.style.removeProperty("--bg")}
function setC(k,v){CF()[k]=v;save();applyCfg();sets()}
function ago(ms){var m=Math.round(ms/60000);return m<60?"قبل "+m+" دقيقة":m<1440?"قبل "+Math.round(m/60)+" ساعة":"قبل "+Math.round(m/1440)+" يوم"}
function lastLine(){var l=S.last;if(!l||l.d==DV()||!l.u)return"";return'<p class="sub">'+l.d+' آخر نشاط في '+DVN[l.d]+': «'+esc(l.u)+'» '+ago(Date.now()-l.t)+'</p>'}
function mg(r){var a=S,rv=r.rv||0,sv=a.rv||0;if(rv>sv){S=r;return}if(sv>rv)return;["d","days","dev","best","wrong","rd"].forEach(function(k){var x=a[k]||{},y=r[k]||{},o=Object.assign({},y);Object.keys(x).forEach(function(i){var u=x[i],v=y[i];o[i]=v==null?u:typeof u=="number"?Math.max(u,v):(u&&u.t&&v&&v.t>u.t?v:u)});S[k]=o});S.rep=Array.from(new Set((a.rep||[]).concat(r.rep||[])));S.words=mergeW(a.words,r.words);S.media=mergeW(a.media,r.media);S.refl=mergeR(a.refl,r.refl);if(((r.me||{}).t||0)>((a.me||{}).t||0))S.me=r.me;if((r.t||0)>(a.t||0)){["cfg","pin","last","bg"].forEach(function(k){if(r[k]!==undefined)S[k]=r[k]})}}
function fbAccountCard(){if(fbUser){return '<div class="card"><b>☁️ حساب المزامنة</b><p class="small">'+esc(fbUser.email||"حساب متصل")+'</p><p class="small">'+esc(fbMessage||"حسابك متصل")+'</p><div class="row"><button class="btn l" onclick="sync().then(sets)">🔄 مزامنة الآن</button><button class="btn l" onclick="fbSignOut()">تسجيل الخروج</button></div></div>'}return '<div class="card"><b>☁️ حفظ ومزامنة عبر Firebase</b><p class="small">أنشئي حساباً بالبريد الإلكتروني وكلمة مرور، أو ادخلي إلى حسابك لمزامنة التقدم والكلمات والإعدادات بين أجهزتك. التسجيلات الصوتية والفيديو تبقى في هذا الجهاز.</p><input id="fbEmail" type="email" autocomplete="email" placeholder="البريد الإلكتروني" style="width:100%;padding:11px;margin:5px 0;border:1px solid var(--bd);border-radius:10px;background:var(--card);color:var(--tx);direction:ltr"><input id="fbPass" type="password" autocomplete="current-password" placeholder="كلمة المرور (6 أحرف على الأقل)" style="width:100%;padding:11px;margin:5px 0;border:1px solid var(--bd);border-radius:10px;background:var(--card);color:var(--tx);direction:ltr"><div class="row"><button class="btn" onclick="fbSignIn(false)">دخول</button><button class="btn l" onclick="fbSignIn(true)">إنشاء حساب</button></div><div class="row"><button class="btn l" onclick="fbResetPass()">نسيت كلمة المرور؟</button></div><p class="small" id="fbMsg">'+esc(fbMessage||"الحفظ المحلي مستمر حتى تسجلي الدخول.")+'</p></div>'}
function fbErr(e){var c=e&&e.code||"";return ({"auth/invalid-email":"البريد الإلكتروني غير صحيح","auth/user-not-found":"ما لقيناش حساب بهذا البريد","auth/wrong-password":"كلمة المرور غير صحيحة","auth/invalid-credential":"البريد أو كلمة المرور غير صحيحين","auth/email-already-in-use":"هذا البريد مسجل من قبل، جربي الدخول","auth/weak-password":"كلمة المرور قصيرة؛ استعملي 6 أحرف على الأقل","auth/network-request-failed":"تحققي من اتصال الإنترنت","auth/too-many-requests":"محاولات كثيرة؛ عاودي بعد قليل","auth/operation-not-allowed":"فعّلي Email/Password من Firebase Authentication"})[c]||((e&&e.message)||"حدث خطأ غير معروف")}
function fbSignIn(create){var em=document.getElementById("fbEmail"),pw=document.getElementById("fbPass"),msg=document.getElementById("fbMsg");if(!em||!pw)return;var email=em.value.trim(),pass=pw.value;if(!email||!pass){msg.textContent="اكتبي البريد الإلكتروني وكلمة المرور.";return}msg.textContent="⏳ جارٍ الاتصال...";var task=create?firebase.auth().createUserWithEmailAndPassword(email,pass):firebase.auth().signInWithEmailAndPassword(email,pass);task.then(function(){fbMessage="تم تسجيل الدخول؛ جارٍ تحميل بياناتك..."}).catch(function(e){fbMessage="❌ "+fbErr(e);if(document.getElementById("fbMsg"))document.getElementById("fbMsg").textContent=fbMessage})}
function fbSignOut(){if(!confirm("تحبي تسجلي الخروج؟ بياناتك المحفوظة محلياً تبقى في هذا الجهاز."))return;firebase.auth().signOut().then(function(){fbMessage="تم تسجيل الخروج؛ بيانات هذا الجهاز لم تُحذف."}).catch(function(e){fbMessage="❌ "+fbErr(e);sets()})}
function fbResetPass(){var em=document.getElementById("fbEmail"),msg=document.getElementById("fbMsg");if(!em||!em.value.trim()){msg.textContent="اكتبي بريدك الإلكتروني أولاً.";return}firebase.auth().sendPasswordResetEmail(em.value.trim()).then(function(){msg.textContent="📩 بعثنالك رابط تغيير كلمة المرور."}).catch(function(e){msg.textContent="❌ "+fbErr(e)})}
function sets(){tab="sets";nav();var c=CF(),d=S.dev||{},n=Date.now();
$('<h1>⚙️ الإعدادات</h1><div class="card"><b>🎨 لون المنصة</b><div class="row">'+AC.map(function(a){return'<button class="btn" style="background:'+a[0]+'" onclick="setC(\'ac\',\''+a[0]+'\')">'+((c.ac||"#6c5ce7")==a[0]?"✓ ":"")+a[1]+'</button>'}).join("")+'</div><div class="row"><label class="small">🎨 أي لون: <input type="color" value="'+(c.ac||"#6c5ce7")+'" onchange="setC(\'ac\',this.value)" style="width:60px;height:38px;border:0;background:none"></label><label class="small">🖼️ لون الخلفية: <input type="color" value="'+(c.bg||"#faf7f2")+'" onchange="setC(\'bg\',this.value)" style="width:60px;height:38px;border:0;background:none"></label><button class="btn l" onclick="setC(\'bg\',\'\');setC(\'ac\',\'\')">↺ الألوان الأصلية</button></div><div class="row"><button class="btn l" onclick="setC(\'open\',!CF().open)">'+(c.open?"✓ ":"")+'🔓 فتح كل المستويات والدروس</button></div><b>🌓 المظهر</b><div class="row">'+MD.map(function(m){return'<button class="btn l" onclick="setC(\'th\',\''+m[0]+'\')">'+((c.th||"auto")==m[0]?"✓ ":"")+m[1]+'</button>'}).join("")+'</div></div>'+fbAccountCard()+'<div class="card"><b>📡 أجهزتك</b>'+Object.keys(d).map(function(k){return'<p class="small">'+k+' '+DVN[k]+(k==DV()?" (هذا الجهاز)":"")+' — '+(n-d[k]<120000?"🟢 مفتوح الآن":ago(n-d[k]))+'</p>'}).join("")+'<p class="small">'+(cloud?"☁️ المزامنة شغالة: تقدمك وما قريتيه يظهر في كل جهاز.":"💾 الحفظ المحلي شغال؛ سجلي الدخول بحساب Firebase لتفعيل المزامنة.")+'</p><div class="row"><button class="btn l" onclick="sync().then(sets)">🔄 مزامنة الآن</button></div></div><div class="card"><b>🔑 تغيير الرقم السري</b><p class="small">يتحفظ محلياً في هذا الجهاز فقط، ولا يُرفع إلى السحابة.</p><input class="w" id="op" type="password" inputmode="numeric" placeholder="الحالي" style="font-size:18px;margin:4px 0"><input class="w" id="np" type="password" inputmode="numeric" placeholder="الجديد (4 إلى 8 أرقام)" style="font-size:18px;margin:4px 0"><div class="row"><button class="btn" onclick="chgP()">حفظ</button></div><p class="small" id="pm2"></p></div>')}
function chgP(){var o=document.getElementById("op").value,n=document.getElementById("np").value,m=document.getElementById("pm2");if(o!=(S.pin||"2025")){m.textContent="❌ الرقم الحالي غير صحيح";return}if(!/^\d{4,8}$/.test(n)){m.textContent="❌ الجديد لازم 4 إلى 8 أرقام";return}S.pin=n;save();m.textContent="✅ تبدل"}
function trOf(t){var c=V.u.cards.filter(function(x){return x[0]==t||x[3]==t})[0];return c?c[1]:""}
function orderV(){var u=V.u,L2=u.sp.filter(function(x){return x.split(" ").length>1});if(!L2.length)return'<div class="card small">كلمات هذه الوحدة مفردة. جربي الاستماع.</div>';if(!V.ol){V.ol=pick(L2,Math.min(5,L2.length));V.oi=0;V.ob=null}var t=V.ol[V.oi];if(t==null)return'<div class="card" style="text-align:center"><h2>برافو 🎉</h2><button class="btn" onclick="V.ol=null;unit()">من جديد</button></div>';if(!V.ob)V.ob={w:pick(t.split(" "),99),p:[],r:null};var b=V.ob;
return'<div class="card"><p class="small" style="text-align:center">رتبي الجملة: '+esc(trOf(t))+'</p><div class="row" dir="ltr" style="min-height:48px">'+b.p.map(function(i){return'<button class="btn" onclick="obu('+i+')">'+esc(b.w[i])+'</button>'}).join("")+'</div><div class="row" dir="ltr">'+b.w.map(function(w,i){return b.p.indexOf(i)<0?'<button class="btn l" onclick="ob('+i+')">'+esc(w)+'</button>':""}).join("")+'</div>'+(b.r==null?'<div class="row"><button class="btn" onclick="obc()">تحقق</button></div>':'<div class="msg '+(b.r?"ok":"no")+'">'+(b.r?"✅ صحيح!":"❌ الصحيح: <b dir=ltr>"+esc(t)+"</b>")+'</div><div class="row"><button class="btn" onclick="V.oi++;V.ob=null;unit()">التالي</button></div>')+'</div>'}
function ob(i){V.ob.p.push(i);unit()}function obu(i){if(V.ob.r!=null)return;V.ob.p.splice(V.ob.p.indexOf(i),1);unit()}
function obc(){var b=V.ob;b.r=nz(b.p.map(function(i){return b.w[i]}).join(" "))==nz(V.ol[V.oi]);if(!b.r)say(V.ol[V.oi]);act();unit()}
function hearV(){var u=V.u;if(!V.hl){V.hl=pick(u.sp,Math.min(5,u.sp.length));V.hi=0;V.hr=null;V.ho=null}var t=V.hl[V.hi];if(t==null)return'<div class="card" style="text-align:center"><h2>برافو 🎉</h2><button class="btn" onclick="V.hl=null;unit()">من جديد</button></div>';if(!V.ho)V.ho=opts(t,u.sp);var r=V.hr;
return'<div class="card"><p class="small" style="text-align:center">اسمعي واختاري اللي سمعتيه</p><div class="row"><button class="btn" onclick="say(V.hl[V.hi])">🔊 اسمعي</button><button class="btn l" onclick="say(V.hl[V.hi],.4)">🐢</button></div><div class="opts" style="grid-template-columns:1fr">'+V.ho.map(function(o,i){var c=r==null?"":o==t?"ok":i==r?"no":"";return'<button class="'+c+'" style="font-size:15px" '+(r!=null?"disabled":"")+' onclick="hr('+i+')">'+esc(o)+'</button>'}).join("")+'</div>'+(r!=null?'<div class="row"><button class="btn" onclick="V.hi++;V.hr=null;V.ho=null;unit()">التالي</button></div>':"")+'</div>'}
function hr(i){V.hr=i;if(V.ho[i]!=V.hl[V.hi])say(V.hl[V.hi]);act();unit()}
/* ===== إضافات ===== */
var MR=null,RC=null;
function recFallback(){var R=document.getElementById("app");if(!navigator.mediaDevices||!window.MediaRecorder){micHelp("هذا المتصفح ما يدعمش الميكروفون. افتحي الصفحة في Chrome.");return}
navigator.mediaDevices.getUserMedia({audio:true}).then(function(st){var ch=[];MR=new MediaRecorder(st);MR.ondataavailable=function(e){if(e.data.size)ch.push(e.data)};
MR.onstop=function(){st.getTracks().forEach(function(t){t.stop()});var u=URL.createObjectURL(new Blob(ch,{type:MR.mimeType||"audio/webm"}));V.self=1;V.res={err:'✅ سجلت صوتك. اسمعيه وقارنيه بالنطق الأصلي (🔊):<br><audio controls src="'+u+'" style="width:100%"></audio>'};unit()};
MR.start();V.self=1;V.res={err:'🔴 كنسجل صوتك... هضري دوك<br><button class="btn" onclick="MR.stop()">⏹️ وقف</button>'};unit();setTimeout(function(){if(MR&&MR.state=="recording")MR.stop()},8000)}).catch(function(){micHelp()})}
function idb(cb){try{var r=indexedDB.open("le-media",1);r.onupgradeneeded=function(){r.result.createObjectStore("m",{keyPath:"id"})};r.onsuccess=function(){cb(r.result)};r.onerror=function(){cb(null)}}catch(e){cb(null)}}
function mPut(o,cb){idb(function(d){if(!d)return cb&&cb();var t=d.transaction("m","readwrite");t.objectStore("m").put(o);t.oncomplete=function(){cb&&cb()}})}
function mAll(cb){idb(function(d){if(!d)return cb([]);var q=d.transaction("m").objectStore("m").getAll();q.onsuccess=function(){cb(q.result)};q.onerror=function(){cb([])}})}
function mDel(id){idb(function(d){if(!d)return;var t=d.transaction("m","readwrite");t.objectStore("m").delete(id);t.oncomplete=me})}
function mergeW(a,b){var o={};(a||[]).concat(b||[]).forEach(function(x){if(!o[x.id]||x.t>o[x.id].t)o[x.id]=x});return Object.keys(o).map(function(k){return o[k]})}
function wlist(){return(S.words||[]).filter(function(x){return!x.x})}
function words(){tab="words";nav();$('<h1>📚 كلماتي (قاعدة البيانات)</h1><div class="card"><input class="w" id="we" placeholder="English" style="font-size:18px;margin:4px 0"><input class="w" id="wa" placeholder="بالعربية" dir="rtl" style="font-size:18px;margin:4px 0"><div class="row"><button class="btn" onclick="wadd()">➕ زيدي</button><button class="btn l" onclick="wquiz()">🎯 اختبريني</button></div></div><input class="w" id="wsr" placeholder="🔍 بحث" value="'+esc(window.WQ||"")+'" oninput="WQ=this.value;wl()" style="font-size:16px"><div id="wl"></div>');wl()}
function wl(){var q=(window.WQ||"").toLowerCase(),a=wlist().filter(function(x){return(x.en+" "+x.ar).toLowerCase().indexOf(q)>=0}).sort(function(x,y){return y.t-x.t});
document.getElementById("wl").innerHTML=a.length?a.map(function(x){return'<div class="card cr"><div style="flex:1"><div class="en2">'+esc(x.en)+'</div><div class="small">'+esc(x.ar)+'</div></div><button class="mini" onclick="wsay('+x.id+')">🔊</button><button class="mini" onclick="wdel('+x.id+')">🗑️</button></div>'}).join(""):'<p class="small" style="text-align:center">'+(q?"ما لقيتش شيء.":"القاعدة فارغة: زيدي كلماتك الأولى فوق.")+'</p>'}
function wadd(){var e=document.getElementById("we"),a=document.getElementById("wa");if(!e.value.trim()||!a.value.trim())return;S.words=S.words||[];S.words.push({id:Date.now()+Math.floor(Math.random()*1000),en:e.value.trim(),ar:a.value.trim(),t:Date.now()});e.value="";a.value="";act();wl()}
function wsay(id){var x=wlist().filter(function(y){return y.id==id})[0];if(x)say(x.en)}
function wdel(id){(S.words||[]).forEach(function(x){if(x.id==id){x.x=1;x.t=Date.now()}});save();wl()}
function wquiz(){var w=wlist();if(w.length<4){alert("زيدي 4 كلمات على الأقل");return}startQuiz({k:"u",id:"mywords",u:{qs:function(){return pick(w,Math.min(8,w.length)).map(function(x){return{q:'<span class="e">📚</span>'+esc(x.ar),a:x.en,o:opts(x.en,w.map(function(y){return y.en})),s:x.en}})}}})}
function meSave(){var g=function(i){return document.getElementById(i).value};S.me={n:g("mn"),a:g("ma"),c:g("mc"),j:g("mj"),tx:g("mtx"),t:Date.now()};save()}

function buildTR(){
var alphabet=[["A","a","araba","🚗"],["B","be","balık","🐟"],["C","ce","cam","🪟"],["Ç","çe","çay","🍵"],["D","de","deniz","🌊"],["E","e","ev","🏠"],["F","fe","fil","🐘"],["G","ge","gül","🌹"],["Ğ","yumuşak ge","dağ","⛰️"],["H","he","hava","🌤️"],["I","ı","ışık","💡"],["İ","i","inek","🐄"],["J","je","jilet","🪒"],["K","ke","kitap","📘"],["L","le","limon","🍋"],["M","me","masa","🪑"],["N","ne","nar","🍎"],["O","o","okul","🏫"],["Ö","ö","ördek","🦆"],["P","pe","para","💰"],["R","re","renk","🎨"],["S","se","su","💧"],["Ş","şe","şeker","🍬"],["T","te","telefon","📱"],["U","u","uçak","✈️"],["Ü","ü","üzüm","🍇"],["V","ve","vazo","🏺"],["Y","ye","yol","🛣️"],["Z","ze","zeytin","🫒"]];
var alphabetUnit={id:"tr0a",t:"1. الأبجدية التركية 29 حرفاً",cards:alphabet.map(function(x){return[x[0]+" "+x[1]+" — "+x[2],"اسم الحرف: "+x[1]+" · مثال: "+x[2],x[3],x[2]]}),w:alphabet.map(function(x){return[x[3],x[2]]}),sp:alphabet.map(function(x){return x[2]}),qs:function(){return pick(alphabet,8).map(function(x){return{q:'<span class="e">'+x[3]+'</span>بأي حرف تبدأ كلمة "'+x[2]+'"؟',a:x[0],o:opts(x[0],alphabet.map(function(y){return y[0]})),s:x[2]}})}};
return[
{id:"A1",n:"A1 — المبتدئ: الأساسيات",u:[alphabetUnit,
U("tr0b","2. التحيات والتعارف",[["Merhaba","مرحباً","👋"],["Günaydın","صباح الخير","🌅"],["İyi akşamlar","مساء الخير","🌆"],["İyi geceler","تصبح على خير","🌙"],["Nasılsın?","كيف حالك؟","🙂"],["İyiyim, teşekkür ederim.","أنا بخير، شكراً","😊"],["Benim adım ...","اسمي ...","🙋"],["Memnun oldum.","تشرفت بمعرفتك","🤝"],["Lütfen","من فضلك","🙏"],["Teşekkür ederim","شكراً لك","💐"],["Evet / Hayır","نعم / لا","✅"]]),
U("tr0c","3. الضمائر والجمل الأولى",[["Ben","أنا","🙋"],["Sen","أنت","👉"],["O","هو / هي","🧍"],["Biz","نحن","👥"],["Siz","أنتم / حضرتك","👥"],["Onlar","هم","👨‍👩‍👧"],["Ben öğrenciyim.","أنا طالبة","🎓"],["Sen yorgunsun.","أنت متعب","😴"],["O mutlu.","هو / هي سعيد(ة)","😊"],["Biz hazırız.","نحن مستعدون","💪"]]),
U("tr0d","4. الأرقام 1–20",[["bir","1","1️⃣"],["iki","2","2️⃣"],["üç","3","3️⃣"],["dört","4","4️⃣"],["beş","5","5️⃣"],["altı","6","6️⃣"],["yedi","7","7️⃣"],["sekiz","8","8️⃣"],["dokuz","9","9️⃣"],["on","10","🔟"],["on bir","11","🔢"],["on iki","12","🔢"],["on üç","13","🔢"],["on dört","14","🔢"],["on beş","15","🔢"],["on altı","16","🔢"],["on yedi","17","🔢"],["on sekiz","18","🔢"],["on dokuz","19","🔢"],["yirmi","20","🔢"]]),
U("tr0e","5. العائلة والأشخاص",[["anne","أم","👩"],["baba","أب","👨"],["kardeş","أخ أو أخت","🧑"],["abla","أخت كبرى","👩"],["abi","أخ أكبر","👨"],["çocuk","طفل","🧒"],["arkadaş","صديق","🤝"],["aile","عائلة","👨‍👩‍👧"],["eş","زوج / زوجة","💍"],["öğretmen","أستاذ","👩‍🏫"]]),
U("tr0f","6. الطعام والشراب",[["su","ماء","💧"],["ekmek","خبز","🍞"],["çay","شاي","🍵"],["kahve","قهوة","☕"],["süt","حليب","🥛"],["peynir","جبن","🧀"],["elma","تفاحة","🍎"],["yemek","طعام","🍽️"],["tavuk","دجاج","🍗"]]),
T("tr1a","7. الجمل الاسمية ولواحق الشخص","olmak — يكون",[],"في التركية تلتحق لاحقة الشخص بالاسم أو الصفة: öğrenciyim = أنا طالب/ة.",[["Ben öğrenciyim.","أنا طالب/ة","🎓"],["Sen çok iyisin.","أنت بخير جداً","😊"],["O doktor.","هو/هي طبيب","🩺"],["Biz mutluyuz.","نحن سعداء","😄"],["Siz hazır mısınız?","هل أنتم مستعدون؟","❓"]],[["Ben ___ öğrenciyim.","öğrenciyim","öğrenciyim|öğrencisin|öğrenciyiz"],["Biz ___.","mutluyuz","mutluyum|mutlusun|mutluyuz"]]),
U("tr1b","8. أيام الأسبوع والوقت",[["Pazartesi","الاثنين","📅"],["Salı","الثلاثاء","📅"],["Çarşamba","الأربعاء","📅"],["Perşembe","الخميس","📅"],["Cuma","الجمعة","📅"],["Cumartesi","السبت","📅"],["Pazar","الأحد","📅"],["Bugün","اليوم","☀️"],["Yarın","غداً","➡️"],["Saat kaç?","كم الساعة؟","⏰"]])]},
{id:"A2",n:"A2 — بناء الجمل والتواصل",u:[
U("tr2a","1. أفعال يومية",[["gitmek","يذهب","🚶"],["gelmek","يأتي","🚶"],["yemek","يأكل","🍽️"],["içmek","يشرب","🥤"],["çalışmak","يعمل","💼"],["öğrenmek","يتعلم","📚"],["konuşmak","يتكلم","🗣️"],["istemek","يريد","✨"],["sevmek","يحب","❤️"],["anlamak","يفهم","💡"]]),
T("tr2b","2. المضارع المستمر -yor","الفعل + yor + لاحقة الشخص",[],"لاحقة -yor تعبّر عن فعل يحدث الآن: geliyorum = أنا قادم/ة.",[["Türkçe öğreniyorum.","أتعلم التركية","📚"],["Şimdi yemek yapıyorum.","أحضر الطعام الآن","🍲"],["Ne yapıyorsun?","ماذا تفعل؟","❓"],["Annem çalışıyor.","أمي تعمل","💼"],["Biz Türkçe konuşuyoruz.","نتكلم التركية","🗣️"]],[["Ben Türkçe ___.","öğreniyorum","öğreniyorum|öğreniyorsun|öğreniyor"],["Sen ne ___?","yapıyorsun","yapıyorum|yapıyorsun|yapıyor"]]),
T("tr2c","3. النفي والسؤال","değil / -ma -me / mı mi mu mü",[],"değil تنفي الاسم والصفة؛ الأفعال تستعمل -ma/-me. أداة السؤال منفصلة.",[["Ben hasta değilim.","لست مريضاً/ة","🤒"],["Kahve içmiyorum.","لا أشرب القهوة","☕"],["Türkçe biliyor musun?","هل تعرف التركية؟","🗣️"],["Bu senin kitabın mı?","هل هذا كتابك؟","📘"],["Anlamadım.","لم أفهم","❓"]],[["Ben yorgun ___.","değilim","değilim|değilsin|değil"],["Su ___.","içmiyorum","içiyorum|içmiyorsun|içmiyorum"]]),
U("tr2d","4. الأماكن والاتجاهات",[["ev","بيت","🏠"],["okul","مدرسة","🏫"],["iş","عمل","💼"],["hastane","مستشفى","🏥"],["nerede?","أين؟","📍"],["burada","هنا","👇"],["orada","هناك","👉"],["sağ","يمين","➡️"],["sol","يسار","⬅️"],["düz","مستقيم","⬆️"],["yakın","قريب","📍"],["uzak","بعيد","🗺️"]]),
U("tr2e","5. التسوق والمطعم",[["Bu ne kadar?","بكم هذا؟","💰"],["Çok pahalı.","غالي جداً","💸"],["Daha ucuz var mı?","هل يوجد أرخص؟","🛍️"],["Hesap lütfen.","الحساب من فضلك","🧾"],["Bir çay istiyorum.","أريد شاي","🍵"],["Afiyet olsun!","شهية طيبة","🍽️"]])]},
{id:"B1",n:"B1 — الاستقلال في الكلام",u:[
T("tr3a","1. الماضي -di","جذر الفعل + di/dı/du/dü أو ti/tı/tu/tü",[],"لاحقة الماضي تتغير حسب الانسجام الصوتي.",[["Dün sinemaya gittim.","ذهبت إلى السينما أمس","🎬"],["Sabah erken uyandım.","استيقظت باكراً","🌅"],["Dün seni aradım.","اتصلت بك أمس","📞"],["Yemek yedik.","أكلنا الطعام","🍽️"]],[["Dün okula ___.","gittim","gittim|gidiyorum|gideceğim"],["Sabah erken ___.","uyandım","uyandım|uyanıyorum|uyanacağım"]]),
T("tr3b","2. المستقبل -ecek / -acak","الفعل + ecek/acak + لاحقة الشخص",[],"المستقبل يتبع الانسجام الصوتي: geleceğim = سأأتي.",[["Yarın çalışacağım.","سأعمل غداً","📅"],["Hafta sonu dinleneceğiz.","سنرتاح نهاية الأسبوع","🌿"],["Seni arayacağım.","سأتصل بك","📞"]],[["Yarın seni ___.","arayacağım","arayacağım|aradım|arıyorum"]]),
U("tr3c","3. ربط الأفكار والرأي",[["çünkü","لأن","🔗"],["ama","لكن","↔️"],["bu yüzden","لهذا السبب","➡️"],["bence","في رأيي","💭"],["bana göre","حسب رأيي","🗣️"],["örneğin","مثلاً","📝"],["öncelikle","أولاً","1️⃣"],["sonuç olarak","نتيجة لذلك","🏁"],["katılıyorum","أتفق","✅"],["katılmıyorum","لا أتفق","❌"]]),
U("tr3d","4. الصحة والمشاعر",[["başım ağrıyor","رأسي يؤلمني","🤕"],["kendimi iyi hissetmiyorum","لا أشعر أنني بخير","😔"],["eczane","صيدلية","💊"],["randevu","موعد","📅"],["dinlenmeliyim","يجب أن أرتاح","🛌"],["mutluyum","أنا سعيدة","😊"],["endişeliyim","أنا قلقة","😟"]])]},
{id:"B2",n:"B2 — الطلاقة والتعبير المتقدم",u:[
T("tr4a","1. الشرط -se / -sa","إذا / لو",[],"لاحقة -se/-sa تعبّر عن الشرط.",[["Vaktim olursa seni ararım.","إذا كان عندي وقت سأتصل بك","📞"],["Daha çok çalışırsan başarırsın.","إذا عملت أكثر ستنجح","🏆"],["Yağmur yağarsa evde kalacağız.","إذا أمطرت سنبقى في البيت","🌧️"]],[["Vaktim ol___ seni ararım.","ursa","ursa|du|acak"]]),
T("tr4b","2. الضرورة -malı / -meli","يجب أن",[],"لاحقة -malı/-meli تعبّر عن الضرورة أو النصيحة.",[["Daha fazla pratik yapmalıyım.","يجب أن أتدرب أكثر","📚"],["Erken yatmalısın.","يجب أن تنام مبكراً","🌙"],["Doktora gitmeliyiz.","يجب أن نذهب للطبيب","🩺"]],[["Daha çok çalış___.","malıyım","malıyım|ıyorum|dım"]]),
U("tr4c","3. عبارات طبيعية في المحادثة",[["Aslında","في الحقيقة","💬"],["Tabii ki","طبعاً","👍"],["Bence de","أنا أيضاً أرى ذلك","🤝"],["Hiç fark etmez.","لا فرق أبداً","👌"],["Bir dakika, lütfen.","لحظة من فضلك","⏳"],["Ne demek istiyorsun?","ماذا تقصد؟","❓"],["Haklısın.","أنت محق","✅"],["Emin değilim.","لست متأكداً","🤔"],["Sorun değil.","لا مشكلة","😊"]]),
U("tr4d","4. حوار عملي كامل",[["Merhaba, size nasıl yardımcı olabilirim?","مرحباً، كيف أستطيع مساعدتك؟","👋"],["Bir konuda bilgi almak istiyorum.","أريد الاستفسار عن أمر","ℹ️"],["Bunu biraz daha açıklar mısınız?","هل تشرح ذلك أكثر؟","🗣️"],["Anladım, çok teşekkür ederim.","فهمت، شكراً جزيلاً","🙏"],["Rica ederim. İyi günler!","العفو، نهارك سعيد","☀️"]])]},
{id:"C1",n:"C1 — الإتقان المتقدم",u:[
U("tr5a","1. مفردات أكاديمية ومهنية",[["araştırma","بحث","🔬"],["gelişim","تطور","📈"],["başvuru","طلب / ترشح","📄"],["deneyim","خبرة","💼"],["sorumluluk","مسؤولية","⚖️"],["başarı","نجاح","🏆"],["çözüm","حل","💡"],["kanıt","دليل","🔎"],["özellikle","خصوصاً","🎯"],["değerlendirmek","يقيّم","📝"]]),
U("tr5b","2. روابط متقدمة",[["buna rağmen","رغم ذلك","↔️"],["üstelik","وفوق ذلك","➕"],["dolayısıyla","وبالتالي","➡️"],["oysa","في حين أن","⚖️"],["nitekim","كما أن / بالفعل","📌"],["bunun yanı sıra","إضافة إلى ذلك","➕"]]),
T("tr5c","3. المبني للمجهول", "صيغة المبني للمجهول",[],"تتغير بنية الفعل لإبراز الحدث بدل الفاعل: Kitap yazıldı = كُتب الكتاب.",[["Bu kitap 2020'de yazıldı.","كُتب هذا الكتاب سنة 2020","📘"],["Sorun kısa sürede çözüldü.","حُلّت المشكلة بسرعة","💡"],["Toplantı iptal edildi.","أُلغِي الاجتماع","📅"]],[["Kitap dün ___.","yazıldı","yazıldı|yazdı|yazıyor"]]) ]}
];
}

function meGen(){meSave();var m=S.me,s="Hello! My name is "+(m.n||"...")+". ";if(m.a)s+="I am "+m.a+" years old. ";if(m.c)s+="I am from "+m.c+". ";if(m.j)s+="I work as "+m.j+". ";s+="I am learning English. Nice to meet you!";document.getElementById("mtx").value=s;meSave()}
function meSpeak(){var R=window.SpeechRecognition||window.webkitSpeechRecognition,t=document.getElementById("mt");if(!R){t.textContent="التعرف على الكلام غير متوفر هنا: سجلي صوتك 🎙️ واسمعيه، أو افتحي في Chrome.";return}
askMic(function(ok){if(!ok){t.textContent="❌ المتصفح ما سمحش بالميكروفون. دوسي «افتح في نافذة جديدة» وسمحي.";return}var r=new R();r.lang="en-US";r.onresult=function(e){var h=e.results[0][0].transcript,T=nz(document.getElementById("mtx").value).split(" "),H=nz(h).split(" ");t.innerHTML='سمعتك: <b dir="ltr">'+esc(h)+'</b><div class="dif" dir="ltr">'+T.map(function(w){var k=H.indexOf(w)>=0;return'<span class="ch '+(k?"ok":"no")+'">'+(k?"✓ ":"✗ ")+esc(w)+'</span>'}).join("")+'</div>';act()};r.onerror=function(){t.textContent="ما خدمش التعرف. جربي التسجيل 🎙️"};r.start();t.textContent="🎤 كنسمعك... هضري بالإنجليزية"})}
function mRec(kind){var s=document.getElementById("mst");if(!navigator.mediaDevices||!window.MediaRecorder){s.textContent="❌ هذا المتصفح ما يدعمش التسجيل. جربي Chrome.";return}
navigator.mediaDevices.getUserMedia(kind=="video"?{audio:true,video:{facingMode:"user"}}:{audio:true}).then(function(st){var ch=[],m=new MediaRecorder(st);RC=m;if(kind=="video"){var pv=document.getElementById("pv");pv.srcObject=st;pv.muted=true;pv.style.display="block";pv.play()}
m.ondataavailable=function(e){if(e.data.size)ch.push(e.data)};m.onstop=function(){st.getTracks().forEach(function(t){t.stop()});mPut({id:Date.now(),k:kind,b:new Blob(ch,{type:m.mimeType||(kind=="video"?"video/webm":"audio/webm")})},me);RC=null};
m.start();s.innerHTML='🔴 كنسجل... <button class="btn" onclick="RC.stop()">⏹️ وقف وحفظ</button>'}).catch(function(){s.textContent="❌ المتصفح ما سمحش بالكاميرا أو الميكروفون. دوسي «افتح في نافذة جديدة» وسمحي."})}
function me(){tab="me";nav();var m=S.me||{},f=function(i,l,v,p){return'<input class="w" id="'+i+'" value="'+esc(v||"")+'" placeholder="'+l+'" onchange="meSave()" style="font-size:17px;margin:4px 0" dir="auto">'};
$('<h1>🙋 عرفي بروحك</h1><div class="card"><p class="small">عمري معلوماتك (بأي لغة)، وبعدها ولدي نص التعريف بالإنجليزية.</p>'+f("mn","الاسم",m.n)+f("ma","العمر",m.a)+f("mc","المدينة",m.c)+f("mj","الخدمة أو الدراسة",m.j)+'<div class="row"><button class="btn l" onclick="meGen()">✨ ولدي النص</button></div><textarea id="mtx" dir="ltr" rows="5" onchange="meSave()" placeholder="Hello! My name is..." style="width:100%;padding:10px;font-size:17px;border-radius:12px;border:2px solid var(--bd);background:var(--card);color:var(--tx)">'+esc(m.tx||"")+'</textarea><div class="row"><button class="btn l" onclick="say(document.getElementById(\'mtx\').value)">🔊 اسمعي</button><button class="btn l" onclick="say(document.getElementById(\'mtx\').value,.4)">🐢</button><button class="btn" onclick="meSpeak()">🎤 هضري بالإنجليزية</button></div><div id="mt" class="small" style="text-align:center"></div></div><div class="card"><b>🎬 سجلي تعريفك</b><div class="row"><button class="btn" onclick="mRec(\'audio\')">🎙️ صوت</button><button class="btn" onclick="mRec(\'video\')">🎥 فيديو</button></div><video id="pv" playsinline></video><div id="mst" class="small" style="text-align:center"></div><p class="small">التسجيلات تتحفظ في هذا الجهاز فقط (النصوص والمعلومات تتزامن بين أجهزتك).</p><div id="ml"></div></div>');
mlist()}
document.addEventListener("visibilitychange",function(){if(!document.hidden&&tab!="lock")sync()});
var DIRECT="https://claude.ai/artifact/29Bxpf8VKzGagEg1vxQnC2",RFL=null;
function srErr(c){return({"unsupported":"هذا المتصفح (غالبا داخل التطبيق) ما يدعمش سماع الصوت","not-allowed":"المتصفح منع الميكروفون","service-not-allowed":"المتصفح منع خدمة الصوت","network":"سماع الصوت يحتاج إنترنت","audio-capture":"ما لقيتش ميكروفون","no-speech":"ما سمعتش شيء، هضري بصوت أعلى","aborted":"توقف الاستماع","language-not-supported":"اللغة غير مدعومة"})[c]||"خطأ في الصوت"}
function micBlocked(){try{var p=document.permissionsPolicy||document.featurePolicy;return !!(p&&p.allowsFeature&&!p.allowsFeature("microphone"))}catch(e){return false}}
function sr_help(c){if(!window.isSecureContext)return'❌ الصفحة مفتوحة كملف مباشرة من الهاتف، وChrome ما يسمحش بالميكروفون في هذه الحالة (مفتوحة بشكل غير آمن)، وعلاه ما يطلعش «autoriser». لازم تتفتح من رابط https: انشريها مجانا بالمجلد المضغوط site.zip (Netlify Drop) وافتحي الرابط في Chrome.';if(micBlocked())return'❌ منصة claude.ai ما تعطيش إذن الميكروفون لهذه الصفحة، وهذا ماشي ذنبك ولا ذنب Chrome، وعلاه ما يطلعش «autoriser». الحل: افتحي النسخة المستقلة (ملف الإنجليزية لي بعثتهالك) مباشرة في Chrome.';return'❌ '+srErr(c)+' <span dir="ltr">('+c+')</span><br><button class="btn" onclick="window.open(DIRECT,\'_blank\')">🔗 افتحي الصفحة مباشرة في Chrome</button> <button class="btn l" onclick="recFallback()">🎙️ سجلي صوتك فقط</button>'}
function listen(lang,ok,bad){var R=window.SpeechRecognition||window.webkitSpeechRecognition;if(!R){bad("unsupported");return}var r=new R();r.lang=lang;r.interimResults=false;r.maxAlternatives=3;r.onresult=function(e){var a=[];for(var i=0;i<e.results[0].length;i++)a.push(e.results[0][i].transcript);ok(a)};r.onerror=function(e){bad(e.error)};r.onnomatch=function(){bad("no-speech")};try{r.start()}catch(x){bad("start")}}
function rec(){if(!V||V.t!="s")return;var p=V.spl[V.spi];V.res={err:"🎤 كنسمعك... هضري دوك"};unit();
listen(LC,function(al){var best=al[0],bc=-1,T=nz(p).split(" ");al.forEach(function(h){var H=nz(h).split(" "),c=T.filter(function(w){return H.indexOf(w)>=0}).length;if(c>bc){bc=c;best=h}});recFin(best)},function(c){V.res={err:c=="no-speech"?"🎤 "+srErr(c)+". دوسي 🎤 وعاودي.":sr_help(c)};unit()})}
function meSpeak(){var t=document.getElementById("mt");t.textContent="🎤 كنسمعك... هضري بالإنجليزية";listen(LC,function(al){var h=al[0],T=nz(document.getElementById("mtx").value).split(" "),H=nz(h).split(" ");t.innerHTML='سمعتك: <b dir="ltr">'+esc(h)+'</b><div class="dif" dir="ltr">'+T.map(function(w){var k=H.indexOf(w)>=0;return'<span class="ch '+(k?"ok":"no")+'">'+(k?"✓ ":"✗ ")+esc(w)+'</span>'}).join("")+'</div>';act()},function(c){t.innerHTML=sr_help(c)})}
function mergeR(a,b){var o=Object.assign({},a);Object.keys(b||{}).forEach(function(k){if(!o[k]||b[k].t>o[k].t)o[k]=b[k]});return o}
function rr(){tab=="refl"?reflect(RFL):me()}
function mAll(cb){idb(function(d){var m=(S.media||[]).filter(function(x){return!x.x}).map(function(x){return{id:x.id,k:x.k,src:"/_blob/"+x.aid}});if(!d)return cb(m);var q=d.transaction("m").objectStore("m").getAll();q.onsuccess=function(){cb(m.concat(q.result))};q.onerror=function(){cb(m)}})}
function mDel(id){var m=(S.media||[]).filter(function(x){return x.id==id})[0];if(m){m.x=1;m.t=Date.now();save();Promise.resolve().then(function(){return claude.use("assets")}).then(function(A){if(A)A.delete(m.aid)}).catch(function(){});rr()}else idb(function(d){if(!d)return;var t=d.transaction("m","readwrite");t.objectStore("m").delete(id);t.oncomplete=rr})}
function mlist(){mAll(function(a){var e=document.getElementById("ml");if(!e)return;e.innerHTML="";a.sort(function(x,y){return y.id-x.id}).forEach(function(x){var d=document.createElement("div");d.className="card";var el=document.createElement(x.k=="video"?"video":"audio");el.controls=true;el.playsInline=true;el.style.width="100%";el.src=x.src||URL.createObjectURL(x.b);var b=document.createElement("button");b.className="mini";b.textContent="🗑️ "+new Date(x.id).toLocaleString();b.onclick=function(){mDel(x.id)};d.appendChild(el);d.appendChild(b);e.appendChild(d)})})}
function mRec(kind){var s=document.getElementById("mst");if(!navigator.mediaDevices||!window.MediaRecorder){s.innerHTML=sr_help("unsupported");return}
navigator.mediaDevices.getUserMedia(kind=="video"?{audio:true,video:{facingMode:"user"}}:{audio:true}).then(function(st){var ch=[],m;try{m=new MediaRecorder(st,{videoBitsPerSecond:800000,audioBitsPerSecond:64000})}catch(e){m=new MediaRecorder(st)}RC=m;
if(kind=="video"){var pv=document.getElementById("pv");pv.srcObject=st;pv.muted=true;pv.style.display="block";pv.play()}
m.ondataavailable=function(e){if(e.data.size)ch.push(e.data)};
m.onstop=function(){st.getTracks().forEach(function(t){t.stop()});RC=null;var b=new Blob(ch,{type:m.mimeType||(kind=="video"?"video/webm":"audio/webm")}),s2=document.getElementById("mst");if(s2)s2.textContent="⏳ كنحفظ...";
Promise.resolve().then(function(){return claude.use("assets")}).then(function(A){if(!A)throw 0;return A.upload(b)}).then(function(r){S.media=S.media||[];S.media.push({id:Date.now(),k:kind,aid:r.id,t:Date.now()});save();rr()}).catch(function(){mPut({id:Date.now(),k:kind,b:b},rr)})};
m.start();s.innerHTML='🔴 كنسجل... <button class="btn" onclick="RC.stop()">⏹️ وقف وحفظ</button>';setTimeout(function(){if(RC&&RC.state=="recording")RC.stop()},kind=="video"?120000:300000)}).catch(function(){s.innerHTML='❌ المتصفح ما سمحش بالكاميرا أو الميكروفون.<br><button class="btn" onclick="window.open(DIRECT,\'_blank\')">🔗 افتحي الصفحة مباشرة في Chrome</button>'})}
function ptest(id){var l=CUR.filter(function(x){return x.id==id})[0];startQuiz({k:"t",id:"PT"+id,l:l,pt:1})}
function reSave(){S.refl=S.refl||{};S.refl[RFL]={tx:document.getElementById("rtx").value,t:Date.now()};save()}
function rlis(lang){var t=document.getElementById("rt");t.textContent="🎤 كنسمعك... هضري";listen(lang,function(al){var e=document.getElementById("rtx");e.value=(e.value+" "+al[0]).trim();reSave();act();t.textContent="✅ سمعتك: "+al[0]},function(c){t.innerHTML=sr_help(c)})}
function reflect(lid){RFL=lid;tab="refl";nav();var l=CUR.filter(function(x){return x.id==lid})[0]||{n:""},r=(S.refl||{})[lid]||{};
$('<h1>🗣️ هدري على المستوى</h1><p class="sub">'+esc(l.n)+'</p><div class="card"><p dir="ltr"><b>'+(LANG=="fr"?"Qu'as-tu appris ? Que ne sais-tu pas encore ?":LANG=="de"?"Was hast du gelernt? Was weißt du noch nicht?":"What did you learn? What do you not know yet?")+'</b></p><p class="small">واش تعلمتي في هذا المستوى؟ واش مازال ما فهمتيهش؟ اكتبي، هضري، ولا سجلي فيديو، بالإنجليزية ولا بالدارجة.</p><textarea id="rtx" rows="6" dir="auto" onchange="reSave()" style="width:100%;padding:10px;font-size:17px;border-radius:12px;border:2px solid var(--bd);background:var(--card);color:var(--tx)">'+esc(r.tx||"")+'</textarea><div class="row"><button class="btn" onclick="rlis(LC)">🎤 '+LN+'</button><button class="btn l" onclick="rlis(\'ar-DZ\')">🎤 دارجة</button></div><div id="rt" class="small" style="text-align:center"></div></div><div class="card"><b>🎬 سجلي فيديو أو صوت</b><div class="row"><button class="btn" onclick="mRec(\'audio\')">🎙️ صوت</button><button class="btn" onclick="mRec(\'video\')">🎥 فيديو</button></div><video id="pv" playsinline></video><div id="mst" class="small" style="text-align:center"></div><div id="ml"></div></div>'+(lid=="0"?'<div class="card"><p>👏 كملتي المستوى الأول! دوك عرفي بروحك بالإنجليزية.</p><button class="btn" onclick="me()">🙋 تعريف بالنفس</button></div>':"")+'<div class="row"><button class="btn l" onclick="home()">الرئيسية</button></div>');mlist()}
var AU=null,SPK=0,_KEEP=null;
function pickVoice(){var vs=[];try{vs=speechSynthesis.getVoices()||[]}catch(e){}
var re=new RegExp("^"+LANG,"i"),ex=LANG=="de"?/de[-_]DE/i:LANG=="fr"?/fr[-_]FR/i:/en[-_]US/i,m=vs.filter(function(v){return re.test(v.lang)});
return m.filter(function(v){return ex.test(v.lang)&&v.localService})[0]||m.filter(function(v){return ex.test(v.lang)})[0]||m.filter(function(v){return v.localService})[0]||m[0]||null}
function say(t,r){t=String(t==null?"":t).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();if(!t)return;
var id=++SPK,done=false;
function web(){if(done||id!==SPK)return;done=true;try{if(AU)AU.pause();AU=new Audio("https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl="+LANG+"&q="+encodeURIComponent(t));AU.playbackRate=(r&&r<.5)?.75:1;var p=AU.play();if(p&&p.catch)p.catch(function(){})}catch(e){}}
if(!window.speechSynthesis||!window.SpeechSynthesisUtterance){web();return}
try{var ss=window.speechSynthesis;if(ss.speaking||ss.pending)ss.cancel();try{ss.resume()}catch(e){}
var u=new SpeechSynthesisUtterance(t);u.lang=LC;u.rate=r||.8;u.volume=1;
var v=pickVoice();if(v){u.voice=v;u.lang=v.lang}
u.onstart=function(){done=true};
u.onerror=function(e){if(e&&(e.error=="canceled"||e.error=="interrupted"))return;web()};
_KEEP=u;ss.speak(u);
setTimeout(function(){if(!done&&id===SPK&&!ss.speaking)web()},1500)}catch(e){web()}}
var firebaseConfig={apiKey:"AIzaSyDss0rteW44DAQxyIOKAuy05o2ZhvI1xrs",authDomain:"learn-languages-2ea1a.firebaseapp.com",databaseURL:"https://learn-languages-2ea1a-default-rtdb.firebaseio.com",projectId:"learn-languages-2ea1a",storageBucket:"learn-languages-2ea1a.firebasestorage.app",messagingSenderId:"840626725466",appId:"1:840626725466:web:e3f491fd9f6fca0d96ee63",measurementId:"G-0BRH8ELFGZ"};
try{if(!firebase.apps.length)firebase.initializeApp(firebaseConfig);firebase.auth().onAuthStateChanged(function(user){fbUser=user||null;ref=null;fbDocKey="";if(!user){cloud=false;if(fbUnsub){fbUnsub();fbUnsub=null}fbMessage="الحفظ المحلي شغال؛ سجلي الدخول لتفعيل المزامنة."}else{fbMessage="تم الدخول؛ جارٍ مزامنة بياناتك...";sync()}if(tab=="sets")sets();else if(tab=="home")home()})}catch(e){fbMessage="تعذر تشغيل Firebase: "+(e.message||e)}
applyCfg();var okp=false;try{okp=sessionStorage.getItem("ok")=="1"}catch(e){}
if(okp)start();else lock();

// Register the offline application shell (requires HTTPS or localhost).
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./service-worker.js").catch(function (error) {
      console.warn("Service worker registration failed:", error);
    });
  });
}
