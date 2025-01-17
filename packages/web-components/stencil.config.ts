import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'cbp-web-components',
  //globalStyle: 'src/global/styles/index.scss',
  validatePrimaryPackageOutputTarget: true,
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@cbpds/web-components',
      proxiesFile: '../react-components/components/stencil-generated/index.ts',
    }),
    {
      type: 'dist', // The dist type is to generate the component(s) as a reusable library that can be self-lazy loading
      esmLoaderPath: 'loader',
      isPrimaryPackageOutputTarget: true,
      copy: [
        { src: '../assets', dest: 'dist/assets' }
       ],
    },
    {
      type: 'dist-custom-elements',
      minify: true,
      copy: [
        { src: '../assets', dest: 'dist/assets' }
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: '../assets', dest: './assets' }
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  extras: {
    enableImportInjection: true,
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true
  },
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/global/styles/index.scss",
      ]
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
