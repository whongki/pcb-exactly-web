import type { Translations } from "./en";

const zh: Translations = {
  // Navbar
  nav: {
    about: "关于我们",
    products: "产品中心",
    capabilities: "制造能力",
    equipment: "设备与工厂",
    certifications: "资质认证",
    whyUs: "为什么选择我们",
    contact: "联系我们",
    getQuote: "免费获取报价",
  },

  // Hero
  hero: {
    badge: "ISO/TS 16949 · UL · ROHS · CQC 认证",
    factoryBadge: "源头工厂 · 没有中间商 · 工厂直供价格",
    titlePre: "源头工厂",
    titleHighlight: "PCB制造",
    titlePost: "直接对接",
    subtitle:
      "我们是PCB源头生产工厂 — 非贸易商，非中介。从样品到量产，您直接与我们的工程师和产线对接，没有中间商赚差价。",
    ctaQuote: "免费获取报价",
    ctaWhatsApp: "WhatsApp 咨询",
    scrollDown: "向下滚动",
    stats: {
      years: "年制造经验",
      employees: "名员工",
      factory: "平方米厂房",
      certified: "国际认证",
    },
  },

  // About
  about: {
    tag: "关于我们",
    title: "以品质铸就信赖",
    desc: "安徽正好电子有限公司（PCB Exactly）是一家创建于2011年的源头生产工厂，拥有20,000+平方米自有厂房、先进设备和300余名员工。与贸易商和中介不同，我们的每一块板都在自己的工厂里生产 — 品质全程可控、价格透明、直接与工程团队沟通。",
    stats: {
      years: "年制造经验",
      employees: "名员工",
      factory: "厂房面积",
      satisfaction: "客户满意度",
    },
    values: {
      mutualBenefit: "互利共赢",
      mutualBenefitDesc: "与每一位客户建立双赢的合作关系",
      cooperation: "合作共进",
      cooperationDesc: "跨越国界，携手同行",
      excellence: "精益求精",
      excellenceDesc: "追求最高品质标准",
      integrity: "诚信为本",
      integrityDesc: "以信任为基础的商业关系",
    },
  },

  // Products
  products: {
    tag: "产品中心",
    title: "满足各种需求的PCB解决方案",
    desc: "从简单的单面板到复杂的多层HDI设计，我们为各行业提供精密制造的PCB产品。",
    requestQuote: "获取报价",
    items: {
      singleSided: {
        title: "单面板",
        desc: "经济高效的简单电路设计解决方案。提供铅锡、化金、抗氧化、纯锡等多种表面处理。",
      },
      doubleSided: {
        title: "双面板",
        desc: "双面电路板，适用于更复杂的应用场景，支持通孔连接。",
      },
      multilayer: {
        title: "多层板",
        desc: "高密度互连电路板，最多支持8层，满足高要求的电子应用。",
      },
      aluminum: {
        title: "铝基板",
        desc: "优越的散热性能，适用于LED照明、电源和汽车电子等应用。",
      },
      led: {
        title: "LED线路板",
        desc: "专为LED照明应用设计的电路板，具有最佳热管理性能。",
      },
      hdi: {
        title: "HDI板",
        desc: "高密度互连电路板，采用盲埋孔设计，适用于紧凑型高性能产品。",
      },
    },
  },

  // Capabilities
  capabilities: {
    tag: "制造能力",
    title: "生产技术规格",
    desc: "先进的生产能力确保满足您对PCB最严格的精度和品质要求。",
    colSpec: "项目",
    colCurrent: "现有生产能力",
    colFuture: "未来发展生产能力",
    specs: {
      material: "板材",
      boardSize: "板的尺寸",
      maxLayers: "最大层数",
      boardThickness: "板材厚度",
      minDrilling: "机械钻孔(最小)",
      laserDrilling: "激光钻孔",
      holeTolerance: "完成孔径公差",
      traceInner: "线宽/线距（内层）",
      traceOuter: "线宽/线距（外层）",
      impedance: "特性阻抗",
      layerReg: "层间对准度",
      copperThickness: "铜箔厚度",
      hdi: "高密度互连积层板HDI",
      buriedBlindVia: "盲埋孔",
      surfaceFinish: "工艺技术",
    },
  },

  // Equipment
  equipment: {
    tag: "设备与工厂",
    title: "先进设备与智能工厂",
    desc: "我们20,000+平方米的工厂配备了最先进的机械设备，确保持续稳定地生产高品质PCB。",
    items: {
      cncDrilling: "数控自动钻孔机",
      ldi: "激光直接成像曝光机",
      aoi: "自动光学检查机",
      etching: "真空酸性蚀刻生产线",
      screenPrint: "阻焊连续丝印生产线",
      vcut: "数控全自动V-CUT切割机",
    },
  },

  // Certifications
  certifications: {
    tag: "资质认证",
    title: "国际认证",
    desc: "我们的认证体现了对品质、安全和环境责任的坚定承诺。",
    items: {
      iso: {
        name: "ISO/TS 16949",
        desc: "汽车行业质量管理体系认证，确保所有生产环节的严格品质管控。",
      },
      ul: {
        name: "UL认证",
        desc: "美国保险商实验室认证，验证产品安全性和北美标准合规性。",
      },
      rohs: {
        name: "ROHS合规",
        desc: "完全符合有害物质限制指令，实现环保制造。",
      },
      cqc: {
        name: "CQC认证",
        desc: "中国质量认证，确保产品符合国家质量和安全标准。",
      },
    },
  },

  // Why Choose Us
  whyUs: {
    tag: "为什么选择我们",
    title: "您值得信赖的PCB合作伙伴",
    desc: "我们将数十年的经验与尖端技术相结合，生产超越期望的PCB产品。",
    items: {
      experience: {
        title: "15+年制造经验",
        desc: "自2011年以来，十五余年PCB制造专业经验，服务全球客户。",
      },
      quality: {
        title: "严格品质管控",
        desc: "ISO/TS 16949认证流程，100%电测和AOI光学检查。",
      },
      equipment: {
        title: "先进设备",
        desc: "配备先进的CNC钻孔机、LDI曝光机和自动化生产线。",
      },
      pricing: {
        title: "源头工厂直供",
        desc: "我们就是生产商，不是中间商。没有中介加价 — 样品和量产均享受透明的工厂直供价格。",
      },
      delivery: {
        title: "快速交付",
        desc: "样品24-48小时快速交付。所有订单尺寸均保证准时交付。",
      },
      service: {
        title: "一站式服务",
        desc: "从设计审查到制造和测试 — 所有工序在自有工厂内一站式完成，全程品质可控。",
      },
      factoryVisit: {
        title: "欢迎验厂",
        desc: "诚邀您参观我们位于安徽的20,000+平方米生产基地，实地考察产线、认识团队、验证实力。",
      },
    },
  },

  // Contact Form
  contact: {
    tag: "联系我们",
    title: "免费获取报价",
    desc: "告诉我们您的PCB需求，我们将在24小时内回复具有竞争力的报价。",
    infoTitle: "联系方式",
    email: "邮箱",
    whatsapp: "WhatsApp",
    whatsappLink: "WhatsApp 在线咨询",
    phone: "电话",
    address: "工厂地址",
    addressValue: "安徽省广德市经济开发区长安路777-9号",
    gerberTitle: "已有Gerber文件？",
    gerberDesc: "为了更快报价，请将Gerber文件直接发送到",
    form: {
      name: "姓名 *",
      namePlaceholder: "请输入您的姓名",
      email: "邮箱 *",
      emailPlaceholder: "your@email.com",
      company: "公司名称",
      companyPlaceholder: "请输入公司名称",
      phone: "电话 / WhatsApp",
      phonePlaceholder: "+86 xxx xxxx xxxx",
      pcbType: "PCB类型",
      pcbTypePlaceholder: "请选择类型",
      pcbTypes: {
        singleSided: "单面板",
        doubleSided: "双面板",
        multilayer: "多层板",
        aluminum: "铝基板",
        led: "LED线路板",
        hdi: "HDI板",
        other: "其他",
      },
      layers: "层数",
      layersPlaceholder: "如：2, 4, 6",
      quantity: "数量",
      quantityPlaceholder: "如：100",
      boardSize: "板尺寸 (mm)",
      boardSizePlaceholder: "如：100mm x 80mm",
      requirements: "其他需求",
      requirementsPlaceholder: "表面处理、阻焊颜色、特殊要求...",
      success: "您的报价请求已成功发送！我们将在24小时内回复。",
      sending: "发送中...",
      submit: "发送报价请求",
    },
  },

  // Footer
  footer: {
    desc: "安徽正好电子有限公司，PCB源头生产工厂，自有产线、没有中间商，工厂直供品质与价格。",
    quickLinks: "快速链接",
    products: "产品中心",
    contactUs: "联系我们",
    copyright: "PCB Exactly (安徽正好电子有限公司) 版权所有。",
    privacy: "隐私政策",
    terms: "服务条款",
  },

  // WhatsApp
  whatsapp: {
    online: "在线",
    message: "您好！需要PCB报价或对我们的制造能力有疑问？欢迎通过WhatsApp与我们交流！",
    startChat: "开始聊天",
  },
};

export default zh;
