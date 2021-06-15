(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/common/vendor" ], {
    6115: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = i("64ed"), c = {
            getThematicBuildings: function(e) {
                return (0, s.getActivity)("".concat(s.ACT_API_PREFIX_AAA, "thematic_buildings"), e, {
                    loading: !0
                });
            }
        };
        t.default = c;
    },
    e020: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tabs_TYPS = void 0;
        var s = [ {
            index: 0,
            first: "年度买房",
            sec: "必看榜",
            type: "see",
            desc: "以楼盘2020年全年度楼盘自身品质、价值潜力、品牌美誉为主要依据，结合楼盘线上用户关注度等指标，严格挑选出高品质必看楼盘。",
            list_items: []
        }, {
            index: 1,
            first: "年度",
            sec: "口碑楼盘",
            type: "mouth",
            desc: "以楼盘2020年全年度用户综合好评率为主要依据，体现出具有良好口碑的优质楼盘。",
            list_items: []
        }, {
            index: 2,
            first: "年度",
            sec: "人气楼盘",
            type: "sentiment",
            desc: "以楼盘2020年全年度用户浏览量、搜索量、关注量等为依据，综合体现用户关注度高的楼盘。",
            list_items: []
        }, {
            index: 3,
            first: "年度品质",
            sec: "服务楼盘",
            type: "service",
            desc: "以楼盘2020年全年度置业顾问线上服务的水平、电话接通率、微聊响应速度等为依据，综合考虑楼盘的自身品质服务水平。",
            list_items: []
        }, {
            index: 4,
            first: "2021年度值得",
            sec: "期待楼盘",
            type: "forward",
            desc: "预计楼盘的开盘时间节点为2021年度，且以用户关注量、搜索量、浏览量为依据，综合体现2021年度值得用户期待的楼盘；",
            list_items: []
        } ];
        t.Tabs_TYPS = s;
    }
} ]);