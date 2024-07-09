import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAwardsAwards extends Schema.Component {
  collectionName: 'components_about_us_awards_awards';
  info: {
    displayName: 'awards';
    icon: 'crown';
  };
  attributes: {
    awardBy: Attribute.String;
    awardName: Attribute.Text;
  };
}

export interface AboutUsCrewCrewCard extends Schema.Component {
  collectionName: 'components_about_us_crew_crew_cards';
  info: {
    displayName: 'member';
    icon: 'apps';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    bio: Attribute.Text;
    profileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkedin: Attribute.String;
  };
}

export interface AboutUsCrewCrew extends Schema.Component {
  collectionName: 'components_about_us_crew_crews';
  info: {
    displayName: 'crew';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    members: Attribute.Component<'about-us-crew.crew-card', true>;
  };
}

export interface AboutUsHeroHeroSection extends Schema.Component {
  collectionName: 'components_about_us_hero_hero_sections';
  info: {
    displayName: 'hero';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    banner: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Attribute.RichText;
  };
}

export interface AboutUsMissionMissions extends Schema.Component {
  collectionName: 'components_about_us_mission_missions';
  info: {
    displayName: 'missions';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    missionCard: Attribute.Component<'about-us-mission.misson-card', true>;
  };
}

export interface AboutUsMissionMissonCard extends Schema.Component {
  collectionName: 'components_mission_card_misson_cards';
  info: {
    displayName: 'missonCard';
    icon: 'apps';
    description: '';
  };
  attributes: {
    cardTitle: Attribute.String;
    cardLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    cardDescription: Attribute.Text;
  };
}

export interface BlogDescBlogDescription extends Schema.Component {
  collectionName: 'components_blog_desc_blog_descriptions';
  info: {
    displayName: 'Blog Description';
  };
  attributes: {
    description: Attribute.RichText;
  };
}

export interface BlogDescBlogMedia extends Schema.Component {
  collectionName: 'components_blog_desc_blog_medias';
  info: {
    displayName: 'Blog Media';
    description: '';
  };
  attributes: {
    contentMedia: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Attribute.Enumeration<['image', 'video']>;
    name: Attribute.String;
  };
}

export interface CareerBenifitsCareerBenifits extends Schema.Component {
  collectionName: 'components_career_benifits_career_benifits';
  info: {
    displayName: 'careerBenifits';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    description: Attribute.RichText;
  };
}

export interface CareerOpeningsCareerOpenings extends Schema.Component {
  collectionName: 'components_career_openings_career_openings';
  info: {
    displayName: 'careerOpenings';
  };
  attributes: {
    role: Attribute.String;
    location: Attribute.String;
  };
}

export interface CareerOpertunitiesCareerOpertunities extends Schema.Component {
  collectionName: 'components_career_opertunities_career_opertunities';
  info: {
    displayName: 'careerOpertunities';
  };
  attributes: {
    department: Attribute.String;
    opertunities: Attribute.Component<'career-openings.career-openings', true>;
  };
}

export interface CommunityCollabsCollabs extends Schema.Component {
  collectionName: 'components_community_collabs_collabs';
  info: {
    displayName: 'collabs';
  };
  attributes: {
    tite: Attribute.String;
    legends: Attribute.Component<'legends.legends', true>;
  };
}

export interface ConceptsConcepts extends Schema.Component {
  collectionName: 'components_concepts_concepts';
  info: {
    displayName: 'Concepts';
  };
  attributes: {
    Discription: Attribute.RichText;
  };
}

export interface CtAsCtAs extends Schema.Component {
  collectionName: 'components_ct_as_ct_as';
  info: {
    displayName: 'CTAs';
  };
  attributes: {
    link: Attribute.String;
    content: Attribute.String;
  };
}

export interface DetailsDetails extends Schema.Component {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
    icon: 'information';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media<'images'>;
    websiteUrl: Attribute.String;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.RichText;
    hasCTAs: Attribute.Boolean;
    CTAs: Attribute.Component<'ct-as.ct-as', true>;
  };
}

export interface GetInTouchGetInTouch extends Schema.Component {
  collectionName: 'components_get_in_touch_get_in_touches';
  info: {
    displayName: 'getInTouch';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    supports: Attribute.Component<'get-in-touch.support', true>;
  };
}

export interface GetInTouchSupport extends Schema.Component {
  collectionName: 'components_get_in_touch_supports';
  info: {
    displayName: 'support';
    icon: 'discuss';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    cardImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonText: Attribute.String;
  };
}

export interface HeadQuartersHeadQuarters extends Schema.Component {
  collectionName: 'components_head_quarters_head_quarters';
  info: {
    displayName: 'headQuarters';
    icon: 'gate';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    branches: Attribute.Component<'head-quarters.quarter-details', true>;
    mapImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locations: Attribute.Component<'locations.locations', true>;
  };
}

export interface HeadQuartersQuarterDetails extends Schema.Component {
  collectionName: 'components_head_quarters_quarter_details';
  info: {
    displayName: 'branch';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    address: Attribute.Text;
  };
}

export interface HeaderContentHeaderContent extends Schema.Component {
  collectionName: 'components_header_content_header_contents';
  info: {
    displayName: 'headerContent';
    description: '';
  };
  attributes: {
    item: Attribute.String;
    isdropdown: Attribute.Boolean;
  };
}

export interface HomeFeaturedHomeFeatured extends Schema.Component {
  collectionName: 'components_home_featured_home_featureds';
  info: {
    displayName: 'homeFeatured';
    icon: 'feather';
  };
  attributes: {
    details: Attribute.Component<'details.details', true>;
  };
}

export interface HomeHeroHomeHero extends Schema.Component {
  collectionName: 'components_home_hero_home_heroes';
  info: {
    displayName: 'homeHero';
    icon: 'information';
    description: '';
  };
  attributes: {
    titleText: Attribute.String;
    titleSubText: Attribute.String;
    promoDescription: Attribute.String;
    heroBanner: Attribute.Media<'images'>;
    heroLegendsCtaContent: Attribute.String;
    heroLearnMoreCtaContent: Attribute.String;
    legendsToDisplay: Attribute.Component<'legends.legends', true>;
  };
}

export interface HomeTeaserTeaser extends Schema.Component {
  collectionName: 'components_home_teaser_teasers';
  info: {
    displayName: 'Teaser';
    description: '';
  };
  attributes: {
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaContent: Attribute.String;
    hasUrl: Attribute.Boolean;
    url: Attribute.String;
    thumbnail: Attribute.Media<'images'>;
    title: Attribute.RichText;
  };
}

export interface JoinProjectsJoinProjects extends Schema.Component {
  collectionName: 'components_join_projects_join_projects';
  info: {
    displayName: 'joinProjects';
  };
  attributes: {
    title: Attribute.String;
    step1: Attribute.Component<'join-projects.step1'>;
    step2: Attribute.Component<'join-projects.step2'>;
    step3: Attribute.Component<'join-projects.step3'>;
  };
}

export interface JoinProjectsStep1 extends Schema.Component {
  collectionName: 'components_join_projects_step1s';
  info: {
    displayName: 'step1';
    description: '';
  };
  attributes: {
    ctaContent: Attribute.String;
    title: Attribute.RichText;
    infoImage: Attribute.Media<'images'>;
  };
}

export interface JoinProjectsStep2 extends Schema.Component {
  collectionName: 'components_join_projects_step2s';
  info: {
    displayName: 'step2';
    description: '';
  };
  attributes: {
    howToConnect: Attribute.String;
    title: Attribute.RichText;
    description: Attribute.RichText;
  };
}

export interface JoinProjectsStep3 extends Schema.Component {
  collectionName: 'components_join_projects_step3s';
  info: {
    displayName: 'step3';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    infoImage: Attribute.Media<'images'>;
    description: Attribute.RichText;
  };
}

export interface LatestNewsLatestNews extends Schema.Component {
  collectionName: 'components_latest_news_latest_news';
  info: {
    displayName: 'latestNews';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface LegendsProjectsLegendsProjects extends Schema.Component {
  collectionName: 'components_legends_projects_legends_projects';
  info: {
    displayName: 'legendsProjects';
  };
  attributes: {
    title: Attribute.String;
    legends: Attribute.Component<'legends.legends', true>;
  };
}

export interface LegendsLegends extends Schema.Component {
  collectionName: 'components_legends_legends';
  info: {
    displayName: 'Legend';
    description: '';
  };
  attributes: {
    ctaContent: Attribute.String;
    name: Attribute.String;
    legend: Attribute.Relation<
      'legends.legends',
      'oneToOne',
      'api::legend.legend'
    >;
    customImage: Attribute.Media<'images'>;
    popularProjects: Attribute.String;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    icon: Attribute.String;
    name: Attribute.String;
  };
}

export interface LocationsLocations extends Schema.Component {
  collectionName: 'components_locations_locations';
  info: {
    displayName: 'locations';
  };
  attributes: {
    locationIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locationName: Attribute.String;
  };
}

export interface MembershipBenefitsBenefit extends Schema.Component {
  collectionName: 'components_membership_benefits_benefits';
  info: {
    displayName: 'benefit';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    isEligible: Attribute.Boolean;
    betterThanOtherType: Attribute.Enumeration<['no', 'neutral', 'yes']>;
    logo: Attribute.String;
  };
}

export interface MembershipDetailsMembershipDetails extends Schema.Component {
  collectionName: 'components_membership_details_membership_details';
  info: {
    displayName: 'membershipDetails';
    icon: 'information';
    description: '';
  };
  attributes: {
    benefit: Attribute.Component<'membership-benefits.benefit', true>;
    logo: Attribute.String;
    title: Attribute.String;
    ctaContent: Attribute.String;
    description: Attribute.Text;
  };
}

export interface NavSubmenuMenu extends Schema.Component {
  collectionName: 'components_nav_submenu_menus';
  info: {
    displayName: 'menu';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    menuLink: Attribute.Component<'link.link', true>;
  };
}

export interface NavitemsNavitems extends Schema.Component {
  collectionName: 'components_navitems_navitems';
  info: {
    displayName: 'navitems';
    description: '';
  };
  attributes: {
    item: Attribute.String;
    isdropdown: Attribute.Boolean;
  };
}

export interface OurCommunityConnections extends Schema.Component {
  collectionName: 'components_our_community_connections';
  info: {
    displayName: 'connections';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface OurCommunityDiscounts extends Schema.Component {
  collectionName: 'components_our_community_discounts';
  info: {
    displayName: 'discounts';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface OurCommunityIpOwnerships extends Schema.Component {
  collectionName: 'components_our_community_ip_ownerships';
  info: {
    displayName: 'ipOwnerships';
  };
  attributes: {
    title: Attribute.String;
    infoImage: Attribute.Media<'images'>;
    description: Attribute.Text;
  };
}

export interface OurCommunityJoinCommunity extends Schema.Component {
  collectionName: 'components_our_community_join_communities';
  info: {
    displayName: 'joinCommunity';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    discountsRewards: Attribute.Component<'our-community.discounts'>;
    newConnections: Attribute.Component<'our-community.connections'>;
    jobs: Attribute.Component<'our-community.mentorship-jobs'>;
    ipOwnership: Attribute.Component<'our-community.ip-ownerships'>;
  };
}

export interface OurCommunityMentorshipJobs extends Schema.Component {
  collectionName: 'components_our_community_mentorship_jobs';
  info: {
    displayName: 'mentorshipJobs';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    infoImage: Attribute.Media<'images'>;
  };
}

export interface PartnersPartners extends Schema.Component {
  collectionName: 'components_partners_partners';
  info: {
    displayName: 'partners';
    icon: 'information';
  };
  attributes: {
    details: Attribute.Component<'details.details', true>;
  };
}

export interface ProfileProfile extends Schema.Component {
  collectionName: 'components_profile_profiles';
  info: {
    displayName: 'Profile';
    icon: 'information';
  };
  attributes: {
    profilePicture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.RichText;
  };
}

export interface ProjectBenifitsProjectBenifits extends Schema.Component {
  collectionName: 'components_project_benifits_project_benifits';
  info: {
    displayName: 'ProjectBenifits';
  };
  attributes: {
    benifitIcon: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benifits: Attribute.RichText;
  };
}

export interface ProjectCategoryProjectCategory extends Schema.Component {
  collectionName: 'components_project_category_project_categories';
  info: {
    displayName: 'projectCategory';
    description: '';
  };
  attributes: {
    categoryIcon: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    categoryName: Attribute.String;
  };
}

export interface ProjectSocialLinksProjectSocialLinks extends Schema.Component {
  collectionName: 'components_project_social_links_project_social_links';
  info: {
    displayName: 'ProjectSocialLinks';
  };
  attributes: {
    Name: Attribute.RichText;
  };
}

export interface SocialLinksSocialLinks extends Schema.Component {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    link: Attribute.Component<'link.link', true>;
  };
}

export interface StyleGuideStyleGuide extends Schema.Component {
  collectionName: 'components_style_guide_style_guides';
  info: {
    displayName: 'styleGuide';
  };
  attributes: {
    tile: Attribute.String;
    guideLines: Attribute.Component<
      'styleguide-content.styleguide-content',
      true
    >;
  };
}

export interface StyleguideContentStyleguideContent extends Schema.Component {
  collectionName: 'components_styleguide_content_styleguide_contents';
  info: {
    displayName: 'styleguideContent';
    description: '';
  };
  attributes: {
    rules: Attribute.RichText;
    rulesImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us-awards.awards': AboutUsAwardsAwards;
      'about-us-crew.crew-card': AboutUsCrewCrewCard;
      'about-us-crew.crew': AboutUsCrewCrew;
      'about-us-hero.hero-section': AboutUsHeroHeroSection;
      'about-us-mission.missions': AboutUsMissionMissions;
      'about-us-mission.misson-card': AboutUsMissionMissonCard;
      'blog-desc.blog-description': BlogDescBlogDescription;
      'blog-desc.blog-media': BlogDescBlogMedia;
      'career-benifits.career-benifits': CareerBenifitsCareerBenifits;
      'career-openings.career-openings': CareerOpeningsCareerOpenings;
      'career-opertunities.career-opertunities': CareerOpertunitiesCareerOpertunities;
      'community-collabs.collabs': CommunityCollabsCollabs;
      'concepts.concepts': ConceptsConcepts;
      'ct-as.ct-as': CtAsCtAs;
      'details.details': DetailsDetails;
      'faq.faq': FaqFaq;
      'get-in-touch.get-in-touch': GetInTouchGetInTouch;
      'get-in-touch.support': GetInTouchSupport;
      'head-quarters.head-quarters': HeadQuartersHeadQuarters;
      'head-quarters.quarter-details': HeadQuartersQuarterDetails;
      'header-content.header-content': HeaderContentHeaderContent;
      'home-featured.home-featured': HomeFeaturedHomeFeatured;
      'home-hero.home-hero': HomeHeroHomeHero;
      'home-teaser.teaser': HomeTeaserTeaser;
      'join-projects.join-projects': JoinProjectsJoinProjects;
      'join-projects.step1': JoinProjectsStep1;
      'join-projects.step2': JoinProjectsStep2;
      'join-projects.step3': JoinProjectsStep3;
      'latest-news.latest-news': LatestNewsLatestNews;
      'legends-projects.legends-projects': LegendsProjectsLegendsProjects;
      'legends.legends': LegendsLegends;
      'link.link': LinkLink;
      'locations.locations': LocationsLocations;
      'membership-benefits.benefit': MembershipBenefitsBenefit;
      'membership-details.membership-details': MembershipDetailsMembershipDetails;
      'nav-submenu.menu': NavSubmenuMenu;
      'navitems.navitems': NavitemsNavitems;
      'our-community.connections': OurCommunityConnections;
      'our-community.discounts': OurCommunityDiscounts;
      'our-community.ip-ownerships': OurCommunityIpOwnerships;
      'our-community.join-community': OurCommunityJoinCommunity;
      'our-community.mentorship-jobs': OurCommunityMentorshipJobs;
      'partners.partners': PartnersPartners;
      'profile.profile': ProfileProfile;
      'project-benifits.project-benifits': ProjectBenifitsProjectBenifits;
      'project-category.project-category': ProjectCategoryProjectCategory;
      'project-social-links.project-social-links': ProjectSocialLinksProjectSocialLinks;
      'social-links.social-links': SocialLinksSocialLinks;
      'style-guide.style-guide': StyleGuideStyleGuide;
      'styleguide-content.styleguide-content': StyleguideContentStyleguideContent;
    }
  }
}
