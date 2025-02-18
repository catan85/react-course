


export default function UserInput ({initialParameters, onInputsChange}){

    return (<section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type="number" defaultValue={initialParameters.initialInvestment} onChange={onInputsChange} name="initialInvestment"></input>
            </p>
            <p>
                <label>Annual investment</label>
                <input type="number" defaultValue={initialParameters.annualInvestment} onChange={onInputsChange} name="annualInvestment"></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected return</label>
                <input type="number" defaultValue={initialParameters.expectedReturn} onChange={onInputsChange}  name="expectedReturn"></input>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" defaultValue={initialParameters.duration} onChange={onInputsChange}  name="duration"></input>
            </p>
        </div>
    </section>);
}