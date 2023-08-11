import React from "react";

function EyesOnMe(){
    const [fieldValue, setFieldValue] = React.useState('')
    const handleBlur = (e) => {
        setFieldValue(e.target.value)
        return (
            console.log("Hey! Eyes on me!")
        )
    }
    return (
        <button onFocus={()=> console.log("Good!")} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe