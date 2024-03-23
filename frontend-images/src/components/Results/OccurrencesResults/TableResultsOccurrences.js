
import './TableResultsOccurrences.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsOccurrences(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'table-header' },
        { field: 'person_id', headerName: 'person_id', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_occurrence_id', headerName: 'imaging_occurrence_id', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_occurrence_date', headerName: 'imaging_occurrence_date', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_study_series', headerName: 'imaging_study_series', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_study_uid', headerName: 'imaging_study_uid', flex: 1, headerClassName: 'table-header' },
        { field: 'procedure_occurrence_id', headerName: 'procedure_occurrence_id', flex: 1, headerClassName: 'table-header' },
        { field: 'wadors_uri', headerName: 'wadors_uri', flex: 1, headerClassName: 'table-header' },
        { field: 'modality', headerName: 'modality', flex: 1, headerClassName: 'table-header' },
        { field: 'anatomic_site_concept_id', headerName: 'anatomic_site_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'anatomic_site_concept_name', headerName: 'anatomic_site_concept_name', flex: 1, headerClassName: 'table-header' }
    ]

    console.log(props.results)
    const rows = []
    const ids = []
    props.results.forEach((element, index) => {
        console.log(element[0])
            
        if (element[1] !== undefined) {
            console.log(element[0])

            let imaging_occurrence_id = ''
            let stringimaging_occurrence_id = ''

            if (element[1].imaging_occurrence_id!== '' && element[1].imaging_occurrence_id !== undefined) {
                if (element[1].imaging_occurrence_id !== undefined) {
                    imaging_occurrence_id = element[1].imaging_occurrence_id
                }
                stringimaging_occurrence_id= `${imaging_occurrence_id}`
            } else {
                stringimaging_occurrence_id = ''
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


            let procedure_occurrence_id = ''
            let stringprocedure_occurrence_id = ''

            if (element[1].procedure_occurrence_id !== '' && element[1].procedure_occurrence_id !== undefined) {
                if (element[1].procedure_occurrence_id !== undefined) {
                    procedure_occurrence_id= element[1].procedure_occurrence_id
                }

                stringprocedure_occurrence_id = `${procedure_occurrence_id}`
            } else {
                stringprocedure_occurrence_id = ''
            }

            let wadors_uri = ''
            let stringwadors_uri = ''

            if (element[1].wadors_uri!== '' && element[1].wadors_uri !== undefined) {
                if (element[1].wadors_uri !== undefined) {
                    wadors_uri = element[1].wadors_uri
                }
                stringwadors_uri= `${wadors_uri}`
            } else {
                stringwadors_uri = ''
            }

            let imaging_occurrence_date = ''
            let stringimaging_occurrence_date= ''

            if (element[1].imaging_occurrence_date!== '' && element[1].imaging_occurrence_date !== undefined) {
                if (element[1].imaging_occurrence_date !== undefined) {
                    imaging_occurrence_date = element[1].imaging_occurrence_date
                }
                stringimaging_occurrence_date= `${imaging_occurrence_date}`
            } else {
                stringimaging_occurrence_date = ''
            }

            let imaging_study_uid = ''
            let stringimaging_study_uid= ''

            if (element[1].imaging_study_uid!== '' && element[1].imaging_study_uid !== undefined) {
                if (element[1].imaging_study_uid !== undefined) {
                    imaging_study_uid = element[1].imaging_study_uid
                }
                stringimaging_study_uid= `${imaging_study_uid}`
            } else {
                stringimaging_study_uid = ''
            }

            let imaging_study_series = ''
            let stringimaging_study_series= ''

            if (element[1].imaging_study_series!== '' && element[1].imaging_study_series !== undefined) {
                if (element[1].imaging_study_series !== undefined) {
                    imaging_study_series = element[1].imaging_study_series
                }
                stringimaging_study_series= `${imaging_study_series}`
            } else {
                stringimaging_study_series = ''
            }

            let modality = ''
            let stringmodality= ''

            if (element[1].modality!== '' && element[1].modality !== undefined) {
                if (element[1].modality !== undefined) {
                    modality = element[1].modality
                }
                stringmodality= `${modality}`
            } else {
                stringmodality = ''
            }

            let anatomic_site_concept_id = ''
            let stringanatomic_site_concept_id = ''

            if (element[1].anatomic_site_concept_id !== '' && element[1].anatomic_site_concept_id !== undefined) {
                if (element[1].anatomic_site_concept_id !== undefined) {
                    anatomic_site_concept_id= element[1].anatomic_site_concept_id
                }

                stringanatomic_site_concept_id = `${anatomic_site_concept_id}`
            } else {
                stringanatomic_site_concept_id = ''
            }

            let anatomic_site_concept_name = ''
            let stringanatomic_site_concept_name = ''

            if (element[1].anatomic_site_concept_name !== '' && element[1].anatomic_site_concept_name !== undefined) {
                if (element[1].anatomic_site_concept_name !== undefined) {
                    anatomic_site_concept_name= element[1].anatomic_site_concept_name
                }

                stringanatomic_site_concept_name= `${anatomic_site_concept_name}`
            } else {
                stringanatomic_site_concept_name = ''
            }

            rows.push({ id: index, 
                Beacon: element[0], 
                person_id: stringperson_id,
                imaging_occurrence_id: stringimaging_occurrence_id,
                imaging_occurrence_date: stringimaging_occurrence_date,
                imaging_study_series: stringimaging_study_series,
                imaging_study_uid: stringimaging_study_uid,
                procedure_occurrence_id: stringprocedure_occurrence_id,
                wadors_uri: stringwadors_uri,
                modality: stringmodality,
                anatomic_site_concept_id: anatomic_site_concept_id,
                anatomic_site_concept_name: anatomic_site_concept_name})

        }

    })



    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                person_id: true,
                imaging_occurrence_id: false,
                imaging_occurrence_date: false,
                imaging_study_series: false,
                imaging_study_uid: false,
                procedure_occurrence_id: false,
                anatomic_site_concept_name: false,
                wadors_uri: true,
                modality: true,
                anatomic_site_concept_id: true


                
              },
            },
          }}
        getRowHeight={() => 'auto'}


            columns={columns}
            rows={rows}
            

        />
    )

}


export default TableResultsOccurrences;