import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        'https://gateway.thegraph.com/api/9eb709a02809e8a79e1d5a49eca43da1/subgraphs/id/AjxyFsoqQasd54hz7groCv5PCzjYifwV7oUcK5CCHk8t',
        'https://gateway.thegraph.com/api/9eb709a02809e8a79e1d5a49eca43da1/subgraphs/id/75iGcPhADaVXLzkfmSnd55QdhLbSmgtwxNZBb5Ko13MV',
        'https://gateway.thegraph.com/api/9eb709a02809e8a79e1d5a49eca43da1/subgraphs/id/CpHNhKtEugksaNtzeww8Fik4axocMD3CqRkde76Ueiru',
    ],
    documents: 'src/graphql/queries/!(*.d).{ts,tsx}',
    generates: {
        'src/graphql/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                withHooks: true,
                withResultType: true,
            },
        },
    },
};

export default config;
