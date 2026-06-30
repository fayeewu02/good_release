// ===== 全局数据 =====
const DATA = {
  orgs: [
    {id:'ORG001',name:'阳光基金会',level:1,parent1:'—',parent2:'—',memberCount:356,leader:'张三',phone:'13812341234',initCount:5,postCount:1200,location:'上海市浦东新区'},
    {id:'ORG002',name:'华东分会',level:2,parent1:'阳光基金会',parent2:'—',memberCount:120,leader:'李四',phone:'13956785678',initCount:3,postCount:450,location:'南京市鼓楼区'},
    {id:'ORG003',name:'社区A队',level:3,parent1:'阳光基金会',parent2:'华东分会',memberCount:45,leader:'王五',phone:'13790129012',initCount:2,postCount:180,location:'杭州市西湖区'},
    {id:'ORG004',name:'社区B队',level:3,parent1:'阳光基金会',parent2:'华东分会',memberCount:38,leader:'赵六',phone:'13634563456',initCount:2,postCount:95,location:'合肥市蜀山区'},
    {id:'ORG005',name:'绿色家园',level:1,parent1:'—',parent2:'—',memberCount:210,leader:'孙七',phone:'13578907890',initCount:4,postCount:680,location:'北京市海淀区'},
    {id:'ORG006',name:'华南分会',level:2,parent1:'绿色家园',parent2:'—',memberCount:88,leader:'钱八',phone:'13423452345',initCount:3,postCount:320,location:'广州市天河区'},
    {id:'ORG007',name:'华西分会',level:2,parent1:'阳光基金会',parent2:'—',memberCount:95,leader:'周九',phone:'13712349876',initCount:3,postCount:380,location:'成都市武侯区'},
    {id:'ORG008',name:'社区C队',level:3,parent1:'阳光基金会',parent2:'华西分会',memberCount:32,leader:'吴十',phone:'13823456789',initCount:1,postCount:110,location:'重庆市渝中区'},
    {id:'ORG009',name:'爱心联盟',level:1,parent1:'—',parent2:'—',memberCount:278,leader:'郑强',phone:'13934567890',initCount:6,postCount:920,location:'深圳市南山区'},
    {id:'ORG010',name:'华北分会',level:2,parent1:'爱心联盟',parent2:'—',memberCount:102,leader:'冯丽',phone:'13645678234',initCount:4,postCount:410,location:'天津市和平区'},
    {id:'ORG011',name:'志愿先锋队',level:3,parent1:'爱心联盟',parent2:'华北分会',memberCount:41,leader:'陈磊',phone:'13756789345',initCount:2,postCount:165,location:'石家庄市裕华区'},
    {id:'ORG012',name:'社区D队',level:3,parent1:'绿色家园',parent2:'华南分会',memberCount:29,leader:'黄静',phone:'13867890456',initCount:1,postCount:78,location:'佛山市禅城区'}
  ],
  nextOrgId: 13,
  initiatives: [
    {id:1,title:'社区清洁日',desc:'号召社区居民一起打扫公共区域，美化社区环境。拍照记录你的清洁行动！',color:'linear-gradient(135deg,#06B57A,#34D399)',orgCount:25,postCount:5234,createDate:'2026-06-10',isDraft:false},
    {id:2,title:'关爱独居老人',desc:'探访社区独居老人，陪伴聊天、帮助采购。用镜头记录温暖瞬间。',color:'linear-gradient(135deg,#FF8C42,#FBBF24)',orgCount:18,postCount:3890,createDate:'2026-06-05',isDraft:false},
    {id:3,title:'绿色出行周',desc:'本周选择步行、骑行或公共交通出行，减少碳排放。分享你的绿色出行方式！',color:'linear-gradient(135deg,#4A90D9,#60A5FA)',orgCount:20,postCount:2100,createDate:'2026-06-15',isDraft:false},
    {id:4,title:'节水行动周',desc:'记录每天的节水小妙招，倡导绿色生活方式，从身边做起。',color:'linear-gradient(135deg,#1ABC9C,#16A085)',orgCount:15,postCount:1560,createDate:'2026-06-18',isDraft:false},
    {id:5,title:'邻里互助日',desc:'帮助邻居解决生活中的小困难，分享温暖瞬间。',color:'linear-gradient(135deg,#E74C3C,#C0392B)',orgCount:22,postCount:2890,createDate:'2026-06-12',isDraft:false},
    {id:6,title:'旧衣回收计划',desc:'将闲置的旧衣服整理出来，捐给需要的人。',color:'linear-gradient(135deg,#9B59B6,#8E44AD)',orgCount:0,postCount:0,createDate:'2026-06-20',isDraft:true},
    {id:7,title:'社区读书会',desc:'每周组织一次社区读书分享活动。',color:'linear-gradient(135deg,#E67E22,#F39C12)',orgCount:0,postCount:0,createDate:'2026-06-22',isDraft:true}
  ],
  nextInitId: 8,
  // 帖子数据（用于倡议话题页）
  posts: [
    {id:1,initId:1,text:'今天和邻居们一起打扫了小区花园，大家忙得热火朝天...',user:'微信用户A',org:'阳光基金会',orgLevel:1,date:'2026-06-25 10:30',color:'linear-gradient(135deg,#A8E6CF,#DCEDC1)',status:'showing'},
    {id:2,initId:1,text:'带着孩子一起捡拾公园里的垃圾，言传身教最重要！',user:'微信用户B',org:'华东分会',orgLevel:2,date:'2026-06-25 09:15',color:'linear-gradient(135deg,#FFD3B6,#FFAAA5)',status:'showing'},
    {id:3,initId:1,text:'社区清洁日第三天，楼道焕然一新，大家都说好！',user:'微信用户C',org:'社区A队',orgLevel:3,date:'2026-06-24 16:20',color:'linear-gradient(135deg,#B5EAD7,#C7CEEA)',status:'showing'},
    {id:4,initId:1,text:'整理了社区活动室的书架，给图书重新分类整理。',user:'微信用户D',org:'社区B队',orgLevel:3,date:'2026-06-24 14:50',color:'linear-gradient(135deg,#E2F0CB,#FFDAC1)',status:'showing'},
    {id:5,initId:1,text:'周末参加了河边清理活动，捡了两大袋垃圾...',user:'微信用户E',org:'华南分会',orgLevel:2,date:'2026-06-26 08:30',color:'linear-gradient(135deg,#FFDAB9,#FFE4B5)',status:'pending'},
    {id:6,initId:1,text:'和小伙伴们清理了学校周边的小路，走路舒服多了！',user:'微信用户F',org:'社区A队',orgLevel:3,date:'2026-06-26 07:45',color:'linear-gradient(135deg,#D4E2D4,#CAD2C5)',status:'pending'},
    {id:7,initId:1,text:'组织了小区垃圾分类宣传，发放了100份传单',user:'微信用户H',org:'阳光基金会',orgLevel:1,date:'2026-06-23 15:00',color:'linear-gradient(135deg,#C5CAE9,#7986CB)',status:'pending'},
    {id:8,initId:1,text:'该帖子内容不符合社区规范...',user:'微信用户G',org:'华东分会',orgLevel:2,date:'2026-06-23 11:20',color:'#E8E8E8',status:'hidden'},
    {id:9,initId:1,text:'广告内容，已隐藏处理。',user:'微信用户I',org:'社区B队',orgLevel:3,date:'2026-06-22 09:10',color:'#E8E8E8',status:'hidden'},
    {id:10,initId:1,text:'清理了社区健身步道旁的杂草，大家锻炼更安全了！',user:'微信用户J',org:'华西分会',orgLevel:2,date:'2026-06-25 14:20',color:'linear-gradient(135deg,#B2DFDB,#80CBC4)',status:'showing'},
    {id:11,initId:1,text:'和物业一起维修了楼道照明灯，现在晚上回家亮堂多了。',user:'微信用户K',org:'社区C队',orgLevel:3,date:'2026-06-24 11:45',color:'linear-gradient(135deg,#BBDEFB,#90CAF9)',status:'showing'},
    {id:12,initId:2,text:'给独居的张奶奶送了新鲜蔬菜，陪她聊了很久。',user:'微信用户A',org:'阳光基金会',orgLevel:1,date:'2026-06-24 09:30',color:'linear-gradient(135deg,#FFE0B2,#FFCC80)',status:'showing'},
    {id:13,initId:2,text:'帮助社区83岁的李爷爷修好了漏水的水龙头。',user:'微信用户C',org:'社区A队',orgLevel:3,date:'2026-06-23 16:40',color:'linear-gradient(135deg,#F8BBD0,#F48FB1)',status:'showing'},
    {id:14,initId:2,text:'组织了社区关爱老人义诊活动，30多位老人参与。',user:'微信用户D',org:'华南分会',orgLevel:2,date:'2026-06-25 10:15',color:'linear-gradient(135deg,#D1C4E9,#B39DDB)',status:'pending'},
    {id:15,initId:3,text:'今天骑自行车上班，全程12公里，神清气爽！',user:'微信用户B',org:'华东分会',orgLevel:2,date:'2026-06-20 08:30',color:'linear-gradient(135deg,#C8E6C9,#A5D6A7)',status:'showing'},
    {id:16,initId:3,text:'带孩子坐公交去图书馆，沿途认识了好几种行道树。',user:'微信用户E',org:'绿色家园',orgLevel:1,date:'2026-06-19 14:20',color:'linear-gradient(135deg,#B3E5FC,#81D4FA)',status:'showing'},
    {id:17,initId:4,text:'今天用自制节水器改造了厨房水龙头，每分钟省水40%。',user:'微信用户F',org:'爱心联盟',orgLevel:1,date:'2026-06-20 11:30',color:'linear-gradient(135deg,#E0F2F1,#B2DFDB)',status:'showing'},
    {id:18,initId:4,text:'教孩子用洗菜水浇花，节水从娃娃抓起！',user:'微信用户J',org:'华北分会',orgLevel:2,date:'2026-06-21 15:45',color:'linear-gradient(135deg,#FFF9C4,#FFF59D)',status:'showing'},
    {id:19,initId:5,text:'帮隔壁刘阿姨修好了网络，教她用视频通话联系远方的儿子。',user:'微信用户K',org:'志愿先锋队',orgLevel:3,date:'2026-06-14 09:20',color:'linear-gradient(135deg,#FFCDD2,#EF9A9A)',status:'showing'},
    {id:20,initId:5,text:'社区邻里分享了自家种的蔬菜，满满的幸福感！',user:'微信用户A',org:'阳光基金会',orgLevel:1,date:'2026-06-13 17:30',color:'linear-gradient(135deg,#DCEDC8,#C5E1A5)',status:'showing'}
  ],
  nextPostId: 21,
  // 倡议与组织的关联数据（initId → 组织列表）
  initOrgs: {
    1: [ // 社区清洁日
      {orgId:'ORG001',orgName:'阳光基金会',level:1,location:'上海市浦东新区'},
      {orgId:'ORG002',orgName:'华东分会',level:2,location:'南京市鼓楼区'},
      {orgId:'ORG003',orgName:'社区A队',level:3,location:'杭州市西湖区'},
      {orgId:'ORG004',orgName:'社区B队',level:3,location:'合肥市蜀山区'},
      {orgId:'ORG005',orgName:'绿色家园',level:1,location:'北京市海淀区'},
      {orgId:'ORG006',orgName:'华南分会',level:2,location:'广州市天河区'},
      {orgId:'ORG007',orgName:'华西分会',level:2,location:'成都市武侯区'},
      {orgId:'ORG008',orgName:'社区C队',level:3,location:'重庆市渝中区'},
      {orgId:'ORG009',orgName:'爱心联盟',level:1,location:'深圳市南山区'},
      {orgId:'ORG010',orgName:'华北分会',level:2,location:'天津市和平区'},
      {orgId:'ORG011',orgName:'志愿先锋队',level:3,location:'石家庄市裕华区'},
      {orgId:'ORG012',orgName:'社区D队',level:3,location:'佛山市禅城区'}
    ],
    2: [ // 关爱独居老人
      {orgId:'ORG001',orgName:'阳光基金会',level:1,location:'上海市浦东新区'},
      {orgId:'ORG003',orgName:'社区A队',level:3,location:'杭州市西湖区'},
      {orgId:'ORG006',orgName:'华南分会',level:2,location:'广州市天河区'},
      {orgId:'ORG009',orgName:'爱心联盟',level:1,location:'深圳市南山区'}
    ],
    3: [ // 绿色出行周
      {orgId:'ORG002',orgName:'华东分会',level:2,location:'南京市鼓楼区'},
      {orgId:'ORG005',orgName:'绿色家园',level:1,location:'北京市海淀区'},
      {orgId:'ORG007',orgName:'华西分会',level:2,location:'成都市武侯区'}
    ],
    4: [ // 节水行动周
      {orgId:'ORG009',orgName:'爱心联盟',level:1,location:'深圳市南山区'},
      {orgId:'ORG010',orgName:'华北分会',level:2,location:'天津市和平区'}
    ],
    5: [ // 邻里互助日
      {orgId:'ORG001',orgName:'阳光基金会',level:1,location:'上海市浦东新区'},
      {orgId:'ORG005',orgName:'绿色家园',level:1,location:'北京市海淀区'},
      {orgId:'ORG009',orgName:'爱心联盟',level:1,location:'深圳市南山区'},
      {orgId:'ORG011',orgName:'志愿先锋队',level:3,location:'石家庄市裕华区'}
    ]
  },
  members: [
    {id:1,name:'张伟',role:'站长',phone:'13812345678'},
    {id:2,name:'李娜',role:'副站长',phone:'13923456789'},
    {id:3,name:'王芳',role:'志愿者组长',phone:'13734567890'},
    {id:4,name:'陈明',role:'项目专员',phone:'13645678901'},
    {id:5,name:'刘洋',role:'社工',phone:'13556789012'}
  ],
  nextMemberId: 6,
  currentTopicId: null,
  currentMemberOrg: null
};

// ===== 工具函数 =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('show');
  if (e.target.classList.contains('confirm-overlay')) e.target.classList.remove('show');
});

// ===== 子菜单展开/收起 =====
function toggleSubMenu(parentEl) {
  parentEl.classList.toggle('collapsed');
  const submenu = parentEl.nextElementSibling;
  if (submenu && submenu.classList.contains('nav-submenu')) {
    submenu.classList.toggle('show');
  }
}

// ===== 页面切换 =====
function switchPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('page-' + id).classList.add('active');
  const titles = {org:'体系管理',initiative:'好事发布器','data-center':'数据中心',quanmu:'劝募大使'};
  document.getElementById('breadcrumbPage').textContent = titles[id] || id;
  updateHeaderActions(id);
  if (id === 'org') renderOrgTable();
  if (id === 'initiative') renderInitiatives();
  if (id === 'data-center') setTimeout(initCharts, 100);
  if (id === 'quanmu') {} // 占位
}

function updateHeaderActions(id) {
  const ha = document.getElementById('headerActions');
  if (id === 'org') {
    ha.innerHTML = `<button class="btn" onclick="openModal('importOrgModal')">批量导入</button><button class="btn" onclick="exportOrgTable()">批量导出</button><button class="btn btn-primary" onclick="openCreateOrgModal()">＋ 新建组织</button>`;
  } else if (id === 'initiative') {
    ha.innerHTML = '';
  } else {
    ha.innerHTML = '';
  }
}

// ========================
// 分享组织二维码
// ========================
function openShareQRModal(orgId, orgName) {
  document.getElementById('shareQROrgName').textContent = orgName;
  document.getElementById('shareQRLink').value = 'https://gongyi.qq.com/org/' + orgId;
  // 绘制二维码（带小红花）
  drawOrgQRCode(orgId);
  openModal('shareQRModal');
}
function drawOrgQRCode(orgId) {
  const canvas = document.getElementById('shareQRCanvas');
  const ctx = canvas.getContext('2d');
  const size = 200;
  canvas.width = size;
  canvas.height = size;
  // 绘制模拟二维码图案
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#333';
  const cellSize = 6;
  const margin = 20;
  for (let r = 0; r < (size - margin*2) / cellSize; r++) {
    for (let c = 0; c < (size - margin*2) / cellSize; c++) {
      if (Math.random() > 0.5) {
        ctx.fillRect(margin + c * cellSize, margin + r * cellSize, cellSize - 1, cellSize - 1);
      }
    }
  }
  // 定位标记（三个角）
  drawFinderPattern(ctx, margin, margin);
  drawFinderPattern(ctx, size - margin - 7*cellSize, margin);
  drawFinderPattern(ctx, margin, size - margin - 7*cellSize);
  // 中心小红花
  drawRedFlower(ctx, size/2, size/2, 22);
}
function drawFinderPattern(ctx, x, y) {
  const s = 6;
  ctx.fillStyle = '#333';
  ctx.fillRect(x, y, s*7, s*7);
  ctx.fillStyle = '#fff';
  ctx.fillRect(x+s, y+s, s*5, s*5);
  ctx.fillStyle = '#333';
  ctx.fillRect(x+s*2, y+s*2, s*3, s*3);
}
function drawRedFlower(ctx, cx, cy, r) {
  // 白色底
  ctx.beginPath();
  ctx.arc(cx, cy, r + 4, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  // 花瓣
  ctx.fillStyle = '#E84C3D';
  const petals = 6;
  for (let i = 0; i < petals; i++) {
    const angle = (i / petals) * Math.PI * 2 - Math.PI / 2;
    const px = cx + Math.cos(angle) * r * 0.5;
    const py = cy + Math.sin(angle) * r * 0.5;
    ctx.beginPath();
    ctx.arc(px, py, r * 0.45, 0, Math.PI * 2);
    ctx.fill();
  }
  // 中心白点
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.22, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
}
function copyShareLink() {
  const link = document.getElementById('shareQRLink').value;
  navigator.clipboard?.writeText(link).then(() => showToast('链接已复制'));
  if (!navigator.clipboard) showToast('链接已复制');
}
function saveQRImage() {
  const canvas = document.getElementById('shareQRCanvas');
  const link = document.createElement('a');
  link.download = 'org-qrcode.png';
  link.href = canvas.toDataURL();
  link.click();
  showToast('二维码图片已保存');
}

// ========================
// 组织管理
// ========================
function getFilteredOrgs() {
  const l1 = document.getElementById('filterL1')?.value || '';
  const l2 = document.getElementById('filterL2')?.value || '';
  const l3 = document.getElementById('filterL3')?.value || '';
  const search = document.getElementById('orgSearch')?.value?.toLowerCase() || '';
  const showL1 = document.getElementById('chkL1')?.checked ?? true;
  const showL2 = document.getElementById('chkL2')?.checked ?? true;
  const showL3 = document.getElementById('chkL3')?.checked ?? true;

  return DATA.orgs.filter(o => {
    if (o.level === 1 && !showL1) return false;
    if (o.level === 2 && !showL2) return false;
    if (o.level === 3 && !showL3) return false;
    if (l1 && o.level === 1 && o.name !== l1) return false;
    if (l1 && o.level > 1 && o.parent1 !== l1) return false;
    if (l2 && o.level === 2 && o.name !== l2) return false;
    if (l2 && o.level > 2 && o.parent2 !== l2) return false;
    if (l3 && o.level === 3 && o.name !== l3) return false;
    if (search && !o.name.toLowerCase().includes(search) && !o.leader.toLowerCase().includes(search) && !o.id.toLowerCase().includes(search)) return false;
    return true;
  });
}

function renderOrgTable() {
  const filtered = getFilteredOrgs();
  const tbody = document.getElementById('orgTableBody');
  if (!tbody) return;
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text-hint)">没有找到匹配的组织</td></tr>`;
    return;
  }
  tbody.innerHTML = filtered.map(o => `
    <tr data-id="${o.id}">
      <td>${o.id}</td>
      <td style="font-weight:${o.level===1?'600':'400'}">${o.name}</td>
      <td><span class="layer-tag layer-${o.level}">${['一','二','三'][o.level-1]}级</span></td>
      <td>${o.parent1}</td><td>${o.parent2}</td>
      <td>${o.memberCount}</td><td>${o.leader}</td><td>${o.phone.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2')}</td>
      <td class="actions-cell">
        <a class="btn-link" onclick="openShareQRModal('${o.id}','${o.name}')">分享二维码</a>
        <a class="btn-link" onclick="openEditOrgModal('${o.id}')">编辑</a>
        <a class="btn-link" onclick="switchToMember('${o.id}','${o.name}')">成员管理</a>
        <a class="btn-link btn-danger" onclick="confirmDeleteOrg('${o.id}')">删除</a>
      </td>
    </tr>`).join('');
  document.getElementById('orgCount').textContent = `共 ${filtered.length} 个组织`;
}

function updateL2Options() {
  const l1 = document.getElementById('filterL1').value;
  const l2Select = document.getElementById('filterL2');
  const l2Orgs = DATA.orgs.filter(o => o.level === 2 && (!l1 || o.parent1 === l1));
  l2Select.innerHTML = '<option value="">全部</option>' + l2Orgs.map(o => `<option>${o.name}</option>`).join('');
  l2Select.value = '';
  updateL3Options();
}
function updateL3Options() {
  const l1 = document.getElementById('filterL1').value;
  const l2 = document.getElementById('filterL2').value;
  const l3Select = document.getElementById('filterL3');
  const l3Orgs = DATA.orgs.filter(o => o.level === 3 && (!l1 || o.parent1 === l1) && (!l2 || o.parent2 === l2));
  l3Select.innerHTML = '<option value="">全部</option>' + l3Orgs.map(o => `<option>${o.name}</option>`).join('');
  l3Select.value = '';
}

function openCreateOrgModal() {
  document.getElementById('createOrgForm').reset();
  // 默认为一级组织
  document.getElementById('isTopLevelSwitch').checked = true;
  document.getElementById('parentOrgGroup').style.display = 'none';
  document.getElementById('newOrgParent').value = '';
  document.getElementById('parentOrgSearch').value = '';
  document.getElementById('parentOrgDropdown').style.display = 'none';
  // 显示层级提示
  document.getElementById('orgLevelHint').style.display = 'block';
  document.getElementById('orgLevelHintText').textContent = '当前创建组织为一级组织';
  openModal('createOrgModal');
}

function toggleTopLevelOrg() {
  const isTopLevel = document.getElementById('isTopLevelSwitch').checked;
  const parentGroup = document.getElementById('parentOrgGroup');
  const levelHint = document.getElementById('orgLevelHint');
  if (isTopLevel) {
    parentGroup.style.display = 'none';
    document.getElementById('newOrgParent').value = '';
    document.getElementById('parentOrgSearch').value = '';
    levelHint.style.display = 'block';
    document.getElementById('orgLevelHintText').textContent = '当前创建组织为一级组织';
  } else {
    parentGroup.style.display = 'block';
    levelHint.style.display = 'none';
    document.getElementById('newOrgParent').value = '';
    document.getElementById('parentOrgSearch').value = '';
    renderParentOrgDropdown('');
  }
}

function filterParentOrgs() {
  const keyword = document.getElementById('parentOrgSearch').value.trim();
  renderParentOrgDropdown(keyword);
  document.getElementById('parentOrgDropdown').style.display = 'block';
}

function showParentDropdown() {
  const keyword = document.getElementById('parentOrgSearch').value.trim();
  renderParentOrgDropdown(keyword);
  document.getElementById('parentOrgDropdown').style.display = 'block';
}

function renderParentOrgDropdown(keyword) {
  const dropdown = document.getElementById('parentOrgDropdown');
  const candidates = DATA.orgs.filter(o => o.level <= 2);
  const filtered = keyword ? candidates.filter(o => o.name.toLowerCase().includes(keyword.toLowerCase())) : candidates;
  if (filtered.length === 0) {
    dropdown.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-hint);text-align:center;">未找到匹配的组织</div>';
  } else {
    dropdown.innerHTML = filtered.map(o =>
      `<div class="parent-org-option" style="padding:8px 12px;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:6px;${o.level>1?'padding-left:28px':''}" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background=''" onclick="selectParentOrg('${o.name}',${o.level})">
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三'[o.level-1]}级</span>
        <span>${o.name}</span>
      </div>`
    ).join('');
  }
}

function selectParentOrg(name, level) {
  document.getElementById('newOrgParent').value = name;
  document.getElementById('parentOrgSearch').value = name;
  document.getElementById('parentOrgDropdown').style.display = 'none';
  // 显示层级提示
  const newLevel = level + 1;
  if (newLevel > 3) {
    document.getElementById('orgLevelHint').style.display = 'block';
    document.getElementById('orgLevelHintText').textContent = '最多支持三级组织，请重新选择上级';
    document.querySelector('#orgLevelHint > div').style.background = '#FFF2E8';
    document.querySelector('#orgLevelHint > div').style.color = '#D4380D';
  } else {
    document.getElementById('orgLevelHint').style.display = 'block';
    document.getElementById('orgLevelHintText').textContent = `当前创建组织为${'一二三'[newLevel-1]}级组织`;
    document.querySelector('#orgLevelHint > div').style.background = '#E6F7FF';
    document.querySelector('#orgLevelHint > div').style.color = '#1890FF';
  }
}

// 点击其他区域关闭下拉
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('parentOrgDropdown');
  const searchInput = document.getElementById('parentOrgSearch');
  if (dropdown && searchInput && !dropdown.contains(e.target) && e.target !== searchInput) {
    dropdown.style.display = 'none';
  }
});

function submitCreateOrg() {
  const name = document.getElementById('newOrgName').value.trim();
  const isTopLevel = document.getElementById('isTopLevelSwitch').checked;
  const parent = document.getElementById('newOrgParent').value;
  const leader = document.getElementById('newOrgLeader').value.trim();
  const phone = document.getElementById('newOrgPhone').value.trim();
  const location = document.getElementById('newOrgLocation').value.trim();
  if (!name || !leader || !phone || !location) { showToast('请填写所有必填项'); return; }
  if (!isTopLevel && !parent) { showToast('请选择归属上级组织'); return; }
  let level = 1, p1 = '—', p2 = '—';
  if (!isTopLevel && parent) {
    const pOrg = DATA.orgs.find(o => o.name === parent);
    if (!pOrg) { showToast('未找到所选上级组织'); return; }
    level = pOrg.level + 1;
    if (level > 3) { showToast('最多支持三级组织'); return; }
    p1 = pOrg.level === 1 ? pOrg.name : pOrg.parent1;
    p2 = pOrg.level === 2 ? pOrg.name : (pOrg.level === 1 ? '—' : pOrg.parent2);
  }
  const newOrg = {id:'ORG'+String(DATA.nextOrgId++).padStart(3,'0'),name,level,parent1:p1,parent2:p2,memberCount:0,leader,phone,initCount:0,postCount:0,location};
  DATA.orgs.push(newOrg);
  closeModal('createOrgModal');
  renderOrgTable();
  showToast(`组织「${name}」创建成功（${'一二三'[level-1]}级组织）`);
}

function openEditOrgModal(id) {
  const o = DATA.orgs.find(x => x.id === id);
  if (!o) return;
  document.getElementById('editOrgId').value = o.id;
  document.getElementById('editOrgName').value = o.name;
  document.getElementById('editOrgLeader').value = o.leader;
  document.getElementById('editOrgPhone').value = o.phone;
  document.getElementById('editOrgLocation').value = o.location;
  const parentSelect = document.getElementById('editOrgParent');
  parentSelect.innerHTML = '<option value="">一级组织（无上级）</option>';
  DATA.orgs.filter(x => x.level <= 2 && x.id !== id).forEach(x => {
    parentSelect.innerHTML += `<option value="${x.name}">${x.name}</option>`;
  });
  const currentParent = o.level === 2 ? o.parent1 : o.level === 3 ? o.parent2 : '';
  parentSelect.value = currentParent || '';
  openModal('editOrgModal');
}

function submitEditOrg() {
  const id = document.getElementById('editOrgId').value;
  const o = DATA.orgs.find(x => x.id === id);
  if (!o) return;
  const name = document.getElementById('editOrgName').value.trim();
  const leader = document.getElementById('editOrgLeader').value.trim();
  const phone = document.getElementById('editOrgPhone').value.trim();
  const location = document.getElementById('editOrgLocation').value.trim();
  if (!name || !leader || !phone || !location) { showToast('请填写所有必填项'); return; }
  o.name = name; o.leader = leader; o.phone = phone; o.location = location;
  closeModal('editOrgModal');
  renderOrgTable();
  showToast(`组织「${name}」信息已更新`);
}

let pendingDeleteOrgId = null;
function confirmDeleteOrg(id) {
  pendingDeleteOrgId = id;
  document.getElementById('confirmOverlay').classList.add('show');
}
function executeDeleteOrg() {
  if (!pendingDeleteOrgId) return;
  const idx = DATA.orgs.findIndex(o => o.id === pendingDeleteOrgId);
  const name = DATA.orgs[idx]?.name;
  if (idx > -1) DATA.orgs.splice(idx, 1);
  pendingDeleteOrgId = null;
  document.getElementById('confirmOverlay').classList.remove('show');
  renderOrgTable();
  showToast(`组织「${name}」已删除`);
}

function exportOrgTable() {
  const filtered = getFilteredOrgs();
  showToast(`已导出 ${filtered.length} 个组织数据`);
}

// ========================
// 成员管理
// ========================
function switchToMember(orgId, orgName) {
  DATA.currentMemberOrg = orgId;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-member').classList.add('active');
  document.getElementById('breadcrumbPage').textContent = '体系管理 / ' + orgName + ' · 成员管理';
  document.getElementById('memberOrgTitle').textContent = orgName + ' · 成员管理';
  document.getElementById('headerActions').innerHTML = '';
  renderMembers();
}
function backToOrg() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-org').classList.add('active');
  document.getElementById('breadcrumbPage').textContent = '体系管理';
  updateHeaderActions('org');
  renderOrgTable();
}
function renderMembers() {
  const tbody = document.getElementById('memberTableBody');
  if (DATA.members.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:30px;color:var(--text-hint)">暂无成员，请点击右上角"新增成员"添加</td></tr>`;
    return;
  }
  tbody.innerHTML = DATA.members.map(m => `
    <tr><td>${m.name}</td><td>${m.role}</td><td>${m.phone.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2')}</td>
    <td class="actions-cell">
      <a class="btn-link" onclick="openEditMemberModal(${m.id})">编辑</a>
      <a class="btn-link btn-danger" onclick="removeMember(${m.id})">移除</a>
    </td></tr>`).join('');
}
function removeMember(id) {
  const idx = DATA.members.findIndex(m => m.id === id);
  if (idx > -1) {
    const name = DATA.members[idx].name;
    DATA.members.splice(idx, 1);
    renderMembers();
    showToast(`已移除成员「${name}」`);
  }
}
function openAddMemberModal() {
  document.getElementById('addMemberForm').reset();
  openModal('addMemberModal');
}
function submitAddMember() {
  const name = document.getElementById('addMemberName').value.trim();
  const role = document.getElementById('addMemberRole').value.trim();
  const phone = document.getElementById('addMemberPhone').value.trim();
  if (!name || !role || !phone) { showToast('请填写所有必填项'); return; }
  DATA.members.push({ id: DATA.nextMemberId++, name, role, phone });
  closeModal('addMemberModal');
  renderMembers();
  showToast(`成员「${name}」已添加`);
}
function openEditMemberModal(id) {
  const m = DATA.members.find(x => x.id === id);
  if (!m) return;
  document.getElementById('editMemberId').value = m.id;
  document.getElementById('editMemberName').value = m.name;
  document.getElementById('editMemberRole').value = m.role;
  document.getElementById('editMemberPhone').value = m.phone;
  openModal('editMemberModal');
}
function submitEditMember() {
  const id = parseInt(document.getElementById('editMemberId').value);
  const m = DATA.members.find(x => x.id === id);
  if (!m) return;
  const name = document.getElementById('editMemberName').value.trim();
  const role = document.getElementById('editMemberRole').value.trim();
  const phone = document.getElementById('editMemberPhone').value.trim();
  if (!name || !role || !phone) { showToast('请填写所有必填项'); return; }
  m.name = name; m.role = role; m.phone = phone;
  closeModal('editMemberModal');
  renderMembers();
  showToast(`成员「${name}」信息已更新`);
}

// ========================
// 好事发布器（倡议管理）
// ========================
function getFilteredInitiatives() {
  const dateFrom = document.getElementById('initDateFrom')?.value || '';
  const dateTo = document.getElementById('initDateTo')?.value || '';
  const search = document.getElementById('initSearch')?.value?.toLowerCase() || '';
  const orgFilter = document.getElementById('initOrgFilter')?.value || '';
  return DATA.initiatives.filter(i => {
    if (i.isDraft) return false;
    if (dateFrom && i.createDate < dateFrom) return false;
    if (dateTo && i.createDate > dateTo) return false;
    if (search && !i.title.toLowerCase().includes(search) && !i.desc.toLowerCase().includes(search)) return false;
    if (orgFilter) {
      // 根据帖子中关联的组织来筛选
      const initPosts = DATA.posts.filter(p => p.initId === i.id);
      const initOrgs = new Set(initPosts.map(p => p.org));
      if (!initOrgs.has(orgFilter)) return false;
    }
    return true;
  });
}

// 好事发布器 - 发起组织搜索筛选
function showInitOrgDropdown() {
  renderInitOrgDropdown(document.getElementById('initOrgSearch').value.trim());
  document.getElementById('initOrgDropdown').style.display = 'block';
}
function filterInitOrgDropdown() {
  renderInitOrgDropdown(document.getElementById('initOrgSearch').value.trim());
  document.getElementById('initOrgDropdown').style.display = 'block';
  document.getElementById('initOrgFilter').value = '';
  renderInitiatives();
}
function renderInitOrgDropdown(keyword) {
  const dropdown = document.getElementById('initOrgDropdown');
  const filtered = keyword ? DATA.orgs.filter(o => o.name.toLowerCase().includes(keyword.toLowerCase())) : DATA.orgs;
  if (filtered.length === 0) {
    dropdown.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-hint);text-align:center;">未找到匹配的组织</div>';
  } else {
    dropdown.innerHTML = '<div style="padding:6px 12px;font-size:11px;color:var(--text-hint);cursor:pointer;border-bottom:1px solid #f0f0f0" onclick="selectInitOrg(\'\',\'\')">全部组织</div>' + filtered.map(o =>
      `<div style="padding:6px 12px;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:6px" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background=''" onclick="selectInitOrg('${o.name}','${o.name}')">
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三'[o.level-1]}级</span>
        <span>${o.name}</span>
      </div>`
    ).join('');
  }
}
function selectInitOrg(value, display) {
  document.getElementById('initOrgFilter').value = value;
  document.getElementById('initOrgSearch').value = display;
  document.getElementById('initOrgDropdown').style.display = 'none';
  renderInitiatives();
}

function renderInitiatives() {
  const filtered = getFilteredInitiatives();
  const grid = document.getElementById('initGrid');
  if (!grid) return;
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>没有找到匹配的倡议</p></div>`;
  } else {
    grid.innerHTML = filtered.map(i => {
      const pendingCount = DATA.posts.filter(p => p.initId === i.id && p.status === 'pending').length;
      return `
      <div class="init-card" onclick="switchToTopic(${i.id})">
        <div class="cover" style="background:${i.color};position:relative">
        </div>
        <div class="body">
          <h4>${i.title}</h4>
          <div class="desc">${i.desc}</div>
          <div class="foot"><div class="metrics"><span>${i.orgCount}个组织</span><span>${i.postCount.toLocaleString()}条</span>${pendingCount > 0 ? `<span class="pending-text-badge">${pendingCount}条待审核</span>` : ''}</div><a class="btn-link" onclick="event.stopPropagation();openEditInitModal(${i.id})" style="font-size:12px">编辑</a></div>
        </div>
      </div>`;
    }).join('');
  }
  renderDrafts();
}

function renderDrafts() {
  const drafts = DATA.initiatives.filter(i => i.isDraft);
  const bar = document.getElementById('draftBar');
  const panel = document.getElementById('draftPanel');
  if (!bar) return;
  bar.textContent = `草稿箱 (${drafts.length})`;
  if (drafts.length === 0) { bar.style.display = 'none'; panel.classList.remove('show'); return; }
  bar.style.display = 'inline-flex';
  bar.className = 'btn';
  // 草稿图卡视图
  panel.querySelector('.draft-list').innerHTML = `<div class="initiative-grid" style="margin-bottom:0">${drafts.map(d => `
    <div class="init-card" style="cursor:default">
      <div class="cover" style="background:${d.color};position:relative">
        <div style="position:absolute;top:8px;left:8px;background:rgba(0,0,0,.5);color:#fff;font-size:10px;padding:2px 8px;border-radius:10px">草稿</div>
      </div>
      <div class="body">
        <h4>${d.title}</h4>
        <div class="desc">${d.desc || '暂无描述'}</div>
        <div class="foot">
          <span style="font-size:11px;color:var(--text-hint)">创建于 ${d.createDate}</span>
          <div style="display:flex;gap:8px">
            <a class="btn-link" onclick="editDraft(${d.id})" style="font-size:12px">编辑</a>
            <a class="btn-link btn-danger" onclick="deleteDraft(${d.id})" style="font-size:12px">删除</a>
          </div>
        </div>
      </div>
    </div>`).join('')}</div>`;
}

function toggleDrafts() {
  const panel = document.getElementById('draftPanel');
  const initGrid = document.getElementById('initGrid');
  if (panel.classList.contains('show')) {
    // 关闭草稿箱，显示正常倡议
    panel.classList.remove('show');
    initGrid.style.display = '';
  } else {
    // 打开草稿箱，隐藏正常倡议
    panel.classList.add('show');
    initGrid.style.display = 'none';
  }
}

function editDraft(id) {
  const d = DATA.initiatives.find(i => i.id === id);
  if (!d) return;
  document.getElementById('createInitTitle').value = d.title;
  document.getElementById('createInitDesc').value = d.desc;
  document.getElementById('createInitLocation').value = d.location || '';
  document.getElementById('createInitEditId').value = d.id;
  document.getElementById('createInitModalTitle').textContent = '编辑草稿';
  document.getElementById('batchSwitch').checked = false;
  document.getElementById('batchOrgSection').style.display = 'none';
  document.getElementById('coverPreview').innerHTML = `<div style="width:100%;height:100%;background:${d.color};border-radius:var(--radius)"></div><input type="file" accept="image/*" onchange="handleCoverUpload(this)">`;
  openModal('createInitModal');
}

function deleteDraft(id) {
  const idx = DATA.initiatives.findIndex(i => i.id === id);
  if (idx > -1) {
    DATA.initiatives.splice(idx, 1);
    renderInitiatives();
    showToast('草稿已删除');
  }
}

function openCreateInitModal() {
  document.getElementById('createInitForm').reset();
  document.getElementById('createInitEditId').value = '';
  document.getElementById('createInitModalTitle').textContent = '发起倡议';
  document.getElementById('batchSwitch').checked = false;
  document.getElementById('batchOrgSection').style.display = 'none';
  document.getElementById('coverPreview').innerHTML = '点击上传<input type="file" accept="image/*" onchange="handleCoverUpload(this)">';
  openModal('createInitModal');
}

function toggleBatchOrg() {
  document.getElementById('batchOrgSection').style.display = document.getElementById('batchSwitch').checked ? 'block' : 'none';
}

function handleCoverUpload(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById('coverPreview').innerHTML = `<img src="${e.target.result}">`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function submitCreateInit() {
  const title = document.getElementById('createInitTitle').value.trim();
  const desc = document.getElementById('createInitDesc').value.trim();
  const location = document.getElementById('createInitLocation')?.value?.trim() || '';
  if (!title || !desc) { showToast('请填写倡议主题和说明'); return; }
  const editId = document.getElementById('createInitEditId').value;
  const colors = ['linear-gradient(135deg,#06B57A,#34D399)','linear-gradient(135deg,#FF8C42,#FBBF24)','linear-gradient(135deg,#4A90D9,#60A5FA)','linear-gradient(135deg,#9B59B6,#8E44AD)','linear-gradient(135deg,#E67E22,#F39C12)','linear-gradient(135deg,#1ABC9C,#16A085)'];
  const isBatch = document.getElementById('batchSwitch').checked;
  const checkedOrgs = document.querySelectorAll('#batchOrgList input[type="checkbox"]:checked');
  const orgCount = isBatch ? checkedOrgs.length : 1;

  if (editId) {
    const existing = DATA.initiatives.find(i => i.id === parseInt(editId));
    if (existing) { existing.title = title; existing.desc = desc; existing.location = location; existing.isDraft = false; existing.orgCount = orgCount; }
  } else {
    DATA.initiatives.push({
      id: DATA.nextInitId++, title,
      desc, location, color: colors[Math.floor(Math.random()*colors.length)],
      orgCount, postCount: 0, createDate: new Date().toISOString().slice(0,10), isDraft: false
    });
  }
  closeModal('createInitModal');
  if (isBatch && orgCount > 0) {
    // 记录最近批量发起的信息，用于直接导出二维码
    const orgNames = [];
    checkedOrgs.forEach(cb => {
      const label = cb.closest('label');
      if (label) orgNames.push(label.textContent.trim());
    });
    lastBatchInit = { title, orgCount, orgNames };
    document.getElementById('successOrgCount').textContent = orgCount;
    document.getElementById('successInitTitle').textContent = title;
    openModal('initSuccessModal');
  } else {
    showToast(`倡议「${title}」发起成功`);
  }
  renderInitiatives();
}

function saveDraftInit() {
  const title = document.getElementById('createInitTitle').value.trim() || '未命名倡议';
  const desc = document.getElementById('createInitDesc').value.trim() || '';
  const location = document.getElementById('createInitLocation')?.value?.trim() || '';
  const editId = document.getElementById('createInitEditId').value;
  if (editId) {
    const existing = DATA.initiatives.find(i => i.id === parseInt(editId));
    if (existing) { existing.title = title; existing.desc = desc; existing.location = location; }
  } else {
    DATA.initiatives.push({
      id: DATA.nextInitId++, title, desc, location,
      color:'linear-gradient(135deg,#95A5A6,#7F8C8D)', orgCount:0, postCount:0,
      createDate: new Date().toISOString().slice(0,10), isDraft: true
    });
  }
  closeModal('createInitModal');
  renderInitiatives();
  showToast('已保存到草稿箱');
}

// ========================
// 编辑倡议
// ========================
function openEditInitModal(id) {
  const init = DATA.initiatives.find(i => i.id === id);
  if (!init) return;
  document.getElementById('editInitId').value = init.id;
  document.getElementById('editInitTitle').value = init.title;
  document.getElementById('editInitDesc').value = init.desc;
  document.getElementById('editInitLocation').value = init.location || '';
  // 封面预览显示颜色渐变
  const coverEl = document.getElementById('editCoverPreview');
  coverEl.innerHTML = `<div style="width:100%;height:100%;background:${init.color};border-radius:var(--radius)"></div><input type="file" accept="image/*" onchange="handleEditCoverUpload(this)">`;
  // 默认切到基本信息 Tab
  switchEditInitTab('basic');
  // 更新组织管理 Tab badge
  updateOrgMgmtBadge(id);
  openModal('editInitModal');
}

function handleEditCoverUpload(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById('editCoverPreview').innerHTML = `<img src="${e.target.result}"><input type="file" accept="image/*" onchange="handleEditCoverUpload(this)">`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function submitEditInit() {
  const id = parseInt(document.getElementById('editInitId').value);
  const init = DATA.initiatives.find(i => i.id === id);
  if (!init) return;
  const title = document.getElementById('editInitTitle').value.trim();
  const desc = document.getElementById('editInitDesc').value.trim();
  const location = document.getElementById('editInitLocation').value.trim();
  if (!title || !desc) { showToast('请填写倡议主题和说明'); return; }
  init.title = title;
  init.desc = desc;
  init.location = location;
  closeModal('editInitModal');
  renderInitiatives();
  showToast(`倡议「${title}」已更新`);
}

// ========================
// 倡议话题页
// ========================
function switchToTopic(initId) {
  DATA.currentTopicId = initId;
  const init = DATA.initiatives.find(i => i.id === initId);
  if (!init) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-topic').classList.add('active');
  document.getElementById('breadcrumbPage').textContent = '好事发布器 / ' + init.title;
  document.getElementById('headerActions').innerHTML = '';
  document.getElementById('topicTitle').textContent = init.title;
  document.getElementById('topicDesc').textContent = init.desc;
  document.getElementById('topicBg').style.backgroundImage = init.color.startsWith('linear') ? init.color : `url(${init.color})`;
  renderTopicStats();
  switchPostTab('showing');
}

function getTopicFilters() {
  const levelFilter = document.getElementById('topicLevelFilter')?.value || '';
  const orgFilter = document.getElementById('topicOrgFilter')?.value || '';
  const dateFrom = document.getElementById('topicDateFrom')?.value || '';
  const dateTo = document.getElementById('topicDateTo')?.value || '';
  const contentSearch = document.getElementById('topicContentSearch')?.value?.toLowerCase() || '';
  return { levelFilter, orgFilter, dateFrom, dateTo, contentSearch };
}

function filterTopicPosts(includeContent) {
  const initId = DATA.currentTopicId;
  const { levelFilter, orgFilter, dateFrom, dateTo, contentSearch } = getTopicFilters();
  return DATA.posts.filter(p => {
    if (p.initId !== initId) return false;
    if (levelFilter && p.orgLevel !== parseInt(levelFilter)) return false;
    if (orgFilter && p.org !== orgFilter) return false;
    const pDate = p.date.slice(0,10);
    if (dateFrom && pDate < dateFrom) return false;
    if (dateTo && pDate > dateTo) return false;
    if (includeContent && contentSearch && !p.text.toLowerCase().includes(contentSearch)) return false;
    return true;
  });
}

function renderTopicStats() {
  const initId = DATA.currentTopicId;
  const init = DATA.initiatives.find(i => i.id === initId);
  const { levelFilter, orgFilter, dateFrom, dateTo } = getTopicFilters();
  const filteredPosts = filterTopicPosts(false);
  // 统计组织数
  const orgs = new Set(filteredPosts.map(p => p.org));
  const hasFilter = levelFilter || orgFilter || dateFrom || dateTo;
  const orgCount = orgs.size > 0 ? orgs.size : (hasFilter ? 0 : (init?.orgCount || 0));
  document.getElementById('topicOrgCount').textContent = orgCount;
  // 统计参与人数
  const users = new Set(filteredPosts.map(p => p.user));
  document.getElementById('topicUserCount').textContent = users.size > 0 ? users.size.toLocaleString() : (hasFilter ? '0' : (init?.orgCount * 50 || 0).toLocaleString());
  // 统计发帖数
  document.getElementById('topicPostCount').textContent = filteredPosts.filter(p => p.status === 'showing').length.toLocaleString();
}

// 话题页组织搜索下拉
function showTopicOrgDropdown() {
  renderTopicOrgDropdown(document.getElementById('topicOrgSearch').value.trim());
  document.getElementById('topicOrgDropdown').style.display = 'block';
}
function filterTopicOrgDropdown() {
  renderTopicOrgDropdown(document.getElementById('topicOrgSearch').value.trim());
  document.getElementById('topicOrgDropdown').style.display = 'block';
  // 清空已选组织如果搜索框改变
  document.getElementById('topicOrgFilter').value = '';
  onTopicFilterChange();
}
function renderTopicOrgDropdown(keyword) {
  const dropdown = document.getElementById('topicOrgDropdown');
  const filtered = keyword ? DATA.orgs.filter(o => o.name.toLowerCase().includes(keyword.toLowerCase())) : DATA.orgs;
  if (filtered.length === 0) {
    dropdown.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-hint);text-align:center;">未找到匹配的组织</div>';
  } else {
    dropdown.innerHTML = '<div style="padding:6px 12px;font-size:11px;color:var(--text-hint);cursor:pointer;border-bottom:1px solid #f0f0f0" onclick="selectTopicOrg(\'\',\'\')">全部组织</div>' + filtered.map(o =>
      `<div style="padding:6px 12px;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:6px" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background=''" onclick="selectTopicOrg('${o.name}','${o.name}')">
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三'[o.level-1]}级</span>
        <span>${o.name}</span>
      </div>`
    ).join('');
  }
}
function selectTopicOrg(value, display) {
  document.getElementById('topicOrgFilter').value = value;
  document.getElementById('topicOrgSearch').value = display;
  document.getElementById('topicOrgDropdown').style.display = 'none';
  onTopicFilterChange();
}
// 关闭下拉
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('topicOrgDropdown');
  const searchInput = document.getElementById('topicOrgSearch');
  if (dropdown && searchInput && !dropdown.contains(e.target) && e.target !== searchInput) {
    dropdown.style.display = 'none';
  }
});
function onTopicFilterChange() {
  renderTopicStats();
  renderPosts();
}

function getFilteredPosts(status) {
  const initId = DATA.currentTopicId;
  const { levelFilter, orgFilter, dateFrom, dateTo, contentSearch } = getTopicFilters();
  return DATA.posts.filter(p => {
    if (p.initId !== initId) return false;
    if (p.status !== status) return false;
    if (levelFilter && p.orgLevel !== parseInt(levelFilter)) return false;
    if (orgFilter && p.org !== orgFilter) return false;
    const pDate = p.date.slice(0,10);
    if (dateFrom && pDate < dateFrom) return false;
    if (dateTo && pDate > dateTo) return false;
    if (contentSearch && !p.text.toLowerCase().includes(contentSearch)) return false;
    return true;
  });
}

let currentPostTab = 'showing';
let currentPostView = 'list'; // 'list' or 'card'
let postCurrentPage = 1;
let postPageSize = 20;
let selectedPostIds = new Set();

function switchPostTab(status) {
  currentPostTab = status;
  postCurrentPage = 1;
  selectedPostIds.clear();
  document.querySelectorAll('#postTabs .tab').forEach(t => t.classList.remove('active'));
  const tabs = document.querySelectorAll('#postTabs .tab');
  const idx = {showing:0,pending:1,hidden:2}[status];
  if (tabs[idx]) tabs[idx].classList.add('active');
  renderPosts();
}

function togglePostView() {
  currentPostView = currentPostView === 'list' ? 'card' : 'list';
  postCurrentPage = 1;
  selectedPostIds.clear();
  updateViewToggleBtn();
  renderPosts();
}

function updateViewToggleBtn() {
  const btn = document.getElementById('viewToggleBtn');
  if (!btn) return;
  if (currentPostView === 'list') {
    btn.textContent = '切换为图卡';
    btn.title = '切换为图卡视图';
  } else {
    btn.textContent = '切换为列表';
    btn.title = '切换为列表视图';
  }
}

function changePostPageSize() {
  postPageSize = parseInt(document.getElementById('postPageSize').value);
  postCurrentPage = 1;
  selectedPostIds.clear();
  renderPosts();
}

function renderPosts() {
  const status = currentPostTab;
  const filtered = getFilteredPosts(status);
  const container = document.getElementById('postsContainer');
  // 更新 Tab 计数
  const allPosts = DATA.posts.filter(p => p.initId === DATA.currentTopicId);
  const tabs = document.querySelectorAll('#postTabs .tab');
  const showingCount = allPosts.filter(p=>p.status==='showing').length;
  const pendingCount = allPosts.filter(p=>p.status==='pending').length;
  const hiddenCount = allPosts.filter(p=>p.status==='hidden').length;
  tabs[0].textContent = `展示中 (${showingCount})`;
  tabs[1].innerHTML = `待审核${pendingCount > 0 ? ` <span class="tab-pending-badge">${pendingCount}</span>` : ' (0)'}`;
  tabs[2].textContent = `已隐藏 (${hiddenCount})`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>${status==='pending'?'暂无待审核帖子':status==='hidden'?'暂无已隐藏帖子':'暂无展示中的帖子'}</p></div>`;
    hidePagination();
    hideBatchBar();
    return;
  }

  // 分页
  const totalPages = Math.ceil(filtered.length / postPageSize);
  if (postCurrentPage > totalPages) postCurrentPage = totalPages;
  const startIdx = (postCurrentPage - 1) * postPageSize;
  const pageData = filtered.slice(startIdx, startIdx + postPageSize);

  if (currentPostView === 'list') {
    renderPostListView(pageData, status);
  } else {
    renderPostCardView(pageData, status);
  }

  renderPostPagination(filtered.length, totalPages);
  updateBatchBar();
}

function renderPostListView(pageData, status) {
  const container = document.getElementById('postsContainer');
  const showCheckbox = true; // 列表视图始终显示勾选框
  let html = `<div class="post-list-view">
    <table class="data-table">
      <thead><tr>
        <th style="width:36px"><input type="checkbox" id="postSelectAll" onchange="toggleSelectAllPosts(this.checked)" ${selectedPostIds.size > 0 && selectedPostIds.size === pageData.length ? 'checked' : ''}></th>
        <th>帖子内容</th>
        <th style="width:90px">发帖人</th>
        <th style="width:100px">所属组织</th>
        <th style="width:130px">发布时间</th>
        <th style="width:80px">状态</th>
        <th style="width:140px">操作</th>
      </tr></thead>
      <tbody>`;

  pageData.forEach(p => {
    const isChecked = selectedPostIds.has(p.id);
    const statusLabel = {showing:'展示中',pending:'待审核',hidden:'已隐藏'}[p.status];
    const statusClass = 'status-' + p.status;
    let actions = '';
    if (status === 'showing') {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看</a><a class="btn-link btn-danger" onclick="setPostStatus(${p.id},'hidden')">隐藏</a>`;
    } else if (status === 'pending') {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看</a><a class="btn-link" style="color:var(--green)" onclick="setPostStatus(${p.id},'showing')">展示</a><a class="btn-link btn-danger" onclick="setPostStatus(${p.id},'hidden')">隐藏</a>`;
    } else {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看</a><a class="btn-link" style="color:var(--green)" onclick="setPostStatus(${p.id},'showing')">恢复</a>`;
    }
    html += `<tr${status==='hidden'?' style="opacity:.6"':''}>
      <td><input type="checkbox" value="${p.id}" onchange="togglePostSelect(${p.id},this.checked)" ${isChecked?'checked':''}></td>
      <td>
        <div class="post-content-cell">
          <div class="post-thumb" style="background:${p.color}"></div>
          <div class="post-content-text">${p.text}</div>
        </div>
      </td>
      <td>${p.user}</td>
      <td>${p.org}</td>
      <td style="font-size:12px;color:var(--text-secondary)">${p.date}</td>
      <td><span class="post-status-tag ${statusClass}">${statusLabel}</span></td>
      <td class="actions-cell">${actions}</td>
    </tr>`;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

function renderPostCardView(pageData, status) {
  const container = document.getElementById('postsContainer');
  container.innerHTML = `<div class="post-grid">${pageData.map(p => {
    let actions = '';
    if (status === 'showing') {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看详情</a>`;
    } else if (status === 'pending') {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看详情</a>
        <a class="btn-link" style="color:var(--green)" onclick="setPostStatus(${p.id},'showing')">展示</a>
        <a class="btn-link btn-danger" onclick="setPostStatus(${p.id},'hidden')">隐藏</a>`;
    } else {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看</a>
        <a class="btn-link" style="color:var(--green)" onclick="setPostStatus(${p.id},'showing')">恢复</a>`;
    }
    return `<div class="post-card">
      <div class="img" style="background:${p.color}${status==='hidden'?';opacity:.5':''}"></div>
      <div class="info">
        <div class="text" ${status==='hidden'?'style="color:var(--text-hint)"':''}>${p.text}</div>
        <div class="meta">${p.user} · ${p.org} · ${p.date.slice(5)}</div>
        <div class="post-actions">${actions}</div>
      </div></div>`;
  }).join('')}</div>`;
}

// 分页渲染（底部分页条）
function renderPostPagination(total, totalPages) {
  const paginationEl = document.getElementById('postPaginationBar');
  const pageInfoEl = document.getElementById('postPageInfo');
  const controlsEl = document.getElementById('postPageControls');
  if (!paginationEl) return;

  // 始终显示底部分页条（有数据时）
  paginationEl.style.display = 'flex';
  pageInfoEl.textContent = `共 ${total} 条数据`;

  let btns = '';
  btns += `<button class="page-btn" onclick="goPostPage(${postCurrentPage - 1})" ${postCurrentPage <= 1 ? 'disabled' : ''}>‹</button>`;
  
  // 页码按钮
  const maxBtns = 5;
  let startPage = Math.max(1, postCurrentPage - Math.floor(maxBtns / 2));
  let endPage = Math.min(totalPages, startPage + maxBtns - 1);
  if (endPage - startPage < maxBtns - 1) startPage = Math.max(1, endPage - maxBtns + 1);

  if (startPage > 1) {
    btns += `<button class="page-btn" onclick="goPostPage(1)">1</button>`;
    if (startPage > 2) btns += `<span style="padding:0 4px;color:var(--text-hint)">...</span>`;
  }
  for (let i = startPage; i <= endPage; i++) {
    btns += `<button class="page-btn ${i === postCurrentPage ? 'active' : ''}" onclick="goPostPage(${i})">${i}</button>`;
  }
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) btns += `<span style="padding:0 4px;color:var(--text-hint)">...</span>`;
    btns += `<button class="page-btn" onclick="goPostPage(${totalPages})">${totalPages}</button>`;
  }

  btns += `<button class="page-btn" onclick="goPostPage(${postCurrentPage + 1})" ${postCurrentPage >= totalPages ? 'disabled' : ''}>›</button>`;
  controlsEl.innerHTML = btns;
}

function goPostPage(page) {
  const filtered = getFilteredPosts(currentPostTab);
  const totalPages = Math.ceil(filtered.length / postPageSize);
  if (page < 1 || page > totalPages) return;
  postCurrentPage = page;
  selectedPostIds.clear();
  renderPosts();
}

function hidePagination() {
  const el = document.getElementById('postPaginationBar');
  if (el) el.style.display = 'none';
}

// 批量选择
function togglePostSelect(postId, checked) {
  if (checked) {
    selectedPostIds.add(postId);
  } else {
    selectedPostIds.delete(postId);
  }
  updateBatchBar();
  updateSelectAllCheckbox();
}

function toggleSelectAllPosts(checked) {
  const filtered = getFilteredPosts(currentPostTab);
  const startIdx = (postCurrentPage - 1) * postPageSize;
  const pageData = filtered.slice(startIdx, startIdx + postPageSize);
  
  pageData.forEach(p => {
    if (checked) {
      selectedPostIds.add(p.id);
    } else {
      selectedPostIds.delete(p.id);
    }
  });

  // 更新所有行的checkbox
  document.querySelectorAll('#postsContainer .data-table tbody input[type="checkbox"]').forEach(cb => {
    cb.checked = checked;
  });
  updateBatchBar();
}

function updateSelectAllCheckbox() {
  const selectAll = document.getElementById('postSelectAll');
  if (!selectAll) return;
  const filtered = getFilteredPosts(currentPostTab);
  const startIdx = (postCurrentPage - 1) * postPageSize;
  const pageData = filtered.slice(startIdx, startIdx + postPageSize);
  const allSelected = pageData.length > 0 && pageData.every(p => selectedPostIds.has(p.id));
  selectAll.checked = allSelected;
}

function updateBatchBar() {
  const bar = document.getElementById('batchActionBar');
  if (!bar) return;
  if (currentPostView === 'list' && selectedPostIds.size > 0) {
    bar.style.display = 'flex';
    document.getElementById('batchSelectedCount').textContent = selectedPostIds.size;
    // 根据当前Tab显示不同按钮
    const showBtn = document.getElementById('batchShowBtn');
    const hideBtn = document.getElementById('batchHideBtn');
    if (currentPostTab === 'showing') {
      showBtn.style.display = 'none';
      hideBtn.style.display = 'inline-flex';
      hideBtn.textContent = '批量隐藏';
    } else if (currentPostTab === 'pending') {
      showBtn.style.display = 'inline-flex';
      hideBtn.style.display = 'inline-flex';
      showBtn.textContent = '批量展示';
      hideBtn.textContent = '批量隐藏';
    } else {
      showBtn.style.display = 'inline-flex';
      hideBtn.style.display = 'none';
      showBtn.textContent = '批量恢复';
    }
  } else {
    bar.style.display = 'none';
  }
}

function hideBatchBar() {
  const bar = document.getElementById('batchActionBar');
  if (bar) bar.style.display = 'none';
}

function batchSetStatus(newStatus) {
  let count = 0;
  selectedPostIds.forEach(id => {
    const p = DATA.posts.find(x => x.id === id);
    if (p) { p.status = newStatus; count++; }
  });
  selectedPostIds.clear();
  renderPosts();
  renderTopicStats();
  const msgs = {showing:`已批量展示 ${count} 条帖子`,hidden:`已批量隐藏 ${count} 条帖子`};
  showToast(msgs[newStatus] || `已更新 ${count} 条帖子`);
}

function clearBatchSelection() {
  selectedPostIds.clear();
  renderPosts();
}

function setPostStatus(postId, newStatus) {
  const p = DATA.posts.find(x => x.id === postId);
  if (!p) return;
  const oldStatus = p.status;
  p.status = newStatus;
  renderPosts();
  renderTopicStats();
  const msgs = {showing:'已设为展示',hidden:'已隐藏该帖子'};
  if (newStatus === 'showing' && oldStatus === 'hidden') showToast('已恢复展示');
  else showToast(msgs[newStatus] || '状态已更新');
}

function openPostDetail(postId) {
  const p = DATA.posts.find(x => x.id === postId);
  if (!p) return;
  document.getElementById('detailPostId').value = p.id;
  document.getElementById('detailImg').style.background = p.color;
  document.getElementById('detailUser').textContent = p.user;
  document.getElementById('detailOrg').textContent = p.org;
  document.getElementById('detailDate').textContent = p.date;
  document.getElementById('detailText').textContent = p.text;
  const footer = document.getElementById('postDetailFooter');
  if (p.status === 'pending') {
    footer.innerHTML = `<button class="btn btn-green" onclick="setPostStatus(${p.id},'showing');closeModal('postDetailModal')">展示</button>
      <button class="btn" style="color:var(--primary);border-color:var(--primary)" onclick="setPostStatus(${p.id},'hidden');closeModal('postDetailModal')">隐藏</button>`;
  } else if (p.status === 'hidden') {
    footer.innerHTML = `<button class="btn btn-green" onclick="setPostStatus(${p.id},'showing');closeModal('postDetailModal')">恢复展示</button>`;
  } else {
    footer.innerHTML = `<button class="btn" style="color:var(--primary);border-color:var(--primary)" onclick="setPostStatus(${p.id},'hidden');closeModal('postDetailModal')">隐藏</button>`;
  }
  openModal('postDetailModal');
}

function backToInitiative() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-initiative').classList.add('active');
  document.getElementById('breadcrumbPage').textContent = '好事发布器';
  updateHeaderActions('initiative');
  renderInitiatives();
}

// ========================
// 数据中心
// ========================
function switchDCTab(el, section) {
  document.querySelectorAll('#dcTabs .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  // 好事发布器看板/劝募大使看板
  if (section === 'initiative') {
    document.getElementById('dc-dashboard').style.display = 'block';
    document.getElementById('dc-export').style.display = 'none';
    document.getElementById('dc-quanmu').style.display = 'none';
    setTimeout(initCharts, 100);
  } else if (section === 'quanmu') {
    document.getElementById('dc-dashboard').style.display = 'none';
    document.getElementById('dc-export').style.display = 'none';
    document.getElementById('dc-quanmu').style.display = 'block';
  }
}
function switchDCExportView() {
  // 数据导出按钮
  document.getElementById('dc-dashboard').style.display = 'none';
  document.getElementById('dc-quanmu').style.display = 'none';
  document.getElementById('dc-export').style.display = 'block';
  // 取消tab选中
  document.querySelectorAll('#dcTabs .tab').forEach(t => t.classList.remove('active'));
}

function selectExport(el) {
  document.querySelectorAll('.export-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const type = el.dataset.type;
  renderExportPreview(type);
}

function renderExportPreview(type) {
  const container = document.getElementById('exportPreview');
  const previews = {
    org: `<table class="data-table"><thead><tr><th>组织ID</th><th>组织名称</th><th>层级</th><th>成员数</th><th>参与人数</th><th>参与率</th><th>发布条数</th><th>人均发布</th></tr></thead><tbody>${DATA.orgs.slice(0,5).map(o=>`<tr><td>${o.id}</td><td>${o.name}</td><td>${'一二三'[o.level-1]}级</td><td>${o.memberCount}</td><td>${Math.round(o.memberCount*0.6)}</td><td>${(60+Math.random()*30).toFixed(1)}%</td><td>${o.postCount}</td><td>${(o.postCount/o.memberCount).toFixed(1)}</td></tr>`).join('')}</tbody></table>`,
    post: `<table class="data-table"><thead><tr><th>帖子ID</th><th>倡议</th><th>发布人</th><th>所属组织</th><th>发布时间</th><th>状态</th><th>内容摘要</th></tr></thead><tbody>${DATA.posts.slice(0,5).map(p=>`<tr><td>POST${String(p.id).padStart(3,'0')}</td><td>${DATA.initiatives.find(i=>i.id===p.initId)?.title||'-'}</td><td>${p.user}</td><td>${p.org}</td><td>${p.date}</td><td>${{showing:'展示中',pending:'待审核',hidden:'已隐藏'}[p.status]}</td><td>${p.text.slice(0,20)}...</td></tr>`).join('')}</tbody></table>`,
    daily: `<table class="data-table"><thead><tr><th>日期</th><th>新增帖子</th><th>参与人数</th><th>新增展示</th><th>新增隐藏</th></tr></thead><tbody><tr><td>2026-06-26</td><td>89</td><td>56</td><td>82</td><td>2</td></tr><tr><td>2026-06-25</td><td>134</td><td>78</td><td>120</td><td>3</td></tr><tr><td>2026-06-24</td><td>112</td><td>65</td><td>105</td><td>1</td></tr><tr><td>2026-06-23</td><td>98</td><td>52</td><td>90</td><td>4</td></tr></tbody></table>`
  };
  container.innerHTML = previews[type] || previews.org;
}

let rankSortKey = 'postCount';
function sortRankBy(key) {
  rankSortKey = key;
  renderDCRankTable();
}
function renderRankTable() {
  renderDCRankTable();
}

// ========================
// 数据中心筛选器
// ========================
function showDCOrgDropdown() {
  renderDCOrgDropdown(document.getElementById('dcOrgSearch').value.trim());
  document.getElementById('dcOrgDropdown').style.display = 'block';
}
function filterDCOrgDropdown() {
  renderDCOrgDropdown(document.getElementById('dcOrgSearch').value.trim());
  document.getElementById('dcOrgDropdown').style.display = 'block';
  document.getElementById('dcOrgFilter').value = '';
}
function renderDCOrgDropdown(keyword) {
  const dropdown = document.getElementById('dcOrgDropdown');
  const filtered = keyword ? DATA.orgs.filter(o => o.name.toLowerCase().includes(keyword.toLowerCase())) : DATA.orgs;
  if (filtered.length === 0) {
    dropdown.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-hint);text-align:center;">未找到匹配的组织</div>';
  } else {
    dropdown.innerHTML = '<div style="padding:6px 12px;font-size:11px;color:var(--text-hint);cursor:pointer;border-bottom:1px solid #f0f0f0" onclick="selectDCOrg(\'\',\'\')">全部组织</div>' + filtered.map(o =>
      `<div style="padding:6px 12px;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:6px" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background=''" onclick="selectDCOrg('${o.name}','${o.name}')">
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三'[o.level-1]}级</span>
        <span>${o.name}</span>
      </div>`
    ).join('');
  }
}
function selectDCOrg(value, display) {
  document.getElementById('dcOrgFilter').value = value;
  document.getElementById('dcOrgSearch').value = display;
  document.getElementById('dcOrgDropdown').style.display = 'none';
  updateDCDashboard();
}
function showDCInitDropdown() {
  renderDCInitDropdown(document.getElementById('dcInitSearch').value.trim());
  document.getElementById('dcInitDropdown').style.display = 'block';
}
function filterDCInitDropdown() {
  renderDCInitDropdown(document.getElementById('dcInitSearch').value.trim());
  document.getElementById('dcInitDropdown').style.display = 'block';
  document.getElementById('dcInitFilter').value = '';
}
function renderDCInitDropdown(keyword) {
  const dropdown = document.getElementById('dcInitDropdown');
  const activeInits = DATA.initiatives.filter(i => !i.isDraft);
  const filtered = keyword ? activeInits.filter(i => i.title.toLowerCase().includes(keyword.toLowerCase())) : activeInits;
  if (filtered.length === 0) {
    dropdown.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-hint);text-align:center;">未找到匹配的倡议</div>';
  } else {
    dropdown.innerHTML = '<div style="padding:6px 12px;font-size:11px;color:var(--text-hint);cursor:pointer;border-bottom:1px solid #f0f0f0" onclick="selectDCInit(\'\',\'\')">全部倡议</div>' + filtered.map(i =>
      `<div style="padding:6px 12px;font-size:12px;cursor:pointer" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background=''" onclick="selectDCInit('${i.id}','${i.title}')">
        ${i.title}
      </div>`
    ).join('');
  }
}
function selectDCInit(value, display) {
  document.getElementById('dcInitFilter').value = value;
  document.getElementById('dcInitSearch').value = display;
  document.getElementById('dcInitDropdown').style.display = 'none';
  updateDCDashboard();
}
// 关闭数据中心下拉
document.addEventListener('click', function(e) {
  const dcOrgDd = document.getElementById('dcOrgDropdown');
  const dcOrgInput = document.getElementById('dcOrgSearch');
  if (dcOrgDd && dcOrgInput && !dcOrgDd.contains(e.target) && e.target !== dcOrgInput) {
    dcOrgDd.style.display = 'none';
  }
  const dcInitDd = document.getElementById('dcInitDropdown');
  const dcInitInput = document.getElementById('dcInitSearch');
  if (dcInitDd && dcInitInput && !dcInitDd.contains(e.target) && e.target !== dcInitInput) {
    dcInitDd.style.display = 'none';
  }
  // 关闭好事发布器组织下拉
  const initOrgDd = document.getElementById('initOrgDropdown');
  const initOrgInput = document.getElementById('initOrgSearch');
  if (initOrgDd && initOrgInput && !initOrgDd.contains(e.target) && e.target !== initOrgInput) {
    initOrgDd.style.display = 'none';
  }
});

// ===== ECharts =====
let chart1, chart2;

// 获取数据中心筛选条件
function getDCFilters() {
  const dateFrom = document.getElementById('dcDateFrom')?.value || '';
  const dateTo = document.getElementById('dcDateTo')?.value || '';
  const levelFilter = document.getElementById('dcLevelFilter')?.value || '';
  const orgFilter = document.getElementById('dcOrgFilter')?.value || '';
  const initFilter = document.getElementById('dcInitFilter')?.value || '';
  return { dateFrom, dateTo, levelFilter, orgFilter, initFilter };
}

// 根据筛选条件获取匹配的帖子
function getDCFilteredPosts() {
  const { dateFrom, dateTo, levelFilter, orgFilter, initFilter } = getDCFilters();
  return DATA.posts.filter(p => {
    // 时间范围筛选
    const pDate = p.date.slice(0, 10);
    if (dateFrom && pDate < dateFrom) return false;
    if (dateTo && pDate > dateTo) return false;
    // 组织层级筛选
    if (levelFilter && p.orgLevel !== parseInt(levelFilter)) return false;
    // 组织名称筛选
    if (orgFilter && p.org !== orgFilter) return false;
    // 倡议筛选
    if (initFilter && p.initId !== parseInt(initFilter)) return false;
    return true;
  });
}

// 根据筛选条件获取匹配的倡议
function getDCFilteredInitiatives() {
  const { dateFrom, dateTo, levelFilter, orgFilter, initFilter } = getDCFilters();
  if (initFilter) {
    return DATA.initiatives.filter(i => !i.isDraft && i.id === parseInt(initFilter));
  }
  return DATA.initiatives.filter(i => {
    if (i.isDraft) return false;
    if (dateFrom && i.createDate < dateFrom) return false;
    if (dateTo && i.createDate > dateTo) return false;
    // 如果有组织筛选，只展示该组织有帖子的倡议
    if (orgFilter || levelFilter) {
      const posts = DATA.posts.filter(p => {
        if (p.initId !== i.id) return false;
        if (levelFilter && p.orgLevel !== parseInt(levelFilter)) return false;
        if (orgFilter && p.org !== orgFilter) return false;
        return true;
      });
      if (posts.length === 0) return false;
    }
    return true;
  });
}

// 更新数据中心看板数据
function updateDCDashboard() {
  const filteredPosts = getDCFilteredPosts();
  const filteredInits = getDCFilteredInitiatives();
  const { dateFrom, dateTo, levelFilter, orgFilter, initFilter } = getDCFilters();
  const hasFilter = levelFilter || orgFilter || initFilter;

  // 总发布倡议数
  const initCount = filteredInits.length;
  document.getElementById('dcInitCount').textContent = initCount;

  // 总参与人数（按用户去重）
  const users = new Set(filteredPosts.map(p => p.user));
  const userCount = hasFilter ? users.size : 3847;
  document.getElementById('dcUserCount').textContent = userCount.toLocaleString();

  // 总发布好事数
  const postCount = hasFilter ? filteredPosts.length : 12560;
  document.getElementById('dcPostCount').textContent = postCount.toLocaleString();

  // 更新趋势信息
  const trendEls = document.querySelectorAll('.stat-card .trend');
  if (hasFilter) {
    if (trendEls[0]) trendEls[0].textContent = `${initCount > 0 ? '筛选结果' : '无匹配'}`;
    if (trendEls[1]) { trendEls[1].textContent = `筛选结果`; trendEls[1].className = 'trend'; }
    if (trendEls[2]) { trendEls[2].textContent = `筛选结果`; trendEls[2].className = 'trend'; }
  } else {
    if (trendEls[0]) trendEls[0].textContent = '进行中倡议';
    if (trendEls[1]) { trendEls[1].innerHTML = '↑ 12.3% 较上周'; trendEls[1].className = 'trend up'; }
    if (trendEls[2]) { trendEls[2].innerHTML = '↑ 8.7% 较上周'; trendEls[2].className = 'trend up'; }
  }

  // 更新图表
  updateDCCharts();
  // 更新排行榜
  renderDCRankTable();
}

// 根据筛选生成每日数据用于图表
function generateDCChartData() {
  const { dateFrom, dateTo, levelFilter, orgFilter, initFilter } = getDCFilters();
  const hasFilter = levelFilter || orgFilter || initFilter;

  // 确定日期范围
  const from = dateFrom ? new Date(dateFrom) : new Date('2026-06-01');
  const to = dateTo ? new Date(dateTo) : new Date('2026-06-26');
  const days = [];
  const pubData = [];
  const userData = [];

  // 默认的基础数据（无筛选时使用模拟数据）
  const basePubData = [120,156,189,234,267,312,345,289,178,198,256,298,312,345,267,389,412,456,389,423,456,512,534,567,489];
  const baseUserData = [45,52,61,78,82,95,103,87,62,71,89,98,112,120,89,134,145,156,134,142,155,167,178,189,156];

  const diffDays = Math.round((to - from) / (1000 * 60 * 60 * 24)) + 1;
  for (let i = 0; i < diffDays && i < 31; i++) {
    const d = new Date(from);
    d.setDate(d.getDate() + i);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    days.push(`${month}/${day}`);

    if (hasFilter) {
      // 有筛选时，根据实际数据计算
      const dateStr = d.toISOString().slice(0, 10);
      const dayPosts = DATA.posts.filter(p => {
        const pDate = p.date.slice(0, 10);
        if (pDate !== dateStr) return false;
        if (levelFilter && p.orgLevel !== parseInt(levelFilter)) return false;
        if (orgFilter && p.org !== orgFilter) return false;
        if (initFilter && p.initId !== parseInt(initFilter)) return false;
        return true;
      });
      pubData.push(dayPosts.length);
      const dayUsers = new Set(dayPosts.map(p => p.user));
      userData.push(dayUsers.size);
    } else {
      // 无筛选时使用模拟数据
      const idx = day - 1;
      pubData.push(basePubData[idx] || Math.round(100 + Math.random() * 400));
      userData.push(baseUserData[idx] || Math.round(30 + Math.random() * 150));
    }
  }

  return { days, pubData, userData };
}

// 更新数据中心排行榜
function renderDCRankTable() {
  const { levelFilter, orgFilter, initFilter } = getDCFilters();
  const hasFilter = levelFilter || orgFilter || initFilter;

  let orgsToRank = [...DATA.orgs];
  if (levelFilter) {
    orgsToRank = orgsToRank.filter(o => o.level === parseInt(levelFilter));
  }
  if (orgFilter) {
    orgsToRank = orgsToRank.filter(o => o.name === orgFilter);
  }

  // 如果有筛选，重新计算帖子数
  if (hasFilter) {
    orgsToRank = orgsToRank.map(o => {
      const orgPosts = DATA.posts.filter(p => {
        if (p.org !== o.name) return false;
        if (initFilter && p.initId !== parseInt(initFilter)) return false;
        return true;
      });
      return { ...o, filteredPostCount: orgPosts.length, filteredMemberCount: Math.round(o.memberCount * 0.6) };
    });
    orgsToRank.sort((a, b) => b.filteredPostCount - a.filteredPostCount);
  } else {
    orgsToRank.sort((a, b) => {
      if (rankSortKey === 'memberCount') return b.memberCount - a.memberCount;
      if (rankSortKey === 'avg') return (b.postCount / b.memberCount) - (a.postCount / a.memberCount);
      return b.postCount - a.postCount;
    });
  }

  const tbody = document.getElementById('rankTableBody');
  if (!tbody) return;
  tbody.innerHTML = orgsToRank.map((o, i) => {
    const displayPostCount = hasFilter ? o.filteredPostCount : o.postCount;
    const displayMemberCount = Math.round(o.memberCount * 0.6);
    const displayAvg = hasFilter ? (o.filteredPostCount / (o.memberCount || 1)).toFixed(1) : (o.postCount / o.memberCount).toFixed(1);
    return `
    <tr><td><span class="rank-num ${i < 3 ? 'rank-' + (i + 1) : 'rank-other'}">${i + 1}</span></td>
    <td style="font-weight:${i < 3 ? '600' : '400'}">${o.name}</td>
    <td>${displayMemberCount}</td><td>${displayPostCount.toLocaleString()}</td>
    <td>${displayAvg}</td></tr>`;
  }).join('');
}

function updateDCCharts() {
  const { days, pubData, userData } = generateDCChartData();
  const el1 = document.getElementById('trendChart');
  const el2 = document.getElementById('userChart');
  if (!el1 || !el2 || el1.offsetHeight === 0) return;

  if (chart1) chart1.dispose();
  if (chart2) chart2.dispose();
  chart1 = echarts.init(el1);
  chart1.setOption({
    tooltip:{trigger:'axis'},grid:{left:40,right:16,top:10,bottom:30},
    xAxis:{type:'category',data:days,axisLabel:{fontSize:10,color:'#999'},axisLine:{lineStyle:{color:'#E8E8E8'}}},
    yAxis:{type:'value',axisLabel:{fontSize:10,color:'#999'},splitLine:{lineStyle:{color:'#F5F5F5'}}},
    series:[{data:pubData,type:'line',smooth:true,symbol:'none',lineStyle:{color:'#E84C3D',width:2},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(232,76,61,.15)'},{offset:1,color:'rgba(232,76,61,0)'}]}}}]
  });
  chart2 = echarts.init(el2);
  chart2.setOption({
    tooltip:{trigger:'axis'},grid:{left:40,right:16,top:10,bottom:30},
    xAxis:{type:'category',data:days,axisLabel:{fontSize:10,color:'#999'},axisLine:{lineStyle:{color:'#E8E8E8'}}},
    yAxis:{type:'value',axisLabel:{fontSize:10,color:'#999'},splitLine:{lineStyle:{color:'#F5F5F5'}}},
    series:[{data:userData,type:'bar',barWidth:10,itemStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'#E84C3D'},{offset:1,color:'#F5A09A'}]},borderRadius:[3,3,0,0]}}]
  });
  window.addEventListener('resize', () => { chart1?.resize(); chart2?.resize(); });
}

function initCharts() {
  updateDCDashboard();
}

// ===== 批量导出二维码 =====
// 记录最近一次批量发起的信息
let lastBatchInit = null;



// 发起成功后直接导出二维码，无需再选主题和组织
function directExportQR() {
  if (lastBatchInit) {
    const orgNames = lastBatchInit.orgNames || [];
    const orgCount = orgNames.length || lastBatchInit.orgCount || 0;
    showToast(`正在导出「${lastBatchInit.title}」的 ${orgCount} 个组织倡议二维码...`);
    setTimeout(() => {
      showToast(`倡议二维码 Excel 已下载（${lastBatchInit.title} × ${orgCount} 个组织）`);
    }, 1500);
  } else {
    showToast('倡议二维码 Excel 已下载');
  }
}

// ========================
// 编辑倡议 - 组织管理
// ========================
function switchEditInitTab(tabName) {
  // 切换 Tab 样式
  document.querySelectorAll('.edit-init-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.edit-init-tab-panel').forEach(p => p.classList.remove('active'));
  if (tabName === 'basic') {
    document.querySelectorAll('.edit-init-tab')[0].classList.add('active');
    document.getElementById('editInitTabBasic').classList.add('active');
  } else {
    document.querySelectorAll('.edit-init-tab')[1].classList.add('active');
    document.getElementById('editInitTabOrgs').classList.add('active');
    // 渲染组织管理列表
    renderOrgMgmtTable();
  }
}

function updateOrgMgmtBadge(initId) {
  const badge = document.getElementById('editInitOrgBadge');
  const orgs = DATA.initOrgs[initId] || [];
  badge.textContent = orgs.length;
}

function getEditInitId() {
  return parseInt(document.getElementById('editInitId').value);
}

function renderOrgMgmtTable() {
  const initId = getEditInitId();
  const orgs = DATA.initOrgs[initId] || [];
  const tbody = document.getElementById('orgMgmtTableBody');
  const emptyEl = document.getElementById('orgMgmtEmpty');
  const searchKeyword = (document.getElementById('orgMgmtSearch')?.value || '').toLowerCase();
  const levelFilter = document.getElementById('orgMgmtLevelFilter')?.value || '';

  // 筛选
  const filtered = orgs.filter(o => {
    if (searchKeyword && !o.orgName.toLowerCase().includes(searchKeyword)) return false;
    if (levelFilter && o.level !== parseInt(levelFilter)) return false;
    return true;
  });

  if (orgs.length === 0) {
    tbody.innerHTML = '';
    document.querySelector('.org-mgmt-table-wrap').style.display = 'none';
    emptyEl.style.display = 'block';
    return;
  }

  document.querySelector('.org-mgmt-table-wrap').style.display = '';
  emptyEl.style.display = 'none';

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text-hint);font-size:12px">没有找到匹配的组织</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((o, idx) => `
    <tr data-org-id="${o.orgId}">
      <td style="text-align:center;color:var(--text-hint)">${idx + 1}</td>
      <td style="font-weight:500">${o.orgName}</td>
      <td><span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 5px">${'一二三'[o.level-1]}级</span></td>
      <td class="location-cell" title="${o.location || '未设置'}">${o.location || '<span style="color:var(--text-hint)">未设置</span>'}</td>
      <td class="actions-cell">
        <a class="btn-link" onclick="editOrgLocationInInit('${o.orgId}')">编辑地点</a>
        <a class="btn-link" style="color:#1890FF" onclick="exportSingleOrgQR('${o.orgId}','${o.orgName}')">导出二维码</a>
        <a class="btn-link btn-danger" onclick="removeOrgFromInit('${o.orgId}','${o.orgName}')">删除</a>
      </td>
    </tr>
  `).join('');
}

function filterOrgMgmtList() {
  renderOrgMgmtTable();
}

// 编辑组织活动地点
function editOrgLocationInInit(orgId) {
  const initId = getEditInitId();
  const orgs = DATA.initOrgs[initId] || [];
  const org = orgs.find(o => o.orgId === orgId);
  if (!org) return;
  document.getElementById('editOrgLocName').value = org.orgName;
  document.getElementById('editOrgLocValue').value = org.location || '';
  document.getElementById('editOrgLocOrgId').value = orgId;
  openModal('editOrgLocationModal');
}

function submitEditOrgLocation() {
  const initId = getEditInitId();
  const orgId = document.getElementById('editOrgLocOrgId').value;
  const newLocation = document.getElementById('editOrgLocValue').value.trim();
  const orgs = DATA.initOrgs[initId] || [];
  const org = orgs.find(o => o.orgId === orgId);
  if (org) {
    org.location = newLocation;
    closeModal('editOrgLocationModal');
    renderOrgMgmtTable();
    showToast(`「${org.orgName}」活动地点已更新`);
  }
}

// 删除组织
function removeOrgFromInit(orgId, orgName) {
  const initId = getEditInitId();
  if (!confirm(`确定要删除「${orgName}」的倡议吗？删除后该组织下的倡议将被撤回。`)) return;
  const orgs = DATA.initOrgs[initId] || [];
  const idx = orgs.findIndex(o => o.orgId === orgId);
  if (idx > -1) {
    orgs.splice(idx, 1);
    updateOrgMgmtBadge(initId);
    renderOrgMgmtTable();
    // 更新倡议卡片上的组织计数
    const init = DATA.initiatives.find(i => i.id === initId);
    if (init) init.orgCount = orgs.length;
    showToast(`已删除「${orgName}」的倡议`);
  }
}

// 导出单个组织二维码
function exportSingleOrgQR(orgId, orgName) {
  const initId = getEditInitId();
  const init = DATA.initiatives.find(i => i.id === initId);
  const title = init ? init.title : '倡议';
  showToast(`正在导出「${orgName}」的「${title}」倡议二维码...`);
  setTimeout(() => {
    showToast(`「${orgName}」的倡议二维码已下载`);
  }, 1000);
}

// 新增组织到倡议
function openAddOrgToInitModal() {
  const initId = getEditInitId();
  const currentOrgs = DATA.initOrgs[initId] || [];
  const currentOrgIds = new Set(currentOrgs.map(o => o.orgId));
  const availableOrgs = DATA.orgs.filter(o => !currentOrgIds.has(o.id));
  
  const list = document.getElementById('addOrgToInitList');
  if (availableOrgs.length === 0) {
    list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-hint);font-size:12px">所有组织已添加</div>';
  } else {
    const sortedOrgs = [...availableOrgs].sort((a,b) => {
      if (a.parent1 !== b.parent1) return a.parent1.localeCompare(b.parent1);
      if (a.level !== b.level) return a.level - b.level;
      return a.name.localeCompare(b.name);
    });
    list.innerHTML = sortedOrgs.map(o =>
      `<label data-level="${o.level}" class="${o.level>1?'indent-'+(o.level-1):''}" style="display:flex">
        <input type="checkbox" value="${o.id}" data-name="${o.name}" data-level="${o.level}" data-location="${o.location||''}">
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;margin-right:4px;flex-shrink:0">${'一二三'[o.level-1]}级</span>${o.name}
      </label>`
    ).join('');
  }
  document.getElementById('addOrgToInitLocation').value = '';
  document.getElementById('addOrgToInitLayerFilter').value = '';
  openModal('addOrgToInitModal');
}

function filterAddOrgToInitList() {
  const level = document.getElementById('addOrgToInitLayerFilter').value;
  const labels = document.querySelectorAll('#addOrgToInitList label');
  labels.forEach(label => {
    const orgLevel = label.dataset.level;
    label.style.display = (!level || orgLevel === level) ? 'flex' : 'none';
  });
}

function submitAddOrgToInit() {
  const initId = getEditInitId();
  if (!DATA.initOrgs[initId]) DATA.initOrgs[initId] = [];
  const location = document.getElementById('addOrgToInitLocation').value.trim();
  const checkedInputs = document.querySelectorAll('#addOrgToInitList input[type="checkbox"]:checked');
  if (checkedInputs.length === 0) {
    showToast('请至少选择一个组织');
    return;
  }
  let addedCount = 0;
  checkedInputs.forEach(cb => {
    const orgId = cb.value;
    const orgName = cb.dataset.name;
    const level = parseInt(cb.dataset.level);
    const orgLocation = location || cb.dataset.location || '';
    // 避免重复添加
    if (!DATA.initOrgs[initId].find(o => o.orgId === orgId)) {
      DATA.initOrgs[initId].push({ orgId, orgName, level, location: orgLocation });
      addedCount++;
    }
  });
  // 更新倡议卡片上的组织计数
  const init = DATA.initiatives.find(i => i.id === initId);
  if (init) init.orgCount = DATA.initOrgs[initId].length;
  closeModal('addOrgToInitModal');
  updateOrgMgmtBadge(initId);
  renderOrgMgmtTable();
  showToast(`已添加 ${addedCount} 个组织`);
}

// ========================
// 倡议话题页 - 组织管理弹窗
// ========================
function openTopicOrgMgmtModal() {
  const initId = DATA.currentTopicId;
  const init = DATA.initiatives.find(i => i.id === initId);
  if (!init) return;
  document.getElementById('topicOrgMgmtTitle').textContent = init.title;
  openModal('topicOrgMgmtModal');
  renderTopicOrgMgmtTable();
}

// ========================
// 倡议话题页 - 组织管理
// ========================
function renderTopicOrgMgmtTable() {
  const initId = DATA.currentTopicId;
  if (!initId) return;
  const orgs = DATA.initOrgs[initId] || [];
  const tbody = document.getElementById('topicOrgMgmtTableBody');
  const emptyEl = document.getElementById('topicOrgMgmtEmpty');
  const tableWrap = document.getElementById('topicOrgMgmtTable')?.closest('.org-mgmt-table-wrap');
  const searchKeyword = (document.getElementById('topicOrgMgmtSearch')?.value || '').toLowerCase();
  const levelFilter = document.getElementById('topicOrgMgmtLevelFilter')?.value || '';

  // 筛选
  const filtered = orgs.filter(o => {
    if (searchKeyword && !o.orgName.toLowerCase().includes(searchKeyword)) return false;
    if (levelFilter && o.level !== parseInt(levelFilter)) return false;
    return true;
  });

  if (orgs.length === 0) {
    tbody.innerHTML = '';
    if (tableWrap) tableWrap.style.display = 'none';
    emptyEl.style.display = 'block';
    return;
  }

  if (tableWrap) tableWrap.style.display = '';
  emptyEl.style.display = 'none';

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text-hint);font-size:12px">没有找到匹配的组织</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((o, idx) => `
    <tr data-org-id="${o.orgId}">
      <td style="text-align:center;color:var(--text-hint)">${idx + 1}</td>
      <td style="font-weight:500">${o.orgName}</td>
      <td><span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 5px">${'一二三'[o.level-1]}级</span></td>
      <td class="location-cell" title="${o.location || '未设置'}">${o.location || '<span style="color:var(--text-hint)">未设置</span>'}</td>
      <td class="actions-cell">
        <a class="btn-link" onclick="editTopicOrgLocation('${o.orgId}')">编辑地点</a>
        <a class="btn-link" style="color:#1890FF" onclick="exportTopicSingleOrgQR('${o.orgId}','${o.orgName}')">导出二维码</a>
        <a class="btn-link btn-danger" onclick="removeOrgFromTopicInit('${o.orgId}','${o.orgName}')">删除</a>
      </td>
    </tr>
  `).join('');
}

function filterTopicOrgMgmtList() {
  renderTopicOrgMgmtTable();
}

// 编辑地点
function editTopicOrgLocation(orgId) {
  const initId = DATA.currentTopicId;
  const orgs = DATA.initOrgs[initId] || [];
  const org = orgs.find(o => o.orgId === orgId);
  if (!org) return;
  document.getElementById('editTopicOrgLocName').value = org.orgName;
  document.getElementById('editTopicOrgLocValue').value = org.location || '';
  document.getElementById('editTopicOrgLocOrgId').value = orgId;
  openModal('editTopicOrgLocationModal');
}

function submitEditTopicOrgLocation() {
  const initId = DATA.currentTopicId;
  const orgId = document.getElementById('editTopicOrgLocOrgId').value;
  const newLocation = document.getElementById('editTopicOrgLocValue').value.trim();
  const orgs = DATA.initOrgs[initId] || [];
  const org = orgs.find(o => o.orgId === orgId);
  if (org) {
    org.location = newLocation;
    closeModal('editTopicOrgLocationModal');
    renderTopicOrgMgmtTable();
    showToast(`「${org.orgName}」活动地点已更新`);
  }
}

// 删除组织
function removeOrgFromTopicInit(orgId, orgName) {
  const initId = DATA.currentTopicId;
  if (!confirm(`确定要删除「${orgName}」的倡议吗？删除后该组织下的倡议将被撤回。`)) return;
  const orgs = DATA.initOrgs[initId] || [];
  const idx = orgs.findIndex(o => o.orgId === orgId);
  if (idx > -1) {
    orgs.splice(idx, 1);
    renderTopicOrgMgmtTable();
    renderTopicStats();
    const init = DATA.initiatives.find(i => i.id === initId);
    if (init) init.orgCount = orgs.length;
    showToast(`已删除「${orgName}」的倡议`);
  }
}

// 导出单个组织二维码
function exportTopicSingleOrgQR(orgId, orgName) {
  const initId = DATA.currentTopicId;
  const init = DATA.initiatives.find(i => i.id === initId);
  const title = init ? init.title : '倡议';
  showToast(`正在导出「${orgName}」的「${title}」倡议二维码...`);
  setTimeout(() => {
    showToast(`「${orgName}」的倡议二维码已下载`);
  }, 1000);
}

// 批量导出倡议
function exportTopicInitQR() {
  const initId = DATA.currentTopicId;
  const init = DATA.initiatives.find(i => i.id === initId);
  const orgs = DATA.initOrgs[initId] || [];
  if (!init) return;
  showToast(`正在导出「${init.title}」的 ${orgs.length} 个组织倡议二维码...`);
  setTimeout(() => {
    showToast(`倡议二维码 Excel 已下载（${init.title} × ${orgs.length} 个组织）`);
  }, 1500);
}

// 新增组织到倡议（话题页版本）
function openAddOrgToTopicInitModal() {
  const initId = DATA.currentTopicId;
  const currentOrgs = DATA.initOrgs[initId] || [];
  const currentOrgIds = new Set(currentOrgs.map(o => o.orgId));
  const availableOrgs = DATA.orgs.filter(o => !currentOrgIds.has(o.id));
  
  const list = document.getElementById('addOrgToTopicInitList');
  if (availableOrgs.length === 0) {
    list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-hint);font-size:12px">所有组织已添加</div>';
  } else {
    const sortedOrgs = [...availableOrgs].sort((a,b) => {
      if (a.parent1 !== b.parent1) return a.parent1.localeCompare(b.parent1);
      if (a.level !== b.level) return a.level - b.level;
      return a.name.localeCompare(b.name);
    });
    list.innerHTML = sortedOrgs.map(o =>
      `<label data-level="${o.level}" class="${o.level>1?'indent-'+(o.level-1):''}" style="display:flex">
        <input type="checkbox" value="${o.id}" data-name="${o.name}" data-level="${o.level}" data-location="${o.location||''}">
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;margin-right:4px;flex-shrink:0">${'一二三'[o.level-1]}级</span>${o.name}
      </label>`
    ).join('');
  }
  document.getElementById('addOrgToTopicInitLocation').value = '';
  document.getElementById('addOrgToTopicInitLayerFilter').value = '';
  openModal('addOrgToTopicInitModal');
}

function filterAddOrgToTopicInitList() {
  const level = document.getElementById('addOrgToTopicInitLayerFilter').value;
  const labels = document.querySelectorAll('#addOrgToTopicInitList label');
  labels.forEach(label => {
    const orgLevel = label.dataset.level;
    label.style.display = (!level || orgLevel === level) ? 'flex' : 'none';
  });
}

function submitAddOrgToTopicInit() {
  const initId = DATA.currentTopicId;
  if (!DATA.initOrgs[initId]) DATA.initOrgs[initId] = [];
  const location = document.getElementById('addOrgToTopicInitLocation').value.trim();
  const checkedInputs = document.querySelectorAll('#addOrgToTopicInitList input[type="checkbox"]:checked');
  if (checkedInputs.length === 0) {
    showToast('请至少选择一个组织');
    return;
  }
  let addedCount = 0;
  checkedInputs.forEach(cb => {
    const orgId = cb.value;
    const orgName = cb.dataset.name;
    const level = parseInt(cb.dataset.level);
    const orgLocation = location || cb.dataset.location || '';
    if (!DATA.initOrgs[initId].find(o => o.orgId === orgId)) {
      DATA.initOrgs[initId].push({ orgId, orgName, level, location: orgLocation });
      addedCount++;
    }
  });
  const init = DATA.initiatives.find(i => i.id === initId);
  if (init) init.orgCount = DATA.initOrgs[initId].length;
  closeModal('addOrgToTopicInitModal');
  renderTopicOrgMgmtTable();
  renderTopicStats();
  showToast(`已添加 ${addedCount} 个组织`);
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderOrgTable();
  renderRankTable();
  // 绑定筛选事件
  ['filterL1','filterL2','filterL3','chkL1','chkL2','chkL3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => {
      if (id === 'filterL1') updateL2Options();
      if (id === 'filterL2') updateL3Options();
      renderOrgTable();
    });
  });
  document.getElementById('orgSearch')?.addEventListener('input', renderOrgTable);
  document.getElementById('initSearch')?.addEventListener('input', renderInitiatives);
  document.getElementById('initDateFrom')?.addEventListener('change', renderInitiatives);
  document.getElementById('initDateTo')?.addEventListener('change', renderInitiatives);
  document.getElementById('topicLevelFilter')?.addEventListener('change', onTopicFilterChange);
  document.getElementById('topicDateFrom')?.addEventListener('change', onTopicFilterChange);
  document.getElementById('topicDateTo')?.addEventListener('change', onTopicFilterChange);
  document.getElementById('topicContentSearch')?.addEventListener('input', onTopicFilterChange);
  // 数据中心筛选器事件绑定
  document.getElementById('dcDateFrom')?.addEventListener('change', updateDCDashboard);
  document.getElementById('dcDateTo')?.addEventListener('change', updateDCDashboard);
  document.getElementById('dcLevelFilter')?.addEventListener('change', updateDCDashboard);
});
