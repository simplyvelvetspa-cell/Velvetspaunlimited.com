const scene=document.querySelector('#curtainScene');const enter=document.querySelector('#enterButton');const menu=document.querySelector('#menuButton');const nav=document.querySelector('#nav');
const openCurtain=()=>{scene.classList.add('open');document.body.classList.remove('curtain-locked');localStorage.setItem('velvetEntered','yes')};
enter.addEventListener('click',openCurtain);
if(localStorage.getItem('velvetEntered')==='yes'){scene.remove();document.body.classList.remove('curtain-locked')}
menu.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen))});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const experiences={restore:{number:'01',title:'The Velvet Reset',copy:'A flowing, full-body ritual created to settle your nervous system, soften overworked muscles, and make room for a deeper exhale.',best:'Stress • fatigue • whole-body renewal'},release:{number:'02',title:'The Deep Release',copy:'Focused therapeutic care for the places that work hardest. Pressure and technique are adjusted to meet your body without overpowering it.',best:'Tight shoulders • back tension • active bodies'},ground:{number:'03',title:'The Grounding Ritual',copy:'Slow, intentional bodywork designed to quiet mental noise, restore balance, and help you feel fully present in your body again.',best:'Overstimulation • emotional fatigue • reset'},glow:{number:'04',title:'The Renewal Experience',copy:'An uplifting ritual that encourages circulation, restores ease, and leaves you feeling lighter from the inside out.',best:'Sluggish energy • special occasions • fresh starts'}};
const card=document.querySelector('#experienceCard');document.querySelectorAll('.feeling-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.feeling-tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');const x=experiences[tab.dataset.feeling];card.animate([{opacity:.35,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:350});card.querySelector('.experience-number').textContent=x.number;card.querySelector('h3').textContent=x.title;card.querySelector('p').textContent=x.copy;card.querySelector('strong').textContent=x.best}));
const square='https://book.squareup.com/appointments/u0wax21hze3dit/location/AHT2JGX482KPT/services/';
const rooms={
 arrival:{kicker:'Begin here',title:'The Garden of Arrival',copy:'Greenery, florals, and quiet details create the first exhale. This is where the outside world begins to fall away.',features:['Welcome & check-in','Intentional arrival'],services:[]},
 wisdom:{kicker:'Be seen & understood',title:'The Wisdom Chamber',copy:'A consultation space surrounded by cultural collections, credentials, and thoughtful refreshment—where your needs are heard before care begins.',features:['VIP consultation','Wellness planning','Membership guidance','Refreshments'],services:[]},
 celestial:{kicker:'Pause between worlds',title:'Celestial Velvet Lounge',copy:'A moonlit holding and relaxation room—and the center point for experiences that flow through more than one treatment space.',features:['Pre-treatment relaxation','Post-treatment integration','Whole-spa journeys'],services:[
  ['V.elevate Member Massage Experiences','Price varies • 30 min+','GPVC3VNVSIFKITWBOCO47ODZ'],
  ["Queen’s Retreat","$220 • 1 hr 30 min",'Q543VLA7A3U2RGV2S5QR534U','60-minute massage + Queen’s facial massage + reflexology'],
  ['VElevate CBD-Infused Spa Day','$284 • 1 hr 30 min','7PTNRBKRURY4JDR7PP2FFD7X','60-minute CBD massage + facial massage + detox reflexology soak'],
  ['Goddess Facial + Sound Therapy + Foot Treatment','$100 • 1 hr','HGQ2ZBFRWG2EHLBF2H4AQBLD'],
  ['Enchanting Enhancements','Price varies • 15 min+','JFDKLBY4PUOOWAARMQFDR7KD','Add-on upgrades for eligible experiences']
 ]},
 chakra:{kicker:'Restore the whole body',title:'Chakra Sanctuary',copy:'The main massage sanctuary blends skilled touch with chakra-centered calm, subtle garden energy, and celestial details.',features:['Massage therapy','Energy alignment','Sound therapy'],services:[
  ['Therapeutic Massage','$160 • 1 hr 30 min','IXSRA2CALXNE4TYGLWZXPSJX','Contact the spa before booking: massage care is temporarily limited to 60 minutes'],
  ['Neuromuscular Therapy','Price varies • 1 hr+','NQJ2D262B4FNZILZPIALGNQD','Trigger-point and neuromuscular techniques'],
  ['Chakra Alignment','$60 • 45 min','PEU265JDBLHWO7DI7RBATYJC','Chakra assessment + sound-bowl treatment']
 ]},
 lotus:{kicker:'Care for every detail',title:'Lotus Ritual Suite',copy:'A floral, water-inspired suite for beauty, grounding, and focused face, hand, and foot care.',features:['Facial massage','Reflexology','Nail & beauty rituals'],services:[
  ['Goddess Manicure & Pedicure','Price varies • 45 min+','7LLT3QI6FG3NWP4MLVDFANUL'],
  ['Facial Massage Menu','Price varies • 20 min+','N22P7RVDZU4YPUD7AIEZV2UC'],
  ['Paroah Facial Massage','$50 • 30 min','EZQVEZ66DQLQP75XSLUIO2PW','Men’s facial + scalp massage'],
  ["Pharoah’s Pedicure & Manicure",'$60 • 2 hr','GADLW2CGGPV2BHOTL6PPUWZC'],
  ['Reflexology','$60 • 30 min','OMHSLDUORLE4ILPS6KVBVT7C','30-minute foot massage'],
  ['Princess Manicure & Pedicure','Price varies • 25 min+','CHQJM3EBARC4RW7UVC6H32G6','Clean, shape, and polish'],
  ['Makeup Menu','Price varies • 20 min+','HDZS2DJKPC4ADYPRJRNL4N4D'],
  ['Intro to Wellness Reflexology Series','$285 • 1 hr 15 min','G74Z5MOIFVCAJFINATSZU73O','Series of 3 Goddess/Pharaoh pedicure + reflexology experiences'],
  ['Foot Reflexology','Price varies • 15 min+','BO3PXII5FRQCOHRAPE5YRR7L']
 ]}
};
const roomPanel=document.querySelector('#roomPanel');document.querySelectorAll('.room-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.room-tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');const x=rooms[tab.dataset.room];roomPanel.animate([{opacity:.35,transform:'translateX(8px)'},{opacity:1,transform:'none'}],{duration:350});roomPanel.querySelector('.room-kicker').textContent=x.kicker;roomPanel.querySelector('h3').textContent=x.title;roomPanel.querySelector('p').textContent=x.copy;roomPanel.querySelector('.service-chips').innerHTML=x.features.map(feature=>`<span>${feature}</span>`).join('');roomPanel.querySelector('.room-services').innerHTML=x.services.length?x.services.map(service=>`<a class="service-card" href="${square+service[2]}"><strong>${service[0]}</strong><small>${service[1]}</small>${service[3]?`<em>${service[3]}</em>`:''}</a>`).join(''):'<p class="room-empty">This room prepares and supports your reserved experience rather than offering a separate bookable service.</p>'}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('#year').textContent=new Date().getFullYear();
