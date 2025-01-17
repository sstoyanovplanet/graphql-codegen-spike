
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: import.meta.env.VITE_REACT_GRAPHQL_ENDPOINT,
  // THIS LINE SEARCHES FOR DOCUMENTS AND VALIDATES THEM AGAINST THE API
  documents: "./src/hooks/api/**/*{.gql.ts,.graphql}",
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
    }
  },
  hooks: {
    afterAllFileWrite: [
      'prettier --write "./src/graphql/**.**"',
      'eslint --fix "./src/graphql/**.**"',
      // HERE WE CAN CALL THE NODE SCRIPT FOR WRITING FILES WITH HOOKS IN A DIFFERENT DIRECTORY
    ]
  }
};

export default config;
