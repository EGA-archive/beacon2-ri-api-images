
import './TableResultsIndividuals.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TableResultsIndividuals(props) {

    const columns = [
        { field: 'id', headerName: 'Row', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PatientID', headerName: 'PatientID', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'AgeOfOnset', headerName: 'AgeOfOnset', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'DateOfBirth_DayOfBirth', headerName: 'DateOfBirth_DayOfBirth', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'DateOfBirth_MonthOfBirth', headerName: 'DateOfBirth_MonthOfBirth', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'DateOfBirth_YearOfBirth', headerName: 'DateOfBirth_YearOfBirth', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'Sex', headerName: 'Sex', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourIdentificationCode', headerName: 'TumourIdentificationCode', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'GeographicResidence', headerName: 'GeographicResidence', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'HospitalOfDiagnosis', headerName: 'HospitalOfDiagnosis', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'IncidenceDate_IncidenceDay', headerName: 'IncidenceDate_IncidenceDay', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'IncidenceDate_IncidenceMonth', headerName: 'IncidenceDate_IncidenceMonth', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'IncidenceDate_IncidenceYear', headerName: 'IncidenceDate_IncidenceYear', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'BasisOfDiagnosis', headerName: 'BasisOfDiagnosis', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourTopography', headerName: 'TumourTopography', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourMorphology', headerName: 'TumourMorphology', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourBehaviour', headerName: 'TumourBehaviour', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourGrade', headerName: 'TumourGrade', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourLaterality', headerName: 'TumourLaterality', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrognosticTumourFactors', headerName: 'PrognosticTumourFactors', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TnmFinding_Clinical_T_category', headerName: 'TumourStage_TnmFinding_Clinical_T_category', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TnmFinding_Clinical_N_category', headerName: 'TumourStage_TnmFinding_Clinical_N_category', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TnmFinding_Pathological_M_category', headerName: 'TumourStage_TnmFinding_Pathological_M_category', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TnmFinding_Pathological_T_category', headerName: 'TumourStage_TnmFinding_Pathological_T_category', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TnmFinding_Pathological_N_category', headerName: 'TumourStage_TnmFinding_Pathological_N_category', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TnmFinding_Pathological_M_category', headerName: 'TumourStage_TnmFinding_Pathological_M_category', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TnmFinding_TnmEdition', headerName: 'AgeTumourStage_TnmFinding_TnmEditionOfOnset', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TorontoChildhoodCancerStage_Tier1', headerName: 'TumourStage_TorontoChildhoodCancerStage_Tier1', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_TorontoChildhoodCancerStage_Tier2', headerName: 'TumourStage_TorontoChildhoodCancerStage_Tier2', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_EssentialTnmStage', headerName: 'TumourStage_EssentialTnmStage', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_AnnArborStagingSystem', headerName: 'TumourStage_AnnArborStagingSystem', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_LuganoStagingSystem', headerName: 'TumourStage_LuganoStagingSystem', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_DukesStage', headerName: 'TumourStage_DukesStage', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_SummaryExtentOfDisease', headerName: 'TumourStage_SummaryExtentOfDisease', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'TumourStage_FigoStage', headerName: 'TumourStage_FigoStage', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_Surgery', headerName: 'PrimaryTreatment_Surgery', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_Chemotherapy', headerName: 'PrimaryTreatment_Chemotherapy', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_HormoneTherapy', headerName: 'PrimaryTreatment_HormoneTherapy', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_Immunotherapy', headerName: 'PrimaryTreatment_Immunotherapy', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_Other', headerName: 'PrimaryTreatment_Other', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_Radiotherapy', headerName: 'PrimaryTreatment_Radiotherapy', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_StemCellTransplantation', headerName: 'PrimaryTreatment_StemCellTransplantation', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'PrimaryTreatment_TargetedTherapy', headerName: 'PrimaryTreatment_TargetedTherapy', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'HospitalOfTreatment', headerName: 'HospitalOfTreatment', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'DateOfRecurrence_DayOfRecurrence', headerName: 'DateOfRecurrence_DayOfRecurrence', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'DateOfRecurrence_MonthOfRecurrence', headerName: 'DateOfRecurrence_MonthOfRecurrence', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'DateOfRecurrence_YearOfRecurrence', headerName: 'DateOfRecurrence_YearOfRecurrence', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'SiteOfRecurrence', headerName: 'AgeOfOnset', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'VitalStatus', headerName: 'PrimaryTreatment_Radiotherapy', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'VitalStatusDate_DayVitalStatus', headerName: 'PrimaryTreatment_StemCellTransplantation', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'VitalStatusDate_MonthVitalStatus', headerName: 'PrimaryTreatment_TargetedTherapy', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'VitalStatusDate_YearVitalStatus', headerName: 'HospitalOfTreatment', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'SurvivalDuration', headerName: 'DateOfRecurrence_DayOfRecurrence', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'CauseOfDeath', headerName: 'DateOfRecurrence_MonthOfRecurrence', flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'CauseOfDeath_ICDedition', headerName: 'DateOfRecurrence_YearOfRecurrence', flex: 1, headerClassName: 'super-app-theme--header' }
    ]

    console.log(props.results)
    const rows = []
    const ids = []
    props.results.forEach((element, index) => {
        console.log(element[0])
            
        if (element[1] !== undefined) {
            console.log(element[0])
            let PatientID = ''
            let stringPatientID = ''

            if (element[1].PatientID !== '' && element[1].PatientID !== undefined) {
                if (element[1].PatientID !== undefined) {
                    PatientID = element[1].PatientID
                }
                stringPatientID = `${PatientID}`
            } else {
                stringPatientID = ''
            }

            let AgeOfOnset = ''
            let stringAgeOfOnset = ''

            if (element[1].AgeOfOnset !== '' && element[1].AgeOfOnset !== undefined) {
                if (element[1].AgeOfOnset !== undefined) {
                    AgeOfOnset = element[1].AgeOfOnset
                }

                stringAgeOfOnset = `${AgeOfOnset}`
            } else {
                stringAgeOfOnset = ''
            }
 
            let DateOfBirth_DayOfBirth = ''
            let stringDateOfBirth_DayOfBirth = ''

            if (element[1].DateOfBirth.DayOfBirth !== '' && element[1].DateOfBirth.DayOfBirth !== undefined) {
                if (element[1].DateOfBirth.DayOfBirth !== undefined) {
                    DateOfBirth_DayOfBirth = element[1].DateOfBirth.DayOfBirth
                }

                stringDateOfBirth_DayOfBirth = `${DateOfBirth_DayOfBirth}`
            } else {
                stringDateOfBirth_DayOfBirth = ''
            }

            let DateOfBirth_MonthOfBirth = ''
            let stringDateOfBirth_MonthOfBirth = ''

            if (element[1].DateOfBirth.MonthOfBirth !== '' && element[1].DateOfBirth.MonthOfBirth !== undefined) {
                if (element[1].DateOfBirth.MonthOfBirth !== undefined) {
                    DateOfBirth_MonthOfBirth = element[1].DateOfBirth.MonthOfBirth
                }

                stringDateOfBirth_MonthOfBirth = `${DateOfBirth_MonthOfBirth}`
            } else {
                stringDateOfBirth_MonthOfBirth = ''
            }

            let DateOfBirth_YearOfBirth = ''
            let stringDateOfBirth_YearOfBirth = ''

            if (element[1].DateOfBirth.YearOfBirth !== '' && element[1].DateOfBirth.YearOfBirth !== undefined) {
                if (element[1].DateOfBirth.YearOfBirth !== undefined) {
                    DateOfBirth_YearOfBirth = element[1].DateOfBirth.YearOfBirth
                }

                stringDateOfBirth_YearOfBirth = `${DateOfBirth_YearOfBirth}`
            } else {
                stringDateOfBirth_YearOfBirth = ''}


            let Sex = ''
            let stringSex = ''

            if (element[1].Sex !== '' && element[1].Sex !== undefined) {
                if (element[1].Sex !== undefined) {
                    Sex = element[1].Sex
                }

                stringSex = `${Sex}`
            } else {
                stringSex = ''
            }

            let TumourIdentificationCode = ''
            let stringTumourIdentificationCode = ''

            if (element[1].TumourIdentificationCode !== '' && element[1].TumourIdentificationCode !== undefined) {
                if (element[1].TumourIdentificationCode !== undefined) {
                    TumourIdentificationCode = element[1].TumourIdentificationCode
                }

                stringTumourIdentificationCode = `${TumourIdentificationCode}`
            } else {
                stringTumourIdentificationCode = ''
            }

            let GeographicResidence = ''
            let stringGeographicResidence = ''

            if (element[1].GeographicResidence !== '' && element[1].GeographicResidence !== undefined) {
                if (element[1].GeographicResidence !== undefined) {
                    GeographicResidence = element[1].GeographicResidence
                }

                stringGeographicResidence = `${GeographicResidence}`
            } else {
                stringGeographicResidence = ''
            }

            let HospitalOfDiagnosis = ''
            let stringHospitalOfDiagnosis = ''

            if (element[1].HospitalOfDiagnosis !== '' && element[1].HospitalOfDiagnosis !== undefined) {
                if (element[1].HospitalOfDiagnosis !== undefined) {
                    HospitalOfDiagnosis= element[1].HospitalOfDiagnosis
                }

                stringHospitalOfDiagnosis = `${HospitalOfDiagnosis}`
            } else {
                stringHospitalOfDiagnosis = ''
            }

            let IncidenceDate_IncidenceDay = ''
            let stringIncidenceDate_IncidenceDay = ''

            if (element[1].IncidenceDate.IncidenceDay !== '' && element[1].IncidenceDate.IncidenceDay !== undefined) {
                if (element[1].IncidenceDate.IncidenceDay !== undefined) {
                    IncidenceDate_IncidenceDay= element[1].IncidenceDate.IncidenceDay
                }

                stringIncidenceDate_IncidenceDay = `${IncidenceDate_IncidenceDay}`
            } else {
                stringIncidenceDate_IncidenceDay = ''
            }

            let IncidenceDate_IncidenceMonth = ''
            let stringIncidenceDate_IncidenceMonth = ''

            if (element[1].IncidenceDate.IncidenceMonth !== '' && element[1].IncidenceDate.IncidenceMonth !== undefined) {
                if (element[1].IncidenceDate.IncidenceMonth !== undefined) {
                    IncidenceDate_IncidenceMonth= element[1].IncidenceDate.IncidenceMonth
                }

                stringIncidenceDate_IncidenceMonth = `${IncidenceDate_IncidenceMonth}`
            } else {
                stringIncidenceDate_IncidenceMonth = ''
            }

            let IncidenceDate_IncidenceYear = ''
            let stringIncidenceDate_IncidenceYear = ''

            if (element[1].IncidenceDate.IncidenceYear !== '' && element[1].IncidenceDate.IncidenceYear !== undefined) {
                if (element[1].IncidenceDate.IncidenceYear !== undefined) {
                    IncidenceDate_IncidenceYear= element[1].IncidenceDate.IncidenceYear
                }

                stringIncidenceDate_IncidenceYear = `${IncidenceDate_IncidenceYear}`
            } else {
                stringIncidenceDate_IncidenceYear = ''
            }

            let BasisOfDiagnosis = ''
            let stringBasisOfDiagnosis = ''

            if (element[1].BasisOfDiagnosis !== '' && element[1].BasisOfDiagnosis !== undefined) {
                if (element[1].BasisOfDiagnosis !== undefined) {
                    BasisOfDiagnosis= element[1].BasisOfDiagnosis
                }

                stringBasisOfDiagnosis = `${BasisOfDiagnosis}`
            } else {
                stringBasisOfDiagnosis = ''
            }

            let TumourTopography= ''
            let stringTumourTopography = ''

            if (element[1].TumourTopography !== '' && element[1].TumourTopography !== undefined) {
                if (element[1].TumourTopography !== undefined) {
                    TumourTopography= element[1].TumourTopography
                }

                stringTumourTopography = `${TumourTopography}`
            } else {
                stringTumourTopography = ''
            }

            let TumourMorphology= ''
            let stringTumourMorphology = ''

            if (element[1].TumourMorphology !== '' && element[1].TumourMorphology !== undefined) {
                if (element[1].TumourMorphology !== undefined) {
                    TumourMorphology= element[1].TumourMorphology
                }

                stringTumourMorphology = `${TumourMorphology}`
            } else {
                stringTumourMorphology = ''
            }

            let TumourBehaviour= ''
            let stringTumourBehaviour = ''

            if (element[1].TumourBehaviour !== '' && element[1].TumourBehaviour !== undefined) {
                if (element[1].TumourBehaviour !== undefined) {
                    TumourBehaviour= element[1].TumourBehaviour
                }

                stringTumourBehaviour = `${TumourBehaviour}`
            } else {
                stringTumourBehaviour = ''
            }

            let TumourGrade= ''
            let stringTumourGrade = ''

            if (element[1].TumourGrade !== '' && element[1].TumourGrade !== undefined) {
                if (element[1].TumourGrade !== undefined) {
                    TumourGrade= element[1].TumourGrade
                }

                stringTumourGrade = `${TumourGrade}`
            } else {
                stringTumourGrade = ''
            }

            let TumourLaterality= ''
            let stringTumourLaterality = ''

            if (element[1].TumourLaterality !== '' && element[1].TumourLaterality !== undefined) {
                if (element[1].TumourLaterality !== undefined) {
                    TumourLaterality= element[1].TumourLaterality
                }

                stringTumourLaterality = `${TumourLaterality}`
            } else {
                stringTumourLaterality = ''
            }

            let TumourStage_TnmFinding_TnmEdition= ''
            let stringTumourStage_TnmFinding_TnmEdition = ''

            if (element[1].TumourStage.TnmFinding.TnmEdition !== '' && element[1].TumourStage.TnmFinding.TnmEdition !== undefined) {
                if (element[1].TumourStage.TnmFinding.TnmEdition !== undefined) {
                    TumourStage_TnmFinding_TnmEdition= element[1].TumourStage.TnmFinding.TnmEdition
                }

                stringTumourStage_TnmFinding_TnmEdition = `${TumourStage.TnmFinding.TnmEdition}`
            } else {
                stringTumourStage_TnmFinding_TnmEdition = ''
            }


            let TumourStage_TnmFinding_Clinical_T_category= ''
            let stringTumourStage_TnmFinding_Clinical_T_category = ''

            if (element[1].TumourStage.TnmFinding.Clinical_T_category !== '' && element[1].TumourStage.TnmFinding.Clinical_T_category !== undefined) {
                if (element[1].TumourStage.TnmFinding.Clinical_T_category !== undefined) {
                    TumourStage_TnmFinding_Clinical_T_category= element[1].TumourStage.TnmFinding.Clinical_T_category
                }

                stringTumourStage_TnmFinding_Clinical_T_category = `${TumourStage.TnmFinding.Clinical_T_category}`
            } else {
                stringTumourStage_TnmFinding_Clinical_T_category = ''
            }

            let TumourStage_TnmFinding_Pathological_T_category= ''
            let stringTumourStage_TnmFinding_Pathological_T_category= ''

            if (element[1].TumourStage.TnmFinding.Pathological_T_category !== '' && element[1].TumourStage.TnmFinding.Pathological_T_category !== undefined) {
                if (element[1].TumourStage.TnmFinding.Pathological_T_category !== undefined) {
                    TumourStage_TnmFinding_Pathological_T_category= element[1].TumourStage.TnmFinding.Pathological_T_category
                }

                stringTumourStage_TnmFinding_Pathological_T_category = `${TumourStage.TnmFinding.Pathological_T_category}`
            } else {
                stringTumourStage_TnmFinding_Pathological_T_category = ''
            }

            let TumourStage_TnmFinding_Clinical_N_category= ''
            let stringTumourStage_TnmFinding_Clinical_N_category= ''

            if (element[1].TumourStage.TnmFinding.Clinical_N_category !== '' && element[1].TumourStage.TnmFinding.Clinical_N_category !== undefined) {
                if (element[1].TumourStage.TnmFinding.Clinical_N_category !== undefined) {
                    TumourStage_TnmFinding_Clinical_N_category= element[1].TumourStage.TnmFinding.Clinical_N_category
                }

                stringTumourStage_TnmFinding_Clinical_N_category = `${TumourStage.TnmFinding.Clinical_N_category}`
            } else {
                stringTumourStage_TnmFinding_Clinical_N_category = ''
            }

            let TumourStage_TnmFinding_Pathological_N_category= ''
            let stringTumourStage_TnmFinding_Pathological_N_category= ''

            if (element[1].TumourStage.TnmFinding.Pathological_N_category !== '' && element[1].TumourStage.TnmFinding.Pathological_N_category !== undefined) {
                if (element[1].TumourStage.TnmFinding.Pathological_N_category !== undefined) {
                    TumourStage_TnmFinding_Pathological_N_category= element[1].TumourStage.TnmFinding.Pathological_N_category
                }

                stringTumourStage_TnmFinding_Pathological_N_category = `${TumourStage.TnmFinding.Pathological_N_category}`
            } else {
                stringTumourStage_TnmFinding_Pathological_N_category = ''
            }

            let TumourStage_TnmFinding_Clinical_M_category= ''
            let stringTumourStage_TnmFinding_Clinical_M_category= ''

            if (element[1].TumourStage.TnmFinding.Clinical_M_category !== '' && element[1].TumourStage.TnmFinding.Clinical_M_category !== undefined) {
                if (element[1].TumourStage.TnmFinding.Clinical_M_category !== undefined) {
                    TumourStage_TnmFinding_Clinical_M_category= element[1].TumourStage.TnmFinding.Clinical_M_category
                }

                stringTumourStage_TnmFinding_Clinical_M_category = `${TumourStage.TnmFinding.Clinical_M_category}`
            } else {
                stringTumourStage_TnmFinding_Clinical_M_category = ''
            }

            let TumourStage_TnmFinding_Pathological_M_category= ''
            let stringTumourStage_TnmFinding_Pathological_M_category= ''

            if (element[1].TumourStage.TnmFinding.Pathological_M_category !== '' && element[1].TumourStage.TnmFinding.Pathological_M_category !== undefined) {
                if (element[1].TumourStage.TnmFinding.Pathological_M_category !== undefined) {
                    TumourStage_TnmFinding_Pathological_M_category= element[1].TumourStage.TnmFinding.Pathological_M_category
                }

                stringTumourStage_TnmFinding_Pathological_M_category = `${TumourStage.TnmFinding.Pathological_M_category}`
            } else {
                stringTumourStage_TnmFinding_Pathological_M_category = ''
            }

            let TumourStage_TnmFinding_TnmStage= ''
            let stringTumourStage_TnmFinding_TnmStage= ''

            if (element[1].TumourStage.TnmFinding.TnmStage !== '' && element[1].TumourStage.TnmFinding.TnmStage !== undefined) {
                if (element[1].TumourStage.TnmFinding.TnmStage !== undefined) {
                    TumourStage_TnmFinding_TnmStage= element[1].TumourStage.TnmFinding.TnmStage
                }

                stringTumourStage_TnmFinding_TnmStage = `${TumourStage.TnmFinding.TnmStage}`
            } else {
                stringTumourStage_TnmFinding_TnmStage = ''
            }

            let TumourStage_TorontoChildhoodCancerStage_Tier1= ''
            let stringTumourStage_TorontoChildhoodCancerStage_Tier1= ''

            if (element[1].TumourStage.TorontoChildhoodCancerStage_Tier1 !== '' && element[1].TumourStage.TorontoChildhoodCancerStage_Tier1 !== undefined) {
                if (element[1].TumourStage.TorontoChildhoodCancerStage_Tier1 !== undefined) {
                    TumourStage_TorontoChildhoodCancerStage_Tier1 = element[1].TumourStage.TorontoChildhoodCancerStage_Tier1
                }

                stringTumourStage_TorontoChildhoodCancerStage_Tier1 = `${TumourStage.TorontoChildhoodCancerStage_Tier1}`
            } else {
                stringTumourStage_TorontoChildhoodCancerStage_Tier1 = ''
            }

            let TumourStage_TorontoChildhoodCancerStage_Tier2= ''
            let stringTumourStage_TorontoChildhoodCancerStage_Tier2= ''

            if (element[1].TumourStage.TorontoChildhoodCancerStage_Tier2 !== '' && element[1].TumourStage.TorontoChildhoodCancerStage_Tier2 !== undefined) {
                if (element[1].TumourStage.TorontoChildhoodCancerStage_Tier2 !== undefined) {
                    TumourStage_TorontoChildhoodCancerStage_Tier2 = element[1].TumourStage.TorontoChildhoodCancerStage_Tier2
                }

                stringTumourStage_TorontoChildhoodCancerStage_Tier2 = `${TumourStage.TorontoChildhoodCancerStage_Tier2}`
            } else {
                stringTumourStage_TorontoChildhoodCancerStage_Tier2 = ''
            }

            let TumourStage_EssentialTnmStage= ''
            let stringTumourStage_EssentialTnmStage= ''

            if (element[1].TumourStage.EssentialTnmStage !== '' && element[1].TumourStage.EssentialTnmStage!== undefined) {
                if (element[1].TumourStage.TorontoChildhoodCancerStage_Tier2 !== undefined) {
                    TumourStage_EssentialTnmStage = element[1].TumourStage.EssentialTnmStage
                }

                stringTumourStage_EssentialTnmStage = `${TumourStage.EssentialTnmStage}`
            } else {
                stringTumourStage_EssentialTnmStage = ''
            }

            let TumourStage_AnnArborStagingSystem= ''
            let stringTumourStage_AnnArborStagingSystem= ''

            if (element[1].TumourStage.AnnArborStagingSystem !== '' && element[1].TumourStage.AnnArborStagingSystem!== undefined) {
                if (element[1].TumourStage.AnnArborStagingSystem !== undefined) {
                    TumourStage_AnnArborStagingSystem = element[1].TumourStage.AnnArborStagingSystem
                }

                stringTumourStage_AnnArborStagingSystem = `${TumourStage.AnnArborStagingSystem}`
            } else {
                stringTumourStage_AnnArborStagingSystem = ''
            }

            let TumourStage_LuganoStagingSystem= ''
            let stringTumourStage_LuganoStagingSystem= ''

            if (element[1].TumourStage.LuganoStagingSystem !== '' && element[1].TumourStage.LuganoStagingSystem!== undefined) {
                if (element[1].TumourStage.LuganoStagingSystem !== undefined) {
                    TumourStage_LuganoStagingSystem = element[1].TumourStage.LuganoStagingSystem
                }

                stringTumourStage_LuganoStagingSystem = `${TumourStage.LuganoStagingSystem}`
            } else {
                stringTumourStage_LuganoStagingSystem = ''
            }

            let TumourStage_DukesStage= ''
            let stringTumourStage_DukesStage= ''

            if (element[1].TumourStage.DukesStage !== '' && element[1].TumourStage.DukesStage!== undefined) {
                if (element[1].TumourStage.DukesStage !== undefined) {
                    TumourStage_DukesStage = element[1].TumourStage.DukesStage
                }

                stringTumourStage_DukesStage = `${TumourStage.DukesStage}`
            } else {
                stringTumourStage_DukesStage = ''
            }

            let TumourStage_SummaryExtentOfDisease= ''
            let stringTumourStage_SummaryExtentOfDisease= ''

            if (element[1].TumourStage.SummaryExtentOfDisease !== '' && element[1].TumourStage.SummaryExtentOfDisease!== undefined) {
                if (element[1].TumourStage.SummaryExtentOfDisease !== undefined) {
                    TumourStage_SummaryExtentOfDisease = element[1].TumourStage.SummaryExtentOfDisease
                }

                stringTumourStage_SummaryExtentOfDisease = `${TumourStage.SummaryExtentOfDisease}`
            } else {
                stringTumourStage_SummaryExtentOfDisease = ''
            }

            let TumourStage_FigoStage= ''
            let stringTumourStage_FigoStage= ''

            if (element[1].TumourStage.FigoStage !== '' && element[1].TumourStage.FigoStage!== undefined) {
                if (element[1].TumourStage.FigoStage !== undefined) {
                    TumourStage_FigoStage = element[1].TumourStage.FigoStage
                }

                stringTumourStage_FigoStage = `${TumourStage.FigoStage}`
            } else {
                stringTumourStage_FigoStage = ''
            }



            let PrognosticTumourFactors= ''
            let stringPrognosticTumourFactors = ''

            if (element[1].PrognosticTumourFactors !== '' && element[1].PrognosticTumourFactors !== undefined) {
                if (element[1].PrognosticTumourFactors !== undefined) {
                    PrognosticTumourFactors= element[1].PrognosticTumourFactors
                }

                stringPrognosticTumourFactors = `${PrognosticTumourFactors}`
            } else {
                stringPrognosticTumourFactors = ''
            }

            let PrimaryTreatment_Surgery= ''
            let stringPrimaryTreatment_Surgery = ''

            if (element[1].PrimaryTreatment.Surgery !== '' && element[1].PrimaryTreatment.Surgery !== undefined) {
                if (element[1].PrimaryTreatment.Surgery !== undefined) {
                    PrimaryTreatment_Surgery= element[1].PrimaryTreatment.Surgery
                }

                stringPrimaryTreatment_Surgery = `${PrimaryTreatment_Surgery}`
            } else {
                stringPrimaryTreatment_Surgery = ''
            }

            let PrimaryTreatment_Radiotherapy= ''
            let stringPrimaryTreatment_Radiotherapy = ''

            if (element[1].PrimaryTreatment.Radiotherapy !== '' && element[1].PrimaryTreatment.Radiotherapy !== undefined) {
                if (element[1].PrimaryTreatment.Radiotherapy !== undefined) {
                    PrimaryTreatment_Radiotherapy= element[1].PrimaryTreatment.Radiotherapy
                }

                stringPrimaryTreatment_Radiotherapy = `${PrimaryTreatment_Radiotherapy}`
            } else {
                stringPrimaryTreatment_Radiotherapy= ''
            }

            let PrimaryTreatment_Chemotherapy= ''
            let stringPrimaryTreatment_Chemotherapy = ''

            if (element[1].PrimaryTreatment.Chemotherapy !== '' && element[1].PrimaryTreatment.Chemotherapy !== undefined) {
                if (element[1].PrimaryTreatment.Chemotherapy !== undefined) {
                    PrimaryTreatment_Chemotherapy= element[1].PrimaryTreatment.Chemotherapy
                }

                stringPrimaryTreatment_Chemotherapy = `${PrimaryTreatment_Chemotherapy}`
            } else {
                stringPrimaryTreatment_Chemotherapy= ''
            }

            let PrimaryTreatment_TargetedTherapy= ''
            let stringPrimaryTreatment_TargetedTherapy = ''

            if (element[1].PrimaryTreatment.TargetedTherapy !== '' && element[1].PrimaryTreatment.TargetedTherapy !== undefined) {
                if (element[1].PrimaryTreatment.TargetedTherapy !== undefined) {
                    PrimaryTreatment_TargetedTherapy= element[1].PrimaryTreatment.TargetedTherapy
                }

                stringPrimaryTreatment_TargetedTherapy = `${PrimaryTreatment_TargetedTherapy}`
            } else {
                stringPrimaryTreatment_TargetedTherapy= ''
            }

            let PrimaryTreatment_Immunotherapy= ''
            let stringPrimaryTreatment_Immunotherapy = ''

            if (element[1].PrimaryTreatment.Immunotherapy !== '' && element[1].PrimaryTreatment.Immunotherapy !== undefined) {
                if (element[1].PrimaryTreatment.Immunotherapy !== undefined) {
                    PrimaryTreatment_Immunotherapy= element[1].PrimaryTreatment.Immunotherapy
                }

                stringPrimaryTreatment_Immunotherapy = `${PrimaryTreatment_Immunotherapy}`
            } else {
                stringPrimaryTreatment_Immunotherapy= ''
            }

            let PrimaryTreatment_HormoneTherapy= ''
            let stringPrimaryTreatment_HormoneTherapy = ''

            if (element[1].PrimaryTreatment.HormoneTherapy !== '' && element[1].PrimaryTreatment.HormoneTherapy !== undefined) {
                if (element[1].PrimaryTreatment.HormoneTherapy !== undefined) {
                    PrimaryTreatment_HormoneTherapy= element[1].PrimaryTreatment.HormoneTherapy
                }

                stringPrimaryTreatment_HormoneTherapy = `${PrimaryTreatment_HormoneTherapy}`
            } else {
                stringPrimaryTreatment_HormoneTherapy= ''
            }

            let PrimaryTreatment_Other= ''
            let stringPrimaryTreatment_Other = ''

            if (element[1].PrimaryTreatment.Other !== '' && element[1].PrimaryTreatment.Other !== undefined) {
                if (element[1].PrimaryTreatment.Other !== undefined) {
                    PrimaryTreatment_Other= element[1].PrimaryTreatment.Other
                }

                stringPrimaryTreatment_Other = `${PrimaryTreatment_Other}`
            } else {
                stringPrimaryTreatment_Other= ''
            }

            let PrimaryTreatment_StemCellTransplantation= ''
            let stringPrimaryTreatment_StemCellTransplantation = ''

            if (element[1].PrimaryTreatment.StemCellTransplantation !== '' && element[1].PrimaryTreatment.StemCellTransplantation !== undefined) {
                if (element[1].PrimaryTreatment.StemCellTransplantation !== undefined) {
                    PrimaryTreatment_StemCellTransplantation= element[1].PrimaryTreatment.StemCellTransplantation
                }

                stringPrimaryTreatment_StemCellTransplantation = `${PrimaryTreatment_StemCellTransplantation}`
            } else {
                stringPrimaryTreatment_StemCellTransplantation= ''
            }

            let HospitalOfTreatment= ''
            let stringHospitalOfTreatment = ''

            if (element[1].HospitalOfTreatment !== '' && element[1].HospitalOfTreatment !== undefined) {
                if (element[1].HospitalOfTreatment !== undefined) {
                    HospitalOfTreatment= element[1].HospitalOfTreatment
                }

                stringHospitalOfTreatment = `${HospitalOfTreatment}`
            } else {
                stringHospitalOfTreatment = ''
            }

            let DateOfRecurrence_DayOfRecurrence= ''
            let stringDateOfRecurrence_DayOfRecurrence = ''

            if (element[1].DateOfRecurrence.DayOfRecurrence !== '' && element[1].DateOfRecurrence.DayOfRecurrence !== undefined) {
                if (element[1].DateOfRecurrence.DayOfRecurrence !== undefined) {
                    DateOfRecurrence_DayOfRecurrence= element[1].DateOfRecurrence.DayOfRecurrence
                }

                stringDateOfRecurrence_DayOfRecurrence = `${DateOfRecurrence_DayOfRecurrence}`
            } else {
                stringDateOfRecurrence_DayOfRecurrence = ''
            }

            let DateOfRecurrence_MonthOfRecurrence= ''
            let stringDateOfRecurrence_MonthOfRecurrence = ''

            if (element[1].DateOfRecurrence.MonthOfRecurrence !== '' && element[1].DateOfRecurrence.MonthOfRecurrence !== undefined) {
                if (element[1].DateOfRecurrence.MonthOfRecurrence !== undefined) {
                    DateOfRecurrence_MonthOfRecurrence= element[1].DateOfRecurrence.MonthOfRecurrence
                }

                stringDateOfRecurrence_MonthOfRecurrence = `${DateOfRecurrence_MonthOfRecurrence}`
            } else {
                stringDateOfRecurrence_MonthOfRecurrence = ''
            }

            let DateOfRecurrence_YearOfRecurrence= ''
            let stringDateOfRecurrence_YearOfRecurrence = ''

            if (element[1].DateOfRecurrence.YearOfRecurrence !== '' && element[1].DateOfRecurrence.YearOfRecurrence !== undefined) {
                if (element[1].DateOfRecurrence.YearOfRecurrence !== undefined) {
                    DateOfRecurrence_YearOfRecurrence= element[1].DateOfRecurrence.YearOfRecurrence
                }

                stringDateOfRecurrence_YearOfRecurrence = `${DateOfRecurrence_YearOfRecurrence}`
            } else {
                stringDateOfRecurrence_YearOfRecurrence = ''
            }

            let SiteOfRecurrence= ''
            let stringSiteOfRecurrence = ''

            if (element[1].SiteOfRecurrence !== '' && element[1].SiteOfRecurrence !== undefined) {
                if (element[1].SiteOfRecurrence !== undefined) {
                    SiteOfRecurrence= element[1].SiteOfRecurrence
                }

                stringSiteOfRecurrence = `${SiteOfRecurrence}`
            } else {
                stringSiteOfRecurrence = ''
            }

            let VitalStatus= ''
            let stringVitalStatus = ''

            if (element[1].VitalStatus !== '' && element[1].VitalStatus !== undefined) {
                if (element[1].VitalStatus !== undefined) {
                    VitalStatus= element[1].VitalStatus
                }

                stringVitalStatus = `${VitalStatus}`
            } else {
                stringVitalStatus = ''
            }

            let VitalStatusDate_DayVitalStatus= ''
            let stringVitalStatusDate_DayVitalStatus = ''

            if (element[1].VitalStatusDate.DayVitalStatus !== '' && element[1].VitalStatusDate.DayVitalStatus !== undefined) {
                if (element[1].VitalStatusDate.DayVitalStatus !== undefined) {
                    VitalStatusDate_DayVitalStatus= element[1].VitalStatusDate.DayVitalStatus
                }

                stringVitalStatusDate_DayVitalStatus= `${VitalStatusDate_DayVitalStatus}`
            } else {
                stringVitalStatusDate_DayVitalStatus = ''
            }


            let VitalStatusDate_MonthVitalStatus= ''
            let stringVitalStatusDate_MonthVitalStatus = ''

            if (element[1].VitalStatusDate.MonthVitalStatus !== '' && element[1].VitalStatusDate.MonthVitalStatus !== undefined) {
                if (element[1].VitalStatusDate.MonthVitalStatus !== undefined) {
                    VitalStatusDate_MonthVitalStatus= element[1].VitalStatusDate.MonthVitalStatus
                }

                stringVitalStatusDate_MonthVitalStatus= `${VitalStatusDate_MonthVitalStatus}`
            } else {
                stringVitalStatusDate_MonthVitalStatus = ''
            }

            let VitalStatusDate_YearVitalStatus= ''
            let stringVitalStatusDate_YearVitalStatus = ''

            if (element[1].VitalStatusDate.YearVitalStatus !== '' && element[1].VitalStatusDate.YearVitalStatus !== undefined) {
                if (element[1].VitalStatusDate.YearVitalStatus !== undefined) {
                    VitalStatusDate_YearVitalStatus= element[1].VitalStatusDate.YearVitalStatus
                }

                stringVitalStatusDate_YearVitalStatus= `${VitalStatusDate_YearVitalStatus}`
            } else {
                stringVitalStatusDate_YearVitalStatus = ''
            }


            let SurvivalDuration= ''
            let stringSurvivalDuration = ''

            if (element[1].SurvivalDuration !== '' && element[1].SurvivalDuration !== undefined) {
                if (element[1].SurvivalDuration !== undefined) {
                    SurvivalDuration= element[1].SurvivalDuration
                }

                stringSurvivalDuration= `${SurvivalDuration}`
            } else {
                stringSurvivalDuration = ''
            }

            let CauseOfDeath= ''
            let stringCauseOfDeath= ''

            if (element[1].CauseOfDeath !== '' && element[1].CauseOfDeath !== undefined) {
                if (element[1].CauseOfDeath !== undefined) {
                    RegistryYear= element[1].CauseOfDeath
                }

                stringCauseOfDeath = `${CauseOfDeath}`
            } else {
                stringCauseOfDeath = ''
            }

            let CauseOfDeath_ICDedition= ''
            let stringCauseOfDeath_ICDedition = ''

            if (element[1].CauseOfDeath_ICDedition !== '' && element[1].CauseOfDeath_ICDedition !== undefined) {
                if (element[1].CauseOfDeath_ICDedition !== undefined) {
                    SexAtBirth= element[1].CauseOfDeath_ICDedition
                }

                stringCauseOfDeath_ICDedition = `${CauseOfDeath_ICDedition}`
            } else {
                stringCauseOfDeath_ICDedition = ''
            }

            rows.push({ id: index, 
                Beacon: element[0], 
                PatientID: stringPatientID, 
                AgeOfOnset: stringAgeOfOnset, 
                DateOfBirth_DayOfBirth: stringDateOfBirth_DayOfBirth, 
                DateOfBirth_MonthOfBirth: stringDateOfBirth_MonthOfBirth, 
                DateOfBirth_YearOfBirth, stringDateOfBirth_YearOfBirth, 
                Sex: stringSex, 
                TumourIdentificationCode: stringTumourIdentificationCode, 
                GeographicResidence: stringGeographicResidence, 
                HospitalOfDiagnosis: stringHospitalOfDiagnosis, 
                IncidenceDate_IncidenceDay: stringIncidenceDate_IncidenceDay, 
                IncidenceDate_IncidenceMonth: stringIncidenceDate_IncidenceMonth, 
                IncidenceDate_IncidenceYear: stringIncidenceDate_IncidenceYear, 
                BasisOfDiagnosis: stringBasisOfDiagnosis, 
                TumourTopography: stringTumourTopography, 
                TumourMorphology, stringTumourMorphology, 
                TumourBehaviour: stringTumourBehaviour, 
                TumourGrade: stringTumourGrade, 
                TumourLaterality:stringTumourLaterality, 
                TumourStage_TnmFinding_TnmEdition: stringTumourStage_TnmFinding_TnmEdition, 
                TumourStage_TnmFinding_Clinical_T_category: stringTumourStage_TnmFinding_Clinical_T_category, 
                TumourStage_TnmFinding_Clinical_N_category: stringTumourStage_TnmFinding_Clinical_N_category, 
                TumourStage_TnmFinding_Clinical_M_category: stringTumourStage_TnmFinding_Clinical_M_category, 
                TumourStage_TnmFinding_Pathological_T_category: stringTumourStage_TnmFinding_Pathological_T_category, 
                TumourStage_TnmFinding_Pathological_N_category: stringTumourStage_TnmFinding_Pathological_N_category, 
                TumourStage_TnmFinding_Pathological_M_category: stringTumourStage_TnmFinding_Pathological_M_category, 
                TumourStage_TnmFinding_TnmEdition:stringTumourStage_TnmFinding_TnmEdition, 
                TumourStage_TorontoChildhoodCancerStage_Tier1: stringTumourStage_TorontoChildhoodCancerStage_Tier1, 
                TumourStage_TorontoChildhoodCancerStage_Tier2: stringTumourStage_TorontoChildhoodCancerStage_Tier2, 
                TumourStage_EssentialTnmStage: stringTumourStage_EssentialTnmStage, 
                TumourStage_AnnArborStagingSystem: stringTumourStage_AnnArborStagingSystem, 
                TumourStage_LuganoStagingSystem: stringTumourStage_LuganoStagingSystem, 
                TumourStage_DukesStage: stringTumourStage_DukesStage, 
                TumourStage_SummaryExtentOfDisease: stringTumourStage_SummaryExtentOfDisease, 
                TumourStage_FigoStage: stringTumourStage_FigoStage, 
                PrognosticTumourFactors: stringPrognosticTumourFactors, 
                PrimaryTreatment_Surgery: stringPrimaryTreatment_Surgery, 
                PrimaryTreatment_Chemotherapy: stringPrimaryTreatment_Chemotherapy, 
                PrimaryTreatment_HormoneTherapy: stringPrimaryTreatment_HormoneTherapy, 
                PrimaryTreatment_Immunotherapy: stringPrimaryTreatment_Immunotherapy, 
                PrimaryTreatment_Other: stringPrimaryTreatment_Other, 
                PrimaryTreatment_Radiotherapy: stringPrimaryTreatment_Radiotherapy, 
                PrimaryTreatment_StemCellTransplantation: stringPrimaryTreatment_StemCellTransplantation, 
                PrimaryTreatment_TargetedTherapy: stringPrimaryTreatment_TargetedTherapy,
                HospitalOfTreatment: stringHospitalOfTreatment,
                DateOfRecurrence_DayOfRecurrence: stringDateOfRecurrence_DayOfRecurrence,
                DateOfRecurrence_MonthOfRecurrence: stringDateOfRecurrence_MonthOfRecurrence,
                DateOfRecurrence_YearOfRecurrence: stringDateOfRecurrence_YearOfRecurrence,
                SiteOfRecurrence: stringSiteOfRecurrence,
                VitalStatus: stringVitalStatus,
                VitalStatusDate_DayVitalStatus: stringVitalStatusDate_DayVitalStatus,
                VitalStatusDate_MonthVitalStatus: stringVitalStatusDate_MonthVitalStatus,
                VitalStatusDate_YearVitalStatus: stringVitalStatusDate_YearVitalStatus,
                SurvivalDuration: stringSurvivalDuration,
                CauseOfDeath: stringCauseOfDeath,
                CauseOfDeath_ICDedition: stringCauseOfDeath_ICDedition  })

        }

    })


    return (
        <DataGrid 
        initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns status and traderName, the other columns will remain visible
                DateOfBirth_DayOfBirth: false,
                DateOfBirth_MonthOfBirth: false,
                DateOfBirth_YearOfBirth: false,
                HospitalOfDiagnosis: false,
                IncidenceDate_IncidenceDay: false,
                IncidenceDate_IncidenceMonth: false,
                IncidenceDate_IncidenceYear: false,
                BasisOfDiagnosis: false,
                TumourLaterality: false,
                PrognosticTumourFactors: false,
                TumourStage_TnmFinding_Clinical_T_category: false,
                TumourStage_TnmFinding_Clinical_N_category: false,
                TumourStage_TnmFinding_Pathological_M_category: false,
                TumourStage_TnmFinding_Pathological_T_category: false,
                TumourStage_TnmFinding_Pathological_N_category: false,
                TumourStage_TnmFinding_Pathological_M_category: false,
                TumourStage_TnmFinding_TnmEdition: false,
                TumourStage_TorontoChildhoodCancerStage_Tier1: false,
                TumourStage_TorontoChildhoodCancerStage_Tier2: false,
                TumourStage_EssentialTnmStage: false,
                TumourStage_AnnArborStagingSystem: false,
                TumourStage_LuganoStagingSystem: false,
                TumourStage_DukesStage: false,
                TumourStage_SummaryExtentOfDisease: false,
                TumourStage_FigoStage: false,
                PrimaryTreatment_Surgery: false,
                PrimaryTreatment_Chemotherapy: false,
                PrimaryTreatment_HormoneTherapy: false,
                PrimaryTreatment_Immunotherapy: false,
                PrimaryTreatment_Other: false,
                PrimaryTreatment_Radiotherapy: false,
                PrimaryTreatment_StemCellTransplantation: false,
                PrimaryTreatment_TargetedTherapy: false,
                HospitalOfTreatment: false,
                DateOfRecurrence_DayOfRecurrence: false,
                DateOfRecurrence_MonthOfRecurrence: false,
                DateOfRecurrence_YearOfRecurrence: false,
                SiteOfRecurrence: false,
                VitalStatus: false,
                VitalStatusDate_DayVitalStatus: false,
                VitalStatusDate_MonthVitalStatus: false,
                VitalStatusDate_YearVitalStatus: false,
                SurvivalDuration:false,
                CauseOfDeath:false,
                CauseOfDeath_ICDedition:false
                
              },
            },
          }}
        getRowHeight={() => 'auto'}


            columns={columns}
            rows={rows}
            

        />
    )

}


export default TableResultsIndividuals;