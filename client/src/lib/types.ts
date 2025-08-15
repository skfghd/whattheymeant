export type Category = 'boss' | 'casual' | 'work' | 'unclear';

export type ToneType = 'realistic' | 'cynical' | 'empathetic';

export interface TranslationVariant {
  text: string;
  tone: ToneType;
  emoji: string;
}

export interface Translation {
  original: string;
  translation: string;
  tone: ToneType;
  emoji: string;
  category: Category;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  emoji: string;
}

export interface SamplePhrase {
  text: string;
  category: Category;
}
