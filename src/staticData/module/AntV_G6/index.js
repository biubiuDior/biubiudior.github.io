const icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDEzVjlDMjIgNCAyMCAyIDE1IDJIOUM0IDIgMiA0IDIgOVYxNUMyIDIwIDQgMjIgOSAyMkgxMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy4zMzAwOCAxNC40ODk4TDkuNzEwMDggMTEuMzk5OEMxMC4wNTAxIDEwLjk1OTggMTAuNjgwMSAxMC44Nzk4IDExLjEyMDEgMTEuMjE5OEwxMi45NTAxIDEyLjY1OThDMTMuMzkwMSAxMi45OTk4IDE0LjAyMDEgMTIuOTE5OCAxNC4zNjAxIDEyLjQ4OThMMTYuNjcwMSA5LjUwOTc3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOS40ODAyIDE1LjgxOTlMMTkuNzYwMiAxNi4zODk5QzE5LjkwMDIgMTYuNjY5OSAyMC4yNTAyIDE2LjkyOTkgMjAuNTYwMiAxNi45ODk5TDIwLjk0MDIgMTcuMDQ5OUMyMi4wODAyIDE3LjIzOTkgMjIuMzUwMiAxOC4wNzk5IDIxLjUzMDIgMTguOTA5OUwyMS4xODAyIDE5LjI1OTlDMjAuOTUwMiAxOS40OTk5IDIwLjgyMDIgMTkuOTU5OSAyMC44OTAyIDIwLjI3OTlMMjAuOTQwMiAyMC40ODk5QzIxLjI1MDIgMjEuODY5OSAyMC41MjAyIDIyLjM5OTkgMTkuMzIwMiAyMS42Nzk5TDE5LjA2MDIgMjEuNTI5OUMxOC43NTAyIDIxLjM0OTkgMTguMjUwMiAyMS4zNDk5IDE3Ljk0MDIgMjEuNTI5OUwxNy42ODAyIDIxLjY3OTlDMTYuNDcwMiAyMi40MDk5IDE1Ljc0MDIgMjEuODY5OSAxNi4wNjAyIDIwLjQ4OTlMMTYuMTEwMiAyMC4yNzk5QzE2LjE4MDIgMTkuOTU5OSAxNi4wNTAyIDE5LjQ5OTkgMTUuODIwMiAxOS4yNTk5TDE1LjQ3MDIgMTguOTA5OUMxNC42NTAyIDE4LjA3OTkgMTQuOTIwMiAxNy4yMzk5IDE2LjA2MDIgMTcuMDQ5OUwxNi40NDAyIDE2Ljk4OTlDMTYuNzQwMiAxNi45Mzk5IDE3LjEwMDIgMTYuNjY5OSAxNy4yNDAyIDE2LjM4OTlMMTcuNTIwMiAxNS44MTk5QzE4LjA2MDIgMTQuNzI5OSAxOC45NDAyIDE0LjcyOTkgMTkuNDgwMiAxNS44MTk5WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";

const nodes = [
  {id: "0", children: ["A", "B", "C", "D"], data: {name: "index", level: 0, icon: undefined}},

  {id: "A", children: ["a1","a2"], data: {name: "“十四五”规划", level: 1, color: "#397EF0", icon: icon}},
  {id: "a1", children: ["a3","a4"], data: {name: "菜单的标题", level: 2, parent: "A", color: "#397EF0"}},
  {id: "a2", children: ["a5","a6","a7"], data: {name: "菜单的标题", level: 2, parent: "A", color: "#397EF0"}},
  {id: "a3", data: {name: "菜单的标题", level: 2, parent: "A", color: "#397EF0"}},
  {id: "a4", data: {name: "菜单的标题", level: 2, parent: "A", color: "#397EF0"}},
  {id: "a5", data: {name: "菜单的标题", level: 2, parent: "A", color: "#397EF0"}},
  {id: "a6", data: {name: "菜单的标题", level: 2, parent: "A", color: "#397EF0"}},
  {id: "a7", data: {name: "菜单的标题", level: 2, parent: "A", color: "#397EF0"}},

  {id: "B", children: ["b1"], data: {name: "硕博点申报", level: 1, color: "#17d140", icon: icon}},
  {id: "b1", children: ["b2","b3"], data: {name: "菜单的标题", level: 2, parent: "B", color: "#17d140"}},
  {id: "b2", children: ["b4"], data: {name: "菜单的标题", level: 2, parent: "B", color: "#17d140"}},
  {id: "b3", data: {name: "菜单的标题", level: 2, parent: "B", color: "#17d140"}},
  {id: "b4", data: {name: "菜单的标题", level: 2, parent: "B", color: "#17d140"}},

  {id: "C", children: ["c1"], data: {name: "研究生教育质量评价", level: 1, color: "#F8A243", icon: icon}},
  {id: "c1", children: ["c2", "c3"], data: {name: "菜单的标题", level: 2, parent: "C", color: "#F8A243"}},
  {id: "c2", children: ["c4"], data: {name: "菜单的标题", level: 2, parent: "C", color: "#F8A243"}},
  {id: "c3", data: {name: "菜单的标题", level: 2, parent: "C", color: "#F8A243"}},
  {id: "c4", data: {name: "菜单的标题", level: 2, parent: "C", color: "#F8A243"}},

  {id: "D", children: ["d1"], data: {name: "科学评估", level: 1, color: "#FF7E7E", icon: icon}},
  {id: "d1", children: ["d2", "d3"], data: {name: "菜单的标题", level: 2, parent: "D", color: "#FF7E7E"}},
  {id: "d2", children: ["d4"], data: {name: "菜单的标题", level: 2, parent: "D", color: "#FF7E7E"}},
  {id: "d3", data: {name: "菜单的标题", level: 2, parent: "D", color: "#FF7E7E"}},
  {id: "d4", data: {name: "菜单的标题", level: 2, parent: "D", color: "#FF7E7E"}},
]

const edges = [
  { source: '0', target: 'A' },
  { source: 'A', target: 'a1' },
  { source: 'A', target: 'a2' },
  { source: 'a1', target: 'a3' },
  { source: 'a1', target: 'a4' },
  { source: 'a1', target: 'a5' },
  { source: 'a2', target: 'a6' },
  { source: 'a2', target: 'a7' },

  { source: '0', target: 'B' },
  { source: 'B', target: 'b1' },
  { source: 'b1', target: 'b2' },
  { source: 'b1', target: 'b3' },
  { source: 'b2', target: 'b4' },

  { source: '0', target: 'C' },
  { source: 'C', target: 'c1' },
  { source: 'c1', target: 'c2' },
  { source: 'c1', target: 'c3' },
  { source: 'c2', target: 'c4' },

  { source: '0', target: 'D' },
  { source: 'D', target: 'd1' },
  { source: 'd1', target: 'd2' },
  { source: 'd1', target: 'd3' },
  { source: 'd2', target: 'd4' },
]

const combos = [
]

export const TreeData = {nodes,edges,combos}