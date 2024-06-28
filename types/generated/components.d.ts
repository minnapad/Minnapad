import type { Schema, Attribute } from '@strapi/strapi';

export interface ConceptsConcepts extends Schema.Component {
  collectionName: 'components_concepts_concepts';
  info: {
    displayName: 'Concepts';
  };
  attributes: {
    Discription: Attribute.RichText;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'concepts.concepts': ConceptsConcepts;
      'project-benifits.project-benifits': ProjectBenifitsProjectBenifits;
      'project-category.project-category': ProjectCategoryProjectCategory;
      'project-social-links.project-social-links': ProjectSocialLinksProjectSocialLinks;
    }
  }
}
