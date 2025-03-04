import { InstallationItem } from 'shared/models';

export interface AnvilOptions {
  index: number;
  levels: number;
}

export interface AnvilCalculatorOptions {
  showGltr: boolean;
  showDetailedAlchemica: boolean;
}

export interface AnvilItem {
  id: number;
  name: string;
  type: string;
  width: number;
  height: number;
  levels: InstallationItem[];
}
