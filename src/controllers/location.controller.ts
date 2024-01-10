import {Response, Request} from "express";
import {LocationDocument, LocationInput} from "../models/location.model";
import locationService from "../services/location.service";

class LocationController {

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const locationExist: LocationDocument | null = await locationService.findByLocation(req.body.lat, req.body.long);
            if (locationExist) {
                return res.status(400).json({message: /*TODO remplazar el mensaje temporal*/ "location already exist"})
            }

            const location: LocationDocument = await locationService.create(req.body as LocationInput);

            return res.status(201).json(location);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async findLocations(req:Request, res:Response): Promise<Response> {
        try{
            const locations = await locationService.findAll()

            return res.status(200).json(locations)
        }catch (error) {
            return res.status(500).json(error)
        }
    }

    public async findLocation(req: Request, res: Response): Promise<Response> {
        try {
            const location: LocationDocument | null = await locationService.findById(req.params.id)

            return res.status(200).json(location)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try{
            const location:LocationDocument | null = await locationService.findById(req.params.id)
            if (location === null){
                return res.status(400).json({message: 'location not found'})
            }

            const isDeleted: boolean | null = await locationService.delete(req.params.id)
            if(isDeleted){
                return res.status(200).json({message: 'Location deleted succesfully'})
            }else{
                return res.status(400).json({message: 'The location could not be eliminated'})
            }
        }catch (error){
            return res.status(500).json(error)
        }
    }

}

export default new LocationController();