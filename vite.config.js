import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import {fileURLToPath} from "url";

import {
   ViteImageOptimizer
} from 'vite-plugin-image-optimizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/

export default defineConfig({
   plugins: [
      react(),
      ViteImageOptimizer({
         svg: {
            multipass: true,
            plugins: [{
               name: 'preset-default',
               params: {
                  overrides: {
                     cleanupNumericValues: false,
                     removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                  },
                  cleanupIDs: {
                     minify: false,
                     remove: false,
                  },
                  convertPathData: false,
               },
            },
               'sortAttrs',
            {
               name: 'addAttributesToSVGElement',
               params: {
                  attributes: [{
                     xmlns: 'http://www.w3.org/2000/svg'
                  }],
               },
            },
            ],
         },
         png: {
            // https://sharp.pixelplumbing.com/api-output#png
            quality: 80,
         },
         jpeg: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
            quality: 80,
         },
         jpg: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
            quality: 80,
         },
         // gif does not support lossless compression
         // https://sharp.pixelplumbing.com/api-output#gif
         gif: {},
         webp: {
            // https://sharp.pixelplumbing.com/api-output#webp
            lossless: true,
         },
         avif: {
            // https://sharp.pixelplumbing.com/api-output#avif
            lossless: true,
         },
      }),
   ],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "src"),
         "@scss":path.resolve(__dirname,"src/scss"),
      },
   },
});


/*
export default defineConfig({
   root: './src',
   publicDir: '../public',
   build: {
      outDir: '../dist',
   },
   plugins: [
      ViteImageOptimizer({
         svg: {
            multipass: true,
            plugins: [{
                  name: 'preset-default',
                  params: {
                     overrides: {
                        cleanupNumericValues: false,
                        removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                     },
                     cleanupIDs: {
                        minify: false,
                        remove: false,
                     },
                     convertPathData: false,
                  },
               },
               'sortAttrs',
               {
                  name: 'addAttributesToSVGElement',
                  params: {
                     attributes: [{
                        xmlns: 'http://www.w3.org/2000/svg'
                     }],
                  },
               },
            ],
         },
         png: {
            // https://sharp.pixelplumbing.com/api-output#png
            quality: 80,
         },
         jpeg: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
            quality: 80,
         },
         jpg: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
            quality: 80,
         },
         // gif does not support lossless compression
         // https://sharp.pixelplumbing.com/api-output#gif
         gif: {},
         webp: {
            // https://sharp.pixelplumbing.com/api-output#webp
            lossless: true,
         },
         avif: {
            // https://sharp.pixelplumbing.com/api-output#avif
            lossless: true,
         },
      }),
   ],
});
*/