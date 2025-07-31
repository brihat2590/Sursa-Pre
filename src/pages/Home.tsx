
import FeaturesSectionDemo from "@/components/Features";
import { HeroParallaxDemo } from "@/components/HerSection";
import Partnership from "@/components/StrategicPartnership";
import  Wishlist  from "@/components/Wishlist";

export default function Home(){
    return(
        <div className="bg-gray-900">
            
            
        
            <HeroParallaxDemo />
            <FeaturesSectionDemo/>
            
            <Partnership/>
            <Wishlist/>

        </div>
    )
}