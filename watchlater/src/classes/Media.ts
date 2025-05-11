export class Media {

    title: string = "";

    tags: Array<string> = [];

    constructor(title: string = "", tags: Array<string> = []) {

        this.title = title;

        this.tags = tags;
        
    }

}