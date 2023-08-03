
import './TableResultsOccurrences.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsOccurrences(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'person_id', headerName: 'person_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_occurrence_id', headerName: 'imaging_occurrence_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_occurrence_date', headerName: 'imaging_occurrence_date', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_study_series', headerName: 'imaging_study_series', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_study_uid', headerName: 'imaging_study_uid', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_concept_class_id', headerName: 'procedure_occurrence_id_concept_class_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_concept_code', headerName: 'procedure_occurrence_id_concept_code', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_concept_id', headerName: 'procedure_occurrence_id_concept_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_concept_name', headerName: 'procedure_occurrence_id_concept_name', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_domain_id', headerName: 'procedure_occurrence_id_domain_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_procedure_occurrence_id', headerName: 'procedure_occurrence_id_procedure_occurrence_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_standard_concept', headerName: 'procedure_occurrence_id_standard_concept', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'procedure_occurrence_id_vocabulary_id', headerName: 'procedure_occurrence_id_vocabulary_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'wadors_uri', headerName: 'wadors_uri', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'modality', headerName: 'modality', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_location_concept_class_id', headerName: 'anatomic_site_location_concept_class_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_location_concept_code', headerName: 'anatomic_site_location_concept_code', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_location_concept_id', headerName: 'anatomic_site_location_concept_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_location_concept_name', headerName: 'anatomic_site_location_concept_name', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_location_domain_id', headerName: 'anatomic_site_location_domain_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_location_standard_concept', headerName: 'anatomic_site_location_standard_concept', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_location_vocabulary_id', headerName: 'anatomic_site_location_vocabulary_id', flex: 1, headerClassName: 'super-app-theme--header' }
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
 
            let sex_concept_id = ''
            let stringsex_concept_id = ''

            if (element[1].sex.concept_id !== '' && element[1].sex.concept_id !== undefined) {
                if (element[1].sex.concept_id !== undefined) {
                    sex_concept_id = element[1].sex.concept_id
                }

                stringsex_concept_id = `${sex_concept_id}`
            } else {
                stringsex_concept_id = ''
            }


            let procedure_occurrence_id_procedure_occurrence_id = ''
            let stringprocedure_occurrence_id_procedure_occurrence_id = ''

            if (element[1].procedure_occurrence_id.procedure_occurrence_id !== '' && element[1].procedure_occurrence_id.procedure_occurrence_id !== undefined) {
                if (element[1].procedure_occurrence_id.procedure_occurrence_id !== undefined) {
                    procedure_occurrence_id_procedure_occurrence_id = element[1].procedure_occurrence_id.procedure_occurrence_id
                }

                stringprocedure_occurrence_id_procedure_occurrence_id = `${procedure_occurrence_id_procedure_occurrence_id}`
            } else {
                stringprocedure_occurrence_id_procedure_occurrence_id = ''
            }

            let procedure_occurrence_id_concept_id = ''
            let stringprocedure_occurrence_id_concept_id = ''

            if (element[1].procedure_occurrence_id.concept_id !== '' && element[1].procedure_occurrence_id.concept_id !== undefined) {
                if (element[1].procedure_occurrence_id.concept_id !== undefined) {
                    procedure_occurrence_id_concept_id = element[1].procedure_occurrence_id.concept_id
                }

                stringprocedure_occurrence_id_concept_id = `${procedure_occurrence_id_concept_id}`
            } else {
                stringprocedure_occurrence_id_concept_id = ''
            }

            let procedure_occurrence_id_concept_name = ''
            let stringprocedure_occurrence_id_concept_name = ''

            if (element[1].procedure_occurrence_id.concept_name !== '' && element[1].procedure_occurrence_id.concept_name !== undefined) {
                if (element[1].procedure_occurrence_id.concept_name !== undefined) {
                    procedure_occurrence_id_concept_name= element[1].procedure_occurrence_id.concept_name
                }

                stringprocedure_occurrence_id_concept_name = `${procedure_occurrence_id_concept_name}`
            } else {
                stringprocedure_occurrence_id_concept_name = ''
            }

            let procedure_occurrence_id_domain_id = ''
            let stringprocedure_occurrence_id_domain_id = ''

            if (element[1].procedure_occurrence_id.domain_id !== '' && element[1].procedure_occurrence_id.domain_id !== undefined) {
                if (element[1].procedure_occurrence_id.domain_id !== undefined) {
                    procedure_occurrence_id_domain_id= element[1].procedure_occurrence_id.domain_id
                }

                stringprocedure_occurrence_id_domain_id = `${procedure_occurrence_id_domain_id}`
            } else {
                stringprocedure_occurrence_id_domain_id = ''
            }

            let procedure_occurrence_id_vocabulary_id = ''
            let stringprocedure_occurrence_id_vocabulary_id = ''

            if (element[1].procedure_occurrence_id.vocabulary_id !== '' && element[1].procedure_occurrence_id.vocabulary_id !== undefined) {
                if (element[1].procedure_occurrence_id.vocabulary_id !== undefined) {
                    procedure_occurrence_id_vocabulary_id= element[1].procedure_occurrence_id.vocabulary_id
                }

                stringprocedure_occurrence_id_vocabulary_id = `${procedure_occurrence_id_vocabulary_id}`
            } else {
                stringprocedure_occurrence_id_vocabulary_id = ''
            }

            let procedure_occurrence_id_concept_class_id = ''
            let stringprocedure_occurrence_id_concept_class_id = ''

            if (element[1].procedure_occurrence_id.concept_class_id !== '' && element[1].procedure_occurrence_id.concept_class_id !== undefined) {
                if (element[1].procedure_occurrence_id.concept_class_id !== undefined) {
                    procedure_occurrence_id_concept_class_id= element[1].procedure_occurrence_id.concept_class_id
                }

                stringprocedure_occurrence_id_concept_class_id = `${procedure_occurrence_id_concept_class_id}`
            } else {
                stringprocedure_occurrence_id_concept_class_id = ''
            }

            let procedure_occurrence_id_standard_concept = ''
            let stringprocedure_occurrence_id_standard_concept = ''

            if (element[1].procedure_occurrence_id.standard_concept !== '' && element[1].procedure_occurrence_id.standard_concept !== undefined) {
                if (element[1].procedure_occurrence_id.standard_concept !== undefined) {
                    procedure_occurrence_id_standard_concept= element[1].procedure_occurrence_id.standard_concept
                }

                stringprocedure_occurrence_id_standard_concept = `${procedure_occurrence_id_standard_concept}`
            } else {
                stringprocedure_occurrence_id_standard_concept = ''
            }

            let procedure_occurrence_id_concept_code = ''
            let stringprocedure_occurrence_id_concept_code = ''

            if (element[1].procedure_occurrence_id.concept_code !== '' && element[1].procedure_occurrence_id.concept_code !== undefined) {
                if (element[1].procedure_occurrence_id.concept_code !== undefined) {
                    procedure_occurrence_id_concept_code= element[1].procedure_occurrence_id.concept_code
                }

                stringprocedure_occurrence_id_concept_code = `${procedure_occurrence_id_concept_code}`
            } else {
                stringprocedure_occurrence_id_concept_code = ''
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

            let anatomic_site_location_concept_id = ''
            let stringanatomic_site_location_concept_id = ''

            if (element[1].anatomic_site_location.concept_id !== '' && element[1].anatomic_site_location.concept_id !== undefined) {
                if (element[1].anatomic_site_location.concept_id !== undefined) {
                    anatomic_site_location_concept_id= element[1].anatomic_site_location.concept_id
                }

                stringanatomic_site_location_concept_id = `${anatomic_site_location_concept_id}`
            } else {
                stringanatomic_site_location_concept_id = ''
            }

            let anatomic_site_location_concept_name = ''
            let stringanatomic_site_location_concept_name = ''

            if (element[1].anatomic_site_location.concept_name !== '' && element[1].anatomic_site_location.concept_name !== undefined) {
                if (element[1].anatomic_site_location.concept_name !== undefined) {
                    anatomic_site_location_concept_name= element[1].anatomic_site_location.concept_name
                }

                stringanatomic_site_location_concept_name= `${anatomic_site_location_concept_name}`
            } else {
                stringanatomic_site_location_concept_name = ''
            }

            let anatomic_site_location_domain_id = ''
            let stringanatomic_site_location_domain_id = ''

            if (element[1].anatomic_site_location.domain_id !== '' && element[1].anatomic_site_location.domain_id !== undefined) {
                if (element[1].anatomic_site_location.domain_id !== undefined) {
                    anatomic_site_location_domain_id= element[1].anatomic_site_location.domain_id
                }

                stringanatomic_site_location_domain_id= `${anatomic_site_location_domain_id}`
            } else {
                stringanatomic_site_location_domain_id = ''
            }

            let anatomic_site_location_vocabulary_id = ''
            let stringanatomic_site_location_vocabulary_id = ''

            if (element[1].anatomic_site_location.vocabulary_id !== '' && element[1].anatomic_site_location.vocabulary_id !== undefined) {
                if (element[1].anatomic_site_location.vocabulary_id !== undefined) {
                    anatomic_site_location_vocabulary_id= element[1].anatomic_site_location.vocabulary_id
                }

                stringanatomic_site_location_vocabulary_id= `${anatomic_site_location_vocabulary_id}`
            } else {
                stringanatomic_site_location_vocabulary_id = ''
            }

            let anatomic_site_location_concept_class_id = ''
            let stringanatomic_site_location_concept_class_id = ''

            if (element[1].anatomic_site_location.concept_class_id !== '' && element[1].anatomic_site_location.concept_class_id !== undefined) {
                if (element[1].anatomic_site_location.concept_class_id !== undefined) {
                    anatomic_site_location_concept_class_id= element[1].anatomic_site_location.concept_class_id
                }

                stringanatomic_site_location_concept_class_id= `${anatomic_site_location_concept_class_id}`
            } else {
                stringanatomic_site_location_concept_class_id = ''
            }

            let anatomic_site_location_standard_concept = ''
            let stringanatomic_site_location_standard_concept = ''

            if (element[1].anatomic_site_location.standard_concept !== '' && element[1].anatomic_site_location.standard_concept !== undefined) {
                if (element[1].anatomic_site_location.standard_concept !== undefined) {
                    anatomic_site_location_standard_concept= element[1].anatomic_site_location.standard_concept
                }

                stringanatomic_site_location_standard_concept= `${anatomic_site_location_standard_concept}`
            } else {
                stringanatomic_site_location_standard_concept = ''
            }

            let anatomic_site_location_concept_code = ''
            let stringanatomic_site_location_concept_code = ''

            if (element[1].anatomic_site_location.concept_code !== '' && element[1].anatomic_site_location.concept_code !== undefined) {
                if (element[1].anatomic_site_location.concept_code !== undefined) {
                    anatomic_site_location_concept_code= element[1].anatomic_site_location.concept_code
                }

                stringanatomic_site_location_concept_code= `${anatomic_site_location_concept_code}`
            } else {
                stringanatomic_site_location_concept_code = ''
            }

            rows.push({ id: index, 
                Beacon: element[0], 
                person_id: stringperson_id,
                imaging_occurrence_id: stringimaging_occurrence_id,
                imaging_occurrence_date: stringimaging_occurrence_date,
                imaging_study_series: stringimaging_study_series,
                imaging_study_uid: stringimaging_study_uid,
                procedure_occurrence_id_concept_class_id: stringprocedure_occurrence_id_concept_class_id,
                procedure_occurrence_id_concept_code: stringprocedure_occurrence_id_concept_code,
                procedure_occurrence_id_concept_id: stringprocedure_occurrence_id_concept_id,
                procedure_occurrence_id_concept_name: stringprocedure_occurrence_id_concept_name,
                procedure_occurrence_id_domain_id: stringprocedure_occurrence_id_domain_id,
                procedure_occurrence_id_procedure_occurrence_id: stringprocedure_occurrence_id_procedure_occurrence_id,
                procedure_occurrence_id_standard_concept: stringprocedure_occurrence_id_standard_concept,
                procedure_occurrence_id_vocabulary_id: stringprocedure_occurrence_id_vocabulary_id,
                wadors_uri: stringwadors_uri,
                modality: stringmodality,
                anatomic_site_location_concept_class_id: stringanatomic_site_location_concept_class_id,
                anatomic_site_location_concept_code: stringanatomic_site_location_concept_code,
                anatomic_site_location_concept_id: stringanatomic_site_location_concept_id,
                anatomic_site_location_concept_name: stringanatomic_site_location_concept_name,
                anatomic_site_location_domain_id: stringanatomic_site_location_domain_id,
                anatomic_site_location_standard_concept: stringanatomic_site_location_standard_concept,
                anatomic_site_location_vocabulary_id: stringanatomic_site_location_vocabulary_id })

        }

    })



    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                birth_datetime: false,
                birth_day: false,
                birth_month: false,
                birth_year: false
                
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