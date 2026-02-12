import { DEFAULT_LANG, LANGUAGES } from './constants';

export const languages = LANGUAGES;

export const defaultLang = DEFAULT_LANG;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.achievements': 'Stories',
    'nav.publications': 'Publications',
    'nav.patents': 'Patents',
    'nav.team': 'Team',
    'nav.activities': 'Activities',
    'nav.join': 'Join Us',
    'nav.news': 'News',
    'nav.search': 'Search',

    'search.subtitle': 'Search through our publications, news, and team members.',

    // 'hero.title': 'Advancing Computer Vision & Deep Learning Research.', // Moved to config.ts
    // 'hero.subtitle': 'We are the Scholar-Lite Lab.', // Moved to config.ts
    //'hero.viewPubs': 'View Our Stories',
    //'hero.meetTeam': 'Meet the Team',

    'section.selectedPubs': 'Selected Stories',
    'section.viewAll': 'View all',
    'section.latestNews': 'Latest News',

    'achievements.title': 'Research Achievements',
    'achievements.subtitle': 'A comprehensive collection of our academic publications, intellectual property, and collective honors.',
    'achievements.papers': 'Published Papers',
    'achievements.books': 'Published Books',
    'achievements.softwares': 'Software Copyrights',
    'achievements.patents': 'Invention Patents',
    'achievements.honors': 'Group Honors',
    'achievements.noPapers': 'No papers listed yet.',
    'achievements.noBooks': 'No books listed yet.',
    'achievements.noSoftwares': 'No software copyrights listed yet.',
    'achievements.noPatents': 'No patents listed yet.',
    'achievements.noHonors': 'No honors listed yet.',
    'achievements.developers': 'Developers:',
    'achievements.inventors': 'Inventors:',
    'achievements.regNumber': 'Reg. Number:',
    'achievements.date': 'Date:',

    'activities.title': 'Team Activities',
    'activities.subtitle': 'Seminars, academic talks, and team building events.',

    'research.subtitle': 'Our lab explores the frontiers of artificial intelligence, with a focus on computer vision and machine learning.',
    'research.learnMore': 'Learn More',
    'research.noAreas': 'No research areas defined.',

    'join.title': 'Join Us',
    'join.subtitle': 'We are always looking for motivated students to join our team. If you are interested in our research areas, please contact us!',
    'join.phd': 'PhD Students',
    'join.phdDesc': 'We are looking for PhD students with strong mathematical background and coding skills.',
    'join.phdList1': 'Strong Math Foundation',
    'join.phdList2': 'Proficient in Python/C++',
    'join.phdList3': 'Publication record is a plus',
    'join.master': 'Master Students',
    'join.masterDesc': 'Motivated master students who want to dive deep into research are welcome.',
    'join.masterList1': 'Passion for research',
    'join.masterList2': 'Good programming skills',
    'join.masterList3': 'Commitment to projects',
    'join.undergrad': 'Undergraduates',
    'join.undergradDesc': 'Talented undergraduates can join us for research training and internship.',
    'join.undergradList1': 'Curiosity driven',
    'join.undergradList2': 'Fast learner',
    'join.undergradList3': 'Team player',
    'join.howToApply': 'How to Apply',
    'join.applicationText': 'Please send your CV, transcripts, and a brief statement of research interests to our Principal Investigator. Make sure to include "[Application]" in your email subject.',
    'join.sendEmail': 'Send Email',

    'news.title': 'News & Updates',
    'news.noNews': 'No news yet.',

    'team.title': 'Our Team',
    'team.subtitle': 'Meet the researchers and students behind our innovations.',
    'team.pi': 'Principal Investigator',
    'team.faculty': 'Faculty',
    'team.youth_researcher': 'Postdoctoral Researchers',
    'team.support': 'Research Support',
    'team.professor': 'Professors',
    'team.teacher': 'Faculty',
    'team.postdoc_researcher': 'Postdoctoral Researchers',
    'team.postdoc': 'Postdoctoral Researchers',
    'team.phd': 'PhD Students',
    'team.master': 'Master Students',
    'team.graduate': 'Graduate Students',
    'team.undergrad': 'Undergraduate Students',
    'team.alumni': 'Alumni',
    'team.former': 'Former Member',
    'team.noMembers': 'No team members found.',

    'footer.rights': 'All rights reserved.',
    'footer.powered': 'Powered by',
  },
  zh: {
    'nav.home': '首页',
    'nav.research': '研究方向',
    'nav.achievements': '科研成果',
    'nav.publications': '学术论文',
    'nav.patents': '发明专利',
    'nav.team': '团队成员',
    'nav.activities': '团队活动',
    'nav.join': '加入我们',
    'nav.news': '新闻动态',
    'nav.search': '站内搜索',
    'search.subtitle': '搜索论文、新闻和团队成员。',

    // 'hero.title': '致力于计算机视觉与深度学习的前沿研究。', // Moved to config.ts
    // 'hero.subtitle': '我们是 Scholar-Lite 课题组。', // Moved to config.ts
    'hero.viewPubs': '查看论文',
    'hero.meetTeam': '认识团队',

    'section.selectedPubs': '精选论文',
    'section.viewAll': '查看全部',
    'section.latestNews': '最新动态',

    'achievements.title': '科研成果',
    'achievements.subtitle': '汇集了我们发表的学术论文、知识产权和集体荣誉。',
    'achievements.papers': '发表论文',
    'achievements.books': '出版著作',
    'achievements.softwares': '软件著作权',
    'achievements.patents': '发明专利',
    'achievements.honors': '集体荣誉',
    'achievements.noPapers': '暂无论文。',
    'achievements.noBooks': '暂无著作。',
    'achievements.noSoftwares': '暂无软著。',
    'achievements.noPatents': '暂无专利。',
    'achievements.noHonors': '暂无荣誉。',
    'achievements.developers': '开发者：',
    'achievements.inventors': '发明人：',
    'achievements.regNumber': '登记号：',
    'achievements.date': '日期：',

    'activities.title': '团队活动',
    'activities.subtitle': '研讨会、学术讲座和团建活动。',

    'research.subtitle': 'Our lab explores the frontiers of artificial intelligence, with a focus on computer vision and machine learning.',
    'research.learnMore': '了解更多',
    'research.noAreas': '暂无研究领域。',
    'join.title': '加入我们',
    'join.subtitle': '我们一直在寻找积极进取的学生加入我们的团队。如果您对我们的研究领域感兴趣，请联系我们！',
    'join.phd': 'PhD Students',
    'join.phdDesc': 'We are looking for PhD students with strong mathematical background and coding skills.',
    'join.phdList1': 'Strong Math Foundation',
    'join.phdList2': 'Proficient in Python/C++',
    'join.phdList3': 'Publication record is a plus',
    'join.master': 'Master Students',
    'join.masterDesc': 'Motivated master students who want to dive deep into research are welcome.',
    'join.masterList1': 'Passion for research',
    'join.masterList2': 'Good programming skills',
    'join.masterList3': 'Commitment to projects',
    'join.undergrad': 'Undergraduates',
    'join.undergradDesc': 'Talented undergraduates can join us for research training and internship.',
    'join.undergradList1': 'Curiosity driven',
    'join.undergradList2': 'Fast learner',
    'join.undergradList3': 'Team player',
    'join.howToApply': '如何申请',
    'join.applicationText': '将您的简历、成绩单和一份简短的研究兴趣陈述发送给我们的首席研究员。请务必在邮件主题中包含“[申请]”。',
    'join.sendEmail': '发送邮件',
    'news.title': '新闻动态',
    'news.noNews': '暂无新闻。',
    'team.title': '团队成员',
    'team.subtitle': '认识我们团队的研究人员和学生。',
    'team.pi': '课题组长',
    'team.faculty': '导师团队',
    'team.youth_researcher': '青年研究人员',
    'team.support': '辅助人员',
    'team.professor': '教授',
    'team.associate_professor': '副教授',
    'team.assistant_professor': '讲师/助理教授',
    'team.postdoc': '博士后',
    'team.research_assistant': '科研助理',
    'team.phd': '博士研究生',
    'team.master': '硕士研究生',
    'team.undergrad': '本科生',
    'team.alumni': '校友',
    'team.noMembers': '暂无成员信息。',

    'footer.rights': '版权所有。',
    'footer.powered': '驱动支持',
  },
} as const;

export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
