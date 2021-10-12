import MetaTaskProps from "../types/MetaTaskProps";

const taskDataForTest: {
  metaTasks: MetaTaskProps[];
  task: { description: string };
} = {
  task: { description: "全面揭批四人帮！" },
  metaTasks: [
    {
      description:
        "王洪文（1935年-1992年8月3日），男，吉林长春人，“四人帮”成员之一，无产阶级文化大革命主要策划者之一，林彪、江青反革命集团案主犯。",
      id: "0e7d3822-6f0e-4f21-a433-38d21adb6bc0",
    },
    {
      description:
        "江青（1914年-1991年5月14日），林彪、江青反革命集团的首要分子，女，原名李云鹤，生于山东诸城，1933年加入中国共产党，曾在上海被捕脱离党组织。",
      id: "93b10c0a-5429-410d-901b-fd70ba34bbb9",
    },
    {
      description:
        "张春桥（1917年-2005年4月），男，汉族，山东菏泽巨野人，江青反革命集团的主犯。",
      id: "68917720-8211-4c12-8e1e-1197af3415dd",
      finalDate: new Date("2021-10-13"),
    },
    {
      description:
        "姚文元（1931年12月11日－2005年12月23日），男，浙江诸暨人，“四人帮”成员之一，林彪、江青反革命集团案主犯。",
      id: "0eeda2dc-ba90-4030-8a86-f10fea605e02",
    },
  ],
};

export default taskDataForTest;
