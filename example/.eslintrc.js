module.exports = {
  "extends": [
    'lxsmnsyc/typescript/react',
  ],
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": [
          "**/*.test.tsx",
          "vite.config.ts"
        ]
      }
    ],
    "camelcase": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/jsx-no-undef": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/no-unknown-property": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off"
  }
};
