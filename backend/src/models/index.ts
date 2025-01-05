class Article {
    constructor(
        public title: string,
        public content: string,
        public author: string,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ) {}
}

export default Article;