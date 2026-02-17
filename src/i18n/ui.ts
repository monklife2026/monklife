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

} as const;

export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
