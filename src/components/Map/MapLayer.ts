import { CompositeLayer, CompositeLayerProps, Layer, LayerProps } from '@deck.gl/core/typed'
import { ScatterplotLayer } from '@deck.gl/layers/typed'
import { MapMarker } from './Map.types'

export type { ScatterplotLayerProps } from '@deck.gl/layers/typed'
export { ScatterplotLayer } from '@deck.gl/layers/typed'

export class MapLayer<
    DataType extends MapMarker = MapMarker<any>, 
    ChildLayerType extends Layer = ScatterplotLayer<DataType>, 
    ChildProps extends LayerProps<DataType> = LayerProps<any>
> extends CompositeLayer {
    childProps: ChildProps
    priority: number = 0
    dataChunks: DataType[][] = []
    markers: Record<string, DataType> = {}
    
    constructor(
        private childType: new (props: ChildProps) => ChildLayerType,
        props: CompositeLayerProps<DataType>, 
        childProps: ChildProps, 
        priority = 0, 
    ) {
        super(props)
        this.priority = priority
        this.childProps = childProps
    }

    protected getSubLayerProps(sublayerProps?: { [propName: string]: any; id?: string | undefined; updateTriggers?: Record<string, any> | undefined } | undefined) {
        const output = super.getSubLayerProps(sublayerProps)
        return output
    }

    spawnNewChildLayer(props: ChildProps) {
        return new this.childType(this.getSubLayerProps(props))
    }

    renderLayers() {
        return this.dataChunks.map((data, index) => this.spawnNewChildLayer({
            ...this.childProps,
            id: `sublayer-${index}`,
            data,
        }))
    }

    addMarkers(markers: DataType[]) {
        for (const marker of markers) {
            this.markers[marker.id] = marker
        }
        this.dataChunks.push(markers)
        this.setNeedsUpdate()
    }
}
