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

export interface HomeFeaturedFeatured extends Schema.Component {
  collectionName: 'components_home_featured_featureds';
  info: {
    displayName: 'featured';
    icon: 'feather';
  };
  attributes: {
    details: Attribute.Component<'details.details', true>;
  };
}

export interface HomeHeroHeroSection extends Schema.Component {
  collectionName: 'components_home_hero_hero_sections';
  info: {
    displayName: 'heroSection';
    icon: 'house';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    subTitle: Attribute.Text;
    ctaContent: Attribute.String;
    heroBgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeJoinLegendsJoinLegends extends Schema.Component {
  collectionName: 'components_home_join_legends_join_legends';
  info: {
    displayName: 'joinLegends';
    description: '';
  };
  attributes: {
    step1: Attribute.Component<'home-join-legends.step-1'>;
    step2: Attribute.Component<'home-join-legends.step-2'>;
    step3: Attribute.Component<'home-join-legends.step-3'>;
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

export interface HomeJoinTheCommunityBenefit extends Schema.Component {
  collectionName: 'components_home_join_the_community_benefits';
  info: {
    displayName: 'benefit';
    icon: 'plus';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HomeJoinTheCommunityCommunityBenefits
  extends Schema.Component {
  collectionName: 'components_home_join_the_community_community_benefits';
  info: {
    displayName: 'communityBenefits';
  };
  attributes: {
    ipOwnerShip: Attribute.Component<'home-join-the-community.ip-ownership-and-name-credit'>;
    discounts: Attribute.Component<'home-join-the-community.discounts-and-rewards'>;
    newConnections: Attribute.Component<'home-join-the-community.new-connections'>;
    membership: Attribute.Component<'home-join-the-community.mentorship-and-paid-job-opportunities'>;
  };
}

export interface HomeJoinTheCommunityDiscountsAndRewards
  extends Schema.Component {
  collectionName: 'components_home_join_the_community_discounts_and_rewards';
  info: {
    displayName: 'Discounts and rewards';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HomeJoinTheCommunityIpOwnershipAndNameCredit
  extends Schema.Component {
  collectionName: 'components_home_join_the_community_ip_ownership_and_name_credits';
  info: {
    displayName: 'IPOwnershipAndNameCredit';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeJoinTheCommunityJoinTheCommunity extends Schema.Component {
  collectionName: 'components_home_join_the_community_join_the_communities';
  info: {
    displayName: 'JoinTheCommunity';
  };
  attributes: {};
}

export interface HomeJoinTheCommunityMentorshipAndPaidJobOpportunities
  extends Schema.Component {
  collectionName: 'components_home_join_the_community_mentorship_and_paid_job_opportunities';
  info: {
    displayName: 'MentorshipAndPaidJobOpportunities';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
  };
}

export interface HomeJoinTheCommunityNewConnections extends Schema.Component {
  collectionName: 'components_home_join_the_community_new_connections';
  info: {
    displayName: 'newConnections';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HomeSocialLinksSocialLinks extends Schema.Component {
  collectionName: 'components_home_social_links_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'link';
  };
  attributes: {
    link: Attribute.Component<'link.link', true>;
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

export interface HomeTwoOrMoreMembershipsTwoOrMoreMembershipBenefits
  extends Schema.Component {
  collectionName: 'components_home_two_or_more_memberships_two_or_more_membership_benefits';
  info: {
    displayName: 'twoOrMoreMembershipBenefits';
    description: '';
  };
  attributes: {
    benefit: Attribute.Component<'membership-benefits.benefit', true>;
    ctaContent: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
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
  };
}

export interface MembershipBenefitsMembershipBenefits extends Schema.Component {
  collectionName: 'components_membership_benefits_membership_benefits';
  info: {
    displayName: 'membershipBenefits';
    description: '';
  };
  attributes: {
    benefit: Attribute.Component<'membership-benefits.benefit', true>;
  };
}

export interface MembershipBenefitsOneMembershipBenefits
  extends Schema.Component {
  collectionName: 'components_membership_benefits_one_membership_benefits';
  info: {
    displayName: 'oneMembershipBenefits';
    description: '';
  };
  attributes: {
    benefit: Attribute.Component<'membership-benefits.benefit', true>;
    ctaContent: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
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
      'home-featured.featured': HomeFeaturedFeatured;
      'home-hero.hero-section': HomeHeroHeroSection;
      'home-join-legends.join-legends': HomeJoinLegendsJoinLegends;
      'home-join-legends.step-1': HomeJoinLegendsStep1;
      'home-join-legends.step-2': HomeJoinLegendsStep2;
      'home-join-legends.step-3': HomeJoinLegendsStep3;
      'home-join-the-community.benefit': HomeJoinTheCommunityBenefit;
      'home-join-the-community.community-benefits': HomeJoinTheCommunityCommunityBenefits;
      'home-join-the-community.discounts-and-rewards': HomeJoinTheCommunityDiscountsAndRewards;
      'home-join-the-community.ip-ownership-and-name-credit': HomeJoinTheCommunityIpOwnershipAndNameCredit;
      'home-join-the-community.join-the-community': HomeJoinTheCommunityJoinTheCommunity;
      'home-join-the-community.mentorship-and-paid-job-opportunities': HomeJoinTheCommunityMentorshipAndPaidJobOpportunities;
      'home-join-the-community.new-connections': HomeJoinTheCommunityNewConnections;
      'home-social-links.social-links': HomeSocialLinksSocialLinks;
      'home-teaser.teaser': HomeTeaserTeaser;
      'home-two-or-more-memberships.two-or-more-membership-benefits': HomeTwoOrMoreMembershipsTwoOrMoreMembershipBenefits;
      'legends.legends': LegendsLegends;
      'link.link': LinkLink;
      'membership-benefits.benefit': MembershipBenefitsBenefit;
      'membership-benefits.membership-benefits': MembershipBenefitsMembershipBenefits;
      'membership-benefits.one-membership-benefits': MembershipBenefitsOneMembershipBenefits;
      'partners.partners': PartnersPartners;
      'profile.profile': ProfileProfile;
      'project-benifits.project-benifits': ProjectBenifitsProjectBenifits;
      'project-category.project-category': ProjectCategoryProjectCategory;
      'project-social-links.project-social-links': ProjectSocialLinksProjectSocialLinks;
      'style-guide.style-guide': StyleGuideStyleGuide;
      'styleguide-content.styleguide-content': StyleguideContentStyleguideContent;
    }
  }
}
