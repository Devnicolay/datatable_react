import React from "react";
interface PaginationProps {
    data: Array<any>;
    dataLimit: number;
    setCurrentPage: any;
    currentPage: any;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
