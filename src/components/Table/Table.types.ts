import { Column } from 'react-table'

export interface TableProps {
    columns: Column<any>[]
    data: any[]
}
