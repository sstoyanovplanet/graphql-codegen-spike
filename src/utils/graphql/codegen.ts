
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: import.meta.env.VITE_REACT_GRAPHQL_ENDPOINT,
  // THIS LINE SEARCHES FOR DOCUMENTS AND VALIDATES THEM AGAINST THE API
  // documents: "./src/hooks/api/**/*{.gql.ts,.graphql}",
  generates: {
    // THIS IS THE EXPORT FILE
    './src/graphql/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        scalars: {
          Int: {
            input: 'string | number',
            output: 'number'
          },
          Float: {
            input: 'string | number',
            output: 'number'
          },
          Decimal: {
            input: 'string | number',
            output: 'number'
          },
          DateTime: { input: 'string', output: 'string' }
        },
        skipTypename: true,
        useTypeImports: true,
        avoidOptionals: false,
        immutableTypes: true,
        // SET TO TRUE IF YOU WANT TO GENERATE USE_QUERY HOOKS
        withHooks: false
      }
    },
    // 'src/hooks/api': {
    //   preset: 'near-operation-file',
    //   presetConfig: {
    //     extension: '.ts',
    //     baseTypesPath: '../../graphql',
    //     fileName: 'index',
    //   },
    //   plugins: ['typescript-operations', 'typescript-react-apollo'],
    // },
  },
  hooks: {
    afterAllFileWrite: [
      'prettier --write "./src/graphql/**.**"',
      'eslint --fix "./src/graphql/**.**"',
    ]
  }
};

export default config;
