/* Komponen UI reusable EduSync: Button, FormField, StatusBadge, ClassCard, TaskItem, Navbar, Alert */
const UI=(()=>{
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const btn=({label,variant='secondary',href,type='button',id,disabled,full,loading})=>{const c=`btn btn--${variant}${full?' btn--full':''}${loading?' is-loading':''}`;if(loading)return `<button class="${c}" type="${type}" disabled aria-busy="true"><span class="spin" aria-hidden="true"></span>${e(label)}</button>`;
 return href?`<a class="${c}" href="${href}">${e(label)}</a>`:`<button class="${c}" type="${type}"${id?` id="${id}"`:''}${disabled?' disabled':''}>${e(label)}</button>`};
const badge=k=>({pengganti:'⇄ PENGGANTI',selesai:'✓ SELESAI',rutin:'RUTIN'}[k]?`<span class="badge badge--${k}">${{pengganti:'⇄ PENGGANTI',selesai:'✓ SELESAI',rutin:'RUTIN'}[k]}</span>`:'');
const field=({id,label,type='text',value='',hint,error,required,options,rows,placeholder,min,max})=>{
 const a=`id="${id}" name="${id}"${required?' required aria-required="true"':''}${error?` aria-invalid="true" aria-describedby="${id}-m"`:hint?` aria-describedby="${id}-m"`:''}`;
 const ctl=options?`<select ${a}>${options.map(o=>`<option value="${e(o.v)}"${o.v==value?' selected':''}>${e(o.t)}</option>`).join('')}</select>`
  :rows?`<textarea ${a} rows="${rows}">${e(value)}</textarea>`
  :`<input ${a} type="${type}" value="${e(value)}"${placeholder?` placeholder="${e(placeholder)}"`:''}${min?` min="${min}"`:''}${max?` max="${max}"`:''}>`;
 return `<div class="field"><label for="${id}">${e(label)}${required?' *':''}</label>${ctl}${error?`<div class="error" id="${id}-m">! ${e(error)}</div>`:hint?`<div class="hint" id="${id}-m">${e(hint)}</div>`:''}</div>`};
const alert=(k,html)=>`<div class="alert alert--${k}" role="${k=='success'?'status':'alert'}">${html}</div>`;
const classCard=({c,o,href,selected})=>{const sel=selected?' card--selected" aria-current="true':'';
 if(o)return `<a class="card card--pengganti${sel}" href="${href}">${badge('pengganti')}<b>${e(c.n)}</b><small>${o.t} · ${e(o.r)}<br>semula ${c.t} · ${e(c.r)}</small></a>`;
 return `<a class="card${sel}" href="${href}"><b>${e(c.n)}</b><small>${c.t} · ${e(c.r)}</small></a>`};
const slotKosong=c=>`<div class="card card--unavailable">slot semula (kosong)<br><small>${e(c.n)}</small></div>`;
const taskItem=(t,fmt)=>`<label class="task${t.done?' is-done':''}"><input type="checkbox" data-task="${t.id}"${t.done?' checked':''}><span><b>${e(t.n)}</b><small>${e(t.m)} · ${fmt(t.date)} ${t.t}</small></span></label>`;
const navbar=(active,role)=>{const L=(k,t,h,dis)=>dis?`<span class="nav-link" aria-disabled="true" title="Belum tersedia di Pertemuan 4">${t}</span>`:`<a class="nav-link" href="${h}"${active==k?' aria-current="page"':''}>${t}</a>`;
 return `<header class="topbar"><a class="logo" href="kalender.html">EduSync</a><nav aria-label="Navigasi utama">${L('kalender','Kalender','kalender.html')}${L('x','Tugas Saya','',1)}${role=='komti'?L('kelola','Kelola Kuliah Pengganti','kelola-pengganti.html'):''}${L('x','Bantuan','',1)}</nav><span class="pill">TI-J 2024</span><span class="pill">${role=='komti'?'Komti':'Mahasiswa'}</span></header>`};
return{e,btn,badge,field,alert,classCard,slotKosong,taskItem,navbar}})();
