module.exports = {
  title: "LeetCode",
  description: "LeetCode学习笔记",
  themeConfig: {
    sidebar: [
      {
        title: "第一章-算法专题",
        collapsable: true,
        children: ["/algorithm/data-structor", "/algorithm/chain-table"],
      },
      {
        title: "第二章-高频考题(简单)",
        collapsable: true,
        children: [
            "/problem-easy/two-sum",
            "/problem-easy/climbing-stairs",
            "/problem-easy/linked-list-cycle",
        ],
      },
      {
        title: "第三章-高频考题(中等)",
        collapsable: true,
        children: [
            "/problem-medium/container-width-most-water",
            "/problem-medium/three-sum",
        ],
      }
    ],
  },
};
