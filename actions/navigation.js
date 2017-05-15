import { NAVIGATE } from './';

export function navigate(path) {
  return { type: NAVIGATE, path };
}
