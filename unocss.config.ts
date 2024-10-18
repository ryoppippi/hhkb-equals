import {
    defineConfig,
    presetUno,
    presetIcons,
    presetAttributify,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss';
import presetAnimations from 'unocss-preset-animations';
import { presetRyoppippi } from '@ryoppippi/unocss-preset';
import { presetDaisy } from 'unocss-preset-daisy';
import {isDevelopment} from 'std-env';

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetUno(),
    presetAnimations(),
    presetAttributify(),
    presetIcons({autoInstall: isDevelopment}),
    presetRyoppippi(),
		presetDaisy({
			themes: ['dark'],
		}),
  ],
})
