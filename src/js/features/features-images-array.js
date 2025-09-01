import strategic_combat_mobile from '/img/game-features/strategic-combat-mobile.png';
import strategic_combat_mobile_2x from '/img/game-features/strategic-combat-mobile@2x.png';
import strategic_combat_desktop from '/img/game-features/strategic-combat-desktop.png';
import strategic_combat_desktop_2x from '/img/game-features/strategic-combat-desktop@2x.png';

import campaign_map_mobile from '/img/game-features/campaign-map-mobile.png';
import campaign_map_mobile_2x from '/img/game-features/campaign-map-mobile@2x.png';
import campaign_map_desktop from '/img/game-features/campaign-map-desktop.png';
import campaign_map_desktop_2x from '/img/game-features/campaign-map-desktop@2x.png';

import hero_system_mobile from '/img/game-features/hero-system-mobile.png';
import hero_system_mobile_2x from '/img/game-features/hero-system-mobile@2x.png';
import hero_system_desktop from '/img/game-features/hero-system-desktop.png';
import hero_system_desktop_2x from '/img/game-features/hero-system-desktop@2x.png';

import interactive_storytelling_mobile from '/img/game-features/interactive-storytelling-mobile.png';
import interactive_storytelling_mobile_2x from '/img/game-features/interactive-storytelling-mobile@2x.png';
import interactive_storytelling_desktop from '/img/game-features/interactive-storytelling-desktop.png';
import interactive_storytelling_desktop_2x from '/img/game-features/interactive-storytelling-desktop@2x.png';

import dynasty_management_mobile from '/img/game-features/dynasty-management-mobile.png';
import dynasty_management_mobile_2x from '/img/game-features/dynasty-management-mobile@2x.png';
import dynasty_management_desktop from '/img/game-features/dynasty-management-desktop.png';
import dynasty_management_desktop_2x from '/img/game-features/dynasty-management-desktop@2x.png';

import stunning_visuals_mobile from '/img/game-features/stunning-visuals-mobile.png';
import stunning_visuals_mobile_2x from '/img/game-features/stunning-visuals-mobile@2x.png';
import stunning_visuals_desktop from '/img/game-features/stunning-visuals-desktop.png';
import stunning_visuals_desktop_2x from '/img/game-features/stunning-visuals-desktop@2x.png';

import pvp_and_pve_mobile from '/img/game-features/pvp-and-pve-mobile.png';
import pvp_and_pve_mobile_2x from '/img/game-features/pvp-and-pve-mobile@2x.png';
import pvp_and_pve_desktop from '/img/game-features/pvp-and-pve-desktop.png';
import pvp_and_pve_desktop_2x from '/img/game-features/pvp-and-pve-desktop@2x.png';

import getImage from '../functions/getImage';

const cards = [
  {
    // id: 'pvp-pve-modes',
    title: 'PvP & PvE Modes',
    description: 'Compete globally or conquer through immersive solo campaigns',
    images: {
      mobile1x: pvp_and_pve_mobile,
      mobile2x: pvp_and_pve_mobile_2x,
      desktop1x: pvp_and_pve_desktop,
      desktop2x: pvp_and_pve_desktop_2x,
    },
    alt: 'game heroes',
  },

  {
    // id: 'stunning-visuals',
    title: 'Stunning Visuals',
    description:
      'Breathtaking animations, hand-drawn portraits, and dynamic environments',
    images: {
      mobile1x: stunning_visuals_mobile,
      mobile2x: stunning_visuals_mobile_2x,
      desktop1x: stunning_visuals_desktop,
      desktop2x: stunning_visuals_desktop_2x,
    },
    alt: 'game heroes and the dragon',
  },

  {
    // id: 'dynasty-management',
    title: 'Dynasty Management',
    description:
      'Manage resources, diplomacy, armies, and political stability.',
    images: {
      mobile1x: dynasty_management_mobile,
      mobile2x: dynasty_management_mobile_2x,
      desktop1x: dynasty_management_desktop,
      desktop2x: dynasty_management_desktop_2x,
    },
    alt: 'game heroes',
  },

  {
    // id: 'hero-system',
    title: 'Hero System',
    description: 'Explore kingdoms, mountains, deserts, and lost temples',
    images: {
      mobile1x: hero_system_mobile,
      mobile2x: hero_system_mobile_2x,
      desktop1x: hero_system_desktop,
      desktop2x: hero_system_desktop_2x,
    },
    alt: 'game heroes',
  },

  {
    // id: 'interactive-storytelling',
    title: 'Interactive Storytelling',
    description:
      'Choices affect relationships, war outcomes, and future events',
    images: {
      mobile1x: interactive_storytelling_mobile,
      mobile2x: interactive_storytelling_mobile_2x,
      desktop1x: interactive_storytelling_desktop,
      desktop2x: interactive_storytelling_desktop_2x,
    },
    alt: 'game heroes',
  },

  {
    // id: 'campaign-map',
    title: 'Massive Campaign Map',
    description: 'Explore kingdoms, mountains, deserts, and lost temples',
    images: {
      mobile1x: campaign_map_mobile,
      mobile2x: campaign_map_mobile_2x,
      desktop1x: campaign_map_desktop,
      desktop2x: campaign_map_desktop_2x,
    },
    alt: 'games map',
  },

  {
    // id: 'strategic-combat',
    title: 'Deep Strategic Combat',
    description:
      'Tactical battles that challenge your mind and military precision',
    images: {
      mobile1x: strategic_combat_mobile,
      mobile2x: strategic_combat_mobile_2x,
      desktop1x: strategic_combat_desktop,
      desktop2x: strategic_combat_desktop_2x,
    },
    alt: 'angry fighters',
  },
];

export default cards;
