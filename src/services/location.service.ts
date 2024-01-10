import LocationModel, {LocationDocument, LocationInput} from "../models/location.model";
import Location from "../models/location.model";

class LocationService {

    public async create(locationInput: LocationInput): Promise<LocationDocument> {
        try {
            return await LocationModel.create(locationInput)
        } catch (error) {
            throw error;
        }
    }

    public async findAll(): Promise<LocationDocument[]> {
        try{
            return await LocationModel.find()
        }catch (error){
            throw error;
        }
    }

    public async findById(id: string): Promise<LocationDocument | null> {
        try {
            return LocationModel.findById(id);
        } catch (error) {
            throw error
        }
    }

    public async findByLocation(lat: number, long: number): Promise<LocationDocument | null> {
        try {
            return LocationModel.findOne({lat, long})
        } catch (error) {
            throw error
        }
    }

    public async delete(id: string): Promise<boolean | null> {
        try{
            return LocationModel.deleteOne({_id:id}).then((res)=>{
                if(res.deletedCount===1){
                    return true
                }else{
                    return null
                }
            })
        }catch (error){
            throw error
        }
    }

    public async existingLocation(id:string): Promise<void> {
        //LocationModel.findById()
    }
}

export default new LocationService();