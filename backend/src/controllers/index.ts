class IndexController {
    private articles: Array<{ id: number; title: string; content: string; author: string }> = [];

    constructor() {
        // Sample data
        this.articles = [
            { id: 1, title: "First Article", content: "Content of the first article", author: "Author 1" },
            { id: 2, title: "Second Article", content: "Content of the second article", author: "Author 2" },
        ];
    }

    public getArticles(req: any, res: any) {
        res.json(this.articles);
    }

    public getArticleById(req: any, res: any) {
        const id = parseInt(req.params.id);
        const article = this.articles.find(a => a.id === id);
        if (article) {
            res.json(article);
        } else {
            res.status(404).send("Article not found");
        }
    }
}

export default IndexController;