import merge from 'lodash.merge';
import { Configuration } from '@akta/app';
import { configDefaults } from './defaults';
import { validateConfig } from './validate';

export function createConfig(projectConfig: Configuration) {
  return validateConfig(
    merge(configDefaults, projectConfig)
  );
}
