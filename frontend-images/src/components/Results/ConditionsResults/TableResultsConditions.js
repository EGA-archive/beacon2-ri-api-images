
import './TableResultsConditions.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsConditions(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'table-header' },
        { field: 'person_id', headerName: 'person_id', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_occurrence_id', headerName: 'condition_occurrence_id', flex: 1, headerClassName: 'table-header' },
        { field: 'concept_id', headerName: 'concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'concept_name', headerName: 'concept_name', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_start_date', headerName: 'condition_start_date', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_start_datetime', headerName: 'condition_start_datetime', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_end_date', headerName: 'condition_end_date', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_end_datetime', headerName: 'condition_end_datetime', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_type_concept_id', headerName: 'condition_type_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_status_concept_id', headerName: 'condition_status_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'provider_id', headerName: 'provider_id', flex: 1, headerClassName: 'table-header' },
        { field: 'visit_occurrence_id', headerName: 'visit_occurrence_id', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_source_value', headerName: 'condition_source_value', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_source_concept_id', headerName: 'condition_source_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'condition_status_source_value', headerName: 'condition_status_source_value', flex: 1, headerClassName: 'table-header' }
    ]

    console.log(props.results)
    const rows = []
    const ids = []
    props.results.forEach((element, index) => {
        console.log(element[0])
            
        if (element[1] !== undefined) {
            console.log(element[0])

            let condition_occurrence_id = ''
            let stringcondition_occurrence_id = ''

            if (element[1].condition_occurrence_id!== '' && element[1].condition_occurrence_id !== undefined) {
                if (element[1].condition_occurrence_id !== undefined) {
                    condition_occurrence_id = element[1].condition_occurrence_id
                }
                stringcondition_occurrence_id= `${condition_occurrence_id}`
            } else {
                stringcondition_occurrence_id = ''
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

            let provider_id = ''
            let stringprovider_id = ''

            if (element[1].provider_id !== '' && element[1].provider_id !== undefined) {
                if (element[1].provider_id !== undefined) {
                    provider_id = element[1].provider_id
                }

                stringprovider_id = `${provider_id}`
            } else {
                stringprovider_id = ''
            }

            let condition_end_datetime = ''
            let stringcondition_end_datetime = ''

            if (element[1].condition_end_datetime !== '' && element[1].condition_end_datetime !== undefined) {
                if (element[1].condition_end_datetime !== undefined) {
                    condition_end_datetime = element[1].condition_end_datetime
                }

                stringcondition_end_datetime = `${condition_end_datetime}`
            } else {
                stringcondition_end_datetime = ''
            }

            let condition_type_concept_id = ''
            let stringcondition_type_concept_id = ''

            if (element[1].condition_type_concept_id !== '' && element[1].condition_type_concept_id !== undefined) {
                if (element[1].condition_type_concept_id !== undefined) {
                    condition_type_concept_id= element[1].condition_type_concept_id
                }

                stringcondition_type_concept_id = `${condition_type_concept_id}`
            } else {
                stringcondition_type_concept_id = ''
            }

            let condition_status_concept_id = ''
            let stringcondition_status_concept_id = ''

            if (element[1].condition_status_concept_id !== '' && element[1].condition_status_concept_id !== undefined) {
                if (element[1].condition_status_concept_id !== undefined) {
                    condition_status_concept_id= element[1].condition_status_concept_id
                }

                stringcondition_status_concept_id = `${condition_status_concept_id}`
            } else {
                stringcondition_status_concept_id = ''
            }

            let condition_source_value = ''
            let stringcondition_source_value = ''

            if (element[1].condition_source_value !== '' && element[1].condition_source_value !== undefined) {
                if (element[1].condition_source_value !== undefined) {
                    condition_source_value= element[1].condition_source_value
                }

                stringcondition_source_value = `${condition_source_value}`
            } else {
                stringcondition_source_value = ''
            }

            let condition_start_datetime = ''
            let stringcondition_start_datetime = ''

            if (element[1].condition_start_datetime !== '' && element[1].condition_start_datetime !== undefined) {
                if (element[1].condition_start_datetime !== undefined) {
                    condition_start_datetime= element[1].condition_start_datetime
                }

                stringcondition_start_datetime = `${condition_start_datetime}`
            } else {
                stringcondition_start_datetime = ''
            }

            let visit_occurrence_id = ''
            let stringvisit_occurrence_id = ''

            if (element[1].visit_occurrence_id !== '' && element[1].visit_occurrence_id !== undefined) {
                if (element[1].visit_occurrence_id !== undefined) {
                    visit_occurrence_id= element[1].visit_occurrence_id
                }

                stringvisit_occurrence_id = `${visit_occurrence_id}`
            } else {
                stringvisit_occurrence_id = ''
            }

            let condition_end_date = ''
            let stringcondition_end_date = ''

            if (element[1].condition_end_date !== '' && element[1].condition_end_date !== undefined) {
                if (element[1].condition_end_date !== undefined) {
                    condition_end_date= element[1].condition_end_date
                }

                stringcondition_end_date = `${condition_end_date}`
            } else {
                stringcondition_end_date = ''
            }

            let condition_source_concept_id = ''
            let stringcondition_source_concept_id = ''

            if (element[1].condition_source_concept_id!== '' && element[1].condition_source_concept_id !== undefined) {
                if (element[1].condition_source_concept_id !== undefined) {
                    condition_source_concept_id = element[1].condition_source_concept_id
                }
                stringcondition_source_concept_id= `${condition_source_concept_id}`
            } else {
                stringcondition_source_concept_id = ''
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

            let condition_start_date = ''
            let stringcondition_start_date= ''

            if (element[1].condition_start_date!== '' && element[1].condition_start_date !== undefined) {
                if (element[1].condition_start_date !== undefined) {
                    condition_start_date = element[1].condition_start_date
                }
                stringcondition_start_date= `${condition_start_date}`
            } else {
                stringcondition_start_date = ''
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

            let condition_status_source_value = ''
            let stringcondition_status_source_value= ''

            if (element[1].condition_status_source_value!== '' && element[1].condition_status_source_value !== undefined) {
                if (element[1].condition_status_source_value !== undefined) {
                    condition_status_source_value = element[1].condition_status_source_value
                }
                stringcondition_status_source_value= `${condition_status_source_value}`
            } else {
                stringcondition_status_source_value = ''
            }

           

            rows.push({ id: index, 
                Beacon: element[0], 
                person_id: stringperson_id,
                condition_occurrence_id: stringcondition_occurrence_id,
                concept_id: stringconcept_id,
                concept_name: stringconcept_name,
                condition_start_date: stringcondition_start_date,
                condition_start_datetime: stringcondition_start_datetime,
                condition_end_date: stringcondition_end_date,
                condition_end_datetime: stringcondition_end_datetime,
                condition_type_concept_id: stringcondition_type_concept_id,
                condition_status_concept_id: stringcondition_status_concept_id,
                provider_id: stringprovider_id,
                visit_occurrence_id: stringvisit_occurrence_id,
                condition_source_value: stringcondition_source_value,
                condition_source_concept_id: stringcondition_source_concept_id,
                condition_status_source_value: stringcondition_status_source_value })

        }

    })



    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                person_id: true,
                condition_occurrence_id: true,
                concept_id: true,
                concept_name: true,
                condition_start_date: false,
                condition_start_datetime: false,
                condition_end_date: false,
                condition_status_concept_id: false,
                provider_id: false,
                visit_occurrence_id: false,
                condition_end_datetime: false,
                condition_type_concept_id: true,
                condition_source_concept_id: true,
                condition_source_value: true,
                condition_status_source_value: false



                
              },
            },
          }}
        getRowHeight={() => 'auto'}


            columns={columns}
            rows={rows}
            

        />
    )

}


export default TableResultsConditions;