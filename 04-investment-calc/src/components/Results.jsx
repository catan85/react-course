import {formatter} from '../util/investment.js'

export default function Results({data}){

    console.log({data});

    return <table id="result">
            <thead>
                <tr>
                    {Object.keys(data[0]).map(key => <th key={key}>{key}</th> )}
                </tr>
            </thead>
            <tbody>
            
                {data.map((rowVal, rowIndex) => <tr key={rowIndex}>
                    <td key={`${rowIndex}-1`}>{rowVal.year}</td>
                    <td key={`${rowIndex}-2`}>{rowVal.interest}</td>
                    <td key={`${rowIndex}-3`}>{formatter.format(rowVal.valueEndOfYear)}</td>
                    <td key={`${rowIndex}-4`}>{formatter.format(rowVal.annualInvestment)}</td>
                </tr>)}
            </tbody>
        </table>
}