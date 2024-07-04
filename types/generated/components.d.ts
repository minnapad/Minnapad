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

export interface ConceptsConcepts extends Schema.Component {
  collectionName: 'components_concepts_concepts';
  info: {
    displayName: 'Concepts';
  };
  attributes: {
    Discription: Attribute.RichText;
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
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.RichText;
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

export interface HomeCollabWithLegendsHomeCollab extends Schema.Component {
  collectionName: 'components_home_collab_with_legends_home_collabs';
  info: {
    displayName: 'homeCollab';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    homeCollabLegends: Attribute.Component<'legends.legends', true>;
  };
}

export interface HomeDiscountsAndRewardsHomeDiscountsAndRewards
  extends Schema.Component {
  collectionName: 'components_home_discounts_and_rewards_home_discounts_and_rewards';
  info: {
    displayName: 'homeDiscountsAndRewards';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
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
  };
  attributes: {
    titleText: Attribute.String;
    titleSubText: Attribute.String;
    promoDescription: Attribute.String;
    heroBanner: Attribute.Media<'images'>;
    heroSeichiImage: Attribute.Media<'images'>;
    heroKeijiImage: Attribute.Media<'images'>;
    heroLegendsCtaContent: Attribute.String;
    heroLearnMoreCtaContent: Attribute.String;
  };
}

export interface HomeHowToJoinProjectsHomeHowToJoin extends Schema.Component {
  collectionName: 'components_home_how_to_join_projects_home_how_to_joins';
  info: {
    displayName: 'joinProjects';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    step1: Attribute.Component<'home-join-legends.step-1'>;
    step2: Attribute.Component<'home-join-legends.step-2'>;
    step3: Attribute.Component<'home-join-legends.step-3'>;
  };
}

export interface HomeIpOwnershipAndNameCreditIpOwnershipAndNameCredit
  extends Schema.Component {
  collectionName: 'components_home_ip_ownership_and_name_credit_ip_ownership_and_name_credits';
  info: {
    displayName: 'IPOwnershipAndNameCredit';
    icon: 'plus';
  };
  attributes: {
    title: Attribute.String;
    infoImage: Attribute.Media<'images'>;
    description: Attribute.Text;
  };
}

export interface HomeJoinCommunitySectionHomeJoinTheCommunity
  extends Schema.Component {
  collectionName: 'components_home_join_community_section_home_join_the_communities';
  info: {
    displayName: 'homeJoinTheCommunity';
    icon: 'plus';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    ownerShipBenefits: Attribute.Component<'home-ip-ownership-and-name-credit.ip-ownership-and-name-credit'>;
    discountsAndRewards: Attribute.Component<'home-discounts-and-rewards.home-discounts-and-rewards'>;
    newConnections: Attribute.Component<'home-new-connections.new-connections'>;
    mentorshipAndJobs: Attribute.Component<'home-mentorship-and-jobs.home-mentorship-and-jobs'>;
  };
}

export interface HomeJoinLegendsStep1 extends Schema.Component {
  collectionName: 'components_home_join_legends_step_1s';
  info: {
    displayName: 'Step 1';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    ctaContent: Attribute.String;
    step1Image: Attribute.Media<'images'>;
  };
}

export interface HomeJoinLegendsStep2 extends Schema.Component {
  collectionName: 'components_home_join_legends_step_2s';
  info: {
    displayName: 'Step 2';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    connectWallet: Attribute.String;
  };
}

export interface HomeJoinLegendsStep3 extends Schema.Component {
  collectionName: 'components_home_join_legends_step_3s';
  info: {
    displayName: 'Step 3';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.RichText;
    step3Image: Attribute.Media<'images'>;
  };
}

export interface HomeMentorshipAndJobsHomeMentorshipAndJobs
  extends Schema.Component {
  collectionName: 'components_home_mentorship_and_jobs_home_mentorship_and_jobs';
  info: {
    displayName: 'homeMentorshipAndJobs';
    icon: 'earth';
  };
  attributes: {
    title: Attribute.String;
    infoImage: Attribute.Media<'images'>;
    description: Attribute.Text;
  };
}

export interface HomeNewConnectionsNewConnections extends Schema.Component {
  collectionName: 'components_home_new_connections_new_connections';
  info: {
    displayName: 'newConnections';
    icon: 'oneWay';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HomeTeaserTeaser extends Schema.Component {
  collectionName: 'components_home_teaser_teasers';
  info: {
    displayName: 'Teaser';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaContent: Attribute.String;
  };
}

export interface LegendsLegends extends Schema.Component {
  collectionName: 'components_legends_legends';
  info: {
    displayName: 'Legends';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    projects: Attribute.Text;
    role: Attribute.String;
    profilePicture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bio: Attribute.Text;
    knownFor: Attribute.String;
    isUpcoming: Attribute.Boolean;
    upcomingDate: Attribute.String;
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
    Importance: Attribute.Enumeration<['low', 'medium', 'high', 'neutral']>;
    logo: Attribute.String;
  };
}

export interface MembershipDetailsMembershipDetails extends Schema.Component {
  collectionName: 'components_membership_details_membership_details';
  info: {
    displayName: 'membershipDetails';
    icon: 'information';
  };
  attributes: {
    benefit: Attribute.Component<'membership-benefits.benefit', true>;
    logo: Attribute.String;
    title: Attribute.String;
    ctaContent: Attribute.String;
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
      'career-benifits.career-benifits': CareerBenifitsCareerBenifits;
      'career-openings.career-openings': CareerOpeningsCareerOpenings;
      'career-opertunities.career-opertunities': CareerOpertunitiesCareerOpertunities;
      'concepts.concepts': ConceptsConcepts;
      'details.details': DetailsDetails;
      'faq.faq': FaqFaq;
      'get-in-touch.get-in-touch': GetInTouchGetInTouch;
      'get-in-touch.support': GetInTouchSupport;
      'head-quarters.head-quarters': HeadQuartersHeadQuarters;
      'head-quarters.quarter-details': HeadQuartersQuarterDetails;
      'home-collab-with-legends.home-collab': HomeCollabWithLegendsHomeCollab;
      'home-discounts-and-rewards.home-discounts-and-rewards': HomeDiscountsAndRewardsHomeDiscountsAndRewards;
      'home-featured.home-featured': HomeFeaturedHomeFeatured;
      'home-hero.home-hero': HomeHeroHomeHero;
      'home-how-to-join-projects.home-how-to-join': HomeHowToJoinProjectsHomeHowToJoin;
      'home-ip-ownership-and-name-credit.ip-ownership-and-name-credit': HomeIpOwnershipAndNameCreditIpOwnershipAndNameCredit;
      'home-join-community-section.home-join-the-community': HomeJoinCommunitySectionHomeJoinTheCommunity;
      'home-join-legends.step-1': HomeJoinLegendsStep1;
      'home-join-legends.step-2': HomeJoinLegendsStep2;
      'home-join-legends.step-3': HomeJoinLegendsStep3;
      'home-mentorship-and-jobs.home-mentorship-and-jobs': HomeMentorshipAndJobsHomeMentorshipAndJobs;
      'home-new-connections.new-connections': HomeNewConnectionsNewConnections;
      'home-teaser.teaser': HomeTeaserTeaser;
      'legends.legends': LegendsLegends;
      'link.link': LinkLink;
      'locations.locations': LocationsLocations;
      'membership-benefits.benefit': MembershipBenefitsBenefit;
      'membership-details.membership-details': MembershipDetailsMembershipDetails;
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
