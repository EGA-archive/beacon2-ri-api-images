
import './TableResultsFeatures.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsFeatures(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'person_id', headerName: 'person_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_id', headerName: 'imaging_feature_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_concept_class_id', headerName: 'imaging_feature_domain_id_concept_class_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_concept_code', headerName: 'imaging_feature_domain_id_concept_code', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_concept_id', headerName: 'imaging_feature_domain_id_concept_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_concept_name', headerName: 'imaging_feature_domain_id_concept_name', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_domain_id', headerName: 'imaging_feature_domain_id_domain_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_measurement_id', headerName: 'imaging_feature_domain_id_measurement_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_standard_concept', headerName: 'imaging_feature_domain_id_standard_concept', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_feature_domain_id_vocabulary_id', headerName: 'imaging_feature_domain_id_vocabulary_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_finding_num', headerName: 'imaging_finding_num', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_occurrence_id', headerName: 'imaging_occurrence_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'domain_concept_id', headerName: 'domain_concept_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'alg_system', headerName: 'alg_system', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'alg_datetime', headerName: 'alg_datetime', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_concept_id_concept_class_id', headerName: 'anatomic_site_concept_id_concept_class_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_concept_id_concept_code', headerName: 'anatomic_site_concept_id_concept_code', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_concept_id_concept_id', headerName: 'anatomic_site_concept_id_concept_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_concept_id_concept_name', headerName: 'anatomic_site_concept_id_concept_name', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_concept_id_domain_id', headerName: 'anatomic_site_concept_id_domain_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_concept_id_standard_concept', headerName: 'anatomic_site_concept_id_standard_concept', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'anatomic_site_concept_id_vocabulary_id', headerName: 'anatomic_site_concept_id_vocabulary_id', flex: 1, headerClassName: 'super-app-theme--header' }
    ]

    console.log(props.results)
    const rows = []
    const ids = []
    props.results.forEach((element, index) => {
        console.log(element[0])
            
        if (element[1] !== undefined) {
            console.log(element[0])

            let imaging_feature_id = ''
            let stringimaging_feature_id = ''

            if (element[1].imaging_feature_id!== '' && element[1].imaging_feature_id !== undefined) {
                if (element[1].imaging_feature_id !== undefined) {
                    imaging_feature_id = element[1].imaging_feature_id
                }
                stringimaging_feature_id= `${imaging_feature_id}`
            } else {
                stringimaging_feature_id = ''
            }

            let imaging_finding_num = ''
            let stringimaging_finding_num = ''

            if (element[1].imaging_finding_num!== '' && element[1].imaging_finding_num !== undefined) {
                if (element[1].imaging_finding_num !== undefined) {
                    imaging_finding_num = element[1].imaging_finding_num
                }
                stringimaging_finding_num= `${imaging_finding_num}`
            } else {
                stringimaging_finding_num = ''
            }

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
 
            let domain_concept_id = ''
            let stringdomain_concept_id = ''

            if (element[1].domain_concept_id!== '' && element[1].domain_concept_id !== undefined) {
                if (element[1].domain_concept_id !== undefined) {
                    domain_concept_id = element[1].domain_concept_id
                }
                stringdomain_concept_id= `${domain_concept_id}`
            } else {
                stringdomain_concept_id = ''
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

            let imaging_feature_domain_id_measurement_id = ''
            let stringimaging_feature_domain_id_measurement_id = ''

            if (element[1].imaging_feature_domain_id.measurement_id !== '' && element[1].imaging_feature_domain_id.measurement_id !== undefined) {
                if (element[1].imaging_feature_domain_id.measurement_id !== undefined) {
                    imaging_feature_domain_id_measurement_id = element[1].imaging_feature_domain_id.measurement_id
                }

                stringimaging_feature_domain_id_measurement_id= `${imaging_feature_domain_id_measurement_id}`
            } else {
                stringimaging_feature_domain_id_measurement_id = ''
            }

            let imaging_feature_domain_id_concept_id = ''
            let stringimaging_feature_domain_id_concept_id = ''

            if (element[1].imaging_feature_domain_id.concept_id !== '' && element[1].imaging_feature_domain_id.concept_id !== undefined) {
                if (element[1].imaging_feature_domain_id.concept_id !== undefined) {
                    imaging_feature_domain_id_concept_id = element[1].imaging_feature_domain_id.concept_id
                }

                stringimaging_feature_domain_id_concept_id= `${imaging_feature_domain_id_concept_id}`
            } else {
                stringimaging_feature_domain_id_concept_id = ''
            }

            let imaging_feature_domain_id_concept_name = ''
            let stringimaging_feature_domain_id_concept_name = ''

            if (element[1].imaging_feature_domain_id.concept_name !== '' && element[1].imaging_feature_domain_id.concept_name !== undefined) {
                if (element[1].imaging_feature_domain_id.concept_name !== undefined) {
                    imaging_feature_domain_id_concept_name = element[1].imaging_feature_domain_id.concept_name
                }

                stringimaging_feature_domain_id_concept_name= `${imaging_feature_domain_id_concept_name}`
            } else {
                stringimaging_feature_domain_id_concept_name = ''
            }

            let imaging_feature_domain_id_domain_id = ''
            let stringimaging_feature_domain_id_domain_id = ''

            if (element[1].imaging_feature_domain_id.domain_id !== '' && element[1].imaging_feature_domain_id.domain_id !== undefined) {
                if (element[1].imaging_feature_domain_id.domain_id !== undefined) {
                    imaging_feature_domain_id_domain_id = element[1].imaging_feature_domain_id.domain_id
                }

                stringimaging_feature_domain_id_domain_id= `${imaging_feature_domain_id_domain_id}`
            } else {
                stringimaging_feature_domain_id_domain_id = ''
            }

            let imaging_feature_domain_id_vocabulary_id = ''
            let stringimaging_feature_domain_id_vocabulary_id = ''

            if (element[1].imaging_feature_domain_id.vocabulary_id !== '' && element[1].imaging_feature_domain_id.vocabulary_id !== undefined) {
                if (element[1].imaging_feature_domain_id.vocabulary_id !== undefined) {
                    imaging_feature_domain_id_vocabulary_id = element[1].imaging_feature_domain_id.vocabulary_id
                }

                stringimaging_feature_domain_id_vocabulary_id= `${imaging_feature_domain_id_vocabulary_id}`
            } else {
                stringimaging_feature_domain_id_vocabulary_id = ''
            }

            let imaging_feature_domain_id_concept_class_id = ''
            let stringimaging_feature_domain_id_concept_class_id = ''

            if (element[1].imaging_feature_domain_id.concept_class_id !== '' && element[1].imaging_feature_domain_id.concept_class_id !== undefined) {
                if (element[1].imaging_feature_domain_id.concept_class_id !== undefined) {
                    imaging_feature_domain_id_concept_class_id = element[1].imaging_feature_domain_id.concept_class_id
                }

                stringimaging_feature_domain_id_concept_class_id= `${imaging_feature_domain_id_concept_class_id}`
            } else {
                stringimaging_feature_domain_id_concept_class_id = ''
            }

            let imaging_feature_domain_id_standard_concept = ''
            let stringimaging_feature_domain_id_standard_concept = ''

            if (element[1].imaging_feature_domain_id.standard_concept !== '' && element[1].imaging_feature_domain_id.standard_concept !== undefined) {
                if (element[1].imaging_feature_domain_id.standard_concept !== undefined) {
                    imaging_feature_domain_id_standard_concept = element[1].imaging_feature_domain_id.standard_concept
                }

                stringimaging_feature_domain_id_standard_concept= `${imaging_feature_domain_id_standard_concept}`
            } else {
                stringimaging_feature_domain_id_standard_concept = ''
            }

            let imaging_feature_domain_id_concept_code = ''
            let stringimaging_feature_domain_id_concept_code = ''

            if (element[1].imaging_feature_domain_id.concept_code !== '' && element[1].imaging_feature_domain_id.concept_code !== undefined) {
                if (element[1].imaging_feature_domain_id.concept_code !== undefined) {
                    imaging_feature_domain_id_concept_code = element[1].imaging_feature_domain_id.concept_code
                }

                stringimaging_feature_domain_id_concept_code= `${imaging_feature_domain_id_concept_code}`
            } else {
                stringimaging_feature_domain_id_concept_code = ''
            }

            let anatomic_site_concept_id_concept_id = ''
            let stringanatomic_site_concept_id_concept_id = ''

            if (element[1].anatomic_site_concept_id.concept_id !== '' && element[1].anatomic_site_concept_id.concept_id !== undefined) {
                if (element[1].anatomic_site_concept_id.concept_id !== undefined) {
                    anatomic_site_concept_id_concept_id = element[1].anatomic_site_concept_id.concept_id
                }

                stringanatomic_site_concept_id_concept_id= `${anatomic_site_concept_id_concept_id}`
            } else {
                stringanatomic_site_concept_id_concept_id = ''
            }

            let anatomic_site_concept_id_concept_name = ''
            let stringanatomic_site_concept_id_concept_name = ''

            if (element[1].anatomic_site_concept_id.concept_name !== '' && element[1].anatomic_site_concept_id.concept_name !== undefined) {
                if (element[1].anatomic_site_concept_id.concept_name !== undefined) {
                    anatomic_site_concept_id_concept_name= element[1].anatomic_site_concept_id.concept_name
                }

                stringanatomic_site_concept_id_concept_name= `${anatomic_site_concept_id_concept_name}`
            } else {
                stringanatomic_site_concept_id_concept_name = ''
            }

            let anatomic_site_concept_id_domain_id = ''
            let stringanatomic_site_concept_id_domain_id = ''

            if (element[1].anatomic_site_concept_id.domain_id !== '' && element[1].anatomic_site_concept_id.domain_id !== undefined) {
                if (element[1].anatomic_site_concept_id.domain_id !== undefined) {
                    anatomic_site_concept_id_domain_id= element[1].anatomic_site_concept_id.domain_id
                }

                stringanatomic_site_concept_id_domain_id= `${anatomic_site_concept_id_domain_id}`
            } else {
                stringanatomic_site_concept_id_domain_id = ''
            }

            let anatomic_site_concept_id_vocabulary_id = ''
            let stringanatomic_site_concept_id_vocabulary_id = ''

            if (element[1].anatomic_site_concept_id.vocabulary_id !== '' && element[1].anatomic_site_concept_id.vocabulary_id !== undefined) {
                if (element[1].anatomic_site_concept_id.vocabulary_id !== undefined) {
                    anatomic_site_concept_id_vocabulary_id= element[1].anatomic_site_concept_id.vocabulary_id
                }

                stringanatomic_site_concept_id_vocabulary_id= `${anatomic_site_concept_id_vocabulary_id}`
            } else {
                stringanatomic_site_concept_id_vocabulary_id = ''
            }

            let anatomic_site_concept_id_concept_class_id = ''
            let stringanatomic_site_concept_id_concept_class_id = ''

            if (element[1].anatomic_site_concept_id.concept_class_id !== '' && element[1].anatomic_site_concept_id.concept_class_id !== undefined) {
                if (element[1].anatomic_site_concept_id.concept_class_id !== undefined) {
                    anatomic_site_concept_id_concept_class_id= element[1].anatomic_site_concept_id.concept_class_id
                }

                stringanatomic_site_concept_id_concept_class_id= `${anatomic_site_concept_id_concept_class_id}`
            } else {
                stringanatomic_site_concept_id_concept_class_id = ''
            }

            let anatomic_site_concept_id_standard_concept = ''
            let stringanatomic_site_concept_id_standard_concept = ''

            if (element[1].anatomic_site_concept_id.standard_concept !== '' && element[1].anatomic_site_concept_id.standard_concept !== undefined) {
                if (element[1].anatomic_site_concept_id.standard_concept !== undefined) {
                    anatomic_site_concept_id_standard_concept= element[1].anatomic_site_concept_id.standard_concept
                }

                stringanatomic_site_concept_id_standard_concept= `${anatomic_site_concept_id_standard_concept}`
            } else {
                stringanatomic_site_concept_id_standard_concept = ''
            }

            let anatomic_site_concept_id_concept_code = ''
            let stringanatomic_site_concept_id_concept_code = ''

            if (element[1].anatomic_site_concept_id.concept_code !== '' && element[1].anatomic_site_concept_id.concept_code !== undefined) {
                if (element[1].anatomic_site_concept_id.concept_code !== undefined) {
                    anatomic_site_concept_id_concept_code= element[1].anatomic_site_concept_id.concept_code
                }

                stringanatomic_site_concept_id_concept_code= `${anatomic_site_concept_id_concept_code}`
            } else {
                stringanatomic_site_concept_id_concept_code = ''
            }

            let alg_system = ''
            let stringalg_system= ''

            if (element[1].alg_system!== '' && element[1].alg_system !== undefined) {
                if (element[1].alg_system !== undefined) {
                    alg_system = element[1].alg_system
                }
                stringalg_system= `${alg_system}`
            } else {
                stringalg_system = ''
            }

            let alg_datetime = ''
            let stringalg_datetime= ''

            if (element[1].alg_datetime!== '' && element[1].alg_datetime !== undefined) {
                if (element[1].alg_datetime !== undefined) {
                    alg_datetime = element[1].alg_datetime
                }
                stringalg_datetime= `${alg_datetime}`
            } else {
                stringalg_datetime = ''
            }

            rows.push({ id: index, 
                Beacon: element[0], 
                person_id: stringperson_id,
                imaging_feature_id: stringimaging_feature_id,
                imaging_feature_domain_id_concept_class_id: stringimaging_feature_domain_id_concept_class_id,
                imaging_feature_domain_id_concept_code: stringimaging_feature_domain_id_concept_code,
                imaging_feature_domain_id_concept_id: stringimaging_feature_domain_id_concept_id,
                imaging_feature_domain_id_concept_name: stringimaging_feature_domain_id_concept_name,
                imaging_feature_domain_id_domain_id: stringimaging_feature_domain_id_domain_id,
                imaging_feature_domain_id_measurement_id: stringimaging_feature_domain_id_measurement_id,
                imaging_feature_domain_id_standard_concept: stringimaging_feature_domain_id_standard_concept,
                imaging_feature_domain_id_vocabulary_id: stringimaging_feature_domain_id_vocabulary_id,
                imaging_finding_num: stringimaging_finding_num,
                imaging_occurrence_id: stringimaging_occurrence_id,
                domain_concept_id: stringdomain_concept_id,
                alg_system: stringalg_system,
                alg_datetime: stringalg_datetime,
                anatomic_site_concept_id_concept_class_id: stringanatomic_site_concept_id_concept_class_id,
                anatomic_site_concept_id_concept_code: stringanatomic_site_concept_id_concept_code,
                anatomic_site_concept_id_concept_id: stringanatomic_site_concept_id_concept_id,
                anatomic_site_concept_id_concept_name: stringanatomic_site_concept_id_concept_name,
                anatomic_site_concept_id_domain_id: stringanatomic_site_concept_id_domain_id,
                anatomic_site_concept_id_standard_concept: stringanatomic_site_concept_id_standard_concept,
                anatomic_site_concept_id_vocabulary_id: stringanatomic_site_concept_id_vocabulary_id })

        }

    })

    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                imaging_feature_domain_id_concept_class_id: false,
                imaging_feature_domain_id_concept_code: false,
                imaging_feature_domain_id_domain_id: false,
                imaging_feature_domain_id_standard_concept: false,
                alg_system: false,
                alg_datetime: false,
                anatomic_site_concept_id_concept_class_id: false,
                anatomic_site_concept_id_concept_code: false,
                anatomic_site_concept_id_domain_id: false,
                anatomic_site_concept_id_standard_concept: false,
                
              },
            },
          }}
        getRowHeight={() => 'auto'}


            columns={columns}
            rows={rows}
            

        />
    )

}


export default TableResultsFeatures;