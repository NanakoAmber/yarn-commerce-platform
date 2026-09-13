const taskDefinitions = {
  firstProduct: ['选定首个闭环商品', '凯哥、李桑、龙梦柔', '确认一件具体商品及用于测试的样品，明确成品、材质和颜色规格。', '运营与小武能够识别同一商品及实物。'],
  productFacts: ['补齐规格、售价与供货依据', '选品组提供事实，团队确认售价', '整理材质、尺寸、颜色规格、售价、可供数量与供货说明。', '运营确认资料足够录入，仓库确认供货与库存依据。'],
  usableContent: ['备好商品图片与说明', '龙梦柔主导，凯哥共同确认版权', '提供与商品对应的图片、文字说明及可使用的来源依据。', '运营确认能够用于本次上架；涉及教程时确认对应来源与使用方式。'],
  handover: ['把完整资料交给运营', '选品与内容组 → 店铺运营', '把同一件商品的图片、说明、规格、售价与供货信息交齐。', '运营明确确认可进入上架与下单验证，P0 才解除阻塞。'],
  operator: ['确定运营经办人', '黄总公司（暂定）', '明确谁录入商品、谁检查订单与跟进异常，并落实后台权限。', '指定经办人能够进入所需页面并完成操作。'],
  listing: ['核对并上架首个测试商品', '店铺运营', '接收完整资料，录入 Shopify 并核对商品展示、规格与售价。', '测试人员能在网站找到该商品，规格与价格和确认资料一致。'],
  warehouse: ['确认仓库、实物与库存', '小武；凯哥小组交接采购到货', '确定中国仓或日本仓，核实样品、可用数量和库存回填方式。', '运营能查询到有实际依据的库存，双方确认库存管理方式。'],
  dispatch: ['试发货并回填物流', '小武 → 运营与客服', '按测试订单拣货、包装、试发货，回填发货数量、承运商和单号。', '运营与客服能在同一订单查到实际试发货结果。'],
  records: ['核对三份工作记录', '运营、小武、客服；开发支持', '检查商品档案、库存账与订单簿中各岗位需要的字段与入口。', '各岗位能定位同一商品与订单，读取和回填自己负责的事实。'],
  permissions: ['确认人员操作权限', '各经办人；开发支持', '明确商品、库存、订单和退款分别由谁操作，并验证所需权限。', '指定经办人能完成其岗位操作，退款审批与操作责任明确。'],
  purchase: ['跑通商品选择与下单', '内部测试人员；开发支持', '从网站找到首个测试商品、选择规格和数量，进入下单流程。', '运营能够定位生成的测试订单，商品、数量和配送信息正确。'],
  payment: ['完成支付测试', '运营与开发；支付经办人待明确', '确认适用的支付测试方式并执行，核对订单付款状态与异常反馈。', '测试结果可供运营核对；实施时另行确认涉及真实扣款的操作。'],
  support: ['跑通 LINE 咨询与查单', '黄总公司（暂定），接待人待指定', '确定客服账号与接待人，验证网站入口和订单查询。', '接待人能收到测试咨询并依据同一订单回复进展。'],
  aftercare: ['演练取消与退换货处理', '客服、小武及退款审批人', '演练取消、漏发、破损、退货等情形，明确钱与货各自的处理人。', '接手人确认能查到处理结果；真实退款操作另行确认。']
};
const groups = {
  prepare: { title:'商品与内容准备', priority:0, owner:'凯哥 · 李桑 · 龙梦柔', desc:'先让一个完整商品具备上架与测试条件。', tasks:['firstProduct','productFacts','usableContent','handover'], links:['selection','content'], input:'选品、样品、供应商资料与可用素材', output:'运营可直接接手的一份完整商品资料', related:['operations','warehouse'] },
  operations: { title:'店铺运营', priority:1, owner:'黄总公司（暂定）', desc:'整理上架，检查付款与订单。', tasks:['operator','listing'], links:['operations'], input:'商品与内容组交付的完整资料', output:'Shopify 商品档案；可供履约的测试订单', related:['shopify','warehouse'] },
  warehouse: { title:'仓储发货', priority:1, owner:'小武（HCL 小武）', desc:'核对库存，试发货并回填物流。', tasks:['warehouse','dispatch'], links:['warehouse'], input:'凯哥小组交接到货；订单提供待发内容', output:'库存与发货记录，供运营和客服查询', related:['shopify','service'] },
  shopify: { title:'Shopify', priority:1, owner:'运营 · 小武 · 客服按权限共用', desc:'商品档案、库存账、订单簿，在这里接续。', tasks:['records','permissions'], links:['product','inventory','order'], input:'运营录入商品，小武更新库存与物流', output:'网站读取商品与可售情况；团队查询订单', related:['customer','operations','warehouse','service'] },
  customer: { title:'顾客网站', priority:1, owner:'首月由内部测试人员验证', desc:'选规格、下单、支付测试与咨询。', tasks:['purchase','payment'], links:['product','order'], input:'Shopify 提供商品、价格与可售情况', output:'生成测试订单；网站入口跳转 LINE 咨询', related:['shopify','service'] },
  service: { title:'客服与售后', priority:1, owner:'黄总公司（暂定）', desc:'查单答复，协调实物问题与售后。', tasks:['support','aftercare'], links:['service'], input:'顾客咨询，以及订单与发货记录', output:'回复顾客，与小武核实异常，记录处理结果', related:['shopify','warehouse'] }
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
  const label = {ready:'已就绪',blocked:'未就绪',unknown:'待核实'}[status];
  return '<span class="badge state-'+status+(priority===0?' p0':'')+'">'+label+'</span>';
}
function badges(group) { return '<span class="badge priority'+group.priority+'">P'+group.priority+'</span>'+statusBadge(groupState(group),group.priority); }
function confirmedText(group) {
  const ready = group.tasks.filter(id => taskState(id)==='ready').length;
  return ready ? ready+' / '+group.tasks.length+' 项已确认就绪' : '查看 '+group.tasks.length+' 项任务与交付标准';
}
function node(id) {
  const g=groups[id], state=groupState(g);
  const color=state==='ready'?'ready':g.priority===0?'p0':state==='blocked'?'pending':id==='shopify'?'hub':'';
  return '<button class="node '+color+'" data-view="'+id+'"><span class="badge-row">'+badges(g)+(g.priority===0&&state!=='ready'?'<span class="badge priority0">当前主要阻塞</span>':'')+'</span><span class="node-heading"><span role="heading" aria-level="3">'+escapeHtml(g.title)+'</span>'+arrow+'</span><span class="owner">'+escapeHtml(g.owner)+'</span><span class="node-description">'+escapeHtml(g.desc)+'</span><span class="detail-hint">'+confirmedText(g)+'</span></button>';
}
function line(text) { return '<div class="flow-line">'+down+'<span>'+text+'</span></div>'; }
function overview() {
  return '<div class="map-title"><h2 tabindex="-1" id="view-title">先看阻塞，再看交接</h2><p>点击主体，逐层展开</p></div>'+
    node('prepare')+
    '<div class="split-links">'+line('交付核实后的商品资料')+line('交接商品规格与到货信息')+'</div>'+
    '<div class="split">'+node('operations')+node('warehouse')+'</div>'+
    '<div class="split-links">'+line('录入商品 · 检查订单')+line('更新库存 · 回填物流')+'</div>'+
    node('shopify')+
    '<div class="split-links">'+line('展示商品与库存 ↔ 下单')+line('查询订单 ↔ 记录售后')+'</div>'+
    '<div class="split">'+node('customer')+node('service')+'</div>'+
    '<p class="connection-note">顾客网站 → LINE 客服咨询<br>订单簿 → 小武查看待发内容；客服 ↔ 小武核实漏发、破损与退货。</p>';
}
function crumbs(label, parent) {
  return '<nav class="breadcrumbs" aria-label="当前位置"><button data-view="overview">总览</button>'+
    (parent?'<span aria-hidden="true">/</span><button data-view="'+parent+'">'+escapeHtml(groups[parent].title)+'</button>':'')+
    '<span aria-hidden="true">/</span><span aria-current="page">'+escapeHtml(label)+'</span></nav>';
}
function handoff(input, output) { return '<div class="handoff"><div><h3>接到什么</h3><p>'+escapeHtml(input)+'</p></div>'+arrow+'<div><h3>交给下一位什么</h3><p>'+escapeHtml(output)+'</p></div></div>'; }
function list(items) { return '<ul>'+items.map(item=>'<li>'+escapeHtml(item)+'</li>').join('')+'</ul>'; }
function groupView(id) {
  const g=groups[id];
  return crumbs(g.title)+'<div class="detail-header"><div class="badge-row">'+badges(g)+'</div><h2 id="view-title" tabindex="-1">'+g.title+'</h2><p>'+g.owner+'</p><p class="mission">'+g.desc+'</p></div>'+
    handoff(g.input,g.output)+'<h3>要完成的任务</h3><div class="task-list">'+g.tasks.map(key=>{
      const t=taskDefinitions[key], s=taskState(key), record=progressState.tasks[key];
      return '<details><summary>'+escapeHtml(t[0])+statusBadge(s,g.priority)+'</summary><p><strong>负责人：</strong>'+escapeHtml(t[1])+'</p><p><strong>交付：</strong>'+escapeHtml(t[2])+'</p><p><strong>接手确认标准：</strong>'+escapeHtml(t[3])+'</p>'+(record?.evidence?'<p><strong>确认记录：</strong>'+escapeHtml(record.evidence)+'</p>':'<p>完成情况尚无双方确认记录。</p>')+'</details>';
    }).join('')+'</div>'+
    '<h3>展开内部环节</h3><div class="detail-links">'+g.links.map(key=>'<button data-view="detail:'+key+':'+id+'">'+escapeHtml(entries[key].title)+arrow+'</button>').join('')+'</div>'+
    '<h3>继续看谁来接手</h3><div class="detail-links">'+g.related.map(key=>'<button data-view="'+key+'">'+groups[key].title+arrow+'</button>').join('')+'</div>';
}
function detailView(key, parent) {
  const e=entries[key];
  return crumbs(e.title,parent)+'<div class="detail-header"><h2 id="view-title" tabindex="-1">'+escapeHtml(e.title)+'</h2><p>'+escapeHtml(e.owner)+'</p><p class="mission">'+escapeHtml(e.mission)+'</p></div>'+
    handoff(e.input,e.output)+'<section class="plain-section"><h3>具体做什么</h3>'+list(e.work)+'</section>'+
    '<section class="plain-section"><h3>谁因此能继续工作</h3><p>'+escapeHtml(e.handoff)+'</p></section>'+
    '<div class="task-list"><details><summary>用一个具体例子理解</summary><p>'+escapeHtml(e.example)+'</p></details><details><summary>仍需确认的边界与决定</summary>'+list(e.pending)+'</details></div>'+
    (e.url?'<a href="'+escapeHtml(e.url)+'" target="_blank" rel="noopener">Shopify 官方说明</a>':'')+
    '<div class="detail-links">'+e.links.map(id=>'<button data-view="'+(id==='pending'?'pending':'detail:'+id+(parent?':'+parent:''))+'">'+escapeHtml(id==='pending'?'待确认事项':entries[id].title)+'</button>').join('')+'</div>';
}
function pendingView() { return crumbs('其他待确认决定')+'<h2 id="view-title" tabindex="-1">其他待确认决定</h2><p class="mission">这些事项保留原有讨论依据，具体优先级需按首月闭环判断。六个图中主体不等于此前尚未列明的“六项 MVP”。</p><div class="task-list">'+decisions.map(item=>'<details><summary>'+escapeHtml(item[0])+'</summary><p>'+escapeHtml(item[1])+'</p><p>'+escapeHtml(item[2])+'</p></details>').join('')+'</div>'; }
function journeyView() { return crumbs('跟着一笔订单看')+'<div class="detail-header"><h2 id="view-title" tabindex="-1">一条围巾，怎样完成一次交接？</h2><p>教学示例。首月按内部测试订单执行，实际商品与数量以团队确认结果为准。</p></div>'+stages.map((s,i)=>'<details class="journey-step"'+(i===0?' open':'')+'><summary>'+(i+1)+'. '+escapeHtml(s.short)+'</summary><h3>'+escapeHtml(s.title)+'</h3><p>'+escapeHtml(s.intro)+'</p>'+handoff(s.from.join(' · '),s.to.join(' · '))+'<p><strong>留下的记录：</strong>'+escapeHtml(s.record.join(' · '))+'</p><p>'+escapeHtml(s.note)+'</p><button class="text-link" data-view="detail:'+s.link+'">展开具体职责 '+arrow+'</button></details>').join(''); }
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
