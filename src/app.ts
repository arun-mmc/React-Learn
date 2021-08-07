import {Express, Request, Response} from "express";

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

    // this.app.use(express.static(path.resolve("./") + "/build/first-react-app"));
        
    this.app.get("/api", (req: Request, res: Response): void => {
        res.send("You have reached the API!");
    });

    // this.app.get("*", (req: Request, res: Response): void => {
    //     res.sendFile(path.resolve("./") + "/build/first-react-app/index.html");
    // });
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}
//  export  Server;