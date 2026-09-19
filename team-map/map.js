const taskDefinitions = {
  "firstProduct": [
    "先选定一件测试商品",
    "凯哥、李桑、龙梦柔",
    "选定具体商品和样品，说清材质、尺寸、颜色。",
    "锦晨、启航和小武能认出同一件商品。"
  ],
  "productFacts": [
    "写清规格、售价和能供多少",
    "选品组提供，团队确认售价",
    "整理尺寸、颜色、售价、可供数量和到货时间。",
    "锦晨、启航能照着录入；小武能核对实际货物。"
  ],
  "usableContent": [
    "备好能用的照片和说明",
    "龙梦柔主导，凯哥共同确认使用许可",
    "图片和文字对应具体商品，说明来源和是否获准使用。",
    "照片和说明可以放上测试商品页面；教程也有明确来源。"
  ],
  "handover": [
    "把一件商品的资料交齐",
    "选品组 → 锦晨、启航",
    "同一件商品的图片、说明、规格、售价和供货信息一起交。",
    "锦晨、启航确认资料齐了，能开始上架测试，才算补好当前最急的缺口。"
  ],
  "operator": [
    "把后台操作实际试一遍",
    "锦晨、启航",
    "首版由两人直接操作 Shopify、协调各方，检查所需权限。",
    "能登录所需页面，实际完成录入和查单；分工确定不等于已经试过。"
  ],
  "listing": [
    "把第一件测试商品放上网站",
    "锦晨、启航",
    "录入完整资料，检查顾客看到的图片、规格和售价。",
    "测试人员能找到商品，规格和价格与确认资料一致。"
  ],
  "warehouse": [
    "核对仓库、实物和数量",
    "小武；凯哥小组提供到货信息",
    "选定仓库，清点货物，和锦晨、启航约好谁录入数量。",
    "Shopify 里的数量有实际货物作依据。"
  ],
  "dispatch": [
    "试着寄货，把快递单号记下来",
    "小武；锦晨、启航协助录入",
    "按测试订单找货、包装、试发货，记录数量、快递公司和单号。",
    "运营和客服能在这张订单查到实际发货信息。"
  ],
  "records": [
    "实际核对商品、库存和订单",
    "锦晨、启航协调，小武和客服参与",
    "拿同一件测试商品和订单，检查照片、价格、数量、付款和快递信息。",
    "网站显示正确；小武知道发什么；客服能查到发货信息。"
  ],
  "permissions": [
    "试过每个人需要的操作",
    "锦晨、启航协调相关同事",
    "检查谁能录入、查单、更新库存；谁批准退款、谁操作要另行明确。",
    "需要操作的人能做得到，不能登录的人有明确协助人；退款权限也已说清。"
  ],
  "purchase": [
    "从网站选商品并下单",
    "内部测试人员；锦晨、启航支持",
    "找到商品，选择颜色和数量，走完下单步骤。",
    "锦晨、启航找到生成的测试订单，商品、数量和配送资料正确。"
  ],
  "payment": [
    "做一次支付测试",
    "锦晨、启航；支付账号相关人员",
    "确认测试方式，核对付款结果和失败时的提示。",
    "测试结果能在订单中核对；涉及真实扣款时另外请求批准。"
  ],
  "support": [
    "试一下 LINE 咨询和查单",
    "锦晨、启航协调；具体接待人待安排",
    "安排账号和接待人，从网站打开 LINE 发测试咨询，再试着查订单。",
    "接待人能收到咨询、找到对应订单并答复。"
  ],
  "aftercare": [
    "演练取消、退换货和退款处理",
    "客服、小武；锦晨、启航协调",
    "试着处理漏发、破损、取消和退货，明确货和钱分别找谁。",
    "相关人能查到处理结果；真实退款另外请求批准。"
  ]
};
const groups = {
  "prepare": {
    "title": "商品与内容准备",
    "priority": 0,
    "owner": "凯哥 · 李桑 · 龙梦柔",
    "desc": "先备齐一件商品，才能开始卖货测试。",
    "tasks": [
      "firstProduct",
      "productFacts",
      "usableContent",
      "handover"
    ],
    "links": [
      "selection",
      "content",
      "product"
    ],
    "input": "选好的商品、样品和可用照片",
    "output": "锦晨、启航能直接录入的完整资料",
    "related": [
      "operations",
      "warehouse"
    ]
  },
  "operations": {
    "title": "店铺运营",
    "priority": 1,
    "owner": "现在：锦晨、启航 → 培训后：黄总公司",
    "desc": "放上商品，跟进订单，协调发货和顾客问题。",
    "tasks": [
      "operator",
      "listing"
    ],
    "links": [
      "operations"
    ],
    "input": "选品资料、照片、售价和供货情况",
    "output": "网站商品页面，以及需要小武发货的订单",
    "related": [
      "shopify",
      "warehouse",
      "service"
    ]
  },
  "warehouse": {
    "title": "仓储发货",
    "priority": 1,
    "owner": "小武（HCL 小武）",
    "desc": "数清货，按订单寄出，再提供快递单号。",
    "tasks": [
      "warehouse",
      "dispatch"
    ],
    "links": [
      "warehouse"
    ],
    "input": "凯哥小组交来的货；订单里的商品和地址",
    "output": "实际库存、发货数量和快递单号",
    "related": [
      "shopify",
      "service"
    ]
  },
  "shopify": {
    "title": "Shopify · 店铺资料总管",
    "priority": 1,
    "owner": "软件工具，不是人员或团队",
    "desc": "集中存商品、库存和订单，让网站和工作人员查同一份资料。",
    "tasks": [
      "records",
      "permissions"
    ],
    "links": [
      "product",
      "inventory",
      "order"
    ],
    "input": "商品资料、库存变化、顾客订单和发货结果",
    "output": "网站展示商品；运营、仓库和客服查单",
    "related": [
      "operations",
      "warehouse",
      "customer",
      "service"
    ]
  },
  "customer": {
    "title": "顾客网站",
    "priority": 1,
    "owner": "首月先由内部人员测试",
    "desc": "顾客在这里看商品、选颜色、下单和找客服。",
    "tasks": [
      "purchase",
      "payment"
    ],
    "links": [],
    "input": "Shopify 里的商品、价格和可售数量",
    "output": "订单存到 Shopify；咨询从网站打开 LINE",
    "related": [
      "shopify",
      "service"
    ]
  },
  "service": {
    "title": "客服与售后",
    "priority": 1,
    "owner": "现在：锦晨、启航协调测试；后续：黄总公司",
    "desc": "查清订单再答复，和小武一起处理货物问题。",
    "tasks": [
      "support",
      "aftercare"
    ],
    "links": [
      "service"
    ],
    "input": "顾客的问题，以及订单和快递信息",
    "output": "回复顾客，处理问题，留下结果",
    "related": [
      "shopify",
      "warehouse"
    ]
  }
};
const arrow = '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const down = '<svg viewBox="0 0 16 24" aria-hidden="true"><path d="M8 1v20m-5-5 5 5 5-5"/></svg>';
const view = document.getElementById('view');
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function taskState(id) {
  const item = progressState.tasks[id];
  if (!item || !['blocked','unknown','ready'].includes(item.status)) return 'unknown';
  return item.status === 'ready' && (typeof item.evidence !== 'string' || !item.evidence.trim()) ? 'unknown' : item.status;
}
function groupState(group) {
  const states = group.tasks.map(taskState);
  if (states.every(state => state === 'ready')) return 'ready';
  if (states.includes('blocked')) return 'blocked';
  return 'unknown';
}
function statusBadge(status, priority) {
  const label = {ready:'已做好',blocked:'还没做好',unknown:'还没确认'}[status];
  return '<span class="badge state-'+status+(priority===0?' p0':'')+'">'+label+'</span>';
}
function badges(group) { return '<span class="badge priority'+group.priority+'">P'+group.priority+'</span>'+statusBadge(groupState(group),group.priority); }
function confirmedText(group) {
  const ready = group.tasks.filter(id => taskState(id)==='ready').length;
  return ready ? ready+' / '+group.tasks.length+' 项已确认做好' : '查看 '+group.tasks.length+' 件事要做';
}
function node(id) {
  const g=groups[id], state=groupState(g);
  const color=state==='ready'?'ready':g.priority===0?'p0':state==='blocked'?'pending':id==='shopify'?'hub':'';
  return '<button class="node '+color+'" data-view="'+id+'"><span class="badge-row">'+badges(g)+(g.priority===0&&state!=='ready'?'<span class="badge priority0">现在最急</span>':'')+'</span><span class="node-heading"><span role="heading" aria-level="3">'+escapeHtml(g.title)+'</span>'+arrow+'</span><span class="owner">'+escapeHtml(g.owner)+'</span><span class="node-description">'+escapeHtml(g.desc)+'</span><span class="detail-hint">'+confirmedText(g)+'</span></button>';
}
function line(text) { return '<div class="flow-line">'+down+'<span>'+text+'</span></div>'; }
function overview() {
  return '<div class="map-title"><h2 tabindex="-1" id="view-title">先把商品备好，再往下走</h2><p>点一个环节，就能看完整说明</p></div>'+
    node('prepare')+
    '<div class="split-links">'+line('交来完整商品资料')+line('提供规格和到货信息')+'</div>'+
    '<div class="split">'+node('operations')+node('warehouse')+'</div>'+
    '<div class="split-links">'+line('录入商品 · 检查订单')+line('记录库存 · 填快递单号')+'</div>'+
    node('shopify')+
    '<div class="split-links">'+line('展示商品与库存 ↔ 下单')+line('查询订单 ↔ 记录售后')+'</div>'+
    '<div class="split">'+node('customer')+node('service')+'</div>'+
    '<p class="connection-note">顾客网站 → LINE 客服咨询<br>小武按订单发货；客服找小武核实漏发、破损和退货。</p>';
}
function crumbs(label, parent) {
  return '<nav class="breadcrumbs" aria-label="当前位置"><button data-view="overview">总览</button>'+
    (parent?'<span aria-hidden="true">/</span><button data-view="'+parent+'">'+escapeHtml(groups[parent].title)+'</button>':'')+
    '<span aria-hidden="true">/</span><span aria-current="page">'+escapeHtml(label)+'</span></nav>';
}
function handoff(input, output) { return '<div class="handoff"><div><h3>接到什么</h3><p>'+escapeHtml(input)+'</p></div>'+arrow+'<div><h3>整理好什么</h3><p>'+escapeHtml(output)+'</p></div></div>'; }
function list(items) { return '<ul>'+items.map(item=>'<li>'+escapeHtml(item)+'</li>').join('')+'</ul>'; }
function phaseView() {
  return '<section class="plain-section"><h3>现在谁来做，以后交给谁</h3><div class="phase-list">'+operationsPhases.map(([title,body])=>'<div><h4>'+escapeHtml(title)+'</h4><p>'+escapeHtml(body)+'</p></div>').join('')+'</div></section>';
}
function taskList(g) {
  return '<section class="plain-section"><h3>接下来要做的事</h3><div class="task-list">'+g.tasks.map(key=>{
    const t=taskDefinitions[key], record=progressState.tasks[key];
    return '<article class="task-item"><div class="task-title"><h4>'+escapeHtml(t[0])+'</h4>'+statusBadge(taskState(key),g.priority)+'</div><p><strong>谁来做：</strong>'+escapeHtml(t[1])+'</p><p>'+escapeHtml(t[2])+'</p><p><strong>怎样算做好：</strong>'+escapeHtml(t[3])+'</p><p class="small">'+escapeHtml(record?.evidence||'还没有实际做完的确认记录。')+'</p></article>';
  }).join('')+'</div></section>';
}
function entryBody(key, embedded=false) {
  const e=entries[key];
  return '<section class="entry-body">'+(embedded?'<h3>'+escapeHtml(e.title)+'</h3><p class="entry-owner">'+escapeHtml(e.owner)+'</p><p>'+escapeHtml(e.mission)+'</p>':'')+
    '<h4>具体做什么</h4>'+list(e.work)+
    '<div class="example"><h4>举个例子</h4><p>'+escapeHtml(e.example)+'</p></div>'+
    '<h4>做好后，谁能接着做</h4><p>'+escapeHtml(e.handoff)+'</p>'+
    '<h4>还有什么没定</h4>'+list(e.pending)+
    (e.url?'<a class="source-link" href="'+escapeHtml(e.url)+'" target="_blank" rel="noopener">Shopify 官方说明（英文）</a>':'')+'</section>';
}
function relatedLinks(g) {
  return '<section class="plain-section"><h3>相关环节</h3><div class="detail-links">'+g.related.map(key=>'<button data-view="'+key+'">'+escapeHtml(groups[key].title)+arrow+'</button>').join('')+'</div></section>';
}
function groupView(id) {
  if(id==='shopify')return shopifyView();
  const g=groups[id];
  return crumbs(g.title)+'<div class="detail-header"><div class="badge-row">'+badges(g)+'</div><h2 id="view-title" tabindex="-1">'+g.title+'</h2><p>'+escapeHtml(g.owner)+'</p><p class="mission">'+escapeHtml(g.desc)+'</p></div>'+
    (id==='operations'?phaseView():'')+handoff(g.input,g.output)+
    g.links.map(key=>entryBody(key,key!==id)).join('')+taskList(g)+relatedLinks(g);
}
function shopifyView() {
  const g=groups.shopify;
  const connections=[
    ['商品准备 → Shopify → 网站','选品组给照片、规格和售价，锦晨、启航录入 Shopify。商品设置为可在网站销售后，网站用这些资料展示商品，不用再抄一份价格。'],
    ['仓库 → Shopify → 网站','小武核对实物数量，首版由锦晨、启航协调录入。设置好库存跟踪后，网站知道还有多少可卖；收货、破损等变化仍要有人记录。'],
    ['网站下单 → Shopify → 运营和仓库','顾客选择商品并下单，Shopify 保存订单和付款结果。锦晨、启航检查，小武按订单里的规格、数量和地址发货。'],
    ['发货结果 → Shopify → 客服','小武给出快递公司和单号，记回对应订单。客服再查这张订单，就知道有没有发货、单号是什么。没有后台权限时，由锦晨、启航协助。'],
    ['顾客咨询 → LINE；客服查 Shopify','网站上的 LINE 按钮负责打开聊天。客服拿订单号去 Shopify 查资料，再回到 LINE 答复；重要处理结果需要有人留下记录。']
  ];
  return crumbs('Shopify')+'<div class="detail-header"><p class="eyebrow">软件工具 · 不是一个岗位</p><h2 id="view-title" tabindex="-1">Shopify：店铺资料都放在这里</h2><p class="mission">可以把它理解成店铺共用的一套电子记录：卖什么、还剩多少、谁买了、发货没有，都在这里存和查。它保存和传递资料，具体选品、录入、寄货和答复顾客，仍然要人来做。</p></div>'+
    '<section class="plain-section"><h3>它主要存三类资料</h3><div class="record-grid"><div><h4>商品</h4><p>图片、说明、颜色、尺寸、售价</p></div><div><h4>库存</h4><p>货放在哪、还有多少能卖</p></div><div><h4>订单</h4><p>买了什么、付没付款、寄到哪、快递单号</p></div></div></section>'+
    '<section class="plain-section"><h3>资料从哪里来，接着给谁用？</h3><ol class="connections">'+connections.map(([title,body])=>'<li><h4>'+title+'</h4><p>'+body+'</p></li>').join('')+'</ol></section>'+
    '<div class="example"><h3>不会自动替大家做的事</h3><p>Shopify 不知道仓库刚收了多少货，也不会自己去寄快递。仓库系统是否能自动同步，还没有验证；LINE 聊天也不会因为放了一个链接就自动进来。首版先把需要人工查找、录入的做法跑顺。</p></div>'+
    phaseView()+'<section class="plain-section"><h3>拿一条围巾来理解</h3><p>选品组给出蓝色围巾资料 → 锦晨、启航录入 → 网站展示 → 内部人员下测试订单 → 小武试发货 → 记回快递单号 → 客服查单答复。大家围绕同一件商品、同一张订单工作。</p></section>'+
    '<section class="plain-section"><h3>这三类资料具体怎么看</h3>'+g.links.map(key=>entryBody(key,true)).join('')+'</section>'+
    '<section class="plain-section"><h3>我们现在试到哪一步了？</h3><div class="badge-row">'+badges(g)+'</div><p>上面讲的是软件能做什么，不代表本店已经全部设置好。下面两项还要实际检查。</p></section>'+taskList(g)+relatedLinks(g);
}
function detailView(key, parent) {
  const e=entries[key];
  return crumbs(e.title,parent)+'<div class="detail-header"><h2 id="view-title" tabindex="-1">'+escapeHtml(e.title)+'</h2><p>'+escapeHtml(e.owner)+'</p><p class="mission">'+escapeHtml(e.mission)+'</p></div>'+
    (['operations','development'].includes(key)?phaseView():'')+handoff(e.input,e.output)+entryBody(key);
}
function pendingView() {
  return crumbs('还有什么没定')+'<h2 id="view-title" tabindex="-1">还有什么没定</h2><p class="mission">先把影响第一笔测试订单的事情定下来。这里不表示这些事已经做好。</p><div class="task-list">'+decisions.map(item=>'<section class="task-item"><h3>'+escapeHtml(item[0])+'</h3><p>'+escapeHtml(item[1])+'</p><p><strong>找谁商量：</strong>'+escapeHtml(item[2])+'</p></section>').join('')+'</div>';
}
function journeyView() {
  return crumbs('跟着一笔订单看')+'<div class="detail-header"><h2 id="view-title" tabindex="-1">一条围巾，从准备到售后</h2><p>讲解用的例子。首月先做内部测试，实际商品和数量由团队确定。</p></div>'+stages.map((s,i)=>'<section class="journey-step"><h3>'+(i+1)+'. '+escapeHtml(s.short)+'：'+escapeHtml(s.title)+'</h3><p>'+escapeHtml(s.intro)+'</p>'+handoff(s.from.join(' · '),s.to.join(' · '))+'<p><strong>记在哪里：</strong>'+escapeHtml(s.record.join(' · '))+'</p><p class="small">'+escapeHtml(s.note)+'</p></section>').join('');
}
function validRoute(route) {
  if (['overview','pending','journey','development'].includes(route)||groups[route]) return true;
  const [type,key,parent,...rest]=route.split(':');
  return type==='detail'&&Boolean(entries[key])&&(!parent||Boolean(groups[parent]))&&!rest.length;
}
const scrollPositions = new Map();
let currentRoute='overview';
function render(focus=false) {
  const raw=location.hash.slice(1), route=validRoute(raw)?raw:'overview';
  currentRoute=route;
  if(route==='overview') view.innerHTML=overview();
  else if(groups[route]) view.innerHTML=groupView(route);
  else if(route==='pending') view.innerHTML=pendingView();
  else if(route==='journey') view.innerHTML=journeyView();
  else if(route==='development') view.innerHTML=detailView('development');
  else { const [,key,parent]=route.split(':'); view.innerHTML=detailView(key,parent); }
  if(focus) {
    document.getElementById('view-title').focus({preventScroll:true});
    scrollTo(0,scrollPositions.get(route)??Math.max(0,view.getBoundingClientRect().top+scrollY-20));
  }
}
document.addEventListener('click',event=>{
  const trigger=event.target.closest('[data-view]');
  if(!trigger)return;
  const route=trigger.dataset.view;
  if(!validRoute(route))return;
  scrollPositions.set(currentRoute,scrollY);
  location.hash=route;
});
window.addEventListener('hashchange',()=>render(true));
document.getElementById('percent').textContent=progressState.percent+'%';
document.getElementById('progress').value=progressState.percent;
document.getElementById('progress').textContent=progressState.percent+'%';
document.getElementById('estimate-note').textContent=progressState.note;
document.getElementById('updated').textContent='更新于 '+progressState.updated;
render();
