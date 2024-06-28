export const API_KEY='AIzaSyCORQ7L31djj8Un3MUAML3LbDZu0dSqa2o';

export const value_converter=(value)=>{
    if(value>=1000000)
        {return Math.floor(value/1000000)+"M";
        }
        else if(value>=1000){
            return Math.floor(value/1000)+"K";
        }
        else{
            return value;
        }
}