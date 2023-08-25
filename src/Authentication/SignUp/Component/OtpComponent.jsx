import React from 'react'

const OtpComponent = ({ id, previousId, nextId, value, onValueChange, handleSubmit }) => {

    //This callback function only runs when a key is released
    const handleKeyUp = (e) => {
        //check if key is backspace or arrowleft
        if (e.keyCode === 8 || e.keyCode === 37) {
            //find the previous element
            const prev = document.getElementById(previousId);
            if (prev) {
                //select the previous element
                prev.select();
            }
        } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) || //check if key is numeric keys 0 to 9
            (e.keyCode >= 65 && e.keyCode <= 90) || //check if key is alphabetical keys A to Z
            (e.keyCode >= 96 && e.keyCode <= 105) || //check if key is numeric keypad keys 0 to 9
            e.keyCode === 39 //check if key is right arrow key
        ) {
            const next = document.getElementById(nextId);
            if (next) {
                next.select();
            } else {
                const inputGroup = document.getElementById('OTPInputGroup');
                if (inputGroup && inputGroup.dataset['autosubmit']) {
                    handleSubmit();
                }
            }
        }
    }

    return (
        <input
            id={id}
            name={id}
            type="number"
            value={value}
            maxLength="1"
            onChange={(e) => onValueChange(id, e.target.value)}
            onKeyUp={handleKeyUp}
        />
    )
}

export default OtpComponent