import React, { FC, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import * as d3 from 'd3'
import '../../styles/paver.scss'

import ToolTip from '../Tooltip'
import { TooltipProps } from '../Tooltip/Tooltip.types'
import styles from './DonutChart.module.scss'
import { DonutChartProps } from './DonutChart.types'

const DonutChart: FC<DonutChartProps> = ({
  data,
  centerLabel,
  centerLabelColor,
  size = 'small',
  dataType = 'multi',
  showPercentage,
}) => {
  const ref = useRef(null)
  const [tooltipActive, setTooltipActive] = useState(false)
  const [tooltipData, setTooltipData] = useState<TooltipProps>()

  const getChartColors = () => {
    const colorDefaults = [
      'fill-yellow-900',
      'fill-navy-700',
      'fill-red-700',
      'fill-green-500',
      'fill-blue-400',
      'fill-pink-400',
      'fill-monochrome-800',
    ]

    const singleColor = [
      data[0]?.color
        ? `fill-${data[0].color}`
        : colorDefaults[Math.floor(Math.random() * colorDefaults.length)],
      'fill-monochrome-500',
    ]

    const multiColor = data?.map((arc, i) =>
      arc.color ? `fill-${arc.color}` : colorDefaults[i % colorDefaults.length]
    )

    return dataType === 'single' ? singleColor : multiColor
  }

  const handleMouseOut = () => setTooltipActive(false)

  const handleMouseOver = (d: any, i: any) => {
    const top = d.pageY
    const left = d.pageX

    setTooltipActive(true)
    setTooltipData({
      data: {
        title: i.data?.name,
        content: i.data?.value,
      },
      coordinates: { top, left },
      titleColor: i.data?.color,
    })
  }

  const getSvg = (element: HTMLElement) => d3.select(element).select('svg')

  const getSize = (size: string): number => {
    const sizes: { [key: string]: number } = {
      xsmall: 100,
      small: 125,
      large: 135,
    }
    return sizes[size]
  }

  const strokeWidth = 6
  const radius = getSize(size) / 2
  const centerLabelHeight = centerLabel ? 17 : 12
  const centerLabelClass = [
    'caps-small',
    centerLabelColor ? `fill-${centerLabelColor}` : 'fill-monochrome-800',
  ].join(' ')
  const percentageWidth = showPercentage ? 12 : 0
  const pieGenerator = d3.pie().value((d: any) => d?.value)
  const arcs = (svg: any, data: any) =>
    svg.selectAll().data(pieGenerator(data)).enter()
  const arcGenerator: any = d3
    .arc()
    .innerRadius(radius - strokeWidth) // This is the size of the donut hole
    .outerRadius(radius)

  const singleChartLabel = (svg: any) => {
    const textGroup = svg
      .append('g')
      .attr('dominant-baseline', 'baseline')
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(0,${centerLabelHeight})`)

    centerLabel &&
      textGroup
        .append('text')
        .attr('class', centerLabelClass)
        .text(`${centerLabel}`)
        .attr('y', `-${centerLabelHeight + 15}px`)

    const valueLabel = textGroup
      .append('g')
      .append('text')
      .text(`${data[0].value}`)
      .attr('class', ['heading2', styles.chartLabel].join(' '))
      .attr('x', `${percentageWidth / 3}px`)

    showPercentage &&
      valueLabel
        .append('tspan')
        .text('%')
        .attr('class', 'subheading3')
        .attr('alignment-baseline', 'baseline')
  }

  const multiChartLabel = (svg: any) => {
    const textGroup = svg
      .append('g')
      .attr('dominant-baseline', 'baseline')
      .attr('text-anchor', 'middle')

    centerLabel &&
      textGroup
        .append('text')
        .attr('class', centerLabelClass)
        .text(`${centerLabel}`)
  }

  const singleChartArcs = (svg: any, data: any) => {
    data.push({ value: 100 - data[0].value })
    arcs(svg, data)
      .append('path')
      .attr('d', arcGenerator)
      .attr('class', (d: any, i: number) => getChartColors()[i % data.length])
    data.pop()
  }

  const multiChartArcs = (svg: any, data: any) => {
    arcs(svg, data)
      .append('path')
      .attr('d', arcGenerator)
      .attr('class', (d: any, i: number) => getChartColors()[i % data.length])
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut)
  }

  const drawChart = (element: HTMLElement, data: any) => {
    // Remove the old svg
    getSvg(element).remove()

    // Create new svg
    const svg = d3
      .select(element)
      .append('svg')
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('height', '100%')
      .attr('width', '100%')
      .append('g')
      .attr(
        'transform',
        `translate(${getSize(size) / 2}, ${getSize(size) / 2})`
      )

    dataType === 'single' ? singleChartLabel(svg) : multiChartLabel(svg)
    return dataType === 'single'
      ? singleChartArcs(svg, data)
      : multiChartArcs(svg, data)
  }

  useEffect(() => {
    ref?.current && drawChart(ref.current, data)
  }, [data])

  return (
    <>
      <div
        className={[styles.DonutChart, styles[size]].join(' ')}
        data-testid='DonutChart'
        ref={ref}
      />
      {tooltipActive &&
        createPortal(
          <ToolTip
            data-test-id='tooltip'
            coordinates={{
              top: tooltipData?.coordinates?.top ?? 0,
              left: tooltipData?.coordinates?.left ?? 0,
            }}
            data={{
              title: tooltipData?.data?.title,
              content: tooltipData?.data?.content,
            }}
            titleColor={tooltipData?.titleColor}
          />,
          document.body
        )}
    </>
  )
}

export default DonutChart
