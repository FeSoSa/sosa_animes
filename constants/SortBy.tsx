import { ISort } from "../typing.d.ts";

export const SortByBR:ISort[] = [
    {value:'popularity.asc', label:'Relevancia ASC'},
    {value:'popularity.desc', label:'Relevancia DESC'},
    {value:'primary_release_date.asc', label:'Lançamento ASC'},
    {value:'primary_release_date.desc', label:'Lançamento DESC'},
    {value:'vote_average.asc', label:'Nota ASC'},
    {value:'vote_average.desc', label:'Nota DESC'},
]

export const SortByEN:ISort[] = [
    {value:'popularity.asc', label:'Popularity ASC'},
    {value:'popularity.desc', label:'Popularity DESC'},
    {value:'primary_release_date.asc', label:'Release ASC'},
    {value:'primary_release_date.desc', label:'Release DESC'},
    {value:'vote_average.asc', label:'Stars ASC'},
    {value:'vote_average.desc', label:'Stars DESC'},
]