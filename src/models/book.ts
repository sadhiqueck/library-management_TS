export abstract class Book {
  protected id: string;
  protected title: string;
  protected author: string;
  protected isAvailable: boolean;

  constructor(id: string, title:string, author:string){
    this.id=id;
    this.title=title;
    this.author=author;
    this.isAvailable=true;
  }

  borrow():void{
    if(!this.isAvailable){
        console.log(`Book ${this.title} is not available now.`);
        return
    }
    this.isAvailable=false;
    console.log(`Book "${this.title}" has been borrowed.`);
    
  }

  returnBook():void{
    this.isAvailable=true;
     console.log(`Book "${this.title}" has been returned.`);
  }

  getAvailability():boolean{
    return this.isAvailable
  }

  abstract getInfo(): string;

  getId(): string {
    return this.id;
  }
}
