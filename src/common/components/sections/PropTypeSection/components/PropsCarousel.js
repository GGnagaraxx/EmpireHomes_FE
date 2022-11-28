import React, { useEffect, useState } from "react";
// import { propertyData } from "../../../../../utils/sampleData";
import { getTopList } from "../../../../../common/functions/listFunctions";
import CardCarousel from "../../../../../common/components/CardCarousel";
import PropertyCard from "../../../../../common/components/cards/PropertyCard";
import { useGetPropertyListQuery } from "../../../../redux/apiSlices/propertyApiSlice";


function PropsCarousel(props) {

    const {status, data} = useGetPropertyListQuery();
    const { selectedCategory } = props;
    const [propsMap, setPropsMap] = useState();

    useEffect(() => {
        if(status == "fulfilled"){
            const initList = getTopList(data, 10, { demand: 'desc' });
            setPropsMap(updatePropsMap(initList));
        }
    }, [data]);

    useEffect(() => {
        if(status == "fulfilled"){
            let newDispProps = data;
            if (selectedCategory != '') {
                newDispProps = getTopList(newDispProps, 10, { demand: 'desc', name: 'asc' }, { type: selectedCategory });
            } else {
                newDispProps = getTopList(newDispProps, 10, { demand: 'desc' });
            }
    
            setPropsMap(updatePropsMap(newDispProps));
        }


    }, [selectedCategory]);


    function updatePropsMap(propsList) {
        return propsList.map((property) => {
            return (
                <div className="carousel-item" key={property.id}>
                    <PropertyCard propData={property} showProgress />
                </div>
            )
        })
    }

    return (
        <CardCarousel
            slidesToShow={{
                md: 2,
                lg: 3,
                xl: 4
            }}
            slidesToScroll={{
                md: 2,
                lg: 3,
                xl: 4
            }}
        >
            {propsMap}
        </CardCarousel>
    )
}


export default PropsCarousel;