import React, { type ReactNode } from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import type DocsVersionDropdownNavbarItemType from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import type { WrapperProps } from '@docusaurus/types';
import { useActiveDocContext, useVersions } from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof DocsVersionDropdownNavbarItemType>;

export default function DocsVersionDropdownNavbarItemWrapper(props: Props): ReactNode {
  const activeDocContext = useActiveDocContext(props.docsPluginId);
  if (!activeDocContext.activeDoc) {
    return null;
  }
  const versions = useVersions(props.docsPluginId)
  // Current is always present and there is no point in showing it if only one version is present
  if (versions.length <= 1) {
    return null;
  }
  return (
    <>
      <DocsVersionDropdownNavbarItem {...props} />
    </>
  );
}
