export class Quote {

  showQuote: boolean;

    constructor(
      public id: number,
      public author: string,
      public message: string,


       public date: Date


    ) {
      this.showQuote = false;
    }
}
