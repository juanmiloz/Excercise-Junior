import {Express} from "express";
import locationController from "../controllers/location.controller";
import validateSchema from "../middleware/validateSchema";
import {locationSchema} from "../schema/location.schema";


const routes = (app:Express)=>{

    app.post('/location', validateSchema(locationSchema),locationController.create);
    app.delete('/location/:id', locationController.delete);
    app.get('/location', locationController.findLocations);
    app.get('/location/:id', locationController.findLocation);

}

export default routes;