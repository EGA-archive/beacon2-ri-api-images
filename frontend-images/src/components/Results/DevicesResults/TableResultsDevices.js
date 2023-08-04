
import './TableResultsDevices.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsDevices(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'person_id', headerName: 'person_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'imaging_occurrence_id', headerName: 'imaging_occurrence_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_concept_class_id', headerName: 'device_concept_class_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_concept_code', headerName: 'device_concept_code', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_concept_id', headerName: 'device_concept_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_concept_name', headerName: 'device_concept_name', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_domain_id', headerName: 'device_domain_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_exposure_end_date', headerName: 'device_exposure_end_date', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_exposure_id', headerName: 'device_exposure_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_exposure_start_date', headerName: 'device_exposure_start_date', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_standard_concept', headerName: 'device_standard_concept', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_type_concept_class_id', headerName: 'device_type_concept_class_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_type_concept_code', headerName: 'device_type_concept_code', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_type_concept_id', headerName: 'device_type_concept_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_type_concept_name', headerName: 'device_type_concept_name', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_type_domain_id', headerName: 'device_type_domain_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_type_standard_concept', headerName: 'device_type_standard_concept', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_type_vocabulary_id', headerName: 'device_type_vocabulary_id', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'device_vocabulary_id', headerName: 'device_vocabulary_id', flex: 1, headerClassName: 'super-app-theme--header' }
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

            let device_exposure_id = ''
            let stringdevice_exposure_id = ''

            if (element[1].device_exposure_id!== '' && element[1].device_exposure_id !== undefined) {
                if (element[1].device_exposure_id !== undefined) {
                    device_exposure_id = element[1].device_exposure_id
                }
                stringdevice_exposure_id= `${device_exposure_id}`
            } else {
                stringdevice_exposure_id = ''
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

            let device_concept_id = ''
            let stringdevice_concept_id = ''

            if (element[1].device.concept_id!== '' && element[1].device.concept_id !== undefined) {
                if (element[1].device.concept_id !== undefined) {
                    device_concept_id = element[1].device.concept_id
                }
                stringdevice_concept_id= `${device_concept_id}`
            } else {
                stringdevice_concept_id = ''
            }

            let device_concept_name = ''
            let stringdevice_concept_name = ''

            if (element[1].device.concept_name!== '' && element[1].device.concept_name !== undefined) {
                if (element[1].device.concept_name !== undefined) {
                    device_concept_name = element[1].device.concept_name
                }
                stringdevice_concept_name= `${device_concept_name}`
            } else {
                stringdevice_concept_name = ''
            }

            let device_domain_id = ''
            let stringdevice_domain_id = ''

            if (element[1].device.domain_id!== '' && element[1].device.domain_id !== undefined) {
                if (element[1].device.domain_id !== undefined) {
                    device_domain_id = element[1].device.domain_id
                }
                stringdevice_domain_id = `${device_domain_id}`
            } else {
                stringdevice_domain_id = ''
            }

            let device_vocabulary_id = ''
            let stringdevice_vocabulary_id = ''

            if (element[1].device_vocabulary_id!== '' && element[1].device.vocabulary_id !== undefined) {
                if (element[1].device.vocabulary_id !== undefined) {
                    device_vocabulary_id = element[1].device.vocabulary_id
                }
                stringdevice_vocabulary_id = `${device_vocabulary_id}`
            } else {
                stringdevice_vocabulary_id = ''
            }
 
            let device_concept_class_id = ''
            let stringdevice_concept_class_id = ''

            if (element[1].device.concept_class_id!== '' && element[1].device.concept_class_id !== undefined) {
                if (element[1].device.concept_class_id !== undefined) {
                    device_concept_class_id = element[1].device.concept_class_id
                }
                stringdevice_concept_class_id = `${device_concept_class_id}`
            } else {
                stringdevice_concept_class_id = ''
            }

            let device_standard_concept = ''
            let stringdevice_standard_concept = ''

            if (element[1].device.standard_concept!== '' && element[1].device.standard_concept !== undefined) {
                if (element[1].device.standard_concept !== undefined) {
                    device_standard_concept = element[1].device.standard_concept
                }
                stringdevice_standard_concept = `${device_standard_concept}`
            } else {
                stringdevice_standard_concept = ''
            }

            let device_concept_code = ''
            let stringdevice_concept_code = ''

            if (element[1].device.concept_code!== '' && element[1].device.concept_code !== undefined) {
                if (element[1].device.concept_code !== undefined) {
                    device_concept_code = element[1].device.concept_code
                }
                stringdevice_concept_code = `${device_concept_code}`
            } else {
                stringdevice_concept_code = ''
            }

            let device_exposure_start_date = ''
            let stringdevice_exposure_start_date = ''

            if (element[1].device_exposure_start_date!== '' && element[1].device_exposure_start_date !== undefined) {
                if (element[1].device_exposure_start_date !== undefined) {
                    device_exposure_start_date = element[1].device_exposure_start_date
                }
                stringdevice_exposure_start_date= `${device_exposure_start_date}`
            } else {
                stringdevice_exposure_start_date = ''
            }

            let device_exposure_end_date = ''
            let stringdevice_exposure_end_date = ''

            if (element[1].device_exposure_end_date!== '' && element[1].device_exposure_end_date !== undefined) {
                if (element[1].device_exposure_end_date !== undefined) {
                    device_exposure_end_date = element[1].device_exposure_end_date
                }
                stringdevice_exposure_end_date= `${device_exposure_end_date}`
            } else {
                stringdevice_exposure_end_date = ''
            }

            let device_type_concept_id = ''
            let stringdevice_type_concept_id = ''

            if (element[1].device_type.concept_id !== '' && element[1].device_type.concept_id !== undefined) {
                if (element[1].device_type.concept_id !== undefined) {
                    device_type_concept_id = element[1].device_type.concept_id
                }

                stringdevice_type_concept_id= `${device_type_concept_id}`
            } else {
                stringdevice_type_concept_id = ''
            }

            let device_type_concept_name = ''
            let stringdevice_type_concept_name = ''

            if (element[1].device_type.concept_name !== '' && element[1].device_type.concept_name !== undefined) {
                if (element[1].device_type.concept_name !== undefined) {
                    device_type_concept_name = element[1].device_type.concept_name
                }

                stringdevice_type_concept_name= `${device_type_concept_name}`
            } else {
                stringdevice_type_concept_name = ''
            }

            let device_type_domain_id = ''
            let stringdevice_type_domain_id = ''

            if (element[1].device_type.domain_id !== '' && element[1].device_type.domain_id !== undefined) {
                if (element[1].device_type.domain_id !== undefined) {
                    device_type_domain_id = element[1].device_type.domain_id
                }

                stringdevice_type_domain_id= `${device_type_domain_id}`
            } else {
                stringdevice_type_domain_id = ''
            }

            let device_type_vocabulary_id = ''
            let stringdevice_type_vocabulary_id = ''

            if (element[1].device_type.vocabulary_id !== '' && element[1].device_type.vocabulary_id !== undefined) {
                if (element[1].device_type.vocabulary_id !== undefined) {
                    device_type_vocabulary_id = element[1].device_type.vocabulary_id
                }

                stringdevice_type_vocabulary_id= `${device_type_vocabulary_id}`
            } else {
                stringdevice_type_vocabulary_id = ''
            }

            let device_type_concept_class_id = ''
            let stringdevice_type_concept_class_id = ''

            if (element[1].device_type.concept_class_id !== '' && element[1].device_type.concept_class_id !== undefined) {
                if (element[1].device_type.concept_class_id !== undefined) {
                    device_type_concept_class_id = element[1].device_type.concept_class_id
                }

                stringdevice_type_concept_class_id= `${device_type_concept_class_id}`
            } else {
                stringdevice_type_concept_class_id = ''
            }

            let device_type_standard_concept = ''
            let stringdevice_type_standard_concept = ''

            if (element[1].device_type.standard_concept !== '' && element[1].device_type.standard_concept !== undefined) {
                if (element[1].device_type.standard_concept !== undefined) {
                    device_type_standard_concept = element[1].device_type.standard_concept
                }

                stringdevice_type_standard_concept= `${device_type_standard_concept}`
            } else {
                stringdevice_type_standard_concept = ''
            }

            let device_type_concept_code = ''
            let stringdevice_type_concept_code = ''

            if (element[1].device_type.concept_code !== '' && element[1].device_type.concept_code !== undefined) {
                if (element[1].device_type.concept_code !== undefined) {
                    device_type_concept_code = element[1].device_type.concept_code
                }

                stringdevice_type_concept_code= `${device_type_concept_code}`
            } else {
                stringdevice_type_concept_code = ''
            }

            rows.push({ id: index, 
                Beacon: element[0], 
                person_id: stringperson_id,
                imaging_occurrence_id: stringimaging_occurrence_id,
                device_concept_class_id: stringdevice_concept_class_id,
                device_concept_code: stringdevice_type_concept_code,
                device_concept_id: stringdevice_concept_id,
                device_concept_name: stringdevice_concept_name,
                device_domain_id: stringdevice_domain_id,
                device_exposure_end_date: stringdevice_exposure_end_date,
                device_exposure_id: stringdevice_exposure_id,
                device_exposure_start_date: stringdevice_exposure_start_date,
                device_standard_concept: stringdevice_standard_concept,
                device_type_concept_class_id: stringdevice_type_concept_class_id,
                device_type_concept_code: stringdevice_type_concept_code,
                device_type_concept_id: stringdevice_type_concept_id,
                device_type_concept_name: stringdevice_type_concept_name,
                device_type_domain_id: stringdevice_type_domain_id,
                device_type_standard_concept: stringdevice_type_standard_concept,
                device_type_vocabulary_id: stringdevice_type_vocabulary_id,
                device_vocabulary_id: stringdevice_vocabulary_id })

        }

    })

    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                device_concept_class_id: false,
                device_concept_code: false,
                device_domain_id: false,
                device_exposure_end_date: false,
                device_exposure_start_date: false,
                device_standard_concept: false,
                device_type_concept_class_id: false,
                device_type_concept_code: false,
                device_type_domain_id: false,
                device_type_standard_concept: false

              },
            },
          }}
        getRowHeight={() => 'auto'}


            columns={columns}
            rows={rows}
            

        />
    )

}


export default TableResultsDevices;