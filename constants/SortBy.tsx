import { ISort } from "../typing.d.ts";



export const SortBy:ISort[] = [
    {value:'popularity.asc', label:'Relevancia ASC'},
    {value:'popularity.desc', label:'Relevancia DESC'},
    {value:'primary_release_date.asc', label:'Lançamento ASC'},
    {value:'primary_release_date.desc', label:'Lançamento DESC'},
    {value:'vote_average.asc', label:'Nota ASC'},
    {value:'vote_average.desc', label:'Nota DESC'},
]