import React from "react";
interface TableBodyProps {
    columns: Array<{
        label: string;
        id: string;
    }>;
    data: Array<any>;
}
declare const TableBody: React.FC<TableBodyProps>;
export default TableBody;
