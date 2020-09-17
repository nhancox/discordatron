const possibleErrors = {
  // Recommended
  "for-direction": "error",

  // Recommended
  "getter-return": ["error", { allowImplicit: false }],

  // Recommended
  "no-async-promise-executor": "error",

  "no-await-in-loop": "off",

  // Recommended
  "no-compare-neg-zero": "error",

  // Recommended
  "no-cond-assign": ["error", "always"],

  // Note: Incredibly project-dependent
  "no-console": "off",

  // Recommended
  "no-constant-condition": ["error", { checkLoops: true }],

  // Recommended
  "no-control-regex": "error",

  // Recommended
  "no-debugger": "error",

  // Recommended
  "no-dupe-args": "error",

  // Recommended
  "no-dupe-keys": "error",

  // Recommended
  "no-duplicate-case": "error",

  // Recommended
  "no-empty": ["error", { allowEmptyCatch: false }],

  // Recommended
  "no-empty-character-class": "error",

  // Recommended
  "no-ex-assign": "error",

  // Recommended, Fixable
  "no-extra-boolean-cast": "error",

  // Fixable
  "no-extra-parens": ["error", "all"],

  // Recommended, Fixable
  "no-extra-semi": "error",

  // Recommended
  "no-func-assign": "error",

  // Recommended
  // Note: This is obsolete because ES6 has block-scoped functions
  "no-inner-declarations": "off",

  // Recommended
  "no-invalid-regexp": "error",

  // Recommended
  "no-irregular-whitespace": [
    "error",
    {
      skipStrings: true,
      skipComments: false,
      skipRegExps: true,
      skipTemplates: true,
    },
  ],

  // Recommended
  "no-misleading-character-class": "error",

  // Recommended
  "no-obj-calls": "error",

  // Recommended
  "no-prototype-builtins": "error",

  // Recommended, Fixable
  "no-regex-spaces": "error",

  // Recommended
  "no-sparse-arrays": "error",

  "no-template-curly-in-string": "error",

  // Recommended
  // Note: Enforced by Prettier (can conflict)
  "no-unexpected-multiline": "off",

  // Recommended
  "no-unreachable": "error",

  // Recommended
  "no-unsafe-finally": "error",

  // Recommended, Fixable
  "no-unsafe-negation": "error",

  // Recommended
  "require-atomic-updates": "error",

  // Recommended
  "use-isnan": "error",

  // Recommended
  "valid-typeof": ["error", { requireStringLiterals: true }],
};

const bestPractices = {
  "accessor-pairs": ["error", { getWithoutSet: false, setWithoutGet: true }],

  "array-callback-return": ["error", { allowImplicit: false }],

  "block-scoped-var": "off",

  "class-methods-use-this": "off",

  complexity: "off",

  "consistent-return": "off",

  // Fixable
  curly: ["error", "all"],

  "default-case": "off",

  // Fixable
  "dot-location": ["error", "property"],

  // Fixable
  "dot-notation": "error",

  // Fixable
  eqeqeq: ["error", "always"],

  "guard-for-in": "off",

  "max-classes-per-file": ["error", 1],

  "no-alert": "error",

  "no-caller": "error",

  // Recommended
  "no-case-declarations": "error",

  // Fixable
  "no-div-regex": "error",

  // Fixable
  "no-else-return": ["error", { allowElseIf: false }],

  "no-empty-function": ["error", { allow: [] }],

  // Recommended
  "no-empty-pattern": "error",

  "no-eq-null": "error",

  "no-eval": ["error", { allowIndirect: false }],

  "no-extend-native": ["error", { exceptions: [] }],

  // Fixable
  "no-extra-bind": "error",

  // Fixable
  "no-extra-label": "error",

  // Recommended
  "no-fallthrough": "error",

  // Fixable
  "no-floating-decimal": "error",

  // Recommended
  "no-global-assign": ["error", { exceptions: [] }],

  // Fixable
  "no-implicit-coercion": [
    "error",
    {
      boolean: true,
      number: true,
      string: true,
      allow: [],
    },
  ],

  "no-implicit-globals": "error",

  "no-implied-eval": "error",

  "no-invalid-this": "error",

  "no-iterator": "error",

  "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

  "no-lone-blocks": "error",

  "no-loop-func": "error",

  // Onerous when on, so follow the spirit
  "no-magic-numbers": "off",

  // Fixable
  "no-multi-spaces": ["error", { ignoreEOLComments: false }],

  "no-multi-str": "error",

  "no-new": "error",

  "no-new-func": "error",

  "no-new-wrappers": "error",

  // Recommended
  "no-octal": "error",

  "no-octal-escape": "error",

  "no-param-reassign": ["error", { props: false }],

  "no-proto": "error",

  // Recommended
  "no-redeclare": ["error", { builtinGlobals: true }],

  "no-restricted-properties": "off",

  "no-return-assign": ["error", "always"],

  "no-return-await": "error",

  "no-script-url": "error",

  // Recommended
  "no-self-assign": ["error", { props: true }],

  "no-self-compare": "error",

  "no-sequences": "error",

  "no-throw-literal": "error",

  "no-unmodified-loop-condition": "error",

  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // Recommended, Fixable
  "no-unused-labels": "error",

  "no-useless-call": "error",

  // Recommended
  "no-useless-catch": "error",

  "no-useless-concat": "error",

  // Recommended
  "no-useless-escape": "error",

  // Fixable
  "no-useless-return": "error",

  "no-void": "error",

  "no-warning-comments": "off",

  // Recommended
  "no-with": "error",

  "prefer-named-capture-group": "error",

  "prefer-promise-reject-errors": ["error", { allowEmptyReject: false }],

  radix: ["error", "always"],

  "require-await": "error",

  "require-unicode-regexp": "error",

  "vars-on-top": "off",

  // Fixable
  "wrap-iife": ["error", "inside"],

  // Fixable
  yoda: ["error", "never"],
};

const strictMode = {
  // Fixable
  strict: ["error", "global"],
};

const variables = {
  "init-declarations": "off",

  // Recommended
  "no-delete-var": "error",

  "no-label-var": "error",

  "no-restricted-globals": "off",

  "no-shadow": [
    "error",
    {
      builtinGlobals: true,
      hoist: "all",
    },
  ],

  // Recommended
  "no-shadow-restricted-names": "error",

  // Recommended
  "no-undef": ["error", { typeof: true }],

  // Fixable
  "no-undef-init": "error",

  "no-undefined": "error",

  // Recommended
  "no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "all",
      ignoreRestSiblings: false,
      caughtErrors: "all",
    },
  ],

  "no-use-before-define": [
    "error",
    { functions: false, classes: true, variables: true },
  ],
};

const nodeAndCommonJS = {
  "callback-return": ["error", ["callback", "cb", "next"]],

  "global-require": "error",

  "handle-callback-err": ["error", "^(err|error|e)"],

  "no-buffer-constructor": "error",

  "no-mixed-requires": [
    "error",
    {
      grouping: true,
      allowCall: true,
    },
  ],

  "no-new-require": "error",

  "no-path-concat": "error",

  // If used, define in a single file and then access that file
  "no-process-env": "error",

  // Project dependent; but use as last resort
  "no-process-exit": "off",

  "no-restricted-modules": "off",

  "no-sync": ["error", { allowAtRootLevel: false }],
};

// Only includes rules that are not covered by Prettier
const stylisticIssues = {
  // Fixable
  "brace-style": ["error", "1tbs", { allowSingleLine: false }],

  camelcase: [
    "error",
    { properties: "always", ignoreDestructuring: false, allow: [] },
  ],

  // Fixable
  "capitalized-comments": [
    "error",
    "always",
    {
      // `ignorePattern` pulled from `nodejs/node/.eslintrc.js`
      // Ignore all lines that have less than 20 characters or that start with
      // something that looks like a variable name or code.
      ignorePattern:
        ".{0,20}$|[a-z]+ ?[0-9A-Z_.(/=:[#-]|std|http|ssh|ftp|(let|var|const) [a-z_A-Z0-9]+ =|[b-z] |[a-z]*[0-9].* ",
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
  ],

  // Fixable
  "multiline-comment-style": ["error", "separate-lines"],

  "no-array-constructor": "error",

  "no-bitwise": "off",

  "no-continue": "off",

  // Use them sparingly
  "no-inline-comments": "off",

  // Fixable
  "no-lonely-if": "error",

  "no-mixed-operators": "off",

  "no-negated-condition": "off",

  "no-nested-ternary": "error",

  "no-new-object": "error",

  "no-plusplus": "off",

  "no-ternary": "off",

  // Fixable
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],

  // Fixable
  "one-var": ["error", "never"],

  // Fixable
  "one-var-declaration-per-line": ["error", "always"],

  // Fixable
  "prefer-object-spread": "error",

  "sort-keys": [
    "error",
    "asc",
    { caseSensitive: true, minKeys: 2, natural: true },
  ],

  // Fixable
  "sort-vars": ["error", { ignoreCase: false }],

  // Fixable
  "spaced-comment": ["error", "always"],
};

const ecmaScript6 = {
  // Fixable
  // Note: Enforced by Prettier
  "arrow-body-style": "off",

  // Fixable
  // Note: Enforced by Prettier
  "arrow-parens": "off",

  // Fixable
  // Note: Enforced by Prettier
  "arrow-spacing": "off",

  // Recommended
  "constructor-super": "error",

  // Fixable
  "generator-star-spacing": ["error", "after"],

  // Recommended
  "no-class-assign": "error",

  // Fixable
  // Note: Only works with Prettier when `allowParens` is `false`
  "no-confusing-arrow": ["error", { allowParens: false }],

  // Recommended
  "no-const-assign": "error",

  // Recommended
  "no-dupe-class-members": "error",

  "no-duplicate-imports": ["error", { includeExports: true }],

  // Recommended
  "no-new-symbol": "error",

  "no-restricted-imports": "off",

  // Recommended
  "no-this-before-super": "error",

  // Fixable
  "no-useless-computed-key": "error",

  "no-useless-constructor": "error",

  // Fixable
  "no-useless-rename": [
    "error",
    { ignoreImport: false, ignoreExport: false, ignoreDestructuring: false },
  ],

  // Fixable
  "no-var": "error",

  // Fixable
  "object-shorthand": ["error", "always"],

  // Fixable
  "prefer-arrow-callback": [
    "error",
    { allowNamedFunctions: false, allowUnboundThis: false },
  ],

  // Fixable
  "prefer-const": [
    "error",
    { destructuring: "any", ignoreReadBeforeAssign: false },
  ],

  // Fixable
  "prefer-destructuring": "off",

  // Fixable
  "prefer-numeric-literals": "error",

  "prefer-rest-params": "error",

  "prefer-spread": "error",

  // Fixable
  "prefer-template": "error",

  // Recommended
  "require-yield": "error",

  // Fixable
  "rest-spread-spacing": ["error", "never"],

  //Fixable
  "sort-imports": [
    "error",
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    },
  ],

  "symbol-description": "error",

  // Fixable
  // Note: Enforced by Prettier
  "template-curly-spacing": "off",

  // Fixable
  "yield-star-spacing": ["error", "after"],
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    // ES11 === ES2020
    ecmaVersion: 11,
    ecmaFeatures: { impliedStrict: true },
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    ...possibleErrors,
    ...bestPractices,
    ...strictMode,
    ...variables,
    ...nodeAndCommonJS,
    ...stylisticIssues,
    ...ecmaScript6,
  },
};
