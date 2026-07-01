// ===== 全局数据 =====
const DATA = {
  // 组织支持最多 5 级（省-市-县-街道-村）。parents 数组记录完整上级链路（不含自身）。
  orgs: [
    {id:'ORG001',name:'阳光基金会',level:1,parents:[],parent1:'—',parent2:'—',parent3:'—',parent4:'—',leader:'张三',phone:'13812341234',initCount:5,postCount:1200,location:'上海市浦东新区'},
    {id:'ORG002',name:'华东分会',level:2,parents:['阳光基金会'],parent1:'阳光基金会',parent2:'—',parent3:'—',parent4:'—',leader:'李四',phone:'13956785678',initCount:3,postCount:450,location:'南京市鼓楼区'},
    {id:'ORG003',name:'社区A队',level:3,parents:['阳光基金会','华东分会'],parent1:'阳光基金会',parent2:'华东分会',parent3:'—',parent4:'—',leader:'王五',phone:'13790129012',initCount:2,postCount:180,location:'杭州市西湖区'},
    {id:'ORG004',name:'社区B队',level:3,parents:['阳光基金会','华东分会'],parent1:'阳光基金会',parent2:'华东分会',parent3:'—',parent4:'—',leader:'赵六',phone:'13634563456',initCount:2,postCount:95,location:'合肥市蜀山区'},
    {id:'ORG005',name:'绿色家园',level:1,parents:[],parent1:'—',parent2:'—',parent3:'—',parent4:'—',leader:'孙七',phone:'13578907890',initCount:4,postCount:680,location:'北京市海淀区'},
    {id:'ORG006',name:'华南分会',level:2,parents:['绿色家园'],parent1:'绿色家园',parent2:'—',parent3:'—',parent4:'—',leader:'钱八',phone:'13423452345',initCount:3,postCount:320,location:'广州市天河区'},
    {id:'ORG007',name:'华西分会',level:2,parents:['阳光基金会'],parent1:'阳光基金会',parent2:'—',parent3:'—',parent4:'—',leader:'周九',phone:'13712349876',initCount:3,postCount:380,location:'成都市武侯区'},
    {id:'ORG008',name:'社区C队',level:3,parents:['阳光基金会','华西分会'],parent1:'阳光基金会',parent2:'华西分会',parent3:'—',parent4:'—',leader:'吴十',phone:'13823456789',initCount:1,postCount:110,location:'重庆市渝中区'},
    {id:'ORG009',name:'爱心联盟',level:1,parents:[],parent1:'—',parent2:'—',parent3:'—',parent4:'—',leader:'郑强',phone:'13934567890',initCount:6,postCount:920,location:'深圳市南山区'},
    {id:'ORG010',name:'华北分会',level:2,parents:['爱心联盟'],parent1:'爱心联盟',parent2:'—',parent3:'—',parent4:'—',leader:'冯丽',phone:'13645678234',initCount:4,postCount:410,location:'天津市和平区'},
    {id:'ORG011',name:'志愿先锋队',level:3,parents:['爱心联盟','华北分会'],parent1:'爱心联盟',parent2:'华北分会',parent3:'—',parent4:'—',leader:'陈磊',phone:'13756789345',initCount:2,postCount:165,location:'石家庄市裕华区'},
    {id:'ORG012',name:'社区D队',level:3,parents:['绿色家园','华南分会'],parent1:'绿色家园',parent2:'华南分会',parent3:'—',parent4:'—',leader:'黄静',phone:'13867890456',initCount:1,postCount:78,location:'佛山市禅城区'},
    {id:'ORG013',name:'浦东街道服务站',level:4,parents:['阳光基金会','华东分会','社区A队'],parent1:'阳光基金会',parent2:'华东分会',parent3:'社区A队',parent4:'—',leader:'孙明',phone:'13511112222',initCount:1,postCount:46,location:'上海市浦东新区世纪大道'},
    {id:'ORG014',name:'世纪村志愿组',level:5,parents:['阳光基金会','华东分会','社区A队','浦东街道服务站'],parent1:'阳光基金会',parent2:'华东分会',parent3:'社区A队',parent4:'浦东街道服务站',leader:'周晓',phone:'13633334444',initCount:1,postCount:18,location:'上海市浦东新区世纪村'}
  ],
  nextOrgId: 15,
  initiatives: [
    {id:1,title:'社区清洁日',desc:'号召社区居民一起打扫公共区域，美化社区环境。拍照记录你的清洁行动！',color:'linear-gradient(135deg,#06B57A,#34D399)',orgCount:25,postCount:5234,createDate:'2026-06-10',isDraft:false,customByChild:false,location:'上海市浦东新区',remark:''},
    {id:2,title:'关爱独居老人',desc:'探访社区独居老人，陪伴聊天、帮助采购。用镜头记录温暖瞬间。',color:'linear-gradient(135deg,#FF8C42,#FBBF24)',orgCount:18,postCount:3893,createDate:'2026-06-05',isDraft:false,customByChild:false,location:'',remark:''},
    {id:3,title:'绿色出行周',desc:'本周选择步行、骑行或公共交通出行，减少碳排放。分享你的绿色出行方式！',color:'linear-gradient(135deg,#4A90D9,#60A5FA)',orgCount:20,postCount:2103,createDate:'2026-06-15',isDraft:false,customByChild:false,location:'',remark:''},
    {id:4,title:'节水行动周',desc:'记录每天的节水小妙招，倡导绿色生活方式，从身边做起。',color:'linear-gradient(135deg,#1ABC9C,#16A085)',orgCount:15,postCount:1563,createDate:'2026-06-18',isDraft:false,customByChild:false,location:'',remark:''},
    {id:5,title:'邻里互助日',desc:'帮助邻居解决生活中的小困难，分享温暖瞬间。',color:'linear-gradient(135deg,#E74C3C,#C0392B)',orgCount:22,postCount:2892,createDate:'2026-06-12',isDraft:false,customByChild:false,location:'',remark:''},
    {id:8,title:'0628自定义倡议',desc:'',color:'linear-gradient(135deg,#FAAD14,#FFC53D)',orgCount:6,postCount:325,createDate:'2026-06-28',isDraft:false,customByChild:true,location:'',remark:'0628自定义倡议'},
    {id:6,title:'旧衣回收计划',desc:'将闲置的旧衣服整理出来，捐给需要的人。',color:'linear-gradient(135deg,#9B59B6,#8E44AD)',orgCount:0,postCount:0,createDate:'2026-06-20',isDraft:true},
    {id:7,title:'社区读书会',desc:'每周组织一次社区读书分享活动。',color:'linear-gradient(135deg,#E67E22,#F39C12)',orgCount:0,postCount:0,createDate:'2026-06-22',isDraft:true}
  ],
  nextInitId: 9,
  // 邀请下级发起记录（无统一主题，主题由下级自行填写）
  invitations: [
    {id:1, levelScope:'all2', scopeText:'全部二级组织', inviteOrgs:['华东分会','华南分会','华北分会'], createDate:'2026-06-18', status:'进行中',
      responses:[
        {org:'华东分会', title:'河岸清洁志愿行动', location:'上海黄浦江畔', date:'2026-06-19', posts:42},
        {org:'华南分会', title:'社区垃圾分类宣传', location:'广州天河区', date:'2026-06-20', posts:30}
      ]},
    {id:2, levelScope:'all3', scopeText:'全部三级组织', inviteOrgs:['社区A队','社区B队'], createDate:'2026-06-22', status:'进行中',
      responses:[
        {org:'社区A队', title:'楼道公共空间整理', location:'本社区', date:'2026-06-23', posts:15}
      ]}
  ],
  nextInviteId: 3,
  // 帖子数据（用于倡议话题页）
  posts: [
    {id:1,initId:1,text:'今天和邻居们一起打扫了小区花园，大家忙得热火朝天...',user:'微信用户A',org:'阳光基金会',orgLevel:1,date:'2026-06-25 10:30',color:'linear-gradient(135deg,#A8E6CF,#DCEDC1)',images:['linear-gradient(135deg,#A8E6CF,#DCEDC1)','linear-gradient(135deg,#B5EAD7,#C7CEEA)','linear-gradient(135deg,#E2F0CB,#FFDAC1)'],status:'showing'},
    {id:2,initId:1,text:'带着孩子一起捡拾公园里的垃圾，言传身教最重要！',user:'微信用户B',org:'华东分会',orgLevel:2,date:'2026-06-25 09:15',color:'linear-gradient(135deg,#FFD3B6,#FFAAA5)',images:['linear-gradient(135deg,#FFD3B6,#FFAAA5)','linear-gradient(135deg,#FFDAB9,#FFE4B5)'],status:'showing'},
    {id:3,initId:1,text:'社区清洁日第三天，楼道焕然一新，大家都说好！',user:'微信用户C',org:'社区A队',orgLevel:3,date:'2026-06-24 16:20',color:'linear-gradient(135deg,#B5EAD7,#C7CEEA)',images:['linear-gradient(135deg,#B5EAD7,#C7CEEA)','linear-gradient(135deg,#C5CAE9,#7986CB)','linear-gradient(135deg,#BBDEFB,#90CAF9)','linear-gradient(135deg,#B2DFDB,#80CBC4)'],status:'showing'},
    {id:4,initId:1,text:'整理了社区活动室的书架，给图书重新分类整理。',user:'微信用户D',org:'社区B队',orgLevel:3,date:'2026-06-24 14:50',color:'linear-gradient(135deg,#E2F0CB,#FFDAC1)',status:'showing'},
    {id:5,initId:1,text:'周末参加了河边清理活动，捡了两大袋垃圾...',user:'微信用户E',org:'华南分会',orgLevel:2,date:'2026-06-26 08:30',color:'linear-gradient(135deg,#FFDAB9,#FFE4B5)',status:'pending'},
    {id:6,initId:1,text:'和小伙伴们清理了学校周边的小路，走路舒服多了！',user:'微信用户F',org:'社区A队',orgLevel:3,date:'2026-06-26 07:45',color:'linear-gradient(135deg,#D4E2D4,#CAD2C5)',status:'pending'},
    {id:7,initId:1,text:'组织了小区垃圾分类宣传，发放了100份传单',user:'微信用户H',org:'阳光基金会',orgLevel:1,date:'2026-06-23 15:00',color:'linear-gradient(135deg,#C5CAE9,#7986CB)',status:'pending'},
    {id:8,initId:1,text:'该帖子内容不符合社区规范...',user:'微信用户G',org:'华东分会',orgLevel:2,date:'2026-06-23 11:20',color:'#E8E8E8',status:'hidden',hiddenBy:'ops'},
    {id:9,initId:1,text:'广告内容，已隐藏处理。',user:'微信用户I',org:'社区B队',orgLevel:3,date:'2026-06-22 09:10',color:'#E8E8E8',status:'hidden',hiddenBy:'org'},
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
    {id:20,initId:5,text:'社区邻里分享了自家种的蔬菜，满满的幸福感！',user:'微信用户A',org:'阳光基金会',orgLevel:1,date:'2026-06-13 17:30',color:'linear-gradient(135deg,#DCEDC8,#C5E1A5)',status:'showing'},
    // ==== 关爱独居老人（initId 2）补充 ====
    {id:21,initId:2,text:'去敬老院给老人们表演了节目，看到他们笑得开心，特别有成就感。',user:'微信用户E',org:'绿色家园',orgLevel:1,date:'2026-06-22 14:10',color:'linear-gradient(135deg,#FFE0B2,#FFCC80)',status:'showing'},
    {id:22,initId:2,text:'帮王奶奶量了血压、整理了药箱，叮嘱她按时吃药。',user:'微信用户H',org:'社区B队',orgLevel:3,date:'2026-06-21 10:50',color:'linear-gradient(135deg,#F8BBD0,#F48FB1)',status:'showing'},
    {id:23,initId:2,text:'给独居老人送去新鲜水果，陪他们看了下午的电视。',user:'微信用户F',org:'华北分会',orgLevel:2,date:'2026-06-20 16:00',color:'linear-gradient(135deg,#D1C4E9,#B39DDB)',status:'showing'},
    // ==== 绿色出行周（initId 3）补充 ====
    {id:24,initId:3,text:'今天全家步行去超市，来回 3 公里，既省钱又锻炼身体。',user:'微信用户A',org:'阳光基金会',orgLevel:1,date:'2026-06-21 09:50',color:'linear-gradient(135deg,#C8E6C9,#A5D6A7)',status:'showing'},
    {id:25,initId:3,text:'地铁通勤一周，给地球减少了 8 公斤碳排放，加油！',user:'微信用户H',org:'社区B队',orgLevel:3,date:'2026-06-22 18:20',color:'linear-gradient(135deg,#B3E5FC,#81D4FA)',status:'showing'},
    {id:26,initId:3,text:'公司组织拼车上下班，5 个同事拼一辆，节能又环保。',user:'微信用户D',org:'华南分会',orgLevel:2,date:'2026-06-23 08:15',color:'linear-gradient(135deg,#A5D6A7,#81C784)',status:'showing'},
    // ==== 节水行动周（initId 4）补充 ====
    {id:27,initId:4,text:'安装了节水龙头，每月预计节省 3 吨水。',user:'微信用户G',org:'华东分会',orgLevel:2,date:'2026-06-22 11:00',color:'linear-gradient(135deg,#B2EBF2,#80DEEA)',status:'showing'},
    {id:28,initId:4,text:'用淘米水浇花，洗澡水冲厕所，节水小妙招分享给大家！',user:'微信用户B',org:'社区A队',orgLevel:3,date:'2026-06-23 17:30',color:'linear-gradient(135deg,#E0F2F1,#B2DFDB)',status:'showing'},
    {id:29,initId:4,text:'修好了家里漏水的水龙头，节水从一滴开始！',user:'微信用户C',org:'阳光基金会',orgLevel:1,date:'2026-06-24 14:20',color:'linear-gradient(135deg,#FFF9C4,#FFF59D)',status:'showing'},
    // ==== 邻里互助日（initId 5）补充 ====
    {id:30,initId:5,text:'帮邻居取了快递，又一起拼单买菜，省事又省钱。',user:'微信用户I',org:'社区C队',orgLevel:3,date:'2026-06-15 10:30',color:'linear-gradient(135deg,#FFCDD2,#EF9A9A)',status:'showing'},
    {id:31,initId:5,text:'楼下小朋友放学没人接，帮忙照看了一下午。',user:'微信用户J',org:'社区D队',orgLevel:3,date:'2026-06-16 17:00',color:'linear-gradient(135deg,#DCEDC8,#C5E1A5)',status:'showing'},
    // ==== 0628 自定义倡议（initId 8）— 不同下级组织发的不同主题帖子 ====
    // 华东分会 · 河岸清洁志愿行动
    {id:32,initId:8,text:'今天黄浦江畔捡了三大袋垃圾，一边清理一边给路人科普。',user:'微信用户A',org:'华东分会',orgLevel:2,date:'2026-06-29 09:30',color:'linear-gradient(135deg,#B5EAD7,#C7CEEA)',status:'showing'},
    {id:33,initId:8,text:'河岸边的塑料瓶比我们想象的多得多，下次还要再来。',user:'微信用户B',org:'华东分会',orgLevel:2,date:'2026-06-29 10:45',color:'linear-gradient(135deg,#C5CAE9,#7986CB)',status:'showing'},
    {id:34,initId:8,text:'第二批志愿者已经接力上场，江畔越来越干净了！',user:'微信用户C',org:'华东分会',orgLevel:2,date:'2026-06-30 08:50',color:'linear-gradient(135deg,#A8E6CF,#DCEDC1)',status:'showing'},
    // 华南分会 · 社区垃圾分类宣传
    {id:35,initId:8,text:'在天河区某社区设了宣传摊，发出 200 多份分类指南。',user:'微信用户D',org:'华南分会',orgLevel:2,date:'2026-06-29 14:10',color:'linear-gradient(135deg,#FFD3B6,#FFAAA5)',status:'showing'},
    {id:36,initId:8,text:'手把手教大爷大妈分类，他们可认真听了！',user:'微信用户E',org:'华南分会',orgLevel:2,date:'2026-06-29 15:30',color:'linear-gradient(135deg,#FFE0B2,#FFCC80)',status:'showing'},
    {id:37,initId:8,text:'给小朋友设计的趣味分类小游戏特别受欢迎。',user:'微信用户F',org:'华南分会',orgLevel:2,date:'2026-06-30 10:20',color:'linear-gradient(135deg,#FFDAB9,#FFE4B5)',status:'showing'},
    // 华北分会 · 公园环境维护日
    {id:38,initId:8,text:'朝阳公园今早环境特别好，我们把湖边的烟头都捡完了。',user:'微信用户G',org:'华北分会',orgLevel:2,date:'2026-06-28 08:30',color:'linear-gradient(135deg,#B2DFDB,#80CBC4)',status:'showing'},
    {id:39,initId:8,text:'把破损的长椅修好了，路过的爷爷连声道谢。',user:'微信用户H',org:'华北分会',orgLevel:2,date:'2026-06-28 11:15',color:'linear-gradient(135deg,#FFF9C4,#FFF59D)',status:'showing'},
    // 社区A队 · 楼道公共空间整理
    {id:40,initId:8,text:'楼道里堆了一年的杂物终于清理完了，邻居们都来帮忙。',user:'微信用户I',org:'社区A队',orgLevel:3,date:'2026-06-28 16:40',color:'linear-gradient(135deg,#BBDEFB,#90CAF9)',status:'showing'},
    {id:41,initId:8,text:'重新刷了楼道墙面，画了简单的环保宣传画。',user:'微信用户J',org:'社区A队',orgLevel:3,date:'2026-06-29 14:00',color:'linear-gradient(135deg,#C8E6C9,#A5D6A7)',status:'showing'},
    // 社区B队 · 敬老院探访
    {id:42,initId:8,text:'去敬老院陪老人聊天、唱歌，老人们很开心。',user:'微信用户K',org:'社区B队',orgLevel:3,date:'2026-06-29 10:00',color:'linear-gradient(135deg,#F8BBD0,#F48FB1)',status:'showing'},
    {id:43,initId:8,text:'给老人们带了亲手做的小点心，他们一直夸好吃。',user:'微信用户A',org:'社区B队',orgLevel:3,date:'2026-06-29 15:30',color:'linear-gradient(135deg,#FFCDD2,#EF9A9A)',status:'showing'},
    // 志愿先锋队 · 已被本级隐藏（演示用：1 条 hidden）
    {id:44,initId:8,text:'广告内容（已被本级隐藏）',user:'微信用户B',org:'志愿先锋队',orgLevel:3,date:'2026-06-29 18:00',color:'#E8E8E8',status:'hidden',hiddenBy:'org'}
  ],
  nextPostId: 45,
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
  if (id === 'org') renderOrgTable();
  if (id === 'initiative') renderInitiatives();
  if (id === 'data-center') setTimeout(initCharts, 100);
  if (id === 'quanmu') {} // 占位
}

function updateHeaderActions(_id) { /* no-op: 已移除内容头 */ }

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
  const selName = document.getElementById('orgCascaderValue')?.value || '';
  const search = document.getElementById('orgSearch')?.value?.toLowerCase() || '';
  const levels = getSelectedLevels();

  return DATA.orgs.filter(o => {
    // 级联筛选：选中某个组织时，展示该组织及其所有下级
    if (selName && o.name !== selName && !(o.parents || []).includes(selName)) return false;
    // 仅查看：勾选层级时只显示对应层级组织
    if (levels.length && !levels.includes(o.level)) return false;
    if (search && !o.name.toLowerCase().includes(search) && !o.leader.toLowerCase().includes(search) && !o.id.toLowerCase().includes(search)) return false;
    return true;
  });
}

// ===== 仅查看·层级多选筛选 =====
function getSelectedLevels() {
  return Array.from(document.querySelectorAll('#levelFilterPanel input[type=checkbox]:checked')).map(c => parseInt(c.value));
}
function toggleLevelFilter(e) {
  e.stopPropagation();
  const panel = document.getElementById('levelFilterPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}
function applyLevelFilter() {
  const levels = getSelectedLevels().sort((a,b)=>a-b);
  const input = document.getElementById('levelFilterInput');
  const clear = document.getElementById('levelFilterClear');
  if (levels.length) {
    input.value = levels.map(l => '一二三四五'[l-1] + '级').join('、');
    clear.style.display = 'block';
  } else {
    input.value = '';
    clear.style.display = 'none';
  }
  renderOrgTable();
}
function clearLevelFilter(e) {
  if (e) e.stopPropagation();
  document.querySelectorAll('#levelFilterPanel input[type=checkbox]').forEach(c => c.checked = false);
  document.getElementById('levelFilterPanel').style.display = 'none';
  applyLevelFilter();
}
document.addEventListener('click', function(e) {
  const wrap = document.getElementById('levelFilter');
  if (wrap && !wrap.contains(e.target)) {
    const panel = document.getElementById('levelFilterPanel');
    if (panel) panel.style.display = 'none';
  }
});

// 渲染上级组织路径
function orgParentPath(o) {
  if (!o.parents || o.parents.length === 0) return '<span style="color:var(--text-hint)">—</span>';
  return o.parents.join(' / ');
}

function renderOrgTable() {
  const filtered = getFilteredOrgs();
  const tbody = document.getElementById('orgTableBody');
  if (!tbody) return;
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--text-hint)">没有找到匹配的组织</td></tr>`;
    document.getElementById('orgCount').textContent = `共 0 个组织`;
    return;
  }
  tbody.innerHTML = filtered.map(o => `
    <tr data-id="${o.id}">
      <td>${o.id}</td>
      <td style="font-weight:${o.level===1?'600':'400'}">${o.name}</td>
      <td><span class="layer-tag layer-${o.level}">${'一二三四五'[o.level-1]}级</span></td>
      <td style="font-size:12px;color:var(--text-secondary)">${orgParentPath(o)}</td>
      <td>${o.leader}</td><td>${o.phone.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2')}</td>
      <td class="actions-cell">
        <a class="btn-link" onclick="openEditOrgModal('${o.id}')">编辑</a>
        <a class="btn-link btn-danger" onclick="confirmDeleteOrg('${o.id}')">删除</a>
      </td>
    </tr>`).join('');
  document.getElementById('orgCount').textContent = `共 ${filtered.length} 个组织`;
}

// ===== 组织层级级联选择器 =====
let orgCascaderSel = []; // 已选路径（按层级的组织名称）

function orgsForCascaderColumn(colIdx) {
  const level = colIdx + 1;
  const prefix = orgCascaderSel.slice(0, colIdx);
  return DATA.orgs.filter(o => {
    if (o.level !== level) return false;
    if ((o.parents || []).length !== colIdx) return false;
    for (let k = 0; k < colIdx; k++) { if (o.parents[k] !== prefix[k]) return false; }
    return true;
  });
}

function toggleOrgCascader(e) {
  e.stopPropagation();
  const panel = document.getElementById('orgCascaderPanel');
  const open = panel.style.display !== 'none';
  panel.style.display = open ? 'none' : 'flex';
  if (!open) {
    // 未提交筛选时，从已选值同步展开路径（无值则收起到顶层）
    if (!document.getElementById('orgCascaderValue').value) orgCascaderSel = [];
    renderOrgCascaderColumns();
  }
}

function renderOrgCascaderColumns() {
  const panel = document.getElementById('orgCascaderPanel');
  let cols = '';
  for (let i = 0; i < 5; i++) {
    if (i > 0 && !orgCascaderSel[i - 1]) break;
    const items = orgsForCascaderColumn(i);
    if (items.length === 0) break;
    cols += `<div class="org-cascader-col">` + items.map(o => {
      const active = orgCascaderSel[i] === o.name;
      const hasChild = DATA.orgs.some(x => x.level === o.level + 1 && (x.parents || [])[i] === o.name && x.parents.length === i + 1);
      return `<div class="org-cascader-item ${active ? 'active' : ''}" onmouseenter="hoverOrgCascader(${i},'${o.name}')" onclick="selectOrgCascader(${i},'${o.name}')">
        <span>${o.name}</span>${hasChild ? '<span class="arrow">›</span>' : ''}
      </div>`;
    }).join('') + `</div>`;
  }
  panel.innerHTML = cols || `<div class="org-cascader-empty">暂无组织</div>`;
}

// 悬浮即展开下一级（不提交筛选）
function hoverOrgCascader(colIdx, name) {
  if (orgCascaderSel[colIdx] === name && orgCascaderSel.length === colIdx + 1) return;
  orgCascaderSel = orgCascaderSel.slice(0, colIdx);
  orgCascaderSel[colIdx] = name;
  renderOrgCascaderColumns();
}

function selectOrgCascader(colIdx, name) {
  orgCascaderSel = orgCascaderSel.slice(0, colIdx);
  orgCascaderSel[colIdx] = name;
  document.getElementById('orgCascaderValue').value = name;
  document.getElementById('orgCascaderInput').value = orgCascaderSel.join(' / ');
  document.getElementById('orgCascaderClear').style.display = 'block';
  document.getElementById('orgCascaderPanel').style.display = 'none';
  renderOrgTable();
}

function clearOrgCascader(e) {
  if (e) e.stopPropagation();
  orgCascaderSel = [];
  document.getElementById('orgCascaderValue').value = '';
  document.getElementById('orgCascaderInput').value = '';
  document.getElementById('orgCascaderClear').style.display = 'none';
  document.getElementById('orgCascaderPanel').style.display = 'none';
  renderOrgTable();
}

// 点击其他区域关闭级联面板
document.addEventListener('click', function(e) {
  const cascader = document.getElementById('orgCascader');
  if (cascader && !cascader.contains(e.target)) {
    const panel = document.getElementById('orgCascaderPanel');
    if (panel) panel.style.display = 'none';
  }
});

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
  const candidates = DATA.orgs.filter(o => o.level <= 4);
  const filtered = keyword ? candidates.filter(o => o.name.toLowerCase().includes(keyword.toLowerCase())) : candidates;
  if (filtered.length === 0) {
    dropdown.innerHTML = '<div style="padding:10px 12px;font-size:12px;color:var(--text-hint);text-align:center;">未找到匹配的组织</div>';
  } else {
    dropdown.innerHTML = filtered.map(o =>
      `<div class="parent-org-option" style="padding:8px 12px;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:6px;padding-left:${8+(o.level-1)*16}px" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background=''" onclick="selectParentOrg('${o.name}',${o.level})">
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三四五'[o.level-1]}级</span>
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
  if (newLevel > 5) {
    document.getElementById('orgLevelHint').style.display = 'block';
    document.getElementById('orgLevelHintText').textContent = '最多支持五级组织，请重新选择上级';
    document.querySelector('#orgLevelHint > div').style.background = '#FFF2E8';
    document.querySelector('#orgLevelHint > div').style.color = '#D4380D';
  } else {
    document.getElementById('orgLevelHint').style.display = 'block';
    document.getElementById('orgLevelHintText').textContent = `当前创建组织为${'一二三四五'[newLevel-1]}级组织`;
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
  if (!name || !leader || !phone) { showToast('请填写所有必填项'); return; }
  if (!isTopLevel && !parent) { showToast('请选择归属上级组织'); return; }
  let level = 1, parents = [];
  if (!isTopLevel && parent) {
    const pOrg = DATA.orgs.find(o => o.name === parent);
    if (!pOrg) { showToast('未找到所选上级组织'); return; }
    level = pOrg.level + 1;
    if (level > 5) { showToast('最多支持五级组织'); return; }
    parents = [...(pOrg.parents || []), pOrg.name];
  }
  const p = ['—','—','—','—'];
  parents.forEach((nm, i) => { p[i] = nm; });
  const newOrg = {id:'ORG'+String(DATA.nextOrgId++).padStart(3,'0'),name,level,parents,parent1:p[0],parent2:p[1],parent3:p[2],parent4:p[3],leader,phone,initCount:0,postCount:0,location};
  DATA.orgs.push(newOrg);
  closeModal('createOrgModal');
  renderOrgTable();
  showToast(`组织「${name}」创建成功（${'一二三四五'[level-1]}级组织）`);
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
  DATA.orgs.filter(x => x.level <= 4 && x.id !== id).forEach(x => {
    const indent = '　'.repeat(x.level - 1);
    parentSelect.innerHTML += `<option value="${x.name}">${indent}${'一二三四五'[x.level-1]}级 · ${x.name}</option>`;
  });
  const currentParent = (o.parents && o.parents.length) ? o.parents[o.parents.length - 1] : '';
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
  const parentName = document.getElementById('editOrgParent').value;
  if (!name || !leader || !phone || !location) { showToast('请填写所有必填项'); return; }
  // 处理上级变更 → 重新计算层级与上级链路
  let level = 1, parents = [];
  if (parentName) {
    const pOrg = DATA.orgs.find(x => x.name === parentName);
    if (!pOrg) { showToast('未找到所选上级组织'); return; }
    if (pOrg.id === id) { showToast('上级组织不能是自己'); return; }
    level = pOrg.level + 1;
    if (level > 5) { showToast('最多支持五级组织'); return; }
    parents = [...(pOrg.parents || []), pOrg.name];
  }
  const p = ['—','—','—','—'];
  parents.forEach((nm, i) => { p[i] = nm; });
  o.name = name; o.leader = leader; o.phone = phone; o.location = location;
  o.level = level; o.parents = parents;
  o.parent1 = p[0]; o.parent2 = p[1]; o.parent3 = p[2]; o.parent4 = p[3];
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

// ===== 通用：下载文件（带 BOM，Excel 可正常识别中文） =====
function downloadCSV(filename, rows) {
  const csv = rows.map(r => r.map(cell => {
    const s = (cell == null ? '' : String(cell));
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }).join(',')).join('\r\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ===== 批量创建组织：下载含示例的模板 =====
function downloadOrgTemplate() {
  const rows = [
    ['一级组织','二级组织','三级组织','四级组织','五级组织','负责人','负责人电话'],
    ['阳光基金会','华东分会','社区A队','浦东街道服务站','世纪村志愿组','周晓','13600004444'],
    ['阳光基金会','华东分会','社区B队','','','赵六','13600003456']
  ];
  downloadCSV('批量创建组织模板（含示例）.csv', rows);
  showToast('模板已下载，含示例行可直接参考');
}

// ===== 批量创建组织：上传文件识别 =====
let importParseResult = null;
function openImportOrgModal() {
  importParseResult = null;
  document.getElementById('importPreview').style.display = 'none';
  document.getElementById('importFileName').textContent = '点击或拖拽文件到此处上传';
  const fileInput = document.getElementById('importOrgFile');
  if (fileInput) fileInput.value = '';
  document.getElementById('importOrgConfirmBtn').disabled = true;
  openModal('importOrgModal');
}
function handleImportOrgFile(input) {
  const file = input.files && input.files[0];
  document.getElementById('importFileName').textContent = file ? file.name : '点击或拖拽文件到此处上传';
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try { parseImportContent(e.target.result); }
    catch (err) { showToast('文件解析失败，请使用标准模板'); }
  };
  reader.readAsText(file, 'utf-8');
}

function parseImportContent(text) {
  // 解析 CSV（兼容模板表头），识别需新增组织与负责人电话
  const lines = text.replace(/^\ufeff/, '').split(/\r?\n/).filter(l => l.trim() !== '');
  if (lines.length <= 1) { showToast('文件内容为空'); return; }
  const split = l => {
    const out = []; let cur = '', q = false;
    for (let i = 0; i < l.length; i++) {
      const c = l[i];
      if (c === '"') { if (q && l[i+1] === '"') { cur += '"'; i++; } else q = !q; }
      else if (c === ',' && !q) { out.push(cur); cur = ''; }
      else cur += c;
    }
    out.push(cur); return out.map(s => s.trim());
  };
  const existingNames = new Set(DATA.orgs.map(o => o.name));
  const newOrgsMap = new Map(); // name -> {name, level, parents, leader, phone}
  for (let r = 1; r < lines.length; r++) {
    const cells = split(lines[r]);
    const chain = [cells[0], cells[1], cells[2], cells[3], cells[4]].map(s => (s || '').trim());
    const leader = (cells[5] || '').trim();
    const phone  = (cells[6] || '').trim();
    let parents = [];
    chain.forEach((nm, idx) => {
      if (!nm) return;
      const level = idx + 1;
      if (!existingNames.has(nm) && !newOrgsMap.has(nm)) {
        newOrgsMap.set(nm, { name: nm, level, parents: [...parents], leader: '', phone: '' });
      }
      parents.push(nm);
    });
    // 负责人信息归属到最末级组织
    const lastName = [...chain].reverse().find(n => n);
    if (lastName && newOrgsMap.has(lastName)) {
      const target = newOrgsMap.get(lastName);
      if (leader) target.leader = leader;
      if (phone)  target.phone  = phone;
    }
  }
  importParseResult = Array.from(newOrgsMap.values());
  renderImportPreview();
}

function renderImportPreview() {
  const preview = document.getElementById('importPreview');
  const body = document.getElementById('importPreviewBody');
  const summary = document.getElementById('importPreviewSummary');
  const btn = document.getElementById('importOrgConfirmBtn');
  if (!importParseResult || importParseResult.length === 0) {
    preview.style.display = 'block';
    summary.innerHTML = '未识别到需要新增的组织（可能均已存在），请检查文件内容。';
    body.innerHTML = '';
    btn.disabled = true;
    return;
  }
  summary.innerHTML = `识别完成：本次将新增 <strong>${importParseResult.length}</strong> 个组织。请确认后导入。`;
  body.innerHTML = importParseResult.map(o => `
    <tr>
      <td>${o.name}</td>
      <td><span class="layer-tag layer-${o.level}">${'一二三四五'[o.level-1]}级</span></td>
      <td>${o.leader ? o.leader + (o.phone ? ' / ' + o.phone : '') : '<span style="color:var(--text-hint)">待完善</span>'}</td>
    </tr>`).join('');
  preview.style.display = 'block';
  btn.disabled = false;
}

function confirmImportOrgs() {
  if (!importParseResult || importParseResult.length === 0) { showToast('没有可导入的组织'); return; }
  // 按层级从小到大写入，保证上级先建立
  const sorted = [...importParseResult].sort((a, b) => a.level - b.level);
  sorted.forEach(item => {
    if (DATA.orgs.some(o => o.name === item.name)) return;
    const p = ['—','—','—','—'];
    item.parents.forEach((nm, i) => { p[i] = nm; });
    DATA.orgs.push({
      id: 'ORG' + String(DATA.nextOrgId++).padStart(3, '0'),
      name: item.name, level: item.level, parents: [...item.parents],
      parent1: p[0], parent2: p[1], parent3: p[2], parent4: p[3],
      leader: '待完善', phone: '00000000000', initCount: 0, postCount: 0, location: ''
    });
  });
  const count = sorted.length;
  importParseResult = null;
  document.getElementById('importPreview').style.display = 'none';
  document.getElementById('importFileName').textContent = '点击或拖拽文件到此处上传';
  document.getElementById('importOrgFile').value = '';
  document.getElementById('importOrgConfirmBtn').disabled = true;
  closeModal('importOrgModal');
  renderOrgTable();
  showToast(`成功导入 ${count} 个组织`);
}

// ===========================================
// 通用：组织层级选择器（搜索 + 下拉 + 懒加载 + 父级联动子级）
// ===========================================
/**
 * 初始化一个 .org-tree-picker 容器
 * 行为：
 *   - 点击/聚焦输入框 → 展开下拉
 *   - 下拉默认只展示一级组织；点击行首▸展开二级
 *   - 勾选父级 → 自动勾选全部子级
 *   - 文本框输入关键词 → 模糊匹配组织名，仅展示命中项及其祖先链
 *   - 顶部小工具：清空 / 展开全部
 *   - 底部 summary：实时显示已选数量
 */
function otpRender(picker) {
  const panel = picker.querySelector('.otp-panel');
  const input = picker.querySelector('.otp-search-input');
  const keyword = (input.value || '').trim().toLowerCase();
  // 1. 找到命中的组织 ID 集合 + 补齐所有祖先
  let visibleIds = new Set();
  if (keyword) {
    DATA.orgs.forEach(o => {
      if (o.name.toLowerCase().includes(keyword)) {
        visibleIds.add(o.id);
        (o.parents || []).forEach(p => {
          const pOrg = DATA.orgs.find(x => x.name === p);
          if (pOrg) visibleIds.add(pOrg.id);
        });
      }
    });
  }
  const isVisible = (org) => !keyword || visibleIds.has(org.id);
  // 2. 拿到一级组织（无搜索时全部展示，搜索时按命中）
  const roots = DATA.orgs.filter(o => o.level === 1 && isVisible(o));
  // 3. 工具栏 + summary
  const checkedCount = picker.querySelectorAll('.otp-checkbox:checked').length;
  const toolsHtml = `
    <div class="otp-tools">
      <span>共 ${DATA.orgs.length} 个组织</span>
      <span>
        <a onclick="otpExpandAll(this)">展开全部</a>
        <a onclick="otpClearAll(this)">清空</a>
      </span>
    </div>`;
  const summaryHtml = `<div class="otp-summary">已选 <strong>${checkedCount}</strong> 个组织</div>`;
  // 4. 渲染树
  if (roots.length === 0) {
    panel.innerHTML = toolsHtml + `<div class="otp-empty">未找到匹配的组织</div>` + summaryHtml;
    return;
  }
  panel.innerHTML = toolsHtml + roots.map(o => otpRenderNode(o, isVisible, 0)).join('') + summaryHtml;
}

function otpRenderNode(org, isVisible, depth) {
  const kids = DATA.orgs.filter(o => o.level === org.level + 1 && (o.parents || []).length === org.level && (o.parents || [])[org.level - 1] === org.name);
  const hasKids = kids.length > 0;
  // 搜索时若没有命中该项本身（只为了展示父链）且该项不是祖先链上的一环，则略过 —— 实际 isVisible 已通过祖先链补齐
  const isExpanded = isVisible; // 搜索时父链节点强制展开
  const childrenHtml = (hasKids && isExpanded) ? `<div class="otp-children">${kids.filter(k => isVisible(k)).map(k => otpRenderNode(k, isVisible, depth + 1)).join('')}</div>` : '';
  return `
    <div class="otp-node" data-org-id="${org.id}">
      <span class="otp-toggle ${hasKids ? 'has-children' : 'empty'} ${isExpanded && hasKids ? 'expanded' : ''}" onclick="otpToggle(this,event)">${hasKids ? '▸' : ''}</span>
      <input type="checkbox" class="otp-checkbox" data-org-id="${org.id}" onchange="otpCheck(this)">
      <span class="layer-tag layer-${org.level}" style="font-size:10px;padding:0 4px;flex-shrink:0">${'一二三四五'[org.level-1]}级</span>
      <span>${org.name}</span>
    </div>${childrenHtml}`;
}

function otpToggle(toggleEl, ev) {
  ev.stopPropagation();
  if (toggleEl.classList.contains('empty')) return;
  const node = toggleEl.closest('.otp-node');
  const orgId = parseInt(node.dataset.orgId);
  const org = DATA.orgs.find(o => o.id === orgId);
  if (!org) return;
  const kids = DATA.orgs.filter(o => o.level === org.level + 1 && (o.parents || []).length === org.level && (o.parents || [])[org.level - 1] === org.name);
  if (kids.length === 0) return;
  const childrenContainer = node.nextElementSibling;
  if (childrenContainer && childrenContainer.classList.contains('otp-children')) {
    childrenContainer.remove();
    toggleEl.classList.remove('expanded');
  } else {
    const isVisible = () => true;
    const wrap = document.createElement('div');
    wrap.className = 'otp-children';
    wrap.innerHTML = kids.map(k => otpRenderNode(k, isVisible, 0)).join('');
    node.after(wrap);
    toggleEl.classList.add('expanded');
  }
}

function otpCheck(cb) {
  const orgId = parseInt(cb.dataset.orgId);
  const org = DATA.orgs.find(o => o.id === orgId);
  if (!org) return;
  const checked = cb.checked;
  // 父级勾选 → 所有子孙自动勾选
  const toggleDescendants = (parentOrg, flag) => {
    const kids = DATA.orgs.filter(o => o.level === parentOrg.level + 1 && (o.parents || []).length === parentOrg.level && (o.parents || [])[parentOrg.level - 1] === parentOrg.name);
    kids.forEach(k => {
      const kidCb = document.querySelector(`.otp-checkbox[data-org-id="${k.id}"]`);
      if (kidCb) {
        kidCb.checked = flag;
        toggleDescendants(k, flag);
      }
    });
  };
  toggleDescendants(org, checked);
  // 更新 summary
  const picker = cb.closest('.org-tree-picker');
  otpUpdateSummary(picker);
}

function otpUpdateSummary(picker) {
  const summary = picker.querySelector('.otp-summary');
  if (!summary) return;
  const checkedCount = picker.querySelectorAll('.otp-checkbox:checked').length;
  summary.innerHTML = `已选 <strong>${checkedCount}</strong> 个组织`;
}

function otpOpen(picker) {
  // 关闭其他已展开的 picker
  document.querySelectorAll('.org-tree-picker.open').forEach(p => { if (p !== picker) p.classList.remove('open'); });
  picker.classList.add('open');
  if (!picker.dataset.initialized) {
    otpRender(picker);
    picker.dataset.initialized = '1';
  }
}

function otpFilter(picker) {
  otpRender(picker);
  picker.classList.add('open');
}

function otpExpandAll(toolsA) {
  const picker = toolsA.closest('.org-tree-picker');
  // 展开所有节点
  DATA.orgs.filter(o => o.level === 1).forEach(root => {
    let cur = root;
    while (true) {
      const node = picker.querySelector(`.otp-node[data-org-id="${cur.id}"]`);
      if (!node) break;
      const toggle = node.querySelector('.otp-toggle');
      if (toggle && toggle.classList.contains('has-children') && !toggle.classList.contains('expanded')) {
        const kids = DATA.orgs.filter(o => o.level === cur.level + 1 && (o.parents || []).length === cur.level && (o.parents || [])[cur.level - 1] === cur.name);
        if (kids.length === 0) break;
        const wrap = document.createElement('div');
        wrap.className = 'otp-children';
        wrap.innerHTML = kids.map(k => otpRenderNode(k, () => true, 0)).join('');
        node.after(wrap);
        toggle.classList.add('expanded');
        cur = kids[0];
      } else { break; }
    }
  });
}

function otpClearAll(toolsA) {
  const picker = toolsA.closest('.org-tree-picker');
  picker.querySelectorAll('.otp-checkbox').forEach(cb => cb.checked = false);
  otpUpdateSummary(picker);
}

// 取已勾选组织 ID 列表
function otpGetCheckedIds(pickerId) {
  const picker = document.getElementById(pickerId);
  if (!picker) return [];
  return [...picker.querySelectorAll('.otp-checkbox:checked')].map(cb => parseInt(cb.dataset.orgId));
}

// 取已勾选组织对象
function otpGetCheckedOrgs(pickerId) {
  return otpGetCheckedIds(pickerId).map(id => DATA.orgs.find(o => o.id === id)).filter(Boolean);
}

// 重置：全部勾选（用于弹窗打开时默认全选）
function otpCheckAll(pickerId) {
  const picker = document.getElementById(pickerId);
  if (!picker) return;
  // 渲染一次以确保所有 checkbox 存在
  if (!picker.dataset.initialized) otpRender(picker);
  picker.querySelectorAll('.otp-checkbox').forEach(cb => cb.checked = true);
  otpUpdateSummary(picker);
  picker.dataset.initialized = '1';
}

// 全不选
function otpCheckNone(pickerId) {
  const picker = document.getElementById(pickerId);
  if (!picker) return;
  picker.querySelectorAll('.otp-checkbox').forEach(cb => cb.checked = false);
  otpUpdateSummary(picker);
}

// 全局：点击其他地方关闭所有 picker
document.addEventListener('click', e => {
  document.querySelectorAll('.org-tree-picker.open').forEach(p => {
    if (!p.contains(e.target)) p.classList.remove('open');
  });
});

// ===== 批量导出组织 =====
function openExportOrgModal() {
  // 初始化新组件 picker：默认全部勾选
  const picker = document.getElementById('exportOrgPicker');
  if (picker) {
    delete picker.dataset.initialized;
    otpRender(picker);
    picker.dataset.initialized = '1';
    otpCheckAll('exportOrgPicker');
  }
  openModal('exportOrgModal');
}
function confirmExportOrgs() {
  const checkedIds = new Set(otpGetCheckedIds('exportOrgPicker'));
  const list = DATA.orgs.filter(o => checkedIds.has(o.id));
  if (list.length === 0) { showToast('请至少勾选一个组织'); return; }
  const rows = [['组织ID','组织名称','层级','上级组织','负责人','手机号']];
  list.forEach(o => {
    rows.push([
      o.id, o.name, ('一二三四五'[o.level-1] + '级'),
      (o.parents && o.parents.length ? o.parents.join(' / ') : '—'),
      o.leader, o.phone
    ]);
  });
  downloadCSV('组织列表导出.csv', rows);
  closeModal('exportOrgModal');
  showToast(`已导出 ${list.length} 个组织数据`);
}

// ========================
// 好事发布器（倡议管理）
// ========================
let initListSort = { key: 'createDate', asc: false }; // 默认按创建时间倒序

function getFilteredInitiatives() {
  const dateFrom = document.getElementById('initDateFrom')?.value || '';
  const dateTo = document.getElementById('initDateTo')?.value || '';
  const search = document.getElementById('initSearch')?.value?.toLowerCase() || '';
  const orgFilter = document.getElementById('initOrgFilter')?.value || '';
  const typeFilter = document.getElementById('initTypeFilter')?.value || '';
  return DATA.initiatives.filter(i => {
    if (i.isDraft) return false;
    if (dateFrom && i.createDate < dateFrom) return false;
    if (dateTo && i.createDate > dateTo) return false;
    if (search && !i.title.toLowerCase().includes(search) && !(i.desc||'').toLowerCase().includes(search) && !(i.remark||'').toLowerCase().includes(search)) return false;
    if (orgFilter) {
      const initPosts = DATA.posts.filter(p => p.initId === i.id);
      const initOrgs = new Set(initPosts.map(p => p.org));
      if (!initOrgs.has(orgFilter)) return false;
    }
    if (typeFilter === 'unified' && i.customByChild) return false;
    if (typeFilter === 'custom' && !i.customByChild) return false;
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
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三四五'[o.level-1]}级</span>
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
  const tbody = document.getElementById('initListBody');
  if (!tbody) return;
  // 排序
  const { key, asc } = initListSort;
  const sorted = [...filtered].sort((a, b) => {
    const va = a[key] ?? 0, vb = b[key] ?? 0;
    if (va === vb) return 0;
    return (va > vb ? 1 : -1) * (asc ? 1 : -1);
  });
  if (sorted.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--text-hint)">没有找到匹配的倡议</td></tr>`;
  } else {
    tbody.innerHTML = sorted.map(i => {
      const isCustom = !!i.customByChild;
      const typeTag = isCustom
        ? '<span class="init-type-tag init-type-custom">自定义倡议</span>'
        : '<span class="init-type-tag init-type-unified">统一倡议</span>';
      const titleText = isCustom ? (i.remark || i.title || '自定义倡议') : i.title;
      const locationText = isCustom ? '—' : (i.location || '不限');
      // 参与人数：根据帖子去重统计，若无则按发帖数 * 0.6 估算
      const usersSet = new Set(DATA.posts.filter(p => p.initId === i.id).map(p => p.user));
      const memberCount = usersSet.size > 0 ? usersSet.size : Math.max(0, Math.round((i.postCount || 0) * 0.6));
      i.memberCount = memberCount; // 写回方便排序
      return `
      <tr style="cursor:pointer" onclick="switchToTopic(${i.id})">
        <td>
          <div class="init-title">${titleText}</div>
          ${isCustom && i.remark ? '<div style="font-size:11px;color:var(--text-hint);margin-top:2px">备注 · 由下级自填</div>' : ''}
        </td>
        <td>${typeTag}</td>
        <td style="font-size:12px;color:var(--text-secondary)">${locationText}</td>
        <td>${i.orgCount}</td>
        <td>${i.postCount.toLocaleString()}</td>
        <td>${memberCount.toLocaleString()}</td>
        <td style="font-size:12px;color:var(--text-secondary)">${i.createDate}</td>
        <td class="actions-cell" onclick="event.stopPropagation()">
          <a class="btn-link" onclick="switchToTopic(${i.id})">查看</a>
          <a class="btn-link" onclick="openEditInitModal(${i.id})">编辑</a>
        </td>
      </tr>`;
    }).join('');
  }
  // 更新排序箭头
  document.querySelectorAll('.init-list-table th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    const arrow = th.querySelector('.sort-arrow');
    if (arrow && arrow.dataset.key === key) {
      th.classList.add(asc ? 'sort-asc' : 'sort-desc');
      arrow.textContent = asc ? '↑' : '↓';
    } else if (arrow) {
      arrow.textContent = '⇅';
    }
  });
  renderDrafts();
}

function sortInitList(key) {
  if (initListSort.key === key) initListSort.asc = !initListSort.asc;
  else { initListSort.key = key; initListSort.asc = false; }
  renderInitiatives();
}

/* ============ 好事发布器双Tab：倡议管理 / 组织发起数据 / 邀请下级发起管理 ============ */
let currentInitMainTab = 'unified';
function switchInitMainTab(tab) {
  currentInitMainTab = tab;
  document.querySelectorAll('#initMainTabs .tab').forEach(t => {
    t.classList.toggle('active', t.dataset.inittab === tab);
  });
  const unified = document.getElementById('initPanel-unified');
  const orgdata = document.getElementById('initPanel-orgdata');
  const invite = document.getElementById('initPanel-invite');
  if (unified) unified.style.display = tab === 'unified' ? 'block' : 'none';
  if (orgdata) orgdata.style.display = tab === 'orgdata' ? 'block' : 'none';
  if (invite) invite.style.display = tab === 'invite' ? 'block' : 'none';
  if (tab === 'invite') renderInviteList();
  if (tab === 'orgdata') renderOrgDataTable();
}

/* ============ 组织发起数据 Tab ============ */
let orgDataSort = { key: 'postCount', asc: false };
function getOrgDataList() {
  const search = (document.getElementById('orgDataSearch')?.value || '').toLowerCase();
  const level = document.getElementById('orgDataLevelFilter')?.value || '';
  return DATA.orgs.filter(o => {
    if (level && o.level !== parseInt(level)) return false;
    if (search && !o.name.toLowerCase().includes(search) && !(o.leader||'').toLowerCase().includes(search)) return false;
    return true;
  }).map(o => {
    // 参与人数：根据帖子去重统计该组织发布人数
    const users = new Set(DATA.posts.filter(p => p.org === o.name).map(p => p.user));
    return {
      id: o.id,
      name: o.name,
      level: o.level,
      parents: o.parents,
      initCount: o.initCount || 0,
      memberCount: users.size || Math.floor((o.postCount || 0) / 8), // 兜底估算
      postCount: o.postCount || 0
    };
  });
}
function renderOrgDataTable() {
  const list = getOrgDataList();
  const { key, asc } = orgDataSort;
  list.sort((a, b) => {
    const va = a[key] ?? 0, vb = b[key] ?? 0;
    if (va === vb) return 0;
    return (va > vb ? 1 : -1) * (asc ? 1 : -1);
  });
  const tbody = document.getElementById('orgDataTableBody');
  const countEl = document.getElementById('orgDataCount');
  if (!tbody) return;
  countEl.textContent = `共 ${list.length} 个组织`;
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-hint)">没有找到匹配的组织</td></tr>`;
  } else {
    tbody.innerHTML = list.map(o => `
      <tr>
        <td style="font-weight:${o.level===1?'600':'400'}">${o.name}</td>
        <td><span class="layer-tag layer-${o.level}">${'一二三四五'[o.level-1]}级</span></td>
        <td style="font-size:12px;color:var(--text-secondary)">${(o.parents && o.parents.length) ? o.parents.join(' / ') : '<span style="color:var(--text-hint)">—</span>'}</td>
        <td>${o.initCount}</td>
        <td>${o.memberCount.toLocaleString()}</td>
        <td>${o.postCount.toLocaleString()}</td>
      </tr>`).join('');
  }
  // 排序箭头
  document.querySelectorAll('#initPanel-orgdata th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    const arrow = th.querySelector('.sort-arrow');
    if (arrow && arrow.dataset.key === key) {
      th.classList.add(asc ? 'sort-asc' : 'sort-desc');
      arrow.textContent = asc ? '↑' : '↓';
    } else if (arrow) {
      arrow.textContent = '⇅';
    }
  });
}
function sortOrgData(key) {
  if (orgDataSort.key === key) orgDataSort.asc = !orgDataSort.asc;
  else { orgDataSort.key = key; orgDataSort.asc = false; }
  renderOrgDataTable();
}

/* ---- 邀请记录列表（Tab2） ---- */
function renderInviteList() {
  const wrap = document.getElementById('inviteList');
  if (!wrap) return;
  const statusFilter = document.getElementById('inviteStatusFilter')?.value || '';
  const list = (DATA.invitations || []).filter(v => !statusFilter || v.status === statusFilter);
  if (list.length === 0) {
    wrap.innerHTML = `<div class="empty-state"><p>暂无邀请记录，点击「批量邀请下级发起倡议」开始</p></div>`;
    return;
  }
  wrap.innerHTML = `<table class="data-table"><thead><tr>
      <th>邀请批次</th><th>邀请层级范围</th><th>被邀请组织数</th><th>已响应</th><th>累计发布</th><th>发起时间</th><th>状态</th><th>操作</th>
    </tr></thead><tbody>${list.map(v => {
      const inviteCount = (v.inviteOrgs || []).length;
      const respCount = (v.responses || []).length;
      const postSum = (v.responses || []).reduce((s, r) => s + (r.posts || 0), 0);
      const statusClass = v.status === '进行中' ? 'color:#1677FF' : 'color:var(--text-hint)';
      return `<tr>
        <td>第 ${v.id} 批邀请</td>
        <td>${v.scopeText}</td>
        <td>${inviteCount}</td>
        <td>${respCount} / ${inviteCount}</td>
        <td>${postSum.toLocaleString()} 条</td>
        <td>${v.createDate}</td>
        <td style="${statusClass}">${v.status}</td>
        <td>
          <a class="btn-link" onclick="viewInviteDetail(${v.id})">查看响应</a>
          <a class="btn-link" onclick="exportInviteQR(${v.id})" style="margin-left:8px">导出二维码</a>
        </td>
      </tr>`;
    }).join('')}</tbody></table>`;
}

function viewInviteDetail(id) {
  const v = (DATA.invitations || []).find(x => x.id === id);
  if (!v) return;
  const responded = v.responses || [];
  const respondedOrgs = responded.map(r => r.org);
  const pending = (v.inviteOrgs || []).filter(o => !respondedOrgs.includes(o));
  const body = document.getElementById('inviteDetailBody');
  body.innerHTML = `
    <div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px">
      <strong>邀请层级范围：</strong>${v.scopeText} ｜ <strong>发起时间：</strong>${v.createDate} ｜ <strong>状态：</strong>${v.status}
    </div>
    <div style="font-size:13px;font-weight:600;margin-bottom:8px">已响应（下级自行填写主题）</div>
    ${responded.length ? `<table class="data-table" style="margin-bottom:16px"><thead><tr><th>下级组织</th><th>倡议主题</th><th>活动地点</th><th>发布数</th><th>响应时间</th></tr></thead><tbody>${responded.map(r => `<tr><td>${r.org}</td><td>${r.title}</td><td>${r.location || '不限'}</td><td>${r.posts}</td><td>${r.date}</td></tr>`).join('')}</tbody></table>` : `<div style="font-size:12px;color:var(--text-hint);margin-bottom:16px">暂无下级响应</div>`}
    <div style="font-size:13px;font-weight:600;margin-bottom:8px">待响应（${pending.length}）</div>
    ${pending.length ? `<div style="display:flex;flex-wrap:wrap;gap:8px">${pending.map(o => `<span style="font-size:12px;background:#FFF7E6;color:#D46B08;border:1px solid #FFD591;padding:3px 10px;border-radius:12px">${o}</span>`).join('')}</div>` : `<div style="font-size:12px;color:var(--text-hint)">全部已响应</div>`}
  `;
  openModal('inviteDetailModal');
}

function exportInviteQR(id) {
  const v = (DATA.invitations || []).find(x => x.id === id);
  if (!v) return;
  showToast(`正在导出第 ${v.id} 批邀请的 ${(v.inviteOrgs||[]).length} 个组织邀请二维码...`);
  setTimeout(() => showToast(`邀请发起倡议二维码 Excel 已下载（${(v.inviteOrgs||[]).length} 个组织）`), 1200);
}

function exportAllInviteQR() {
  const total = (DATA.invitations || []).reduce((s, v) => s + (v.inviteOrgs || []).length, 0);
  if (total === 0) { showToast('暂无邀请记录可导出'); return; }
  showToast('正在导出全部邀请二维码...');
  setTimeout(() => showToast(`邀请发起倡议二维码 Excel 已下载（共 ${total} 个组织）`), 1200);
}

/* ---- 批量邀请下级发起倡议弹窗 ---- */
let lastInviteBatch = null;
function openInviteModal() {
  const sel = document.getElementById('inviteLevelScope');
  if (sel) sel.value = '';
  const search = document.getElementById('inviteOrgSearch');
  if (search) search.value = '';
  const cb = document.getElementById('inviteSelectAllCb');
  if (cb) cb.checked = true;
  renderInviteOrgList();
  openModal('inviteModal');
}

function inviteScopeLevel(scope) {
  // all2 → 2, all3 → 3 ...
  return scope ? parseInt(scope.replace('all', '')) : 0;
}

function renderInviteOrgList() {
  const wrap = document.getElementById('inviteOrgList');
  if (!wrap) return;
  const scope = document.getElementById('inviteLevelScope')?.value || '';
  const kw = (document.getElementById('inviteOrgSearch')?.value || '').trim().toLowerCase();
  if (!scope) {
    wrap.innerHTML = `<div style="padding:16px;text-align:center;font-size:12px;color:var(--text-hint)">请先选择邀请层级范围</div>`;
    return;
  }
  const lv = inviteScopeLevel(scope);
  let orgs = DATA.orgs.filter(o => o.level === lv);
  if (kw) orgs = orgs.filter(o => o.name.toLowerCase().includes(kw));
  if (orgs.length === 0) {
    wrap.innerHTML = `<div style="padding:16px;text-align:center;font-size:12px;color:var(--text-hint)">该层级暂无组织</div>`;
    return;
  }
  wrap.innerHTML = orgs.map(o => `
    <label style="display:flex;align-items:center;gap:8px;padding:6px 4px;font-size:13px;cursor:pointer">
      <input type="checkbox" class="invite-org-cb" value="${o.name}" checked style="accent-color:#1890FF">
      <span>${'一二三四五'[o.level-1]}级 · ${o.name}</span>
      <span style="margin-left:auto;font-size:11px;color:var(--text-hint)">${orgParentPath(o)}</span>
    </label>`).join('');
}

function toggleAllInviteOrgs(checked) {
  document.querySelectorAll('#inviteOrgList .invite-org-cb').forEach(cb => cb.checked = checked);
}

function submitInvite() {
  const scope = document.getElementById('inviteLevelScope')?.value || '';
  if (!scope) { showToast('请选择邀请层级范围'); return; }
  const checked = Array.from(document.querySelectorAll('#inviteOrgList .invite-org-cb:checked')).map(cb => cb.value);
  if (checked.length === 0) { showToast('请至少勾选一个被邀请组织'); return; }
  const scopeTextMap = { all2:'全部二级组织', all3:'全部三级组织', all4:'全部四级组织', all5:'全部五级组织' };
  const record = {
    id: DATA.nextInviteId++,
    levelScope: scope,
    scopeText: scopeTextMap[scope] || '下级组织',
    inviteOrgs: checked,
    createDate: new Date().toISOString().slice(0,10),
    status: '进行中',
    responses: []
  };
  DATA.invitations.unshift(record);
  lastInviteBatch = record;
  closeModal('inviteModal');
  document.getElementById('inviteSuccessCount').textContent = checked.length;
  openModal('inviteSuccessModal');
  if (currentInitMainTab === 'invite') renderInviteList();
}

function exportLastInviteQR() {
  if (lastInviteBatch) exportInviteQR(lastInviteBatch.id);
}

function renderDrafts() {
  const drafts = DATA.initiatives.filter(i => i.isDraft);
  const bar = document.getElementById('draftBar');
  const panel = document.getElementById('draftPanel');
  if (!bar) return;
  bar.textContent = `草稿箱 (${drafts.length})`;
  if (drafts.length === 0) {
    bar.style.display = 'none';
    panel.classList.remove('show');
    // 草稿为空时也要恢复列表显示
    const listPanel = document.querySelector('#initPanel-unified > .panel');
    if (listPanel) listPanel.style.display = '';
    return;
  }
  bar.style.display = 'inline-flex';
  bar.className = 'btn';
  // 草稿列表视图（与倡议管理一致的表格样式）+ 顶部返回按钮
  panel.querySelector('.draft-list').innerHTML = `
    <div style="margin-bottom:12px;display:flex;align-items:center;gap:8px">
      <a class="btn-link" onclick="toggleDrafts()" style="font-size:13px">← 返回倡议管理</a>
    </div>
    <div class="panel">
      <div class="panel-header"><h3>草稿箱 (${drafts.length})</h3></div>
      <div class="panel-body" style="padding:0;overflow-x:auto">
        <table class="data-table init-list-table">
          <thead>
            <tr>
              <th>倡议内容</th>
              <th style="width:160px">活动地址</th>
              <th style="width:140px">创建时间</th>
              <th style="width:140px">操作</th>
            </tr>
          </thead>
          <tbody>
            ${drafts.map(d => `
              <tr>
                <td><div class="init-title">${d.title || '（未填写倡议内容）'}</div></td>
                <td style="font-size:14px;color:var(--text-secondary)">${d.location || '—'}</td>
                <td style="font-size:14px;color:var(--text-secondary)">${d.createDate}</td>
                <td class="actions-cell">
                  <a class="btn-link" onclick="editDraft(${d.id})">编辑</a>
                  <a class="btn-link btn-danger" onclick="deleteDraft(${d.id})">删除</a>
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

function toggleDrafts() {
  const panel = document.getElementById('draftPanel');
  const listPanel = document.querySelector('#initPanel-unified > .panel');
  if (panel.classList.contains('show')) {
    panel.classList.remove('show');
    if (listPanel) listPanel.style.display = '';
  } else {
    panel.classList.add('show');
    if (listPanel) listPanel.style.display = 'none';
  }
}

function editDraft(id) {
  const d = DATA.initiatives.find(i => i.id === id);
  if (!d) return;
  document.getElementById('createInitTitle').value = d.title || '';
  document.getElementById('createInitLocation').value = d.location || '';
  document.getElementById('createInitEditId').value = d.id;
  document.getElementById('createInitModalTitle').textContent = '编辑草稿';
  // 编辑草稿默认开启「批量发起」，复用与「发起倡议」一致的层级选择组件
  document.getElementById('batchSwitch').checked = true;
  document.getElementById('batchOrgSection').style.display = 'block';
  document.getElementById('customByChildSection').style.display = 'flex';
  document.getElementById('customByChildSwitch').checked = false;
  document.getElementById('customByChildBlock').style.display = 'none';
  document.getElementById('unifiedContentBlock').style.display = 'block';
  // 初始化批量/自定义两个 picker（默认全选）
  ['batchOrgPicker','customOrgPicker'].forEach(id => {
    const p = document.getElementById(id);
    if (p) { delete p.dataset.initialized; otpRender(p); p.dataset.initialized = '1'; otpCheckAll(id); }
  });
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
  document.getElementById('customByChildSection').style.display = 'none';
  document.getElementById('customByChildSwitch').checked = false;
  document.getElementById('customByChildBlock').style.display = 'none';
  document.getElementById('unifiedContentBlock').style.display = 'block';
  // 备注默认值：MMDD + 自定义倡议
  const d = new Date();
  const md = String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0');
  const rk = document.getElementById('createInitRemark');
  if (rk) rk.value = md + '自定义倡议';
  openModal('createInitModal');
}

function toggleBatchOrg() {
  const on = document.getElementById('batchSwitch').checked;
  document.getElementById('batchOrgSection').style.display = on ? 'block' : 'none';
  document.getElementById('customByChildSection').style.display = on ? 'flex' : 'none';
  if (on) {
    // 首次开启时初始化 picker
    const p = document.getElementById('batchOrgPicker');
    if (p && !p.dataset.initialized) {
      otpRender(p);
      p.dataset.initialized = '1';
      otpCheckAll('batchOrgPicker');
    }
  }
  if (!on) {
    // 关闭批量时，也强制关闭自定义
    document.getElementById('customByChildSwitch').checked = false;
    document.getElementById('customByChildBlock').style.display = 'none';
    document.getElementById('unifiedContentBlock').style.display = 'block';
  }
}

// 下级自定义倡议开关
function toggleCustomByChild() {
  const on = document.getElementById('customByChildSwitch').checked;
  document.getElementById('customByChildBlock').style.display = on ? 'block' : 'none';
  document.getElementById('unifiedContentBlock').style.display = on ? 'none' : 'block';
  if (on) {
    const picker = document.getElementById('customOrgPicker');
    if (picker) {
      delete picker.dataset.initialized;
      otpRender(picker);
      picker.dataset.initialized = '1';
      otpCheckAll('customOrgPicker');
    }
  }
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
  const isBatch = document.getElementById('batchSwitch').checked;
  const isCustomByChild = isBatch && document.getElementById('customByChildSwitch').checked;
  const remark = document.getElementById('createInitRemark')?.value?.trim() || '';
  const title = document.getElementById('createInitTitle').value.trim();
  const location = document.getElementById('createInitLocation')?.value?.trim() || '';
  if (!isCustomByChild && !title) { showToast('请填写倡议内容'); return; }
  if (isCustomByChild && !remark) { showToast('请填写备注'); return; }

  const editId = document.getElementById('createInitEditId').value;
  const colors = ['linear-gradient(135deg,#06B57A,#34D399)','linear-gradient(135deg,#FF8C42,#FBBF24)','linear-gradient(135deg,#4A90D9,#60A5FA)','linear-gradient(135deg,#9B59B6,#8E44AD)','linear-gradient(135deg,#E67E22,#F39C12)','linear-gradient(135deg,#1ABC9C,#16A085)'];

  let checkedOrgsArr;
  if (isCustomByChild) {
    checkedOrgsArr = otpGetCheckedOrgs('customOrgPicker');
  } else if (isBatch) {
    checkedOrgsArr = otpGetCheckedOrgs('batchOrgPicker');
  } else {
    checkedOrgsArr = [];
  }
  const orgCount = isBatch ? checkedOrgsArr.length : 1;
  const finalTitle = isCustomByChild ? remark : title;

  if (editId) {
    const existing = DATA.initiatives.find(i => i.id === parseInt(editId));
    if (existing) {
      existing.title = finalTitle;
      existing.location = isCustomByChild ? '' : location;
      existing.remark = isCustomByChild ? remark : '';
      existing.customByChild = isCustomByChild;
      existing.isDraft = false;
      existing.orgCount = orgCount;
    }
  } else {
    DATA.initiatives.push({
      id: DATA.nextInitId++,
      title: finalTitle,
      desc: '',
      location: isCustomByChild ? '' : location,
      remark: isCustomByChild ? remark : '',
      customByChild: isCustomByChild,
      color: colors[Math.floor(Math.random()*colors.length)],
      orgCount,
      postCount: 0,
      createDate: new Date().toISOString().slice(0,10),
      isDraft: false
    });
  }
  closeModal('createInitModal');
  if (isBatch && orgCount > 0) {
    const orgNames = checkedOrgsArr.map(o => o.name);
    lastBatchInit = { title: finalTitle, orgCount, orgNames };
    document.getElementById('successOrgCount').textContent = orgCount;
    document.getElementById('successInitTitle').textContent = finalTitle;
    openModal('initSuccessModal');
  } else {
    showToast(`倡议「${finalTitle}」发起成功`);
  }
  renderInitiatives();
}

function saveDraftInit() {
  const title = document.getElementById('createInitTitle').value.trim() || '未命名倡议';
  const location = document.getElementById('createInitLocation')?.value?.trim() || '';
  const editId = document.getElementById('createInitEditId').value;
  if (editId) {
    const existing = DATA.initiatives.find(i => i.id === parseInt(editId));
    if (existing) { existing.title = title; existing.location = location; }
  } else {
    DATA.initiatives.push({
      id: DATA.nextInitId++, title, desc: '', location,
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
  const location = document.getElementById('editInitLocation').value.trim();
  if (!title) { showToast('请填写倡议主题'); return; }
  init.title = title;
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
  document.getElementById('topicTitle').textContent = init.customByChild ? (init.remark || init.title) : init.title;
  // 倡议说明 + 顶部数据卡 已从页面移除，无需处理
  // 自定义倡议显示"下级倡议管理"Tab
  const childTab = document.getElementById('topicTabChildInit');
  if (childTab) childTab.style.display = init.customByChild ? '' : 'none';
  // 默认切到帖子管理 Tab
  switchTopicMainTab('post');
  renderTopicStats();
  switchPostTab('showing');
}

function onTopicFilterChange() {
  renderTopicStats();
  renderPosts();
}

/* ===== 话题页主 Tab 切换：帖子管理 / 下级倡议管理 ===== */
function switchTopicMainTab(tab) {
  document.querySelectorAll('#topicMainTabs .tab').forEach(t => {
    t.classList.toggle('active', t.dataset.topictab === tab);
  });
  const postPanel = document.getElementById('topicPanel-post');
  const childPanel = document.getElementById('topicPanel-childinit');
  if (postPanel) postPanel.style.display = tab === 'post' ? 'block' : 'none';
  if (childPanel) childPanel.style.display = tab === 'childinit' ? 'block' : 'none';
  if (tab === 'childinit') renderChildInitList();
}

/* ===== 下级倡议管理（仅自定义倡议） ===== */
// 自定义倡议下，下级组织自行发起的子倡议（mock）
DATA.childInitiatives = {
  // initId 8: 0628自定义倡议
  8: [
    {id:801, orgName:'华东分会', orgLevel:2, title:'河岸清洁志愿行动', location:'上海黄浦江畔', date:'2026-06-29', postCount:3, status:'showing'},
    {id:802, orgName:'华南分会', orgLevel:2, title:'社区垃圾分类宣传', location:'广州天河区', date:'2026-06-29', postCount:3, status:'showing'},
    {id:803, orgName:'华北分会', orgLevel:2, title:'公园环境维护日', location:'北京朝阳区', date:'2026-06-28', postCount:2, status:'showing'},
    {id:804, orgName:'社区A队', orgLevel:3, title:'楼道公共空间整理', location:'本社区', date:'2026-06-28', postCount:2, status:'showing'},
    {id:805, orgName:'社区B队', orgLevel:3, title:'敬老院探访', location:'合肥蜀山', date:'2026-06-29', postCount:2, status:'showing'},
    {id:806, orgName:'志愿先锋队', orgLevel:3, title:'广告内容（已被本级隐藏）', location:'石家庄', date:'2026-06-29', postCount:0, status:'hidden'}
  ]
};

function getChildInitsForCurrentTopic() {
  return DATA.childInitiatives[DATA.currentTopicId] || [];
}

// 给帖子列表展示倡议内容用：通过组织名找子倡议
function getChildInitTitleForOrg(orgName) {
  const list = getChildInitsForCurrentTopic();
  const f = list.find(c => c.orgName === orgName);
  return f ? f.title : '';
}

function renderChildInitList() {
  const tbody = document.getElementById('childInitTableBody');
  if (!tbody) return;
  const kw = (document.getElementById('childInitOrgSearch')?.value || '').toLowerCase();
  const stat = document.getElementById('childInitStatusFilter')?.value || '';
  const list = getChildInitsForCurrentTopic().filter(c => {
    if (kw && !c.orgName.toLowerCase().includes(kw)) return false;
    if (stat && c.status !== stat) return false;
    return true;
  });
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:30px;color:var(--text-hint)">暂无下级倡议</td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(c => {
    const statusTag = c.status === 'hidden'
      ? '<span class="post-status-tag status-hidden">已隐藏</span>'
      : '<span class="post-status-tag status-showing">展示中</span>';
    const action = c.status === 'hidden'
      ? `<a class="btn-link" style="color:var(--green)" onclick="toggleChildInitStatus(${c.id},'showing')">恢复展示</a>`
      : `<a class="btn-link btn-danger" onclick="toggleChildInitStatus(${c.id},'hidden')">隐藏</a>`;
    return `<tr${c.status==='hidden'?' style="opacity:.6"':''}>
      <td>${c.orgName}</td>
      <td><span class="layer-tag layer-${c.orgLevel}">${'一二三四五'[c.orgLevel-1]}级</span></td>
      <td>${c.title}</td>
      <td style="font-size:12px;color:var(--text-secondary)">${c.location || '<span style="color:var(--text-hint)">不限</span>'}</td>
      <td>${(c.postCount||0).toLocaleString()}</td>
      <td style="font-size:12px;color:var(--text-secondary)">${c.date}</td>
      <td>${statusTag}</td>
      <td class="actions-cell">${action}</td>
    </tr>`;
  }).join('');
}

function toggleChildInitStatus(id, newStatus) {
  const list = getChildInitsForCurrentTopic();
  const c = list.find(x => x.id === id);
  if (!c) return;
  c.status = newStatus;
  renderChildInitList();
  showToast(newStatus === 'hidden' ? `已隐藏「${c.orgName}」发起的倡议` : `已恢复展示「${c.orgName}」发起的倡议`);
}

/* ===== 导出倡议二维码（每张含组织名称，导出为 ZIP 压缩包） ===== */
function confirmExportInitQR() {
  const initIds = (typeof qrSelectedInits !== 'undefined') ? Array.from(qrSelectedInits) : [];
  const orgs = Array.from(document.querySelectorAll('#qrOrgList input[type=checkbox]:checked')).map(cb => cb.closest('label').textContent.trim());
  if (initIds.length === 0) { showToast('请先搜索并勾选要导出的倡议'); return; }
  if (orgs.length === 0) { showToast('请至少选择一个组织'); return; }
  const total = initIds.length * orgs.length;
  closeModal('exportQRModal');
  showToast(`已生成 ${total} 张二维码（每张含「组织名称」标识），压缩包下载中...`);
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
  // 顶部 3 个数据卡已移除，元素可能不存在，加 null guard
  const orgEl = document.getElementById('topicOrgCount');
  if (orgEl) orgEl.textContent = orgCount;
  const users = new Set(filteredPosts.map(p => p.user));
  const userEl = document.getElementById('topicUserCount');
  if (userEl) userEl.textContent = users.size > 0 ? users.size.toLocaleString() : (hasFilter ? '0' : (init?.orgCount * 50 || 0).toLocaleString());
  const postEl = document.getElementById('topicPostCount');
  if (postEl) postEl.textContent = filteredPosts.filter(p => p.status === 'showing').length.toLocaleString();
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
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三四五'[o.level-1]}级</span>
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
    // 已删除"待审核"Tab，将 pending 合并到"已隐藏"展示
    if (status === 'hidden') {
      if (p.status !== 'hidden' && p.status !== 'pending') return false;
    } else {
      if (p.status !== status) return false;
    }
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
  // 已删除待审核，统一将 pending 归入"已隐藏"或忽略；这里默认不展示 pending
  const filtered = getFilteredPosts(status);
  const container = document.getElementById('postsContainer');
  // 更新 Tab 计数（仅 展示中 / 已隐藏）
  const allPosts = DATA.posts.filter(p => p.initId === DATA.currentTopicId);
  const tabs = document.querySelectorAll('#postTabs .tab');
  const showingCount = allPosts.filter(p=>p.status==='showing').length;
  const hiddenCount = allPosts.filter(p=>p.status==='hidden' || p.status==='pending').length;
  if (tabs[0]) tabs[0].textContent = `展示中 (${showingCount})`;
  if (tabs[1]) tabs[1].textContent = `已隐藏 (${hiddenCount})`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>${status==='hidden'?'暂无已隐藏帖子':'暂无展示中的帖子'}</p></div>`;
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
  // 当前倡议：自定义倡议时，每个帖子的"倡议内容"来自下级组织的子倡议；统一倡议时则统一显示主倡议内容
  const init = DATA.initiatives.find(i => i.id === DATA.currentTopicId);
  const isCustom = !!(init && init.customByChild);
  let html = `<div class="post-list-view">
    <table class="data-table">
      <thead><tr>
        <th style="width:36px"><input type="checkbox" id="postSelectAll" onchange="toggleSelectAllPosts(this.checked)" ${selectedPostIds.size > 0 && selectedPostIds.size === pageData.length ? 'checked' : ''}></th>
        <th>帖子内容</th>
        <th style="width:180px">倡议内容</th>
        <th style="width:90px">发帖人</th>
        <th style="width:100px">所属组织</th>
        <th style="width:130px">发布时间</th>
        <th style="width:80px">状态</th>
        <th style="width:140px">操作</th>
      </tr></thead>
      <tbody>`;

  pageData.forEach(p => {
    const isChecked = selectedPostIds.has(p.id);
    const isOpsHidden = p.status === 'hidden' && p.hiddenBy === 'ops';
    let statusLabel = {showing:'展示中',pending:'机构隐藏',hidden:'已隐藏'}[p.status];
    if (p.status === 'hidden') statusLabel = isOpsHidden ? '运营隐藏' : '机构隐藏';
    const statusClass = 'status-' + (p.status === 'pending' ? 'hidden' : p.status);
    let actions = '';
    if (status === 'showing') {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看</a><a class="btn-link btn-danger" onclick="setPostStatus(${p.id},'hidden')">隐藏</a>`;
    } else if (isOpsHidden) {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看</a><span class="btn-link" style="color:var(--text-hint);cursor:not-allowed" title="该帖子由平台运营隐藏，机构无法恢复">运营隐藏·不可操作</span>`;
    } else {
      actions = `<a class="btn-link" onclick="openPostDetail(${p.id})">查看</a><a class="btn-link" style="color:var(--green)" onclick="setPostStatus(${p.id},'showing')">恢复</a>`;
    }
    // 倡议内容：自定义倡议下，从下级 mock 子倡议表里取；统一倡议则取主倡议
    const initContent = isCustom
      ? (getChildInitTitleForOrg(p.org) || '<span style="color:var(--text-hint)">—</span>')
      : (init?.title || '<span style="color:var(--text-hint)">—</span>');
    html += `<tr${status==='hidden'?' style="opacity:.6"':''}>
      <td><input type="checkbox" value="${p.id}" onchange="togglePostSelect(${p.id},this.checked)" ${isChecked?'checked':''} ${isOpsHidden?'disabled title="运营隐藏，不可批量操作"':''}></td>
      <td onclick="openPostDetail(${p.id})" style="cursor:pointer" title="点击查看帖子详情">
        <div class="post-content-cell">
          <div class="post-thumb" style="background:${p.color}"></div>
          <div class="post-content-text post-content-clickable">${p.text}</div>
        </div>
      </td>
      <td style="font-size:12px;color:var(--text-secondary)">${initContent}</td>
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
  let count = 0, skipped = 0;
  selectedPostIds.forEach(id => {
    const p = DATA.posts.find(x => x.id === id);
    if (!p) return;
    // 运营隐藏的帖子机构端不可操作，跳过
    if (p.status === 'hidden' && p.hiddenBy === 'ops') { skipped++; return; }
    p.status = newStatus;
    if (newStatus === 'hidden') p.hiddenBy = 'org';
    else delete p.hiddenBy;
    count++;
  });
  selectedPostIds.clear();
  renderPosts();
  renderTopicStats();
  const msgs = {showing:`已批量展示 ${count} 条帖子`,hidden:`已批量隐藏 ${count} 条帖子`};
  let msg = msgs[newStatus] || `已更新 ${count} 条帖子`;
  if (skipped > 0) msg += `（${skipped} 条运营隐藏帖子已跳过）`;
  showToast(msg);
}

function clearBatchSelection() {
  selectedPostIds.clear();
  renderPosts();
}

function setPostStatus(postId, newStatus) {
  const p = DATA.posts.find(x => x.id === postId);
  if (!p) return;
  // 运营隐藏的帖子，机构端不可恢复/操作
  if (p.status === 'hidden' && p.hiddenBy === 'ops') {
    showToast('该帖子由平台运营隐藏，机构无法操作');
    return;
  }
  const oldStatus = p.status;
  p.status = newStatus;
  if (newStatus === 'hidden') p.hiddenBy = 'org'; // 机构管理员隐藏
  else delete p.hiddenBy;
  renderPosts();
  renderTopicStats();
  const msgs = {showing:'已设为展示',hidden:'已隐藏该帖子'};
  if (newStatus === 'showing' && oldStatus === 'hidden') showToast('已恢复展示');
  else showToast(msgs[newStatus] || '状态已更新');
}

// 详情弹窗：当前浏览的帖子列表（用于上/下条切换）与多图轮播状态
let detailNavList = [];
let detailNavIndex = 0;
let detailImages = [];
let detailImgIndex = 0;

function openPostDetail(postId) {
  // 构建当前 Tab 过滤后的帖子序列，支持上/下条切换
  detailNavList = getFilteredPosts(currentPostTab);
  detailNavIndex = detailNavList.findIndex(x => x.id === postId);
  if (detailNavIndex < 0) {
    const single = DATA.posts.find(x => x.id === postId);
    detailNavList = single ? [single] : [];
    detailNavIndex = 0;
  }
  renderPostDetail();
  openModal('postDetailModal');
}

function renderPostDetail() {
  const p = detailNavList[detailNavIndex];
  if (!p) return;
  document.getElementById('detailPostId').value = p.id;
  document.getElementById('detailUser').textContent = p.user;
  document.getElementById('detailOrg').textContent = p.org;
  document.getElementById('detailDate').textContent = p.date;
  document.getElementById('detailText').textContent = p.text;

  // 隐藏来源
  const hiddenRow = document.getElementById('detailHiddenRow');
  if (p.status === 'hidden') {
    hiddenRow.style.display = '';
    document.getElementById('detailHiddenBy').textContent = p.hiddenBy === 'ops' ? '平台运营隐藏（机构不可操作）' : '机构管理员隐藏';
  } else {
    hiddenRow.style.display = 'none';
  }

  // 多图轮播：若帖子未提供 images，则基于 color 生成 2-3 张演示图，让左右切换体验可感知
  if (p.images && p.images.length) {
    detailImages = p.images;
  } else {
    detailImages = buildDemoImages(p.color);
  }
  detailImgIndex = 0;
  renderDetailCarousel();

  // 序号
  document.getElementById('detailPostIndex').textContent = `（${detailNavIndex + 1} / ${detailNavList.length}）`;

  // 上/下条按钮状态
  document.getElementById('detailPrevPost').disabled = detailNavIndex <= 0;
  document.getElementById('detailNextPost').disabled = detailNavIndex >= detailNavList.length - 1;

  // 审核操作
  const footer = document.getElementById('postDetailFooter');
  if (p.status === 'pending') {
    footer.innerHTML = `<button class="btn btn-green" onclick="setPostStatus(${p.id},'showing');closeModal('postDetailModal')">展示</button>
      <button class="btn" style="color:var(--primary);border-color:var(--primary)" onclick="setPostStatus(${p.id},'hidden');closeModal('postDetailModal')">隐藏</button>`;
  } else if (p.status === 'hidden') {
    footer.innerHTML = p.hiddenBy === 'ops'
      ? `<span style="font-size:12px;color:var(--text-hint)">运营隐藏，机构不可操作</span>`
      : `<button class="btn btn-green" onclick="setPostStatus(${p.id},'showing');closeModal('postDetailModal')">恢复展示</button>`;
  } else {
    footer.innerHTML = `<button class="btn" style="color:var(--primary);border-color:var(--primary)" onclick="setPostStatus(${p.id},'hidden');closeModal('postDetailModal')">隐藏</button>`;
  }
}

function renderDetailCarousel() {
  const track = document.getElementById('detailImg');
  if (!track) return;
  track.innerHTML = detailImages.map(img => `<div class="detail-carousel-slide" style="background:${img}"></div>`).join('');
  track.style.transform = `translateX(-${detailImgIndex * 100}%)`;
  const multi = detailImages.length > 1;
  const prevBtn = document.querySelector('#detailCarousel .carousel-prev');
  const nextBtn = document.querySelector('#detailCarousel .carousel-next');
  // 多图时始终显示左右箭头按钮，单图时隐藏
  if (prevBtn) {
    prevBtn.style.display = multi ? 'flex' : 'none';
    prevBtn.disabled = !multi;
  }
  if (nextBtn) {
    nextBtn.style.display = multi ? 'flex' : 'none';
    nextBtn.disabled = !multi;
  }
  const dots = document.getElementById('detailCarouselDots');
  dots.innerHTML = multi ? detailImages.map((_, i) => `<span class="carousel-dot ${i === detailImgIndex ? 'active' : ''}" onclick="carouselGoto(${i})"></span>`).join('') : '';
  const counter = document.getElementById('detailCarouselCounter');
  counter.textContent = multi ? `${detailImgIndex + 1}/${detailImages.length}` : '';
  counter.style.display = multi ? 'block' : 'none';
}

function carouselStep(dir) {
  const n = detailImages.length;
  if (n <= 1) return;
  detailImgIndex = (detailImgIndex + dir + n) % n;
  renderDetailCarousel();
}

function carouselGoto(i) {
  detailImgIndex = i;
  renderDetailCarousel();
}

// 基于帖子主色生成 2-3 张演示图（用于未提供 images 字段的旧 mock 数据）
function buildDemoImages(baseColor) {
  if (!baseColor || baseColor === '#E8E8E8') return [baseColor || '#E8E8E8'];
  const palette = [
    'linear-gradient(135deg,#A8E6CF,#DCEDC1)',
    'linear-gradient(135deg,#FFD3B6,#FFAAA5)',
    'linear-gradient(135deg,#B5EAD7,#C7CEEA)',
    'linear-gradient(135deg,#BBDEFB,#90CAF9)',
    'linear-gradient(135deg,#FFF9C4,#FFF59D)',
    'linear-gradient(135deg,#D1C4E9,#B39DDB)'
  ];
  // 取主色 + 随机选 2 个色板色作为另外两张图
  const others = palette.filter(c => c !== baseColor);
  const seed = (baseColor.length * 7) % others.length;
  return [baseColor, others[seed], others[(seed + 2) % others.length]];
}

// 帖子详情弹窗内：左右方向键切换图片
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('postDetailModal');
  if (!modal || !modal.classList.contains('show')) return;
  if (detailImages.length <= 1) return;
  if (e.key === 'ArrowLeft') { e.preventDefault(); carouselStep(-1); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); carouselStep(1); }
});

function navPostDetail(dir) {
  const next = detailNavIndex + dir;
  if (next < 0 || next >= detailNavList.length) return;
  detailNavIndex = next;
  renderPostDetail();
}

function backToInitiative() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-initiative').classList.add('active');
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
    org: `<table class="data-table"><thead><tr><th>组织ID</th><th>组织名称</th><th>层级</th><th>上级组织</th><th>负责人</th><th>发起倡议数</th><th>发布条数</th></tr></thead><tbody>${DATA.orgs.slice(0,5).map(o=>`<tr><td>${o.id}</td><td>${o.name}</td><td>${'一二三四五'[o.level-1]}级</td><td>${orgParentPath(o)}</td><td>${o.leader||'-'}</td><td>${o.initCount||0}</td><td>${o.postCount}</td></tr>`).join('')}</tbody></table>`,
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
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;">${'一二三四五'[o.level-1]}级</span>
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

  // 参与人数为演示估算值（基于发布条数派生），组织数据已不再维护成员数字段
  const estMembers = o => Math.max(1, Math.round((o.postCount || 0) * 0.55) + 8);

  // 如果有筛选，重新计算帖子数
  if (hasFilter) {
    orgsToRank = orgsToRank.map(o => {
      const orgPosts = DATA.posts.filter(p => {
        if (p.org !== o.name) return false;
        if (initFilter && p.initId !== parseInt(initFilter)) return false;
        return true;
      });
      return { ...o, filteredPostCount: orgPosts.length, filteredMemberCount: Math.round(estMembers(o) * 0.6) };
    });
    orgsToRank.sort((a, b) => b.filteredPostCount - a.filteredPostCount);
  } else {
    orgsToRank.sort((a, b) => {
      if (rankSortKey === 'memberCount') return estMembers(b) - estMembers(a);
      if (rankSortKey === 'avg') return (b.postCount / estMembers(b)) - (a.postCount / estMembers(a));
      return b.postCount - a.postCount;
    });
  }

  const tbody = document.getElementById('rankTableBody');
  if (!tbody) return;
  tbody.innerHTML = orgsToRank.map((o, i) => {
    const displayPostCount = hasFilter ? o.filteredPostCount : o.postCount;
    const displayMemberCount = Math.round(estMembers(o) * 0.6);
    const displayAvg = hasFilter ? (o.filteredPostCount / (estMembers(o) || 1)).toFixed(1) : (o.postCount / estMembers(o)).toFixed(1);
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
      <td><span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 5px">${'一二三四五'[o.level-1]}级</span></td>
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
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;margin-right:4px;flex-shrink:0">${'一二三四五'[o.level-1]}级</span>${o.name}
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
      <td><span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 5px">${'一二三四五'[o.level-1]}级</span></td>
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
        <span class="layer-tag layer-${o.level}" style="font-size:10px;padding:0 4px;margin-right:4px;flex-shrink:0">${'一二三四五'[o.level-1]}级</span>${o.name}
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
  // 级联选择器已自带交互，这里仅绑定搜索框
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
