import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import SearchBar from '@theme-original/SearchBar';
import type SearchBarType from '@theme/SearchBar';
import type { WrapperProps } from '@docusaurus/types';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/lib/client/index.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ThemeConfig } from 'docusaurus-theme-search-typesense';

type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): ReactNode {
  const currentPlugin = useActivePlugin();
  const themeConfig = useDocusaurusContext().siteConfig.themeConfig as ThemeConfig;

  // Plugin does not allow direct modification so we do it the roundabout way
  const oldFilter = useRef<string>();
  const stored = useRef(false);
  useEffect(() => {
    const searchParams = themeConfig.typesense.typesenseSearchParameters
    if (!stored.current) {
      oldFilter.current = searchParams.filter_by;
      stored.current = true;
    }
    if (currentPlugin?.pluginId) {
      const paramsFilter = [oldFilter.current, `project:=${currentPlugin.pluginId}`]
        .filter((e) => e)
        .join(' && ');
      searchParams.filter_by = paramsFilter
    }
    return () => {
      searchParams.filter_by = oldFilter.current
    };
  }, [currentPlugin?.pluginId]);
  return (
    <>
      <SearchBar {...props} />
    </>
  );
}
