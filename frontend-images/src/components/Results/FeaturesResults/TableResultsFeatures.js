
import './TableResultsFeatures.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsFeatures(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_feature_domain_id', headerName: 'imaging_feature_domain_id', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_feature_id', headerName: 'imaging_feature_id', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_finding_num', headerName: 'imaging_finding_num', flex: 1, headerClassName: 'table-header' },
        { field: 'imaging_occurrence_id', headerName: 'imaging_occurrence_id', flex: 1, headerClassName: 'table-header' },
        { field: 'domain_concept_id', headerName: 'domain_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'alg_system', headerName: 'alg_system', flex: 1, headerClassName: 'table-header' },
        { field: 'alg_datetime', headerName: 'alg_datetime', flex: 1, headerClassName: 'table-header' },
        { field: 'anatomic_site_concept_name', headerName: 'anatomic_site_concept_name', flex: 1, headerClassName: 'table-header' },
        { field: 'anatomic_site_concept_id', headerName: 'anatomic_site_concept_id', flex: 1, headerClassName: 'table-header' },
        { field: 'domain_concept_name', headerName: 'domain_concept_name', flex: 1, headerClassName: 'table-header' }
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

            let imaging_feature_domain_id = ''
            let stringimaging_feature_domain_id = ''

            if (element[1].imaging_feature_domain_id.measurement_id !== '' && element[1].imaging_feature_domain_id.measurement_id !== undefined) {
                if (element[1].imaging_feature_domain_id.measurement_id !== undefined) {
                    imaging_feature_domain_id = element[1].imaging_feature_domain_id.measurement_id
                }

                stringimaging_feature_domain_id= `${imaging_feature_domain_id}`
            } else {
                stringimaging_feature_domain_id = ''
            }



            let domain_concept_name = ''
            let stringdomain_concept_name = ''

            if (element[1].domain_concept_name !== '' && element[1].domain_concept_name !== undefined) {
                if (element[1].domain_concept_name !== undefined) {
                    domain_concept_name= element[1].domain_concept_name
                }

                stringdomain_concept_name= `${domain_concept_name}`
            } else {
                stringdomain_concept_name = ''
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


            let anatomic_site_concept_id = ''
            let stringanatomic_site_concept_id = ''

            if (element[1].anatomic_site_concept_id !== '' && element[1].anatomic_site_concept_id !== undefined) {
                if (element[1].anatomic_site_concept_id !== undefined) {
                    anatomic_site_concept_id= element[1].anatomic_site_concept_id
                }

                stringanatomic_site_concept_id= `${anatomic_site_concept_id}`
            } else {
                stringanatomic_site_concept_id = ''
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
                imaging_feature_id: stringimaging_feature_id,
                imaging_feature_domain_id: stringimaging_feature_domain_id,
                imaging_finding_num: stringimaging_finding_num,
                imaging_occurrence_id: stringimaging_occurrence_id,
                domain_concept_id: stringdomain_concept_id,
                alg_system: stringalg_system,
                alg_datetime: stringalg_datetime,
                anatomic_site_concept_name: stringanatomic_site_concept_name,
                anatomic_site_concept_id: stringanatomic_site_concept_id,
                domain_concept_name: stringdomain_concept_name })

        }

    })

    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                imaging_feature_domain_id: true,
                imaging_feature_id: false,
                imaging_finding_num: false,
                imaging_occurrence_id: false,
                domain_concept_id: false,
                alg_system: false,
                alg_datetime: false,
                anatomic_site_concept_name: false,
                anatomic_site_concept_id: false,
                domain_concept_name: false,
                
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