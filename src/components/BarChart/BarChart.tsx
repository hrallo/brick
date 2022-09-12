import React, { FC, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { map as _map } from 'ramda'
import * as d3 from 'd3'

import '../../styles/paver.scss'
import ToolTip from '../Tooltip'
import { TooltipProps } from '../Tooltip/Tooltip.types'
import styles from './BarChart.module.scss'
import { BarChartProps } from './BarChart.types'

export const BarChart: FC<BarChartProps> = ({
  barData,
  height = 165,
  width = 200,
}) => {
  const ref = useRef(null)

  const [tooltipActive, setTooltipActive] = useState(false)
  const [tooltipData, setTooltipData] = useState<Partial<TooltipProps>>()

  const margin = { left: 30, right: 30, top: 30, bottom: 30 }

  const getChartColors = () => {
    const colorDefaults = [
      'fill-yellow-900',
      'fill-navy-700',
      'fill-red-700',
      'fill-green-500',
      'fill-blue-400',
      'fill-pink-400',
      'fill-monochrome-700',
    ]
    return barData.data?.map((bar, i) =>
      bar.color ? `fill-${bar.color}` : colorDefaults[i % colorDefaults.length]
    )
  }

  const getMax = (data: any) => {
    let max = 0
    data.forEach((element: any) =>
      element.value > max ? (max = element.value) : max
    )
    return max
  }

  const handleMouseOut = () => setTooltipActive(false)

  const handleMouseOver = (d: any, i: any) => {
    const top = d.pageY
    const left = d.pageX

    setTooltipActive(true)
    setTooltipData({
      data: {
        title: i?.category,
        content: i?.value,
      },
      coordinates: { top, left },
      titleColor: i?.color,
    })
  }

  const drawChart = (element: any, barData: any) => {
    const colors = getChartColors()

    // Remove the old svg
    d3.select(element).select('svg').remove()

    // Create new svg
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const xScale = d3
      .scaleBand()
      .domain(barData.data.map((d: any) => d.category))
      .range([0, width - margin.right - margin.left])
      .padding(0.1)

    const yScale = d3
      .scaleLinear()
      .domain([0, getMax(barData.data)])
      .range([0, height - margin.bottom - margin.top])

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left},-${margin.bottom})`)
      .attr('width', width - margin.left - margin.right)
      .attr('height', height - margin.top - margin.bottom)

    // Add X axis and label
    const xAxis = (g: any) =>
      g
        .attr('transform', `translate(-1,${height + 1})`)
        .attr('class', 'color-monochrome-500')
        .call(
          d3
            .axisBottom(xScale)
            .tickFormat((i: any) => '')
            .tickSizeInner(0)
            .tickSizeOuter(0)
        )

    chart.append('g').call(xAxis)

    svg
      .append('text')
      .attr('x', (width - margin.left - margin.right) / 2)
      .attr('y', height - margin.bottom / 3)
      .attr('class', 'body2 fill-monochrome-600')
      .text(`${barData.categoryTitle}`)

    // Add Y axis and label
    const yAxis = (g: any) =>
      g
        .attr('transform', `translate(-1,${margin.bottom + margin.top + 1})`)
        .attr('class', 'color-monochrome-500')
        .call(
          d3
            .axisLeft(yScale)
            .tickFormat((i: any) => '')
            .tickSizeOuter(0)
            .tickSizeInner(0)
        )

    chart.append('g').call(yAxis)

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', (-height - margin.top - margin.bottom) / 2)
      .attr('y', (margin.left + margin.right) / 3)
      .attr('class', 'body2 fill-monochrome-600')
      .text(`${barData.valueTitle}`)

    // add bars
    chart
      .selectAll('rect')
      .data(barData.data)
      .enter()
      .append('rect')
      .attr('x', (d: any, i: number) => i * (xScale.bandwidth() + 2))
      .attr('y', (d: any) => height - yScale(d.value))
      .attr('height', (d: any) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr(
        'class',
        (d: any, i: number) =>
          colors[i % barData.data.length] + ` ${d.category}`
      )
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut)
  }

  useEffect(() => {
    ref?.current && drawChart(ref.current, barData)
  }, [barData])

  return (
    <>
      <div className={styles.BarChart} data-testid='BarChart' ref={ref}></div>
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
export default BarChart
