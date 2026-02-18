import React, {type ReactNode} from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import Head from '@docusaurus/Head';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/lib/client/index.js';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const currentPlugin = useActivePlugin();
  if (!currentPlugin || !currentPlugin.pluginId) {
    return <Layout {...props} />;
  }
  return (
    <>
      <Head>
        <meta
          name="docsearch:project"
          content={currentPlugin.pluginId}
        />
      </Head>
      <Layout {...props} />
    </>
  );
}
