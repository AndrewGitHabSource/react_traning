import React from "react";
import moment from "moment";

const filter = (filter, data) =>  {
    return data.map((element) => {
        if (moment(filter).isSame(moment(moment(element.date, 'DD.MM.YYYY').toDate()), 'day')) {
            return {...element, "show": true};
        } else {
            return {...element, "show": false};
        }
    });
}

export default filter;