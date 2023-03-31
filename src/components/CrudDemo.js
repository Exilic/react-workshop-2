import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Table from "./Table";

const CrudDemo = () => {

    const [persons, setPersons] = useState([]);
    const calledOnce = useRef(false);

    useEffect(() => {
        if(calledOnce.current) {
            return;
        }
        const url = '/api/v1/libraryUser/';
        axios.get(url)
            .then(response => {
                if(response.status === 200) {
                    setPersons(response.data)
                }
            })
    }, []);


    return (
        <div>
            {persons.length !== 0 && <Table data={persons} />
        }

        </div>
    );
};

export default CrudDemo;