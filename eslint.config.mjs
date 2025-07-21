import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// Avoid hardcoded labels (OPTIONAL!)
			/* 'react/jsx-no-literals': 'warning', */
			// Consistently import navigation APIs from `@/i18n/navigation`
			"no-restricted-imports": [
				"error",
				{
					name: "next/link",
					message: "Please import from `@/i18n/navigation` instead.",
				},
				{
					name: "next/navigation",
					importNames: [
						"redirect",
						"permanentRedirect",
						"useRouter",
						"usePathname",
					],
					message: "Please import from `@/i18n/navigation` instead.",
				},
			],
		},
	},
	{
		files: ["app/**/og-image/route.tsx"],
		rules: {
			"@next/next/no-img-element": "off",
		},
	},
	eslintConfigPrettier,
];

export default eslintConfig;
