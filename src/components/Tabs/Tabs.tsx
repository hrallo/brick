import React, { FC, useEffect, useState } from 'react'
import styles from './Tabs.module.scss'
import '../../styles/paver.scss'
import { Panel, TabsProps } from './Tabs.types'
import Layout from '../Layout'
import { map } from 'ramda'
import FadeInOut from '../FadeInOut'
import { kebabCase } from '../../utils/helpers'

const TabButtons: FC<TabsProps> = ({
  activeTab,
  onSelectTab,
  panels,
  accessibleLabel,
}) => {
  const isActive = (tab: string) => activeTab === tab
  return (
    <Layout
      role='tablist'
      aria-labelledby={`tablist-${accessibleLabel}`}
      wrap='wrap'
      className={'margin-top-sm margin-bottom-lg'}
    >
      <div className={'border-navy-700 border-radius-sm'}>
        {map((panel: Panel) => {
          return (
            <button
              id={`tab-${panel.label}`}
              key={panel.label}
              className={[
                styles.button,
                'border-radius-sm',
                'caps-small',
                'text-transform-capitalize',
                'padding-left-lg',
                'padding-right-lg',
                'padding-top-md',
                'padding-bottom-md',
                activeTab === panel.label
                  ? 'background-color-navy-700 color-white'
                  : 'background-color-white color-navy-700',
              ].join(' ')}
              onClick={() => onSelectTab && onSelectTab(panel.label)}
              role='tab'
              aria-selected={isActive(panel.label)}
              aria-controls={`tabpanel-${accessibleLabel}`}
            >
              {panel.label}
            </button>
          )
        }, panels)}
      </div>
    </Layout>
  )
}

const TabPanels: FC<TabsProps> = ({ activeTab, panels, accessibleLabel }) => {
  const isActive = (tab: string) => activeTab === tab

  const zeroState = (zeroStateText: string | undefined) =>
    zeroStateText && (
      <Layout
        direction='column'
        align='center'
        justify='center'
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          minHeight: '200px',
        }}
      >
        <div className='caps margin-bottom-xxl color-monochrome-700'>
          {zeroStateText}
        </div>
      </Layout>
    )

  return (
    <div>
      {map(
        (panel: Panel) =>
          isActive(panel.label) && (
            <FadeInOut
              key={panel.label}
              visible
              id={`tabpanel-${panel.label}`}
              role='tabpanel'
              aria-labelledby={`tab-${panel.label}`}
            >
              <div
                className={panel?.className}
                style={{
                  position: 'relative',
                  ...panel?.style,
                }}
              >
                {panel?.children
                  ? panel?.children
                  : zeroState(panel?.zeroStateText)}
              </div>
            </FadeInOut>
          ),
        panels
      )}
    </div>
  )
}

export const Tabs: FC<TabsProps> = ({
  activeTab,
  onSelectTab,
  panels,
  className,
  style,
  accessibleLabel,
}) => {
  const [displayTab, setDisplayTab] = useState<string>(
    activeTab || panels[0].label
  )

  useEffect(() => {
    activeTab && setDisplayTab(activeTab)
  }, [activeTab])

  return (
    <div
      className={[styles.Tabs, className].join(' ')}
      style={style}
      data-testid='Tabs'
    >
      <TabButtons
        accessibleLabel={kebabCase(accessibleLabel)}
        activeTab={displayTab}
        onSelectTab={(tab: string) => {
          setDisplayTab(tab)
          onSelectTab && onSelectTab(tab)
        }}
        panels={panels}
      />
      <TabPanels
        accessibleLabel={kebabCase(accessibleLabel)}
        activeTab={displayTab}
        panels={panels}
      />
    </div>
  )
}

export default Tabs
