import '../../App.css';

import FilteringTermsIndividuals from '../FilteringTerms/FilteringTerms';
import Cohorts from '../Cohorts/Cohorts';

import ResultsDatasets from '../Datasets/ResultsDatasets';
import VariantsResults from '../GenomicVariations/VariantsResults';

import Select from 'react-select'
import React, { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

import Switch from '@mui/material/Switch';
import MultiSwitch from 'react-multi-switch-toggle';

import axios from "axios";

import ReactModal from 'react-modal';
import makeAnimated from 'react-select/animated';

import IndividualsResults from '../Individuals/IndividualsResults';
import OccurrencesResults from '../Occurrences/OccurrencesResults';
import MeasurementsResults from '../Measurements/MeasurementsResults';
import ConditionsResults from '../Conditions/ConditionsResults';
import FeaturesResults from '../Features/FeaturesResults';
import DevicesResults from '../Devices/DevicesResults';
import { LinearProgress } from '@mui/material';
import configData from '../../config.json'

function Layout(props) {
    console.log(props)
    const [error, setError] = useState(null)

    const [placeholder, setPlaceholder] = useState('')

    const [results, setResults] = useState(null)
    const [query, setQuery] = useState(null)
    const [exampleQ, setExampleQ] = useState([])

    const [resultSet, setResultset] = useState("HIT")

    const [descendantTerm, setDescendantTerm] = useState('true')

    const [similarity, setSimilarity] = useState("Select")

    const [cohorts, setShowCohorts] = useState(false)

    const [ID, setId] = useState("")
    const [operator, setOperator] = useState("")
    const [valueFree, setValueFree] = useState("")

    const [value, setValue] = useState("")

    const [popUp, setPopUp] = useState(false)

    const [showButton, setShowButton] = useState(true)

    const [showFilteringTerms, setShowFilteringTerms] = useState(false)
    const [filteringTerms, setFilteringTerms] = useState(false)

    const [showVariants, setShowVariants] = useState(false)

    const [trigger, setTrigger] = useState(false)
    const { storeToken, refreshToken, getStoredToken, authenticateUser, setExpirationTime, setExpirationTimeRefresh } = useContext(AuthContext);

    const [showBar, setShowBar] = useState(true)

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);
    const [isOpenModal4, setIsOpenModal4] = useState(false);
    const [isOpenModal5, setIsOpenModal5] = useState(false);
    const [isOpenModal6, setIsOpenModal6] = useState(false);

    const [showExtraIndividuals, setExtraIndividuals] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    const [expansionSection, setExpansionSection] = useState(false)

    const [options, setOptions] = useState(

        props.options)


    const [referenceName, setRefName] = useState('')
    const [referenceName2, setRefName2] = useState('')
    const [start, setStart] = useState('')
    const [start2, setStart2] = useState('')
    const [end, setEnd] = useState('')
    const [variantType, setVariantType] = useState('')
    const [variantType2, setVariantType2] = useState('')
    const [alternateBases, setAlternateBases] = useState('')
    const [alternateBases2, setAlternateBases2] = useState('')
    const [alternateBases3, setAlternateBases3] = useState('')
    const [referenceBases, setRefBases] = useState('')
    const [referenceBases2, setRefBases2] = useState('')
    const [aminoacid, setAminoacid] = useState('')
    const [aminoacid2, setAminoacid2] = useState('')
    const [geneID, setGeneId] = useState('')
    const [assemblyId, setAssemblyId] = useState('')
    const [assemblyId2, setAssemblyId2] = useState('')
    const [assemblyId3, setAssemblyId3] = useState('')

    const [hideForm, setHideForm] = useState(false)

    const animatedComponents = makeAnimated();

    const [resetSearch, setResetSearch] = useState(false)

    const [state, setstate] = useState({
        query: '',
        list: []
    })

    const [checked, setChecked] = useState(true)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)

    const [isSubmitted, setIsSub] = useState(false)

    const [qeValue, setQEvalue] = useState('')
    const [ontologyValue, setOntologyValue] = useState('')

    const [selectedCohortsAux, setSelectedCohortsAux] = useState([])

    const [resultsQEexact, setResultsQEexact] = useState([])
    const [matchesQE, setMatchesQE] = useState([])
    const [showQEresults, setShowQEresults] = useState(false)
    const [showQEfirstResults, setShowQEfirstResults] = useState(false)

    const [arrayFilteringTerms, setArrayFilteringTerms] = useState([])
    const [arrayFilteringTermsQE, setArrayFilteringTermsQE] = useState([])

    const [showIds, setShowIds] = useState(false)

    const handleChangeSwitch = (e) => {

        setDescendantTerm(e.target.checked)
        setChecked(e.target.checked);

    }

    const onToggle = (selectedItem) => {
        console.log(selectedItem)
        if (selectedItem === 0) {
            setSimilarity('low')
        } else if (selectedItem === 1) {
            setSimilarity('medium')
        } else {
            setSimilarity('high')
        }

    }


    const onToggle2 = (selectedItem) => {
        console.log(selectedItem)
        if (selectedItem === 0) {
            setResultset("HIT")
        } else if (selectedItem === 1) {
            setResultset("MISS")
        } else if (selectedItem === 2) {
            setResultset("NONE")
        } else {
            setResultset("ALL")
        }

    }

    const triggerOptions = () => {
        setOptions(options)
    }


    const handleChangeCohorts = (selectedOption) => {
        setSelectedCohortsAux([])
        selectedCohortsAux.push(selectedOption)
        props.setSelectedCohorts(selectedCohortsAux)
    }

    const handleQEchanges = (e) => {

        setQEvalue(e.target.value.trim())
    }

    const handleNewQEsearch = () => {
        setShowQEresults(false)
    }

    const handleOntologyChanges = (e) => {
        setOntologyValue(e.target.value.trim())
    }

    const handleIdChanges = (e) => {
        setShowIds(true)
        setId(e.target.value)
        const results = arrayFilteringTerms.filter(post => {

            if (e.target.value === "") {
                return arrayFilteringTerms
            } else {
                if (post !== undefined) {
                    console.log(post)
                    console.log(e.target.value)
                    if (post.toString().toLowerCase().includes(e.target.value.toLowerCase())) {
                        return post
                    }
                } else {
                    if (post.toString().toLowerCase().includes(e.target.value.toLowerCase())) {
                        return post
                    }
                }
            }

        })
        setstate({
            query: e.target.value,
            list: results
        })

        if (e.target.value === '') {
            setShowIds(false)
        }


    }

    const handleSelectedId = (e) => {
        setShowIds(false)
        setId(e.target.value)
        setstate({
            query: e.target.value,
            list: state.list
        })
    }

    const handleOperatorchange = (e) => {
        setOperator(e.target.value)
        console.log()
    }


    const handleValueChanges = (e) => {
        setValueFree(e.target.value)
    }

    const handdleInclude = (e) => {
        console.log(ID)
        console.log(valueFree)
        console.log(operator)
        if (ID !== '' && valueFree !== '' && operator !== '') {
            if (query !== null) {
                setQuery(query + ',' + `${ID}${operator}${valueFree}`)
            } if (query === null) {
                setQuery(`${ID}${operator}${valueFree}`)
            }
        }

    }

    const handleHelpModal1 = () => {
        setIsOpenModal1(true)
    }

    const handleCloseModal1 = () => {
        setIsOpenModal1(false)
    }

    const handleHelpModal2 = () => {
        setIsOpenModal2(true)
    }

    const handleCloseModal2 = () => {
        setIsOpenModal2(false)
    }

    const handleCloseModal3 = () => {
        setPopUp(false)
    }

    const handleHelpModal4 = () => {
        setIsOpenModal4(true)
    }

    const handleHelpModal5 = () => {
        setIsOpenModal5(true)
    }

    const handleHelpModal6 = () => {
        setIsOpenModal6(true)
    }

    const handleFilteringTerms = async (e) => {


        if (props.collection === 'Individuals') {
            
            try {
                const API_ENDPOINT = configData.API_URL + "/api/individuals/filtering_terms?skip=0&limit=0"
                let res = await axios.get(API_ENDPOINT)
                console.log(res)
                if (res.data.response.filteringTerms !== undefined) {
                    setFilteringTerms(res)
                    setResults(null)
                } else {
                    setError("No filtering terms now available")
                }


            } catch (error) {
                console.log(error)
            }
        } else if (props.collection === 'Occurrences') {
            try {
                const API_ENDPOINT = configData.API_URL + "/api/occurrences/filtering_terms?skip=0&limit=0"
                let res = await axios.get(API_ENDPOINT)
                setFilteringTerms(res)
                setResults(null)

            } catch (error) {
                console.log(error)
            } }else if (props.collection === 'Features') {
                try {
                    const API_ENDPOINT = configData.API_URL + "/api/features/filtering_terms?skip=0&limit=0"
                    let res = await axios.get(API_ENDPOINT)
                    setFilteringTerms(res)
                    setResults(null)
    
                } catch (error) {
                    console.log(error)
                }
            } else if (props.collection === 'Measurements') {
                try {
                    const API_ENDPOINT = configData.API_URL + "/api/measurements/filtering_terms?skip=0&limit=0"
                    let res = await axios.get(API_ENDPOINT)
                    setFilteringTerms(res)
                    setResults(null)
    
                } catch (error) {
                    console.log(error)
                } 
            } else if (props.collection === 'Conditions') {
                try {
                    const API_ENDPOINT = configData.API_URL + "/api/conditions/filtering_terms?skip=0&limit=0"
                    let res = await axios.get(API_ENDPOINT)
                    setFilteringTerms(res)
                    setResults(null)
    
                } catch (error) {
                    console.log(error)
                } 

            }else if (props.collection === 'Devices') {
                try {
                    const API_ENDPOINT = configData.API_URL + "/api/devices/filtering_terms?skip=0&limit=0"
                    let res = await axios.get(API_ENDPOINT)
                    setFilteringTerms(res)
                    setResults(null)
    
                } catch (error) {
                    console.log(error)
                }

            }

        setShowFilteringTerms(true)


    }

    const handleExQueries = () => {
        if (props.collection === 'Individuals') {
            setExampleQ(['sex.concept_id=Male', '38003600', 'ethnicity.concept_id:African'])
        } else if (props.collection === 'Occurrences') {
            setExampleQ(['imaging_occurrence_id:100008', '4', 'imaging_occurrence_id:100025'])
        } else if (props.collection === 'Measurements') {
            setExampleQ(['imaging_occurrence_id:100008', '4', 'imaging_occurrence_id:100025'])
        } else if (props.collection === 'Conditions') {
            setExampleQ(['imaging_occurrence_id:100008', '4', 'imaging_occurrence_id:100025'])
        } else if (props.collection === 'Features') {
            setExampleQ(['2000000109', 'shape_MajorAxisLength>2000', 'imaging_feature_domain_id.concept_id:shape_Flatness'])
        } else if (props.collection === 'Devices') {
            setExampleQ(['45768421', 'device.concept_id=Scanner', 'device_type.concept_id:Diagnostic imaging equipment'])
        }
    }

    const handleExtraSectionIndividuals = (e) => {
        setShowOptions(!showOptions)
        setShowButton(!showButton)
    }

    const handleChangeStart = (e) => {
        setStart(e.target.value)
    }
    const handleChangeStart2 = (e) => {
        setStart2(e.target.value)
    }
    const handleChangeRefN2 = (e) => {
        setRefName2(e.target.value)
    }
    const handleChangeAlternateB2 = (e) => {
        setAlternateBases2(e.target.value)
    }
    const handleChangeAssembly2 = (e) => {
        setAssemblyId2(e.target.value)
    }
    const handleChangeAssembly3 = (e) => {
        setAssemblyId3(e.target.value)
    }

    const handleChangeAlternateB = (e) => {
        setAlternateBases(e.target.value)
    }

    const handleChangeAlternateB3 = (e) => {
        setAlternateBases3(e.target.value)
    }

    const handleChangeReferenceB = (e) => {
        setRefBases(e.target.value)
    }
    const handleChangeReferenceB2 = (e) => {
        setRefBases2(e.target.value)
    }

    const handleChangeRefN = (e) => {
        setRefName(e.target.value)
    }

    const handleChangeEnd = (e) => {
        setEnd(e.target.value)
    }

    const handleChangeVariantType = (e) => {
        setVariantType(e.target.value)
    }
    const handleChangeVariantType2 = (e) => {
        setVariantType2(e.target.value)
    }

    const handleChangeAminoacid = (e) => {
        setAminoacid(e.target.value)
    }
    const handleChangeAminoacid2 = (e) => {
        setAminoacid2(e.target.value)
    }

    const handleChangeGeneId = (e) => {
        setGeneId(e.target.value)
    }

    const handleChangeAssembly = (e) => {
        setAssemblyId(e.target.value)
    }

    const handleClick = () => {
        setShowBar(!showBar)
    }

    const handleHideVariantsForm = (e) => {
        setHideForm(false)
    }

    useEffect(() => {

        if (props.collection === 'Individuals') {
            setPlaceholder('filtering term comma-separated, ID><=value')
            setExtraIndividuals(true)

        } else if (props.collection === 'Biosamples') {
            setPlaceholder('key=value, key><=value, or filtering term comma-separated')
        } else if (props.collection === 'Cohorts') {
            setShowCohorts(true)
            setExtraIndividuals(false)
            setPlaceholder('Search for any cohort')
        } else if (props.collection === "Variant") {
            setPlaceholder('chr : pos ref > alt, chr: start-end')
            setExtraIndividuals(false)
            setShowVariants(true)

        } else if (props.collection === "Occurrences") {
            setPlaceholder('filtering term comma-separated, ID><=value')
            setExtraIndividuals(true)
        } else if (props.collection === "Measurements") {
            setPlaceholder('filtering term comma-separated, ID><=value')
            setExtraIndividuals(true)
        } else if (props.collection === "Conditions") {
            setPlaceholder('filtering term comma-separated, ID><=value')
            setExtraIndividuals(true)
        } else if (props.collection === "Features") {
            setPlaceholder('filtering term comma-separated, ID><=value')
            setExtraIndividuals(true)
        } else if (props.collection === "Devices") {
            setPlaceholder('filtering term comma-separated, ID><=value')
            setExtraIndividuals(true)
        }else if (props.collection === 'Datasets') {
            setPlaceholder('Search for any cohort')
            setExtraIndividuals(false)
        } else {
            setPlaceholder('')
        }

        const fetchData = async () => {
            
            try {
                const API_ENDPOINT = configData.API_URL + "/api/individuals/filtering_terms?skip=0&limit=0"
                let res = await axios.get(API_ENDPOINT)
                if (res !== null) {
                    res.data.response.filteringTerms.forEach(element => {
                        if (element.type !== "custom") {
                            arrayFilteringTerms.push(element.id)
                        }


                    })

                    setstate({
                        query: '',
                        list: arrayFilteringTerms
                    })
                }
            } catch (error) {
                console.log(error)
            }


        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);


    }, [])




    const onSubmit = async (event) => {

        event.preventDefault()

        setIsSub(!isSubmitted)

        console.log(query)

        authenticateUser()

        setExampleQ([])


        setResetSearch(true)


        if (query === '1' || query === '') {
            setQuery(null)
        }
        if (props.collection === 'Individuals') {
            setResults('Individuals')
        } else if (props.collection === 'Occurrences') {
            setResults('Occurrences')
        } else if (props.collection === 'Measurements') {
            setResults('Measurements')
        } else if (props.collection === 'Conditions') {
            setResults('Conditions')
        } else if (props.collection === 'Features') {
            setResults('Features')
        }else if (props.collection === 'Devices') {
            setResults('Devices')
        }


    }

    const onSubmit2 = (event) => {

        setPlaceholder("filtering term comma-separated, ID><=value");


        setIsSub(!isSubmitted)

        setExampleQ([])


        if (query === '1' || query === '') {
            setQuery(null)
        }
        if (props.collection === 'Individuals') {
            setResults('Individuals')
        } else if (props.collection === 'Occurrences') {
            setResults('Occurrences')
        } else if (props.collection === 'Measurements') {
            setResults('Measurements')
        } else if (props.collection === 'Conditions') {
            setResults('Conditions')
        } else if (props.collection === 'Features') {
            setResults('Features')
        }else if (props.collection === 'Devices') {
            setResults('Devices')
        }


    }

    const onSubmitCohorts = () => {
        setResults('Cohorts')

        props.setShowGraphs(true)
    }

    function search(e) {
        setQuery(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPlaceholder("filtering term comma-separated, ID><=value");
        setIsSub(!isSubmitted)
        setExampleQ([])
        setResults('Variant')
    }

    return (
        <div className="container1">
            <div className="container2">
                <button className="helpButton" onClick={handleHelpModal2}><img className="questionLogo2" src="./question.png" alt='questionIcon'></img><h5>Help for querying</h5></button>

      <div class="title">
        <p class="first">&nbsp;Beacon&nbsp;</p>
        <p class="second">&nbsp;x&nbsp;</p>
        <p class="third">&nbsp;Images&nbsp;</p>
    </div>
                <div className='logos'>
                    <a href="https://ega-archive.org/" target="_blank">
                        <img className="cinecaLogo" src="./logo.png" alt='EGALogo'></img>
                    </a>
                </div>
                
            </div>

            <div className='Modal1'>
                {popUp && <ReactModal
                    isOpen={popUp}
                    onRequestClose={handleCloseModal3}
                    shouldCloseOnOverlayClick={true}
                >
                    <button onClick={handleCloseModal3}><img className="closeLogo" src="./cancel.png" alt='cancelIcon'></img></button>

                    <p>Please, bear in mind that you might have to log in to get information from some datasets.</p>

                </ReactModal>
                }
            </div>
            <nav className="navbar">
                    


                {showBar === true && <div className="container-fluid">

                    {cohorts === false &&
                        showBar === true && <div>
                            <form className="d-flex" onSubmit={onSubmit}>
                                <input className="formSearch" type="search" placeholder={placeholder} value={query} onChange={(e) => search(e)} aria-label="Search" />
                                {!isSubmitted && <button className="searchButton" type="submit"><img className="searchIcon" src="./magnifier.png" alt='searchIcon'></img></button>}
                                {isSubmitted &&
                                    <div className="newSearch"><button className="newSearchButton" onClick={onSubmit2} type="submit">NEW SEARCH</button></div>}
                            </form>

                        </div>
                    }

                </div>}


                <div className="additionalOptions">

                    <div className="example">
                        {cohorts === false && props.collection !== '' && showBar === true &&
                            <div className="bulbExample">
                                <button className="exampleQueries" onClick={handleExQueries}>Query Examples</button>
                                <img className="bulbLogo" src="../light-bulb.png" alt='bulbIcon'></img>
                                <div>
                                    {exampleQ[0] && exampleQ.map((result) => {

                                        return (<div id='exampleQueries'>


                                            <button className="exampleQuery" onClick={() => { setPlaceholder(`${result}`); setQuery(`${result}`); setValue(`${result}`) }}  >{result}</button>
                                        </div>)

                                    })}
                                </div>
                            </div>
                        }
                        {props.collection !== '' && showBar === true && <button className="filters" onClick={handleFilteringTerms}>
                            Filtering Terms
                        </button>}
                    </div>
                </div>
                {showExtraIndividuals &&
                    <div className="containerExtraSections">
                        {showButton &&
                            <button className="arrowButton" onClick={handleExtraSectionIndividuals}><img className="arrowLogo" src="../arrow-down.png" alt='arrowIcon'></img></button>}
                        {!showButton &&
                            <button className="arrowButton" onClick={handleExtraSectionIndividuals}><img className="arrowLogo" src="../arrow-up.png" alt='arrowUpIcon'></img></button>}
                        {showOptions && <div className='extraSections'>

                            <div className='alphanumContainer'>

                                <div className='tittleAlph'>
                                    <h2>Alphanumerical and numerical queries</h2>
                                    <button className="helpButton" onClick={handleHelpModal1}><img className="questionLogo" src="./question.png" alt='questionIcon'></img></button>
                                </div>
                                <div className='alphanumContainer2'>
                                    <div className='alphaIdModule'>
                                        <div className="listTerms">
                                            <label><h2>ID</h2></label>

                                            <input className="IdForm" type="text" value={state.query} autoComplete='on' placeholder={"write and filter by ID"} onChange={(e) => handleIdChanges(e)} aria-label="ID" />

                                            <div id="operator" >

                                                <select className="selectedOperator" onChange={handleOperatorchange} name="selectedOperator" >
                                                    <option value=''> </option>
                                                    <option value="=" >= </option>
                                                    <option value="<" >&lt;</option>
                                                    <option value=">" >&gt;</option>
                                                    <option value="!" >!</option>
                                                    <option value="=%" >%</option>
                                                </select>

                                            </div>

                                            <label id="value"><h2>Value</h2></label>
                                            <input className="ValueForm" type="text" autoComplete='on' placeholder={"free text/ value"} onChange={handleValueChanges} aria-label="Value" />
                                        </div>
                                        {showIds && query !== '' &&
                                            <select className="selectedId" onChange={handleSelectedId} name="selectedId" multiple >
                                                {state.list.map(element => {
                                                    return (
                                                        <option value={element} >{element}</option>
                                                    )
                                                })}
                                            </select>}
                                    </div>
                                    <button className="buttonAlphanum" onClick={handdleInclude}>Include</button>
                                </div>

                                <div className="bulbExample">
                                    <button className="exampleQueries" onClick={handleExQueries}>Query Examples</button>
                                    <img className="bulbLogo" src="../light-bulb.png" alt='bulbIcon'></img>

                                </div>

                            </div>

                            <div className='advContainer'>
                                <form className='advSearchForm' onSubmit={onSubmit}>

                                    <div>
                                        <div className='resultset'>

                                            <div className="advSearch-module">
                                                <button className="helpButton2" onClick={handleHelpModal4}><img className="questionLogo" src="./question.png" alt='questionIcon'></img></button>
                                                <label><h2>Include Resultset Responses</h2></label>
                                                <MultiSwitch
                                                    texts={["HIT", "MISS", "NONE", "ALL"]}
                                                    selectedSwitch={0}
                                                    bgColor={"white"}
                                                    onToggleCallback={onToggle2}
                                                    fontColor={"black"}
                                                    selectedFontColor={"white"}
                                                    border="0"
                                                    selectedSwitchColor="#5ad1cd"
                                                    borderWidth="1"
                                                    height={"23px"}
                                                    fontSize={"12px"}
                                                    eachSwitchWidth={55}
                                                ></MultiSwitch>
                                            </div>






                                        </div>


                                    </div>



                                </form>

                            </div>
                        </div>}
                    </div>}
                

            </nav>

            <div>

                <ReactModal
                    isOpen={isOpenModal1}
                    onRequestClose={handleCloseModal1}
                    shouldCloseOnOverlayClick={true}
                >
                    <button onClick={handleCloseModal1}><img className="closeLogo" src="./cancel.png" alt='cancelIcon'></img></button>

                    <p>Help for alphanumerical and numerical queries.</p>

                </ReactModal>
                <ReactModal
                    isOpen={isOpenModal2}
                    onRequestClose={handleCloseModal2}
                    shouldCloseOnOverlayClick={true}
                >
                    <button onClick={handleCloseModal2}><img className="closeLogo" src="./cancel.png" alt='cancelIcon'></img></button>

                    <p>Help for queries.</p>

                </ReactModal>
            </div>


            <hr></hr>
            <div className="results">
                {results === null && !showFilteringTerms && <ResultsDatasets trigger={trigger} />}
                {isSubmitted && results === 'Individuals' &&
                    <div>
                        <IndividualsResults query={query} resultSets={resultSet} ID={ID} operator={operator} valueFree={valueFree} descendantTerm={descendantTerm} similarity={similarity} isSubmitted={isSubmitted} />
                    </div>
                }
                {isSubmitted && results === 'Occurrences' &&
                    <div>
                        <OccurrencesResults query={query} resultSets={resultSet} ID={ID} operator={operator} valueFree={valueFree} descendantTerm={descendantTerm} similarity={similarity} isSubmitted={isSubmitted} />
                    </div>
                }
                {isSubmitted && results === 'Measurements' &&
                    <div>
                        <MeasurementsResults query={query} resultSets={resultSet} ID={ID} operator={operator} valueFree={valueFree} descendantTerm={descendantTerm} similarity={similarity} isSubmitted={isSubmitted} />
                    </div>
                }
                {isSubmitted && results === 'Conditions' &&
                    <div>
                        <ConditionsResults query={query} resultSets={resultSet} ID={ID} operator={operator} valueFree={valueFree} descendantTerm={descendantTerm} similarity={similarity} isSubmitted={isSubmitted} />
                    </div>
                }
                {isSubmitted && results === 'Features' &&
                    <div>
                        <FeaturesResults query={query} resultSets={resultSet} ID={ID} operator={operator} valueFree={valueFree} descendantTerm={descendantTerm} similarity={similarity} isSubmitted={isSubmitted} />
                    </div>
                }
                {isSubmitted && results === 'Devices' &&
                    <div>
                        <DevicesResults query={query} resultSets={resultSet} ID={ID} operator={operator} valueFree={valueFree} descendantTerm={descendantTerm} similarity={similarity} isSubmitted={isSubmitted} />
                    </div>
                }
                {isSubmitted && results === 'Variant' &&
                    <div>
                        <VariantsResults query={query} setHideForm={setHideForm} showBar={showBar} aminoacid2={aminoacid2} assemblyId2={assemblyId2} assemblyId3={assemblyId3} alternateBases3={alternateBases3} alternateBases2={alternateBases2} isSubmitted={isSubmitted} variantType2={variantType2} start2={start2} referenceName2={referenceName2} referenceName={referenceName} assemblyId={assemblyId} start={start} end={end} variantType={variantType} alternateBases={alternateBases} referenceBases={referenceBases} referenceBases2={referenceBases2} aminoacid={aminoacid} geneID={geneID} />
                    </div>
                }
                {results === null && showFilteringTerms && <FilteringTermsIndividuals filteringTerms={filteringTerms} collection={props.collection} setPlaceholder={setPlaceholder} placeholder={placeholder} query={query} setQuery={setQuery} />}

            </div>

        </div>

    );
}

export default Layout;