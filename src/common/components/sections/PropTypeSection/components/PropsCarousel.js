import React, { useEffect, useState } from "react";
import { propertyData } from "../../../../../utils/sampleData";
import { getTopList } from "../../../../../common/functions/listFunctions";
import CardCarousel from "../../../../../common/components/CardCarousel";
import PropertyCard from "../../../../../common/components/cards/PropertyCard";


function PropsCarousel(props) {

    const { selectedCategory } = props;
    const [propsMap, setPropsMap] = useState([]);

    useEffect(() => {
        const initList = getTopList(propertyData, 10, { demands: 'desc' })
        setPropsMap(updatePropsMap(initList))

    }, [])

    useEffect(() => {
        let newDispProps = propertyData;
        if (selectedCategory != '') {
            newDispProps = getTopList(newDispProps, 10, { demands: 'desc', name: 'asc' }, { type: selectedCategory });
        } else {
            newDispProps = getTopList(newDispProps, 10, { demands: 'desc' });
        }

        setPropsMap(updatePropsMap(newDispProps));


    }, [selectedCategory])


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