import React from 'react';
import { Chrono } from "react-chrono";

const TemplateEntry = {
    cardTitle: "Food Log",
    cardSubtitle: "History",
    cardDetailedText: "Details...",
};

const GenerateEntry = (startDate, endDate) => {
    {/* generates an array of dates between the start and end date */}
    const dateArray = [];
    let currentDate = new(startDate);
    while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    {/* generates an item with the necessary data (in the template) for each date */}
    const items = dateArray.map(date => ({
        date,
        ...TemplateEntry,
    }));

    return items;
};

const titleDateFormat = "MM-DD-YYYY";

const HorizontalTimeline = () => {
    const startDate = new Date("2024-01-05");
    const endDate = new Date("2024-01-15");
    const items = GenerateEntry(startDate, endDate);

    return(
        <div style={{width: "500px", height: "400px"}}>
            <Chrono
                items={items}
                mode="HORIZONTAL"
                itemWidth={150}
                showSingle
                timelinePointShape="diamond"
                timelinePointDimension={30}
                titleDateFormat={titleDateFormat}

                theme={{
                    titleColor: "#808080",
                    cardBgColor: "white",
                }}

                cardHeight={150} 
                contentDetailsHeight={80} 
            />
        </div>
        
    );
};

export default HorizontalTimeline;
