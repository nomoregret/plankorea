
export enum DesignType {
  EMOTIONAL = 'EMOTIONAL',
  CAMPAIGN_GRID = 'CAMPAIGN_GRID',
  MINIMAL = 'MINIMAL',
  MODERN_STORY = 'MODERN_STORY',
  INFOGRAPHIC = 'INFOGRAPHIC',
  MAGAZINE = 'MAGAZINE',
  CINEMATIC = 'CINEMATIC',
  EMERGENCY_DARK = 'EMERGENCY_DARK',
  PLAYFUL = 'PLAYFUL',
  NEO_BRUTALISM = 'NEO_BRUTALISM'
}

export interface Campaign {
  id: number;
  title: string;
  category: string;
  image: string;
  progress: number;
  goal: string;
  description: string;
}
