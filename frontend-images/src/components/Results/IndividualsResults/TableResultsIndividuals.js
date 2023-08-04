
import './TableResultsIndividuals.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsIndividuals(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'hola' },
        { field: 'person_id', headerName: 'person_id', flex: 1, headerClassName: 'hola' },
        { field: 'sex_concept_class_id', headerName: 'sex_concept_class_id', flex: 1, headerClassName: 'hola' },
        { field: 'sex_concept_code', headerName: 'sex_concept_code', flex: 1, headerClassName: 'hola' },
        { field: 'sex_concept_id', headerName: 'sex_concept_id', flex: 1, headerClassName: 'hola' },
        { field: 'sex_concept_name', headerName: 'sex_concept_name', flex: 1, headerClassName: 'hola' },
        { field: 'sex_domain_id', headerName: 'sex_domain_id', flex: 1, headerClassName: 'hola' },
        { field: 'sex_standard_concept', headerName: 'sex_standard_concept', flex: 1, headerClassName: 'hola' },
        { field: 'sex_vocabulary_id', headerName: 'sex_vocabulary_id', flex: 1, headerClassName: 'hola' },
        { field: 'birth_datetime', headerName: 'birth_datetime', flex: 1, headerClassName: 'hola' },
        { field: 'birth_day', headerName: 'birth_day', flex: 1, headerClassName: 'hola' },
        { field: 'birth_month', headerName: 'birth_month', flex: 1, headerClassName: 'hola' },
        { field: 'birth_year', headerName: 'birth_year', flex: 1, headerClassName: 'hola' },
        { field: 'ethnicity_concept_class_id', headerName: 'ethnicity_concept_class_id', flex: 1, headerClassName: 'hola' },
        { field: 'ethnicity_concept_code', headerName: 'ethnicity_concept_code', flex: 1, headerClassName: 'hola' },
        { field: 'ethnicity_concept_id', headerName: 'ethnicity_concept_id', flex: 1, headerClassName: 'hola' },
        { field: 'ethnicity_concept_name', headerName: 'ethnicity_concept_name', flex: 1, headerClassName: 'hola' },
        { field: 'ethnicity_domain_id', headerName: 'ethnicity_domain_id', flex: 1, headerClassName: 'hola' },
        { field: 'ethnicity_standard_concept', headerName: 'ethnicity_standard_concept', flex: 1, headerClassName: 'hola' },
        { field: 'ethnicity_vocabulary_id', headerName: 'ethnicity_vocabulary_id', flex: 1, headerClassName: 'hola' }
    ]

    console.log(props.results)
    const rows = []
    const ids = []
    props.results.forEach((element, index) => {
        console.log(element[0])
            
        if (element[1] !== undefined) {
            console.log(element[0])
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


            let sex_concept_name = ''
            let stringsex_concept_name = ''

            if (element[1].sex.concept_name !== '' && element[1].sex.concept_name !== undefined) {
                if (element[1].sex.concept_name !== undefined) {
                    sex_concept_name = element[1].sex.concept_name
                }

                stringsex_concept_name = `${sex_concept_name}`
            } else {
                stringsex_concept_name = ''
            }

            let sex_domain_id = ''
            let stringsex_domain_id = ''

            if (element[1].sex.domain_id !== '' && element[1].sex.domain_id !== undefined) {
                if (element[1].sex.domain_id !== undefined) {
                    sex_domain_id= element[1].sex.domain_id
                }

                stringsex_domain_id = `${sex_domain_id}`
            } else {
                stringsex_domain_id = ''
            }

            let sex_vocabulary_id = ''
            let stringsex_vocabulary_id  = ''

            if (element[1].sex.vocabulary_id  !== '' && element[1].sex.vocabulary_id  !== undefined) {
                if (element[1].sex.vocabulary_id  !== undefined) {
                    sex_vocabulary_id = element[1].sex.vocabulary_id 
                }

                stringsex_vocabulary_id  = `${sex_vocabulary_id}`
            } else {
                stringsex_vocabulary_id  = ''
            }

            let sex_concept_class_id = ''
            let stringsex_concept_class_id  = ''

            if (element[1].sex.concept_class_id  !== '' && element[1].sex.concept_class_id  !== undefined) {
                if (element[1].sex.concept_class_id  !== undefined) {
                    sex_concept_class_id = element[1].sex.concept_class_id 
                }

                stringsex_concept_class_id = `${sex_concept_class_id}`
            } else {
                stringsex_concept_class_id  = ''
            }

            let sex_standard_concept = ''
            let stringsex_standard_concept  = ''

            if (element[1].sex.standard_concept  !== '' && element[1].sex.standard_concept  !== undefined) {
                if (element[1].sex.standard_concept  !== undefined) {
                    sex_standard_concept = element[1].sex.standard_concept 
                }

                stringsex_standard_concept = `${sex_standard_concept}`
            } else {
                stringsex_standard_concept  = ''
            }

            let sex_concept_code = ''
            let stringsex_concept_code  = ''

            if (element[1].sex.concept_code  !== '' && element[1].sex.concept_code  !== undefined) {
                if (element[1].sex.concept_code  !== undefined) {
                    sex_concept_code = element[1].sex.concept_code 
                }

                stringsex_concept_code = `${sex_concept_code}`
            } else {
                stringsex_concept_code  = ''
            }

            let birth_year = ''
            let stringbirth_year = ''

            if (element[1].birth.year !== '' && element[1].birth.year !== undefined) {
                if (element[1].birth.year !== undefined) {
                    birth_year = element[1].birth.year
                }

                stringbirth_year = `${birth_year}`
            } else {
                stringbirth_year = ''
            }

            let birth_month = ''
            let stringbirth_month = ''

            if (element[1].birth.month !== '' && element[1].birth.month !== undefined) {
                if (element[1].birth.month !== undefined) {
                    birth_month = element[1].birth.month
                }

                stringbirth_month = `${birth_month}`
            } else {
                stringbirth_month = ''
            }

            let birth_day = ''
            let stringbirth_day  = ''

            if (element[1].birth.day  !== '' && element[1].birth.day  !== undefined) {
                if (element[1].birth.day  !== undefined) {
                    birth_day  = element[1].birth.day 
                }

                stringbirth_day  = `${birth_day}`
            } else {
                stringbirth_day  = ''
            }

            let birth_datetime = ''
            let stringbirth_datetime  = ''

            if (element[1].birth.datetime  !== '' && element[1].birth.datetime  !== undefined) {
                if (element[1].birth.datetime  !== undefined) {
                    birth_datetime  = element[1].birth.datetime 
                }

                stringbirth_datetime = `${birth_datetime}`
            } else {
                stringbirth_datetime  = ''
            }

            let ethnicity_concept_id = ''
            let stringethnicity_concept_id = ''

            if (element[1].ethnicity.concept_id !== '' && element[1].ethnicity.concept_id !== undefined) {
                if (element[1].ethnicity.concept_id !== undefined) {
                    ethnicity_concept_id = element[1].ethnicity.concept_id
                }

                stringethnicity_concept_id = `${ethnicity_concept_id}`
            } else {
                stringethnicity_concept_id = ''
            }


            let ethnicity_concept_name = ''
            let stringethnicity_concept_name = ''

            if (element[1].ethnicity.concept_name !== '' && element[1].ethnicity.concept_name !== undefined) {
                if (element[1].ethnicity.concept_name !== undefined) {
                    ethnicity_concept_name = element[1].ethnicity.concept_name
                }

                stringethnicity_concept_name = `${ethnicity_concept_name}`
            } else {
                stringethnicity_concept_name = ''
            }

            let ethnicity_domain_id = ''
            let stringethnicity_domain_id = ''

            if (element[1].ethnicity.domain_id !== '' && element[1].ethnicity.domain_id !== undefined) {
                if (element[1].ethnicity.domain_id !== undefined) {
                    ethnicity_domain_id= element[1].ethnicity.domain_id
                }

                stringethnicity_domain_id = `${ethnicity_domain_id}`
            } else {
                stringethnicity_domain_id = ''
            }

            let ethnicity_vocabulary_id = ''
            let stringethnicity_vocabulary_id  = ''

            if (element[1].ethnicity.vocabulary_id  !== '' && element[1].ethnicity.vocabulary_id  !== undefined) {
                if (element[1].ethnicity.vocabulary_id  !== undefined) {
                    ethnicity_vocabulary_id = element[1].ethnicity.vocabulary_id 
                }

                stringethnicity_vocabulary_id  = `${ethnicity_vocabulary_id}`
            } else {
                stringethnicity_vocabulary_id  = ''
            }

            let ethnicity_concept_class_id = ''
            let stringethnicity_concept_class_id  = ''

            if (element[1].ethnicity.concept_class_id  !== '' && element[1].ethnicity.concept_class_id  !== undefined) {
                if (element[1].ethnicity.concept_class_id  !== undefined) {
                    ethnicity_concept_class_id = element[1].ethnicity.concept_class_id 
                }

                stringethnicity_concept_class_id = `${ethnicity_concept_class_id}`
            } else {
                stringethnicity_concept_class_id  = ''
            }

            let ethnicity_standard_concept = ''
            let stringethnicity_standard_concept  = ''

            if (element[1].ethnicity.standard_concept  !== '' && element[1].ethnicity.standard_concept  !== undefined) {
                if (element[1].ethnicity.standard_concept  !== undefined) {
                    ethnicity_standard_concept = element[1].ethnicity.standard_concept 
                }

                stringethnicity_standard_concept = `${ethnicity_standard_concept}`
            } else {
                stringethnicity_standard_concept  = ''
            }

            let ethnicity_concept_code = ''
            let stringethnicity_concept_code  = ''

            if (element[1].ethnicity.concept_code  !== '' && element[1].ethnicity.concept_code  !== undefined) {
                if (element[1].ethnicity.concept_code  !== undefined) {
                    ethnicity_concept_code = element[1].ethnicity.concept_code 
                }

                stringethnicity_concept_code = `${ethnicity_concept_code}`
            } else {
                stringethnicity_concept_code  = ''
            }

            rows.push({ id: index, 
                Beacon: element[0], 
                person_id: stringperson_id,
                sex_concept_class_id: stringsex_concept_class_id,
                sex_concept_code: stringsex_concept_code,
                sex_concept_id: stringsex_concept_id,
                sex_concept_name: stringsex_concept_name,
                sex_domain_id: stringsex_domain_id,
                sex_standard_concept: stringsex_standard_concept,
                sex_vocabulary_id: stringsex_vocabulary_id,
                birth_datetime: stringbirth_datetime,
                birth_day: stringbirth_day,
                birth_month: stringbirth_month,
                birth_year: stringbirth_year,
                ethnicity_concept_class_id: stringethnicity_concept_class_id,
                ethnicity_concept_code: stringethnicity_concept_code,
                ethnicity_concept_id: stringethnicity_concept_id,
                ethnicity_concept_name: stringethnicity_concept_name,
                ethnicity_domain_id: stringethnicity_domain_id,
                ethnicity_standard_concept: stringethnicity_standard_concept,
                ethnicity_vocabulary_id: stringethnicity_vocabulary_id  })

        }

    })




    return (
        <DataGrid 

        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                sex_concept_id: false,
                sex_concept_name: false,
                sex_domain_id: false,
                sex_standard_concept: false,
                sex_vocabulary_id: false,
                birth_datetime: false,
                birth_day: false,
                birth_month: false,
                birth_year: false,
                ethnicity_concept_class_id: false,
                ethnicity_concept_code: false,
                ethnicity_concept_id: false,
                ethnicity_concept_name: false,
                ethnicity_domain_id: false,
                ethnicity_standard_concept: false,
                ethnicity_vocabulary_id: false
                
              },
            },
          }}
        getRowHeight={() => 'auto' }


            columns={columns}
            rows={rows}
            readOnly={true}

        />
    )

}


export default TableResultsIndividuals;

