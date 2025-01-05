import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
require('dotenv').config()

export default defineConfig<TestOptions>({
  // timeout:10000,
  // globalTimeout:60000,
  // expect:{
  //   timeout: 200,
  // toMatchSnapshot: {maxDiffPixels: 50}
  // },

  retries: 1,
  reporter: [
    ['json', {outputFile: 'test-results/jsonReport.json'}],
    ['junit', {outputFile: 'test-results/junitReport.xml'}],
    ['html']
  ],
 
  use: {
    baseURL: 'http://localhost:4200/',
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',

    trace: 'on-first-retry',
    // actionTimeout:5000,
    // navigationTimeout:5000,
    video: 'off'
  },

  projects: [
    {
      name: 'dev',
      use: { ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
       },
    },
    
    {
      name: 'chromium',
      // use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use:{
        browserName: 'firefox',
         video: {
          mode: 'on',
          size: {width: 1280, height: 720}
         }
      }
    },
    {
      name: 'pageObjectFullScreen',
      testMatch: 'usePageObjects.spec.ts',
      use:{
        viewport: {width: 1280, height:720}
      }
    },
    {
      name: 'mobile',
      testMatch: 'testMobile.spec.ts',
      use: {
        ...devices['Galaxy S9+']
      }
    }
  ]
});
