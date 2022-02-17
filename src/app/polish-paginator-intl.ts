import { MatPaginatorIntl } from "@angular/material/paginator";

export function getPolishPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();
    
    paginatorIntl.itemsPerPageLabel = 'Rekordów na stronę';
    paginatorIntl.nextPageLabel = 'Następna strona';
    paginatorIntl.previousPageLabel = 'Poprzednia strona';
    //paginatorIntl.getRangeLabel = dutchRangeLabel;
    
    return paginatorIntl;
}
