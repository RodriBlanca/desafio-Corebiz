import React, { useState, useEffect } from 'react';

const NewsletterFormInput = (props) => {

    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if(props.sended) {
        setFocused(false);
        }
    }, [props.sended])
    

    const handleFocus = () => {
        setFocused(true);
    }

  return (
    <div className='input--container'>
        <input placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} required onBlur={handleFocus} pattern={props.pattern} focused={focused.toString()} ref={props.reference} className={props.className}/>
        <span>* {props.errorMessage}</span>
    </div>
  )
}

export default NewsletterFormInput;