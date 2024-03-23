
import './TableResultsMeasurements.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsMeasurements(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'table-header' },
        { field: 'person_id', headerName: 'person_id', flex: 1, headerClassName: 'table-header' },
        { field: 'measurement_id', headerName: 'measurement_id', flex: 1, headerClassName: 'table-header' },
        { field: 'concept_id', headerName: 'concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'concept_name', headerName: 'concept_name', flex: 1, headerClassName: 'table-header' },
        { field: 'measurement_date', headerName: 'measurement_date', flex: 1, headerClassName: 'table-header' },
        { field: 'measurement_datetime', headerName: 'measurement_datetime', flex: 1, headerClassName: 'table-header' },
        { field: 'measurement_time', headerName: 'measurement_time', flex: 1, headerClassName: 'table-header' },
        { field: 'measurement_type_concept_id', headerName: 'measurement_type_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'measurement_type_concept_name', headerName: 'measurement_type_concept_name', flex: 1, headerClassName: 'table-header' },
        { field: 'operator_concept_id', headerName: 'operator_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'operator_concept_name', headerName: 'operator_concept_name', flex: 1, headerClassName: 'table-header' },
        { field: 'value_as_number', headerName: 'value_as_number', flex: 1, headerClassName: 'table-header' },
        { field: 'measurement_source_value', headerName: 'measurement_source_value', flex: 1, headerClassName: 'table-header' }
    ]

    console.log(props.results)
    const rows = []
    const ids = []
    props.results.forEach((element, index) => {
        console.log(element[0])
            
        if (element[1] !== undefined) {
            console.log(element[0])

            let measurement_id = ''
            let stringmeasurement_id = ''

            if (element[1].measurement_id!== '' && element[1].measurement_id !== undefined) {
                if (element[1].measurement_id !== undefined) {
                    measurement_id = element[1].measurement_id
                }
                stringmeasurement_id= `${measurement_id}`
            } else {
                stringmeasurement_id = ''
            }

            let person_id = ''
            let stringperson_id = ''

            if (element[1].person_id!== '' && element[1].person_id !== undefined) {
                if (element[1].person_id !== undefined) {
                    person_id = element[1].person_id
                }
                stringperson_id= `${person_id}`
            } else {
                stringperson_id = ''
            }

            let operator_concept_name = ''
            let stringoperator_concept_name = ''

            if (element[1].operator_concept_name !== '' && element[1].operator_concept_name !== undefined) {
                if (element[1].operator_concept_name !== undefined) {
                    operator_concept_name = element[1].operator_concept_name
                }

                stringoperator_concept_name = `${operator_concept_name}`
            } else {
                stringoperator_concept_name = ''
            }

            let measurement_type_concept_id = ''
            let stringmeasurement_type_concept_id = ''

            if (element[1].measurement_type_concept_id !== '' && element[1].measurement_type_concept_id !== undefined) {
                if (element[1].measurement_type_concept_id !== undefined) {
                    measurement_type_concept_id = element[1].measurement_type_concept_id
                }

                stringmeasurement_type_concept_id = `${measurement_type_concept_id}`
            } else {
                stringmeasurement_type_concept_id = ''
            }

            let measurement_type_concept_name = ''
            let stringmeasurement_type_concept_name = ''

            if (element[1].measurement_type_concept_name !== '' && element[1].measurement_type_concept_name !== undefined) {
                if (element[1].measurement_type_concept_name !== undefined) {
                    measurement_type_concept_name= element[1].measurement_type_concept_name
                }

                stringmeasurement_type_concept_name = `${measurement_type_concept_name}`
            } else {
                stringmeasurement_type_concept_name = ''
            }

            let operator_concept_id = ''
            let stringoperator_concept_id = ''

            if (element[1].operator_concept_id !== '' && element[1].operator_concept_id !== undefined) {
                if (element[1].operator_concept_id !== undefined) {
                    operator_concept_id= element[1].operator_concept_id
                }

                stringoperator_concept_id = `${operator_concept_id}`
            } else {
                stringoperator_concept_id = ''
            }

            let measurement_datetime = ''
            let stringmeasurement_datetime = ''

            if (element[1].measurement_datetime !== '' && element[1].measurement_datetime !== undefined) {
                if (element[1].measurement_datetime !== undefined) {
                    measurement_datetime= element[1].measurement_datetime
                }

                stringmeasurement_datetime = `${measurement_datetime}`
            } else {
                stringmeasurement_datetime = ''
            }

            let measurement_time = ''
            let stringmeasurement_time = ''

            if (element[1].measurement_time !== '' && element[1].measurement_time !== undefined) {
                if (element[1].measurement_time !== undefined) {
                    measurement_time= element[1].measurement_time
                }

                stringmeasurement_time = `${measurement_time}`
            } else {
                stringmeasurement_time = ''
            }

            let value_as_number = ''
            let stringvalue_as_number = ''

            if (element[1].value_as_number!== '' && element[1].value_as_number !== undefined) {
                if (element[1].value_as_number !== undefined) {
                    value_as_number = element[1].value_as_number
                }
                stringvalue_as_number= `${value_as_number}`
            } else {
                stringvalue_as_number = ''
            }

            let concept_id = ''
            let stringconcept_id= ''

            if (element[1].concept_id!== '' && element[1].concept_id !== undefined) {
                if (element[1].concept_id !== undefined) {
                    concept_id = element[1].concept_id
                }
                stringconcept_id= `${concept_id}`
            } else {
                stringconcept_id = ''
            }

            let measurement_date = ''
            let stringmeasurement_date= ''

            if (element[1].measurement_date!== '' && element[1].measurement_date !== undefined) {
                if (element[1].measurement_date !== undefined) {
                    measurement_date = element[1].measurement_date
                }
                stringmeasurement_date= `${measurement_date}`
            } else {
                stringmeasurement_date = ''
            }

            let concept_name = ''
            let stringconcept_name= ''

            if (element[1].concept_name!== '' && element[1].concept_name !== undefined) {
                if (element[1].concept_name !== undefined) {
                    concept_name = element[1].concept_name
                }
                stringconcept_name= `${concept_name}`
            } else {
                stringconcept_name = ''
            }

            let measurement_source_value = ''
            let stringmodality= ''

            if (element[1].measurement_source_value!== '' && element[1].measurement_source_value !== undefined) {
                if (element[1].measurement_source_value !== undefined) {
                    measurement_source_value = element[1].measurement_source_value
                }
                stringmodality= `${measurement_source_value}`
            } else {
                stringmodality = ''
            }

            rows.push({ id: index, 
                Beacon: element[0], 
                person_id: stringperson_id,
                measurement_id: stringmeasurement_id,
                concept_id: stringconcept_id,
                concept_name: stringconcept_name,
                measurement_date: stringmeasurement_date,
                measurement_datetime: stringmeasurement_datetime,
                measurement_time: stringmeasurement_time,
                measurement_type_concept_id: stringmeasurement_type_concept_id,
                measurement_type_concept_name: stringmeasurement_type_concept_name,
                operator_concept_id: stringoperator_concept_id,
                operator_concept_name: stringoperator_concept_name,
                value_as_number: stringvalue_as_number,
                measurement_source_value: stringmodality })

        }

    })



    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                person_id: true,
                measurement_id: false,
                concept_id: false,
                concept_name: false,
                measurement_date: false,
                measurement_datetime: false,
                measurement_time: false,
                operator_concept_id: false,
                operator_concept_name: false,
                measurement_type_concept_id: false,
                measurement_type_concept_name: false,
                value_as_number: true,
                measurement_source_value: true


                
              },
            },
          }}
        getRowHeight={() => 'auto'}


            columns={columns}
            rows={rows}
            

        />
    )

}


export default TableResultsMeasurements;