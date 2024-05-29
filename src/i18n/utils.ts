import { defaultLang, ui } from './ui';
import { defaultLabels } from './data';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');

  if (lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export function useTranslation<
  Lang extends keyof typeof defaultLabels,
  Section extends keyof (typeof defaultLabels)[Lang],
  Key extends keyof (typeof defaultLabels)[Lang][Section]
>(lang: Lang) {
  return function t<Type>(
    section: Section,
    key: Key
  ): Type {

    return defaultLabels[lang][section][key] as Type;
  };
}
