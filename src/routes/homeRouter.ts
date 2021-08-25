import { Request, Response, Router } from "express";

export class HomeRouter{

    public get(req: Request, res: Response){
        res.render('index');
    }

}

export function homeRoute(): Router{
    const router : Router = Router();
    const homeRouter = new HomeRouter();
    router.route("/").get(homeRouter.get);
    return router;
}