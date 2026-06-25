import {defineConfig} from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
    title: "ContentRadar",
    description: "面向内容运营、竞品研究和公开内容分析的多平台采集工具。",
    lastUpdated: true,
    base: '/ContentRadar/',
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/The-AlexLiu/ContentRadar/tree/main/docs/:path'
        },
        search: {
            provider: 'local'
        },
        nav: [
            {text: '首页', link: '/'},
            {text: '使用说明', link: '/'},
            {text: '项目架构', link: '/项目架构文档'},
        ],

        sidebar: [
            {
                text: 'ContentRadar 文档',
                items: [
                    {text: '基本使用', link: '/'},
                    {text: '项目架构文档', link: '/项目架构文档'},
                    {text: '常见问题汇总', link: '/常见问题'},
                    {text: '数据保存指南', link: '/data_storage_guide'},
                    {text: 'Excel 导出指南', link: '/excel_export_guide'},
                    {text: 'IP代理使用', link: '/代理使用'},
                    {text: 'CDP 模式使用', link: '/CDP模式使用指南'},
                    {text: '词云图使用', link: '/词云图使用配置'},
                    {text: '项目目录结构', link: '/项目代码结构'},
                    {text: '手机号登录说明', link: '/手机号登录说明'},
                    {text: '原生环境管理', link: '/原生环境管理文档'},
                ]
            },

        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/The-AlexLiu/ContentRadar'}
        ]
    }
}))
