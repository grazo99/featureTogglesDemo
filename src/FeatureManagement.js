import { Toggles } from './toggles/development';

export const isEnabled = (featureName) => {
  return Toggles[featureName];
}

