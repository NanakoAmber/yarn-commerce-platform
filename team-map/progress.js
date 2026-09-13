// 由锦晨统一维护。总进度为人工估算，与任务数量无自动换算关系。
// 状态：blocked 未就绪；unknown 待核实；ready 已就绪。
// ready 前填写 evidence，记录交付人与接手人的确认依据；不要写私人联系信息。
const progressState = {
  percent: 30,
  updated: '2026-09-12',
  note: '当前估算，主要来自开发工作；由锦晨统一维护。',
  tasks: {
    firstProduct: { status: 'blocked', evidence: '' },
    productFacts: { status: 'unknown', evidence: '' },
    usableContent: { status: 'unknown', evidence: '' },
    handover: { status: 'unknown', evidence: '' },
    operator: { status: 'unknown', evidence: '' },
    listing: { status: 'unknown', evidence: '' },
    warehouse: { status: 'unknown', evidence: '' },
    dispatch: { status: 'unknown', evidence: '' },
    records: { status: 'unknown', evidence: '' },
    permissions: { status: 'unknown', evidence: '' },
    purchase: { status: 'unknown', evidence: '' },
    payment: { status: 'unknown', evidence: '' },
    support: { status: 'unknown', evidence: '' },
    aftercare: { status: 'unknown', evidence: '' }
  }
};
