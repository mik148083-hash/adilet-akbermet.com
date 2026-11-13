(() => {
 const w=window.WEDDING;
 const $=id=>document.getElementById(id);
 const set=(id,v)=>{if($(id)) $(id).textContent=v};
 set('brideHero',w.bride);set('groomHero',w.groom);set('monogram',`${w.bride[0]} · ${w.groom[0]}`);
 set('footerNames',`${w.bride} & ${w.groom}`);
 const [y,m,d]=w.date.split('-').map(Number);
 const date=new Date(y,m-1,d,...w.time.split(':').map(Number));
 const months=['ЯНВАРЬ','ФЕВРАЛЬ','МАРТ','АПРЕЛЬ','МАЙ','ИЮНЬ','ИЮЛЬ','АВГУСТ','СЕНТЯБРЬ','ОКТЯБРЬ','НОЯБРЬ','ДЕКАБРЬ'];
 const days=['ЖЕКШЕМБИ','ДҮЙШӨМБҮ','ШЕЙШЕМБИ','ШАРШЕМБИ','БЕЙШЕМБИ','ЖУМА','ИШЕМБИ'];
 set('heroDate',`${y} · ${String(m).padStart(2,'0')} · ${String(d).padStart(2,'0')}`);
 set('footerDate',`${String(d).padStart(2,'0')} · ${String(m).padStart(2,'0')} · ${y}`);
 set('monthName',months[m-1]);set('dayNumber',String(d).padStart(2,'0'));set('weekday',days[date.getDay()]);set('startTime',w.time);
 set('venueName',w.venue);set('venueAddress',w.address);
 const map='https://www.google.com/maps?q='+encodeURIComponent(w.address);
 $('mapLink').href=map;$('mapFrame').src='https://maps.google.com/maps?q='+encodeURIComponent(w.address)+'&output=embed';
 function countdown(){let sec=Math.max(0,Math.floor((date-new Date())/1000));const a=[Math.floor(sec/86400),Math.floor(sec%86400/3600),Math.floor(sec%3600/60),sec%60];['days','hours','minutes','seconds'].forEach((id,i)=>set(id,String(a[i]).padStart(2,'0')))}
 countdown();setInterval(countdown,1000);
 $('calendarButton').addEventListener('click',()=>{
  const pad=n=>String(n).padStart(2,'0');
  const start=`${y}${pad(m)}${pad(d)}T${w.time.replace(':','')}00`;
  const endDate=new Date(date.getTime()+4*3600000);
  const end=`${endDate.getFullYear()}${pad(endDate.getMonth()+1)}${pad(endDate.getDate())}T${pad(endDate.getHours())}${pad(endDate.getMinutes())}00`;
  window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(`${w.bride} & ${w.groom} — той`)+'&dates='+start+'/'+end+'&details='+encodeURIComponent(w.address)+'&location='+encodeURIComponent(w.address),'_blank','noopener');
 });
})();
