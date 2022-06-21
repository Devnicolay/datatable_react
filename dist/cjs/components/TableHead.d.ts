import React from "react";
interface TableHeadProps {
    columns: Array<{
        label: string;
        id: string;
        type: string;
    }>;
    order: any;
    setOrder: any;
}
declare const TableHead: React.FC<TableHeadProps>;
export default TableHead;
