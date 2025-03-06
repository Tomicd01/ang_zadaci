export class Transaction{
    id : number;
    date: string;
    amount: number;
    type: string;
    card: string;
    title: string;
    constructor(id : number, date : string, amount : number, type : string, card : string, title: string,){
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.type = type;
        this.card = card;
        this.title = title;
    }
}